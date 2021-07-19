<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          @click.prevent="changePage(page.current_page - 1)"
          >上一頁</a
        >
      </li>
      <li
        class="page-item"
        v-for="item in page.total_pages"
        :key="item"
        :class="{ active: page.current_page === item }"
        @click.prevent="changePage(item)"
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a class="page-link" href="#" @click.prevent="changePage(page.current_page + 1)">下一頁</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['page'],
  data() {
    return {
      pagination: { ...this.page },
    };
  },
  methods: {
    changePage(page) {
      this.$emit('emit-pagination', page);
    },
  },
};
</script>
