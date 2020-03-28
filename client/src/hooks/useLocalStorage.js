import {useState} from 'react'


const useLocalStorage = (key, init) => {
    const[stored, setStored] =  useState(() => {
        if(window.localStorage.getItem(key)){
        return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(init))
    return init
})

const setVal = value => {
    setStored(value)
    window.localStorage.setItem(key, JSON.stringify(value))
};

return[stored, setVal]

}

export default useLocalStorage