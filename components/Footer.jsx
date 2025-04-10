import '../public/css/main.css';

export default function Footer() {
    return (
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <h3 className="site-name">Pixel Zone</h3>
          <div className="social-links d-flex justify-content-center">
            <a href="https://www.instagram.com/pixel_.zone" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="copyright">
            © Copyright <strong>Pixel Zone</strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }