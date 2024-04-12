import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Doador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  telefone: string;

  @Column({ type: 'text' })
  tipoSanguineo: string;

  @Column({ type: 'boolean' })
  disponibilidade: boolean;
}
