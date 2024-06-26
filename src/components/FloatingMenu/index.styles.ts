import { Box, Button, styled } from "@mui/material";

export const MenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  background: "#000000",
  opacity: "0.6",
  position: "fixed",
  top: 0,
  alignItems: "center",
  "& .menu-list": {
    position: "absolute",
    width: "300px",
    height: "auto",
  },

  "& .menu-item": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
    padding: "0 24px",
    minHeight: "56px",
    [theme.breakpoints.down("md")]: {
      minHeight: "48px",
    },
    background: "#ffffff",
    boxShadow: "rgba(227, 219, 225, 0.2) 0px 8px 24px",

    borderRadius: "5px",
    "& .top": {
      margin: "16px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .MuiButton-icon": {
        marginRight: "16px",
      },
      "& .button-text": {
        padding: 0,
        fontSize: "14px",
        color: "#000000",
        textTransform: "capitalize",
      },
      "& .price": {
        fontSize: "14px",
        color: "#000000",
        textTransform: "capitalize",
      },
    },

    "& .center": {
      marginBottom: "16px",
      "& .description": {
        fontSize: "14px",
        color: "rgba(0, 0, 0 , 0.7)",
      },
    },
    "& .bottom": {
      marginBottom: "16px",
      display: "flex",
      gap: 10,
      overflow: "hidden",
      "& .tag": {
        width: "fit-content",
        padding: "4px 8px",
        background: "#e6e6e6",
        textTransform: "inherit",
        color: "#000000",
        fontSize: "14px",
      },
    },
  },
}));


export const CloseButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  fontSize: "16px",
  background: "#ffffff",
  color: "#000000",
  boxShadow: "rgba(227, 219, 225, 0.5) 0px 8px 24px",
  cursor: "pointer",
  position: "absolute",
  ":hover": {
    background: "#ffffff",
  },
  minWidth: "40px",
}));