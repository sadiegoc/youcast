import http from "@/http";

class MiddlewareService {
    authorization (token) {
        const config = { headers: { authorization: "Bearer " + token } };
        return http.get('/authorization', config);
    }
}

export default new MiddlewareService();