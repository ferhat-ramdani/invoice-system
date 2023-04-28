import React, { Component } from "react";
import SystemDataService from "../services/system.services";
import { withRouter } from "../common/with-router";
import { Link } from "react-router-dom";

class Produit extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeClient = this.onChangeClient.bind(this);

        this.state = {
            produits : [],
            selectedProduit : null,
            selectedIndex : -1,
            client: null,
            clients: null
        };
    }

    componentDidMount() {
        SystemDataService.getProduits()
        .then(response => {
            this.setState({produits : response.data});
        })
        .catch(e => {
            console.log(e);
        });

        SystemDataService.getClients()
        .then(response => {
        this.setState({clients : response.data, client: response.data[0].code});
        console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    setActiveProduit(produit, index) {
        this.setState({
            selectedProduit: produit,
            selectedIndex: index
        });
    }

    convertToMoney(money) {
        money = parseFloat(money);
        money = money.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        });
        return money;
    }

    deleteProduit(currentState) {
        SystemDataService.deleteProduit(currentState.selectedProduit.id)
        .then(response => {
            const updatedProduits = currentState.produits.filter(
                produit => produit.id !== currentState.selectedProduit.id
            );
            this.setState(
                {
                    produits: updatedProduits,
                    selectedProduit: null,
                    selectedIndex: -1
                }
            )
        })
        .catch(e => {
            console.log(e);
        });
    }

    onChangeClient(e) {
        this.setState({
            client: e.target.value
        });
    }
    
    render() {
        
        const { produits, selectedProduit, selectedIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-4">
                    <h4>Produits</h4>
        
                    <ul className="list-group">
                        {produits && produits.map((produit, index) => (
                            <li className={
                                    "list-group-item d-flex justify-content-between align-items-center " +
                                    (index === selectedIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveProduit(produit, index)}
                                key={index}
                            >
                            {produit.id + " - " + produit.nom}
                            <div className="btn-group" role="group">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-success">
                                        + <span className="badge badge-light"></span>
                                    </button>
                                    <button type="button" className="btn btn-danger ml-1">
                                        -
                                    </button>
                                </div>
                            </div>
                            </li>
                        ))}

                    </ul>
                    <div className="d-flex flex-column">
                        <label htmlFor="client">Choisir un client : </label>
                        <select 
                            className="custom-select" 
                            id="client" 
                            value={this.state.client}
                            onChange={this.onChangeClient}>
                                {this.state.clients && this.state.clients.map((client, index) => (
                                <option value={client.code} key={index}>{client.code}</option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <Link to="/add-catalogue" className="btn btn-success" >
                            Ajouter
                        </Link>
                        <button className="btn btn-primary ml-2">
                            Confirmer prestation
                        </button>
                    </div>
                </div>

                

                {selectedProduit ? (

                    <div className="col-8">
                        <div>
                            <center><h1>{selectedProduit.nom}</h1></center>
                        </div>
                        <div className="product-details">
                            <div>
                                <strong>Prix unitaire hors taxe (P.U. HT)</strong> : {this.convertToMoney(selectedProduit.PUHT)}
                            </div>
                            <div>
                                <strong>TVA du produit</strong> : {selectedProduit.categorieTVA.taux * 100 + "%"}
                            </div>
                            <div>
                                <strong>Description du produit</strong> : 
                                <p>
                                    {selectedProduit.description}
                                </p>
                            </div>
                        </div>
                        <Link to={`/edit-catalogue/${selectedProduit.id}`} className="btn btn-warning" >
                            Modifier
                        </Link>
                        <button className="btn btn-danger" onClick={() => {this.deleteProduit(this.state)}}>
                            Supprimer
                        </button>
                    </div>


                ) : (
                    <div className="col-8">
                        <center>selectionner un produit à afficher ...</center>
                    </div>
                )}

            </div>
        );
    }

}

export default withRouter(Produit);