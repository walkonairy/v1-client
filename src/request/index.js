import axios from "axios";

export function axiosRequest(url, method, data, options) {
  return new Promise((resolve, reject) => {
    axios[method](url, data, options)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
