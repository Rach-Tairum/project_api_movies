import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.8486a4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  env: 'development',
}