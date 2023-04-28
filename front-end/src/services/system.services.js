import http from "../http-common";

class SystemDataService {

  getInvoice(ref) {
    return http.get(`/factures/${ref}`);
  }
  getInvoices() {
    return http.get(`/factures`);
  }

  createProduit(data) {
    return http.post(`/produits`, data);
  }
  getProduits() {
    return http.get(`/produits`);
  }
  getProduit(id) {
    return http.get(`/produits/${id}`)
  }
  updateProduit(id, data) {
    return http.put(`/produits/${id}`, data)
  }
  deleteProduit(id) {
    return http.delete(`/produits/${id}`)
  }

  createClient(data) {
    return http.post(`/clients`, data);
  }
  getClients() {
    return http.get(`/clients`);
  }
  getClient(code) {
    return http.get(`/clients/${code}`)
  }
  updateClient(code, data) {
    return http.put(`/clients/${code}`, data)
  }
  deleteClient(code) {
    return http.delete(`/clients/${code}`)
  }

  getTVAs() {
    return http.get(`/categorieTVAs`);
  }
}

export default new SystemDataService();