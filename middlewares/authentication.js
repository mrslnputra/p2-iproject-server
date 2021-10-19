const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models/index')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if(!access_token){
      throw({name:'Invalidtoken'})
    }
    const payload = verifyToken(access_token)
    if(!payload){
      throw({name:'Invalidtoken'})
    }
    const user = User.findByPk(payload.id)
    if(!user){
      throw({name:'Invalidtoken'})
    }
    req.user ={
      id = user.id,
      email = user.email
    }
    next()
  } catch (err) {
    next(err)
  }
}