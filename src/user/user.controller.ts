import { Controller, Req, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Get()
  async info(@Req() req: any) {
    return req.user;
  }
}
