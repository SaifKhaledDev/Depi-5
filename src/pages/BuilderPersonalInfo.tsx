import React, { useRef, useState } from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

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
            const complete = index === 0;
            const active = index === 0;
            return (
              <li key={step} className="flex min-w-0 flex-1 items-center last:flex-none">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold ${complete ? 'bg-[var(--color-violet-primary)] text-white' : 'bg-[var(--color-slate-50-bg)] text-[var(--color-slate-500-light)]'}`}>
                    {complete ? '✓' : index + 1}
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

function BiographySuggestion({ onAccept }: { onAccept: () => void }) {
  const [suggestion, setSuggestion] = useState(
    'I build web apps from database to interface. Most of my projects start with a small annoyance, like tracking tasks or sharing books, and grow into tools other people can use.'
  );
  const [editing, setEditing] = useState(false);

  return (
    <section className="rounded-2xl border border-dashed border-[var(--color-violet-primary)] bg-[var(--color-violet-primary)]/[0.05] p-3 sm:p-4" aria-label="Suggested biography">
      <div className="flex items-start justify-between gap-2">
        <h3 className="flex items-center gap-2 text-xs font-semibold text-[var(--color-violet-hover)]">
          <span aria-hidden="true">✦</span> Suggested biography
        </h3>
        <span className="text-[9px] font-medium text-[var(--color-violet-primary)]">AI draft · not approved yet</span>
      </div>
      {editing ? (
        <textarea
          value={suggestion}
          onChange={(event) => setSuggestion(event.target.value)}
          rows={3}
          className="mt-3 w-full resize-y rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-xs leading-relaxed text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)]"
          aria-label="Edit suggested biography"
        />
      ) : (
        <p className="mt-3 text-[11px] leading-relaxed text-[var(--color-text-muted)]">{suggestion}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        <Button type="button" variant="primary" onClick={onAccept} className="px-3 py-1.5 text-[10px]">✓ Accept</Button>
        <Button type="button" variant="outline" onClick={() => setEditing(!editing)} className="px-3 py-1.5 text-[10px]">✎ {editing ? 'Done' : 'Edit'}</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSuggestion('I create thoughtful digital experiences, turning everyday ideas into simple, reliable tools for people and teams.')}
          className="px-3 py-1.5 text-[10px]"
        >
          ↻ Regenerate
        </Button>
      </div>
    </section>
  );
}

function isValidLink(value: string) {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(?:\/[^\s]*)?$/i.test(value.trim());
}

export default function BuilderPersonalInfo() {
  const [fullName, setFullName] = useState('Maya Chen');
  const [title, setTitle] = useState('Full-Stack Developer');
  const [location, setLocation] = useState('Lisbon, Portugal');
  const [biography, setBiography] = useState("I'm a full-stack developer who enjoys turning everyday workflows into clean, reliable software. I build TypeScript APIs, React interfaces, and small Python tools, and I care about readable code and thoughtful details.");
  const [resumeLink, setResumeLink] = useState('my resume');
  const [profileImage, setProfileImage] = useState('');
  const [approved, setApproved] = useState(true);
  const uploadRef = useRef<HTMLInputElement>(null);
  const validResume = isValidLink(resumeLink);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-app)] text-[var(--color-text-main)]">
      <BuilderHeader />

      <main className="flex flex-1 flex-col items-center px-4 py-6 sm:px-8 sm:py-7">
        <div className="w-full max-w-[650px]">
          <div className="mb-5">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Tell us about you</h1>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">This appears at the top of your portfolio.</p>
          </div>

          <Card className="space-y-4 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[var(--color-violet-primary)] to-[var(--color-blue-secondary)] text-sm font-semibold text-white">
                {profileImage ? <img src={profileImage} alt="Profile preview" className="h-full w-full object-cover" /> : 'MC'}
              </div>
              <div>
                <p className="text-[11px] font-medium">Profile image <span className="font-normal text-[var(--color-text-muted)]">(optional)</span></p>
                <input ref={uploadRef} type="file" accept="image/*" onChange={handleImageChange} className="sr-only" aria-label="Choose profile image" />
                <Button type="button" variant="outline" onClick={() => uploadRef.current?.click()} className="mt-1 px-3 py-1.5 text-[10px]">⇧ Upload</Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Input label="Full name" value={fullName} onChange={(event) => setFullName(event.target.value)} />
              <Input label="Professional title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            <Input label="Location (optional)" value={location} onChange={(event) => setLocation(event.target.value)} />

            <div>
              <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                <label htmlFor="biography" className="text-sm font-medium text-[var(--color-text-main)]">Biography</label>
                <Badge variant="success">AI-suggested · {approved ? 'approved by you' : 'not approved yet'}</Badge>
              </div>
              <textarea
                id="biography"
                value={biography}
                onChange={(event) => setBiography(event.target.value)}
                rows={3}
                className="w-full resize-y rounded-lg border border-[var(--color-slate-200-border)] bg-[var(--color-bg-card)] px-3 py-2 text-xs leading-relaxed text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)]"
              />
            </div>

            <BiographySuggestion onAccept={() => setApproved(true)} />

            <div>
              <Input
                label="Resume link (optional)"
                value={resumeLink}
                onChange={(event) => setResumeLink(event.target.value)}
                aria-invalid={!validResume}
                className={`w-full rounded-lg border bg-[var(--color-bg-card)] px-3 py-2 text-xs text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-primary)] ${validResume ? 'border-[var(--color-border)]' : 'border-[var(--color-rose-error)]'}`}
              />
              {!validResume && <p className="mt-1 flex items-center gap-1 text-[10px] text-[var(--color-rose-error)]"><span aria-hidden="true">ⓘ</span> Enter a valid link, like drive.google.com/your-resume.</p>}
            </div>
          </Card>
        </div>
      </main>

      <footer className="flex items-center justify-between border-t-4 border-[var(--color-blue-secondary)] bg-[var(--color-bg-card)] px-5 py-3 sm:px-10">
        <Button type="button" variant="outline" className="px-4 py-2 text-xs">Back</Button>
        <Button type="button" variant="primary" className="px-4 py-2 text-xs">Next: Projects <span aria-hidden="true">→</span></Button>
      </footer>
    </div>
  );
}
