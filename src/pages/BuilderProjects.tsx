import React, { useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

type Project = {
  name: string;
  slug: string;
  summary: string;
  suggestion: string;
  repository: string;
  demo: string;
  technologies: string[];
};

const initialProjects: Project[] = [
  {
    name: 'TaskFlow API',
    slug: 'taskflow-api',
    summary: 'REST API for task management with auth and team boards.',
    suggestion: 'TaskFlow API lets small teams create, assign, and track tasks on shared boards. It is built with Node.js and Express, stores data in PostgreSQL, and secures every request with JWT authentication.',
    repository: 'github.com/mayachen-dev/taskflow-api',
    demo: 'taskflow',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
  },
  {
    name: 'Weather Lens',
    slug: 'weather-lens',
    summary: 'A clear daily forecast with saved locations and weather alerts.',
    suggestion: 'Weather Lens turns local forecasts into a simple daily view, with saved places and timely alerts to help people plan ahead.',
    repository: 'github.com/mayachen-dev/weather-lens',
    demo: '',
    technologies: ['React', 'TypeScript', 'Weather API'],
  },
  {
    name: 'ShelfShare',
    slug: 'shelfshare',
    summary: 'A community app for sharing books with people nearby.',
    suggestion: 'ShelfShare helps neighbors discover, lend, and trade books through a small community library.',
    repository: 'github.com/mayachen-dev/shelfshare',
    demo: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'PyBudget',
    slug: 'pybudget',
    summary: 'A lightweight budget tracker for monthly expenses.',
    suggestion: 'PyBudget makes it easy to record monthly spending, set simple limits, and see where your money goes.',
    repository: 'github.com/mayachen-dev/pybudget',
    demo: '',
    technologies: ['Python', 'Flask', 'SQLite'],
  },
];

const steps = ['Personal info', 'Projects', 'Skills', 'Contact'];

function BuilderHeader() {
  return (
    <header className="border-b-4 border-[var(--color-blue-secondary)] bg-[var(--color-bg-card)] px-5 py-3 sm:px-10">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-sm font-bold text-[var(--color-text-main)]" aria-label="PortfolioGenie home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-violet-primary)] to-[var(--color-blue-secondary)] text-lg text-white">✦</span>
          PortfolioGenie
        </a>
        <button type="button" className="text-xs font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-text-main)]">
          <span aria-hidden="true">×</span> <span className="hidden sm:inline">Exit builder</span>
        </button>
      </div>

      <nav aria-label="Portfolio setup steps" className="mx-auto mt-3 max-w-xl">
        <ol className="flex items-center justify-between">
          {steps.map((step, index) => {
            const complete = index < 2;
            const active = index === 1;
            return (
              <li key={step} className="flex min-w-0 flex-1 items-center last:flex-none">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold ${active ? 'bg-[var(--color-slate-900-darkest)] text-white' : complete ? 'bg-[var(--color-violet-primary)] text-white' : 'bg-[var(--color-slate-50-bg)] text-[var(--color-slate-500-light)]'}`}>
                    {index === 0 ? '✓' : index + 1}
                  </span>
                  <span className={`hidden text-[11px] sm:inline ${active ? 'font-semibold text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}`}>{step}</span>
                </div>
                {index < steps.length - 1 && <span aria-hidden="true" className={`mx-2 h-px min-w-3 flex-1 ${index === 0 ? 'bg-[var(--color-violet-primary)]' : 'bg-[var(--color-border)]'}`} />}
              </li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
}

function ProjectSuggestion({ text, onAccept }: { text: string; onAccept: (value: string) => void }) {
  const [suggestion, setSuggestion] = useState(text);
  const [editing, setEditing] = useState(false);

  return (
    <section className="rounded-2xl border border-dashed border-[var(--color-violet-primary)] bg-[var(--color-violet-primary)]/[0.05] p-3 sm:p-4" aria-label="Improved project description">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-xs font-semibold text-[var(--color-violet-hover)]"><span aria-hidden="true">✦</span> Improved description</h3>
        <span className="text-[9px] font-medium text-[var(--color-violet-primary)]">AI draft · not approved yet</span>
      </div>
      {editing ? (
        <textarea
          value={suggestion}
          onChange={(event) => setSuggestion(event.target.value)}
          rows={3}
          className="mt-3 w-full resize-y rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-[11px] leading-relaxed text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)]"
          aria-label="Edit improved description"
        />
      ) : (
        <p className="mt-3 text-[11px] leading-relaxed text-[var(--color-text-muted)]">{suggestion}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <Button type="button" variant="primary" onClick={() => onAccept(suggestion)} className="px-3 py-1.5 text-[10px]">✓ Accept</Button>
        <Button type="button" variant="outline" onClick={() => setEditing(!editing)} className="px-3 py-1.5 text-[10px]">✎ {editing ? 'Done' : 'Edit'}</Button>
        <Button type="button" variant="outline" onClick={() => setSuggestion(text)} className="px-3 py-1.5 text-[10px]">↻ Regenerate</Button>
      </div>
      <button type="button" className="mt-2 text-[10px] font-medium text-[var(--color-violet-primary)] underline-offset-2 hover:underline">Compare side by side</button>
    </section>
  );
}

function isValidLink(value: string) {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(?:\/[^\s]*)?$/i.test(value.trim());
}

export default function BuilderProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newTechnology, setNewTechnology] = useState('');
  const [featured, setFeatured] = useState(true);
  const project = projects[selectedIndex];
  const validDemo = !project.demo || isValidLink(project.demo);

  function updateProject<K extends keyof Project>(key: K, value: Project[K]) {
    setProjects((current) => current.map((item, index) => index === selectedIndex ? { ...item, [key]: value } : item));
  }

  function addTechnology(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = newTechnology.trim();
    if (!value || project.technologies.some((technology) => technology.toLowerCase() === value.toLowerCase())) return;
    updateProject('technologies', [...project.technologies, value]);
    setNewTechnology('');
  }

  function removeTechnology(value: string) {
    updateProject('technologies', project.technologies.filter((technology) => technology !== value));
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-app)] text-[var(--color-text-main)]">
      <BuilderHeader />

      <main className="flex flex-1 flex-col items-center px-4 py-6 sm:px-8 sm:py-7">
        <div className="w-full max-w-[1140px]">
          <div className="mb-5">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Customize your projects</h1>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Edit the details visitors will see for each project.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-6">
            <nav aria-label="Your projects" className="flex flex-col gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-current={selectedIndex === index ? 'true' : undefined}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs transition ${selectedIndex === index ? 'border-2 border-[var(--color-violet-primary)] bg-[var(--color-bg-card)] text-[var(--color-violet-hover)]' : 'border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-main)] hover:border-[var(--color-violet-primary)]'}`}
                >
                  <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${selectedIndex === index ? 'bg-[var(--color-slate-900-darkest)] text-white' : 'bg-[var(--color-slate-900-darkest)] text-white'}`}>{index + 1}</span>
                  <span className="truncate">{item.name}</span>
                </button>
              ))}
            </nav>

            <Card className="space-y-4 p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-violet-primary)] to-[var(--color-blue-secondary)]">
                    <span className="h-4 w-7 rounded bg-[var(--color-white-pure)]/90 shadow-[0_5px_0_var(--color-white-pure)]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold">{project.slug}</p>
                    <Badge variant="primary">● TypeScript</Badge>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={featured}
                  onClick={() => setFeatured(!featured)}
                  className="flex items-center gap-2 text-[10px] font-medium text-[var(--color-text-main)]"
                >
                  <span className="text-[var(--color-violet-primary)]" aria-hidden="true">☆</span> Featured
                  <span className={`relative h-5 w-9 rounded-full transition-colors ${featured ? 'bg-[var(--color-violet-primary)]' : 'bg-[var(--color-slate-500-light)]'}`}>
                    <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-[var(--color-white-pure)] transition-all ${featured ? 'left-[18px]' : 'left-0.5'}`} />
                  </span>
                </button>
              </div>

              <Input label="Project name" value={project.name} onChange={(event) => updateProject('name', event.target.value)} />

              <div>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label htmlFor="project-description" className="text-sm font-medium text-[var(--color-text-main)]">Description</label>
                  <Badge variant="primary">Written by you</Badge>
                </div>
                <textarea
                  id="project-description"
                  value={project.summary}
                  onChange={(event) => updateProject('summary', event.target.value)}
                  rows={2}
                  className="w-full resize-y rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 text-xs text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)]"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="primary" className="px-4 py-2 text-[10px]">✦ Improve Description with AI</Button>
              </div>

              <ProjectSuggestion text={project.suggestion} onAccept={(value) => updateProject('summary', value)} />

              <div className="grid gap-3 sm:grid-cols-2">
                <Input label="GitHub repository" value={project.repository} onChange={(event) => updateProject('repository', event.target.value)} />
                <div>
                  <Input
                    label="Live demo link (optional)"
                    value={project.demo}
                    onChange={(event) => updateProject('demo', event.target.value)}
                    aria-invalid={!validDemo}
                    className={`w-full rounded-lg border bg-[var(--color-bg-card)] px-3 py-2 text-xs text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)] ${validDemo ? 'border-[var(--color-border)]' : 'border-[var(--color-rose-error)]'}`}
                  />
                  {!validDemo && <p className="mt-1 flex items-center gap-1 text-[10px] text-[var(--color-rose-error)]"><span aria-hidden="true">ⓘ</span> Enter a valid link, like myapp.vercel.app.</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-main)]">Technologies</label>
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="inline-flex items-center gap-1 rounded-full bg-[var(--color-slate-50-bg)] px-2.5 py-1 text-[10px] text-[var(--color-text-muted)]">
                      {technology}
                      <button type="button" onClick={() => removeTechnology(technology)} className="font-bold text-[var(--color-text-muted)] hover:text-[var(--color-rose-error)]" aria-label={`Remove ${technology}`}>×</button>
                    </span>
                  ))}
                </div>
                <form onSubmit={addTechnology} className="flex gap-2">
                  <Input value={newTechnology} onChange={(event) => setNewTechnology(event.target.value)} placeholder="Add a technology" aria-label="Add a technology" />
                  <Button type="submit" variant="outline" className="shrink-0 px-3 py-2 text-xs">＋ Add</Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between border-t-4 border-[var(--color-blue-secondary)] bg-[var(--color-bg-card)] px-5 py-3 sm:px-10">
        <Button type="button" variant="outline" className="px-4 py-2 text-xs">Back</Button>
        <Button type="button" variant="primary" className="px-4 py-2 text-xs">Next: Skills <span aria-hidden="true">→</span></Button>
      </footer>
    </div>
  );
}
