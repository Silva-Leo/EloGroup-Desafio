import '../Table/tableStyle.css'

function Table(props){
  return (
      <div className='TabelaContainer'>
          <section>
              <h2 id="tituloLead"> Painel de Leads</h2>
          </section>
          <button id='buttonNewLead' onClick={props.handleAddLead} >Novo Lead (+)</button>
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
