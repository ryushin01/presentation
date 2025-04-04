import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/Layout/Layout";
import Gateway from "@pages/Gateway/Gateway";
import Main from "@pages/Main/Main";
import List from "@pages/List/List";
import Detail from "@pages/Detail/Detail";
import InitializeScroll from "@modules/InitializeScroll/InitializeScroll";

const Router = () => {
  return (
    <BrowserRouter basename="/solid">
      <Routes>
        <Route path="/" element={<Gateway />} />

        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>

        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
