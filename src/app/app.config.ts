import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"nass-eu","appId":"1:129803068434:web:a7ab0444e3643ea50364cb","storageBucket":"nass-eu.appspot.com","apiKey":"AIzaSyC17YWVDKGOwFebUrB7AY81nEKeX-bbRwc","authDomain":"nass-eu.firebaseapp.com","messagingSenderId":"129803068434"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
