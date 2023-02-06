import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, {useEffect, useState } from "react";

function Form(){
    const [form,setform] = useState({
      nome:'',
      tipo:'',
      cor:'',
      und:'',
      quant:null
    });
  
    const handleChange = (event)=>{ 
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
    const handleSubmit=(event)=>{
      event.preventDefault();
      alert("O dado foi inserido");
    }

    const postData = () => {
    return axios
      .post("http://localhost:8080/apipcr/material/create", form)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      })
      .finally("post concluido");
  };
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap form-control-sm" >
          <label className="input-group-text">
            nome
          </label>
          <input type="text" className="form-control-sm" name="nome" value={form.nome} onChange={handleChange}/>
        </div>
        <div className="input-group flex-nowrap">
          <label className="input-group-text">
            tipo
          </label>
          <input type="text" className="form-control-sm" name="tipo" value={form.tipo} onChange={handleChange} />
        </div>
        <div className="input-group flex-nowrap">
          <label className="input-group-text">
            cor
          </label>
          <input type="text" className="form-control-sm" name="cor" value={form.cor} onChange={handleChange}/>
        </div>
        <div className="input-group flex-nowrap">
          <label className="input-group-text">
            und
          </label>
          <input type="text" className="form-control-sm" name="und" value={form.und} onChange={handleChange}/>
        </div>
        <div className="input-group flex-nowrap">
          <label className="input-group-text">
            quantidade
          </label>
          <input type="text" className="form-control-sm" name="quant" value={form.quant} onChange={handleChange}/>
        </div>
        <div>
          <input type="submit" onClick={postData} value="enviar"/>
        </div>
      </form>
  );
}

export default Form;
