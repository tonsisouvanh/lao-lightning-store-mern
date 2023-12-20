  import React, { Suspense } from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { BrowserRouter as Router } from "react-router-dom";
  import "react-lazy-load-image-component/src/effects/blur.css";
  import { Provider } from "react-redux";
  import { store } from "./store/store.ts";
  import ThemedSuspense from "./components/UI/ThemedSuspense.tsx";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Suspense fallback={<ThemedSuspense />}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </Suspense>
    </React.StrictMode>,
  );
