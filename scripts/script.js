const validatePhone = (number) => {
  const numberRegExp = /^\+?[0-9]{1,3}\([0-9]{2}\)\d\d\d-?\d\d-?\d\d$/g
  return numberRegExp.test(number)
}

// const phone = prompt('Введите номер телефона')
// console.log(validatePhone(phone))

let date = 'Lorem ipsum dolor, sit amet consectetur 2007.01.01 adipisicing elit. Possimus, vero.'
let regDate = /(\d{4})\.(\d{2})\.(\d{2})/i
console.log(date.replace(regDate, '$3/$2/$1'));
console.log(regDate.exec(date));
console.log(date.match(regDate));

const addZero = (time) => time < 10 ? `0${time}` : time


const timer = () => {
  let dateNow = new Date()
  console.clear()
  console.log(`${addZero(dateNow.getHours())}:${addZero(dateNow.getMinutes())}:${addZero(dateNow.getSeconds())}`);
}

// setInterval(timer, 1000)

const regEmail = /^[a-zA-Z0-9_\.-]{2,}@[a-z0-9_]+\.?[a-z0-9_]+\.[a-z]{1,12}$/g;

const user1 = {
  email: '',
  photoURL: '',
  name: '',
  registrationDate: '',
  logOut: function () {
    console.log(this);
    
    this.email = '';
    this.name = '';
    this.photoURL = '';
    this.registrationDate = '';
  },
  test: function () {
    console.log(this);
    
  }
}

const user2 = {
  email: 'lkadshfglkdf@asdfasdf.com',
  photoURL: 'asdfjhdsafsadf',
  name: 'dkhfglkdfs',
  registrationDate: '',
  logOut: function () {
    console.log(this);
    
    this.email = '';
    this.name = '';
    this.photoURL = '';
    this.registrationDate = '';
  },
  test: () => console.log(this)
}

// console.log(this);
// user1.test()
// user2.test()

const User = function (name, email, phone, private) {
  this._name = name;
  this._email = email;
  this._phone = phone;
  this.getName = () => this._name;
  this.getPrivate = () => private;
  this.setPrivate = (value) => {
    const valReg = /[А-ЯЁа-яё]+/g
    if (!valReg.test(value)) {
      private = value;
    } else {
      throw new SyntaxError('Неправильные формат данных')
    }
  }
  // const self = this
  // function convertName () {
  //   console.log(self);
     
  //   return self._name.toUpperCase()
  // }
  const convertName = () => {
    console.log(this);
     
    return this._name.toUpperCase()
  }
  // this.getConvertName = function () {
  //   return convertName()
  // }
  this.getConvertName = () => {
    return convertName()
  }
  this.showName = () => console.log(this._name);
  
}

const user3 = new User('Alex', 'alex@mail.com', '3874568345', 'private')
console.log(user3.getConvertName().split(''));

// function Student (name, email, phone, group) {
//   User.call(this, name, email, phone)
//   this.group = group
//   this.getName = () => this._name.toUpperCase()
// }

// const student = new Student('Alex', 'alex@mail.com', '3874568345', 'private')
// console.log(student.getName());
