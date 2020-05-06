import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/test")
  GetTest() {
    console.log("ss")
    return { "test" : null };
  }
}
