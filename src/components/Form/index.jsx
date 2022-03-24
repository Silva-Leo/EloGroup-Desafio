import React,  {useState } from 'react';

import * as yup from 'yup';

function Form(){

    const [user, setUser] = useState({
        name: '',
        password: '',
        confirmPassword: ''
      });
    
      const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });

  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value }); //***Receber os dados do formulário

  
  const addUser = async e => { //***Enviar os dados para o back-end
    e.preventDefault();

    if(!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }
  
  async function validate(){
    let schema = yup.object().shape({
     
        confirmPassword: yup.string("Erro: Necessário preencher o campo senha!")
        .min(8,"Erro: A senha deve ter no mínimo 8 caracteres!").oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("Erro: Necessário preencher o campo senha!")
        .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,'Erro: Necessário pelo menos um caractere especial'),       
     
        password: yup.string("Erro: Necessário preencher o campo senha!")
        .required("Erro: Necessário preencher o campo senha!")
        .min(8,"Erro: A senha deve ter no mínimo 8 caracteres!")
        .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,'Erro: Necessário pelo menos um caractere especial'),
     
      name: yup.string("Erro: Necessário preencher o campo nome!")
        .required("Erro: Necessário preencher o campo nome!")
    });

    try{
      await schema.validate(user);
      return true;
    }catch (err) {
      setStatus({
        type: 'error',
        mensagem: err.errors
      });
      return false;
    }
  }
  
  return (
      <div>
      <h1>Cadastrar Usuário</h1>

      {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

      <form onSubmit={addUser}>
        <label>Nome*: </label>
        <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} /><br /><br />

        <label>Senha*: </label>
        <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />

        <label>confirmar-Senha*: </label>
        <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />

        * Campo obrigatório<br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


export default Form;
