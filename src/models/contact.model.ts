import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'contacts' })
export class Contact extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  phone: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date | null;
}
