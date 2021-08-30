import axios from "axios";

export function login(loginDados){
    return axios({
        method: "POST",
        url:"http://localhost:8393/login",
        data: loginDados,
    })
}