import axios from 'axios';
import * as model from './model';

const baseUrl = 'http://localhost:5000';
const customerListUrl = `${baseUrl}/customers`;
const goalUrl = (id: String) => `${baseUrl}/goal_${id}`;

export default class APIService {
  public static async getCustomerList(): Promise<model.Customer[]> {
    try {
      const customers = (await axios.get(customerListUrl)).data;
      console.log(customers);
      return customers;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public static async getCustomerGoal(customerId: String): Promise<model.Goal|undefined> {
    try {
      const goal = (await axios.get(goalUrl(customerId))).data;
      console.log(goal);
      return goal;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
