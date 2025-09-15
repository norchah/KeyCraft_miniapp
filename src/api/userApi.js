import axios from "axios";
import camelcaseKeys from "camelcase-keys";


const serviceJwt = process.env.SERVICE_JWT;

export class UserApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://norchah.ru/users',
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${serviceJwt}`,
      },
    });
  }


  async get() {
    const {data} = this.api.get('/');
    return camelcaseKeys(data, {deep: true});
  }
}