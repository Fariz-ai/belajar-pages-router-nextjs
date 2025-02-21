/** @format */

import { useRouter } from "next/router";
import React from "react";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Page</h1>
      <p>
        Shop:{" "}
        {`${query.shop ? query.shop[0] : ""} - ${
          query.shop ? query.shop[1] : ""
        }`}
      </p>
    </div>
  );
};

export default ShopPage;
