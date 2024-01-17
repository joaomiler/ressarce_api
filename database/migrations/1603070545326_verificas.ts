import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Verificas extends BaseSchema {
  protected tableName = 'verificas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.boolean('bloqueado')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
