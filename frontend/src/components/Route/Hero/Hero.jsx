import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Rolex <br /> A crown for every achievement
        </h1>
        <p className="pt-5 text-[20px] font-[Noto Serif] font-[5400] text-[#000000ba]">
          
               Chào mừng bạn đến với cửa hàng trực tuyến chuyên về đồng hồ Rolex của chúng tôi! <br />Chúng tôi mang đến nhiều lựa chọn đồng hồ Rolex chính hãng. <br />Hãy mua ngay bây giờ để nâng tầm phong cách của bạn với chiếc đồng hồ Rolex danh giá.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Arial] text-[18px]">
                    Cửa hàng
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
