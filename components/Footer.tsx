import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <footer className="bg-blue-300  flex flex-col items-center justify-start  pt-12">
      {/* <section className=""></section> */}
      <section className=" w-11/12 flex flex-col md:flex-row   justify-around max-w-7xl ">
        <section className="p-3">
          <h2 className="text-2xl text-gray-700 ">Contact Us</h2>
          <p className=" p-1">
            Email:
            <a href="mailto:info@lottostar.co.za" className=" text-gray-700"> info@lottostar.co.za</a>
          </p>
          <p className=" p-1">
            Phone:<a href="tel:+27 123 456 789" className=" text-gray-700"> +27 123 456 789</a>
          </p>
        </section>
        <section className="p-3">
          <h2 className="text-2xl text-gray-700 ">Quick Links</h2>
          <ul>
            <li className=" p-1">
              <Link href="/about">About Us</Link>
            </li>
            <li className=" p-1">
              <Link href="/contact">Contact</Link>
            </li>
            <li className=" p-1">
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </section>
      </section>
      <p className="my-3 w-11/12>"> &copy; 2023 E-commerce Store. All rights reserved.</p>
    </footer>
  );
}

const FooterContainer = styled.footer`
  /* background-color: #f5f5f5;
  color: #333; */
`;

const FooterContent = styled.div`
  /* max-width: 1200px;
  margin: 0 1rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
  } */
`;

const Section = styled.div`
  /* h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    color: #154c79;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0.5rem 0;
    }

    a {
      color: #154c79;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  } */
`;

const Copyright = styled.p`
  /* text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color:#e28743; */
`;

export default Footer;
