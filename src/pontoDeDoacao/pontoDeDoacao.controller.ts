import { Controller, Get, Param, Delete } from '@nestjs/common';
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
}
