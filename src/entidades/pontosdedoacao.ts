import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Doacao } from './doacao'; // Certifique-se de que o caminho do arquivo está correto

@Entity()
export class PontoDeDoacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  horarioFuncionamento: string;

  @Column({ type: 'text' })
  tipoSanguineoNecessario: string;

  @OneToMany(() => Doacao, doacao => doacao.pontoDeDoacao)
  doacoes: Doacao[];
}
