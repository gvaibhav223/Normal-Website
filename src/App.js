import { Box, Button, Container,  createTheme,  Stack, ThemeProvider } from "@mui/material";
import AddPost from "./Components/AddPost";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import React, {useState} from 'react';



function App() {
  const [mode,setMode] =useState('light')
const darkTheme = createTheme({
  palette:{
    mode:mode,
  }
})
  return (
    <ThemeProvider theme = {darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar/>
        <Stack justifyContent="space-between" spacing={2} direction="row" >
        <SideBar setMode={setMode} mode={mode} / >
        <Feed/>
        <RightBar/>
        </Stack>
        <AddPost/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
