import { ThemeProvider } from "styled-components";

const theme ={
    colors: {
        blue: "#1822dc",
        lightGray:"#e6e6e6",
        gray:"#9e9e9e",
        darkGray:"#272727",
        white:"#FFF",
        black:"#000"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;