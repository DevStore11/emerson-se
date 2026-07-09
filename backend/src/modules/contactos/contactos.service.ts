import { Inject, Injectable, Logger } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import { FIRESTORE } from '../../firebase/firebase-admin.provider';
import { CriarContactoDto } from './dto/criar-contacto.dto';
import { EmailService } from '../../email/email.service';

@Injectable()
export class ContactosService {
  private readonly logger = new Logger(ContactosService.name);

  constructor(
    @Inject(FIRESTORE) private readonly firestore: Firestore,
    private readonly emailService: EmailService,
  ) {}

  async criar(dto: CriarContactoDto): Promise<{ id: string; mensagem: string }> {
    const docRef = await this.firestore.collection('contactos').add({
      nome: dto.nome,
      email: dto.email,
      mensagem: dto.mensagem,
      criadoEm: admin.firestore.Timestamp.now(),
      lido: false,
      origem: 'site',
    });

    this.emailService
      .enviarNotificacaoContacto(dto.nome, dto.email, dto.mensagem)
      .catch((err) =>
        this.logger.error(
          `Falha ao enviar notificação de email (mensagem gravada com id ${docRef.id}): ${err instanceof Error ? err.message : err}`,
        ),
      );

    return {
      id: docRef.id,
      mensagem: 'Mensagem enviada com sucesso.',
    };
  }
}
