import axios from 'axios';

export const isAuthenticated = async () =>
  axios
    .get('/user/is-authenticated')
    .then((res) => res.data)
    .catch(() => ({
      isAuthenticated: false,
      id: null,
      name: undefined,
      characters: {
        want: [],
        have: [],
        all: [],
      },
    }));

export const updateCharacter = async (body) => {
  axios
    .put('/user', { data: body })
    .then((res) => res.data)
    .catch(() => console.error('Could not update in database'));
};
