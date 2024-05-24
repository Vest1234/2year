import db from './db.js';

export function login(username, password) {
    try {
      const users = db.data.users;
      let usernameImp = username;
      let passwordImp = password;
      const userData = users.find(({name}) => name == usernameImp);
      if (usernameImp == userData.name && passwordImp == userData.password) {
          console.log('Зарегался')
      } else {
          console.log('Не зарегался')
      }
    } catch (error){
        console.log('Не зарегался')
    }

}