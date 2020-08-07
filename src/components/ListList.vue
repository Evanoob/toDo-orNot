<template>
  <ul class="lists">
    <li class="list" v-if="!lists.length">...loading</li>
    <li v-for="(list, i) in lists" :key="i" class="list">
      <p>{{ list.name }}</p>
      <p>
        <router-link class="link" :to="'/lists/' + list._id">see details...</router-link>
      </p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async getLists() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/api/list"
      );
      this.lists = apiRes.data; // axios retourne TJS les results sous la clé data
    }
  },
  created() {
    try {
      this.getLists();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>