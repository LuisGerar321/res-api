import { Sequelize} from "sequelize-typescript";
import { BankAccounts } from "./models/BankAccounts";
import { Users } from "./models/Users";


export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "raspberry",
  database: "banckAccounts",
  models: [__dirname + "/models"]
});
 
export const dbConnection = async () => {
  await sequelize.sync({force: true});
  console.log(__dirname + "/models");
  console.log("Created Tables")
}

export const seedData = async () => {
  const luis = await Users.create({
    firstName: "Luis",
    secondName: "Camara"
  });
  const javi = await Users.create({
    firstName: "Javier",
    secondName: "Luna"
  });
  await BankAccounts.create({
    availableFunds: 100,
    userId: luis.id
  });
  await BankAccounts.create({
    availableFunds: 100,
    userId: javi.id
  });
  console.log("Seed Ok!");
}
