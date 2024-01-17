import Entrada from 'App/Models/Entrada'
import Database from '@ioc:Adonis/Lucid/Database'


export default class EntradasController {
  public async index ({ response }) {
    let entradas = await Entrada.all()
    response.status(200).json(entradas);
  }
  
  public async showgrupos ({ response }) {
    let entradas = await Database.rawQuery('SELECT * FROM entradas where ID in (SELECT Max(id) FROM entradas group by CNPJ, ID_Grupo, instalacao_identificador) ORDER BY id DESC');
 
    response.status(200).json(entradas[0]);
  }

  public async showentradas ({ params, response }) {
    const {instalacao_identificador, id_grupo, cnpj} = params;
    const entrada = await Entrada.query().where({instalacao_identificador, id_grupo, cnpj}).orderBy('ID','desc')
    response.status(200).json(entrada);
  }

  public async showpostos ({ response }) {
    const entradas = await Database.rawQuery('SELECT cnpj, nome, cidade, uf, instalacao_identificador, SUM(v_apur_cred_icms) as v_apur_cred_icms , SUM(v_apur_icms_comp) as v_apur_icms_comp FROM entradas group by CNPJ, Nome, Cidade, UF, instalacao_identificador');
    response.status(200).json(entradas[0]);
  }
  
  public async store ({ response, request }) {
    const entrada = await Entrada.create(request.only(['id', 'nome', 'cnpj', 'uf', 'cidade', 'status', 'periodo', 'id_grupo', 'identificacao', 'instalacao_identificador', 'valor_grupo', 's_vl_icms_st_rest', 's_vl_icms_st_compl', 'sd_icms_st_rest', 'sd_icms_st_ress', 'sd_icms_st_compl', 'sd_icms_op', 'v_apur_cred_icms', 'v_apur_icms_comp', 'simulacao', 'data_hora', 'createdAt', 'updateAt'] ))
    response.status(200).json(entrada);
  }
  public async update ({ params, request, response }) {
    const entrada = await Entrada.find(params.id)
    if(entrada){
      entrada.merge(request.only(['id', 'nome', 'cnpj', 'uf', 'cidade', 'status', 'periodo', 'id_grupo', 'identificacao', 'instalacao_identificador', 'valor_grupo', 's_vl_icms_st_rest', 's_vl_icms_st_compl', 'sd_icms_st_rest', 'sd_icms_st_ress', 'sd_icms_st_compl', 'sd_icms_op', 'v_apur_cred_icms', 'v_apur_icms_comp', 'simulacao', 'data_hora', 'createdAt', 'updateAt'] ))
      entrada.save();
    }
    console.log(entrada);
    response.status(200).json(entrada)
  }

  public async delete ({params, response}) {
    const entrada = await Entrada.find(params.id)
    if(entrada){
      entrada.delete()
        response.status(200).json({msg: `Entrada ${params.id} excluida!`})
    }
  }

  public async destroy ({params, response}) {
    const entrada = await Entrada.find(params.id)
    if(entrada){
      entrada.delete()
      response.status(200).json({msg: `Entrada ${params.id} excluida!`})
    }
  }
}