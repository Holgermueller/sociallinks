<script>
export default {
  data: () => ({
    items: [
      {
        icon: "",
        name: "DeviantArt",
        link: "https://www.deviantart.com/holgermueller",
      },
      {
        icon: "",
        name: "Instagram",
        link: "https://www.instagram.com/holgermmueller/",
      },
      { icon: "", name: "Twitter", link: "https://twitter.com/thatHMMueller" },
      { icon: "", name: "Github", link: "https://github.com/Holgermueller" },
    ],
  }),
};
</script>

<template>
  <header>
    <v-container>
      <v-col>
        <v-row> <h1>Holger Mueller</h1></v-row>
        <v-row> <h2>Artist | Writer | Traveller</h2></v-row>
        <v-row> <h3>Batesville, AR</h3></v-row>
      </v-col>
    </v-container>
  </header>

  <main>
    <div v-for="(item, i) in items" :key="i">
      <v-card>
        <v-card-text>
          <a :href="item.link" target="_blank">
            <v-container>
              <v-row>
                <v-col>
                  <div>{{ item.name }}</div>
                </v-col>
                <v-col>
                  <div>{{ item.name }}</div>
                </v-col>
                <v-col>
                  <v-icon icon="mdi-open-in-new"></v-icon>
                </v-col>
              </v-row>
            </v-container>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </main>

  <footer>&copy; 2023 Holger Mueller</footer>
</template>

<style scoped>
header,
footer {
  line-height: 1.5;
  text-align: center;
}

header {
  display: grid;
}

a {
  color: black;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
