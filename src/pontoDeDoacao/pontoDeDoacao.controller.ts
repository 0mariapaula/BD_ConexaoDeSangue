// src/pontoDeDoacao/pontoDeDoacao.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { PontoDeDoacaoService } from './pontoDeDoacao.service';

@Controller('pontos-de-doacao')
export class PontoDeDoacaoController {
  constructor(private readonly pontoDeDoacaoService: PontoDeDoacaoService) {}

  @Get()
  findAll() {
    return this.pontoDeDoacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pontoDeDoacaoService.findOne(id);
  }

  // Adicione métodos para Post, Delete etc. conforme necessário
}
