import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly transporter: Transporter;
  private readonly emailUser: string;
  private readonly emailDestino: string;

  constructor(configService: ConfigService) {
    this.emailUser = configService.get<string>('email.user') ?? '';
    this.emailDestino = configService.get<string>('email.destino') ?? '';

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.emailUser,
        pass: configService.get<string>('email.appPassword'),
      },
    });
  }

  async enviarNotificacaoContacto(
    nome: string,
    email: string,
    mensagem: string,
  ): Promise<void> {
    if (!this.emailDestino) {
      this.logger.warn(
        'EMAIL_DESTINO não definido. Notificação de contacto não enviada.',
      );
      return;
    }

    try {
      await this.transporter.sendMail({
        from: this.emailUser,
        to: this.emailDestino,
        replyTo: email,
        subject: `Nova mensagem de contacto — ${nome}`,
        text: `Recebeste uma nova mensagem de contacto do site.\n\nNome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`,
        html: `
          <h2>Nova mensagem de contacto</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <blockquote>${mensagem}</blockquote>
        `,
      });

      this.logger.log(`Notificação enviada para ${this.emailDestino}`);
    } catch (error) {
      this.logger.error(
        `Erro ao enviar notificação de contacto: ${error instanceof Error ? error.message : error}`,
      );
    }
  }
}
