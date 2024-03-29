import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "https://serene-woodland-83390.herokuapp.com/lot/";
class LotService {
  getLots() {
    return axios.get(BASE_URL);
  }

  createLot(Lot) {
    return axios.post(BASE_URL, Lot, {
      headers: authHeader(),
    });
  }

  getBidsById(id) {
    return axios.get(BASE_URL + "bids/" + id);
  }

  getCreatedLots(item) {
    return axios.post(BASE_URL + "catch/load", item);
  }

  getSpendLotSize(item) {
    console.log(item);
    return axios.post(BASE_URL + "catch/load/sum", item);
  }

  getLotWeekly() {
    return axios.get(BASE_URL + "weekly");
  }

  getLotById(LotId) {
    return axios.get(BASE_URL + LotId);
  }

  getCoverById(LotId) {
    return axios.get(BASE_URL + "cover/" + LotId);
  }

  setCover(LotId, cover) {
    return axios.post(BASE_URL + "cover/" + LotId, cover);
  }
  updateLot(Lot, LotId) {
    return axios.patch(`${BASE_URL}/${LotId}`, Lot);
  }

  deleteLot(LotId) {
    return axios.delete(`${BASE_URL}/${LotId}`);
  }
}

// export as a EmployeeService object
export default new LotService();
