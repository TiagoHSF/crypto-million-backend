import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/model/UserModel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private readonly prismaService: PrismaService) {

    }

    async create(body: UserModel) {
        const user = await this.prismaService.user.create({
            data: body
        })
        console.log(user);
    }

    async findAll() {
        const users = await this.prismaService.user.findMany();
        console.log(users);
    }

}
