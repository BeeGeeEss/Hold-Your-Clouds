import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPostPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPostPage";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         <Route path="/blog" element={<Blog />} />

//         <Route path="/blog/:slug" element={<BlogPost />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
