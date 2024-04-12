import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doador } from '../entidades/doadores';

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
}
