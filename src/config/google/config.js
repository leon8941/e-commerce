'use strict'

const fireBaseAdminFileName = 'e-commerce-firebase-adminsdk.json'
const serviceAccount = require(`../../../.secret/${fireBaseAdminFileName}`)
const firebaseAdmin = require('firebase-admin')
const firebase = require('firebase')
const databaseURL = require('../../../.secret/firebase_database.json')
const firebaseSDKConfig = require('../../../.secret/firebase_sdk_config.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

firebase.initializeApp(firebaseSDKConfig)

module.exports = { 
  firebaseAdmin: firebaseAdmin,
  firebase: firebase
}