import axiosClient from '../config/axios';


    // Exemple de méthode GET

    const getDataById = async (endpoint: string, id?:any, params?: any) => {
        console.log("idInAxios", id);
        
        const access_token = localStorage.getItem("access_token") as string; ;
        try {
            const response = await axiosClient(access_token).get(`${endpoint}/${id}`, { params });
            return response;
        } catch (error) {
            console.error("Error in ge:", error);
            throw error;
        }
    }
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

    // Exemple de méthode PUT
    const updateData = async (endpoint: string, id:any, data: any) => {
        console.log("idInAxios", id);
        
        const access_token = localStorage.getItem("access_token");
        try {
            const response = await axiosClient(access_token).patch(`${endpoint}/${id}`, data);
            return response;
        } catch (error) {
            console.error("Error in updateData:", error);
            throw error;
        }
    }

    // Exemple de méthode DELETE
    const deleteData = async (endpoint: string,id:any) => {
        const access_token = localStorage.getItem("access_token");
        try {
            const response = await axiosClient(access_token).delete(`${endpoint}/${id}`);
            return response;
        } catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
const apiService = {
        getUser: async () => getData("/get"),
        loginUser: async (data: any) => postData("/auth/signIn", data),
        getMembresCo: async () => getData("/membres"),

}; 

export default apiService;
