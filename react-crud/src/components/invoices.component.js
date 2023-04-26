import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class Invoices extends Component {
  render() {
    return (
        <div className="list row">
            <div className="col-6">
            <h4>Factures</h4>

            <ul className="list-group">
                <li className="list-group-item" >
                    Ref_1
                </li>
                <li className="list-group-item active" >
                    2022-0025_Mon_Client_SAS
                </li>
                <li className="list-group-item" >
                    Ref_3
                </li>
                <li className="list-group-item" >
                    Ref_4
                </li>
                <li className="list-group-item" >
                    Ref_5
                </li>
                <li className="list-group-item" >
                    Ref_6
                </li>
            </ul>

            <Link to="/edit" className="badge text-bg-warning" >
                Edit
            </Link>
            </div>

            <div className="col-6">
                <div>
                    <div className="facture">
                        <div>
                            <div className="facture-area">
                                <h3><strong>Facture</strong></h3>
                                <div>
                                    <label>
                                        <span className="ref">Réf : 2022-0025</span>
                                    </label>
                                </div>
                                <div className="facture-details">
                                    <div>
                                        Date facturation : 26/07/2018
                                    </div>
                                    <div>
                                        Date échéance : 31/07/2018
                                    </div>
                                    <div>
                                        Code Client : CU2203-0005
                                    </div>
                                </div>
                            </div>
                            <div className="client">
                                <div className="client-content">
                                    <span className="target">adressé à</span>
                                    <div className="client-details">
                                        <div>
                                            <strong>Mon client SAS</strong>
                                        </div>
                                        <div>
                                            45, rue du test
                                            <br></br>
                                            75016 PARIS
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
                            <table class="table">
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
                                    <tr>
                                        <th scope="row">Mon produit C</th>
                                        <td>20%</td>
                                        <td>70 000,00</td>
                                        <td>1</td>
                                        <td>70 000,00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mon produit A</th>
                                        <td>5.5%</td>
                                        <td>1 500,00</td>
                                        <td>2</td>
                                        <td>3 000,00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mon produit D</th>
                                        <td>20%</td>
                                        <td>3 000,00</td>
                                        <td>1</td>
                                        <td>3 000,00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mon produit B</th>
                                        <td>7%</td>
                                        <td>4 000,00</td>
                                        <td>2</td>
                                        <td>8 000,00</td>
                                    </tr>
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
                                Total TTC <span className="total-value">99 325,00</span>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="payment-recap">
                                <div>
                                    <strong>Condition de règlement</strong> <span className="total-value">Règlement à la livraison</span>
                                </div>
                                <div>
                                    <strong>Total HT</strong> <span className="total-value">84 000,00</span>
                                </div>
                            </div>
                            <div className="payment-details">
                                <strong>Règlement par virement sur le compte bancaire suivant: </strong>
                                <div>
                                    Domiciliation: BRED 
                                </div>
                                <div>
                                    Nom du propriétaire du compte: OKAYO
                                </div>
                                <div>
                                    <strong>Code IBAN: FR76 0000 0000 0000 0000 0000 097</strong>
                                </div>
                                <div>
                                    <strong>Code BIC/SWIFT: BREDFRPPXXX</strong>
                                </div>
                            </div>
                        </div>
                        <div className="client-info">
                            <div>Société par actions simplifiée (SAS) - Capital de 10 000 € - SIRET: 82255940700017</div>
                            <div>NAF-APE: 6201Z - Num. TVA: FR 76 822559407</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}