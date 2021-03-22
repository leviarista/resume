<script>
</script>

<section class="education">
    <h2>Education</h2>
    <div class="education-history">
        <article>
            <img src="img/education/unc.png" alt="unc-logo" />
            <p>
                <b>Bachelor in Systems Engineering</b><br />
                National University of Cajamarca<br />
                2012 - 2016
            </p>
        </article>
        <article>
            <img src="img/education/usa.png" alt="us-embassy" />
            <p>
                <b>English Access Microscholarship Program</b><br />
                from U.S.Embassy at ICPNA<br />
                2009 - 2014<br />
                <br />
                <b>Member of the International Exhange Alumni Network</b>
            </p>
        </article>
    </div>
</section>

<style>
    .education {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 25px;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
    }
    .education h2 {
        margin: 0;
        margin-bottom: 25px;
        text-align: center;
    }
    .education-history {
        display: flex;
    }
    .education-history article {
        width: 50%;
        display: flex;
        align-items: flex-start;
        /* justify-content: center; */
        gap: 10px;
        /* text-align: center; */
    }
    .education-history article p {
        margin: 0;
        /* text-align: center; */
    }
    @media (max-width: 600px) {
        .education {
            height: auto;
            padding: var(--general-mobile-padding);
            padding-top: 15%;
            padding-bottom: 15%;
        }
        .education-history {
            flex-direction: column;
            gap: 50px;
        }
        .education-history article {
            width: 100%;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
</style>
