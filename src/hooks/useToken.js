import { async } from "@firebase/util"
import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect( () =>{
        const getToken = async ()=>{
            const email = user?.user?.email;
           if(email){
            const {data} = await axios.post('https://murmuring-sands-18076.herokuapp.com/login', {email});
            setToken(data.accessToken);
    localStorage.setItem('accessToken', data.accessToken);
           }
        }
        getToken();
    }, [user])
    return [token]
}

export default useToken;