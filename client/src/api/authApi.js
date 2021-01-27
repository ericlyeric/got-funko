import axios from 'axios';

export const login = async (user) =>
  axios
    .post('/login', user)
    .then((res) => res.data)
    .catch(() => ({
      isAuthenticated: false,
      username: undefined,
      message: {
        body: 'Invalid username or password',
        error: true,
      },
    }));

export const register = async (user) =>
  axios.post('/register', user).then((res) => res.data);

export const logout = async () => axios.get('/logout').then((res) => res.data);
