import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({request, response}: HttpContextContract) {

    const {email, password} = request.body()

    try{
      const user = await User.findBy("email",email)
      if(user){
        return response.status(404).send("Usuário já existe!")
      }

    }catch(e){
      return response.status(500).send("Erro para pegar o usuário!")
    }


    try{
      const createUser = await User.create({
        email: email,
        password: await Hash.make(password)
      })

      return response.json({
        id: createUser.id,
        email: createUser.email
      })

    }catch(e){
      response.status(500).json({
        error: "Erro para criar usuário!"
      })
    }



  }

  public async store({}: HttpContextContract) {}

  public async find({response}: HttpContextContract) {
    response.created("ola")
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async auth({request, auth, response}: HttpContextContract) {

    const {email, password} = request.body()

    try{
      const token = await auth.use("api").attempt(email, password)
      return token
    }catch(e){
      console.log(e)
      return response.unauthorized('Credenciais inválidas!')
    }

  }
}
