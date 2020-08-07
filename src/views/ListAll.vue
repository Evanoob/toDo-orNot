<template>
  <div>
    <p>Les listes venant de la BDD :</p>
    <p>Cliquez pour accéder au détails d'une liste</p>
    <hr />
    <ListList />
  </div>
</template>

<script>
import ListList from "@/components/ListList";

export default {
  name: "Listall",
  components: {
    ListList
  }
};
</script>