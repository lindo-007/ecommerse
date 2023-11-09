import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Image
        src="/open-menu.svg"
        width={30}
        height={30}
        alt="Picture of the menu icon"
      />

      <Link href={"/"}>
        <a>
          <Image
            src="/vercel.svg"
            width={90}
            height={90}
            alt="Picture of the logo"
          />
        </a>
      </Link>
      <Link href={"/cart"}>
        <a>
          <Image
            src="/shopping_cart.svg"
            width={30}
            height={30}
            alt="Picture of the shopping cart"
          />
        </a>
      </Link>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
