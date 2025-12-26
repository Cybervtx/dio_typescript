import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export const ContaInfo = () => {

  const context = useContext(AppContext);
  console.log(context);

  return (
    <>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Informações da Conta
      </Text>
      <Link to={"/conta/1"}>
        <Text fontSize={"xl"} color={"white"} marginTop={4}>
          Conta
        </Text>
      </Link>
    </>
  );
};
