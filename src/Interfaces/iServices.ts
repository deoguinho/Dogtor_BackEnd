import { iUsuario } from "./iUsuario";

export interface iUserService {
  login(email: string, password: string): Promise<iUsuario | boolean>;
  createUsuario(usuario: iUsuario): Promise<boolean>;
}
