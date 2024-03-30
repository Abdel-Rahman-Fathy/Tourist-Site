import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/MUI_Theme";
import Layout from "./pages/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
