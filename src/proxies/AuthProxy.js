import { notification } from "antd";
import axios from 'axios';

export default class AuthProxy {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login() {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
          localStorage.setItem('idToken', idToken);
          resolve(data);
        })
      }).catch(err => {
        notification.error({ message: "Hata" + err.toString() });
        reject(err);
      })
    })
  }

  logout() {
    firebase.auth().signOut().then(data => {
      localStorage.removeItem('idToken');
      delete axios.defaults.headers.common["Authorization"];
      window.location.replace('/auth/login');
    }).catch(err => {
      notification.error({ message: `Error ${err.toString()}` });
    });
  }
}