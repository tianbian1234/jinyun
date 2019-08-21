export const getDateDiff = function(dateTimeStamp) {
  let result = null;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  const yearC = diffValue  / (12 * month);
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  if (yearC >= 1) {
    return `${parseInt(yearC)}年前`;
  } else if (monthC >= 1) {
    return `${parseInt(monthC)}月前`;
  } else if (weekC >= 1) {
    return `${parseInt(weekC)}周前`;
  } else if (dayC >= 1) {
    return `${parseInt(dayC)}天前`;
  } else if (hourC >= 1) {
    return `${parseInt(hourC)}小时前`;
  } else if (minC >= 1) {
    return `${parseInt(minC)}分钟前`;
  } else {
    return '刚刚'
  }
}

export const formatDate = function (timestamp,type) {
  const date = new Date(timestamp * 1)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return  type ? `${year}-${month}-${day}` : `${year}年${month}月${day}日`;
}

export const dateFmt = function (timestamp, fmt) {
  let date = new Date(timestamp * 1);
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o){
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }

  return fmt;
}
