import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

export const FIRESTORE = 'FIRESTORE';

export const firebaseAdminProvider: Provider = {
  provide: FIRESTORE,
  useFactory: (configService: ConfigService) => {
    const serviceAccountJson = configService.get<string>('firebase.serviceAccount');

    if (!serviceAccountJson) {
      throw new Error(
        'A variável de ambiente FIREBASE_SERVICE_ACCOUNT não está definida.',
      );
    }

    const serviceAccount = JSON.parse(serviceAccountJson);

    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }

    return admin.firestore();
  },
  inject: [ConfigService],
};
