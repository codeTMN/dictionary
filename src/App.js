import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { Browser, BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./components/Dictionary";
import Definition from "./components/Definition";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          {/* <Route path="/definition" element={<Definition />}></Route> */}
          <Route path="/dictionary/:search" element={<Definition />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
