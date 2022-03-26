function Table(props){
  return (
      <div>
          <div>
              <h2> Painel de Leads</h2>
          </div>
          <button onClick={props.handleAddLead} >Novo Lead (+)</button>
          <table>
              <tr>
                  <th>Cliente em Potencial</th>
                  <th>Dados Confirmados</th>
                  <th>Reunião Agendada</th>
              </tr>
          {props.LogicView}
          </table>
      </div>
  )
}

export default Table;
