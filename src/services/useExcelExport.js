import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";
import { toaster } from "../components/ui/toaster";

const useExcelExport = () => {
  return useMutation(
    async (body) => {
      console.log(body);
      const response = await axiosInstance.post("/export/xlsx", body, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        responseType: "blob",
      });
return response.data;
    },
    {
      onSuccess: (data) => {
        toaster.create({
          title: "Wygenerowano plik",
          type: "success",
        });

        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
link.setAttribute("download", "plik.xlsx"); 
        document.body.appendChild(link);
        link.click();
        link.remove();
      },
      onError: () => {
        toaster.create({
          title: "Wystąpił błąd",
          type: "error",
        });
      },
}
  );
};
export default useExcelExport;