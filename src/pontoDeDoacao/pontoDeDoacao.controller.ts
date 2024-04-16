import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { PontoDeDoacaoService } from './pontoDeDoacao.service';

@Controller('pontosDeDoacao')
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

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pontoDeDoacaoService.delete(id);
  }

  @Post()
  create(
    @Body('nome') nome: string,
    @Body('horarioFuncionamento') horarioFuncionamento: string,
    @Body('tipoSanguineoNecessario') tipoSanguineoNecessario: string
  ) {
    return this.pontoDeDoacaoService.create(nome, horarioFuncionamento, tipoSanguineoNecessario);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body('nome') nome: string,
    @Body('horarioFuncionamento') horarioFuncionamento: string,
    @Body('tipoSanguineoNecessario') tipoSanguineoNecessario: string
  ) {
    return this.pontoDeDoacaoService.update(id, nome, horarioFuncionamento, tipoSanguineoNecessario);
  }
}
