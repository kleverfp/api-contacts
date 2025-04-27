import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { IUserPayload } from './interfaces/IUserPayload';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findById(id: number) {
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async create(payload: IUserPayload) {
    const { client_key, description, name, storage_type } = payload;
    const user = await this.userModel.create({
      client_key,
      description,
      name,
      storage_type,
    });
    return user;
  }
}
