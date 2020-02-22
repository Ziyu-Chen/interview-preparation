/*
Source: https://github.com/haizlin/fe-interview/issues/36
Wirte a function for accessing the query parameters in a url string

来源：https://github.com/haizlin/fe-interview/issues/36
写一个获取当前url查询字符串中的参数的方法
*/

/*
Query parameters can also be accessed using window.location.search.
*/

const getQueryParameters = (url = "") => {
  const result = {};
  const qi = url.indexOf("?");
  if (qi === -1) return result;
  url
    .slice(qi + 1)
    .split("&")
    .forEach(pair => {
      const [key, value] = pair.split("=");
      result[key] = value;
    });
  return result;
};

module.exports = { getQueryParameters };
