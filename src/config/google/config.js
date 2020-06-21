'use strict'

const fileName = 'e-commerce-firebase-adminsdk.json'
const serviceAccount = require(`../../../.secret/${fileName}`)
const firebaseAdmin = require('firebase-admin')
const databaseURL = require('../../../.secret/firebase_database.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

module.exports = firebaseAdmin