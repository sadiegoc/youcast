import axios from "axios";

export default axios.create({
    baseURL: `${process.env.SERV_URL}:${process.env.SERV_PORT}/auth`,
    headers: {
        "Content-Type": "application/json"
    }
});