import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser, FaHouse } from "react-icons/fa6";
function Header() {
  return (
    <header className="bg-blue-300">
      <section className="flex justify-between py-8 bg-blue-300 max-w-7xl mx-auto">
        <figure className="p-5">
          <Link href="/">
            <a>
              <FaHouse size={"2rem"} />
            </a>
          </Link>
        </figure>
        <div className="flex">
          <figure className="p-5">
            <Link href="/cart">
              <a>
                <FaShoppingCart size={"2rem"} />
              </a>
            </Link>
          </figure>
          <figure className="p-5">
            <Link href="/user">
              <a>
                <FaUser size={"2rem"} />
              </a>
            </Link>
          </figure>
        </div>
      </section>
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
