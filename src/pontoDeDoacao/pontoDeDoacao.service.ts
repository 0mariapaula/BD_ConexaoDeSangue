// src/pontoDeDoacao/pontoDeDoacao.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PontoDeDoacao } from '../entidades/pontoDeDoacao.entidades';

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

  // Adicione outros métodos CRUD conforme necessário
}
