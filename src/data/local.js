let data_cache;

export default {
  save(data) {
    data_cache = data;
  },
  get() {
    return data_cache;
  }
}
