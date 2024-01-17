import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class IdentificadoresBloqueados extends BaseSchema {
  protected tableName = 'identificadores_bloqueados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('instalacao_identificador')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
