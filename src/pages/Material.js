import React, { Component } from "react";
import GetTable from "../components/GetTable";
import Form from "../components/Form";

class Material extends Component {
  render() {
    return (
      <div class="container-sm">
        <div class="row">
          <div class="col-6">
            <Form />
          </div>
          <div class="col-6">
          <GetTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Material;
