import { notification } from "antd";

export default class AuthProxy {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login(callback) {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
      notification.success({ message: 'Login başarılı' });
      callback(data);
    }).catch(err => {
      notification.error({ message: "Hata" + err.toString() })
    })
  }
  
  logout() {
    firebase.auth().logout().them(data => {
      localStorage.removeItem('token');
      window.location.replace('/auth/login');
    }).catch(err => {
      notification.error({ message: `Error ${err.toString()}` });
    });
  }
}