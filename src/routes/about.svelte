<script>
  import { format } from "svelte-i18n";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class={'container'}>
  <h1>{$format('about.title')}</h1>
  <p>{$format('about.subtitle')}</p>
</section>
