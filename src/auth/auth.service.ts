import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
// import users from '../users.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require('../users.json');

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signInLocal(dto: AuthDto) {
    //retrieve user
    const user = users.find((u) => u.email === dto.email);
    console.log('--> dto', dto);
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return this.signUser(user.id, user.email, 'user');
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signUpLocal(dto: AuthDto) {}

  signUser(userId: number, email: string, type: string): any {
    return this.jwtService.sign({
      sub: userId,
      email,
      type,
    });
  }
}
