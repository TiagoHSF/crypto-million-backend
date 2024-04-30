import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserModel } from 'src/model/UserModel.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){

    }

    @Post()
    create(@Body() body: UserModel) {
        return this.usersService.create(body);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

}
