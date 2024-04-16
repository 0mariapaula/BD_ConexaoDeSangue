import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doador } from '../entidades/doadores';
//import { CreateDoadorDto, UpdateDoadorDto } from '../dtos/doador.dto'; // DTOs a serem criados


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

  // Substitua os métodos create e update para receber parâmetros simples
  create(nome: string, telefone: string, tipoSanguineo: string, disponibilidade: boolean): Promise<Doador> {
    const novoDoador = this.doadorRepository.create({ nome, telefone, tipoSanguineo, disponibilidade });
    return this.doadorRepository.save(novoDoador);
  }

  async update(id: number, nome: string, telefone: string, tipoSanguineo: string, disponibilidade: boolean): Promise<Doador> {
    await this.doadorRepository.update(id, { nome, telefone, tipoSanguineo, disponibilidade });
    return this.doadorRepository.findOneBy({ id });
  }
}

