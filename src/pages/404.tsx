/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import styles from "@/styles/errors.module.scss";
import Image from "next/image";

const CustomNotFound = () => {
  return (
    <div>
      <h1 className={styles.error}>
        {/* <img
          src="/not-found.png"
          alt="404 Not Found"
          className={styles.error__image}
        /> */}
        <Image
          src="/not-found.png"
          alt="404 not found"
          width={600}
          height={400}
        />
        Halaman Tidak Ditemukan
      </h1>
    </div>
  );
};

export default CustomNotFound;
