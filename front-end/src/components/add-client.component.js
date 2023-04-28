import React, { Component } from "react";
import { Link } from "react-router-dom";
import SystemDataService from "../services/system.services";

export default class EditCatalogue extends Component {
  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangeSIRET = this.onChangeSIRET.bind(this);
    this.onChangeNAF_APE = this.onChangeNAF_APE.bind(this);
    this.onChangeNumTVA = this.onChangeNumTVA.bind(this);
    this.onChangeCapital = this.onChangeCapital.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      code: null,
      nom: "",
      adresse: "", 
      SIRET: "",
      NAF_APE: "",
      numTVA: "",
      capital: "",
      submitted: false
    };
  }
  
  saveClient(currentState) {
    var data = {
        code: currentState.code,
        nom: currentState.nom,
        adresse: currentState.adresse, 
        SIRET: currentState.SIRET,
        NAF_APE: currentState.NAF_APE,
        numTVA: currentState.numTVA,
        capital: currentState.capital,
    };
    
    SystemDataService.createClient(data)
    .then(response => {
      this.setState({
        submitted: true
      });
      console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    });
  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }

  onChangeAdresse(e) {
    this.setState({
      adresse: e.target.value
    });
  }

  onChangeSIRET(e) {
    this.setState({
      SIRET: e.target.value
    });
  }

  onChangeNAF_APE(e) {
    this.setState({
      NAF_APE: e.target.value
    });
  }

  onChangeNumTVA(e) {
    this.setState({
      numTVA: e.target.value
    });
  }

  onChangeCapital(e) {
    this.setState({
      capital: e.target.value
    });
  }
  
  resetState() {
    this.setState({
        code: null,
        nom: "",
        adresse: "", 
        SIRET: "",
        NAF_APE: "",
        numTVA: "",
        capital: "",
        submitted: false
    });
  }

  render() {
    return (

      <div className="submit-form">

        {this.state.submitted ? (

          <div>
            <h4>Client ajouté !</h4>
            <button className="btn btn-success" onClick={this.resetState}>
              Ajouter
            </button>
            <Link to={"/client"} className="btn btn-warning" >
                Retour
            </Link>
          </div>

        ) : (

          <div>

            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                className="form-control"
                id="code"
                required
                value={this.state.code}
                onChange={this.onChangeCode}
                name="code"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                required
                value={this.state.nom}
                onChange={this.onChangeNom}
                name="nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Adresse">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="Adresse"
                required
                value={this.state.adresse}
                onChange={this.onChangeAdresse}
                name="Adresse"
              />
            </div>

            <div className="form-group">
              <label htmlFor="SIRET">SIRET</label>
              <input
                type="text"
                className="form-control"
                id="SIRET"
                required
                value={this.state.SIRET}
                onChange={this.onChangeSIRET}
                name="SIRET"
              />
            </div>

            <div className="NAF_APE">
              <label htmlFor="NAF_APE">NAF_APE</label>
              <input
                type="text"
                className="form-control"
                id="NAF_APE"
                required
                value={this.state.NAF_APE}
                onChange={this.onChangeNAF_APE}
                name="NAF_APE"
              />
            </div>

            <div className="numTVA">
              <label htmlFor="numTVA">NumTVA</label>
              <input
                type="text"
                className="form-control"
                id="numTVA"
                required
                value={this.state.numTVA}
                onChange={this.onChangeNumTVA}
                name="numTVA"
              />
            </div>
            
            <div className="capital">
              <label htmlFor="capital">Capital</label>
              <input
                type="text"
                className="form-control"
                id="capital"
                required
                value={this.state.capital}
                onChange={this.onChangeCapital}
                name="capital"
              />
            </div>

            <button 
              onClick={() => this.saveClient(this.state)} 
              className="btn btn-success">
                Submit
            </button>

            <Link to={"/client"} className="btn btn-warning" >
                Retour
            </Link>
            
          </div>
        )}
    </div>
    );
  }
}