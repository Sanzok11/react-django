import axios from 'axios';

const BASE_URL='http://localhost:8000';

export const register=(formData)=>{
    return axios.post(`${BASE_URL}/register/`,formData);
}

export const login = (formData)=>{
    return axios.post(`${BASE_URL}/login/`,formData);
}
