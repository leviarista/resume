<script>
    import Presentation from "./components/Presentation.svelte";
    import Experience from "./components/Experience.svelte";
    import Education from "./components/Education.svelte";
    import Skills from "./components/Skills.svelte";
    import Projects from "./components/Projects.svelte";
    import Footer from "./components/Footer.svelte";
    import Mushroom from "./components/Mushroom.svelte";

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
    <Experience />
    <Education />
    <Skills />
    <Projects />
    <Mushroom />
    <Footer {name} {lastName} {linkedin} {github} {gitlab} {stackoverflow} />
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
