import { login } from "./login";
import { api } from "../../api";    

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    const mockEmail = 'admin@admin.com';
    const mockPassword = '123456';

    it('deve exibir um alert com boas vindas', async () => {
        await login(mockEmail, mockPassword);
        expect(mockAlert).toBeCalledWith(`${mockEmail}, Bem-vindo de volta ao sistema! ${mockPassword}`);
    });

    it('nao deve exibir um a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail, mockPassword);
        expect(mockAlert).not.toBeCalledWith('');
    });

    it('Deve exibir um error caso o email nao seja valido', async () => {
        await login('email@invalido.com', mockPassword);
        expect(mockAlert).toBeCalledWith('Email invalido');
    })
});