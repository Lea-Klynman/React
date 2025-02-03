import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
          main: "#579fba", 
        },
        secondary: {
          main: "#ED3D48", 
        },
        background: {
          default: "#579fba", 
          paper: "#FFFFFF", 
        },
        text: {
          primary: "#ED3D48", 
          secondary:"#3a3a3a" 
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              overflowX: 'hidden',
              width: '100%',
              maxWidth: '100vw',
            },
            '#root': {
              overflowX: 'hidden',
              width: '100%',
              maxWidth: '100vw',
            }
          }
        }
      }
});

export default theme;