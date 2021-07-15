<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          @click.prevent="emitChangePage(pagination.current_page - 1)"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="item in pagipages"
        :key="item"
        :class="{ active: pagination.current_page === item }"
        @click.prevent="emitChangePage(item)"
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a class="page-link" href="#" @click.prevent="emitChangePage(pagination.current_page + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['page', 'filterProduct'],
  data() {
    return {
      pagination: { ...this.page },
    };
  },
  methods: {
    emitChangePage(p) {
      if (p > 0 && p <= this.pagipages) {
        this.pagination.current_page = p;
        this.pagination.page_start = this.pagination.per_page * p - this.pagination.per_page + 1;
        this.pagination.page_end = this.pagination.per_page * p;
        if (p === 1) {
          this.pagination.has_pre = false;
        } else if (p === this.pagination.total_pages) {
          this.pagination.has_next = false;
        } else {
          this.pagination.has_pre = true;
          this.pagination.has_next = true;
        }
      }
      this.$emit('emit-pagination', this.pagination);
    },
  },
  computed: {
    pagipages: function pagipage() {
      // This calculates the amount of pages
      return Math.ceil(this.filterProduct.length / this.page.per_page);
    },
  },
};
</script>
