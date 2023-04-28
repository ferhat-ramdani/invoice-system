import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Welcome from "./components/welcome.component";
import Invoices from "./components/invoices.component";
import Catalogue from "./components/catalogue.component";
import AddCatalogue from "./components/add-catalogue.component";
import EditCatalogue from "./components/edit-catalogue.component";
import Client from "./components/client.component";
import AddClient from "./components/add-client.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Invoice System
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/invoices"} className="nav-link">
                Factures
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/catalogue"} className="nav-link">
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/client"} className="nav-link">
                Client
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/catalogue" element={<Catalogue/>} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/add-catalogue" element={<AddCatalogue/>} />
            <Route path="/edit-catalogue/:id" element={<EditCatalogue/>} />
            <Route path="/client" element={<Client/>} />
            <Route path="/add-client" element={<AddClient/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;