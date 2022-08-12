import axios from "axios"
import { User } from "./types"

export class AuthApi {
  public getUsers = async (): Promise<User[]> => {
    const { data } = await axios.get<User[]>('./users.json')    
    return data
  }
}