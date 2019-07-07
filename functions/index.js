const functions = require('firebase-functions');

/* const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

exports.firestoreEmail = functions.firestore
  .document('emails/{emailId}')
  .onCreate(doc => {

    
        const email = doc.data()
        console.log(email)
        
        const msg = {
          to: 'verapizzassm@gmail.com',
          from: 'brentaseaton@gmail.com',
          templateId: 'd-8058432526f5478482c2514ef9bf69ae',
          substitutionWrappers: ['{{', '}}'],
          substitutions: {
            name: email.name,
            email: email.email,
            message: email.message
          }
        }
        return sgMail.send(msg)
      }) */  
