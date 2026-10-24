import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { AppModule } from './app.module.js';


async function bootStrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 8889 },
  });

  await app.startAllMicroservices(); // this is specific for microservices.. (Tcp)
  await app.listen(3000); // this is specific for client HTTTp (RestApi)

  console.log("Hybrid App is running on 3000 (REST) and 8889(TCP)");

}

bootStrap();