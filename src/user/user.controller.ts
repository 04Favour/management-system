/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,  
  Req,
  Res,
  UseGuards,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { loginDto } from './dto/login.dto';
import { Request, Response } from 'express'; // Add this line
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guard/role.guard';
import { Roles } from 'src/guard/role';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() payload:UpdateUserDto) {
    return this.userService.update(id, payload)
  }

  @Delete(':id')
  deleteUser(@Param('id') id:string){
    return this.userService.deleteUser(id)
  }

  @Post('/login')
  login(@Body() payload: loginDto, @Req() req: Request, @Res() res: Response){ // Update this line
    return this.userService.signIn(payload, req, res);
  }

  @Post('/logout')
  logout(@Req()req: Request, @Res()res: Response){
    return this.userService.logout(req, res)
  }
  @Get('/get')
  // @UseGuards(AuthGuard(), RoleGuard)
  // @Roles( `user`)
  findAll(email: string){
    return this.userService.findAll(email)
  }

  
}
