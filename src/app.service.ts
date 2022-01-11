import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return '<h1 style="text-align: center; color: green; font-size: 60px">Covid Management</h1>';
  }
}
