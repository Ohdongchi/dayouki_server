import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/User.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(user: RegisterDto) {
    const isUser = await this.userRepository.findOneBy({ email: user.email });
    if (isUser) {
      throw new UnauthorizedException('exist user !');
    }
    const data = new User();
    Object.assign(data, user);
    return await this.userRepository.save(data);
  }

  async login(user: any) {
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async validateUser(email: string, pwd: string): Promise<any> {
    const user = await this.userService.getUser(email);

    if (user && user.password === pwd) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
