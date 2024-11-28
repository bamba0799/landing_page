import axiosClient from '../config/axios';


    // Exemple de méthode GET
    const getData = async (endpoint: string, params?: any) => {
        try {
            const response = await axiosClient().get(endpoint, { params });
            return response;
        } catch (error) {
            console.error("Error in ge:", error);
            throw error;
        }
    }

    // Exemple de méthode POST
   const  postData = async (endpoint: string, data: any) => {
        try {
            const response = await axiosClient().post(endpoint, data);
            return response;
        } catch (error) { 
            console.error("Error in postData:", error);
            throw error;
        }
    }

    // Exemple de méthode PUT
    const updateData = async (endpoint: string, data: any) => {
        try {
            const response = await axiosClient().put(endpoint, data);
            return response;
        } catch (error) {
            console.error("Error in updateData:", error);
            throw error;
        }
    }

    // Exemple de méthode DELETE
    const deleteData = async (endpoint: string) => {
        try {
            const response = await axiosClient().delete(endpoint);
            return response;
        } catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
const apiService = {
        getUser: async () => getData("/get"),
        loginUser: async (data: any) => postData("/auth/signIn", data),
        getMembresCo: async () => getData("/membre-co/totalByGender"),
        getSeminariste: async () => getData("/seminariste/totalByGender"),
};

export default apiService;
