import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { EmailModule } from './email/email.module';
import { ContactosModule } from './modules/contactos/contactos.module';
import configuration from './config/configuration';
import { validate } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    FirebaseModule,
    EmailModule,
    ContactosModule,
  ],
})
export class AppModule {}
