import http from "@/http";

class AuthService {
    register (user) {
        return http.post('/register', user);
    }

    login (user) {
        return http.post('/login', user);
    }
}

export default new AuthService();