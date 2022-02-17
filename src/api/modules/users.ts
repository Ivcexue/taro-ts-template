import request from '../request';

const login = (userName: string, password: string) => {
  return request("/test", {
    method: 'get',
    params: {
      userName,
      password
    }
  });
};

export default {
  login,
};
