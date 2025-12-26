import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import {useNavigate, useParams} from 'react-router-dom';
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<UserData | null>();
  const actualDate = new Date();
  const {id} = useParams();
  const navigate = useNavigate();

  const {isLogedIn} = useContext(AppContext);

  !isLogedIn && navigate('/');

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };
    getData();
  }, []);

  
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
