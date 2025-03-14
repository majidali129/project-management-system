class ApiService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}

export const api = new ApiService("https://localhost:3000/api");
