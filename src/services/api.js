import axios from "axios";

const api = axios.create({
  baseURL: "https://prefplus.com/api_rec_humanos/api/dashboard/APIObterLocais.php",
});

export default api;