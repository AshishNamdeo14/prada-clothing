import { useEffect } from "react";
import { createContext , useState } from "react";
import { onAuthChangedListener ,creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentState:null,
    setCurrentState: () => null
})

export const UserProvider = ({children}) =>{
    const [currentState,setCurrentState] = useState(null);
    const value = {currentState,setCurrentState}

    useEffect(()=>{
        const unsubscribe = onAuthChangedListener((user)=>{
            console.log(user)
            if(user){
             creatUserDocumentFromAuth(user);
            }
            setCurrentState(user)
        });
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}