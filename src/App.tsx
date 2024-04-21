import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./router/router.routes"
import MainAdmin from "./components/layout/MainAdmin"
//import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route) => (
              <Route
                path={route.path}
                element={<MainAdmin>{route.element}</MainAdmin>}
              />
            ))
          }
        </Routes>
      </BrowserRouter>
      {/* <MainLayout/> */}
    </>
  );
}

export default App;
