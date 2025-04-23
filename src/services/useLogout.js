import { toaster} from "../components/ui/toaster";

const useLogout =() =>{
    localStorage.removeItem("token");
    toaster.create({
        title:"Pomyslnie wylogowano",
        type:"success"
    })
}


export default useLogout;