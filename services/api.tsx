import { get } from 'axios';
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
        getMembresCo: async () => getData("/membre-co/totalByGender"),
        getSeminariste: async () => getData("/seminariste/totalByGender"),
        getDortoir: async () => getData("/dortoirs/totaldortoirBytype"),
        getCommission: async () => getData("/commission/totalByGender"),
        addMembereCo: async (data: any) => postData("/membre-co/add", data),
        getAllDortoir: async () => getData("/dortoirs"),
        addSeminariste: async (data: any) => postData("/seminariste/add", data),
        deleteSeminariste: async (id: any) => deleteData("/seminariste/delete", id),
        updateSeminariste: async (id:any,data: any) => updateData("/seminariste/update", id, data),
        getStatistiqueSeminariste: async () => getData("/seminariste/totalByCateg"),
        addNiveau: async (data: any) => postData("/niveau/add", data),
        getNiveau: async () => getData("/niveau/all"),
        getSeminaristeById: async (seminaristeId: any) => getDataById(`/seminariste/getone`, seminaristeId),


        // dortoir
        getDortoirList: async () => getData("/dortoirs/listeDortoir"),
        addDortoir: async (data: any) => postData("/dortoirs/add", data),
        deleteDortoir: async (id: any) => deleteData("/dortoirs/delete", id),
        updateDortoir: async (id:any,data: any) => updateData("/dortoirs/update", id, data),
        getDortoirById: async (dortoirId: any) => getDataById(`/dortoirs/getone`, dortoirId),
        getTotalDortoirByType: async () => getData("/dortoirs/totaldortoirBytype"),
        getTotalDortoirByGenre: async () => getData("/dortoirs/totaldortoirByGenre"),

}; 

export default apiService;
