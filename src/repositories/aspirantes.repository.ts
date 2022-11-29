import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConexionRrhhDataSource} from '../datasources';
import {Aspirantes, AspirantesRelations} from '../models';

export class AspirantesRepository extends DefaultCrudRepository<
  Aspirantes,
  typeof Aspirantes.prototype.id,
  AspirantesRelations
> {
  constructor(
    @inject('datasources.conexionRRHH') dataSource: ConexionRrhhDataSource,
  ) {
    super(Aspirantes, dataSource);
  }
}
