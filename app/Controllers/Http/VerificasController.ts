// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Verifica from '../../Models/Verifica'

export default class VerificasController {
  public async index ({ response }) {
    const verifica = await Verifica.all();

    response.status(200).json(verifica);
  }
  public async show ({ response }) {
    const verifica = await Verifica.all();

    response.status(200).json(verifica);
  }
  public async store ({ response, request }) {
    const verifica = await Verifica.create(request.only(['id', 'bloqueado', 'createdAt'] ))
    console.log(request);
    response.status(200).json(verifica);
  }
  public async update ({ params, request, response }) {
    const verifica = await Verifica.find(params.id)
    if(verifica){
        verifica.merge(request.only(['id', 'bloqueado', 'createdAt'] ))
        verifica.save();
    }
    response.status(200).json(verifica)
  }
}