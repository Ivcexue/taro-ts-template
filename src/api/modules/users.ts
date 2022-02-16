import request from '../request';

const login = (userName: string, password: string) => {
  return request.post("user/login", {
    userName,
    password,
  });
};

export default {
  login,
};
