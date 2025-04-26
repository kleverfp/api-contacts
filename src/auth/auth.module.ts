import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), UserModule],
  providers: [AuthService, JwtStrategy, GqlAuthGuard, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
