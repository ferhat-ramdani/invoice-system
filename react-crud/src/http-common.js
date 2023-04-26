/* 
axios is a library that makes HTTP requests, it behaves sort
of like Postman.
*/
import axios from "axios";

export default axios.create({ //returns an instance of axios
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});