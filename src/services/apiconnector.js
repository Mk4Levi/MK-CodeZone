import axios from "axios"

export const axiosInstance = axios.create({});
// connecting to backend api

export const apiConnector = (method, url, bodyData, headers, params) =>{
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData :null,
        headers: headers ? headers: null,
        params: params ? params: null,
    });
}

