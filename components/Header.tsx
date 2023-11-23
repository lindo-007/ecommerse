import Link from "next/link";
import { FaUser, FaHouse } from "react-icons/fa6";
import useCart from "../store/hooks/useCart";
import CartIcon from "./CartIcon";

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
          <Link href="/cart">
            <a>
              <CartIcon numberOfItems={numberOfItems} />
            </a>
          </Link>

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
