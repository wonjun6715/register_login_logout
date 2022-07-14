const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    maxLength: 50,
    trim: true, // space를 없애줌
    unique: 1, // 같은 값은 하나만 존재함
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Numeber,
  },
}),

const user = mongoose.model('user', userSchema) // userSchema를 model로 감싸줌

module.exports = { user } // user라는 모델을 본 파일 밖에서도 사용할 수 있도록 export