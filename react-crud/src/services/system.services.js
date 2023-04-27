import http from "../http-common";

class SystemDataService {
  getInvoice(ref) {
    return http.get(`/factures/${ref}`);
  }
  getInvoices() {
    return http.get(`/factures`);
  }
}

export default new SystemDataService();