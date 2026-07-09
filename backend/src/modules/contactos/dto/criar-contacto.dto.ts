import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriarContactoDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome: string;

  @IsEmail({}, { message: 'O email deve ser um endereço válido.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A mensagem é obrigatória.' })
  @MinLength(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
  mensagem: string;
}
