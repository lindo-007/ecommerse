import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";

export default function Home() {
  return (
    <HomeContainer>
      <Categories/>
      <Products/>
    </HomeContainer>
  );
}
const HomeContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-between;

`
