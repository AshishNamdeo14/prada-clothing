import { CategoriesContext } from '../../components/contexts/categories.context';
import {  useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () =>{
    const {categoriesMap} = useContext(CategoriesContext)
   return(
    <div >
        {
            Object.keys(categoriesMap).map((title) =>
                {
                    const products = categoriesMap[title]
                    return(
                       <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                    )
                }
            )}
    </div>
   ) 
}

export default CategoriesPreview;