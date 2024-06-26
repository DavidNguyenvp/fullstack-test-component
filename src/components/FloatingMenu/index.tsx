import { Box } from "@mui/material";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { CloseButton, MenuContainer } from "./index.styles";
import { Menu } from "@/types/product";
import MenuItem from "./MenuItem";
import { keyframes } from "@emotion/react";

interface FloatingMenuProps {
  onClose: () => void;
  onMenuClick: (menu: Menu) => void;
  postion: { x: number; y: number };
  menuList: Menu[];
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
`;

const FloatingMenu = (props: FloatingMenuProps) => {
  const { menuList, postion, onClose, onMenuClick } = props;
  const ref = useRef<HTMLElement | null>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const PADDING_BOTTOM = 100;

  const menuPosition = useMemo(() => {
    let x = postion.x - 316;
    if (x < 0) {
      x = postion.x + 56;
    }

    let y = postion.y;
    if (y > menuHeight) {
      y = postion.y - menuHeight + PADDING_BOTTOM;
    } else {
      y = postion.y - PADDING_BOTTOM < 10 ? 10 : postion.y - PADDING_BOTTOM;
    }
    return { x: x, y: y };
  }, [menuHeight, postion.x, postion.y]);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setMenuHeight(height);
    }
  }, []);

  return (
    <MenuContainer
      style={{}}
      onClick={onClose}
      sx={{
        opacity: 0,
        animation:  `${fadeIn} 1s ease-in-out forwards`,
      }}
    >
      <CloseButton
        variant="contained"
        onClick={onClose}
        sx={{ left: postion.x, top: postion.y }}
      >
        x
      </CloseButton>
      <Box
        className="menu-list"
        sx={{ left: menuPosition.x, top: menuPosition.y }}
        ref={ref}
      >
        {menuList.map((menu) => (
          <MenuItem key={menu.id} menu={menu} onClick={onMenuClick} />
        ))}
      </Box>
    </MenuContainer>
  );
};

export default FloatingMenu;
