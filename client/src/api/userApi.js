import axios from "axios";

export const isAuthenticated = async () =>
  axios
    .get("/api/user/is-authenticated")
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

export const updateCharacter = async (body) =>
  axios
    .put("/api/user", { data: body })
    .then((res) => res.data)
    .catch(() => console.error("Could not update in database"));
