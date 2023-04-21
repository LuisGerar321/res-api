import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { BankAccounts } from './BankAccounts';

@Table
export class Users extends Model {
  @Column({
    type: DataType.STRING
  })
  firstName!: string;

  @Column({
    type: DataType.STRING
  })
  secondName!: string;

  @HasMany(() => BankAccounts)
  bankAccounts!: BankAccounts[];
}