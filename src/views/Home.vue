<template>
  <div class="home">
    <!-- <v-toolbar fixed flat dark prominent class="transparent">
      <v-img src="exlogo.png" contain max-height="100" max-width="250" class="mt-4 ml-4 pa-4"></v-img>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in menuItems" :key="item.text" class="hidden-sm-and-down">
        <v-btn flat>{{ item.text }}</v-btn>
      </v-toolbar-items>

      <v-menu offset-y class="hidden-md-and-up">
        <v-btn flat slot="activator">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.text">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar> -->

    <v-carousel hide-controls hide-delimiters height="1200">
      <v-carousel-item src="pizza_ph.jpg">
        <v-container bg fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center justify-center>
            <v-flex>
              <v-img src="verawhite.png" contain max-height="250" max-width="400" style="margin: auto; display: block; margin-top: -100px"></v-img><br/><br/>
              <a href="https://fb.me/verapizzassm"><v-icon style="font-size: 35px">fab fa-facebook fa-4x</v-icon></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/verapizzassm/"><v-icon style="font-size: 35px">fab fa-instagram fa-4x</v-icon></a><br/><br/><br/>
              <h1 class="white--text headline"><b>Follow us on social media for public schedule updates.</b></h1><br/>
              <emailForm />
            </v-flex> 
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import emailForm from '@/components/emailForm'

export default {
  components: {
    emailForm
  },
  data() {
    return {
      menuItems: [
        {
          text: 'Home'
        },
        {
          text: 'Menu'
        },
        {
          text: 'About'
        },
        {
          text: 'Contact'
        }
      ]
    }
  }
}
</script>
