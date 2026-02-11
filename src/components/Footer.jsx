import { useContext } from "react";
import { UiContext } from "../state/UiContextValue";

export default function Footer() {
  const { t } = useContext(UiContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 fw-bold">
              <span className="brand-badge">SS</span>
              <span className="brand-text">Skild Share</span>
            </div>
            <p className="text-muted mt-3 mb-0">{t.footer.tagline}</p>
          </div>

          <div className="col-lg-4">
            <h6 className="footer-title">{t.footer.quick}</h6>
            <div className="footer-links">
              <a href="#about">{t.nav.about}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#packages">{t.nav.packages}</a>
              <a href="#offers">{t.nav.offers}</a>
              <a href="#events">{t.nav.events}</a>
            </div>
          </div>

          <div className="col-lg-4">
            <h6 className="footer-title">{t.footer.contact}</h6>
            <div className="footer-contact">
              <div>
                <i className="bi bi-geo-alt"></i>
                <span>Shebin El Kom, Menofia, Egypt</span>
              </div>
              <div>
                <i className="bi bi-telephone"></i>
                <span>01153628836</span>
              </div>
              <div>
                <i className="bi bi-envelope"></i>
                <span>skildacademy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Skild Share. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
