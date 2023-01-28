import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Form(){
    const [form,setForm] = useState([]);
    let material = {
        nome:'spray',
        tipo:'paris',
        cor:'azul rio claro',
        und:'und',
        quant:30
    };
    const fetchData = () => {
        return  axios.post('http://localhost:8080/apipcr/material/create',material)
              .then((response) => setForm(response.data))
              .catch((error)=>{console.log(error)})
              .finally('post concluido');
      }
    
      useEffect(() => {
        fetchData();
      },[])
    
      return (
        <main>
          <h1>Pedidos List</h1>
          <ul>
            { form && form.length > 0 && form.map((formObj, index) => (
                <li key={formObj.nome}>{formObj.tipo} {formObj.quant}</li>
              ))}
          </ul>
        </main>
      );
    }
    

export default Form;