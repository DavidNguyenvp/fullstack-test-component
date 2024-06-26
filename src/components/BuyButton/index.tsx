import { Button, SxProps, Theme } from "@mui/material";
import React, { forwardRef } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ButtonStyled } from "./BuyButton.styles";

interface BuyButtonProps {
  sx?: SxProps<Theme>;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BuyButton = ({ sx, handleClick }: BuyButtonProps, ref: any) => {
  return (
    <ButtonStyled
      variant="contained"
      startIcon={<ShoppingBasketIcon />}
      onClick={handleClick}
      sx={sx}
      ref={ref}
    >
      Buy
    </ButtonStyled>
  );
};

export default forwardRef(BuyButton);
