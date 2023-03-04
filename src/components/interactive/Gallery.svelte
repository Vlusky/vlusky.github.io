
<script lang="ts">
  import { slide, fade } from "svelte/transition"
  type Kind = "image" | "youtube" | "soundcloud"

  export let title = "title"
  export let bg = "rgb(202, 5, 104)"
  export let elements: any
  export let kind: Kind

  let isOpen = false 
  const toggle = () => {isOpen = !isOpen}
</script>

<h1 class="text-shadow">
  {title}
  <button class="material-symbols-rounded" on:click={toggle}>
    {isOpen ? "expand_more" : "chevron_right"}
  </button> 
</h1>
{#if isOpen}
  <main transition:slide style="background:{bg}">
    {#each elements as element}
      {#if kind === "image"}
      <a href="{element.link || element.src}">
        <img
          transition:fade
          class="shadow"
          src="{element.src}"
          alt="{element.alt}"
        >
      </a>
      {:else if kind === "youtube"}
      <iframe
      transition:fade
        class="youtube shadow"
        src="https://www.youtube.com/embed/{element}?controls=0"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {:else if kind === "soundcloud"}
      <iframe
        transition:fade
        title="Soundcloud player"
        class="soundcloud shadow"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{element}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      {/if}
    {/each}
    <button on:click={toggle} class="hide">hide<span class="material-symbols-rounded">expand_less</span></button>
  </main>
{/if}

<style>
  h1 {
    padding: 1rem
  }
  
  button {
    background: none;
    border: none;
    color:white;
    cursor: pointer
  }
  
  main {
    overflow-x: auto;
    overflow-y:hidden;
    white-space: nowrap;
    padding-bottom: 0px;
  }

  main > a {
    position: relative;
    height: 10px;
    margin: 0px;
  }

  main > a:first-child > img {
    margin-left: 0.25rem;
  }

  main > a > img {
    margin: 0.25rem;
    margin-bottom: 0px;
    margin-left: 0px;
    height: 20rem;
    transition: all 0.2s;
  }

  main > a:first-child > img {
    margin-left: 0.25rem;
  }

  main:has(a:hover) img {
    opacity: 0.5;
    filter: blur(5px);
  }

  main:has(a:hover) img:hover {
    opacity: 1;
    transform: scale(1.02);
    cursor: pointer;
    filter: blur(0);
  }

  main > iframe {
    height: 20rem;
    max-width: calc(100% - 0.5rem);

    margin-top: 0.25rem;
    margin-left: 0.4rem;
  }

  .youtube {
    aspect-ratio: 16/9 !important;
  }
  
  .soundcloud {
    aspect-ratio: 1
  }

  main .hide {
    font-family: unset;
    font-size: unset;
    display: none;
  }

  @media only screen and (max-width: 620px) {
    main {
      white-space: normal;
      text-align:center;
      height: 100%;
      overflow: visible;
    }

    main > a > img {
      max-width: calc(100% - 0.5rem);
      max-height: 100vh;
      height: auto;
      margin: 0.25rem;
    }

    main > iframe {
      height: auto;
      width: calc(100% - 0.5rem);
      margin: 0 !important;
      padding:0 ;
    }

    main > iframe:first-child {
      margin-top: 0.25rem !important;
    }

    /* disable the epic gamer hover effect when on mobile */
    main:has(a:hover) img {
      opacity: 1;
      filter: blur(0);
    }

    main:has(a:hover) img:hover {
      opacity: 1;
      transform: scale(1.02);
      cursor: pointer;
      filter: blur(0);
    }

    main .hide {
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      z-index: 1;
      width:100%;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.479);
      height: 3rem;
    }

    .soundcloud {
      aspect-ratio: 2;
    }
  }
</style>