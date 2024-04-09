import "./App.css";
import Layout from "./pages/layout";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Stack component={"main"} className="App">
      <Layout />
    </Stack>
  );
}

export default App;
