// import ComA from "./ComA";
// import UseReducer from "./Hook/UseReducer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import HomeSha from "./NestSharing/HomeSha";
import Contact from "./NestSharing/ContactSha";
import AboutSha from "./NestSharing/AboutSha";
// import HomeNest from "./NestedRouting/HomeNest";
// import ContactNext from "./NestedRouting/ContactNext";
// import AboutNest from "./NestedRouting/AboutNest";
// import ErrorNes from "./NestedRouting/ErrorNes";
// import Home from "./Link/Home";
// import Contact from "./Link/Contact";
// import About from "./Link/About";


function App() {
  return (
    <div>
      {/* <ComA/> */}
      {/* <UseReducer/> */}
      {/* <BrowserRouter> 
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
       </BrowserRouter> */}
       {/* <BrowserRouter>
       <Routes>
        <Route path="/home" element={<Home2/>}></Route>
        <Route path="/contact" element={<Contact2/>}></Route>
        <Route path="/about" element={<About2/>}></Route>
       </Routes>
       </BrowserRouter> */}

      {/* <BrowserRouter>
       <Routes>
       <Route path="/home" element={<HomeNest/>}></Route>
        <Route path="/contact" element={<ContactNext/>}></Route>
        <Route path="/about" element={<AboutNest/>}></Route>
        <Route path="*" element={<ErrorNes/>}></Route>


       </Routes>


      </BrowserRouter> */}


<BrowserRouter>
       <Routes>
       <Route path="/" element={<HomeSha/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<AboutSha/>}></Route>
        


       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
