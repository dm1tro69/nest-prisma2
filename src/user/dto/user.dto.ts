import { IsEmail, IsString } from "class-validator";
import { Post } from "@prisma/client";

export class UserDto {

  @IsString()
  name: string

  @IsString()
  password?:string

  @IsEmail()
  email: string

}
