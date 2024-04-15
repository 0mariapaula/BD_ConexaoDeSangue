
export class CreateDoadorDto {
    nome: string;
    telefone: string;
    tipoSanguineo: string;
    disponibilidade: boolean;
  }
  
  export class UpdateDoadorDto {
    nome?: string;
    telefone?: string;
    tipoSanguineo?: string;
    disponibilidade?: boolean;
  }
  