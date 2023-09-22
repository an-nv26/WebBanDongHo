import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const allProductsDataWithRating = allProductsData?.sort((a, b) => {
      const ratingA = a.reviews.reduce((total, curr) => {
        return total + curr.rating;
      }, 0)
      const ratingB = b.reviews.reduce((total, curr) => {
        return total + curr.rating;
      }, 0)
      
      return ratingB - ratingA;
    })

    console.log(allProductsDataWithRating);
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(allProductsDataWithRating);
  }, [allProducts]);
  

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Sản phẩm bán chạy</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.slice(0, 5).map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
