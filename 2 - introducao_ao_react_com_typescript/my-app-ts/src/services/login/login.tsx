import { api } from "../../api";

export const login = async (email: string, password: string): Promise<void> => {
  const data = await api;

  if (email !== (data as any).email) {
    return alert('Email invalido');
  }

  alert(`${email}, Bem-vindo de volta ao sistema! ${password}`);
}