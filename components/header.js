class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        var motd_list = [
            "Claim your complementary Big Gemstone on your way out!",
            "3000 years dungeon for anybody snooping in the page source",
            "Please only submit your dwellersonas via carrier pigeon",
            "A little Skelly told me the 404 page changes sometimes...",
            "Press F5 for instant download link!",
            "Hey keeper my guildmates and I really enjoy your campaigns",
            "Proudly the world's first game (record pending)"
        ]
        
        var date = new Date()
        var motd = motd_list[date.getDate() % (motd_list.length - 1)]
        
        this.innerHTML = `
        <audio id="blip" preload="auto"><source src="audio/getfruit.wav" type="audio/wav"></audio> 
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
                height: 100px;
                text-align: center;
                position: absolute;
                width: 100%;
            }

            .navigation a {
                padding-top: 10px;
                background-image: url('assets/nav_default.png');
                background-size: cover;
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

            .navigation a:active {
                background-image: url('assets/nav_selected.png');
            }

            .logo-name {
                background-image: url(assets/panel_logo.png);
                margin-left: calc(calc(50% - var(--panel-width) * 0.5));
                left: -175px;
                top: 166px;
                width: 195px;
                height: 229px;
                position: absolute;
                z-index: 2;
            }

            .logo-name img {
                width: 45%;
                display: flex;
                box-sizing: border-box;
                margin: auto;
                margin-right: 64px;
                margin-top: 35px;
                display: block;
            }

            .name {
                width: 100%;
                text-align: center;
                font-size: 19px;
                bottom: 18px;
                position:absolute;
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
                z-index: 1;
                margin: auto;
                top: 114px;
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

            @media (max-width:600px) {
                .marquee-container {
                    display: none;
                }

                .gear {
                    display: none;
                }
                
                .navigation a {
                    width: 25%;
                    height: 120px;
                    background-image: none;
                    background-color: #31313F;
                    padding-top: 70px;
                    padding-bottom: 10px;
                    border-color: #A0A8AF;
                    box-sizing: border-box;
                    border-width: 5px;
                    border-style: solid;
                    border-radius: 6vw;
                    margin-top: -50px;
                }

                .navigation a:hover, .navigation a:active {
                    background-image: none;
                    border-color: #84FFC3;
                }
            }
        </style>
        <header>
            <div class="navigation">
                <a href="./" onclick="playNav()">HOME
                </a><a href="blog" onclick="playNav()">BLOG
                </a><a href="404" onclick="playNav()">???
                </a><a href="404" onclick="playNav()">???</a>
            </div>
        </header>
        <!-- CONGRATULATIONS LUCKY WINNER! YOU HAVE EARNED AN INDEFINITE VACATION TO THE DEPTHS OF THE DUNGEON! -->
        <img class="gear gear_left">
        <img class="gear gear_right">
        <div class="logo-name">
            <img src="assets/mnstrshark.png" style="cursor:pointer" onclick="mnstrClick(this)">
            <div class="name">
                MNSTR Shark
            </div>
        </div>
        <div class="marquee-container">
            <div class="marquee-border">
                <div class="marquee">` + motd + `</div>
            </div>
        </div>
    `;
    }
}

customElements.define('header-component', Header);
