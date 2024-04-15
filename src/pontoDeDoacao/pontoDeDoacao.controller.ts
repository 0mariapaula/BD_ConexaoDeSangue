import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { PontoDeDoacaoService } from './pontoDeDoacao.service';
import { CreatePontoDeDoacaoDto, UpdatePontoDeDoacaoDto } from '../dtos/pontoDeDoacao.dto';

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

  @Post()
  create(@Body() createPontoDeDoacaoDto: CreatePontoDeDoacaoDto) {
    return this.pontoDeDoacaoService.create(createPontoDeDoacaoDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePontoDeDoacaoDto: UpdatePontoDeDoacaoDto) {
    return this.pontoDeDoacaoService.update(id, updatePontoDeDoacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pontoDeDoacaoService.delete(id);
  }
}
