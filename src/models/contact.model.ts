import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Contact extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  phone: string;
}
