import { Model, Table, BelongsTo, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Users } from "./Users";

@Table
export class BankAccounts extends Model {
  @Column({
    type: DataType.DECIMAL
  })
  availableFunds!: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER
  })
  userId!: number;

  @BelongsTo(() => Users)
  user!: Users;
}