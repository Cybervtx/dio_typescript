import { Center, SimpleGrid } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };
    getData();
  }, []);

  console.log(userData);

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text={"Informações de acesso"} />
        <CardInfo text={"Informações da conta"} />
      </SimpleGrid>
    </Center>
  );
};
