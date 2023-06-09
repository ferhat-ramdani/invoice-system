import React, { Component } from "react";
import SystemDataService from "../services/system.services";
import { withRouter } from '../common/with-router';
import { Link } from "react-router-dom";

class EditCatalogue extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePUHT = this.onChangePUHT.bind(this);
    this.onChangeCodeTVA = this.onChangeCodeTVA.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      id: null,
      nom: "",
      PUHT: "", 
      description: "",
      codeTVA: null,
      submitted: false,
      TVAs: null
    };
  }

  componentDidMount() {
    // récupérer la liste des catégories TVA
    SystemDataService.getTVAs()
    .then(response => {
      this.setState({TVAs : response.data});
      console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });

    // récupérer l'id du produit à modifier
    let id = this.props.router.params.id;

    //récupérer les informations du produit
    SystemDataService.getProduit(id)
    .then(response => {
    this.setState({
      id: response.data.id,
      nom: response.data.nom,
      PUHT: response.data.PUHT,
      description: response.data.description,
      codeTVA: response.data.codeTVA
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }
  
  updateProduit(currentState) {
    var data = {
      id: currentState.id,
      nom: currentState.nom,
      PUHT: currentState.PUHT,
      description: currentState.description,
      codeTVA: currentState.codeTVA,
    };
    
    SystemDataService.updateProduit(currentState.id, data)
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

  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }

  onChangePUHT(e) {
    this.setState({
      PUHT: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeCodeTVA(e) {
    console.log(e.target.value);
    this.setState({
      codeTVA: e.target.value
    });
  }
  
  resetState() {
    this.setState({
      submitted: false
    });
  }

  render() {

    return (

      <div className="submit-form">

        {this.state.submitted ? (

          <div>
            <h4>Produit mis à jour !</h4>
            <button className="btn btn-success" onClick={this.resetState}>
              Continuer
            </button>
            <Link to={"/catalogue"} className="btn btn-warning" >
                Retour
            </Link>
          </div>

        ) : (

          <div>

            <div className="form-group">
              <label htmlFor="nom">nom</label>
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
              <label htmlFor="PUHT">P.U. HT</label>
              <input
                type="text"
                className="form-control"
                id="PUHT"
                required
                value={this.state.PUHT}
                onChange={this.onChangePUHT}
                name="PUHT"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="codeTVA">
              <label htmlFor="codeTVA">CodeTVA</label>
              <select 
              className="custom-select" 
              id="codeTVA" 
              value={this.state.codeTVA}
              onChange={this.onChangeCodeTVA}>

                {this.state.TVAs && this.state.TVAs.map((TVA, index) => (
                  <option value={TVA.id} key={index}>
                    {TVA.id}
                  </option>
                ))}

              </select>
            </div>

            <button 
              onClick={() => this.updateProduit(this.state)} 
              className="btn btn-success">
                Submit
            </button>

            <Link to={"/catalogue"} className="btn btn-warning" >
                Retour
            </Link>
            
          </div>
        )}
    </div>
    );
  }
}
export default withRouter(EditCatalogue);