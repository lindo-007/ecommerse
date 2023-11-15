import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import { Product } from "../../types/products.type";
import AddToCart from "../../components/AddToCart";

const rooturl = "https://fakestoreapi.com";
const ProductsEndpoint = "/products";
const numberOfProducts = 20;
const currency = "R";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getStaticPaths = async () => {
  const paths = [];

  for (let i = 1; i <= numberOfProducts; i++) {
    paths.push({
      params: { id: `${i}` },
    });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();
  return { props: { product } };
};
//make global price
function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="w-11/12 flex flex-col justify-around md:flex-row md:items-center">
        <figure className="flex items-center justify-center my-5 md:flex-1" >
          <Image
            src={product.image}
            width={200}
            height={285}
            alt={`Product image of ${product.title}`}
          />
        </figure>
        <figcaption className="md:flex-1 my-5 ">
          <h2 className="text-3xl text-blue-300 mb-3">{product.title}</h2>
          <p className="text-xl mb-3">{product.category}</p>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">
            {currency}
            {product.price}
          </p>
          <p className="mb-2">
            {product.rating.rate} stars | {product.rating.count} reviews
          </p>
          <AddToCart product={product}></AddToCart>
        </figcaption>
    </section>
  );
}

const ProductContainer = styled.section`
  /* max-width: 100%;
  display: flex;
  flex: 1;
  margin: auto; */
`;

const ProductContent = styled.section`
  /* display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85%;
  margin: auto;

  @media (max-width: 700px) {
    flex-direction: column;
  } */
`;

const ProductImage = styled.figure`
  /* flex: 1;
  margin-right: 2rem;

  img {
    width: 100%;
    height: auto;
  } */
`;

const ProductDetails = styled.figcaption`
  /* flex: 2; */
`;

const ProductText = styled.p`
  /* max-width: 30rem; */
`;

export default ProductPage;
