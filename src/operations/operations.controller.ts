import { Body, Controller, Get, Post } from '@nestjs/common';
import { OperationModel } from 'src/model/OperationModel.dto';
import { OperationsService } from './operations.service';

@Controller('operations')
export class OperationsController {

    constructor(private readonly operationService: OperationsService){

    }

    @Post()
    create(@Body() body: OperationModel) {
        return this.operationService.create(body);
    }

    @Get()
    findLastThree(){
        return this.operationService.findLast();
    }



}
