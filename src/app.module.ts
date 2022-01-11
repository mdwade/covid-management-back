import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraService } from './common/cassandra/cassandra.service';
import { CovidController } from './covid/covid.controller';
import { CovidRepository } from './covid/covid.repository';
import { CovidService } from './covid/covid.service';

@Module({
  imports: [],
  controllers: [AppController, CovidController],
  providers: [AppService, CassandraService, CovidService, CovidRepository],
})
export class AppModule {}
