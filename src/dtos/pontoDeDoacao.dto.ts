
export class CreatePontoDeDoacaoDto {
  nome: string;
  horarioFuncionamento: string;
  tipoSanguineoNecessario: string;
}

export class UpdatePontoDeDoacaoDto {
  nome?: string;
  horarioFuncionamento?: string;
  tipoSanguineoNecessario?: string;
}
