
import config from 'config';

export const FETCH_ASYNC = Symbol('fetch async');

function combineAction(action, nextAction) {
  const newAction = Object.assign({}, action, nextAction);
  delete newAction[FETCH_ASYNC];
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
function generateHeaders(method, body) {
  // 设置统一的请求头
  let requestHeader = {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
  switch (method) {
    case 'POST':
      requestHeader = {
          ...requestHeader,
         method: "post",
         body: generateFormData(body)
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
  return requestHeader;
}
function generateAsync(record, fn) {
  const params = fn(record.result);
  let endpoint = record.endpoint;
  let headers = { ...record.headers };
  if (record.headers === 'GET') {
    endpoint = generateParams(endpoint, params);
  } else if (record.headers === 'POST') {
    headers = {
      ...headers,
      body: generateFormData(params)
    };
  }
  return {endpoint, headers};
}
function fetchAPI(endpoint, parameter) {

  let [endpoint_0, endpoint_1] = [endpoint[0], endpoint[1]];
  let origin_0 = config.origin.interior;
  let origin_1 = config.origin.interior;
  if (parameter.origin[0] && typeof parameter.origin[0] === 'boolean') {
    origin_0 = config.origin.external;
  } else if (parameter.origin[0] && parameter.origin[0] instanceof Object) {
    origin_0 = parameter.origin[0]
  } else if (parameter.origin[0] && parameter.origin[0] instanceof String) {
    origin_0 = config.origin[parameter.origin[0]];
  }
  if (parameter.origin[1] && typeof parameter.origin[1] === 'boolean') {
    origin_1 = config.origin.external;
  } else if (parameter.origin[1] && parameter.origin[1] instanceof Object) {
    origin_1 = parameter.origin[1]
  } else if (parameter.origin[1] && parameter.origin[1] instanceof String) {
    origin_1 = config.origin[parameter.origin[1]];
  }
  endpoint_0 = parameter.params ? generateParams(endpoint_0, parameter.params) : endpoint_0;
  endpoint_0 = `${origin_0.domain}${endpoint_0}`;
  endpoint_1 = parameter.params ? generateParams(endpoint_1, parameter.params) : endpoint_1;
  endpoint_1 = `${origin_1.domain}${endpoint_1}`;
  let requestHeader_0 = generateHeaders(parameter.method[0], parameter.method[0].body);
  let requestHeader_1 = generateHeaders(parameter.method[1], parameter.method[1].body);
  return fetch(endpoint_0, requestHeader_0)
    .then(response => {
        return response.json().then(json => ({ json, response}))
      }).then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject({ message: "http is error" });
      } else if (json.code != origin_0.code) {
        return Promise.reject({ message: json[origin_0.response] })
      } else {
        const record = generateAsync({
          endpoint: endpoint_1,
          headers: parameter.method[1],
          result: json[origin_0.response],
        }, parameter.callBack)
        // entrance(response2, parameter.relevancy);
        /** --- begin 发起第二次请求*/
        return fetch(record.endpoint, record.headers)
        .then(response2 => {
          return response2.json().then(json2 => ({ json2, response2}))
        }).then(({json2, response2}) => {
          if (!response2.ok) {
            return Promise.reject({ message: "http fetch two is error" });
          } else if (json2.code != origin_1.code) {
            return Promise.reject({ message: "http fetch two is error" });
          }
          return { preResp: json[origin_0.response], recResp:json2[origin_1.response]}
        })
        /** --- end 发起第二次请求 */
      }
    })
}

export default store => next => action => {
  const rule = action[FETCH_ASYNC];
  if (typeof rule === "function" || typeof rule === "undefined") {
    return next(action);
  }
  const [requestStatus, successStatus, failureStatus] = rule.types;
  return fetchAPI(rule.endpoint, rule).then(
    resp => {
      next(combineAction(
        action,
        { resp, type: successStatus }
      ))

    },
    error => next(combineAction(
      action,
      { type: failureStatus }
    ))
  );
}
