import React from "react"
import './App.scss';
import { Nav } from "./components"
import AuthContextProvider from "./contexts/auth"

function App() {
  return (
    <AuthContextProvider>
      <Nav />
    </AuthContextProvider>
  );
}

export default App;
