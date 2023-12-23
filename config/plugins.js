// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
export default [
  { src: '@/plugins/pixel-mekari', ssr: false },
  { src: '@/plugins/vuelidate', mode: 'client' },
];
