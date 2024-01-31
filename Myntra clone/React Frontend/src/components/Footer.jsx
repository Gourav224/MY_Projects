const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>
        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>
          <a href="#">Contact us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy policy</a>
          <a href="#">Grievance</a>
        </div>
        <div className="footer_column">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="desktop-downLinkContainer" data-reactid="100">
            <a href="#">
              <img
                className="desktop-androidDownLink"
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                alt="Android App"
              />
            </a>
            <a href="#">
              <img
                className="desktop-iOSDownLink"
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                alt="iOS App"
              />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div className="copyright">© 2024 www.myntra.com. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
