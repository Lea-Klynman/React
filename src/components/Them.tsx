import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
          main: "#579fba", // כחול-טורקיז
        },
        secondary: {
          main: "#ED3D48", // אפור כהה
        },
        background: {
          default: "#579fba", // רקע אפור כהה
          paper: "#FFFFFF", // רקע קופסאות בצבע כחול-טורקיז
        },
        text: {
          primary: "#ED3D48", // אדום עז
          secondary:"#3a3a3a" , // לבן לניגודיות טובה
        },
      },
     
});

export default theme;