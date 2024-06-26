"use client";
import FloatingMenu from "@/components/FloatingMenu";
import BuyButton from "@/components/BuyButton";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useMemo, useRef, useState } from "react";
import { Menu } from "@/types/product";

interface HomeProps {
  cartPosition?:
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "center";
  itemsData?: Menu[];
}

export default function Home(props: HomeProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { cartPosition, itemsData } = props;
  const handleBuyButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(true);
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top + window.scrollY;
      setPosition({ x: x, y: y });
    }
  };

  const buttonStyle = useMemo(() => {
    if (cartPosition) {
      switch (cartPosition) {
        case "topLeft":
          return {
            top: 0,
            left: 100,
          };
        case "topRight":
          return {
            top: 0,
            right: 100,
          };
        case "bottomLeft":
          return {
            bottom: 0,
            left: 0,
          };
        case "bottomRight":
          return {
            bottom: 0,
            right: 0,
          };
        default:
          return {
            top: "50%",
            left: "50%",
          };
      }
    }

    return {
      top: "50%",
      left: "50%",
    };
  }, [cartPosition]);
  const handleMenuItemClick = (item: Menu) => {
    // TODO: handle Item Menu Click
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  // Test data
  const menuData: Menu[] = [
    {
      id: "1",
      text: "30ml",
      price: "€10?",
    },
    {
      id: "2",
      text: "30ml",
      price: "€10?",
      tags: ["option1", "option2"],
    },
    {
      id: "3",
      text: "30ml",
      price: "€10?",
      des: "product description",
      tags: ["option1", "option2"],
    },
  ];

  return (
    <PageContainer>
      <BuyButton
        handleClick={handleBuyButtonClick}
        ref={buttonRef}
        sx={{
          position: "fixed",
          ...buttonStyle,
          visibility: openMenu ? "hidden" : "visible",
        }}
      />

      {openMenu && (
        <FloatingMenu
          onClose={handleClose}
          postion={position}
          menuList={ menuData}
          onMenuClick={handleMenuItemClick}
        />
      )}
    </PageContainer>
  );
}

const PageContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  marginTop: "30px",
  height: "90vh",
  position: "relative",
  margin: "50px",
}));
