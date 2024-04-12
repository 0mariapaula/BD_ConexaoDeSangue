import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontoDeDoacao } from '../entidades/pontoDeDoacao.entity'; // Suba um nível e entre na pasta entidades
import { PontoDeDoacaoService } from './pontoDeDoacao.service'; // Está na mesma pasta
import { PontoDeDoacaoController } from './pontoDeDoacao.controller'; // Está na mesma pasta

@Module({
  imports: [TypeOrmModule.forFeature([PontoDeDoacao])],
  providers: [PontoDeDoacaoService],
  controllers: [PontoDeDoacaoController],
})
export class PontoDeDoacaoModule {}
