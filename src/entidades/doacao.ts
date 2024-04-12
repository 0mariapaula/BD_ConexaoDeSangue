import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doador } from './doadores';
import { PontoDeDoacao } from './pontosdedoacao';

@Entity()
export class Doacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doador, doador => doador.doacoes)
  doador: Doador;

  @ManyToOne(() => PontoDeDoacao, pontoDeDoacao => pontoDeDoacao.doacoes)
  pontoDeDoacao: PontoDeDoacao;

  @Column()
  data: Date;
}
