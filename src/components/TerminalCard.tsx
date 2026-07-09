import { useEffect, useRef, useState } from 'react';

const lines = [
  { parts: [{ text: '// ~/devStore — Maputo, MZ', color: 'text-white/25' }] },
  { parts: [
    { text: 'const ', color: 'text-brand-purple' },
    { text: 'emerson ', color: 'text-blue-300' },
    { text: '= ', color: 'text-white/40' },
    { text: '{', color: 'text-brand-teal' },
  ]},
  { parts: [
    { text: '  nome', color: 'text-white/80' },
    { text: ':  ', color: 'text-white/40' },
    { text: '"Emerson Ibraimo"', color: 'text-orange-300' },
    { text: ',', color: 'text-white/40' },
  ]},
  { parts: [
    { text: '  role', color: 'text-white/80' },
    { text: ':  ', color: 'text-white/40' },
    { text: '"Fullstack Developer"', color: 'text-orange-300' },
    { text: ',', color: 'text-white/40' },
  ]},
  { parts: [
    { text: '  base', color: 'text-white/80' },
    { text: ':  ', color: 'text-white/40' },
    { text: '"Maputo 🇲🇿"', color: 'text-orange-300' },
    { text: ',', color: 'text-white/40' },
  ]},
  { parts: [
    { text: '  stack', color: 'text-white/80' },
    { text: ': ', color: 'text-white/40' },
    { text: '[', color: 'text-brand-teal' },
    { text: '"React"', color: 'text-orange-300' },
    { text: ', ', color: 'text-white/40' },
    { text: '"NestJS"', color: 'text-orange-300' },
    { text: ', ', color: 'text-white/40' },
    { text: '"Spring"', color: 'text-orange-300' },
    { text: ']', color: 'text-brand-teal' },
    { text: ',', color: 'text-white/40' },
  ]},
  { parts: [
    { text: '  open', color: 'text-white/80' },
    { text: ':  ', color: 'text-white/40' },
    { text: 'true', color: 'text-brand-purple' },
  ]},
  { parts: [{ text: '}', color: 'text-brand-teal' }] },
];

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const reveal = (i: number) => {
      if (i > lines.length) {
        setShowCursor(true);
        return;
      }
      setVisibleLines(i);
      timeoutRef.current = setTimeout(() => reveal(i + 1), 130);
    };
    timeoutRef.current = setTimeout(() => reveal(1), 500);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(176,156,255,0.12)]"
         style={{ background: '#0f0f0f' }}>

      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6"
           style={{ background: '#1a1a1a' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[11px] text-white/25 font-mono tracking-wide">
          emerson.ts
        </span>
      </div>

      <div className="p-5 font-mono text-[12px] leading-[1.9] min-h-[200px]">
        {lines.slice(0, visibleLines).map((line, li) => (
          <div key={li}>
            {line.parts.map((part, pi) => (
              <span key={pi} className={part.color}>{part.text}</span>
            ))}
          </div>
        ))}

        {showCursor && (
          <div className="mt-1">
            <span className="text-white/25">$ </span>
            <span className="inline-block w-2 h-[14px] bg-brand-purple align-[-3px] animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}