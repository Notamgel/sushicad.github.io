// Config
import { config } from "../config";

export abstract class Base {
  BASE_URI: string;

  constructor(baseURI: string) {
    this.BASE_URI = baseURI;
  }

  protected async fetchData<T>(
    uri: string,
    method: string,
    data?: T,
    isFormData: boolean = false
  ) {
    const token = localStorage.getItem("token");
    const options: RequestInit = {
      method: method,
      headers: {},
    };

    if (data) {
      if (isFormData) {
        options.body = data as unknown as FormData;
      } else {
        options.body = JSON.stringify(data);
        options.headers = {
          "Content-Type": "application/json",
        };
      }
    }

    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await fetch(`${config.API_URL}/${uri}`, options);

    if (response.status === 401) {
      localStorage.setItem("token", "");
      window.location.href = "/";
      return;
    }

    return response.json();
  }

  protected async post<T>(uri: string, data: T, isFormData: boolean = false) {
    return this.fetchData(uri, "POST", data, isFormData);
  }

  protected async put<T>(uri: string, data: T, isFormData: boolean = false) {
    return this.fetchData(uri, "PUT", data, isFormData);
  }

  protected async get(uri: string) {
    return this.fetchData(uri, "GET");
  }

  protected async delete(uri: string) {
    return this.fetchData(uri, "DELETE");
  }

  async create<T>(data: T, isFormData: boolean = false) {
    return this.post(this.BASE_URI, data, isFormData);
  }

  async detail(id: string) {
    return this.get(`${this.BASE_URI}/${id}`);
  }

  async destroy(id: string) {
    return this.delete(`${this.BASE_URI}/${id}`);
  }

  async update<T>(id: string, data: T, isFormData: boolean = false) {
    return this.put(`${this.BASE_URI}/${id}`, data, isFormData);
  }

  async list(currentPage: number, count: number) {
    return this.get(`${this.BASE_URI}?page=${currentPage}&count=${count}`);
  }
}
