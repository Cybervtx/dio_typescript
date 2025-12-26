import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";
import {useNavigate, useParams} from 'react-router-dom';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
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

  const actualDate = new Date();
  const {id} = useParams();
  const navigate = useNavigate();
  
  if (userData && id !== userData.id) {
    navigate('/');
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Olá ${userData?.name}`}
              content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance},00`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
