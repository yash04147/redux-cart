import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartslice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <VStack m={"2"} justifyContent={"space-evenly"} bgColor={"gray.100"}>
        {items.map((item) => (
          <HStack
            m={"2"}
            justifyContent={"space-between"}
            w={"100%"}
            borderRadius={"3xl"}
            shadow={"base"}
            bgColor={"white"}
          >
            <Image
              src={item.image}
              alt="oops..did not load"
              h={"40"}
              w={"40"}
            />
            <Text fontWeight={"bold"}>$ {item.title}</Text>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              $ {item.price}
            </Text>
            <Button
              onClick={() => handleRemove(item.id)}
              variant={"solid"}
              bgColor={"purple.100"}
              color={"purple"}
              m={"2"}
            >
              Remove
            </Button>
          </HStack>
        ))}
      </VStack>
    </div>
  );
};

export default Cart;
