import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Todo" element={<Todo />} />
            <Route path="Dashbord" element={<Dashbord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
