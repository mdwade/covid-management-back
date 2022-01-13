import { Injectable } from '@nestjs/common';
import { CovidRepository } from './covid.repository';

@Injectable()
export class CovidService {
    constructor(private covidRepository: CovidRepository){}

    async getQI1(date: any) {
        return this.covidRepository.getQI1(date);
    }

    async getQI2(continent: any) {
        return this.covidRepository.getQI2(continent);
    }

    async getQI3() {
        return this.covidRepository.getQI3();
    }

    async getQII1(iso_code: any, startedDate: any, endedDate: any) {
        return this.covidRepository.getQII1(iso_code, startedDate, endedDate);
    }

    async getQII2(iso_code: any, startedDate: any, endedDate: any) {
        return this.covidRepository.getQII2(iso_code, startedDate, endedDate);
    }

    async getQII3(date: any) {
        return this.covidRepository.getQII3(date);
    }

    async getQII4(location: any) {
        return this.covidRepository.getQII4(location);
    }
}
