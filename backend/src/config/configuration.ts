export default function configuration() {
  return {
    port: parseInt(process.env.PORT ?? '3000', 10),
    frontendUrl: process.env.FRONTEND_URL,
    firebase: {
      serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
    },
    email: {
      user: process.env.EMAIL_USER,
      appPassword: process.env.EMAIL_APP_PASSWORD,
      destino: process.env.EMAIL_DESTINO,
    },
  };
}
