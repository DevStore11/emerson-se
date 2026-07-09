import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CriarContactoDto } from './dto/criar-contacto.dto';

@Controller('contactos')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criar(@Body() dto: CriarContactoDto) {
    return this.contactosService.criar(dto);
  }
}
