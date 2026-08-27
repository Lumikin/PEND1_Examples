import Home from "./pages/home";
import { ThemeProvider } from "./contexts/themeContext";
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
