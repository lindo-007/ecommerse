import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import { Product } from "../../types/products.type";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
      {
        params: { id: "4" },
      },
      {
        params: { id: "5" },
      },
      {
        params: { id: "6" },
      },
    ],
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
function Product({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <ProductWrapper>
      <figure>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={`picture of ${product.title}`}
        />
      </figure>
      <figcaption>
        <h2>{product.title}</h2>
        <ProductText>{product.title}</ProductText>
        <ProductText>{product.category}</ProductText>
        <ProductText>{product.description}</ProductText>
        <ProductText>R{product.price}</ProductText>
        <ProductText>{product.rating.rate} stars</ProductText>
        <ProductText>{product.rating.count} reviews</ProductText>
        <button>add to cart</button>
      </figcaption>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.section`
  max-width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 570px) {
		flex-direction: column;
	}
`;

const ProductText = styled.p`
  max-width: 30rem;
`;

export default Product;
