'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import catalog from '../data/catalogo-examenes.json';

type CatalogExam = { name: string; category: string };

const CATEGORIES = catalog.categories
  .slice()
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((c) => c.name);

const EXAMS: CatalogExam[] = catalog.exams;

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export default function ExamCatalog() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const exam of EXAMS) {
      map.set(exam.category, (map.get(exam.category) || 0) + 1);
    }
    return map;
  }, []);

  const searching = query.trim().length > 0;

  const grouped = useMemo(() => {
    const q = normalize(query);
    const source = searching
      ? EXAMS.filter((exam) => normalize(exam.name).includes(q))
      : EXAMS.filter((exam) => exam.category === activeCategory);

    const groups: { category: string; exams: CatalogExam[] }[] = [];
    const byCat = new Map<string, CatalogExam[]>();
    for (const exam of source) {
      if (!byCat.has(exam.category)) byCat.set(exam.category, []);
      byCat.get(exam.category)!.push(exam);
    }
    const order = searching ? CATEGORIES : [activeCategory];
    for (const category of order) {
      const exams = byCat.get(category);
      if (exams?.length) groups.push({ category, exams });
    }
    return groups;
  }, [query, activeCategory, searching]);

  const totalVisible = grouped.reduce((sum, g) => sum + g.exams.length, 0);

  return (
    <section id="examenes" className="lp-section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="lp-container">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 className="lp-section-title">Catálogo de Exámenes</h2>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            {EXAMS.length} pruebas organizadas por área. Busca por nombre o filtra por categoría.
          </p>
        </div>

        <div className="lp-exam-search">
          <Search style={{ width: 18, height: 18, color: '#73A1CC', flexShrink: 0 }} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar examen (ej. glucosa, TSH, cultivo…)"
            aria-label="Buscar examen"
          />
        </div>

        <div className="lp-exam-tabs" role="tablist" aria-label="Categorías de exámenes">
          {CATEGORIES.map((name) => {
            const selected = !searching && activeCategory === name;
            return (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setActiveCategory(name);
                  setQuery('');
                }}
                style={{
                  backgroundColor: selected ? '#154B81' : 'transparent',
                  color: selected ? '#ffffff' : '#154B81',
                  border: selected ? '2px solid #154B81' : '2px solid #BDD4E9',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {name}
                <span style={{ marginLeft: 8, opacity: 0.75, fontWeight: 500 }}>
                  {counts.get(name) || 0}
                </span>
              </button>
            );
          })}
        </div>

        <div className="lp-exam-card">
          {totalVisible === 0 ? (
            <p style={{ textAlign: 'center', color: '#64748B', margin: 0, fontSize: 14 }}>
              No encontramos un examen con “{query}”. Prueba con otro término.
            </p>
          ) : (
            grouped.map((group) => (
              <div key={group.category} className="lp-exam-group">
                <div className="lp-exam-group-head">
                  <h3>{searching ? group.category : activeCategory}</h3>
                  <span>
                    {group.exams.length} {group.exams.length === 1 ? 'examen' : 'exámenes'}
                  </span>
                </div>
                <ul className="lp-exam-list">
                  {group.exams.map((exam) => (
                    <li key={`${group.category}-${exam.name}`}>{exam.name}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
