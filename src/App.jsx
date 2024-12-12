import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Menboots from "./Components/Menboots";
import Boatshoes from "./Components/Boatshoes";
import Womenboots from "./Components/Womenboots";
import Yellowboots from "./Components/Yellowboots";
import Delivery from "./Components/Delivery";
import Returns from "./Components/Returns";
import Securepayments from "./Components/Securepayments";
import Trackorder from "./Components/Trackorder";
import Contactus from "./Components/Contactus";
import Careers from "./Components/Careers";
import TermsCondition from "./Components/TermsCondition";
import Privacypolicy from "./Components/Privacypolicy";
import Responsiblity from "./Components/Responsiblity";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menboots />} />

        <Route path="/womenboots" element={<Womenboots />} />
        <Route path="/moatshoes" element={<Boatshoes />} />
        <Route path="/yellowboots" element={<Yellowboots />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/securepayments" element={<Securepayments />} />
        <Route path="/trackorder" element={<Trackorder />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/termsCondition" element={<TermsCondition />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/reponsiblity" element={<Responsiblity />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
