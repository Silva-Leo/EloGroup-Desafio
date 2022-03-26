import React, { useState, useEffect } from "react";

import Main from "../Container";

export default function NewLead(props) {
  return (
    <Main>
      <form onSubmit={props.save}>
        <h2> Novo Lead</h2>
        <div>
          <label>Nome:</label>
          <input
            onChange={props.onChangeName}
            type="text"
            required="required"
            value={props.name}
          ></input>
          <br />
          <br />
          <label>Telefone:</label>
          <input
            onChange={props.onChangePhone}
            value={props.phone}
            type="tel"
            title="O DDD precisa está presente, além disso, não deve haver espaços entre os números"
            pattern="[0-9]{2}[9][0-9]{4}[0-9]{4}"
            required="required"
          ></input>
          <br />
          <br />
          <label>Email:</label>
          <input
            onChange={props.onChangeMail}
            value={props.mail}
            type="email"
            required="required"
          ></input>
          <br />
          <br />
        </div>
        <div>
          <p>Oportunidades</p>
          <table>
            <tr>
              <th>
                <input
                  id="fistCheck"
                  onChange={props.all}
                  type="checkbox"
                ></input>
              </th>
              <th></th>
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
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Main>
  );
}
