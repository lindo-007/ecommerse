import Header from "./Header";
import Footer from "./Footer";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <section className="flex flex-col  m-auto justify-between min-h-screen">
      <Header />
      <main className="flex-1 flex justify-center min-w-full xl:min-w-min xl:w-320  mx-auto">
        {children}
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
