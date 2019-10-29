import axios from 'axios';

const baseUrl = 'http://localhost:5000';
const customerListUrl = `{baseUrl}/customers`;
const goalUrl = (id: String) => `{baseUrl}/goal_{id}`;

export default class APIService {
  public static getCustomerList() {
    return axios.get(customerListUrl);
  }

  public static getCustomerGoal(customerId: String) {
    return axios.get(goalUrl(customerId));
  }
}
