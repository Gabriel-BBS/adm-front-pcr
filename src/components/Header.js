import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import {Link,NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <NavLink>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Colorindo Recife</Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link className="nav-link" to="/">Pedidos</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/material">Materiais</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavLink>
    );
  }
}

export default Header;
