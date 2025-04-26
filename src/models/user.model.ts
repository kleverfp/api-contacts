import { Column, Model, Table } from 'sequelize-typescript';

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
}
