import axios from 'axios';

export default class Proxy {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('idToken');
  }
  async getData({ url, params }) {
    const endpoint = `${this.baseUrl}${url}`;
    try {
      const { data } = await axios.get(endpoint, { params });
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err }
    }
  }
  async postData({ url, body, params }) {
    const endpoint = `${this.baseUrl}${url}`;
    try {
      const { data } = await axios.post(endpoint, body, { params });
      return data;
    } catch (err) {
      return new Error(err.response);
    }
  }
  async putData({ url, body, params }) {
    const endpoint = `${this.baseUrl}${url}`;
    try {
      const { data } = await axios.put(endpoint, body, { params });
      return data;
    } catch (err) {
      return new Error(err.response);
    }
  }
  async patchData({ url, body, params }) {
    const endpoint = `${this.baseUrl}${url}`;
    try {
      const { data } = await axios.patch(endpoint, body, { params });
      return data;
    } catch (err) {
      return new Error(err.response);
    }
  }
  async deleteData({ url, body, params }) {
    const endpoint = `${this.baseUrl}${url}`;
    try {
      const { data } = await axios.delete(endpoint, body, { params });
      return data;
    } catch (err) {
      return new Error(err.response);
    }
  }
}