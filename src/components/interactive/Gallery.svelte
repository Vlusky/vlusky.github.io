<script lang="ts">
  import { slide, fade } from "svelte/transition"
  // import { createEventDispatcher } from "svelte"
  import Youtube from "./Youtube.svelte"
  import viewport from "./useViewportAction"

  type Kind = "image" | "youtube" | "soundcloud"

  export let title = "title"
  export let bg = "rgb(202, 5, 104)"
  export let elements: any
  export let kind: Kind

  let loadedCount = 6
  let loadedCurrent = 0

  // to hell with the iframes, they have a set width so no need to wait for them to load
  if (kind !== "image") {
    loadedCurrent = elements.length
  }

  const loadMore = () => {
    console.log("definitely loading")

    if (loadedCurrent < loadedCount) {
      return
    }

    const check = setInterval(() => {
      console.log("checking")

      if (loadedCount < elements.length && loadedCurrent === loadedCount) {
        loadedCount += 6
        clearInterval(check)
      }
    }, 1000)
  }

  let isOpen = false
  const toggle = () => {
    isOpen = !isOpen
  }
</script>

<h1 class="text-shadow">
  {title}
  {loadedCurrent}
  {loadedCount}
  <button class="material-symbols-rounded" on:click={toggle}>
    {isOpen ? "expand_more" : "chevron_right"}
  </button>
</h1>
{#if isOpen}
  <main transition:slide style="background:{bg}">
    {#each elements as element, index}
      {#if index < loadedCount}
        {#if kind === "image"}
          <a
            target="_blank"
            rel="noreferrer"
            href={element.link || element.src}
          >
            <img
              transition:fade
              class="shadow"
              src={element.src}
              alt={element.alt}
              on:load={() => {
                loadedCurrent += 1
              }}
            />
            <span class="img-title text-shadow">{element.alt} {index}</span>
          </a>
        {:else if kind === "youtube"}
          <!-- ! iframes suck, make your own thumbnail component -->
          <!-- <iframe
      transition:fade
        class="youtube shadow"
        src="https://www.youtube.com/embed/{element}?controls=0"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> -->

          <div class="youtube shadow">
            <Youtube id={element.id} title={element.title} />
          </div>
        {:else if kind === "soundcloud"}
          <iframe
            transition:fade
            title="Soundcloud player"
            class="soundcloud shadow"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{element}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        {/if}
      {/if}
    {/each}
    <!-- typescript has no fucking idea that the other file dispatched a new event -->
    <div
      use:viewport
      on:enterViewport={loadMore}
      class="loader"
      style="display:{loadedCurrent === elements.length ? 'none' : 'inline'}"
    >
      <span class="material-symbols-rounded">progress_activity</span>
    </div>
    <button on:click={toggle} class="hide"
      >hide<span class="material-symbols-rounded">expand_less</span>
    </button>
  </main>
{/if}

<style>
  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }

  h1 {
    padding: 1rem;
  }

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  main {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding-bottom: 0px;
  }

  main > a {
    position: relative;
    height: 20rem;
    margin: 0px;
  }

  main > .loader {
    display: inline;
    position: relative;
    margin-right: 0.5rem;
    bottom: 0.5rem;
    padding: 0.5rem;
  }

  .loader > span {
    rotate: 20deg;
    font-size: 3rem;
    animation: spin 2s linear 0s infinite;
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

  /*
  main:has(a:hover) img {
    opacity: 0.5;
  }

  main:has(a:hover) img:hover {
    opacity: 1;
    cursor: pointer;
    filter: blur(0);
  }
  */

  main:hover > a:not(:hover) > img {
    opacity: 0.5;
  }

  a:hover > .img-title {
    opacity: 1;
  }

  .img-title {
    position: absolute;
    left: 0.25rem;
    bottom: 0.5rem;
    color: white;
    font-weight: 600;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s;
    background: #00000066;
    padding: 0.25rem;
    pointer-events: none;
  }
  /* it can't be "last child" because of the "hide" button */
  main > a:nth-last-child(3) > .img-title,
  main > a:nth-last-child(4) > .img-title {
    right: 0.25rem;
    left: auto;
  }

  main > iframe {
    height: 20rem;
    max-width: calc(100% - 0.5rem);

    margin-top: 0.25rem;
    margin-left: 0.4rem;
  }

  .youtube {
    height: 20rem;
    aspect-ratio: 16/9;
    display: inline-block;
    margin: 0.25rem;
    margin-bottom: 0;
  }

  .youtube:not(:first-child) {
    margin-left: 0;
  }

  .soundcloud {
    aspect-ratio: 1;
  }

  main .hide {
    font-family: unset;
    font-size: unset;
    display: none;
  }

  @media only screen and (max-width: 620px) {
    main {
      white-space: normal;
      text-align: center;
      height: 100%;
      overflow: visible;
    }

    .img-title {
      display: none;
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
      padding: 0;
    }

    .youtube {
      height: auto;
      width: calc(100% - 0.5rem);
      margin: 0.25rem !important;
    }

    main > iframe:first-child {
      margin-top: 0.25rem !important;
    }

    /* disable the epic gamer hover effect when on mobile */
    /*
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
    */
    main:hover > a:not(:hover) > img {
      opacity: 1;
    }

    main .hide {
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      z-index: 1;
      width: 100%;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.479);
      height: 3rem;
    }

    .soundcloud {
      aspect-ratio: 2;
    }
  }
</style>
