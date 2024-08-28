import {createTheme} from "@mui/material/styles";
import {colorBackGround} from "@/styles/colors";

export const themeCustom = createTheme({
    palette: {
        background: {
            default: colorBackGround,
        }
    }
});