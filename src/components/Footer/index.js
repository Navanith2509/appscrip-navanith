import { Component } from "react";
import { Footer } from "flowbite-react";
import "./index.css"; 

class Foot extends Component {
  state = {
    email: "",
  };
  onEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    const { email } = this.state;
    return (
      <div className="foot-container">
        <div  className="foot-card1">
          <div className="foot-sub-card1">
            <p>Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div>
            <input
              placeholder="Enter our email...`"
              id="email"
              onChange={this.onEmail}
              value={email}
            />
            <button>subscribe</button>
            </div>
          </div>
          
          <div>
            <h1>Contact us</h1>
            <div>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <h1>Currency</h1>
            <div>
              <img
                src="https://www.google.com/imgres?q=usa%20flag%20round%20link%20png&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F016%2F328%2F933%2Fnon_2x%2Funited-states-flat-rounded-flag-icon-with-transparent-background-free-png.png&imgrefurl=https%3A%2F%2Fwwwhttps://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg.vecteezy.com%2Ffree-png%2Fusa-flag-round&docid=5j4lmAKNcDSwHM&tbnid=ZASWu7r55v-vuM&vet=12ahUKEwj_69u83Z-KAxUc4zgGHXT6MjsQM3oECBgQAA..i&w=980&h=980&hcb=2&ved=2ahUKEwj_69u83Z-KAxUc4zgGHXT6MjsQM3oECBgQAA"
                alt="website logo"
              />
              <p>.</p>
              <p>USD</p>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="foot-card1">
          <div >
            <h1>mettā muse</h1>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div>
            <h1>Quick Links</h1>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <div>
              <h1 className="heading2">Follow Us</h1>
            </div>
            <div>
              <h1 className="heading2">mettā muse Accepts</h1>
              <div></div>
            </div>
          </div>
          
        </div>
        <p className="card1">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    );
  }
}
export default Foot;
