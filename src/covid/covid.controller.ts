import { Controller, Get, Param } from '@nestjs/common';
import { CovidService } from './covid.service';

@Controller('api')
export class CovidController {

    constructor(private covidService: CovidService){}

    @Get('i/q1/:date')
    async getQI1(@Param() params){
        return this.covidService.getQI1(params.date);
    }

    @Get('i/q2/:continent')
    async getQI2(@Param() params){
        return this.covidService.getQI2(params.continent);
    }

    @Get('i/q3')
    async getQI3(){
        return this.covidService.getQI3();
    }

    @Get('ii/q1/:iso_code/:startedDate/:endedDate')
    async getQII1(@Param() params){
        return this.covidService.getQII1(params.iso_code, params.startedDate, params.endedDate);
    }

    @Get('ii/q2/:iso_code/:startedDate/:endedDate')
    async getQII2(@Param() params){
        return this.covidService.getQII1(params.iso_code, params.startedDate, params.endedDate);
    }

    @Get('ii/q3/:date')
    async getQII3(@Param() params){
        return this.covidService.getQI1(params.date);
    }

    @Get('ii/q4')
    async getQII4(){
    
    }
}
