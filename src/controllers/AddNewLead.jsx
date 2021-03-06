import React, {useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import NewLead from "../view/assets/components/NewLead"

export default function ConfigLeadAdd(){
    const history = useNavigate()
    const [name,setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [date, setDate] = useState([])
    const [nameDate, setNameDate] = useState([])
    const [noRepeat, setNoRepeat] = useState([])
    const [listLead, setListLead] = useState([])
    let [oportunity, setOportunity] = useState(new Set())

    useEffect(() =>{
        let dados = localStorage.getItem('noRepeat');
        dados = JSON.parse(dados);
        if(dados!=null)
            setNameDate(dados)
    },[])

    useEffect(()=>{
        let dados = localStorage.getItem('newLead');
        dados = JSON.parse(dados);
        if(dados != null){
            setListLead(dados)
        }
    },[])

 
    function allOrClear(){
        let checkbox = document.getElementsByClassName("check")
        let firstCheckbox = document.getElementById("fistCheck")
        if(!firstCheckbox.checked){
            for(let i = 0; i < checkbox.length; i++){
                checkbox[i].checked = false
                oportunity = new Set()
            }
        }
        else{
            for(let i = 0; i < checkbox.length; i++){
                    checkbox[i].checked = true
                    oportunity.add(checkbox[i].value) 
            }    
        }
    }

    function saveDate(ev){
        ev.preventDefault()
        date.push(name)
        date.push(phone)
        date.push(mail)
        let lista = []
        oportunity.forEach(v => lista.push(v))
        date.push(lista)
        let lead = localStorage.getItem('copiaLead')
        let copiaLead = localStorage.getItem('lead')
        lead = JSON.parse(lead)
        copiaLead = JSON.parse(copiaLead)
        lead = copiaLead
        if(!nameDate.includes(name)){
            nameDate.push(name)
            localStorage.setItem('newLead',JSON.stringify(date));
            localStorage.setItem('noRepeat', JSON.stringify(nameDate))
            lead.push([name])
            localStorage.setItem('copiaLead',JSON.stringify(lead));
            listLead.push(date)
            localStorage.setItem('newLead',JSON.stringify(listLead));
            history.push('/lead')
        }
        else{       
            alert("Lead j?? cadastrada")
        }
    }
    return(
        <>
        <NewLead 
            onChangeMail= {event => {setMail(event.target.value)}} 
            onChangePhone= {event => {setPhone(event.target.value)}} 
            onChangeName= {event => {setName(event.target.value)}} name={name} phone ={phone} mail={mail}
            RPA = {event => {oportunity.add(event.target.value)}}
            product = {event => {oportunity.add(event.target.value)}}
            analitycs = {event => {oportunity.add(event.target.value)}}
            BPM = {event => {oportunity.add(event.target.value)}}
            all = {allOrClear}
            save = {saveDate}
        />
        </>
    )
};

