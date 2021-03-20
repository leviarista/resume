<script>
    import Presentation from "./components/Presentation.svelte";

    export let name;
    export let lastName;
    export let linkedin;
    export let github;
    export let gitlab;
    export let stackoverflow;
</script>

<main>
    <Presentation
        {name}
        {lastName}
        {linkedin}
        {github}
        {gitlab}
        {stackoverflow}
    />
</main>

<style>
    main {
        margin: 0 auto;
        /* padding: 0 2px; */
        font-family: var(--text-font);
        font-size: 1rem;
        /* text-align: center; */
    }
</style>
