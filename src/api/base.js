// Config
import { config } from "../config";

class Base {
  constructor(baseURI) {
    if (new.target === Base) {
      throw new Error("Cannot instantiate abstract class Base directly.");
    }
    this.BASE_URI = baseURI;
  }

  async fetchData(uri, method, data = null, isFormData = false) {
    const token = localStorage.getItem("token");
    const options = {
      method: method,
      headers: {},
    };

    if (data) {
      if (isFormData) {
        options.body = data;
      } else {
        options.body = JSON.stringify(data);
        options.headers["Content-Type"] = "application/json";
      }
    }

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${config.API_URL}/${uri}`, options);

    if (response.status === 401) {
      localStorage.setItem("token", "");
      window.location.href = "/";
      return;
    }

    return response.json();
  }

  async post(uri, data, isFormData = false) {
    return this.fetchData(uri, "POST", data, isFormData);
  }

  async put(uri, data, isFormData = false) {
    return this.fetchData(uri, "PUT", data, isFormData);
  }

  async get(uri) {
    return this.fetchData(uri, "GET");
  }

  async delete(uri) {
    return this.fetchData(uri, "DELETE");
  }

  async create(data, isFormData = false) {
    return this.post(this.BASE_URI, data, isFormData);
  }

  async detail(id) {
    return this.get(`${this.BASE_URI}/${id}`);
  }

  async destroy(id) {
    return this.delete(`${this.BASE_URI}/${id}`);
  }

  async update(id, data, isFormData = false) {
    return this.put(`${this.BASE_URI}/${id}`, data, isFormData);
  }

  async list(currentPage, count) {
    return this.get(`${this.BASE_URI}?page=${currentPage}&count=${count}`);
  }
}

export default Base;
