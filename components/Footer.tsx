import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-blue-300  flex flex-col items-center justify-start  pt-12">
      <section className=" w-11/12 flex flex-col md:flex-row   justify-around max-w-7xl ">
        <section className="p-3">
          <h2 className="text-2xl text-gray-700 font-mont">Contact Us</h2>
          <p className=" p-1">
            Email:
            <a
              href="mailto:info@lottostar.co.za"
              className="font-roboto text-gray-700"
            >
              {" "}
              info@lottostar.co.za
            </a>
          </p>
          <p className=" p-1">
            Phone:
            <a href="tel:+27 123 456 789" className="font-roboto text-gray-700">
              {" "}
              +27 123 456 789
            </a>
          </p>
        </section>
        <section className="p-3">
          <h2 className="text-2xl text-gray-700 font-mont">Quick Links</h2>
          <ul>
            <li className="font-mont p-1">
              <Link href="/about">About Us</Link>
            </li>
            <li className="font-mont p-1">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="font-mont p-1">
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </section>
      </section>
      <p className="my-3 w-11/12>">
        {" "}
        &copy; 2023 E-commerce Store. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
