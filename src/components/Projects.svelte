<script></script>

<section class="projects">
    <h2>Projects</h2>
    <div class="projects-container">
        <article class="card">
            <div class="card-header">
                <a
                    href="https://ecostatsperu.netlify.app"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <img
                        class="card-image"
                        src="img/projects/eco-stats-peru.png"
                        alt="eco-stats-peru-logo"
                    />
                </a>
                <div>
                    <div class="card-title">
                        <a
                            href="https://ecostatsperu.netlify.app"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <b>Eco Stas Perú</b>
                        </a>
                    </div>
                    <div class="card-links">
                        <a
                            href="https://github.com/leviarista/eco-stats-peru"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <img
                                src="img/icons/github-25.svg"
                                alt="github-logo"
                            />
                        </a>
                        <a
                            href="https://ecostatsperu.netlify.app/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <img src="img/icons/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        Built using:<br />
                        <span class="tech-badge">React.js</span>
                        <span class="tech-badge">New Relic</span>
                        <span class="tech-badge">Open Data</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                Winner project of the
                <a
                    href="https://www.therelicans.com/therelicans/hack-the-planet-contest-winners-announced-22po"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    New Relic Hack the Planet Contest.
                </a><br />
                Eco Stats Perú is a website aims to list solutions and show data
                that raise awareness about how Peruvians are influencing our environment,
                how we impact its resources and how we influence climate change,
                based on open data.
            </div>
        </article>
        <article class="card">
            <div class="card-header">
                <a
                    href="http://sc-caminodesantidad.org/"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <img
                        class="card-image"
                        src="img/projects/sccs.png"
                        alt="sccs-logo"
                    />
                </a>
                <div>
                    <div class="card-title">
                        <a
                            href="http://sc-caminodesantidad.org/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <b>SCCS [Website]</b>
                        </a>
                    </div>
                    <div class="card-links">
                        <a
                            href="http://sc-caminodesantidad.org/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <img src="img/icons/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        Built using:<br />
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">MySql</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                Website of the christian association: "Sociedad Cristiana Camino
                de Santidad".
            </div>
        </article>
        <article class="card">
            <div class="card-header">
                <a
                    href="http://vptinmobiliaria.com/"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <img
                        class="card-image"
                        src="img/projects/vpt-inmobiliaria.png"
                        alt="vpt-inmobiliaria-logo"
                    />
                </a>
                <div>
                    <div class="card-title">
                        <a
                            href="http://vptinmobiliaria.com/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <b>VPT Inmobiliaria [Website]</b>
                        </a>
                    </div>
                    <div class="card-links">
                        <a
                            href="http://vptinmobiliaria.com/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <img src="img/icons/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        Built using:<br />
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">MySql</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                Website for real estate: "Valentine's Inmobiliaria"
            </div>
        </article>
        <article class="card">
            <div class="card-header">
                <a
                    href="http://celogosyethos.com/"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <img
                        class="card-image"
                        src="img/projects/logos-y-ethos.png"
                        alt="logos-y-ethos-logo"
                    />
                </a>
                <div>
                    <div class="card-title">
                        <a
                            href="http://celogosyethos.com/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <b>Logos y Ethos [Website]</b>
                        </a>
                    </div>
                    <div class="card-links">
                        <a
                            href="http://celogosyethos.com/"
                            target="_blank"
                            rel="noopenner noreferrer"
                        >
                            <img src="img/icons/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        Built using:<br />
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">Sass</span>
                        <span class="tech-badge">MySql</span>
                        <span class="tech-badge gray">In construction</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                Website for the Law Students Association: "Círculo de Estudios
                Logos y Ethos".
            </div>
        </article>
    </div>
</section>

<style>
    .projects {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
    }
    .projects h2 {
        margin-top: 0;
        text-align: center;
    }
    .projects .projects-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }
    .card {
        padding: 5%;
        background-color: var(--background-main-color);
        color: var(--text-main-color);
        border-radius: 5px;
    }
    .card-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
    }
    .card-header .card-title {
        font-size: 1.25rem;
    }
    .card-header .card-links {
        margin-top: 5px;
        margin-bottom: 15px;
    }
    .card-header .tech-badge {
        line-height: 2rem;
        padding: 2px 10px;
        font-size: 15px;
        white-space: nowrap;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
        border-radius: 2.5px;
    }
    .card-header .tech-badge.gray {
        background-color: var(--background-alternate-color);
        color: var(--text-secondary-color);
    }
    .card-body {
        margin-top: 15px;
        text-align: left;
    }
    @media (max-width: 600px) {
        .projects {
            padding: var(--general-mobile-padding);
            padding-top: 15%;
            padding-bottom: 15%;
        }
        .projects .projects-container {
            display: grid;
            grid-template-columns: auto;
        }
        .card-header {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 15px;
        }
        .card-body {
            text-align: center;
        }
    }
</style>
