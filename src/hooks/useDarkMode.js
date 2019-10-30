import { useLocalStorage } from "./LocalStorage"
import { useEffect } from "react"



export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body')
    useEffect(()=>{
        if(value) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode');
        }
        
    }, [value])
    return [value, setValue]
}
