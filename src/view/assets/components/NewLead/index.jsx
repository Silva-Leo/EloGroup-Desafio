import React from "react";

import Main from "../Container";

import '../NewLead/newLeadStyle.css';

export default function NewLead(props) {
  return (
    <Main>
      <form onSubmit={props.save}>
        <section>
        <h2 id="tituloLead"> Novo Lead</h2>
          <label>Nome</label>
          <input
          className="inputNewLead"
            onChange={props.onChangeName}
            type="text"
            required="required"
            value={props.name}
          ></input>
          <br />
          <br />
          <label>Telefone</label>
          <input
          className="inputNewLead"
            onChange={props.onChangePhone}
            value={props.phone}
            type="tel"
            title="O DDD precisa está presente, além disso, não deve haver espaços entre os números"
            pattern="[0-9]{2}[9][0-9]{4}[0-9]{4}"
            required="required"
          ></input>
          <br />
          <br />
          <label>Email</label>
          <input
          className="inputNewLead"
            onChange={props.onChangeMail}
            value={props.mail}
            type="email"
            required="required"
          ></input>
          <br />
          <br />
        </section>
        <div id="checkboxDiv">
          <p>Oportunidades</p>
          <table className="tableNewLead">
            <tr>
              <th>
                <input
                  id="fistCheck"
                  onChange={props.all}
                  type="checkbox"
                ></input>
              </th>
              <th>Selecionar todos</th>
            </tr>
            <tr>
              <th>
                <input
                  className="check"
                  onChange={props.RPA}
                  type="checkbox"
                  value="RPA"
                ></input>
              </th>
              <th>RPA</th>
            </tr>
            <tr>
              <th>
                <input
                  className="check"
                  onChange={props.product}
                  type="checkbox"
                  value="Produto Digital"
                ></input>
              </th>
              <th>Produto Digital</th>
            </tr>
            <tr>
              <th>
                <input
                  className="check"
                  onChange={props.analitycs}
                  type="checkbox"
                  value="Analytics"
                ></input>
              </th>
              <th>Analytics</th>
            </tr>
            <tr>
              <th>
                <input
                  className="check"
                  onChange={props.BPM}
                  type="checkbox"
                  value="BPM"
                ></input>
              </th>
              <th>BPM</th>
            </tr>
          </table>
          <button id="buttonSave" type="submit">Salvar</button>
        </div>
      </form>
    </Main>
  );
}
