<script>
</script>

<section class="experience">
    <h2>Experience</h2>
    <div class="experience-history">
        <div>
            <article>
                <p><i>February 2020 - Present</i></p>
                <div>
                    <img src="img/experience/ms4m.png" alt="ms4m-logo" />
                    <p>
                        <b>Software Development Engineer</b><br />
                        Mine Sense for Miners<br />
                        <br />
                        <span class="tech-badge">React.js</span>
                        <span class="tech-badge">Express.js</span>
                        <span class="tech-badge">PostgreSQL</span>
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">Python</span>
                    </p>
                </div>
            </article>
            <article>
                <p><i>December 2018 - February 2020</i></p>
                <div>
                    <img src="img/experience/ms4m.png" alt="ms4m-logo" />
                    <p>
                        <b>FMS Administrator & Applications Analyst</b><br />
                        Mine Sense for Miners [for GoldFields La Cima]<br />
                        <br />
                        <span class="tech-badge">PostgreSQL</span>
                        <span class="tech-badge">Sails.js</span>
                        <span class="tech-badge"
                            >Linux Server Administration</span
                        >
                        <span class="tech-badge">SQLite</span>
                        <span class="tech-badge">ISO 27001</span>
                    </p>
                </div>
            </article>
            <article>
                <p><i>February 2018 - November 2018</i></p>
                <div>
                    <img src="img/experience/ms4m.png" alt="ms4m-logo" />
                    <p>
                        <b>Junior Systems Engineer</b><br />
                        Mine Sense for Miners<br />
                        <br />
                        <span class="tech-badge">Sails.js</span>
                        <span class="tech-badge">PostgreSQL</span>
                        <span class="tech-badge">Android</span>
                    </p>
                </div>
            </article>
            <article>
                <p><i>March 2017 - December 2017</i></p>
                <div>
                    <img src="img/experience/upagu.png" alt="upagu-logo" />
                    <p>
                        <b>Developer</b><br />
                        Antonio Guillermo Urrelo Private University<br />
                        <br />
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">JDeveloper</span>
                        <span class="tech-badge">Oracle Database</span>
                        <span class="tech-badge">JasperReports</span>
                    </p>
                </div>
            </article>
        </div>
        <div>
            <article>
                <p><i>March 2017 - December 2017</i></p>
                <div>
                    <img src="img/experience/didepti.png" alt="didepti-logo" />
                    <p>
                        <b>Developer</b><br />
                        DIDEPTI<br />
                        <br />
                        <span class="tech-badge">Zend</span>
                        <span class="tech-badge">Mysql</span>
                    </p>
                </div>
            </article>
            <article>
                <p><i>March 2017 - February 2020</i></p>
                <div>
                    <img src="img/experience/okidoki.png" alt="okidoki-logo" />
                    <p>
                        <b>Developer</b><br />
                        Okidoki SAC<br />
                        <br />
                        <span class="tech-badge">Laravel</span>
                        <span class="tech-badge">Mysql</span>
                    </p>
                </div>
            </article>
            <article>
                <p><i>03/2015, 08/2015, 05/2018, 09/2018</i></p>
                <div>
                    <img src="img/experience/inei.png" alt="inei-logo" />
                    <p>
                        <b>IT Operator for national evaluations of teachers</b
                        ><br />
                        National Institute of Statistics and Informatics<br />
                    </p>
                </div>
            </article>
        </div>
    </div>
</section>

<style>
    .experience {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        background-color: var(--background-main-color);
    }
    .experience h2 {
        margin-top: 0;
        margin-bottom: 25px;
    }
    .experience .experience-history {
        display: flex;
        gap: 50px;
    }
    .experience article div {
        display: flex;
        align-items: flex-start;
        gap: 10px;
    }
    .experience article div p {
        margin: 0;
    }
    .experience article div img {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
    .experience article div .tech-badge {
        line-height: 1.5rem;
        padding: 2px 10px;
        font-size: 15px;
        white-space: nowrap;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
        border-radius: 2.5px;
    }
    @media (max-width: 600px) {
        .experience {
            padding: var(--general-mobile-padding);
            padding-top: 15%;
            padding-bottom: 15%;
        }
        .experience h2{
            margin-bottom: 0;
        }
        .experience .experience-history {
            flex-direction: column;
            gap: 0;
        }
    }
</style>
