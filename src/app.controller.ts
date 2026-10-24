import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): string {
    return 'Hello! Hi i am Rest api (3000)';
  }

  @MessagePattern({ cmd: 'get_status' })
  getStatus(data: any): string {

    console.log('Microservice is recieved', data);

    return 'Microservice is Active';
  }

}
