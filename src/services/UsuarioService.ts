import { iUserService } from "../Interfaces/iServices";
import { iUsuario } from "../Interfaces/iUsuario";
import db from "../db";

// Regras de banco de dados.
class Service implements iUserService {
  constructor(){

  }
  getEmail(email: string){
    return new Promise((aceito, rejeitado) => {
      db.query(
        `SELECT * FROM usuario where email = ?`,
        [email],
        (error: any, results: any) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else aceito(false);
        }
      );
    });
  }
  createUsuario(usuario: iUsuario): Promise<boolean>{
    return new Promise((aceito, rejeitado) => {
      db.query(
        `INSERT into usuario(name,email,password,birth,cpf,phone,cep,street,house_number,complement) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        Object.values({
          name: usuario.name,
          email : usuario.email,
          password : usuario.password,
          birth : usuario.birth,
          cpf : usuario.cpf,
          phone : usuario.phone,
          cep : usuario.cep,
          street : usuario.street,
          house_number : usuario.house_number,
          complement : usuario.complement,
        }),
        (error: any) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(true);
        }
      );
    });
  }
  login(email: string, password: string): Promise<iUsuario | boolean>{
    return new Promise((aceito, rejeitado) => {
      db.query(
        `SELECT * FROM usuario where email = ? and password = ?`,
        [email, password],
        (error: any, results: string | any[]) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else aceito(false);
        }
      );
    });
  }
};

const UserService = new Service()
export default UserService