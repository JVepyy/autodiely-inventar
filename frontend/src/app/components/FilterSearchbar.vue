<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="search-container">
          <input
            v-model="query"
            type="text"
            class="form-control search-input"
            placeholder="Search..."
            @input="onSearch" />
          <i class="fas fa-search search-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      query: '',
    }
  },
  computed: {
    searchResults() {
      return this.$filterStore.getSearchResults
    },
    isLoading() {
      return this.$filterStore.getIsLoading
    },
  },

  methods: {
    onSearch() {
        this.$filterStore.search(this.query)
    },
  },
}
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
}

.search-input {
  height: 65px;
  font-size: 20px;
  border-radius: 40px;
  padding-left: 50px;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.search-input:hover,
.search-container:hover .search-icon {
  box-shadow: 0 1px 75px darkblue;
  color: blue;
}

.search-input:hover::placeholder {
  color: blue;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 22px;
  color: #666;
}
</style>
