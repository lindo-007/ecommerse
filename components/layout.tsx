import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  );
}

const MainContainer = styled.main`
  margin: 2rem;
  min-height: 75vh;
  
`;

const LayoutContainer = styled.section`
  min-height: 98.7vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
`;

export default Layout;
