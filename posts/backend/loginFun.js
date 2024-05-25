import db from './db/db.js';


export function login(username, password) {
    try {
      const users = db.data.users;
      let usernameImp = username;
      let passwordImp = password;
      const userData = users.find(({name}) => name == usernameImp);
      if (usernameImp == userData.name && passwordImp == userData.password) {
          console.log('Зарегался')
          return true
      } else {
          console.log('Не зарегался')
          return false
      }
    } catch (error){
        console.log(error.message)
        console.log('ошибка')
    }

}