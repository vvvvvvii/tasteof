<template>
  <div class="alert alert-primary fade show" role="alert">
    <i class="bi bi-check-lg me-2 text-primary"></i>{{ noticeMsg }}
  </div>
</template>
<script>
export default {
  props: ['noticeMsg'],
};
</script>
