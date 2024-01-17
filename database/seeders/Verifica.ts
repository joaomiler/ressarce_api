import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Verifica from '../../app/Models/Verifica'

export default class VerificaSeeder extends BaseSeeder {
  public async run () {
      await Verifica.createMany([
        {
          "bloqueado": false
        }
      ])
    }
  }