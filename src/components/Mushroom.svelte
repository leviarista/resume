<script></script>

<section class="learning">
    <img class="mushroom" src="img/mushroom-50.png" alt="mushrrom" />
    <p>LEARNING</p>
</section>

<style>
    .learning {
        padding: var(--general-padding);
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        text-align: center;
    }
    .mushroom {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
        animation-name: bounce;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes bounce {
        0% {
            transform: scale(1, 1) translateY(0);
        }
        10% {
            transform: scale(1.1, 0.9) translateY(0);
        }
        30% {
            transform: scale(0.9, 1.1) translateY(-25px);
        }
        50% {
            transform: scale(1.05, 0.95) translateY(0);
        }
        57% {
            transform: scale(1, 1) translateY(-7px);
        }
        64% {
            transform: scale(1, 1) translateY(0);
        }
        100% {
            transform: scale(1, 1) translateY(0);
        }
    }
    p {
        margin-top: -5px;
        margin-bottom: 0;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
        animation-name: points;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes points {
        0% {
            transform: scale(1, 1);
        }
        30% {
            transform: scale(0.9, 1.1);
        }
        50% {
            transform: scale(1.05, 1.05);
        }
        57% {
            transform: scale(1.25, 1.25);
        }
        64% {
            transform: scale(1.05, 1.05);
        }
        90% {
            transform: scale(1.25, 1.25);
        }
        100% {
            transform: scale(1, 1);
        }
    }
</style>
