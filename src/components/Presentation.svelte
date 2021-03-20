<script>
    export let name;
    export let lastName;
    export let linkedin;
    export let github;
    export let gitlab;
    export let stackoverflow;
</script>

<header class="presentation">
    <div class="black-top" />
    <div class="profile">
        <img class="profile-pic" src="/img/profile.png" alt="" />
        <img class="mushroom" src="/img/mushroom.png" alt="" />
    </div>
    <div class="about">
        <div class="info">
            <h1>{name} {lastName}</h1>
            <p>
                <span>Systems Engineer.</span>
                <span>Fullstack Developer.</span>
                <span>Amateur Designer.</span>
            </p>
        </div>
        <div class="social">
            <a href={linkedin} target="_blank" rel="noopenner noreferrer">
                <img src="/img/icons/linkedin.svg" alt="" />
            </a>
            <a href={github} target="_blank" rel="noopenner noreferrer">
                <img src="/img/icons/github.svg" alt="" />
            </a>
            <a href={gitlab} target="_blank" rel="noopenner noreferrer">
                <img src="/img/icons/gitlab.svg" alt="" />
            </a>
            <a href={stackoverflow} target="_blank" rel="noopenner noreferrer">
                <img src="/img/icons/stackoverflow.svg" alt="" />
            </a>
        </div>
    </div>
    <div class="contact">
        <div>
            <img src="/img/icons/peru.svg" alt="" />
            Cajamarca, Perú
        </div>
        <div>
            <img src="/img/icons/mail.svg" alt="" />
            levi.arista@gmail.com
        </div>
        <div>
            <img src="/img/icons/whatsapp.svg" alt="" />
            +51 931 416 152
        </div>
    </div>
</header>

<style>
    .presentation {
        height: 100vh;
    }
    .profile {
        padding: var(--general-padding);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-top: 2.5%;
    }
    .about {
        width: 100%;
        padding: var(--general-padding);
        position: absolute;
        bottom: 115px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .about .info h1 {
        margin: 0;
        font-family: var(--headings-font);
        font-size: 3rem;
        font-weight: 400;
    }
    .about .info p {
        font-family: var(--headings-font);
        font-size: 1.2rem;
    }
    .contact {
        width: 100%;
        height: 115px;
        padding: var(--general-padding);
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: 2.5%;
        background-color: var(--background-secondary-color);
        color: var(--text-secondary-color);
    }
    .contact div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    @media (max-width: 600px) {
        .black-top {
            position: absolute;
            display: block;
            width: 100%;
            height: 50px;
            background-color: var(--background-secondary-color);
            z-index: 10;
        }
        .profile {
            padding-top: 5%;
            position: relative;
            z-index: 100;
        }
        .profile .profile-pic {
            width: 200px;
        }
        .profile .mushroom {
            width: 70px;
        }
        .about {
            top: calc(200px + 5%);
            bottom: 155px;
            flex-direction: column;
        }
        .about .info p {
            display: flex;
            flex-direction: column;
        }
        .contact {
            height: 145px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 5%;
        }
        .contact div {
            height: 25px;
        }
    }
</style>
