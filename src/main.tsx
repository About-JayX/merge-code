import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import Provider from "@/provider";

import "virtual:svg-icons-register";
import "@/i18n";
import "@/style/global.scss";

ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
