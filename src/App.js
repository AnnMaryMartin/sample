import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./Core/Context";
import store from "./Store/store";
import Home from "./Container/Home";
const Login = React.lazy(() => import("./Containers/Login/Login"));


function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>

              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </AppContextProvider>
    </Provider>
  );
}

export default App;
