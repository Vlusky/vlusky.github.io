<script lang="ts">
  export let id: string
  export let title: string = "Title"
  let isPlayed = false

  const play = () => {isPlayed = true}

  const thumbnailLink = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
</script>

<!-- wrap this inside another div -->

<div
  id="thumbnail"
  style="background-image:url({thumbnailLink})"
  on:click="{play}"
  on:keydown="{play}"
>
  {#if !isPlayed}  
  <span id="title" class="text-shadow">
    {title}
  </span>
  <span id="icon" class="material-symbols-outlined text-shadow">
    play_circle
  </span>
  {:else}
  <iframe
    src="https://www.youtube.com/embed/{id}?controls=1&autoplay=1"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  {/if}
</div>


<style>
  #thumbnail {
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
    display: block;
    position: relative;
    cursor: pointer
  }

  #thumbnail > * {
    display:inline-block;
    position: absolute;
    user-select: none;
  }

  #title {
    font-size: 1.2rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.425) 0%, rgba(0,0,0,0) 100%);
    width:calc(100% - 1rem);
    height:25%;
    padding: 0.5rem;
    transition: all 0.2s ease;
  }

  #icon {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 7rem;
    background: rgba(0, 0, 0, 0.486);
    border-radius: 100%;
    transition: all 0.2s ease
  }

  #thumbnail:hover > #icon {
    font-size: 8rem;
    background: rgba(248, 21, 21, 0.486);
  }

  #thumbnail:hover > #title {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.699) 0%, rgba(0,0,0,0) 100%);
    height:100%;
  }

  iframe {
    width:100%;
    height:100%;
  }

  @media only screen and (max-width: 620px) {
    #title {
      top:0;
      left: 0;
      text-align: left;
      font-size: 3.5vw
    }

    #icon {
      font-size: 20vw
    }

    iframe {
      left:0;
      top: 0;
    }
  }
</style>
