<template>
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
    {{ alertMsg }}
  </div>
</template>
<script>
export default {
  props: ['alertMsg'],
};
</script>
