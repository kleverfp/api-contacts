import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column
  client_key: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  storage_type: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date | null;
}
