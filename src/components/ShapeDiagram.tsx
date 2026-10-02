import React from 'react';
import { ShapeDiagramData } from '../types/game';

interface Props {
  diagram?: ShapeDiagramData;
}

export const ShapeDiagram: React.FC<Props> = ({ diagram }) => {
  if (!diagram) return null;

  const { shape, dimensions, label } = diagram;

  return (
    <div className="my-2.5 sm:my-3.5 bg-sky-50/80 border-2 border-sky-300 rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-xs">
      {label && (
        <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-sky-950 bg-sky-200/90 px-3 py-0.5 rounded-full mb-2 border border-sky-300 shadow-2xs">
          {label}
        </span>
      )}

      <div className="w-full max-w-[280px] sm:max-w-[320px] h-[145px] sm:h-[165px] flex items-center justify-center">
        {/* --- 1. PENGGARIS & BENDA (Mistar Ukur) --- */}
        {shape === 'penggaris' && (
          <svg viewBox="0 0 300 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Background card accent */}
            <rect x="5" y="5" width="290" height="140" rx="12" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />

            {/* If item is pensil from 0 to 9 cm */}
            {(diagram.item === 'pensil' || !diagram.item) && (
              <g id="pensil">
                {/* Pencil shadow */}
                <rect x="25" y="38" width="190" height="16" rx="4" fill="#cbd5e1" opacity="0.4" />
                {/* Pencil body */}
                <rect x="35" y="32" width="170" height="16" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                <line x1="35" y1="37" x2="205" y2="37" stroke="#fbbf24" strokeWidth="2" />
                <line x1="35" y1="43" x2="205" y2="43" stroke="#d97706" strokeWidth="2" />
                {/* Metal ferrule and pink eraser */}
                <rect x="20" y="32" width="15" height="16" rx="2" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <rect x="30" y="32" width="6" height="16" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                {/* Wooden tip & lead */}
                <polygon points="205,32 230,40 205,48" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
                <polygon points="220,37 230,40 220,43" fill="#1e293b" />

                {/* Projection dashed lines to ruler */}
                <line x1="20" y1="50" x2="20" y2="78" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="230" y1="50" x2="230" y2="78" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />

                {/* Measurement bracket */}
                <path d="M 20 22 L 20 16 L 125 16 M 125 16 L 230 16 L 230 22" fill="none" stroke="#0284c7" strokeWidth="2" />
                <rect x="95" y="8" width="60" height="16" rx="4" fill="#0284c7" />
                <text x="125" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
                  9 cm
                </text>
              </g>
            )}

            {/* If item is penghapus starting from 2 cm to 7 cm */}
            {diagram.item === 'penghapus' && (
              <g id="penghapus">
                {/* Eraser body from tick 2 (x=67) to tick 7 (x=184) -> length = 5 cm */}
                <rect x="67" y="30" width="117" height="24" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                <rect x="125" y="30" width="59" height="24" rx="4" fill="#f43f5e" stroke="#e11d48" strokeWidth="2" />
                <text x="96" y="46" textAnchor="middle" fill="#0c4a6e" fontSize="9" fontWeight="900">
                  PENGHAPUS
                </text>
                <text x="154" y="46" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
                  DUST
                </text>

                {/* Projection lines */}
                <line x1="67" y1="56" x2="67" y2="78" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
                <line x1="184" y1="56" x2="184" y2="78" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />

                {/* Marker tags at 2 and 7 */}
                <circle cx="67" cy="80" r="3.5" fill="#ef4444" />
                <circle cx="184" cy="80" r="3.5" fill="#ef4444" />

                <path d="M 67 22 L 67 16 L 125 16 M 125 16 L 184 16 L 184 22" fill="none" stroke="#0284c7" strokeWidth="2" />
                <rect x="95" y="8" width="60" height="16" rx="4" fill="#0284c7" />
                <text x="125" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
                  7 - 2 = 5 cm
                </text>
              </g>
            )}

            {/* If item is daun mangga from 0 to 8 cm */}
            {diagram.item === 'daun' && (
              <g id="daun">
                {/* Green Leaf SVG path from x=20 (0 cm) to x=207 (8 cm) */}
                <path
                  d="M 20 40 Q 90 15 207 40 Q 90 65 20 40 Z"
                  fill="#4ade80"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <line x1="20" y1="40" x2="207" y2="40" stroke="#15803d" strokeWidth="2" />
                <line x1="60" y1="40" x2="80" y2="28" stroke="#15803d" strokeWidth="1.5" />
                <line x1="60" y1="40" x2="80" y2="52" stroke="#15803d" strokeWidth="1.5" />
                <line x1="110" y1="40" x2="135" y2="26" stroke="#15803d" strokeWidth="1.5" />
                <line x1="110" y1="40" x2="135" y2="54" stroke="#15803d" strokeWidth="1.5" />
                <line x1="160" y1="40" x2="180" y2="32" stroke="#15803d" strokeWidth="1.5" />
                <line x1="160" y1="40" x2="180" y2="48" stroke="#15803d" strokeWidth="1.5" />

                {/* Projection lines */}
                <line x1="20" y1="48" x2="20" y2="78" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="207" y1="48" x2="207" y2="78" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />

                <path d="M 20 20 L 20 14 L 113 14 M 113 14 L 207 14 L 207 20" fill="none" stroke="#16a34a" strokeWidth="2" />
                <rect x="80" y="6" width="70" height="16" rx="4" fill="#16a34a" />
                <text x="115" y="18" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">
                  8 cm = 80 mm
                </text>
              </g>
            )}

            {/* RULER BODY */}
            <rect x="15" y="80" width="270" height="42" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="268" y="112" textAnchor="end" fill="#854d0e" fontSize="9" fontWeight="900">
              cm
            </text>

            {/* Ruler ticks 0 to 11 (23.4px per cm) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((cm) => {
              const xPos = 20 + cm * 23.4;
              return (
                <g key={cm}>
                  {/* Major tick */}
                  <line x1={xPos} y1="80" x2={xPos} y2="94" stroke="#713f12" strokeWidth="1.5" />
                  {/* Number */}
                  <text x={xPos} y="106" textAnchor="middle" fill="#713f12" fontSize="9" fontWeight="bold">
                    {cm}
                  </text>
                  {/* Half cm tick */}
                  {cm < 11 && (
                    <line x1={xPos + 11.7} y1="80" x2={xPos + 11.7} y2="89" stroke="#854d0e" strokeWidth="1" />
                  )}
                  {/* Small mm ticks */}
                  {cm < 11 &&
                    [1, 2, 3, 4, 6, 7, 8, 9].map((m) => (
                      <line
                        key={m}
                        x1={xPos + m * 2.34}
                        y1="80"
                        x2={xPos + m * 2.34}
                        y2="85"
                        stroke="#a16207"
                        strokeWidth="0.75"
                      />
                    ))}
                </g>
              );
            })}
          </svg>
        )}

        {/* --- 2. ALAT UKUR PANJANG (Pita Jahit, Penggaris, Meteran Rol) --- */}
        {shape === 'alat_ukur_panjang' && (
          <svg viewBox="0 0 300 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Box 1: Meteran Pita Jahit (Highlighted) */}
            <g id="pita_jahit">
              <rect x="10" y="15" width="85" height="120" rx="10" fill="#fef9c3" stroke="#eab308" strokeWidth="2.5" />
              <circle cx="52" cy="55" r="28" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              {/* Tape coils */}
              <circle cx="52" cy="55" r="18" fill="none" stroke="#a16207" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="52" cy="55" r="8" fill="#ca8a04" />
              <path d="M 52 83 Q 75 95 65 108" fill="none" stroke="#ca8a04" strokeWidth="3" />
              <text x="52" y="120" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="900">
                Pita Jahit (Lentur)
              </text>
              <rect x="15" y="8" width="75" height="14" rx="4" fill="#16a34a" />
              <text x="52" y="18" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                ✓ Lingkar Pinggang
              </text>
            </g>

            {/* Box 2: Penggaris Kaku */}
            <g id="penggaris_kaku">
              <rect x="105" y="15" width="85" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="115" y="35" width="65" height="40" rx="3" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
              <line x1="120" y1="35" x2="120" y2="45" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="135" y1="35" x2="135" y2="45" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="150" y1="35" x2="150" y2="45" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="165" y1="35" x2="165" y2="45" stroke="#ea580c" strokeWidth="1.5" />
              <text x="147" y="110" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">
                Penggaris Kayu
              </text>
              <text x="147" y="122" textAnchor="middle" fill="#94a3b8" fontSize="8">
                (Kaku &amp; Lurus)
              </text>
            </g>

            {/* Box 3: Meteran Rol Tukang */}
            <g id="meteran_rol">
              <rect x="200" y="15" width="90" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="215" y="40" width="45" height="40" rx="8" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
              <circle cx="237" cy="60" r="12" fill="#1e293b" />
              {/* Metal tape blade sticking out */}
              <rect x="260" y="55" width="22" height="10" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <text x="245" y="110" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">
                Meteran Rol
              </text>
              <text x="245" y="122" textAnchor="middle" fill="#94a3b8" fontSize="8">
                (Bangunan / Kayu)
              </text>
            </g>
          </svg>
        )}

        {/* --- 3. TIMBANGAN DAPUR / KUE JARUM --- */}
        {shape === 'timbangan_jarum' && (
          <svg viewBox="0 0 280 160" className="w-full h-full drop-shadow-sm select-none">
            {/* Top Tray / Bowl */}
            <ellipse cx="140" cy="35" rx="55" ry="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />

            {/* Item in bowl: Semangka / Apel / Beras */}
            {diagram.item === 'beras' ? (
              <g>
                <path d="M 115 35 Q 140 10 165 35 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
                <rect x="120" y="20" width="40" height="14" rx="3" fill="#0284c7" />
                <text x="140" y="30" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                  BERAS
                </text>
              </g>
            ) : (
              <g>
                {/* Striped Watermelon */}
                <ellipse cx="140" cy="26" rx="35" ry="22" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                <path d="M 118 20 Q 140 32 162 20" fill="none" stroke="#166534" strokeWidth="2.5" />
                <path d="M 115 28 Q 140 40 165 28" fill="none" stroke="#166534" strokeWidth="2.5" />
                <rect x="110" y="2" width="60" height="15" rx="4" fill="#15803d" />
                <text x="140" y="13" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                  {diagram.item === 'apel' ? '🍎 APEL' : '🍉 SEMANGKA'}
                </text>
              </g>
            )}

            {/* Tray neck */}
            <rect x="133" y="42" width="14" height="18" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />

            {/* Scale main body */}
            <rect x="90" y="58" width="100" height="92" rx="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />

            {/* Circular Dial Face */}
            <circle cx="140" cy="104" r="36" fill="#ffffff" stroke="#0369a1" strokeWidth="2" />

            {/* Dial markings 0, 1kg, 2kg, 3kg, 4kg */}
            <text x="140" y="80" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">
              0 / 4kg
            </text>
            <text x="168" y="107" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">
              1kg
            </text>
            <text x="140" y="134" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">
              2kg
            </text>
            <text x="112" y="107" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">
              3kg
            </text>

            {/* Needle pointing to specific weight (Default: 2 kg = angle 180° straight down) */}
            {diagram.weightGrams === 3500 ? (
              // Needle pointing between 3kg and 4kg (approx 315°)
              <line x1="140" y1="104" x2="118" y2="82" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
            ) : diagram.weightGrams === 1000 ? (
              // Needle pointing to 1 kg (90° right)
              <line x1="140" y1="104" x2="164" y2="104" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              // Needle pointing to 2 kg (180° down)
              <line x1="140" y1="104" x2="140" y2="128" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
            )}
            <circle cx="140" cy="104" r="4" fill="#b91c1c" />

            {/* Readout tag */}
            <rect x="200" y="85" width="70" height="34" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="235" y="100" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="bold">
              Jarum Menunjuk:
            </text>
            <text x="235" y="114" textAnchor="middle" fill="#b45309" fontSize="12" fontWeight="900">
              {dimensions.Berat || '2 kg'}
            </text>
          </svg>
        )}

        {/* --- 4. TIMBANGAN KODOK / BEBEK PASAR --- */}
        {shape === 'timbangan_bebek' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Base of scale */}
            <rect x="30" y="115" width="220" height="22" rx="6" fill="#15803d" stroke="#14532d" strokeWidth="2" />
            <polygon points="120,115 160,115 140,80" fill="#166534" stroke="#14532d" strokeWidth="2" />

            {/* Horizontal balance beam */}
            <line x1="45" y1="80" x2="235" y2="80" stroke="#ca8a04" strokeWidth="4" />
            {/* Center balance arrow */}
            <polygon points="140,65 136,78 144,78" fill="#dc2626" />
            <text x="140" y="60" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="bold">
              SEIMBANG
            </text>

            {/* Left Pan (Holding Apples) */}
            <line x1="65" y1="80" x2="65" y2="92" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 35 92 Q 65 110 95 92 Z" fill="#fef08a" stroke="#b45309" strokeWidth="2" />
            {/* 3 Red Apples */}
            <circle cx="55" cy="84" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <circle cx="75" cy="84" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <circle cx="65" cy="74" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <text x="65" y="130" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
              🍎 Kantong Apel
            </text>

            {/* Right Pan (Holding Anak Timbangan / Weights) */}
            <line x1="215" y1="80" x2="215" y2="92" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 185 92 Q 215 110 245 92 Z" fill="#fef08a" stroke="#b45309" strokeWidth="2" />

            {/* Anak timbangan 1: 1 kg */}
            <rect x="192" y="68" width="22" height="24" rx="2" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="203" cy="65" r="3" fill="#b45309" />
            <text x="203" y="82" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
              1 kg
            </text>

            {/* Anak timbangan 2: 500 g */}
            <rect x="218" y="74" width="18" height="18" rx="2" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="227" cy="71" r="2.5" fill="#ca8a04" />
            <text x="227" y="86" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">
              500g
            </text>

            {/* Highlight bubble */}
            <rect x="175" y="15" width="95" height="32" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="222" y="27" textAnchor="middle" fill="#713f12" fontSize="8" fontWeight="bold">
              Anak Timbangan:
            </text>
            <text x="222" y="41" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="900">
              1 kg + 500 g
            </text>
          </svg>
        )}

        {/* --- 5. NERACA DUA LENGAN (Timbangan Perbandingan) --- */}
        {shape === 'neraca' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Stand & Fulcrum */}
            <rect x="110" y="130" width="60" height="14" rx="4" fill="#334155" />
            <rect x="136" y="55" width="8" height="75" fill="#64748b" />
            <polygon points="140,48 132,60 148,60" fill="#0284c7" />

            {/* Balanced beam */}
            <line x1="40" y1="52" x2="240" y2="52" stroke="#0284c7" strokeWidth="3.5" />
            <circle cx="140" cy="52" r="4.5" fill="#0369a1" />

            {/* Hanging strings and pans */}
            {/* Left Pan: 1 Semangka */}
            <line x1="60" y1="52" x2="45" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="60" y1="52" x2="75" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 40 85 Q 60 102 80 85 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <ellipse cx="60" cy="76" rx="16" ry="12" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <text x="60" y="115" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="900">
              1 Semangka (?)
            </text>

            {/* Right Pan: 2 Melon (@ 1.200 gram) */}
            <line x1="220" y1="52" x2="205" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="220" y1="52" x2="235" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 200 85 Q 220 102 240 85 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="213" cy="78" r="9" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
            <circle cx="227" cy="78" r="9" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
            <text x="220" y="115" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="900">
              2 Melon (@ 1.200 g)
            </text>

            {/* Balance Badge */}
            <rect x="95" y="12" width="90" height="22" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="140" y="27" textAnchor="middle" fill="#15803d" fontSize="9.5" fontWeight="900">
              ⚖️ KEDUA LENGAN SEIMBANG
            </text>
          </svg>
        )}

        {/* --- 6. PITA PANJANG / BAMBU / TALI (Operasi Ukur Panjang) --- */}
        {shape === 'pita_panjang' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* If Sambung Pita Merah + Kuning */}
            {diagram.item === 'pita_sambung' || !diagram.item ? (
              <g>
                {/* Pita Merah 120 cm */}
                <rect x="25" y="45" width="125" height="28" rx="4" fill="#f87171" stroke="#dc2626" strokeWidth="2" />
                <text x="87" y="63" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
                  Pita Merah: 120 cm
                </text>

                {/* Pita Kuning 80 cm */}
                <rect x="150" y="45" width="95" height="28" rx="4" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <text x="197" y="63" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="900">
                  Pita Kuning: 80 cm
                </text>

                {/* Connection knot */}
                <circle cx="150" cy="59" r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />

                {/* Total Bracket below */}
                <path d="M 25 85 L 25 95 L 137 95 M 137 95 L 245 95 L 245 85" fill="none" stroke="#2563eb" strokeWidth="2" />
                <rect x="80" y="105" width="120" height="26" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="140" y="122" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="900">
                  Total = 120 + 80 = 200 cm
                </text>
              </g>
            ) : diagram.item === 'bambu_potong' ? (
              <g>
                {/* Bamboo stick 250 cm */}
                <rect x="25" y="45" width="230" height="24" rx="6" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                {/* Bamboo nodes */}
                <line x1="75" y1="45" x2="75" y2="69" stroke="#15803d" strokeWidth="3" />
                <line x1="135" y1="45" x2="135" y2="69" stroke="#15803d" strokeWidth="3" />
                <line x1="195" y1="45" x2="195" y2="69" stroke="#15803d" strokeWidth="3" />

                {/* Cut line 50 cm */}
                <line x1="205" y1="35" x2="205" y2="80" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
                <text x="230" y="40" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="900">
                  Dipotong 50 cm
                </text>

                {/* Left remaining */}
                <path d="M 25 82 L 25 90 L 115 90 M 115 90 L 205 90 L 205 82" fill="none" stroke="#16a34a" strokeWidth="2" />
                <text x="115" y="110" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="900">
                  Sisa = 250 - 50 = ? cm
                </text>
              </g>
            ) : (
              <g>
                {/* Papan 3 m terpasang 180 cm */}
                <rect x="20" y="45" width="240" height="30" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
                <rect x="20" y="45" width="144" height="30" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <text x="92" y="64" textAnchor="middle" fill="#14532d" fontSize="9.5" fontWeight="bold">
                  Terpasang: 180 cm
                </text>
                <text x="210" y="64" textAnchor="middle" fill="#9a3412" fontSize="9.5" fontWeight="bold">
                  Belum: ? cm
                </text>
                <text x="140" y="110" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  Panjang Total: 3 m (300 cm)
                </text>
              </g>
            )}
          </svg>
        )}

        {/* --- 7. BERAT BENDA / KANTONG / BELANJAAN --- */}
        {shape === 'berat_benda' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* If 3 Kantong Tepung */}
            {diagram.item === 'tepung' ? (
              <g>
                {[0, 1, 2].map((i) => (
                  <g key={i} transform={`translate(${30 + i * 80}, 25)`}>
                    <rect x="0" y="15" width="60" height="70" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                    <polygon points="10,15 30,0 50,15" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
                    <text x="30" y="45" textAnchor="middle" fill="#b45309" fontSize="8.5" fontWeight="bold">
                      TEPUNG
                    </text>
                    <rect x="10" y="55" width="40" height="18" rx="4" fill="#f59e0b" />
                    <text x="30" y="68" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
                      10 ons
                    </text>
                  </g>
                ))}
                <text x="140" y="125" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="900">
                  3 kantong @ 10 ons (1 kg) = 3 kg
                </text>
              </g>
            ) : diagram.item === 'buah_pasar' ? (
              <g>
                {/* Keranjang buah jeruk 2 kg & mangga 3 kg */}
                <ellipse cx="140" cy="115" rx="100" ry="18" fill="#e2e8f0" />
                <path d="M 60 70 Q 140 120 220 70 Z" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />

                {/* Orange fruits */}
                <circle cx="100" cy="60" r="14" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
                <circle cx="120" cy="55" r="14" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
                <rect x="80" y="15" width="60" height="20" rx="6" fill="#ea580c" />
                <text x="110" y="29" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">
                  🍊 Jeruk 2 kg
                </text>

                {/* Mango fruits */}
                <ellipse cx="165" cy="58" rx="16" ry="12" fill="#a3e635" stroke="#65a30d" strokeWidth="1.5" />
                <ellipse cx="185" cy="62" rx="16" ry="12" fill="#a3e635" stroke="#65a30d" strokeWidth="1.5" />
                <rect x="150" y="15" width="70" height="20" rx="6" fill="#65a30d" />
                <text x="185" y="29" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">
                  🥭 Mangga 3 kg
                </text>

                <text x="140" y="125" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  Total Belanjaan = 2 kg + 3 kg = 5 kg
                </text>
              </g>
            ) : diagram.item === 'gula_5kg' ? (
              <g>
                {/* 5 bags of sugar */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i} transform={`translate(${15 + i * 50}, 30)`}>
                    <rect x="0" y="10" width="42" height="58" rx="6" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="21" y="32" textAnchor="middle" fill="#0369a1" fontSize="7" fontWeight="bold">
                      GULA
                    </text>
                    <rect x="5" y="42" width="32" height="15" rx="3" fill="#0284c7" />
                    <text x="21" y="53" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                      1 kg
                    </text>
                  </g>
                ))}
                <text x="140" y="120" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  5 Kantong @ 1 kg = 5.000 gram
                </text>
              </g>
            ) : (
              <g>
                {/* Tas Ransel 4 kg & Buku 1.500 g */}
                <rect x="40" y="30" width="90" height="85" rx="16" fill="#6366f1" stroke="#4338ca" strokeWidth="2" />
                <text x="85" y="60" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                  🎒 Ransel Total
                </text>
                <text x="85" y="80" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="900">
                  4 kg
                </text>

                {/* Subtrahend: Buku 1.500 g */}
                <rect x="155" y="45" width="85" height="55" rx="8" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                <text x="197" y="68" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                  📚 Buku Belajar
                </text>
                <text x="197" y="88" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
                  1.500 gram
                </text>
                <text x="140" y="132" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">
                  4.000 g - 1.500 g = ? gram
                </text>
              </g>
            )}
          </svg>
        )}

        {/* --- 8. RUTE / JARAK (Peta Petualangan m & km) --- */}
        {shape === 'rute_jarak' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Background trail */}
            <rect x="10" y="10" width="260" height="130" rx="12" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />

            {/* Winding road path */}
            <path
              d="M 40 100 Q 100 40 150 90 T 240 45"
              fill="none"
              stroke="#64748b"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 40 100 Q 100 40 150 90 T 240 45"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 40 100 Q 100 40 150 90 T 240 45"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Start icon: Rumah */}
            <circle cx="40" cy="100" r="16" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="40" y="105" textAnchor="middle" fill="#ffffff" fontSize="12">
              🏠
            </text>
            <text x="40" y="128" textAnchor="middle" fill="#1e3a8a" fontSize="8" fontWeight="bold">
              Rumah
            </text>

            {/* End icon: Sekolah SDN 3 */}
            <circle cx="240" cy="45" r="16" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <text x="240" y="50" textAnchor="middle" fill="#ffffff" fontSize="12">
              🏫
            </text>
            <text x="240" y="73" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">
              SDN 3
            </text>

            {/* Distance signpost */}
            <rect x="85" y="20" width="110" height="28" rx="8" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <text x="140" y="34" textAnchor="middle" fill="#e0f2fe" fontSize="8" fontWeight="bold">
              Jarak Tempuh:
            </text>
            <text x="140" y="45" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="900">
              {dimensions.Jarak || '1 km 200 m'}
            </text>
          </svg>
        )}

        {/* --- 9. HARTA KARUN & TANTANGAN FINAL --- */}
        {shape === 'harta_karun' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {/* Treasure Chest */}
            <g id="peti">
              <ellipse cx="140" cy="115" rx="65" ry="12" fill="#cbd5e1" opacity="0.6" />
              {/* Chest base */}
              <rect x="90" y="60" width="100" height="50" rx="8" fill="#854d0e" stroke="#713f12" strokeWidth="2.5" />
              {/* Chest lid */}
              <path d="M 85 60 Q 140 25 195 60 Z" fill="#a16207" stroke="#713f12" strokeWidth="2.5" />
              {/* Gold bands */}
              <rect x="110" y="42" width="10" height="68" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <rect x="160" y="42" width="10" height="68" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              {/* Keyhole badge */}
              <circle cx="140" cy="72" r="8" fill="#fde047" stroke="#a16207" strokeWidth="1.5" />
              <circle cx="140" cy="70" r="2.5" fill="#713f12" />
              <polygon points="139,70 141,70 142,75 138,75" fill="#713f12" />

              {/* Sparkling gems */}
              <text x="65" y="55" fontSize="14">
                💎
              </text>
              <text x="205" y="55" fontSize="14">
                ✨
              </text>
              <text x="140" y="24" fontSize="14" textAnchor="middle">
                👑
              </text>

              {/* Challenge description banner */}
              <rect x="40" y="120" width="200" height="22" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="140" y="135" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="900">
                {dimensions.Tantangan || 'Tali 4 meter = 400 cm ÷ 4 = ?'}
              </text>
            </g>
          </svg>
        )}

        {/* Fallback for geometric shapes if any custom ones exist */}
        {shape === 'persegi' && (
          <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="45" y="20" width="110" height="110" fill="#fef08a" stroke="#d97706" strokeWidth="3" rx="6" />
            <text x="100" y="15" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="bold">
              s = {dimensions.sisi || '8 cm'}
            </text>
          </svg>
        )}

        {shape === 'persegi_panjang' && (
          <svg viewBox="0 0 240 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="35" y="30" width="170" height="90" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" rx="6" />
            <text x="120" y="22" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold">
              p = {dimensions.panjang || '12 cm'}
            </text>
            <text x="25" y="80" textAnchor="end" fill="#0369a1" fontSize="13" fontWeight="bold">
              l = {dimensions.lebar || '7 cm'}
            </text>
          </svg>
        )}
      </div>

      {/* Quick Dimension Pills */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-2">
        {Object.entries(dimensions).map(([key, val]) => (
          <span
            key={key}
            className="text-[11px] bg-white text-slate-800 px-2.5 py-0.5 rounded-lg border border-sky-300 font-bold shadow-2xs"
          >
            <span className="capitalize text-sky-950 font-black">{key}:</span> {val}
          </span>
        ))}
      </div>
    </div>
  );
};
