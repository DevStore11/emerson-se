import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  FRONTEND_URL: Joi.string().uri().required().messages({
    'any.required': 'FRONTEND_URL é obrigatória. Define a URL do frontend (ex: https://emerson-se.web.app).',
    'string.uri': 'FRONTEND_URL deve ser uma URI válida.',
  }),
  FIREBASE_SERVICE_ACCOUNT: Joi.string().required().messages({
    'any.required': 'FIREBASE_SERVICE_ACCOUNT é obrigatória. Contém o JSON do service account do Firebase.',
  }),
  EMAIL_USER: Joi.string().email().required().messages({
    'any.required': 'EMAIL_USER é obrigatória. O teu email Gmail para envio de notificações.',
    'string.email': 'EMAIL_USER deve ser um email válido.',
  }),
  EMAIL_APP_PASSWORD: Joi.string().required().messages({
    'any.required': 'EMAIL_APP_PASSWORD é obrigatória. Gera em myaccount.google.com/apppasswords.',
  }),
  EMAIL_DESTINO: Joi.string().email().required().messages({
    'any.required': 'EMAIL_DESTINO é obrigatória. Para onde as notificações de contacto são enviadas.',
    'string.email': 'EMAIL_DESTINO deve ser um email válido.',
  }),
});

export function validate(config: Record<string, unknown>) {
  const { error, value } = envSchema.validate(config, {
    allowUnknown: true,
    abortEarly: false,
  });

  if (error) {
    const mensagens = error.details.map((d) => `  — ${d.message}`).join('\n');
    throw new Error(
      `Validação de ambiente falhou:\n${mensagens}\n\nCorrige as variáveis em falta ou inválidas no ficheiro .env antes de arrancar.`,
    );
  }

  return value;
}
