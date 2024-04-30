import { Injectable } from '@nestjs/common';
import { OperationModel } from 'src/model/OperationModel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperationsService {

    constructor(private readonly prismaService: PrismaService) {

    }

    async create(operationBody: OperationModel) {
        const operation = await this.prismaService.operation.create({
            data: operationBody
        })
        console.log(operation);
    }

    async findLast() {
        const operations = await this.prismaService.operation.findMany({
            orderBy: { createdAt: 'desc' },
            take: 3,
            skip: 1
        })
        return operations;
    }
}
