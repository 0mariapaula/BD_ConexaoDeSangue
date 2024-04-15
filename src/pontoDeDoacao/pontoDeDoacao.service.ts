import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PontoDeDoacao } from '../entidades/pontosdedoacao';


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
}
