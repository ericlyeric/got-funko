import axios from 'axios';

export const isAuthenticated = async () =>
  axios
    .get('/user/is-authenticated')
    .then((res) => res.data)
    .catch(() => ({
      isAuthenticated: false,
      username: undefined,
    }));

export const filler = () => ({ filler: 'filler' });
