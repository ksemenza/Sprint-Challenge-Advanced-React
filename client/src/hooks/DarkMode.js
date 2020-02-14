import{useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

const DarkMode =() => {
    const[dark, setDark] = useLocalStorage('darkSetting', false)

    useEffect(()=> {
        const bodEl = document.querySelector('body')
        if(dark === true) {
            bodEl.classList.add('dark-mode')
        } else {
            bodEl.classList.remove('dark-mode')
        }
    }, [dark])
    
    return[dark, setDark]
}

export default DarkMode