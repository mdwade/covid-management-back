import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from 'src/common/cassandra/cassandra.service';
import { Covid } from './covid.model';

@Injectable()
export class CovidRepository implements OnModuleInit {

    constructor(private cassandraService: CassandraService){}

    covidMapper: mapping.ModelMapper<Covid>;

    onModuleInit() {
        const mappingOptions: mapping.MappingOptions = {
            models: {
                'Covid': {
                    tables: ['covid'],
                    mappings: new mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        }

        this.covidMapper = this.cassandraService.createMapper(mappingOptions).forModel('Covid');
    }

   async getQI1 (date: any) {
       return (await this.covidMapper.find({date})).toArray();
   }

   async getQI2 (continent: any) {
       return (await this.covidMapper.find({continent})).toArray();
   }

   async getQI3 () {}

   async getQII1 (iso_code: any, startedDate: any, endedDate: any) {
    return (await this.covidMapper.find({iso_code})).toArray();
   }
}
