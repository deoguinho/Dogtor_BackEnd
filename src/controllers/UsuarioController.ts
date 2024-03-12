import type { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";
import cpfValidator from "../utils/CPFValidator";
import { iGenericResponse, iLoginRequest } from "../Interfaces/iGeneric";
import { iUsuario } from "../Interfaces/iUsuario";
import { iUserController } from "../Interfaces/iController";

class Controller implements iUserController {
  constructor() {}
  async createUsuario(
    req: Request<any, iUsuario>,
    res: Response
  ): Promise<void> {
    let json = { error: "", result: false };

    const {
      name,
      email,
      password,
      confirmPassword,
      birth,
      cpf,
      phone,
      cep,
      street,
      house_number,
      complement,
    } = req.body;



    if (!name) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!email) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!password) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (password != confirmPassword) {
      json.error = "As senhas são incompátiveis";
      res.status(400);
      res.json(json);
      return;
    }

    if (!birth) {
      json.error = "O campo data de nascimento não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!phone) {
      json.error = "O campo telefone não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!cep) {
      json.error = "O campo CEP não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }
    if (!street) {
      json.error = "O campo Rua não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!house_number) {
      json.error = "O campo CEP não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!cpf) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!cpfValidator.cpfValidator(cpf)) {
      json.error = "CPF inválido, por favor, tente novamente";
      res.status(400);
      res.json(json);
      return;
    }

    if (await UsuarioService.getEmail(email)) {
      json.error = "Já existe usuário cadastrado com este email";
      res.status(400);
      res.json(json);
      return;
    }

    let usuario = await UsuarioService.createUsuario({
      name,
      email,
      password,
      birth,
      cpf,
      phone,
      cep,
      street,
      house_number,
      complement,
    });
    if (usuario) {
      json.result = true;
      res.json(json);
    } else {
      res.json("Houve um problema no servidor, tente novamente.");
    }
  }

  async login(req: Request<any, iLoginRequest>, res: Response): Promise<void> {
    const json: iGenericResponse<iUsuario | boolean> = {
      error: "",
      result: false,
    };
    const { email, password } = req.body;
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/login"
                    }
                }
            }
        } 
    */
    if (!email) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    if (!password) {
      json.error = "O campo nome não pode ser nulo";
      res.status(400);
      res.json(json);
      return;
    }

    let usuario = await UsuarioService.login(email, password);
    if (!usuario) {
      json.error = "Não foi encontrado nenhum usuário com essas crendenciais!";
      res.status(400);
      res.json(json);
      return;
    }

    json.result = usuario;
    res.status(200);
    res.json(json);
  }
}
const UserController = new Controller();
export default UserController;
