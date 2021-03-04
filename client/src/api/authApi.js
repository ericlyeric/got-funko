import axios from "axios";

export const login = async (user) =>
  axios
    .post("/api/login", user)
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
      message: {
        body: "Invalid username or password",
        error: true,
      },
    }));

export const register = async (user) =>
  axios.post("/api/register", user).then((res) => res.data);

export const logout = async () =>
  axios.get("/api/logout").then((res) => res.data);
