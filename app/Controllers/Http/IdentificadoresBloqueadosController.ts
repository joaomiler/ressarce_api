// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IdentificadoresBloqueados from '../../Models/IdentificadoresBloqueado'

export default class IdentificadoresBloqueadosController {

  public async index ({ response }) {
    const identificador = await IdentificadoresBloqueados.all();
    response.status(200).json(identificador);
  }
  public async show ({ response }) {
    const identificador = await IdentificadoresBloqueados.all();
    response.status(200).json(identificador);
  }
  public async store ({ response, request }) {
    const identificador = await IdentificadoresBloqueados.create(request.only(['id', 'instalacao_identificador', 'updateAt', 'createdAt',] ))
    response.status(200).json(identificador);
  }
  public async update ({ params, request, response }) {
    const identificador = await IdentificadoresBloqueados.find(params.id)
    if(identificador){
        identificador.merge(request.only(['id', 'instalacao_identificador', 'updateAt', 'createdAt',] ))
        identificador.save();
    }
    console.log(identificador);
    response.status(200).json(identificador)
  }
public async delete ({params, response}) {
  const identificador = await IdentificadoresBloqueados.find(params.id)
  if(identificador){
    identificador.delete()
      response.status(200).json({msg: `Identificador ${params.id} excluido!`})
  }
}
public async destroy ({params, response}) {
  const identificador = await IdentificadoresBloqueados.find(params.id)
  if(identificador){
    identificador.delete()
    response.status(200).json({msg: `Identificador ${params.id} excluido!`})
  }
}
}