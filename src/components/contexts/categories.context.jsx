import SHOP_DATA from '../../shop-data.js'
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';

// import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
    categoriesMap:{},
}) 

console.log("Kuu",SHOP_DATA);

export const CategoriesProvider = ({children}) =>{

    const [categoriesMap,setCategoriesMap] = useState({})


//Used to insert data in Firebase automatically
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])

    console.log("daat",SHOP_DATA);
        const value = {categoriesMap};
    return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
