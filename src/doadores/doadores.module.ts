import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doador } from '../entidades/doadores';
import { DoadoresService } from './doadores.service';
import { DoadoresController } from './doadores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Doador])],
  providers: [DoadoresService],
  controllers: [DoadoresController],
})
export class DoadoresModule {}
