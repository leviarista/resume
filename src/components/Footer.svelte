<script>
    export let name;
    export let lastName;
    export let linkedin;
    export let github;
    export let gitlab;
    export let stackoverflow;
</script>

<footer class="footer">
    <div class="about">
        {name}
        {lastName}
    </div>
    <div class="social">
        <a href={linkedin} target="_blank" rel="noopenner noreferrer">
            <img src="img/icons/linkedin-30.svg" alt="linkedin-logo" />
        </a>
        <a href={github} target="_blank" rel="noopenner noreferrer">
            <img src="img/icons/github-30.svg" alt="github-logo" />
        </a>
        <a href={gitlab} target="_blank" rel="noopenner noreferrer">
            <img src="img/icons/gitlab-30.svg" alt="gitlab-logo" />
        </a>
        <a href={stackoverflow} target="_blank" rel="noopenner noreferrer">
            <img
                src="img/icons/stackoverflow-30.svg"
                alt="stackoverflow-logo"
            />
        </a>
    </div>
</footer>

<style>
    .footer {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
    }
    @media (max-width: 600px) {
        .footer {
            flex-direction: column-reverse;
            padding-top: 10%;
            padding-bottom: 10%;
        }
    }
</style>
