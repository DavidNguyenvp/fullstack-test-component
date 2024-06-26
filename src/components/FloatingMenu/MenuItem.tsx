import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Box, Button, Typography } from "@mui/material";
import { Menu } from "@/types/product";
import { keyframes } from "@emotion/react";


interface MenuItemProps {
  menu: Menu;
  onClick: (menu: Menu) => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MenuItem = ({ menu, onClick }: MenuItemProps) => {
  return (
    <Box
      className="menu-item"
      sx={{
        opacity: 0,
        animation: `${fadeIn} 1s ease-in-out forwards`,
      }}
    >
      <Box className="top">
        <Box className="left">
          <Button
            variant="text"
            startIcon={<ShoppingBasketIcon />}
            className="button-text"
            onClick={() => onClick(menu)}
          >
            {menu.text}
          </Button>
        </Box>
        <Typography className="price">{menu.price}</Typography>
      </Box>
      {menu.des && (
        <Box className="center">
          <Typography className="description">{menu.des}</Typography>
        </Box>
      )}
      {menu.tags && (
        <Box className="bottom">
          {menu.tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuItem;
