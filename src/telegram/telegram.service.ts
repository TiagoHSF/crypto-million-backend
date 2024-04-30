import { Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { OperationModel } from 'src/model/OperationModel.dto';
import { OperationsService } from 'src/operations/operations.service';
import { Telegraf } from 'telegraf';


@Injectable()
export class TelegramService {
    private bot: TelegramBot;

    // constructor(private readonly operationService: OperationsService) {
    //     this.bot = new Telegraf('6344531985:AAF38bqx62oUtSGKm2wFMi5JJS7WXj-LdNQ');
    //     this.bot.on('text', (ctx) => {
    //         const textoRecebido = ctx.message.text;
    //         console.log(textoRecebido)
    //     });
    //     this.bot.launch();
    // }

    // async baseOperation(textoRecebido: string) {
    //     const linhas = textoRecebido.split('\n');

    //     const moeda = linhas[0].split(':')[1].trim();
    //     const tipo = linhas[1].split(':')[1].trim();
    //     const expiracao = linhas[2].split(':')[1].trim();
    //     const hora = linhas[3].split(':')[1].trim();

    //     const operacao: OperationModel = {
    //         moeda: moeda,
    //         tipo: tipo,
    //         expiracao: expiracao,
    //         hora: hora
    //     };

    //     const newOperation = await this.operationService.create(operacao);
    //     console.log(newOperation);
    // }
}
