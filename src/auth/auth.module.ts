import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, JwtStrategy, GqlAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
