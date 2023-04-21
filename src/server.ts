import express, { Request, Response } from "express";
import userRoutes from "./Routes/User";
import bankAccounts from "./Routes/BankAccounts";

export const app = express();
const port = 5000;

app.use(express.json());
app.use("/users", userRoutes)
app.use("/bankaccounts", bankAccounts)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({message: "Hello world"});
});

export const server = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
      resolve();
    })
  })
}
