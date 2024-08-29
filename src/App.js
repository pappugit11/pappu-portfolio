import "./App.css";
// import UserContextProvider from "./contexts/UserContextProvider";
import PageLayout from "./components/PageLayout";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserContextProvider> */}
        <PageLayout>
          <Banner />
          <Education />
          <Skills />
        </PageLayout>
        {/* </UserContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
