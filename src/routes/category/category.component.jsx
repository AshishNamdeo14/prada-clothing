import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../components/contexts/categories.context';
import './category.styles.scss';

const Category = () => {
  const { categories } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[categories]);

console.log("category",categoriesMap[categories]);
  useEffect(() => {
    setProducts(categoriesMap[categories]);
  }, [categories, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{categories.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;