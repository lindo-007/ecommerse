import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";

function Header() {
  return (
    <header className="flex justify-between py-8">
      <figure>
        <Link href="/">
          <a>
            <AiOutlineHome size={"2rem"} color="#e28743" />
          </a>
        </Link>
      </figure>
      <figure>
        <Link href="/cart">
          <a>
            <AiOutlineShopping size={"2rem"} color="#e28743" />
          </a>
        </Link>
      </figure>
    </header>
  );
}

const HeaderContainer = styled.header`
  /* background-color: #f5f5f5;
  color: #fff;
  padding: 0.5rem 0; */
`;

const HeaderContent = styled.div`
  /* max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const Home = styled.div``;

const CartIcon = styled.div``;

export default Header;
