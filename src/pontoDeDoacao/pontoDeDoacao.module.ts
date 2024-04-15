import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontoDeDoacao } from '../entidades/pontosdedoacao';
import { PontoDeDoacaoService } from './pontoDeDoacao.service';
import { PontoDeDoacaoController } from './pontoDeDoacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PontoDeDoacao])],
  providers: [PontoDeDoacaoService],
  controllers: [PontoDeDoacaoController],
})
export class PontoDeDoacaoModule {}
