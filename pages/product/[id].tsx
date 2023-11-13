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
function Product({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ProductContainer>
      <ProductContent>
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
          <ProductText>
            {currency}
            {product.price}
          </ProductText>
          <ProductText>
            {product.rating.rate} stars | {product.rating.count} reviews
          </ProductText>
          <AddToCart product={product}></AddToCart>
        </ProductDetails>
      </ProductContent>
    </ProductContainer>
  );
}

const ProductContainer = styled.section`
  max-width: 90%;
  min-height: 85%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85%;

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
