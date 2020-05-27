<script>
  import { format, locale, locales } from "svelte-i18n";
  export let segment;
</script>

<nav>
  <div class={'container'}>
    <div class={'row'}>
      <div class={'column large:04'}>
        <div class={'logo'}>
          <h2>{$format('logo')}</h2>
        </div>
      </div>
      <div class={'column large:08'}>
        <ul class={'menus'}>
          <li>
            <a
              aria-current={segment === undefined ? 'page' : undefined}
              href=".">
              {$format('nav.home')}
            </a>
          </li>
          <li>
            <a
              aria-current={segment === 'about' ? 'page' : undefined}
              href="about">
              {$format('nav.about')}
            </a>
          </li>
          {#each $locales as item}
            <li>
              <span on:click={() => ($locale = item)}>
                {$format(`lang[${item}]`)}
              </span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</nav>
