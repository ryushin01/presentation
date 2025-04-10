import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gateway from "@pages/Gateway/Gateway";
import Main from "@pages/Main/Main";
import Tour from "@pages/Tour/Tour";
import Pension from "@pages/Pension/Pension";
import Notice from "@pages/Notice/Notice";
// import { Alarm } from "@components/common";
import InitializeScroll from "@modules/InitializeScroll/InitializeScroll";
const Router = () => {
  return (
    <BrowserRouter basename="/presentation">
        <Routes>
            <Route path="/" element={<Gateway />} />
            <Route path="/main" element={<Main />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/pension" element={<Pension />} />
            <Route path="/notice" element={<Notice />} />
        </Routes>

        {/*<Alarm />*/}
        <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
