import { Button, Heading, Image, VStack, HStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartslice";
import { STATUSES, fetchproducts } from "../redux/productslice";
const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchproducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.Loading) {
    return <h2 style={{ fontWeight: "bolder" }}>Loading...</h2>;
  }

  return (
    <div>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {products.map((product) => (
          <VStack
            key={product.id}
            m={"4"}
            w={"60"}
            shadow={"base"}
            borderRadius={"lg"}
          >
            <Image
              w={"24"}
              src={product.image}
              h={"24"}
              objectFit={"contain"}
              alt="oops"
            />
            <Heading noOfLines={1} size={"md"}>
              {product.title}
            </Heading>
            <Text>$ {product.price}</Text>
            <Button
              onClick={() => handleAdd(product)}
              variant={"solid"}
              color={"purple.700"}
              m={"2"}
            >
              Add to cart
            </Button>
          </VStack>
        ))}
      </HStack>
    </div>
  );
};

export default Home;
