'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FlaskConical,
  Droplets,
  TestTube,
  Beaker,
  Microscope,
  Activity,
  HeartPulse,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  CircleCheck,
  BadgeCheck,
  CalendarClock,
  Send,
  LayoutGrid,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/whatsapp-icon';
// import ExamCatalog from '../components/exam-catalog';

const WHATSAPP_URL =
  'https://wa.me/50499178861?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios';
const WHATSAPP_INFO_URL =
  'https://wa.me/50499178861?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20informacion';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Beneficios', href: '#beneficios', id: 'beneficios' },
  { label: 'Horarios', href: '#horarios', id: 'horarios' },
] as const;

function isClinicOpen(date = new Date()): boolean {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const honduras = new Date(utc - 3600000 * 6);
  const day = honduras.getDay();
  const totalMinutes = honduras.getHours() * 60 + honduras.getMinutes();

  if (day >= 1 && day <= 5) {
    return totalMinutes >= 420 && totalMinutes < 960;
  }
  if (day === 6) {
    return totalMinutes >= 420 && totalMinutes < 720;
  }
  return false;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clinicOpen, setClinicOpen] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    setClinicOpen(isClinicOpen());
    const timer = window.setInterval(() => setClinicOpen(isClinicOpen()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (NAV_LINKS.some((link) => link.id === hash)) {
      setActiveSection(hash);
    }

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => Boolean(section),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FlaskConical,
      title: 'Química Sanguínea',
      description:
        'Glucosa, lípidos, enzimas, electrolitos y demás analitos para el control metabólico.',
    },
    {
      icon: Droplets,
      title: 'Hematología',
      description: 'Hemograma y estudios de sangre procesados en equipo especializado.',
    },
    {
      icon: TestTube,
      title: 'Parasitología',
      description: 'Examen de heces y detección de parásitos intestinales.',
    },
    {
      icon: Beaker,
      title: 'Uroanálisis',
      description: 'Examen general de orina y pruebas relacionadas con la función renal.',
    },
    {
      icon: Microscope,
      title: 'Bacteriología',
      description: 'Cultivos y estudios para identificar microorganismos de importancia clínica.',
    },
    {
      icon: Activity,
      title: 'Pruebas especiales',
      description: 'Hormonas, marcadores y estudios de apoyo al diagnóstico especializado.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Resultados Rápidos',
      description:
        'Entrega de resultados en tiempo óptimo para decisiones clínicas oportunas y sin demoras.',
      footerIcon: Zap,
      footer: 'Prioridad de entrega',
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description:
        'Procesos certificados y controlados rigurosamente bajo directrices de aseguramiento de calidad.',
      footerIcon: CircleCheck,
      footer: 'Protocolos validados',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description:
        'Personal altamente capacitado, microbiólogos y técnicos dedicados a un trato empático y riguroso.',
      footerIcon: BadgeCheck,
      footer: 'Personal colegiado',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Recepción', subtitle: 'Sin largas esperas' },
    { num: '02', title: 'Toma de Muestra', subtitle: 'Técnica no traumática' },
    { num: '03', title: 'Procesamiento', subtitle: 'Equipo automatizado' },
    { num: '04', title: 'Entrega Digital', subtitle: 'Vía Email o impreso' },
  ];

  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-header-inner">
          <a href="#inicio" className="lp-brand" onClick={() => setActiveSection('inicio')}>
            <Image
              src="/logo_v1.jpg"
              alt="Laboratorio Clínico Martínez Ruiz"
              width={40}
              height={40}
              className="lp-brand-logo"
            />
            <span className="lp-brand-text">
              <span className="lp-brand-name">Laboratorio Clínico Martínez Ruiz</span>
              <span className="lp-brand-tagline">Salud y Confianza</span>
            </span>
          </a>

          <nav className="lp-header-nav" aria-label="Principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.id ? 'lp-nav-link is-active' : 'lp-nav-link'}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="lp-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lp-mobile-nav">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.id ? 'is-active' : undefined}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="lp-hero">
          <div className="lp-hero-glow lp-hero-glow-a" aria-hidden="true" />
          <div className="lp-hero-glow lp-hero-glow-b" aria-hidden="true" />
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <div className="lp-pill">
                <span className="lp-pill-dot" />
                Diagnóstico clínico avanzado
              </div>
              <h1 className="lp-hero-title">
                Resultados <span>Precisos</span> y Confiables
              </h1>
              <p className="lp-hero-description">
                Brindamos servicios de análisis clínicos con los más altos estándares de calidad,
                respaldados por tecnología moderna y un equipo de profesionales altamente
                capacitados.
              </p>
              <div className="lp-hero-actions">
                <a
                  className="lp-btn lp-btn-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  Contáctanos
                </a>
                <a className="lp-btn lp-btn-ghost" href="#servicios">
                  <LayoutGrid size={18} />
                  Ver catálogo de servicios
                </a>
              </div>
            </div>

            <div className="lp-hero-visual">
              <div className="lp-hero-photo">
                <Image
                  src="/hero-lab.jpg"
                  alt="Profesional de laboratorio observando una muestra en el microscopio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
              <div className="lp-hero-badge">
                <div>
                  <strong>Control y Calidad Médica</strong>
                  <p>El Paraíso, Honduras</p>
                </div>
                <span className="lp-hero-badge-icon" aria-hidden="true">
                  <Shield size={22} />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="lp-section">
          <div className="lp-container">
            <div className="lp-section-intro">
              <h2>Nuestros Servicios</h2>
              <p>Seis áreas de laboratorio y atención complementaria en sucursal.</p>
            </div>

            <div className="lp-services-grid">
              {services.map((service) => (
                <article key={service.title} className="lp-service-card">
                  <div className="lp-service-icon">
                    <service.icon size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <article className="lp-vital-banner">
              <div className="lp-vital-icon">
                <HeartPulse size={30} />
              </div>
              <div>
                <div className="lp-vital-meta">
                  <span className="lp-chip">Atención en sucursal</span>
                  <span className="lp-live">
                    <span className="lp-live-dot" />
                    Sin cita previa
                  </span>
                </div>
                <h3>Signos vitales y antropometría</h3>
                <p>
                  Toma de peso, talla y presión arterial. Servicio inmediato, sin muestra ni
                  informe de laboratorio.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* <ExamCatalog /> */}

        <section id="beneficios" className="lp-section lp-benefits">
          <div className="lp-container">
            <div className="lp-section-intro">
              <span className="lp-kicker">¿Por qué elegirnos?</span>
              <h2>Nuestros beneficios</h2>
            </div>
            <div className="lp-benefits-grid">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="lp-benefit-card">
                  <div className="lp-benefit-icon">
                    <benefit.icon size={32} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <div className="lp-benefit-footer">
                    <benefit.footerIcon size={16} />
                    {benefit.footer}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-section-tight">
          <div className="lp-container">
            <div className="lp-process">
              {processSteps.map((step) => (
                <div key={step.num} className="lp-process-item">
                  <span>{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="horarios" className="lp-contact">
          <div className="lp-container lp-contact-grid">
            <div>
              <div className="lp-pill lp-pill-on-dark">
                Atención y citas
              </div>
              <h2>Contáctanos</h2>
              <p>
                Estamos aquí para atenderte. Comunícate con nosotros para agendar tu cita o
                resolver tus dudas.
              </p>
              <div className="lp-contact-list">
                <div className="lp-contact-item">
                  <span className="lp-contact-icon">
                    <Phone size={22} />
                  </span>
                  <div>
                    <span className="lp-contact-label">Teléfonos</span>
                    <div className="lp-contact-value">
                      <a href="tel:+50427934073">+504 2793-4073</a>
                      <span>/</span>
                      <a href="tel:+50499178861">+504 9917-8861</a>
                    </div>
                  </div>
                </div>
                <div className="lp-contact-item">
                  <span className="lp-contact-icon">
                    <Mail size={22} />
                  </span>
                  <div>
                    <span className="lp-contact-label">Email</span>
                    <a className="lp-contact-value" href="mailto:labmartinezruiz@gmail.com">
                      labmartinezruiz@gmail.com
                    </a>
                  </div>
                </div>
                <div className="lp-contact-item">
                  <span className="lp-contact-icon">
                    <MapPin size={22} />
                  </span>
                  <div>
                    <span className="lp-contact-label">Ubicación</span>
                    <span className="lp-contact-value">El Paraíso, Honduras</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lp-hours-card">
              <div className="lp-hours-head">
                <div className="lp-hours-title">
                  <CalendarClock size={26} />
                  <h3>Horario de Atención</h3>
                </div>
                {clinicOpen === null ? null : clinicOpen ? (
                  <span className="lp-status is-open">
                    <span /> Abierto ahora
                  </span>
                ) : (
                  <span className="lp-status is-closed">
                    <span /> Fuera de servicio
                  </span>
                )}
              </div>
              <div className="lp-hours-row">
                <span>Lunes - Viernes</span>
                <strong>7:00 AM - 4:00 PM</strong>
              </div>
              <div className="lp-hours-row">
                <span>Sábados</span>
                <strong>7:00 AM - 12:00 PM</strong>
              </div>
              <div className="lp-hours-row">
                <span>Domingos</span>
                <em>Cerrado</em>
              </div>
              <div className="lp-hours-cta">
                <div>
                  <strong>¿Tienes consultas urgentes?</strong>
                  <p>Respondemos a la brevedad</p>
                </div>
                <a
                  className="lp-btn lp-btn-whatsapp"
                  href={WHATSAPP_INFO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={18} />
                  Escríbenos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <div className="lp-brand">
            <Image
              src="/logo_v1.jpg"
              alt="Laboratorio Clínico Martínez Ruiz"
              width={36}
              height={36}
              className="lp-brand-logo"
            />
            <span className="lp-brand-text">
              <span className="lp-brand-name">Laboratorio Clínico Martínez Ruiz</span>
              <span className="lp-brand-tagline lp-brand-tagline-muted">
                Salud, confianza y excelencia diagnóstica
              </span>
            </span>
          </div>
          <p>© 2026 Laboratorio Clínico Martínez Ruiz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
