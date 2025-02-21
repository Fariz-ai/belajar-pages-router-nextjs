/** @format */

import styles from "./ProductDetail.module.scss";

type Products = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const DetailProductViews = ({ product }: { product: Products }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(product.price)}
        </p>
      </div>
    </>
  );
};

export default DetailProductViews;
