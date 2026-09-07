'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Microscope,
  FlaskConical,
  Droplets,
  TestTube,
  Beaker,
  Activity,
  HeartPulse,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import ExamCatalog from '../components/exam-catalog';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      description:
        'Hemograma y estudios de sangre procesados en equipo especializado.',
    },
    {
      icon: TestTube,
      title: 'Parasitología',
      description:
        'Examen de heces y detección de parásitos intestinales.',
    },
    {
      icon: Beaker,
      title: 'Uroanálisis',
      description:
        'Examen general de orina y pruebas relacionadas con la función renal.',
    },
    {
      icon: Microscope,
      title: 'Bacteriología',
      description:
        'Cultivos y estudios para identificar microorganismos de importancia clínica.',
    },
    {
      icon: Activity,
      title: 'Pruebas especiales',
      description:
        'Hormonas, marcadores y estudios de apoyo al diagnóstico especializado.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Resultados Rápidos',
      description: 'Entrega de resultados en tiempo óptimo',
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Procesos certificados y controlados',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Personal altamente capacitado',
    },
  ];

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Exámenes', href: '#examenes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* ==================== HEADER ==================== */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
      }}>
        <div className="lp-header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo_v1.jpg" alt="Logo" width={44} height={44} style={{ borderRadius: '50%' }} />
            <div className="lp-header-brand-text">
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#12385F', lineHeight: 1.2 }}>Laboratorio Clínico Martínez Ruiz</div>
              <div style={{ fontSize: '11px', color: '#73A1CC', lineHeight: 1.2 }}>Salud y Confianza</div>
            </div>
          </div>

          <nav className="lp-header-nav">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ fontSize: '14px', fontWeight: 500, color: '#12385F', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2B93D1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#12385F')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* <button
            className="lp-header-cta"
            style={{
              backgroundColor: '#154B81',
              color: '#fff',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#12385F')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#154B81')}
          >
            Agendar Cita
          </button> */}

          {/* Mobile hamburger */}
          <button
            className="lp-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <X style={{ width: 24, height: 24, color: '#12385F' }} />
            ) : (
              <Menu style={{ width: 24, height: 24, color: '#12385F' }} />
            )}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileMenuOpen && (
          <div className="lp-mobile-nav">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '15px', fontWeight: 500, color: '#12385F', textDecoration: 'none', padding: '8px 0' }}
              >
                {item.label}
              </a>
            ))}
            {/* <button
              style={{
                backgroundColor: '#154B81',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%',
                marginTop: '4px',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Cita
            </button> */}
          </div>
        )}
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section className="lp-hero">
          <div className="lp-hero-media" aria-hidden="true">
            <Image
              src="/pexels-labv4.jpg"
              alt=""
              fill
              priority
              className="lp-hero-bg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
          <div className="lp-hero-inner">
            <div className="lp-hero-card">
              <h2 className="lp-hero-title">
                Resultados Precisos y Confiables
              </h2>
              <p className="lp-hero-description">
                Brindamos servicios de análisis clínicos con los más altos estándares de calidad,
                respaldados por tecnología moderna y un equipo de profesionales altamente capacitados.
              </p>
              <div className="lp-hero-buttons">
                <a
                  href="#examenes"
                  style={{
                    backgroundColor: '#154B81',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#12385F')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#154B81')}
                >
                  Ver Catálogo de Exámenes
                  <ChevronRight style={{ width: 16, height: 16 }} />
                </a>
                <a
                  href="https://wa.me/50499178861?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#25D366',
                    border: '2px solid #25D366',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#25D366'; }}
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICIOS ==================== */}
        <section id="servicios" className="lp-section">
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="lp-section-title">
                Nuestros Servicios
              </h2>
              <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                Seis áreas de laboratorio y atención complementaria en sucursal.
              </p>
            </div>
            <div className="lp-services-grid">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="lp-service-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(18,56,95,0.08)';
                    e.currentTarget.style.borderColor = '#73A1CC';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#E8EDF2';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="lp-service-icon">
                    <service.icon style={{ width: 24, height: 24, color: '#154B81' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#12385F', marginBottom: '10px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                </div>
              ))}
              <div
                className="lp-service-card lp-service-vital"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(18,56,95,0.08)';
                  e.currentTarget.style.borderColor = '#73A1CC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E8EDF2';
                }}
              >
                <div className="lp-service-icon" style={{ marginBottom: 0 }}>
                  <HeartPulse style={{ width: 24, height: 24, color: '#154B81' }} />
                </div>
                <div>
                  <div className="lp-service-vital-label">Atención en sucursal</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#12385F', marginBottom: '8px' }}>
                    Signos vitales y antropometría
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                    Toma de peso, talla y presión arterial. Servicio inmediato, sin muestra ni informe de laboratorio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExamCatalog />

        {/* ==================== BENEFICIOS ==================== */}
        <section style={{ backgroundColor: '#FFFFFF' }} className="lp-section-sm">
          <div className="lp-container">
            <div className="lp-benefits-grid">
              {benefits.map((benefit, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F2FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <benefit.icon style={{ width: 28, height: 28, color: '#154B81' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#12385F', marginBottom: '8px' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CONTACTO ==================== */}
        <section id="contacto" style={{ backgroundColor: '#12385F' }} className="lp-section">
          <div className="lp-container">
            <div className="lp-contact-grid">
              {/* Left: Info */}
              <div>
                <h2 className="lp-contact-title">
                  Contáctanos
                </h2>
                <p style={{ fontSize: '15px', color: '#93BDE0', lineHeight: 1.7, marginBottom: '36px', maxWidth: '440px' }}>
                  Estamos aquí para atenderte. Comunícate con nosotros para agendar tu cita o resolver tus dudas.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { Icon: Phone, label: 'Teléfono', value: '2793-4073' },
                    { Icon: Mail, label: 'Email', value: 'labmartinezruiz@gmail.com' },
                    { Icon: MapPin, label: 'Ubicación', value: 'El Paraíso, Honduras' },
                  ].map(({ Icon, label, value }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon style={{ width: 20, height: 20, color: '#ffffff' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: '#7BA8CC', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 500 }}>
                          {label}
                        </div>
                        <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: 500 }}>
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Horario Card */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '32px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#12385F', marginBottom: '24px' }}>
                  Horario de Atención
                </h3>
                {[
                  { day: 'Lunes - Viernes', hours: '7:00 AM - 4:00 PM', color: '#64748B' },
                  { day: 'Sábados', hours: '7:00 AM - 12:00 PM', color: '#64748B' },
                  { day: 'Domingos', hours: 'Cerrado', color: '#DF4F52' },
                ].map(({ day, hours, color }, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0',
                      borderBottom: i < 2 ? '1px solid #f0f0f0' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#12385F' }}>{day}</span>
                    <span style={{ fontSize: '14px', fontWeight: 500, color }}>{hours}</span>
                  </div>
                ))}
                <a
                  href="https://wa.me/50499178861?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20informacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#25D366',
                  border: '2px solid #25D366',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '24px',
                  transition: 'background-color 0.2s',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                  } as React.CSSProperties}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#25D366'; }}
                >
                  Escríbenos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #f0f0f0', padding: '24px 0' }}>
        <div className="lp-footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo_v1.jpg" alt="Logo" width={36} height={36} style={{ borderRadius: '50%' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#154B81' }}>Laboratorio Clínico Martínez Ruiz</div>
              <div style={{ fontSize: '11px', color: '#73A1CC' }}>Salud y Confianza</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8' }}>
            © 2024 Laboratorio Clínico Martínez Ruiz. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
