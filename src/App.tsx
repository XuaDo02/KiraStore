import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainAdmin from "./components/layout/MainAdmin"
import { routes } from './router/router.routes';
import MainLayout from './components/layout/MainLayout';
import { PATH_LOGIN_ADMIN } from "./router/router.paths";
import LoginAdmin from "./components/layout/componentsAdmin/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route) => (
              <Route
                path={route.path}
                element={route.isAdmin ? <MainAdmin>{route.element}</MainAdmin> : <MainLayout>{route.element}</MainLayout>}
              />
            ))
          }
          <Route path={PATH_LOGIN_ADMIN}
            element={<LoginAdmin />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
