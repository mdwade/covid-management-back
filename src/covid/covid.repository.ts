import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, mapping } from 'cassandra-driver';
import { query } from 'express';
import { CassandraService } from 'src/common/cassandra/cassandra.service';
import { Covid } from './covid.model';

@Injectable()
export class CovidRepository implements OnModuleInit {

    constructor(private cassandraService: CassandraService){}

    client: Client;

    onModuleInit() {
        this.client = this.cassandraService.createClient();
    }

    async getQI1 (date: any) {
       const query = "SELECT iso_code, continent, location, date, total_cases, new_cases, total_deaths, new_deaths FROM coviddata_by_location where date = ? ALLOW FILTERING";
       return (await this.client.execute(query, [date], {prepare: true})).rows;
    }

    async getQI2 (continent: any) {
       const query = "SELECT iso_code, location FROM coviddata_by_location WHERE continent = ?";
       return (await this.client.execute(query, [continent], {prepare: true})).rows;
    }

    async getQI3 () {
       const query = "SELECT count(continent) as number_continent FROM coviddata_by_continent";
       return (await this.client.execute(query)).rows;
    }

   async getQII1 (iso_code: string, start_date: string, end_date: string ) {
      const query = 'SELECT iso_code,date, total_cases,total_deaths,new_cases, new_deaths  FROM covid_by_iso_code_date WHERE iso_code = ? AND date >= ? AND date <= ? GROUP BY date';
      return (await this.client.execute(query, [ iso_code, start_date, end_date ], { prepare: true })).rows;
   }
  
   async getQII2 (iso_code: string, start_date: string, end_date: string ) {
      const query = 'SELECT iso_code,date,total_deaths FROM covid_by_iso_code_date WHERE iso_code = ? AND date >= ? AND date <= ? GROUP BY date';
      return (await this.client.execute(query, [ iso_code, start_date, end_date ], { prepare: true })).rows;
   }

   async getQII3 (date: any) {
      const query = "SELECT continent, total_cases FROM coviddata_by_continent where date = ? group by continent ALLOW FILTERING";
      return (await this.client.execute(query, [date], {prepare: true})).rows;
   }

   async getQII4 (location: any) {
      const query = "SELECT date, total_vaccinations, people_vaccinated, people_fully_vaccinated, new_vaccinations, total_vaccinations_per_hundred, people_vaccinated_per_hundred, people_fully_vaccinated_per_hundred, MAX(new_cases) as max_new_cases FROM coviddata_by_location WHERE location = ?";
      return (await this.client.execute(query, [location], {prepare: true})).rows;
   }
}
