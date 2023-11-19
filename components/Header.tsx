import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser, FaHouse } from "react-icons/fa6";
import useCart from "../store/hooks/useCart";

function Header() {
  const { numberOfItems } = useCart();
  return (
    <header className="bg-blue-300">
      <section className="flex justify-between py-8 bg-blue-300 max-w-7xl mx-auto">
        <figure className="p-5">
          <Link href="/">
            <a>
              <FaHouse size={"2rem"} color="#0f172a" />
            </a>
          </Link>
        </figure>
        <div className="flex">
          <figure className="p-5 ">
            <Link href="/cart">
              <a className="relative">
                {numberOfItems > 0 ? (
                  <div className="flex justify-center items-center bg-white rounded-full w-8 h-8  text-red-600 p-3 text-2xl absolute bottom-7 left-7">
                    {numberOfItems}
                  </div>
                ) : (
                  <div></div>
                )}
                <FaShoppingCart size={"2rem"} color="#0f172a" />
              </a>
            </Link>
          </figure>
          <figure className="p-5">
            <Link href="/user">
              <a>
                <FaUser size={"2rem"} color="#0f172a" />
              </a>
            </Link>
          </figure>
        </div>
      </section>
    </header>
  );
}

export default Header;
