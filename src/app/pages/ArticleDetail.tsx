import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ARTICLES } from '../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();

  const article = ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | VRN Technologies`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', article.description);
      }
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Article Not Found</h1>
          <p className="text-[#64748B] mb-8">
            The requested article could not be located.
          </p>
          <Link
            to="/insights"
            className="inline-block bg-[#EAB308] text-[#0F172A] font-semibold px-6 py-3 rounded"
          >
            ← Back to All Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-0 min-h-screen bg-white text-[#1E293B]">
      {/* ─── Hero (Exact Match to Client Design) ─── */}
      <section className="relative bg-[#0F172A] text-white px-6 sm:px-10 py-16 sm:py-20 overflow-hidden">
        {/* Subtle circle watermark in top right */}
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-28 w-96 h-96 rounded-full bg-[rgba(234,179,8,0.07)] pointer-events-none"
        />

        <div className="max-w-[820px] mx-auto relative z-10">
          {/* Eyebrow with gold horizontal bar */}
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[2.5px] uppercase font-bold text-[#EAB308] mb-6">
            <span className="w-[26px] h-[3px] bg-[#EAB308] inline-block" />
            <span>{article.category}</span>
          </div>

          {/* Heading 1: Poppins uppercase with gold span */}
          <h1
            className="font-['Poppins'] font-normal uppercase text-3xl sm:text-4xl lg:text-[46px] leading-[1.05] tracking-[-1px] text-white mb-0 [&_.gold]:text-[#EAB308] [&_.gold]:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.h1Html }}
          />

          {/* Byline */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-[#CBD5E1]">
            <a
              className="text-white font-semibold no-underline border-b border-[rgba(234,179,8,0.6)] hover:text-[#EAB308] transition-colors"
              href={article.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.author.name}
            </a>
            <span className="text-[#EAB308] font-bold">·</span>
            <span className="text-[#CBD5E1]">{article.author.role}</span>
            <span className="text-[#EAB308] font-bold">·</span>
            <time dateTime={article.dateIso} className="text-[#CBD5E1]">
              {article.date}
            </time>
            <span className="text-[#EAB308] font-bold">·</span>
            <span className="text-[#CBD5E1]">{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* ─── Article Body (Exact Typography & Spacing) ─── */}
      <main>
        <style dangerouslySetInnerHTML={{ __html: `
          .client-article {
            max-width: 720px;
            margin: 0 auto;
            padding: 56px 24px 24px;
            font-family: 'Inter', system-ui, sans-serif;
            color: #1E293B;
            line-height: 1.7;
          }
          @media (min-width: 640px) {
            .client-article {
              padding: 56px 40px 24px;
            }
          }
          .client-article .lead {
            font-size: 21px;
            line-height: 1.6;
            color: #0F172A;
            font-weight: 500;
            margin-bottom: 28px;
          }
          .client-article p {
            font-size: 18px;
            margin-bottom: 22px;
            color: #1E293B;
          }
          .client-article h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 20px;
            letter-spacing: .3px;
            color: #0F172A;
            margin: 44px 0 16px;
            padding-left: 16px;
            border-left: 4px solid #EAB308;
          }
          .client-article strong {
            color: #0F172A;
            font-weight: 700;
          }
          .client-article .pull {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 26px;
            line-height: 1.35;
            color: #0F172A;
            border-left: 5px solid #EAB308;
            padding: 8px 0 8px 26px;
            margin: 38px 0;
            letter-spacing: -.3px;
          }
          .client-article .stance {
            margin: 30px 0;
          }
          .client-article .stance .item {
            padding: 22px 24px;
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            margin-bottom: 14px;
          }
          .client-article .stance .item h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: .5px;
            color: #0F172A;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .client-article .stance .item h3::before {
            content: "";
            width: 8px;
            height: 8px;
            background: #EAB308;
            flex: 0 0 auto;
          }
          .client-article .stance .item p {
            font-size: 16px;
            margin: 0;
            color: #1E293B;
          }
          .client-article .ranks {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 10px;
            margin: 30px 0 8px;
          }
          @media (max-width: 640px) {
            .client-article .ranks {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          .client-article .ranks .r {
            background: #F8FAFC;
            border: 1px solid #E2E8F0;
            padding: 16px 8px;
            text-align: center;
          }
          .client-article .ranks .y {
            font-size: 12px;
            letter-spacing: 1.5px;
            font-weight: 700;
            color: #64748B;
          }
          .client-article .ranks .n {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 22px;
            color: #0F172A;
          }
          .client-article .ranks-note {
            font-size: 14px;
            color: #64748B;
            margin-bottom: 22px;
          }
          .client-article .ranks-note a,
          .client-article a {
            color: #1D4ED8;
            text-decoration: underline;
            text-underline-offset: 2px;
          }
          .client-article a:hover {
            color: #1e40af;
          }
          .client-refs {
            max-width: 720px;
            margin: 0 auto;
            padding: 8px 24px 8px;
          }
          @media (min-width: 640px) {
            .client-refs {
              padding: 8px 40px 8px;
            }
          }
          .client-refs h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #64748B;
            margin-bottom: 10px;
          }
          .client-refs ol {
            padding-left: 20px;
            font-size: 14px;
            color: #64748B;
            line-height: 1.6;
            list-style-type: decimal;
          }
          .client-refs a {
            color: #1D4ED8;
            word-break: break-word;
          }
          .client-author {
            max-width: 720px;
            margin: 28px auto 0;
            padding: 0 24px;
          }
          @media (min-width: 640px) {
            .client-author {
              padding: 0 40px;
            }
          }
          .client-author .card {
            display: flex;
            gap: 16px;
            align-items: center;
            border-top: 1px solid #E2E8F0;
            padding-top: 24px;
          }
          .client-author .av {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            flex: 0 0 auto;
          }
          .client-author .nm {
            font-weight: 700;
            color: #0F172A;
          }
          .client-author .bio {
            font-size: 15px;
            color: #64748B;
            line-height: 1.5;
          }
          .client-author a {
            color: #1D4ED8;
          }
          .client-cta {
            background: #0F172A;
            color: #FFFFFF;
            margin-top: 48px;
            padding: 52px 24px;
            text-align: center;
          }
          @media (min-width: 640px) {
            .client-cta {
              padding: 52px 40px;
            }
          }
          .client-cta h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: -.5px;
            font-size: clamp(24px, 3vw, 34px);
            color: #FFFFFF;
            margin-bottom: 12px;
          }
          .client-cta h2 .gold {
            color: #EAB308;
            font-weight: 600;
          }
          .client-cta p {
            color: #CBD5E1;
            font-size: 16px;
            max-width: 520px;
            margin: 0 auto 26px;
          }
          .client-cta .btn-gold {
            display: inline-block;
            background: #EAB308;
            color: #0F172A;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            padding: 14px 30px;
            border-radius: 4px;
            transition: background .2s;
          }
          .client-cta .btn-gold:hover {
            background: #CA9A06;
          }
        `}} />

        {/* Content */}
        <article
          className="client-article"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Sources / References */}
        {article.refs && (
          <section
            className="client-refs"
            id="refs"
            aria-label="Sources"
            dangerouslySetInnerHTML={{ __html: article.refs }}
          />
        )}

        {/* Author Aside */}
        <aside className="client-author" aria-label="About the author">
          <div className="card">
            <img
              src={article.author.image}
              alt={article.author.name}
              className="av"
            />
            <div>
              <div className="nm">{article.author.name}</div>
              <div className="bio">
                {article.author.role}.{' '}
                <a
                  href={article.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Bottom CTA Block */}
        <section
          className="client-cta"
          dangerouslySetInnerHTML={{ __html: article.ctaHtml }}
        />
      </main>
    </div>
  );
}
