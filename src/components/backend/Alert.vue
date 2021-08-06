<template>
  <div class="alert alert-primary fade show" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2 text-primary"></i>{{ alertMsg }}
  </div>
</template>
<script>
export default {
  props: ['alertMsg'],
};
</script>
