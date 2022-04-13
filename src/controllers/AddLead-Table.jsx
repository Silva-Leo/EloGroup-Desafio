import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Table from "../view/assets/components/Table";

function Lead(){
    let contador = 0;
    const history = useNavigate()

    const [list,setList] = useState([["EloGroup","",""],["Drogasil","",""],["Lollapaloza","",""]])
    
    localStorage.setItem('lead',JSON.stringify(list))
    useEffect(() =>{
        let dados = localStorage.getItem('copiaLead');
        dados = JSON.parse(dados);
        if(dados!=null)
            setList(dados)
    },[])
    
    const [informacao,setinformacao] = useState("")
    function True(element){
        if(element){
            return true
        }else{
            return false
        }
    }

    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        let valor = ev.target.innerText
        setinformacao(valor)
      }
      
      function drop(ev) {
        ev.preventDefault()
        let listaInformacao = informacao
        let dados = localStorage.getItem('lead').JSON.parse(dados);
        let informacaoRecebida = dados
        function findArray(array){
            let boolList = array.map(list => list.includes(listaInformacao))
            return boolList.findIndex(True)
            }

        function findElement(element,list){
            let contador = 0
            for(let i=0; i < list.length; i++){
                contador++
                if(element === list[i])
                    return contador - 1
            }
        }
        let listaChange = list[findArray(informacaoRecebida)]
        let indexElementChange = findElement(listaInformacao,listaChange)
        let aux = listaChange[indexElementChange+1]
        
        if(indexElementChange !== 2){
            
            listaChange[indexElementChange + 1] = listaChange[indexElementChange]
            listaChange[indexElementChange] = aux

            let index = findArray(informacaoRecebida)
            if(index > -1){
                informacaoRecebida.splice(index,1)
            }
            let listaTotal = [listaChange].concat(informacaoRecebida)
            localStorage.setItem('copiaLead',JSON.stringify(listaTotal));
            setList(listaTotal)
            
        }   
        else{
                alert("Movimento Bloqueado")
        }      
    }

    function handleAddLead(){
        history('/Painel/NewLead')
    }
    return(
        <Table
        LogicView={list.map((element) => {
          contador++;
          return (
            <tr className={contador % 2 ? "white" : "gray"}>
              <th className="repeat" onDragStart={drag} draggable="true">
                {element[0]}
              </th>
              <th
                className="repeat"
                onDragStart={drag}
                onDrop={drop}
                onDragOver={allowDrop}
                draggable="true"
              >
                {element[1]}
              </th>
              <th
                className="repeat"
                onDrop={drop}
                onDragOver={allowDrop}
                draggable="true"
              >
                {element[2]}
              </th>
            </tr>
          );
        })}
        handleAddLead={handleAddLead}
      />
    )
}

export default Lead;