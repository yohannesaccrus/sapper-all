<script context="module">
  import { isLoading, waitLocale } from "svelte-i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../assets/style/vendor/linear.scss";
  @import "../assets/style/application/application.scss";
</style>

{#if $isLoading}
  <div class="loading">Loading...</div>
{/if}

<Nav {segment} />

<main>
  <slot />
</main>
