class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        .footer_container {
            width: 100%;
            background: black;
            background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
            height: 200px;
            margin-top: 70px;
            padding: 10px;
            box-sizing: border-box;
        }

        .footer {
            position: relative;
            width: 400px;
            margin: auto;
            text-align: center;
            top: 25%;
        }
        
        @media (max-width:600px) {
            .footer_container {
                padding: 20px;
                box-sizing: border-box;
            }
            
            .footer {
                width: 100%;
            }
        }
    </style>
      <footer>
        <div class="footer_container">
            <div class="footer">
                © 2022-2023 MNSTR Shark<br>
                Last updated March 20th 2023<br><br>
                <p>This website was built by <a href="https://twitter.com/nidoshark">NIDO</a>. If something is broken, please contact me :]</p>
            </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
