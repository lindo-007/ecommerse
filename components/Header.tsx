import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Home>
          <Link href="/">
            <a>
              <Image
                src="/home.svg"
                width={30}
                height={30}
                alt="Picture of the Home"
              />
            </a>
          </Link>
        </Home>
        <CartIcon>
          <Link href="/cart">
            <a>
              <Image
                src="/shopping_cart.svg"
                width={30}
                height={30}
                alt="Picture of the shopping cart"
              />
            </a>
          </Link>
        </CartIcon>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  color: #fff;
  padding: 0.5rem 0;
`;

const HeaderContent = styled.div`
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = styled.div``;

const CartIcon = styled.div``;

export default Header;
