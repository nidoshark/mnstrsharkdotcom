class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
            .gear {
                content: url('assets/gear.png');
                position: fixed;
                height: 600px;
                width: auto;
                top: max(120px, calc(50% - 300px));
                animation: gear 50s linear infinite;
                pointer-events: none;
                user-select: none;
            }

            .gear_left {
                left: calc(calc(50% - var(--panel-width) * 0.5) - 200px);
                animation: gear_left 50s linear infinite;
                animation-delay: calc(-50s + var(--scroll) * 0.03s);
            }
            
            .gear_right {
                right: calc(calc(50% - var(--panel-width) * 0.5) - 200px);
                animation: gear_right 50s linear infinite;
                animation-delay: calc(-50s + var(--scroll) * 0.03s);
            }

            @keyframes gear_left {
                to {
                    transform: rotateZ(360deg);
                }
            }

            @keyframes gear_right {
                to {
                    transform: rotateZ(-360deg);
                }
            }

            .navigation {
                width: auto;
                height: 100px;
                text-align: center;
            }

            .navigation a {
                padding-top: 10px;
                background-image: url('assets/nav_default.png');
                background-size: contain;
                display: inline-block;
                width: 112px;
                height: 90px;
                text-align: center;
                color: white;
                text-decoration: none;
                font-size: 20px;
            }

            .navigation a:hover {
                background-image: url('assets/nav_hover.png');
            }

            .logo-name {
                background-image: url(assets/panel_logo.png);
                margin-left: calc(calc(50% - var(--panel-width) * 0.5));
                left: -175px;
                top: 176px;
                width: 195px;
                height: 229px;
                position: absolute;
                z-index: 2;
            }

            .logo-name img {
                width: 100px;
                padding: 38px;
            }

            .name {
                width: 100%;
                text-align: center;
                font-size: 19px;
            }

            .marquee {
                color: white;
                display: block;
                margin-top: 6px;
                animation: marquee 10s linear infinite;
                white-space: nowrap;
            }

            .marquee-container {
                background-image: url('assets/panel_motd.png');
                background-repeat: no-repeat;
                position: relative;
                width: 542px;
                box-sizing: border-box;
                height: 76px;
                padding: 24px;
                padding-top: 24px;
                padding-left: 24px;
                top: 24px;
                z-index: 1;
                margin: auto;
            }

            .marquee-border {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            @keyframes marquee {
                0% {
                    transform: translate(100%, 0);
                }

                100% {
                    transform: translate(-100%, 0);
                }
            }
        </style>
        <header>
            <div class="navigation">
                <a href="index.html">HOME
                </a><a href="blog">BLOG</a><a href="404">???</a><a href="404">???</a>
            </div>
        </header>
        <img class="gear gear_left">
        <img class="gear gear_right">
        <div class="logo-name">
            <img src="assets/mnstrshark.png">
            <div class="name">
                MNSTR Shark
            </div>
        </div>
        <div class="marquee-container">
            <div class="marquee-border">
                <div class="marquee">Claim your complementary Big Gemstone on your way out!</div>
            </div>
        </div>
    `;
  }
}

customElements.define('header-component', Header);
