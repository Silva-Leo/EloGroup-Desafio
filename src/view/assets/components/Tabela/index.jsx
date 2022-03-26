import React, { useState, useEffect } from "react";


const Tabela = () => {
  const altura = 5;
  const largura = 7;

  // cria Array de 0 até n - 1:
  const linhas = Array.from(Array(altura).keys());
  const colunas = Array.from(Array(largura).keys());

  return (
    <>

      <div>
        <img />
        <h1>Painel de Leads</h1>
      </div>
      <div>
        <table>
            <thead>
                <tr>
                    <th style={{ border: "solid #000" }}>Cliente em potencial</th>
                    <th style={{ border: "solid #000" }}>Dados Confirmados</th>
                    <th style={{ border: "solid #000" }}>Reunião Agendada</th>
                </tr>
            </thead>
          <tbody>
            {linhas.map((linha) => (
              <tr key={linha}>
                {colunas.map((coluna) => (
                  <td
                    key={coluna}
                    style={{ border: "solid #000" }}
                  >{`(${linha}, ${coluna})`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabela;
