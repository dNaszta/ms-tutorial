import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/test")
  GetTest() {
    return { "test" : null };
  }
}
