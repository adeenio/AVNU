<template>
  <v-card color="primary">
    <v-card-title class="text-center justify-center py-6">
     <v-avatar color="grey" size="200">
      <h1 class="font-weight-bold display-3 orange--text">Avnu</h1>
      </v-avatar>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="warning"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat color="basil">
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'About', 'Reviews', 'Contact', 'Services',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

