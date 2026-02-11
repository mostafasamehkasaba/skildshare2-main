import { useContext, useEffect, useMemo } from "react";
import { posts } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

const fallbackBody = {
  en: [
    "This article is part of our community insights series. We regularly share practical ideas you can apply right away.",
    "If you'd like to explore more tips, head back to the blog section to see the rest of the articles.",
  ],
  ar: [
    "هذا المقال ضمن سلسلة مقالات المجتمع، ونشارك فيها أفكار عملية يمكنك تطبيقها مباشرة.",
    "لو حابب تشوف المزيد من النصائح، ارجع لقسم المقالات للاطلاع على باقي المحتوى.",
  ],
};

export default function Article({ articleId }) {
  const { lang, t } = useContext(UiContext);
  const post = useMemo(() => posts[articleId], [articleId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const baseUrl = import.meta.env.BASE_URL || "/";
  const backHref = `${baseUrl}#blog`;

  if (!post) {
    return (
      <section className="section-pad article-section">
        <div className="container article-container">
          <a className="btn btn-soft btn-pill article-back" href={backHref}>
            <i className={`bi ${lang === "ar" ? "bi-arrow-right" : "bi-arrow-left"}`}></i>
            <span>{t.blog.back}</span>
          </a>
          <h2 className="fw-bold mt-4">{t.blog.notFound}</h2>
        </div>
      </section>
    );
  }

  const body = post.body?.[lang] || fallbackBody[lang];

  return (
    <section className="section-pad article-section">
      <div className="container article-container">
        <a className="btn btn-soft btn-pill article-back" href={backHref}>
          <i className={`bi ${lang === "ar" ? "bi-arrow-right" : "bi-arrow-left"}`}></i>
          <span>{t.blog.back}</span>
        </a>

        <div className="article-meta">
          <span className="pill-tag">{post.cat[lang]}</span>
          <span className="text-muted small d-inline-flex align-items-center gap-1">
            <i className="bi bi-calendar3"></i>
            {post.date[lang]}
          </span>
          <span className="text-muted small d-inline-flex align-items-center gap-1">
            <i className="bi bi-clock"></i>
            {post.read[lang]}
          </span>
        </div>

        <h1 className="article-title">{post.title[lang]}</h1>

        <div className="article-hero">
          <img src={post.img} alt={post.title[lang]} />
        </div>

        <div className="article-body">
          {body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
