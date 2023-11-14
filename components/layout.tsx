import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}

const MainContainer = styled.main`
  /* display: flex;
  margin: 2rem;
  min-height: 68vh;
  flex: 1; */
`;

const LayoutContainer = styled.section`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 98.8vh;

  color: #154c79;

  h1,
  h2,
  h3 {
    font-family: "Montserrat", sans-serif;
    color: #e28743;
  }
  p {
    font-family: "Roboto", sans-serif;
  } */
`;

export default Layout;
