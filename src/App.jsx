import Home from "./pages/home";
import { ThemeProvider } from "./contexts/themeContext";
import {} from "react-dom"
function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
