<template>
  <div class="form-group">
    <select class="form-control" @change="">
      <option>-- none --</option>
      <option v-for="(value, index) in items">{{ index }} ({{ value }})</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>
