<script lang="ts" setup>
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import { googleMaterial } from '@/utils/palettes'
</script>

<template>
  <DataTable :value="googleMaterial.colors">
    <Column field="hex" header="Hex" sortable></Column>
    <Column field="hex" header="Color Preview">
      <template #body="slotProps">
        <div
          :style="{ backgroundColor: slotProps.data.hex }"
          style="width: 100%; height: 20px; border-radius: 2px; margin: auto"
        ></div>
      </template>
    </Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="intensity" header="Intensity" sortable></Column>
  </DataTable>
</template>
