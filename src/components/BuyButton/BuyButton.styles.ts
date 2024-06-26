import { Button, styled } from "@mui/material";

export const ButtonStyled = styled(Button)(() => ({
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: "black",
  height: "50px",
  width: "100px",
  display: "flex",
  justifyItems: "space-between",
  textTransform: "capitalize",
  "& .MuiSvgIcon-root": {
    marginRight: "10px",
  }
}));
