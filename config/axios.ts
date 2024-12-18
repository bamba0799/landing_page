import axios from "axios";


const axiosClient = ( token: string | null = null): any => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    : {
        "Content-Type": "application/json",
      };

  const client = axios.create({
    baseURL: "ec2-54-205-20-252.compute-1.amazonaws.com:3000",
    headers,
    timeout: 60000,
    withCredentials: false,
  });

  client.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("access_token");
    config.headers = config.headers || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      try {
        const { response } = error;
        if (response?.status === 401) {
          // localStorage.removeItem("access_token");
          alert("Your session has expired. Please login again.");
        // setTimeout(() => {
        //   window.location.href = "/"
        // }, 5000);
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
