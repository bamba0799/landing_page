import axios from "axios";

const axiosClient = (token: string | null = null): any => {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",  // Spécifie JSON
        }
      : {
          "Content-Type": "application/json",  // Spécifie JSON
        };
  
    const client = axios.create({
      baseURL: "http://localhost:3005",
      headers,
      timeout: 60000,
      withCredentials: false,
    });
  
    client.interceptors.request.use((config: any) => {
      const token = localStorage.getItem("ACCESS_TOKEN");
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  
    client.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        try {
          const { response } = error;
          if (response?.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
          }
        } catch (e) {
          console.error(e);
        }
        throw error;
      }
    );
  
    return client;
  };
  

export default axiosClient;