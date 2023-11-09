import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import { Product } from "../../types/products.type";
import AddToCart from "../../components/AddToCart";
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
  return (
    <ProductWrapper>
      <ProductImage>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={`Product image of ${product.title}`}
        />
      </ProductImage>
      <ProductDetails>
        <h2>{product.title}</h2>
        <ProductText>{product.category}</ProductText>
        <ProductText>{product.description}</ProductText>
        <ProductText>R{product.price}</ProductText>
        <ProductText>
          {product.rating.rate} stars | {product.rating.count} reviews
        </ProductText>
        <AddToCart product={product}></AddToCart>
      </ProductDetails>
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

const ProductImage = styled.figure`
  flex: 1;
  margin-right: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const ProductDetails = styled.figcaption`
  flex: 2;
`;

const ProductText = styled.p`
  max-width: 30rem;
`;

export default Product;
