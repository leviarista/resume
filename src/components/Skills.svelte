<script>
</script>

<section class="skills">
    <h2>Skills</h2>
    <div class="skills-history">
        <div class="column">
            <article>
                <p><b>Technologies, Languages & Libraries</b></p>
                <div>
                    <span class="tech-item favorite">HTML</span>
                    <span class="tech-item favorite">CSS</span>
                    <span class="tech-item favorite">JavaScript</span>
                    <span class="tech-item">Sass</span>
                    <span class="tech-item">JQuery</span>
                </div>
                <div>
                    <span class="tech-item favorite">Node.js</span>
                    <span class="tech-item">PHP</span>
                    <span class="tech-item">Java</span>
                    <span class="tech-item">C#</span>
                </div>
            </article>
            <article>
                <p><b>Frameworks</b></p>
                <div>
                    <span class="tech-item favorite">React.js</span>
                    <span class="tech-item">Sails.js</span>
                    <span class="tech-item">Express.js</span>
                </div>
                <div>
                    <span class="tech-item favorite">Laravel</span>
                    <span class="tech-item">Android Development</span>
                </div>
            </article>
            <article>
                <p><b>Databases</b></p>
                <div>
                    <span class="tech-item favorite">PostgreSQL</span>
                    <span class="tech-item">MySql</span>
                    <span class="tech-item">SQLite</span>
                    <span class="tech-item">MS SQL Server</span>
                </div>
            </article>
        </div>
        <div>
            <article>
                <p><b>Server administration </b></p>
                <div>
                    <span class="tech-item favorite">Ubuntu Server</span>
                </div>
            </article>
            <article>
                <p><b>CI & CD</b></p>
                <div>
                    <span class="tech-item">Docker</span>
                    <span class="tech-item">Jenkins</span>
                </div>
            </article>
            <article>
                <p><b>Design</b></p>
                <div>
                    <span class="tech-item">Corel Draw</span>
                    <span class="tech-item">Illustrator</span>
                    <span class="tech-item">Figma</span>
                </div>
            </article>
        </div>
    </div>
</section>

<style>
    .skills {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        background-color: var(--background-main-color);
    }
    .skills h2 {
        margin-top: 0;
        margin-bottom: 15px;
    }
    .skills .skills-history {
        display: flex;
        /* gap: 50px; */
    }
    .skills .skills-history .column {
        width: 50%;
    }
    .skills article div {
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }
    .skills article .tech-item {
        line-height: 1.5rem;
        font-size: 15px;
        white-space: nowrap;
        line-break: auto;
    }
    .skills article .tech-item.favorite::before {
        content: url("../img/icons/star.svg");
        margin-right: 5px;
    }
    @media (max-width: 600px) {
        .skills {
            padding: var(--general-mobile-padding);
            padding-top: 15%;
            padding-bottom: 15%;
        }
        .skills h2 {
            margin-bottom: 0;
        }
        .skills .skills-history {
            flex-direction: column;
            gap: 0;
        }
        .skills .skills-history .column {
            width: 100%;
        }
        .skills article div {
            flex-wrap: wrap;
        }
    }
</style>
