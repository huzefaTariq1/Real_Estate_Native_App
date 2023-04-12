import client from "./client";

const login=(type,email,password)=>client.post('/api/user/login',{type,email,password})


export default {
    login
}