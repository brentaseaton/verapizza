<template>
  <div class="home">
    <v-toolbar fixed flat dark prominent class="transparent">
      <v-img src="exlogo.png" max-height="100" max-width="250" class="mt-4 ml-4 pa-4"></v-img>

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
    </v-toolbar>

    <v-carousel hide-controls hide-delimiters height="800">
      <v-carousel-item src="pizza_ph.jpg"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

export default {
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
