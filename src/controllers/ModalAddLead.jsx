import React, {useEffect, useState} from 'react';
import ModalNewLead from '../view/assets/components/Modal/index'
import {useHistory} from 'react-router-dom';

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const [lgShow, setLgShow] = useState(false);

  
function allCheckbox(){
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
