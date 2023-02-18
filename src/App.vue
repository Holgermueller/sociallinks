<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  data: () => ({
    items: [
      {
        name: "DeviantArt",
        link: "https://www.deviantart.com/holgermueller",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/holgermmueller/",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/thatHMMueller",
      },
      {
        name: "Github",
        link: "https://github.com/Holgermueller",
      },
    ],
  }),

  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header class="imported-header" />

  <main>
    <div v-for="(item, i) in items" :key="i">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" :elevation="isHovering ? 6 : 0">
          <v-card-text>
            <a :href="item.link" target="_blank">
              <v-container>
                <v-row>
                  <v-col class="d-flex justify-center align-center">
                    <div>{{ item.name }}</div>
                  </v-col>
                  <v-col class="d-flex justify-center align-center">
                    <font-awesome-icon
                      icon="fa-solid fa-up-right-from-square"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </a>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </main>

  <Footer />
</template>

<style scoped>
.v-card {
  margin: 2px 0;
}

a {
  color: black;
}
/* 
@media (min-width: 1024px) {
  imported-header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  imported-header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
