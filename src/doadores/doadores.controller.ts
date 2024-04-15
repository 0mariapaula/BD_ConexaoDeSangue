import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { DoadoresService } from './doadores.service';
import { CreateDoadorDto, UpdateDoadorDto } from '../dtos/doador.dto'; // DTOs a serem criados


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

    // Create
    @Post()
    create(@Body() createDoadorDto: CreateDoadorDto) {
      return this.doadoresService.create(createDoadorDto);
    }
  
    // Update
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateDoadorDto: UpdateDoadorDto) {
      return this.doadoresService.update(id, updateDoadorDto);
    }
}
