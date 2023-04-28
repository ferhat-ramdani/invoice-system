import React, { Component } from "react";
import SystemDataService from "../services/system.services";
import { withRouter } from "../common/with-router";

class Invoice extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            factures : [],
            selectedFacture : null,
            selectedIndex : -1,
            factureDetails : null
        };
    }

    getFactures() {
        SystemDataService.getInvoices()
        .then(response => {
            this.setState({factures : response.data});
        })
        .catch(e => {
            console.log(e);
        });
    }

    getFactureDetails(ref) {
        SystemDataService.getInvoice(ref)
        .then(response => {
            this.setState({factureDetails : response.data});
            console.log(this.state)
        })
        .catch(e => {
            console.log(e);
        })
    }

    setActiveFacture(facture, index) {
    this.setState({
        selectedFacture: facture,
        selectedIndex: index
    });
    this.getFactureDetails(facture.ref);
    }

    convertToMoney(money) {
        money = parseFloat(money);
        money = money.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        });
        return money;
    }

    convertDate(dateStr) {
        const date = new Date(dateStr);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }

    getTTC() {
        var TTC = 0;
        this.state.factureDetails.prestation.designations.map((designation) => {
            let {PUHT, qte, taux} = designation;
            TTC += parseFloat(PUHT) * parseFloat(qte) * (1 + parseFloat(taux));
        });
        return this.convertToMoney(TTC);
    }

    getHT() {
        var HT = 0;
        this.state.factureDetails.prestation.designations.map((designation) => {
            let {PUHT, qte} = designation;
            HT += parseFloat(PUHT) * parseFloat(qte);
        });
        return this.convertToMoney(HT);
    }

    getTotalTVAs() {
        
    }

    
    componentDidMount() {
        this.getFactures();
    }


    render() {
        
        const { factures, selectedFacture, selectedIndex, factureDetails } = this.state;

        return (
            <div className="list row">
                <div className="col-4">
                <h4>Factures</h4>
    
                <ul className="list-group">
                    {factures && factures.map((facture, index) => (
                        <li className={
                                "list-group-item " +
                                (index === selectedIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveFacture(facture, index)}
                            key={index}
                        >
                        {facture.ref + " - " + facture.nomClient}
                        </li>
                    ))}

                </ul>
    
                </div>
                

                {factureDetails ? (

                    <div className="col-7">
                        <div>
                            <div className="facture">
                                <div>
                                    <div className="facture-area">
                                        <h3><strong>Facture</strong></h3>
                                        <div>
                                            <label>
                                                <span className="ref">Réf : {factureDetails.ref}</span>
                                            </label>
                                        </div>
                                        <div className="facture-details">
                                            <div>
                                                Date facturation : {this.convertDate(factureDetails.dateFacturation)}
                                            </div>
                                            <div>
                                                Date échéance : {this.convertDate(factureDetails.dateEcheance)}
                                            </div>
                                            <div>
                                                Code Client : {factureDetails.codeClient}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client">
                                        <div className="client-content">
                                            <span className="target">adressé à</span>
                                            <div className="client-details">
                                                <div>
                                                    <strong>
                                                        {factureDetails.nomClient}
                                                    </strong>
                                                </div>
                                                <div>
                                                    {factureDetails.adresseClient}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <div>
                                            <span className="target">Emméteur</span>
                                        </div>
                                        <div className="company-details">
                                            <div>
                                                <strong>Okayo SAS</strong>
                                            </div>
                                            <div>
                                                35 Rue Du Général Foy
                                                <br></br>
                                                75008 Paris
                                            </div>
                                            <div>
                                                Tel. : 01 80 88 63 00
                                            </div>
                                            <div>
                                                web : <a href="https://www.okayo.fr">www.okayo.fr</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <table className="table d-tb">
                                        <thead>
                                            <tr>
                                            <th scope="col">Désignation</th>
                                            <th scope="col">TVA</th>
                                            <th scope="col">P.U. HT</th>
                                            <th scope="col">Qté</th>
                                            <th scope="col">Total HT</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {factureDetails.prestation.designations.map((designation, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{designation.nom}</th>
                                                    <td>
                                                        {designation.taux * 100 + "%"}
                                                    </td>
                                                    <td>
                                                        {this.convertToMoney(designation.PUHT)}
                                                    </td>
                                                    <td>{designation.qte}</td>
                                                    <td>
                                                        {this.convertToMoney(designation.PUHT * designation.qte)}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="total">
                                    <div className="sub-total">
                                        <div>
                                            Total TVA 20% <span className="total-value">14 600,00</span>
                                        </div>
                                        <div>
                                            Total TVA 7% <span className="total-value">560,00</span>
                                        </div>
                                        <div>
                                            Total TVA 5.5% <span className="total-value">165,00</span>
                                        </div>
                                    </div>
                                    <div className="super-total">
                                        Total TTC <span className="total-value">
                                            {this.getTTC()}
                                        </span>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="payment-recap">
                                        <div>
                                            <strong>Condition de règlement</strong> <span className="total-value">Règlement à la livraison</span>
                                        </div>
                                        <div>
                                            <strong>Total HT</strong> <span className="total-value">{this.getHT()}</span>
                                        </div>
                                    </div>
                                    <div className="payment-details">
                                        <strong>Règlement par virement sur le compte bancaire suivant: </strong>
                                        <div>
                                            Domiciliation: {factureDetails.paiement.domiciliation}
                                        </div>
                                        <div>
                                            Nom du propriétaire du compte: {factureDetails.paiement.proprietaire}
                                        </div>
                                        <div>
                                            <strong>Code IBAN: {factureDetails.paiement.IBAN}</strong>
                                        </div>
                                        <div>
                                            <strong>Code BIC/SWIFT: {factureDetails.paiement.BIC_SWIFT}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-info">
                                    <div>
                                        Société par actions simplifiée (SAS) - 
                                        Capital de {factureDetails.prestation.client.capital} - 
                                        SIRET: {factureDetails.prestation.client.SIRET}
                                    </div>
                                    <div>NAF-APE: {factureDetails.prestation.client.NAF_APE} - 
                                        Num. TVA: {factureDetails.prestation.client.numTVA}</div>
                                </div>
                            </div>
                        </div>
                    </div>


                ) : (
                    <div className="col-8">
                        <center>selectionner une facture à afficher ...</center>
                    </div>
                )}

            </div>
        );
    }

}

export default withRouter(Invoice);