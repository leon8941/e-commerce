'use strict'

import firebaseAdmin from 'firebase-admin'
import firebase from 'firebase'

const serviceAccount = {
  "type": process.env.TYPE,
  "project_id": process.env.PROJECT_ID,
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri": process.env.AUTH_URI,
  "token_uri": process.env.TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
}

const firebaseSDKConfig = {
  "apiKey": process.env.APIKEY,
  "authDomain": process.env.AUTHDOMAIN,
  "databaseURL": process.env.DATABASEURL,
  "projectId": process.env.PROJECTID,
  "storageBucket": process.env.STORAGEBUCKET,
  "messagingSenderId": process.env.MESSAGINGSENDERID,
  "appId": process.env.APPID,
  "measurementId": process.env.MEASUREMENTID
}

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: firebaseSDKConfig.databaseURL
})

firebase.initializeApp(firebaseSDKConfig)

export { 
  firebaseAdmin,
  firebase
}