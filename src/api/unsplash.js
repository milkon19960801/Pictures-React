import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NrWVG3uoZCrhN3NU2b4nRzlVnJgHnlHFsaas1a4we6o",
  },
});
