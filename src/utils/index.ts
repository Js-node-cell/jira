import { useEffect, useState } from "react";
import { callbackify } from "util";
export const isFaley = (value:unknown) => value === 0 ? false : !value 
export const cleanObject = (object:{[key:string]:unknown}) =>{
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if(isFaley(value)){
            delete result[key]}
    })
    return result;
};

export const useMount = (callback:() => void) => {
    useEffect(()=>{
        callback()
    },[])
}
export const useDebounce = <V>(value:V,delay?:number) => {
    const [debouncedValue,setDebouncedValue] = useState(value)
    useEffect(()=>{
        const timeout = setTimeout(()=>setDebouncedValue(value),delay)
        return () =>clearTimeout(timeout)
    },[value,delay])
    return debouncedValue
}