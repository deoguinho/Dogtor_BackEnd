const db = require("../db");

// Regras de banco de dados.
module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM usuario", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  buscarUm: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(`SELECT * FROM usuario where id = ?`, [id], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        if (results.length > 0) {
          aceito(results[0]);
        } else aceito(false);
      });
    });
  },

  getEmail: (email) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `SELECT * FROM usuario where email = ?`,
        [email],
        (error, results) => {
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
  },
  createUser: (
    name,
    email,
    password,
    birth,
    cpf,
    phone,
    cep,
    street,
    house_number,
    complement
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `INSERT into usuario(name,email,password,birth,cpf,phone,cep,street,house_number,complement) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [
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
        ],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(true);
        }
      );
    });
  },
  login: (email, password) => {
    return new Promise((aceito, rejeitado) => {
      db.query(`SELECT * FROM usuario where email = ? and password = ?`, [email, password], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        if (results.length > 0) {
          aceito(results[0]);
        } else aceito(false);
      });
    });
  },
};
