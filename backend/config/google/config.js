'use strict'

const fireBaseAdminFileName = 'e-commerce-firebase-adminsdk.json'
const serviceAccount = require(`../../../.secret/${fireBaseAdminFileName}`)
import firebaseAdmin from 'firebase-admin'
import firebase from 'firebase'
import databaseURL from '../../../.secret/firebase_database.json'
import firebaseSDKConfig from '../../../.secret/firebase_sdk_config.json'

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

firebase.initializeApp(firebaseSDKConfig)

export { 
  firebaseAdmin,
  firebase
}