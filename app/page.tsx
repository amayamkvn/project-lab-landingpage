'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Microscope,
  FlaskConical,
  Stethoscope,
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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Microscope,
      title: 'Análisis Clínicos',
      description:
        'Contamos con tecnología de vanguardia para realizar análisis precisos y confiables.',
    },
    {
      icon: FlaskConical,
      title: 'Bioquímica',
      description:
        'Pruebas especializadas en química sanguínea y metabólica con resultados rápidos.',
    },
    {
      icon: Stethoscope,
      title: 'Hematología',
      description:
        'Estudios completos de sangre para diagnóstico y seguimiento de tratamientos.',
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

  const examCategories: Record<string, string[]> = {
    general: [
      'Hemograma Completo',
      'Química Sanguínea',
      'Perfil Lipídico',
      'Glucosa',
      'Creatinina',
      'Ácido Úrico',
      'Transaminasas (TGO/TGP)',
      'Bilirrubinas',
    ],
    hormonales: [
      'Perfil Tiroideo (TSH, T3, T4)',
      'Hormonas Sexuales',
      'Cortisol',
      'Prolactina',
      'Testosterona',
      'Progesterona',
      'Estradiol',
      'FSH / LH',
    ],
    inmunologia: [
      'Proteína C Reactiva',
      'Factor Reumatoide',
      'Antiestreptolisinas (ASO)',
      'VDRL',
      'VIH',
      'Hepatitis A, B, C',
      'Toxoplasma',
      'Rubéola',
    ],
    orina: [
      'Examen General de Orina',
      'Urocultivo',
      'Depuración de Creatinina',
      'Microalbuminuria',
      'Proteínas en Orina 24h',
      'Citología Urinaria',
    ],
  };

  const categoryTabs = [
    { key: 'general', label: 'Análisis Generales' },
    { key: 'hormonales', label: 'Perfil Hormonal' },
    { key: 'inmunologia', label: 'Inmunología' },
    { key: 'orina', label: 'Análisis de Orina' },
  ];

  const categoryTitles: Record<string, string> = {
    general: 'Análisis Clínicos Generales',
    hormonales: 'Perfil Hormonal',
    inmunologia: 'Estudios Inmunológicos',
    orina: 'Análisis de Orina',
  };

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
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#12385F', lineHeight: 1.2 }}>Laboratorio Clínico</div>
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

          <button
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
          </button>

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
            <button
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
            </button>
          </div>
        )}
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section style={{ backgroundColor: '#f8fafc' }} className="lp-section-sm">
          <div className="lp-container">
            <div className="lp-hero-grid">
              <div>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#E8F2FA',
                  color: '#154B81',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '6px 16px',
                  borderRadius: '20px',
                  marginBottom: '24px',
                }}>
                  Tecnología de Vanguardia
                </div>
                <h2 className="lp-hero-title">
                  Resultados Precisos y Confiables
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                  maxWidth: '480px',
                }}>
                  Brindamos servicios de análisis clínicos con los más altos estándares de calidad,
                  respaldados por tecnología moderna y un equipo de profesionales altamente capacitados.
                </p>
                <div className="lp-hero-buttons">
                  <button style={{
                    backgroundColor: '#154B81',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s',
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#12385F')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#154B81')}
                  >
                    Ver Catálogo de Exámenes
                    <ChevronRight style={{ width: 16, height: 16 }} />
                  </button>
                  <button style={{
                    backgroundColor: 'transparent',
                    color: '#154B81',
                    border: '2px solid #BDD4E9',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E8F2FA'; e.currentTarget.style.borderColor = '#73A1CC'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#BDD4E9'; }}
                  >
                    Contactar
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="lp-hero-image-wrapper">
                  <Image src="/logo_v1.jpg" alt="Laboratorio" fill style={{ objectFit: 'contain', padding: '24px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICIOS ==================== */}
        <section id="servicios" className="lp-section">
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 className="lp-section-title">
                Nuestros Servicios
              </h2>
              <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                Ofrecemos un amplio catálogo de exámenes médicos con tecnología de punta y resultados garantizados
              </p>
            </div>
            <div className="lp-services-grid">
              {services.map((service, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #E8EDF2',
                    borderRadius: '12px',
                    padding: '32px 28px',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
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
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#E8F2FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
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
            </div>
          </div>
        </section>

        {/* ==================== BENEFICIOS ==================== */}
        <section style={{ backgroundColor: '#f8fafc' }} className="lp-section-sm">
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

        {/* ==================== CATÁLOGO DE EXÁMENES ==================== */}
        <section id="examenes" className="lp-section">
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="lp-section-title">
                Catálogo de Exámenes
              </h2>
              <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                Amplia variedad de análisis clínicos para su diagnóstico y seguimiento médico
              </p>
            </div>

            {/* Tabs */}
            <div className="lp-exam-tabs">
              {categoryTabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  style={{
                    backgroundColor: activeCategory === key ? '#154B81' : 'transparent',
                    color: activeCategory === key ? '#ffffff' : '#154B81',
                    border: activeCategory === key ? '2px solid #154B81' : '2px solid #BDD4E9',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Exam List Card */}
            <div className="lp-exam-card">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#12385F', marginBottom: '24px', textDecoration: 'underline', textUnderlineOffset: '6px' }}>
                {categoryTitles[activeCategory]}
              </h3>
              <div className="lp-exam-list">
                {examCategories[activeCategory].map((exam, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      transition: 'background-color 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F0F7FD')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2B93D1', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#12385F' }}>{exam}</span>
                  </div>
                ))}
              </div>
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
                    { Icon: Phone, label: 'Teléfono', value: '+1 (555) 123-4567' },
                    { Icon: Mail, label: 'Email', value: 'contacto@laboratorio.com' },
                    { Icon: MapPin, label: 'Ubicación', value: 'Calle Principal #123' },
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
                  { day: 'Lunes - Viernes', hours: '7:00 AM - 6:00 PM', color: '#64748B' },
                  { day: 'Sábados', hours: '8:00 AM - 2:00 PM', color: '#64748B' },
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
                <button style={{
                  width: '100%',
                  backgroundColor: '#DF4F52',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '24px',
                  transition: 'background-color 0.2s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c93f42')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#DF4F52')}
                >
                  Agendar Cita
                </button>
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
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#154B81' }}>Laboratorio Clínico</div>
              <div style={{ fontSize: '11px', color: '#73A1CC' }}>Salud y Confianza</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#94A3B8' }}>
            © 2024 Laboratorio Clínico. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
