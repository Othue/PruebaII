import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conexionRRHH',
  connector: 'mongodb',
  url: 'mongodb+srv://dev:othue123@cluster0.k8dn7cx.mongodb.net/test/RRHH',
  host: 'cluster0.k8dn7cx.mongodb.net',
  port: 27017,
  user: 'dev',
  password: 'othue123',
  database: 'RRHH',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConexionRrhhDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conexionRRHH';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conexionRRHH', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
