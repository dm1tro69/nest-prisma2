import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  body: string

  userId?: number
}
