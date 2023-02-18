<template>
  <div id="header">
    <header>
      <v-container>
        <v-col>
          <v-row> <h1>Holger M Mueller</h1></v-row>
          <v-row> <h2>Artist | Writer | Traveller</h2></v-row>
          <v-row> <h3>Batesville, AR</h3></v-row>
          <v-row class="social-links">
            <a
              class="link"
              target="_blank"
              href="https://www.instagram.com/holgermmueller/"
            >
              <font-awesome-icon icon="fa-brands fa-instagram"
            /></a>

            <a
              class="link"
              target="_blank"
              href="https://www.deviantart.com/holgermueller"
            >
              <font-awesome-icon icon="fa-brands fa-deviantart"
            /></a>
          </v-row>
        </v-col>
      </v-container>
    </header>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  display: grid;
}

a {
  color: black;
  margin: 4px 8px;
  padding: 2px 4px;
}

a:hover {
  color: ghostwhite;
  background: black;
}
</style>
