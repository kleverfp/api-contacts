import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20m' },
    }),
    SequelizeModule.forFeature([User]),
    UserModule,
    ConfigModule,
  ],
  providers: [AuthService, JwtStrategy, GqlAuthGuard, AuthResolver],
  exports: [AuthService, PassportModule, JwtModule],
})
export class AuthModule {}
