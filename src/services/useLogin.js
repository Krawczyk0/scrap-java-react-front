import { useMutation } from "react-query"
import axiosInstance from "./axiosInstance"
import { toaster } from "../components/ui/toaster";

const useLogin=() => {
    return useMutation (
        async (body) =>{
            const response =await axiosInstance.post("/auth/login", body);
            const data= response.data;
            localStorage.setItem("token", data.token);
            return data
        },

        {
            onSuccess:(data) =>{
               toaster.create({
                title: data.message,
                type: data.status,
               });

               
            },
            onError:(err) =>{
                const res=err.response.data
                toaster.create({
                    title: res.message,
                    type: res.status,
                   });
                }
        }
    )
}
export default useLogin