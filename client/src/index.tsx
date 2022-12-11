import React from "react"
import ReactDOM from "react-dom/client"
import App from "./pages/App"
import "./globals.css"
import { Providers } from "./providers/Providers"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
)
