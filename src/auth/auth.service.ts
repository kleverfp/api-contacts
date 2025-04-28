import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userModel: typeof User,
  ) {}

  async login(client_key: string): Promise<string> {
    const user = await this.userModel.findOne({
      where: { client_key },
      raw: true,
    });
    if (!user) throw new UnauthorizedException('Invalid client_key');

    return this.generateToken(user);
  }

  private generateToken(user: User): string {
    const payload = {
      sub: user.id as number,
      client_key: user.client_key,
      name: user.name,
      storage_type: user.storage_type,
    };

    const token = this.jwtService.sign(payload);
    return token;
  }
}
