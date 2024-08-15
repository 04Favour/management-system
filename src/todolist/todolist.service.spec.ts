/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/Entity/user.entity";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import * as argon2 from 'argon2'
@Injectable()
export class UserServiceTesting{
  constructor(@InjectRepository(User) private userService: UserService, private jwtService: JwtService, private userRepo: Repository<User> ){}
  async create(payload:CreateUserDto): Promise<{access_token: string}>{
    const {email, password, ...rest}= payload
    const user = await this.userService.findEmail(email)
    if (user){
      throw new UnauthorizedException()
    }
    const hashedPassword = await argon2.hash(password)
    const userDetails = await this.userRepo.save({
      email,
      password: hashedPassword,
      rest
    })
    delete userDetails.password
    const userPayload = {id: userDetails.id, email: userDetails.email}
    return {
      access_token: await this.jwtService.signAsync(userPayload)
    }
  }
}