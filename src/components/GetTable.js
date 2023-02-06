import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function GetTable(){
    //   let material = {
    //     nome:'spray',
    //     tipo:'paris',
    //     cor:'azul rio claro',
    //     und:'und',
    //     quant:30
    // };
    const [table,setTable] = useState([]);
    
    async function fetchData(){
      return await axios.get('http://localhost:8080/apipcr/material/search')
            .then((response) => setTable(response.data));
    }
    // const posData = () => {
    //   return axios.post('http://localhost:8080/apipcr/material/create',material)
    //   .then((response) => console.log(response.data))
    //   .catch((error)=>{console.log(error)})
    //   .finally('post concluido');
    // }
    
      // useEffect(() => {
      //   fetchData();
      // },[])
      return (
        <main>
          <button onClick={fetchData}>list</button>
          <ul>
            { table && table.length > 0 && table.map((tableObj, index) => (
                <li key={index} >{tableObj.nome} {tableObj.quant}</li>
              ))}
          </ul>
        </main>
      );
    }
    

export default GetTable;