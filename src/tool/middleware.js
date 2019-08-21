
import config from 'config';

export const FETCH_API = Symbol('fetch API');

function combineAction(action, nextAction) {
  const newAction = Object.assign({}, action, nextAction);
  delete newAction[FETCH_API];
  return newAction;
}
// 处理  params
function generateParams(url, params) {
  let paramsArray = Object.keys(params).map((item) => (`${item}=${params[item]}` ));
  let urlEncode = paramsArray.join("&")
  return `${url}?${urlEncode}`;
}

function generateFormData(data) {
  if (!data) {
		return '';
	}

	if (data instanceof FormData) {
		return data;
	}

	const newData = Object.keys(data).map(key => `${key}=${data[key]}`);
	return newData.join('&');
}

function fetchAPI(endpoint, parameter) {
  // 设置统一的请求头
  let requestHeader = {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
  let origin = config.origin.interior;
  if (parameter.origin && typeof parameter.origin === 'boolean') {
    origin = config.origin.external;
  } else if (parameter.origin && parameter.origin instanceof Object) {
    origin = parameter.origin
  } else if (parameter.origin && parameter.origin instanceof String) {
    origin = config.origin[parameter.origin];
  }
  switch (parameter.method) {
    case 'POST':
      requestHeader = {
          ...requestHeader,
         method: "post",
         body: generateFormData(parameter.body)
      }
      break;
    case 'PUT':
      requestHeader = {
        ...requestHeader,
        method: "put",
        body: generateFormData(parameter.body)
      }
      break;
    case 'DELETE':
      requestHeader = {
        ...requestHeader,
        method: 'delete'
      }
      break;
    case 'GET':
      requestHeader = {
        ...requestHeader,
        method: 'GET'
      }
      break;
    default:
  }

  endpoint = parameter.params ? generateParams(endpoint, parameter.params) : endpoint;
  endpoint = `${origin.domain}${endpoint}`;
  return fetch(endpoint, requestHeader)
    .then(response => {
        return response.json().then(json => ({ json, response}))
      }
    ).then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject({ message: "http is error" });
      } else if (json.code != origin.code) {
        return Promise.reject({ message: json[origin.response] })
      }
      return json[origin.response]
    })
}

export default store => next => action => {
  console.log('ddddd', store.getState());
  const rule = action[FETCH_API];
  if (typeof rule === "function" || typeof rule === "undefined") {
    return next(action);
  }
  const [requestStatus, successStatus, nullStatus, failureStatus] = rule.types;
  return fetchAPI(rule.endpoint, rule).then(
    resp => next(combineAction(
      action,
      { resp, type: successStatus,  state: store.getState()}
    )),
    error => next(combineAction(
      action,
      { type: failureStatus }
    ))
  );
}
