// API
import Base from "./base";

class Auth extends Base {
  constructor() {
    super("auth");
  }

  async getProfile() {
    return this.get(`${this.BASE_URI}/me`);
  }

  async login(data) {
    return this.post(`${this.BASE_URI}/login`, data);
  }
}

export const authApi = new Auth();
