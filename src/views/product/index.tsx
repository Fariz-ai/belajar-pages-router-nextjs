/** @format */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

type Products = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductViews = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR<{ data: Products[] }>(
    "/api/product",
    fetcher
  );

  useEffect(() => {
    if (!isLogin) push("/auth/login");
  }, [isLogin, push]);

  if (error) {
    <p>Tidak ada produk.</p>;
  }

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {isLoading ? (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__item}>
              <div className={styles.product__content__skeleton__image} />
              <div className={styles.product__content__skeleton__name} />
              <div className={styles.product__content__skeleton__category} />
              <div className={styles.product__content__skeleton__price} />
            </div>
          </div>
        ) : (
          <>
            {data?.data.length! > 0
              ? data!.data.map((product) => (
                  <Link
                    href={`product/${product.id}`}
                    key={product.id}
                    className={styles.product__content__item}>
                    <div className={styles.product__content__item__image}>
                      {/* <img src={product.image} alt={product.name} /> */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={400}
                      />
                    </div>
                    <h4 className={styles.product__content__item__name}>
                      {product.name}
                    </h4>
                    <p className={styles.product__content__item__category}>
                      {product.category}
                    </p>
                    <p className={styles.product__content__item__price}>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(product.price)}
                    </p>
                  </Link>
                ))
              : error}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductViews;
