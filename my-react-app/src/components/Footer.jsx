import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>visualverve.studios</h2>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <a href="#">Websites</a>
            <a href="#">Collections</a>
            <a href="#">Elements</a>
          </div>
          <div className="footer-col">
            <a href="#">Academy</a>
            <a href="#">Jobs</a>
            <a href="#">Market</a>
          </div>
          <div className="footer-col">
            <a href="#">Directory</a>
            <a href="#">Conferences</a>
          </div>
          <div className="footer-col">
            <a href="#">FAQs</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Cookies Policy</a>
          <a href="#">Legal Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <span><strong>Connect:</strong></span>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
