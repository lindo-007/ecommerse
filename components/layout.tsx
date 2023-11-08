import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.section`
  min-height:99.5vh ;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export default Layout;
