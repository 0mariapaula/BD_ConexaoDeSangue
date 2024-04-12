import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DoadoresService } from './doadores.service';

@Controller('doadores')
export class DoadoresController {
  constructor(private readonly doadoresService: DoadoresService) {}

  @Get()
  findAll() {
    return this.doadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.doadoresService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.doadoresService.delete(id);
  }
}
