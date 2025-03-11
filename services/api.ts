import axiosClient from '../config/axios';


    // Exemple de méthode GET


    const getData = async (endpoint: string, params?: any) => {
        console.log("params", params);
        const access_token = localStorage.getItem("access_token") as string; ;
        try {
            const response = await axiosClient(access_token).get(endpoint, { params });
            return response;
        } catch (error) {
            console.error("Error in ge:", error);
            throw error;
        }
    }

    // Exemple de méthode POST
   const  postData = async (endpoint: string, data: any) => {
    console.log("data", data);
    const access_token = localStorage.getItem("access_token");
        try {
            const response = await axiosClient(access_token).post(endpoint, data); 
            return response;
        } catch (error) { 
            console.error("Error in postData:", error);
            throw error;
        }
    }



 
const apiService = {
        getUser: async () => getData("/get"),
        loginUser: async (data: any) => postData("/auth/signIn", data),

}; 

export default apiService;
