<template>
  <main class="editor shadow">
    <div ref="editor" id="editor"></div>
    <section class="actions">
      <a-button type="primary" @click="showModal">发布</a-button>
      <a-button type="danger">清空</a-button>
    </section>
    <b-modal ref="modal" />
    <editor-tool></editor-tool>
  </main>
</template>

<script setup>
import BModal from '@/blocks/ModalView.vue'
import { ref } from 'vue'
import EditorTool from './EditorTool.vue'

const modal = ref(null)
const showModal = () => modal.value.setVisible(true)
</script>

<style scoped>
.editor {
  margin: 30px 10px;
  background-color: #eceff1;
  padding: 10px;
  border-radius: 4px;
}

.actions {
  padding: 8px;
  text-align: center;
  z-index: 9999;
}

.actions > * {
  margin: 10px;
}
</style>
