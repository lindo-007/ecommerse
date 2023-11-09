import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h2>Contact Us</h2>
          <p>Email: info@lottostar.co.za</p>
          <p>Phone: +27 123 456 789</p>
        </Section>
        <Section>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </Section>
      </FooterContent>
      <Copyright>&copy; 2023 E-commerce Store. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  color: #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

const Section = styled.div`

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0.5rem 0;
    }

    a {
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
`;

export default Footer;
