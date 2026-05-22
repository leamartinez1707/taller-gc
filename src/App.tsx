import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { StatCard } from './components/StatCard';
import { ProcessStep } from './components/ProcessStep';
// import { TestimonialCard } from './components/TestimonialCard';
import { ServiceCard } from './components/ServiceCard';
import { CallToAction } from './components/CallToAction';
import {
  mainServices,
  tallerStats,
  workProcess,
  contactInfo
} from './data/tallerData';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const siteUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://tallergc.vercel.app';
  const ogImage =
    '/tallergc_instagram.png';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Taller GC',
    description:
      'Servicio de mecanica automotriz en La Teja, Montevideo. Diagnostico, mantenimiento y reparacion de vehiculos.',
    telephone: contactInfo.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montevideo',
      addressCountry: 'UY',
      streetAddress: contactInfo.address
    },
    areaServed: {
      '@type': 'City',
      name: 'Montevideo'
    },
    url: siteUrl,
    sameAs: [`https://wa.me/${contactInfo.whatsapp}`, contactInfo.instagram],
    openingHours: 'Mo-Sa by appointment'
  };

  const handleContactClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phoneE164}`;
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatedElements = document.querySelectorAll<HTMLElement>('.anim-up');

    if (motionReduced) {
      animatedElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleOutsidePress = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        menuPanelRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOutsidePress);
    document.addEventListener('touchstart', handleOutsidePress);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsidePress);
      document.removeEventListener('touchstart', handleOutsidePress);
    };
  }, [isMenuOpen]);

  return (
    <main className="min-h-screen w-full bg-[var(--color-canvas)] text-[var(--color-on-dark)]">
      <Helmet>
        <title>Taller GC | Mecanica Automotriz Profesional en La Teja, Montevideo</title>
        <meta name="description" content="Mecanica automotriz profesional en La Teja. Te atiendo personalmente con diagnostico claro y reparacion confiable para que vuelvas a circular con seguridad." />
        <meta name="keywords" content="taller mecanico montevideo, mecanica automotriz La Teja, reparacion de autos, diagnostico, mantenimiento preventivo, taller GC" />
        <meta name="author" content="Taller GC" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="UY-MO" />
        <meta name="geo.placename" content="Montevideo" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Taller GC - Tu mecanico de confianza en La Teja" />
        <meta property="og:description" content="Especialistas en mantenimiento y reparacion automotriz. Presupuesto claro, trabajo garantizado y entrega responsable." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Taller GC" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Servicio mecanico automotriz en Taller GC" />
        <meta property="og:locale" content="es_UY" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taller GC | Mecanica Automotriz en Montevideo" />
        <meta name="twitter:description" content="Mecanica automotriz en La Teja. Diagnostico, reparacion y contacto inmediato por llamada o WhatsApp." />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <nav className="fixed top-0 z-50 w-full border-b border-[var(--color-hairline)] bg-black/85 px-4 py-3 backdrop-blur lg:px-6 lg:py-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 md:gap-4">
          <a href="#inicio" className="inline-flex items-center gap-2 text-base font-black tracking-[0.08em] text-[var(--color-accent)] lg:gap-3 lg:text-2xl lg:tracking-[0.12em]">
            <img
              src="/tallerg-c.jpg"
              alt="Logo Taller GC"
              className="h-8 w-8 rounded-full border border-[var(--color-hairline)] object-cover lg:h-10 lg:w-10"
              loading="eager"
            />
            <span>TALLER GC</span>
          </a>

          <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-body)] lg:flex">
            <li><a href="#servicios" className="transition hover:text-[var(--color-on-dark)]">Servicios</a></li>
            <li><a href="#proceso" className="transition hover:text-[var(--color-on-dark)]">Proceso</a></li>
            <li><a href="#confianza" className="transition hover:text-[var(--color-on-dark)]">Confianza</a></li>
            <li><a href="#instagram" className="transition hover:text-[var(--color-on-dark)]">Instagram</a></li>
          </ul>

          <a
            href={`tel:${contactInfo.phoneE164}`}
            className="border border-[var(--color-accent)] px-3 py-2 text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-[var(--color-on-dark)] transition hover:bg-[var(--color-accent)] hover:text-black lg:px-4 lg:text-xs lg:tracking-[0.12em]"
          >
            <span className="xl:hidden">Llamar</span>
            <span className="hidden xl:inline">Llamar: {contactInfo.phoneDisplay}</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center border border-[var(--color-hairline)] text-[var(--color-on-dark)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] lg:hidden"
          >
            <span className="text-lg leading-none">{isMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>

        {isMenuOpen && (
          <div ref={menuPanelRef} className="mt-3 border border-[var(--color-hairline)] bg-black/95 p-3 lg:hidden">
            <ul className="flex flex-col gap-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-body)]">
              <li>
                <a href="#servicios" onClick={handleMenuClose} className="block px-3 py-2 transition hover:bg-[var(--color-surface-card)] hover:text-[var(--color-on-dark)]">Servicios</a>
              </li>
              <li>
                <a href="#proceso" onClick={handleMenuClose} className="block px-3 py-2 transition hover:bg-[var(--color-surface-card)] hover:text-[var(--color-on-dark)]">Proceso</a>
              </li>
              <li>
                <a href="#confianza" onClick={handleMenuClose} className="block px-3 py-2 transition hover:bg-[var(--color-surface-card)] hover:text-[var(--color-on-dark)]">Confianza</a>
              </li>
              <li>
                <a href="#instagram" onClick={handleMenuClose} className="block px-3 py-2 transition hover:bg-[var(--color-surface-card)] hover:text-[var(--color-on-dark)]">Instagram</a>
              </li>
              <li>
                <a href="#contacto" onClick={handleMenuClose} className="block px-3 py-2 transition hover:bg-[var(--color-surface-card)] hover:text-[var(--color-on-dark)]">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <section id="inicio" className="relative w-full overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.1),transparent_30%),linear-gradient(180deg,#05070b_0%,#07090d_40%,#05070b_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="anim-up">
            <p className="mb-5 inline-block border border-[var(--color-accent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Mecanica automotriz en La Teja
            </p>

            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.03] text-[var(--color-on-dark)] sm:text-5xl lg:text-7xl">
              Tu auto falla.
              <br />
              <span className="text-[var(--color-accent)]"> Taller GC lo resuelve.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-on-dark)] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] anim-up anim-delay-1">
              Taller independiente con atencion directa: te atiendo personalmente de principio a fin. <br />
              Diagnostico tecnico serio, presupuesto claro y seguimiento real de tu auto.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 anim-up anim-delay-2">
              <button
                onClick={handleContactClick}
                className="bg-[var(--color-accent)] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[var(--color-accent-soft)]"
              >
                Solicitar diagnostico
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="border border-white px-8 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Hablar por WhatsApp
              </button>
            </div>
          </div>

          <div className="anim-up anim-delay-2">
            <div className="overflow-hidden border border-[var(--color-hairline)] bg-[var(--color-surface-card)] shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[9/12]">
                <img
                  src="/banner_hero.webp"
                  alt="Trabajos y diagnóstico automotriz de Taller GC"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/55 p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Trabajos reales</p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-body-strong)]">
                    Diagnostico, reparacion y entrega en un solo lugar. Mirá el tipo de trabajo que sale del taller.
                  </p>
                  <span><a target="_blank" rel="noopener noreferrer" href={contactInfo.instagram} className="text-[var(--color-accent)] underline">Ver trabajos (Instagram)</a></span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="border border-[var(--color-hairline)] bg-black px-4 py-3 text-sm text-[var(--color-body)]">
                <span className="block text-base font-black uppercase text-[var(--color-on-dark)]">Diagnóstico</span>
                Claro y directo.
              </div>
              <div className="border border-[var(--color-hairline)] bg-black px-4 py-3 text-sm text-[var(--color-body)]">
                <span className="block text-base font-black uppercase text-[var(--color-on-dark)]">Reparación</span>
                Con criterio técnico.
              </div>
              <div className="border border-[var(--color-hairline)] bg-black px-4 py-3 text-sm text-[var(--color-body)]">
                <span className="block text-base font-black uppercase text-[var(--color-on-dark)]">Entrega</span>
                Probado y listo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-[var(--color-hairline)] bg-[var(--color-surface-soft)] px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
          <article className="border border-[var(--color-hairline)] bg-black p-7 anim-up">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">Problema</p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase">Tu auto pierde rendimiento o seguridad</h2>
          </article>
          <article className="border border-[var(--color-hairline)] bg-black p-7 anim-up anim-delay-1">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">Solucion</p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase">Encontramos la causa y la corregimos</h2>
          </article>
          <article className="border border-[var(--color-hairline)] bg-black p-7 anim-up anim-delay-2">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">Resultado</p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase">Volves a manejar con confianza</h2>
          </article>
        </div>
      </section>

      <section id="servicios" className="w-full px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[var(--color-accent)]">Servicios principales</p>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight sm:text-5xl">
              Mantenimiento y reparacion para que tu vehiculo rinda como debe
            </h2>
            <p className="max-w-3xl text-lg text-[var(--color-body)]">
              Atiendo desde fallas puntuales hasta mantenimientos programados, con foco en seguridad, rendimiento y durabilidad.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <div key={index} className="anim-up" style={{ animationDelay: `${index * 90}ms` }}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  isHighlighted={service.isHighlighted}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="w-full bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Como trabajo</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Proceso claro en 4 pasos</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-body)]">
              Sin complicaciones: reviso el auto, te explico el trabajo y te lo entrego probado.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step, index) => (
              <div key={index} className="anim-up" style={{ animationDelay: `${index * 90}ms` }}>
                <ProcessStep
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="confianza" className="w-full px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Confianza y respaldo</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Motivos para confiar
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
              Mi compromiso es simple: resolver bien, cobrar justo y responder con claridad en cada etapa del trabajo.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {tallerStats.map((stat, index) => (
                <div key={index} className="anim-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <StatCard
                    number={stat.number}
                    label={stat.label}
                    icon={stat.icon}
                    suffix={stat.suffix}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 anim-up">
              <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[var(--color-accent)]">01</div>
              <h3 className="mb-3 text-xl font-black uppercase text-[var(--color-on-dark)]">Atencion directa</h3>
              <p className="leading-relaxed text-[var(--color-body)]">Hablas con la misma persona que diagnostica y repara tu vehiculo.</p>
            </article>
            <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 anim-up anim-delay-1">
              <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[var(--color-accent)]">02</div>
              <h3 className="mb-3 text-xl font-black uppercase text-[var(--color-on-dark)]">Presupuesto claro</h3>
              <p className="leading-relaxed text-[var(--color-body)]">Te explico trabajo, repuestos y tiempos antes de empezar para que decidas con informacion completa.</p>
            </article>
            <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 anim-up anim-delay-1">
              <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[var(--color-accent)]">03</div>
              <h3 className="mb-3 text-xl font-black uppercase text-[var(--color-on-dark)]">Trayectoria tecnica</h3>
              <p className="leading-relaxed text-[var(--color-body)]">Experiencia previa en talleres de referencia aplicada a un servicio cercano y profesional.</p>
            </article>
            <article className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-6 anim-up anim-delay-2">
              <div className="mb-4 inline-block border border-[var(--color-accent)] px-3 py-1 text-xs font-bold tracking-[0.12em] text-[var(--color-accent)]">04</div>
              <h3 className="mb-3 text-xl font-black uppercase text-[var(--color-on-dark)]">Seguimiento real</h3>
              <p className="leading-relaxed text-[var(--color-body)]">Te explico lo realizado y recomendaciones concretas para mantener el auto en condiciones.</p>
            </article>
          </div>
        </div>
      </section>

      <CallToAction
        title="AGENDA TU DIAGNOSTICO Y RESOLVE LA FALLA HOY"
        subtitle="Decinos que le pasa a tu auto y te respondemos con una propuesta clara de trabajo."
        primaryButtonText="Pedir presupuesto"
        primaryButtonAction={handleContactClick}
        secondaryButtonText="Llamar ahora"
        secondaryButtonAction={handleCallClick}
        backgroundImage="/tallergc_instagram.png"
      />

      <section id="instagram" className="w-full bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="anim-up">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Trabajos reales</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Segui el taller en Instagram
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
              Publico mantenimientos, diagnosticos y reparaciones para que veas como trabajo dia a dia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-accent)] px-7 py-3 text-sm font-black uppercase tracking-[0.11em] text-black transition hover:bg-[var(--color-accent-soft)]"
              >
                Seguir @tallerg.c
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-hairline)] px-7 py-3 text-sm font-black uppercase tracking-[0.11em] text-[var(--color-on-dark)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Ver trabajos
              </a>
            </div>
          </div>

          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="anim-up anim-delay-1 block overflow-hidden border border-[var(--color-hairline)] bg-black"
            aria-label="Abrir Instagram de Taller GC"
          >
            <img
              src="/tallergc_instagram.png"
              alt="Perfil de Instagram de Taller GC con trabajos recientes"
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* <section id="testimonios" className="w-full bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Clientes reales</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">La confianza se gana con resultados</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-body)]">
              Estas opiniones reflejan lo que mas cuidamos: claridad, cumplimiento y reparaciones bien hechas.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="anim-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="contacto" className="w-full px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">Contacto directo</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Contanos tu caso y te ayudamos</h2>
            <p className="mt-4 text-lg text-[var(--color-body)]">
              Respuesta rapida por WhatsApp con orientacion inicial y presupuesto.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-8">
              <h3 className="text-2xl font-black uppercase">Informacion de contacto</h3>

              <div className="space-y-6">
                <div className="mt-8 flex items-center gap-4 border-b border-[var(--color-hairline)] pb-5">
                  <div className="border border-[var(--color-accent)] px-3 py-2 text-[var(--color-accent)]">
                    UB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-body)]">Direccion</h4>
                    <p className="text-lg text-[var(--color-on-dark)]">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-[var(--color-hairline)] pb-5">
                  <div className="border border-[var(--color-accent)] px-3 py-2 text-[var(--color-accent)]">
                    PH
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-body)]">Telefono</h4>
                    <a href={`tel:${contactInfo.phoneE164}`} className="text-lg text-[var(--color-on-dark)] transition hover:text-[var(--color-accent)]">
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-[var(--color-hairline)] pb-5">
                  <div className="border border-[var(--color-accent)] px-3 py-2 text-[var(--color-accent)]">
                    WA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-body)]">WhatsApp</h4>
                    <a href={`https://wa.me/${contactInfo.whatsapp}`} className="text-lg text-[var(--color-on-dark)] transition hover:text-[var(--color-accent)]">
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="border border-[var(--color-accent)] px-3 py-2 text-[var(--color-accent)]">
                    HS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-body)]">Atencion personalizada</h4>
                    <p className="text-[var(--color-body-strong)]">Horario a convenir segun tu necesidad.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[var(--color-hairline)] bg-black p-8">
              <h3 className="text-2xl font-black uppercase">Contacto inmediato</h3>
              <p className="mt-4 text-[var(--color-body)]">
                Si precisas resolverlo ya, contactame directo por llamada o WhatsApp. Sin formularios y sin esperas.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                <button
                  onClick={handleCallClick}
                  className="w-full bg-[var(--color-accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[var(--color-accent-soft)]"
                >
                  Llamar ahora
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full border border-[var(--color-accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-on-dark)] transition hover:bg-[var(--color-accent)] hover:text-black"
                >
                  WhatsApp rapido
                </button>

                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-[var(--color-hairline)] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-[var(--color-on-dark)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Ver Instagram
                </a>
              </div>

              <div className="mt-8 border-t border-[var(--color-hairline)] pt-5 text-sm text-[var(--color-body)]">
                <p>Telefono: {contactInfo.phoneDisplay}</p>
                <p>Atencion personalizada</p>
                <p>Horario a convenir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-[var(--color-hairline)] bg-black px-6 py-16 text-[var(--color-body)]">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 text-2xl font-black tracking-[0.15em] text-[var(--color-accent)]">TALLER GC</div>
              <p className="leading-relaxed">
                Tu mecanico de confianza en La Teja, Montevideo. Especialistas en mantenimiento y reparacion automotriz.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark)]">Servicios principales</h4>
              <ul className="space-y-2">
                <li>Revision de motor</li>
                <li>Sistema electrico</li>
                <li>Frenos y suspension</li>
                <li>Transmision</li>
                <li>Sistema de refrigeracion</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark)]">Contacto</h4>
              <div className="space-y-2">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.phoneDisplay}</p>
                <p>Atencion personalizada</p>
                <p>Horario a convenir</p>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--color-accent)] transition hover:text-[var(--color-accent-soft)]"
                >
                  @tallerg.c
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--color-hairline)] pt-8 text-center text-sm text-[var(--color-muted)]">
            <p>&copy; 2026 Taller GC. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs text-[var(--color-muted)]">
              Página desarrollada por{' '}
              <a
                href="https://www.leandromartinez.com.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-body)] underline transition hover:text-[var(--color-accent)]"
              >
                leandromartinez.com.uy
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacto rapido por WhatsApp"
        className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition hover:brightness-105 md:h-auto md:w-auto md:gap-2 md:rounded-md md:px-5 md:py-3"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M19.11 17.29c-.28-.14-1.63-.8-1.88-.88-.25-.1-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.6.07-.27-.14-1.17-.43-2.22-1.38-.82-.73-1.37-1.64-1.53-1.91-.16-.27-.02-.42.12-.56.13-.12.27-.32.4-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.82.13.18 1.92 2.93 4.64 4.1.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.32.23-.66.23-1.22.16-1.34-.06-.12-.24-.19-.52-.33z" />
          <path d="M16.02 3.2C8.96 3.2 3.22 8.94 3.22 16c0 2.25.58 4.46 1.7 6.41L3.1 28.8l6.57-1.73A12.74 12.74 0 0 0 16.02 28.8c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.02 3.2zm0 23.3c-2.02 0-3.99-.55-5.7-1.6l-.41-.24-3.9 1.03 1.04-3.8-.27-.42A10.45 10.45 0 0 1 5.57 16c0-5.76 4.69-10.45 10.45-10.45S26.47 10.24 26.47 16 21.78 26.5 16.02 26.5z" />
        </svg>
        <span className="hidden text-sm font-black uppercase tracking-[0.1em] md:inline">Escribime</span>
      </a>
    </main>
  );
}
