import styled from "styled-components";
import Categories from "../components/Categories";
import DisplayProducts from "../components/Products";
import { Products } from "../types/products.type";
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products = await res.json();

  return { props: { products } };
};

export default function Home({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeContainer>
      {/* <Categories /> */}
      <DisplayProducts products={products} />
    </HomeContainer>
  );
}
const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
