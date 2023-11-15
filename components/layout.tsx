import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <section className="flex flex-col  m-auto justify-between min-h-screen">
      <Header />
      <main className="flex-1 flex justify-center ">{children}</main>
      <Footer />
    </section>
  );
}

/*const MainContainer = styled.main`
 display: flex;
  margin: 2rem;
  min-height: 68vh;
  flex: 1; 
`;*/

/* const LayoutContainer = styled.section`
 display: flex;
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
  }
`; */

export default Layout;
