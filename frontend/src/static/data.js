import { convertDollarsToVnd } from "../utils/App";

// navigation Data
export const navItems = [
    {
      title: "Trang chủ",
      url: "/",
    },
    {
      title: "Sản phẩm",
      url: "/products",
    },
    {
      title: "Sự kiện",
      url: "/events",
    },
    {
      title: "Hỏi đáp",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Miễn phí vận chuyển",
      Description: `Với các đơn hàng trên 1,000,000VNĐ`,
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H5.63636V24.1818H35"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M34.9982 1H11.8164V18H34.9982V1Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M11.8164 7.18164H34.9982"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Ưu đãi bất ngờ hàng ngày",
      Description: "Tiết kiệm tới 15%",
      icon: (
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M30.7 2L29.5 10.85L20.5 9.65"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Giá cả phải chăng",
      Description: "Nhận giá trực tiếp từ Nhà sản xuất",
      icon: (
        <svg
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 28V22"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Thanh toán an toàn",
      Description: "Thanh toán được bảo mật 100%",
      icon: (
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
  ];
  
  // categories data
  export const categoriesData = [
    {
      id: 1,
      title: "Rolex Datejust",
      subTitle: "",
      image_Url:
        "https://cdn.shopify.com/s/files/1/0573/7431/0539/products/DSC09354.jpg?v=1677168216",
    },
    {
      id: 2,
      title: "Rolex Oyster Perpetual",
      subTitle: "",
      image_Url:
        "https://bandonghocu.com.vn/wp-content/uploads/2022/09/IMG-9366.jpg",
    },
    {
      id: 3,
      title: "Rolex Sky-Dweller",
      subTitle: "",
      image_Url:
        "https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dwea6f4450/rolex/2023/watch_assets_front_facing/landscape_assets/m336934-0001_modelpage_front_facing_landscape.png",
    },
    {
      id: 4,
      title: "Rolex Day-Date",
      subTitle: "",
      image_Url:
        "https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-front-facing/landscape_assets/m128238-0008_modelpage_front_facing_landscape.png",
    },
    {
      id: 5,
      title: "Rolex Cellini",
      subTitle: "",
      image_Url:
        "https://luxshopping.vn/Uploads/News/rolex-cellini-50525-0015-watch-39.png",
    },
    // {
    //   id: 6,
    //   title: "Rolex Explorer",
    //   subTitle: "",
    //   image_Url:
    //     "https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dw1c37fdba/rolex/2023/watch_assets_front_facing/landscape_assets/m124270-0001_modelpage_front_facing_landscape.png",
    // },
    // {
    //   id: 7,
    //   title: "Rolex Submariner",
    //   subTitle: "",
    //   image_Url: "https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dw4a5164a8/rolex/2023/watch_assets_front_facing/landscape_assets/m126610ln-0001_modelpage_front_facing_landscape.png",
    // },
    // {
    //   id: 8,
    //   title: "Rolex Cosmograph Daytona",
    //   subTitle: "",
    //   image_Url:
    //     "https://www.benbridge.com/on/demandware.static/-/Sites-bbj-master-catalog/default/dw1df373d0/rolex/2023/watch_assets_front_facing/landscape_assets/m126500ln-0001_modelpage_front_facing_landscape.png",
    // },
    // {
    //   id: 9,
    //   title: "Rolex Sea-Dweller",
    //   subTitle: "",
    //   image_Url:
    //     "https://www.swissluxury.com/product_images/126600.jpg",
    // },
    // {
    //   id: 10,
    //   title: "Rolex Milgauss",
    //   subTitle: "",
    //   image_Url:
    //     "https://watchbox-blog.imgix.net/wp-content/uploads/2021/10/Rolex-Milgauss-Sweepstakes-116400GV-Black-Dial.jpg?max-w=1024&q=50&auto=format,compress&usm=10&usmrad=3",
    // },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category:"Rolex Datejust",
      name: "Rolex Datejust 36",
      description:
        "The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, in gold on this Datejust 36.",
      image_Url: [
        {
          public_id: "test",
          url: "https://favpng.com/png_view/watches-image-rolex-datejust-rolex-day-date-watch-jewellery-png/vSrNnRmw",
        },
        {
          public_id: "test",
          url: "https://favpng.com/png_view/watches-image-rolex-datejust-rolex-day-date-watch-jewellery-png/vSrNnRmw",
        },
      ],
      shop: {
        name: "Rolex",
        shop_avatar: {
          public_id: "test",
          url: "https://favpng.com/png_view/watches-image-rolex-datejust-rolex-day-date-watch-jewellery-png/vSrNnRmw",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 5,
      total_sell: 35,
      stock: 10,
    },
    {
      id: 2,
      category:"Rolex Oyster Perpetual",
      name: "Rolex Oyster Perpetual 41",
      description:
        "The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial.Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist. Once the sunray finish has been completed, the dial colour is applied using Physical Vapour Deposition or electroplating. A light coat of varnish gives the dial its final look.",
      image_Url: [
        {
          public_id: "test",
          url: "https://bandonghocu.com.vn/wp-content/uploads/2022/09/IMG-9366.jpg",
        },
        {
          public_id: "test",
          url: "https://bandonghocu.com.vn/wp-content/uploads/2022/09/IMG-9366.jpg",
        },
      ],
      shop: {
        name: "Rolex",
        shop_avatar: {
          public_id: "test",
          url: "https://bandonghocu.com.vn/wp-content/uploads/2022/09/IMG-9366.jpg",
        },
        ratings: 4.8,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "Về chúng tôi",
      link: "/about"
    },
    
    {
      name: "Cửa hàng",
    },
    {
      name: "Bài viết",
    },
    {
      name: "Đánh giá",
    },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Rolex and Motor Sport",
    },
    {
      name: "Rolex and Tennis",
    },
    {
      name: "Rolex and Goft",
    },
    {
      name: "Rolex and Yachting",
    },
    {
      name: "Rolex and Equestrianism",
    },
  ];
  
  export const footerSupportLinks = [
    {
      name: "Hỏi đáp",
    },
    {
      name: "Đánh giá",
    },
    {
      name: "Liên hệ",
    },
    {
      name: "Giao hàng",
    },
    
  ];
    