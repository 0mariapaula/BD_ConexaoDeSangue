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

  create(nome: string, horarioFuncionamento: string, tipoSanguineoNecessario: string): Promise<PontoDeDoacao> {
    const novoPontoDeDoacao = this.pontoDeDoacaoRepository.create({ nome, horarioFuncionamento, tipoSanguineoNecessario });
    return this.pontoDeDoacaoRepository.save(novoPontoDeDoacao);
  }

  async update(id: number, nome: string, horarioFuncionamento: string, tipoSanguineoNecessario: string): Promise<PontoDeDoacao> {
    await this.pontoDeDoacaoRepository.update(id, { nome, horarioFuncionamento, tipoSanguineoNecessario });
    return this.pontoDeDoacaoRepository.findOneBy({ id });
  }
}
