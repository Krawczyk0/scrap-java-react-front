import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";
import { toaster } from "../components/ui/toaster";

const useSearch = () => {
  return useMutation(
    async (body) => {
      const response = await axiosInstance.post(
        "/scrap/get-by-title", 
        body,
        {
        headers: {
            "Authorization" : "Bearer " + localStorage.getItem("token")
        },
});
      return response.data;
    },
    {
        onSuccess: (data) => {
          toaster.create({
            title: data.message,
            type: data.status,
          });
        },
        onError: (error) => {
          toaster.create({
            title: error.response?.data?.message,
            type: error.response?.data?.status,
          });
        },
      }
        
  );
};

export default useSearch;