import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import Table from "../view/assets/components/Table";

function Lead(){
    let contador = 0;
    const history = useNavigate()

    const [list,setList] = useState([["Org. Internacional","",""],["","Ind.Farm LTDA",""],["Musc. Sound Live Cmp","",""]])
    localStorage.setItem('lead',JSON.stringify(list))
    useEffect(() =>{
        let dados = localStorage.getItem('copiaLead');
        dados = JSON.parse(dados);
        if(dados!=null)
            setList(dados)
    },[])
    
    const [terra,setTerra] = useState("")
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
        setTerra(valor)
      }
      
      function drop(ev) {
        ev.preventDefault()
        let babado = terra
        let dados = localStorage.getItem('lead');
        dados = JSON.parse(dados);
        let carata = dados
        function findArray(array){
            let boolList = array.map(list => list.includes(babado))
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
        let listaChange = list[findArray(carata)]
        let indexElementChange = findElement(babado,listaChange)
        let aux = listaChange[indexElementChange+1]
        
        if(indexElementChange !== 2){
            
            listaChange[indexElementChange + 1] = listaChange[indexElementChange]
            listaChange[indexElementChange] = aux

            let index = findArray(carata)
            if(index > -1){
                carata.splice(index,1)
            }
            let listaTotal = [listaChange].concat(carata)
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