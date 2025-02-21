/** @format */

import DetailProductViews from "@/views/detailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const DetailProductPage = ({ product }: { product: Product }) => {
  const { query } = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // Client Side Rendering
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  return (
    <div>
      {/* Client Side Rendering */}
      {/* <DetailProductViews product={isLoading ? {} : data.data} /> */}
      {/* Server Side Rendering & Static Side Generation */}
      <DetailProductViews product={product} />
    </div>
  );
};

export default DetailProductPage;

// Server Side Rendering
export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();

  return { props: { product: response.data } };
}

// Static Side Generation
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();

//   const paths = response.data.map((product: Product) => ({
//     params: {
//       product: product.id,
//     },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return { props: { product: response.data } };
// }
