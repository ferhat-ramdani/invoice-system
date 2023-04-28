import React, { Component } from "react";
import SystemDataService from "../services/system.services";
import { withRouter } from "../common/with-router";
import { Link } from "react-router-dom";

class Client extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            clients : [],
            selectedClient : null,
            selectedIndex : -1,
        };
    }

    componentDidMount() {
        SystemDataService.getClients()
        .then(response => {
            this.setState({clients : response.data});
        })
        .catch(e => {
            console.log(e);
        });
    }

    setActiveClient(client, index) {
        this.setState({
            selectedClient: client,
            selectedIndex: index
        });
    }

    deleteClient(currentState) {
        SystemDataService.deleteClient(currentState.selectedClient.code)
        .then(response => {
            const updatedClients = currentState.clients.filter(
                client => client.code !== currentState.selectedClient.code
            );
            this.setState(
                {
                    clients: updatedClients,
                    selectedClient: null,
                    selectedIndex: -1
                }
            )
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    render() {
        
        const { clients, selectedClient, selectedIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-4">
                    <h4>Clients</h4>
        
                    <ul className="list-group">
                        {clients && clients.map((client, index) => (
                            <li className={
                                    "list-group-item " +
                                    (index === selectedIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveClient(client, index)}
                                key={index}
                            >
                            {client.code + " - " + client.nom}
                            </li>
                        ))}

                    </ul>
                    <Link to="/add-client" className="btn btn-success" >
                        Ajouter
                    </Link>
                </div>

                

                {selectedClient ? (

                    <div className="col-8">
                        <div>
                            <center><h1>{selectedClient.nom}</h1></center>
                        </div>
                        <div>
                            <div>
                                <strong>Code: </strong> : {selectedClient.code}
                            </div>
                            <div>
                                <strong>Nom: </strong> : {selectedClient.nom}
                            </div>
                            <div>
                                <strong>Adresse: </strong> : {selectedClient.adresse}
                            </div>
                            <div>
                                <strong>Numéro SIRET: </strong> : {selectedClient.SIRET}
                            </div>
                            <div>
                                <strong>Numéro NAF/APE: </strong> : {selectedClient.NAF_APE}
                            </div>
                            <div>
                                <strong>Numéro TVA: </strong> : {selectedClient.numTVA}
                            </div>
                            <div>
                                <strong>Capital: </strong> : {selectedClient.capital}
                            </div>
                        </div>
                        <Link to={`/edit-client/${selectedClient.code}`} className="btn btn-warning" >
                            Modifier
                        </Link>
                        <button className="btn btn-danger" onClick={() => {this.deleteClient(this.state)}}>
                            Supprimer
                        </button>
                    </div>


                ) : (
                    <div className="col-8">
                        <center>selectionner un client à afficher ...</center>
                    </div>
                )}

            </div>
        );
    }

}

export default withRouter(Client);