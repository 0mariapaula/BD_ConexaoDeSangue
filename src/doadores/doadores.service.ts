import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doador } from '../entidades/doadores';
import { CreateDoadorDto, UpdateDoadorDto } from '../dtos/doador.dto'; // DTOs a serem criados


@Injectable()
export class DoadoresService {
  constructor(
    @InjectRepository(Doador)
    private doadorRepository: Repository<Doador>,
  ) {}

  findAll(): Promise<Doador[]> {
    return this.doadorRepository.find();
  }

  findOne(id: number): Promise<Doador> {
    return this.doadorRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.doadorRepository.delete(id);
  }

  // Create 
  create(createDoadorDto: CreateDoadorDto): Promise<Doador> {
    const novoDoador = this.doadorRepository.create(createDoadorDto);
    return this.doadorRepository.save(novoDoador);
  }

  // Update
  async update(id: number, updateDoadorDto: UpdateDoadorDto): Promise<Doador> {
    await this.doadorRepository.update(id, updateDoadorDto);
    return this.doadorRepository.findOneBy({ id });
  }
}

