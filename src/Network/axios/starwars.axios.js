import { baseUrl } from "../apis/baseUrl";
import axios from 'axios'

var starWarsAxiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  /* other custom settings */
});

// Request and Response interceptors goes here

export default starWarsAxiosInstance;
