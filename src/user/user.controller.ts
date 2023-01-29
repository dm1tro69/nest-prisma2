import { Body, Controller, Delete, Get, Param, Post, UseFilters } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { PrismaClientExceptionFilter } from "../prisma-client-exception.filter";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller('user')
@UseFilters(PrismaClientExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body()dto: UserDto){
    return this.userService.register(dto)
  }


  @Post('login')
  login(@Body()dto: UpdateUserDto){
    return this.userService.login(dto)
  }

  @Get()
  findAll(){
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id){
    return this.userService.findOne(+id)
  }

  @Post(':id')
  update(@Param('id') id, @Body() dto: UpdateUserDto){
    return this.userService.update(+id, dto)
  }

  @Delete(':id')
  delete(@Param('id') id){
    return this.userService.delete(+id)
  }
}
