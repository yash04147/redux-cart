import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <HStack
        p={"4"}
        justifyContent={"space-between"}
        bgColor={"blackAlpha.900"}
        color={"white"}
      >
        <HStack justifyContent={"space-evenly"} marginX={"4"}>
          <Button variant={"unstyled"} color={"white"}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
            <Link to="/cart">Cart</Link>
          </Button>
        </HStack>
        <HStack marginX={"4"}>
          <h4>items : {items.length}</h4>
        </HStack>
      </HStack>
    </div>
  );
};

export default Navbar;
