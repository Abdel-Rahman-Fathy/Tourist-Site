import "./App.css";
import Layout from "./pages/layout";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack component={"main"} className="App">
      <Layout />
    </Stack>
  );
}

export default App;
