import { PaletteMode } from "@mui/material"
declare module "@mui/material/styles" {
    interface Palette {
        primary: Palette["primary"]
        main: Palette["primary"]
        surface100: Palette["primary"]
        surface90: Palette["primary"]
        surface80: Palette["primary"]
        surface60: Palette["primary"]
        surface20: Palette["primary"]
        buttonHover: Palette["primary"]
        separation: Palette["primary"]
        sidebarBG: Palette["primary"]
        mainBackground: Palette["primary"]
        inputBorder: Palette["primary"]
        surfaceCard: Palette["primary"];
    }
}


export const lightThemePalette = {
    primary: { main: "#3c7c41" },
    main: { main: "#000000" },
    surface100: { main: "#0B0B0F" },
    surface90: { main: "#333333" },
    surface80: { main: "#7b7b7b" },
    surface60: { main: "#e8e8e8" },
    surface40: { main: "#a2a2a2" },
    surface20: { main: "#f2f2f2" },
    buttonHover: { main: "#28532b" },
    separation: { main: "#d9d9d9" },
    sidebarBG: { main: "#f2f2f2" },
    mainBackground: { main: "#f7f7f7" },
    inputBorder: { main: "#B7B7B7" },
    divider: "#dadada",
    mode: "light" as PaletteMode,
}

export const darkThemePalette = {
    primary: { main: "#3c7c41" },
    main: { main: "#ffffff" },
    surface100: { main: "#ffffff" },
    surface90: { main: "#333333" },
    surface80: { main: "#A8A8A8" },
    surface60: { main: "#B5B5B5" },
    surface40: { main: "#B7B7B7" },
    surface20: { main: "#16161D" },
    buttonHover: { main: "#28532b" },
    separation: { main: "#3B3C45" },
    sidebarBG: { main: "#16161D" },
    mainBackground: { main: "#0b0b0f" },
    inputBorder: { main: "#282834" },
    divider: "#202020",
    mode: "light" as PaletteMode,
}
