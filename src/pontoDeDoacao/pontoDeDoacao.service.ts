import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PontoDeDoacao } from '../entidades/pontosdedoacao';
import { CreatePontoDeDoacaoDto, UpdatePontoDeDoacaoDto } from '../dtos/pontoDeDoacao.dto';  // Assumindo que você criou DTOs


@Injectable()
export class PontoDeDoacaoService {
  constructor(
    @InjectRepository(PontoDeDoacao)
    private pontoDeDoacaoRepository: Repository<PontoDeDoacao>,
  ) {}

  findAll(): Promise<PontoDeDoacao[]> {
    return this.pontoDeDoacaoRepository.find();
  }

  findOne(id: number): Promise<PontoDeDoacao> {
    return this.pontoDeDoacaoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.pontoDeDoacaoRepository.delete(id);
  }

  create(createPontoDeDoacaoDto: CreatePontoDeDoacaoDto): Promise<PontoDeDoacao> {
    const novoPonto = this.pontoDeDoacaoRepository.create(createPontoDeDoacaoDto);
    return this.pontoDeDoacaoRepository.save(novoPonto);
  }

  async update(id: number, updatePontoDeDoacaoDto: UpdatePontoDeDoacaoDto): Promise<PontoDeDoacao> {
    await this.pontoDeDoacaoRepository.update(id, updatePontoDeDoacaoDto);
    return this.pontoDeDoacaoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.pontoDeDoacaoRepository.delete(id);  
  }

}
