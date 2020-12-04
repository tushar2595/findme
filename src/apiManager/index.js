import axios from "axios";
import { dispatchAction } from "../redux/store/index";
import { loginSuccess } from "../redux/action/UserAction";
class APIManager {
  constructor() {

    this.axiosInstance = axios.create({
      baseURL: "https://reqres.in/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        //"auth-token": tok,
        //'Content-Type': 'multipart/form-data'
      },
    });
  }
 
  login = (param) => {
    return new Promise((resolve, reject) => {
        console.log(param,'param');
      this.axiosInstance
        .post("login", param)
        .then((response) => {
        // dispatchAction(loginSuccess(response));
          resolve(response);
          console.log(response,'api');
       
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new APIManager();








