<script>
  import { onMount } from "svelte";
  import { format } from "svelte-i18n";
  import axios from "axios";
  import moment from "moment";

  let users = [];
  const listUsers = async () => {
    const res = await axios({
      method: "GET",
      url: "https://5ecde4317c528e00167cd8a2.mockapi.io/api/v1/users"
    });
    users = await res.data;
  };

  onMount(async () => {
    listUsers()
      .then(() => {
        alert("data loaded");
      })
      .catch(() => {
        alert("data not loaded");
      });
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section class={'container'}>
  <div class={'descriptive'} layer={'users'}>
    <div class={'title'}>
      <h1>{$format('index.title')}</h1>
      <p>{$format('index.subtitle')}</p>
    </div>
    <div class={'users'}>
      {#if users.length === 0}
        <div class={'spinner'} />
      {:else}
        <div class={'row'}>
          {#each users as user}
            <div class={'column large:02 small:12'}>
              <div class={'user'}>
                <div class={'card'}>
                  <div class={'media'}>
                    <img src={user.avatar} alt={'Karen'} />
                  </div>
                  <div class={'text'}>
                    <p class={'field'}>
                      <strong>{$format('index.user.name')} :</strong>
                    </p>
                    <p>{user.name}</p>
                    <p class={'field'}>
                      <strong>{$format('index.user.created')} :</strong>
                    </p>
                    <p>{moment(user.createdAt).format('MMMM Do YYYY')}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}

    </div>
  </div>
</section>
