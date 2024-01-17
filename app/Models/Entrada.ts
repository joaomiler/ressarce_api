import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Entrada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cnpj: string

  @column()
  public uf: string

  @column()
  public cidade: string

  @column()
  public id_grupo: number

  @column()
  public identificacao: string

  @column()
  public instalacao_identificador: string

  @column()
  public data_hora: DateTime
  
  @column()
  public valor_grupo: number

  @column()
  public status: string

  @column()
  public periodo: string

  @column()
  public s_vl_icms_st_rest: number

  @column()
  public s_vl_icms_st_compl: number

  @column()
  public sd_icms_st_rest: number

  @column()
  public sd_icms_st_ress: number

  @column()
  public sd_icms_st_compl: number

  @column()
  public sd_icms_op: number

  @column()
  public v_apur_cred_icms: number

  @column()
  public v_apur_icms_comp: number

  @column()
  public simulacao: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
