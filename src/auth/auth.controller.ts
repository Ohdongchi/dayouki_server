import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('/register')
  async register(@Body() body: RegisterDto) {
    try {
      return await this.authService.register(body);
    } catch (err) {
      throw err;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  async test(@Request() req: any) {
    try {
      return req.user;
    } catch (error) {
      throw error;
    }
  }
}
