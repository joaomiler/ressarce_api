import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Entradas extends BaseSchema {
  protected tableName = 'entradas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('nome')
      table.string('cnpj')
      table.string('uf')
      table.string('cidade')  
      table.string('status')
      table.string('periodo')
      table.integer('id_grupo')
      table.string('identificacao')
      table.dateTime('data_hora')
      table.string('instalacao_identificador')
      table.float('valor_grupo')
      table.float('s_vl_icms_st_rest')
      table.float('s_vl_icms_st_compl')
      table.float('sd_icms_st_rest')
      table.float('sd_icms_st_ress')
      table.float('sd_icms_st_compl')
      table.float('sd_icms_op')
      table.float('v_apur_cred_icms')
      table.float('v_apur_icms_comp')
      table.boolean('simulacao')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
