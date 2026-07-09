import { Global, Module } from '@nestjs/common';
import { firebaseAdminProvider, FIRESTORE } from './firebase-admin.provider';

@Global()
@Module({
  providers: [firebaseAdminProvider],
  exports: [FIRESTORE],
})
export class FirebaseModule {}
