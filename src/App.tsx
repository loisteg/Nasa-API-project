import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBottomNavigation, AppHeader } from "./components";
import { Container, Loader } from "./components/UI";

import { lazy } from "react";

import store from "./redux/store";
import { routes } from "./constants";

const ErrorScreen = lazy(() => import('./screens/ErrorScreen')),
  NeosScreen = lazy(() => import('./screens/NeosScreen')),
  NeoScreen = lazy(() => import('./screens/NeoScreen')),
  ApodScreen = lazy(() => import('./screens/ApodScreen')),
  CounterScreen = lazy(() => import('./screens/CounterScreen'));

function App() {
  return (
    <Provider store={store}>
      <Router>
      <AppHeader />
        <Container>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path={routes.NEOS.path} element={<NeosScreen />} />
              <Route path={routes.NEO.path} element={<NeoScreen />} />
              <Route path={routes.APOD.path} element={<ApodScreen />} />
              <Route path={routes.COUNTER.path} element={<CounterScreen />} />
              <Route path="*" element={<ErrorScreen />}/>
            </Routes>
          </Suspense>
        </Container>
        <AppBottomNavigation />
      </Router>
    </Provider>
  );
}

export default App;
