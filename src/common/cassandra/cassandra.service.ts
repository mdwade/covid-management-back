import { Injectable } from '@nestjs/common';
import { Client, mapping, auth } from 'cassandra-driver';

@Injectable()
export class CassandraService {
    client: Client;

    mapper: mapping.Mapper;
    
    createClient() {
        return this.client = new Client({
            contactPoints: ['localhost'],
            keyspace: 'coviddata',
            localDataCenter: 'datacenter1',
        });
    }
    
    /*createMapper(mappingOptions: mapping.MappingOptions) {
     if(this.client == undefined) {
         this.createClient();
     }   
     return new mapping.Mapper(this.client, mappingOptions);
    }*/
}