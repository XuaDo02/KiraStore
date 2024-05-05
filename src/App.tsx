import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import MainAdmin from "./components/layout/MainAdmin"
import { routes } from './router/router.routes';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
   <>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}

     {/* <MainLayout/> */}

      <BrowserRouter>
        <Routes>
          {
            routes.map((route) => (
              <Route
                path={route.path}
                element={<MainLayout>{route.element}</MainLayout>}
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
