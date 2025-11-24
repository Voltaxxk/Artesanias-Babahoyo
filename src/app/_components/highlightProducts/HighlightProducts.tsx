import React from 'react'
import styles from './styles.module.css'
import TitleDescription from '../Shared/TitleDescription/TitleDescription';
import ProductCard from '../Shared/ProductCard/ProductCard';


const HighlightProducts = () => {
  return (
    <div className={styles.highlightProductsContainer}>
        <TitleDescription />
        <ProductCard />
    </div>
  )
}

export default HighlightProducts