import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { UiContext } from "../state/UiContextValue";

export default function Contact() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  const menu = [
    {
      title: { en: "Coffee & Hot Drinks", ar: "القهوة والمشروبات الساخنة" },
      items: [
        { name: { en: "Espresso", ar: "إسبريسو" }, price: "25 EGP", tag: t.drinks.popular },
        { name: { en: "Cappuccino", ar: "كابتشينو" }, price: "25 EGP", tag: t.drinks.popular },
        { name: { en: "Latte", ar: "لاتيه" }, price: "25 EGP", tag: t.drinks.popular },
        { name: { en: "Americano", ar: "أمريكانو" }, price: "25 EGP" },
        { name: { en: "Turkish Coffee", ar: "قهوة تركي" }, price: "20 EGP" },
        { name: { en: "Hot Chocolate", ar: "هوت شوكولاتة" }, price: "28 EGP" },
      ],
    },
    {
      title: { en: "Fresh Juices & Smoothies", ar: "العصائر الطازجة والسموذي" },
      items: [
        { name: { en: "Fresh Orange", ar: "عصير برتقال" }, price: "50 EGP", tag: t.drinks.popular },
        { name: { en: "Green Smoothie", ar: "سموذي أخضر" }, price: "50 EGP" },
        { name: { en: "Berry Blast", ar: "سموذي توت" }, price: "50 EGP", tag: t.drinks.popular },
        { name: { en: "Mango Passion", ar: "مانجو باشن" }, price: "50 EGP" },
        { name: { en: "Lemonade", ar: "ليمونادة" }, price: "50 EGP" },
        { name: { en: "Watermelon Fresh", ar: "عصير بطيخ" }, price: "50 EGP" },
      ],
    },
    {
      title: { en: "Energy & Cold Drinks", ar: "المشروبات الباردة والمنعشة" },
      items: [
        { name: { en: "Iced Coffee", ar: "آيس كوفي" }, price: "30 EGP", tag: t.drinks.popular },
        { name: { en: "Frappuccino", ar: "فرابتشينو" }, price: "35 EGP", tag: t.drinks.popular },
        { name: { en: "Energy Smoothie", ar: "سموذي طاقة" }, price: "40 EGP" },
        { name: { en: "Iced Tea", ar: "آيس تي" }, price: "20 EGP" },
        { name: { en: "Sparkling Water", ar: "مياه غازية" }, price: "15 EGP" },
        { name: { en: "Soft Drinks", ar: "مشروبات غازية" }, price: "20 EGP" },
      ],
    },
    {
      title: { en: "Snacks & Light Bites", ar: "سناكس وخفيفات" },
      items: [
        { name: { en: "Croissant", ar: "كرواسون" }, price: "15 EGP" },
        { name: { en: "Sandwich", ar: "ساندوتش" }, price: "35 EGP", tag: t.drinks.popular },
        { name: { en: "Cookies", ar: "كوكيز" }, price: "20 EGP" },
        { name: { en: "Muffin", ar: "مافن" }, price: "20 EGP" },
        { name: { en: "Fruit Salad", ar: "سلطة فواكه" }, price: "30 EGP" },
        { name: { en: "Nuts Mix", ar: "مكسرات" }, price: "30 EGP" },
      ],
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    const subject = encodeURIComponent(t.contact.emailSubject);
    const body = encodeURIComponent(
      `${t.contact.name}: ${name}\n` +
        `${t.contact.phone2}: ${phone}\n` +
        `${t.contact.message}:\n${message}`
    );

    window.location.href = `mailto:skildacademy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section id="drinks" className="section-pad menu-section">
        <div className="container">
          <div ref={ref} className="section-head text-center reveal-up">
            <span className="section-kicker">{t.nav.drinks}</span>
            <h2 className="section-title">{t.drinks.title}</h2>
            <p className="section-sub">{t.drinks.sub}</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="menu-hero rounded-4 overflow-hidden shadow-soft">
                <img
                  className="w-100 h-100 object-fit-cover"
                  alt="Cafe"
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=80"
                />
                <div className="menu-hero-overlay p-4">
                  <div className="fw-bold">{t.drinks.fresh}</div>
                  <div className="small opacity-90">{t.drinks.freshSub}</div>
                </div>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-6">
                  <div className="mini-cta bg-primary text-white rounded-4 p-3 shadow-soft">
                    <div className="fw-bold">{t.drinks.happy}</div>
                    <div className="small opacity-90">{t.drinks.happySub}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mini-cta bg-warning rounded-4 p-3 shadow-soft">
                    <div className="fw-bold">{t.drinks.perks}</div>
                    <div className="small">{t.drinks.perksSub}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="accordion" id="menuAcc">
                {menu.map((section, idx) => (
                  <div className="accordion-item rounded-4 overflow-hidden mb-3 shadow-soft" key={section.title.en}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#m${idx}`}
                      >
                        {section.title[lang]}
                      </button>
                    </h2>
                    <div
                      id={`m${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#menuAcc"
                    >
                      <div className="accordion-body">
                        <div className="row g-3">
                          {section.items.map((it) => (
                            <div className="col-md-6" key={it.name.en}>
                              <div className="menu-item card-lift-sm p-3 rounded-4">
                                <div className="d-flex justify-content-between align-items-start gap-2">
                                  <div>
                                    <div className="fw-bold">{it.name[lang]}</div>
                                    {it.tag ? <span className="menu-tag">{it.tag}</span> : null}
                                  </div>
                                  <div className="fw-bold text-primary">{it.price}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-note mt-3">
                <i className="bi bi-info-circle me-2"></i>
                {t.drinks.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad contact-section text-white">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <h2 className="fw-bold">Skild Share</h2>
              <p className="text-white-50">{t.contact.brandDesc}</p>

              <div className="row g-3 mt-3">
                <div className="col-12">
                  <a
                    href="https://maps.app.goo.gl/FBVT4mSs6CvDHGyr9"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="contact-card">
                      <i className="bi bi-geo-alt"></i>
                      <div>
                        <div className="small text-white-50">{t.contact.location}</div>
                        <div className="fw-semibold">Shebin El Kom, Menofia, Egypt</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-12">
                  <div className="contact-card">
                    <i className="bi bi-telephone"></i>
                    <div>
                      <div className="small text-white-50">{t.contact.phone}</div>
                      <div className="fw-semibold">
                        <span className="text-warning">01153628836</span> • <span className="text-success">01153629690</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="contact-card">
                    <i className="bi bi-envelope"></i>
                    <div>
                      <div className="small text-white-50">{t.contact.email}</div>
                      <div className="fw-semibold">skildacademy@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="contact-card">
                    <i className="bi bi-clock"></i>
                    <div>
                      <div className="small text-white-50">{t.contact.hours}</div>
                      <div className="fw-semibold">{t.contact.hoursDesc}</div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="contact-highlight">
                    <div className="fw-bold">{t.contact.extendedTitle}</div>
                    <div className="small text-white-50">{t.contact.extendedSub}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="glass-form p-4 p-md-5 rounded-4 shadow-soft">
                <h4 className="fw-bold mb-1">{t.contact.formTitle}</h4>
                <p className="text-white-50 mb-4">{t.contact.formSub}</p>

                <form className="row g-3" onSubmit={onSubmit}>
                  <div className="col-md-6">
                    <label className="form-label">{t.contact.name}</label>
                    <input required name="name" className="form-control form-control-lg" placeholder={t.contact.name} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t.contact.phone2}</label>
                    <input required name="phone" className="form-control form-control-lg" placeholder="+20..." />
                  </div>
                  <div className="col-12">
                    <label className="form-label">{t.contact.message}</label>
                    <textarea required name="message" className="form-control" rows="4" placeholder="..."></textarea>
                  </div>
                  <div className="col-12 d-flex flex-column flex-sm-row gap-2">
                    <button className="btn btn-warning btn-lg btn-pill flex-fill" type="submit">
                      {t.contact.send}
                    </button>
                    <a
                      className="btn btn-outline-success btn-lg btn-pill flex-fill"
                      href="https://wa.me/201153628836"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i> {t.contact.whatsapp}
                    </a>
                  
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
