/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';
import { ILoginPayload } from './interfaces/ILoginPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    } as StrategyOptions);
  }

  async validate(payload: ILoginPayload) {
    const id = payload.sub;
    const user = await this.userService.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
