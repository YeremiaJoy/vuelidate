<template>
  <theme-provider>
    <mp-box
      class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
      style="gap: 16px"
    >
      <form-submission />
      <div class="border border-solid border-gray h-screen" />
      <array />
      <div class="border border-solid border-gray h-screen" />
      <password />
    </mp-box>
  </theme-provider>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
