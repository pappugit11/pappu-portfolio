import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
// import UserContextProvider from "../contexts/UserContextProvider";
// import UserContext from "../contexts/UserContext";

const PageLayout = ({ children }) => {
  const [bodyPadding, setbodyPadding] = useState(0);

  useEffect(() => {
    let navGap = document.querySelector("header").offsetHeight;
    document.querySelector("body").style.paddingTop = `${navGap}px`;
    setbodyPadding(navGap);
  }, [bodyPadding]);

  return (
    <>
      {/* <UserContextProvider> */}
      <Navbar />
      {children}
      <Footer />
      {/* </UserContextProvider> */}
    </>
  );
};

export default PageLayout;
