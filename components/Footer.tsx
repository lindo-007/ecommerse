import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <footer className="bg-blue-300 w-full flex flex-col items-center justify-start  pt-12" >
      <section className=" w-full flex flex-col md:flex-row md:p-2  justify-around max-w-7xl ">
        <section>
          <h2>Contact Us</h2>
          <p className=" p-1">Email: info@lottostar.co.za</p>
          <p className=" p-1">Phone: +27 123 456 789</p>
        </section>
        <section>
          <h2>Quick Links</h2>
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
      <p className="my-3">&copy; 2023 E-commerce Store. All rights reserved.</p>
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
