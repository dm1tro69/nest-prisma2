import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: UserDto){
    const {email, password} = dto
    const hashPassword = await bcrypt.hash(password, 10)
    const data = {
      ...dto,
      password: hashPassword
    }
    return this.prisma.user.create({data, select: {name: true, email: true}})
  }

  findAll(){
    return this.prisma.user.findMany()
  }


  findOne(id){
    return this.prisma.user.findUnique({where: {id}})
  }

  update(id, dto: UpdateUserDto){
    return this.prisma.user.update({where: {id}, data: dto})
  }

  delete(id){
    return this.prisma.user.delete({where: {id}})
  }

  async login(dto: UpdateUserDto){
     const user = await this.prisma.user.findUnique({where: {email: dto.email}})
    if (!user){
      throw new UnauthorizedException()
    }
    const isPassword = bcrypt.compare(dto.password, user.password)
    if (!isPassword){
      throw new UnauthorizedException()
    }
    return user
  }
}
