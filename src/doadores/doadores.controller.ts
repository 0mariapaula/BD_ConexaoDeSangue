// Remova a linha de importação dos DTOs que não existem
import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { DoadoresService } from './doadores.service';
// import { CreateDoadorDto, UpdateDoadorDto } from '../dtos/doador.dto'; // Linha removida

@Controller('doadores')
export class DoadoresController {
  constructor(private readonly doadoresService: DoadoresService) {}

  // ... outros métodos permanecem inalterados

  // Substitua os métodos create e update para receber parâmetros simples em vez de DTOs
  @Post()
  create(
    @Body('nome') nome: string,
    @Body('telefone') telefone: string,
    @Body('tipoSanguineo') tipoSanguineo: string,
    @Body('disponibilidade') disponibilidade: boolean
  ) {
    return this.doadoresService.create(nome, telefone, tipoSanguineo, disponibilidade);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('nome') nome: string,
    @Body('telefone') telefone: string,
    @Body('tipoSanguineo') tipoSanguineo: string,
    @Body('disponibilidade') disponibilidade: boolean
  ) {
    return this.doadoresService.update(id, nome, telefone, tipoSanguineo, disponibilidade);
  }
}
