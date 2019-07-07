<template>
  <div class="emailForm">
    <v-container>
      <v-layout row align-center justify-center fill-height>
        <v-flex xs12 md6 class="text-xs-center">
          <v-card class="ma-4" color="rgb(255, 0, 0, 0.2)">
            <v-card-title class="justify-center white--text">
              <h4 class="white--text title">Want Vera Pizza at your Event? Fill out the form below.</h4>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3" ref="form" id="myForm">
                <v-text-field v-model="name" label="Name:" outline color="orange" name="name"></v-text-field>
                <v-text-field v-model="email" label="Email:" outline color="orange" name="email"></v-text-field>
                <v-textarea v-model="message" label="Message:" outline color="orange" name="message"></v-textarea>
                <div class="field center-align">
                  <p v-if="feedback" class="white-text">{{ feedback }}</p>
                  <v-btn dark large color="orange" @click="submit">Submit</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>  
        </v-flex>
      </v-layout>
        
    </v-container>
    
  </div>
</template>

<script>
//import db from '@/firebase/fbConfig'
import * as emailjs from 'emailjs-com'

export default {
  data() {
    return {
      name: null,
      email: null,
      message: null, 
      feedback: null
    }
  },
  methods: {
    submit () {
      if(!this.name) {
        this.feedback = 'You must enter a name.'
      } else if (!this.email) {
        this.feedback = 'You must enter an email.'
      } else if (!this.message) {
        this.feedback = 'You must enter a message.'
      } else {
        emailjs.sendForm('default_service', 'template_uQWyQOU9', '#myForm', 'user_SkV2MPVvjGwBz19bnDcFs')
          .then(response => {
            console.log('SUCCESS!', response.status, response.text)
            this.name = null
            this.email = null
            this.message = null
            this.feedback = 'Message successfully sent! We will be in touch shortly.'
          }, (err) => {
            console.log('FAILED...', err)
          })
      }

      /* event.preventDefault()
      if (this.email !== null && this.name !== null && this.message !== null && this.phone !== null) {
        this.formInvalid = false
        this.isLoading = true
        this.formSubmitted = false
        emailjs.init('user_rDy0ktiWPEbQ2EIs72yDU')
        this.contact_number = Math.random() * 100000 | 0
        emailjs.send(
          'template_name',//get this from emailjs dashboard
          'template_someid',//get this from emailjs dashboard
          {email: this.email, name: this.name, message: this.message, phone: this.phone}
        ).then((response) => {
          this.formSubmitted = true
          this.isLoading = false
          console.log('SUCCESS You just sent an email...', response)
        }, (error) => {
          console.log('FAILED Throw an error to user...', error)
          this.isLoading = false
        })
      } else {
        this.formInvalid = true
      } */
    }
    /* addEmail() {
      if(!this.name) {
        this.feedback = 'You must enter a name.'
      } else if (!this.email) {
        this.feedback = 'You must enter an email.'
      } else if (!this.message) {
        this.feedback = 'You must enter a message.'
      } else {
        this.feedback = null
        db.collection('emails').add({
          name: this.name,
          email: this.email,
          message: this.message
        }).then(() => {
          this.name = null
          this.email = null
          this.message = null
          this.feedback = 'Message successfully sent! We will be in touch shortly.'
        }).catch(err => {
          this.feedback = err
        })
      }
    } */
  }
}
</script>


