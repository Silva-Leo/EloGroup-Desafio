import React, {useState} from 'react'

import './formStyle.css';

import * as yup from 'yup';

function Form() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [andamento, setAndamento] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async (e) => {
    e.preventDefault();

    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setAndamento({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      setUser({
        name: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setAndamento({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    }

    async function validate() {
      let schema = yup.object().shape({
        confirmPassword: yup
          .string("Erro: Necessário confirmar sua senha!")
          .required("Erro: Necessário confirmar sua senha!")
          .min(8, "Erro: A senha deve ter no mínimo 8 caracteres!")
          .oneOf(
            [yup.ref("password")],
            "As senhas não conferem. Por favor redigite sua senha"
          ),

        password: yup
          .string("Erro: Necessário preencher o campo senha!")
          .required("Erro: Necessário preencher o campo senha!")
          .min(8, "Erro: A senha deve ter no mínimo 8 caracteres!")
          .matches(
            /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
            "Erro: Necessário pelo menos um caractere especial"
          ),

        name: yup
          .string("Erro: Necessário preencher o campo nome!")
          .required("Erro: Necessário preencher o campo nome!"),
      });

      try {
        await schema.validate(user);
        return true;
      } catch (err) {
        setAndamento({
          type: "error",
          mensagem: err.errors,
        });
        return false;
      }
    }
  };
  return (
    
    <div>

      <form className='formulario' onSubmit={addUser}>
        <label>Nome: </label>
        <input
          type="text"
          name="name"
          placeholder="Nome completo do usuário"
          onChange={valueInput}
          value={user.name}
        />
        <br />
        <br />

        <label>Senha: </label>
        <input
          type="password"
          name="password"
          placeholder="Senha para acessar o sistema"
          autoComplete="on"
          onChange={valueInput}
          value={user.password}
        />
        <br />
        <br />

        <label>Confirmar-Senha: </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Senha para acessar o sistema"
          autoComplete="on"
          onChange={valueInput}
          value={user.confirmPassword}
        />
        <br />
        <br />

        {andamento.type === "success" ? (
          <p style={{ color: "green" }}>{andamento.mensagem}</p>
        ) : (
          ""
        )}
        {andamento.type === "error" ? (
          <p style={{ color: "#ff0000" }}>{andamento.mensagem}</p>
        ) : (
          ""
        )}

        <button className='buttonCadastro' type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
export default Form;
