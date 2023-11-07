import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <Image
        src="/vercel.svg"
        width={90}
        height={90}
        alt="Picture of the author"
      />
      <Image
        src="/shopping_cart.svg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </MainHeader>
  );
}

const MainHeader = styled.header`
display: flex;
justify-content: space-between;
`;
export default Header;
