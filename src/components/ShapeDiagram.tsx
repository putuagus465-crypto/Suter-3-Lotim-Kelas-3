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
            <rect x="5" y="5" width="290" height="140" rx="12" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />

            {/* Pensil dari 0 s.d 9 cm */}
            {(diagram.item === 'pensil' || !diagram.item) && (
              <g id="pensil">
                <rect x="25" y="42" width="190" height="16" rx="4" fill="#cbd5e1" opacity="0.4" />
                <rect x="35" y="36" width="170" height="16" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                <line x1="35" y1="41" x2="205" y2="41" stroke="#fbbf24" strokeWidth="2" />
                <line x1="35" y1="47" x2="205" y2="47" stroke="#d97706" strokeWidth="2" />
                <rect x="20" y="36" width="15" height="16" rx="2" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <rect x="30" y="36" width="6" height="16" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                <polygon points="205,36 230,44 205,52" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
                <polygon points="220,41 230,44 220,47" fill="#1e293b" />

                <rect x="85" y="10" width="80" height="16" rx="4" fill="#0284c7" />
                <text x="125" y="21" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">
                  Panjang = ?
                </text>
              </g>
            )}

            {/* Penghapus dari 2 cm s.d 7 cm */}
            {diagram.item === 'penghapus' && (
              <g id="penghapus">
                <rect x="67" y="34" width="117" height="24" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                <rect x="125" y="34" width="59" height="24" rx="4" fill="#f43f5e" stroke="#e11d48" strokeWidth="2" />
                <text x="96" y="50" textAnchor="middle" fill="#0c4a6e" fontSize="9" fontWeight="900">
                  PENGHAPUS
                </text>
                <text x="154" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
                  KARET
                </text>

                <rect x="85" y="10" width="80" height="16" rx="4" fill="#0284c7" />
                <text x="125" y="21" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">
                  Panjang = ?
                </text>
              </g>
            )}

            {/* Daun jambu dari 0 s.d 8 cm */}
            {diagram.item === 'daun' && (
              <g id="daun">
                <path
                  d="M 20 44 Q 90 19 207 44 Q 90 69 20 44 Z"
                  fill="#4ade80"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <line x1="20" y1="44" x2="207" y2="44" stroke="#15803d" strokeWidth="2" />
                <line x1="60" y1="44" x2="80" y2="32" stroke="#15803d" strokeWidth="1.5" />
                <line x1="60" y1="44" x2="80" y2="56" stroke="#15803d" strokeWidth="1.5" />
                <line x1="110" y1="44" x2="135" y2="30" stroke="#15803d" strokeWidth="1.5" />
                <line x1="110" y1="44" x2="135" y2="58" stroke="#15803d" strokeWidth="1.5" />
                <line x1="160" y1="44" x2="180" y2="36" stroke="#15803d" strokeWidth="1.5" />
                <line x1="160" y1="44" x2="180" y2="52" stroke="#15803d" strokeWidth="1.5" />

                <rect x="75" y="8" width="85" height="16" rx="4" fill="#16a34a" />
                <text x="117" y="19" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
                  Panjang = ? mm
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
                  <line x1={xPos} y1="80" x2={xPos} y2="94" stroke="#713f12" strokeWidth="1.5" />
                  <text x={xPos} y="106" textAnchor="middle" fill="#713f12" fontSize="9" fontWeight="bold">
                    {cm}
                  </text>
                  {cm < 11 && (
                    <line x1={xPos + 11.7} y1="80" x2={xPos + 11.7} y2="89" stroke="#854d0e" strokeWidth="1" />
                  )}
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

        {/* --- 2. ALAT UKUR PANJANG (Netral tanpa bocoran sifat bahan) --- */}
        {shape === 'alat_ukur_panjang' && (
          <svg viewBox="0 0 300 150" className="w-full h-full drop-shadow-sm select-none">
            <g id="alat_1">
              <rect x="10" y="15" width="85" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <circle cx="52" cy="58" r="26" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="52" cy="58" r="16" fill="none" stroke="#a16207" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="52" cy="58" r="7" fill="#ca8a04" />
              <path d="M 52 84 Q 75 96 65 106" fill="none" stroke="#ca8a04" strokeWidth="3" />
              <text x="52" y="122" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="bold">
                Alat Ukur A
              </text>
            </g>

            <g id="alat_2">
              <rect x="105" y="15" width="85" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="115" y="42" width="65" height="36" rx="3" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
              <line x1="122" y1="42" x2="122" y2="52" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="137" y1="42" x2="137" y2="52" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="152" y1="42" x2="152" y2="52" stroke="#ea580c" strokeWidth="1.5" />
              <line x1="167" y1="42" x2="167" y2="52" stroke="#ea580c" strokeWidth="1.5" />
              <text x="147" y="122" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="bold">
                Alat Ukur B
              </text>
            </g>

            <g id="alat_3">
              <rect x="200" y="15" width="90" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="215" y="40" width="45" height="40" rx="8" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
              <circle cx="237" cy="60" r="12" fill="#1e293b" />
              <rect x="260" y="55" width="22" height="10" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <text x="245" y="122" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="bold">
                Alat Ukur C
              </text>
            </g>
          </svg>
        )}

        {/* --- 3. TIMBANGAN DAPUR / KUE JARUM --- */}
        {shape === 'timbangan_jarum' && (
          <svg viewBox="0 0 280 160" className="w-full h-full drop-shadow-sm select-none">
            <ellipse cx="140" cy="35" rx="55" ry="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
            <g>
              <ellipse cx="140" cy="26" rx="35" ry="22" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
              <path d="M 118 20 Q 140 32 162 20" fill="none" stroke="#166534" strokeWidth="2.5" />
              <path d="M 115 28 Q 140 40 165 28" fill="none" stroke="#166534" strokeWidth="2.5" />
              <rect x="110" y="2" width="60" height="15" rx="4" fill="#15803d" />
              <text x="140" y="13" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                🍉 SEMANGKA
              </text>
            </g>

            <rect x="133" y="42" width="14" height="18" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
            <rect x="90" y="58" width="100" height="92" rx="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <circle cx="140" cy="104" r="36" fill="#ffffff" stroke="#0369a1" strokeWidth="2" />

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

            <line x1="140" y1="104" x2="140" y2="128" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="140" cy="104" r="4" fill="#b91c1c" />

            <rect x="200" y="85" width="72" height="34" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="236" y="99" textAnchor="middle" fill="#854d0e" fontSize="8" fontWeight="bold">
              Berat Benda:
            </text>
            <text x="236" y="113" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="900">
              ? kg
            </text>
          </svg>
        )}

        {/* --- 4. TIMBANGAN KODOK / BEBEK PASAR --- */}
        {shape === 'timbangan_bebek' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="30" y="115" width="220" height="22" rx="6" fill="#15803d" stroke="#14532d" strokeWidth="2" />
            <polygon points="120,115 160,115 140,80" fill="#166534" stroke="#14532d" strokeWidth="2" />
            <line x1="45" y1="80" x2="235" y2="80" stroke="#ca8a04" strokeWidth="4" />
            <polygon points="140,65 136,78 144,78" fill="#dc2626" />
            <text x="140" y="60" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="bold">
              SEIMBANG
            </text>

            {/* Left Pan */}
            <line x1="65" y1="80" x2="65" y2="92" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 35 92 Q 65 110 95 92 Z" fill="#fef08a" stroke="#b45309" strokeWidth="2" />
            <circle cx="55" cy="84" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <circle cx="75" cy="84" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <circle cx="65" cy="74" r="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
            <text x="65" y="130" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
              🍎 Apel = ? gram
            </text>

            {/* Right Pan */}
            <line x1="215" y1="80" x2="215" y2="92" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 185 92 Q 215 110 245 92 Z" fill="#fef08a" stroke="#b45309" strokeWidth="2" />

            <rect x="192" y="68" width="22" height="24" rx="2" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="203" cy="65" r="3" fill="#b45309" />
            <text x="203" y="82" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
              1 kg
            </text>

            <rect x="218" y="74" width="18" height="18" rx="2" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="227" cy="71" r="2.5" fill="#ca8a04" />
            <text x="227" y="86" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold">
              500g
            </text>
          </svg>
        )}

        {/* --- 5. NERACA DUA LENGAN --- */}
        {shape === 'neraca' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="110" y="130" width="60" height="14" rx="4" fill="#334155" />
            <rect x="136" y="55" width="8" height="75" fill="#64748b" />
            <polygon points="140,48 132,60 148,60" fill="#0284c7" />
            <line x1="40" y1="52" x2="240" y2="52" stroke="#0284c7" strokeWidth="3.5" />
            <circle cx="140" cy="52" r="4.5" fill="#0369a1" />

            <line x1="60" y1="52" x2="45" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="60" y1="52" x2="75" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 40 85 Q 60 102 80 85 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <ellipse cx="60" cy="76" rx="16" ry="12" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <text x="60" y="115" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="900">
              1 Semangka = ? g
            </text>

            <line x1="220" y1="52" x2="205" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="220" y1="52" x2="235" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 200 85 Q 220 102 240 85 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="213" cy="78" r="9" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
            <circle cx="227" cy="78" r="9" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
            <text x="220" y="115" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="900">
              2 Melon (@ 1.200 g)
            </text>

            <rect x="95" y="12" width="90" height="22" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="140" y="27" textAnchor="middle" fill="#15803d" fontSize="9.5" fontWeight="900">
              ⚖️ SEIMBANG
            </text>
          </svg>
        )}

        {/* --- 6. PITA PANJANG / BAMBU / TALI / MEJA / PAPAN --- */}
        {shape === 'pita_panjang' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {diagram.item === 'tali_meter' ? (
              <g>
                <rect x="30" y="45" width="220" height="26" rx="8" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <text x="140" y="62" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="900">
                  🪢 Tali Pramuka: 3 meter
                </text>
                <rect x="75" y="95" width="130" height="26" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="140" y="112" textAnchor="middle" fill="#1e40af" fontSize="10.5" fontWeight="900">
                  Panjang Tali = ? cm
                </text>
              </g>
            ) : diagram.item === 'bambu_potong' ? (
              <g>
                <rect x="25" y="45" width="230" height="24" rx="6" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <line x1="75" y1="45" x2="75" y2="69" stroke="#15803d" strokeWidth="3" />
                <line x1="135" y1="45" x2="135" y2="69" stroke="#15803d" strokeWidth="3" />
                <line x1="195" y1="45" x2="195" y2="69" stroke="#15803d" strokeWidth="3" />

                <line x1="205" y1="35" x2="205" y2="80" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
                <text x="230" y="32" textAnchor="middle" fill="#dc2626" fontSize="8.5" fontWeight="900">
                  Dipotong 50 cm
                </text>

                <text x="115" y="32" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="900">
                  Mula-mula: 250 cm
                </text>
                <text x="115" y="110" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="900">
                  Sisa Bambu = ? cm
                </text>
              </g>
            ) : diagram.item === 'meja_baca' ? (
              <g>
                <rect x="40" y="40" width="200" height="22" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                <rect x="55" y="62" width="12" height="45" fill="#9a3412" />
                <rect x="213" y="62" width="12" height="45" fill="#9a3412" />
                <text x="140" y="55" textAnchor="middle" fill="#7c2d12" fontSize="10" fontWeight="900">
                  Meja Baca: 1 m 45 cm
                </text>
                <rect x="75" y="114" width="130" height="24" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="140" y="130" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="900">
                  Panjang Meja = ? cm
                </text>
              </g>
            ) : diagram.item === 'papan_cat' ? (
              <g>
                <rect x="20" y="45" width="240" height="30" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
                <rect x="20" y="45" width="144" height="30" rx="4" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <text x="92" y="64" textAnchor="middle" fill="#14532d" fontSize="9.5" fontWeight="bold">
                  Sudah Dicat: 180 cm
                </text>
                <text x="210" y="64" textAnchor="middle" fill="#9a3412" fontSize="9.5" fontWeight="bold">
                  Belum: ? cm
                </text>
                <text x="140" y="110" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  Panjang Total Papan: 3 meter
                </text>
              </g>
            ) : (
              <g>
                <rect x="25" y="45" width="125" height="28" rx="4" fill="#f87171" stroke="#dc2626" strokeWidth="2" />
                <text x="87" y="63" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="900">
                  Perban 1: 120 cm
                </text>

                <rect x="150" y="45" width="95" height="28" rx="4" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <text x="197" y="63" textAnchor="middle" fill="#713f12" fontSize="10.5" fontWeight="900">
                  Perban 2: 80 cm
                </text>

                <circle cx="150" cy="59" r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />

                <rect x="80" y="100" width="120" height="26" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="140" y="117" textAnchor="middle" fill="#1e40af" fontSize="10.5" fontWeight="900">
                  Panjang Total = ? cm
                </text>
              </g>
            )}
          </svg>
        )}

        {/* --- 7. BERAT BENDA / KANTONG / BELANJAAN --- */}
        {shape === 'berat_benda' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            {diagram.item === 'gula_1kg' ? (
              <g>
                <rect x="95" y="20" width="90" height="80" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
                <text x="140" y="48" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">
                  GULA PASIR
                </text>
                <rect x="110" y="58" width="60" height="24" rx="6" fill="#0284c7" />
                <text x="140" y="74" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900">
                  1 kg
                </text>
                <text x="140" y="125" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  Berat Gula = ? gram
                </text>
              </g>
            ) : diagram.item === 'tepung' ? (
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
                  Total Berat = ? kg
                </text>
              </g>
            ) : diagram.item === 'buah_pasar' ? (
              <g>
                <ellipse cx="140" cy="115" rx="100" ry="18" fill="#e2e8f0" />
                <path d="M 60 70 Q 140 120 220 70 Z" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />

                <circle cx="100" cy="60" r="14" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
                <circle cx="120" cy="55" r="14" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
                <rect x="80" y="15" width="60" height="20" rx="6" fill="#ea580c" />
                <text x="110" y="29" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">
                  🍊 Jeruk 2 kg
                </text>

                <ellipse cx="165" cy="58" rx="16" ry="12" fill="#a3e635" stroke="#65a30d" strokeWidth="1.5" />
                <ellipse cx="185" cy="62" rx="16" ry="12" fill="#a3e635" stroke="#65a30d" strokeWidth="1.5" />
                <rect x="150" y="15" width="70" height="20" rx="6" fill="#65a30d" />
                <text x="185" y="29" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">
                  🥭 Mangga 3 kg
                </text>

                <text x="140" y="125" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="900">
                  Total Berat Buah = ? kg
                </text>
              </g>
            ) : diagram.item === 'alat_timbang' ? (
              <g>
                <rect x="20" y="25" width="240" height="100" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="70" y="75" textAnchor="middle" fontSize="28">
                  ⚖️
                </text>
                <text x="140" y="75" textAnchor="middle" fontSize="28">
                  ⏲️
                </text>
                <text x="210" y="75" textAnchor="middle" fontSize="28">
                  🩺
                </text>
                <text x="140" y="110" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="900">
                  Manakah Alat Timbang yang Tepat?
                </text>
              </g>
            ) : diagram.item === 'beras_3500' ? (
              <g>
                <rect x="85" y="20" width="110" height="80" rx="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="140" y="48" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">
                  KARUNG BERAS
                </text>
                <rect x="100" y="56" width="80" height="24" rx="6" fill="#d97706" />
                <text x="140" y="72" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="900">
                  3.500 gram
                </text>
                <text x="140" y="125" textAnchor="middle" fill="#78350f" fontSize="10.5" fontWeight="900">
                  3.500 gram = ? kg lebih ? gram
                </text>
              </g>
            ) : diagram.item === 'gula_5kg' ? (
              <g>
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
                  Total Berat = ? gram
                </text>
              </g>
            ) : diagram.item === 'cabai_ons' ? (
              <g>
                <rect x="85" y="22" width="110" height="76" rx="12" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                <text x="140" y="48" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">
                  🌶️ CABAI MERAH
                </text>
                <rect x="105" y="56" width="70" height="24" rx="6" fill="#dc2626" />
                <text x="140" y="72" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
                  40 ons
                </text>
                <text x="140" y="125" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="900">
                  Berat Panen = ? kg
                </text>
              </g>
            ) : (
              <g>
                <rect x="40" y="30" width="90" height="85" rx="16" fill="#6366f1" stroke="#4338ca" strokeWidth="2" />
                <text x="85" y="60" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                  🎒 Ransel Total
                </text>
                <text x="85" y="80" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="900">
                  4 kg
                </text>

                <rect x="155" y="45" width="85" height="55" rx="8" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                <text x="197" y="68" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                  📚 Buku Belajar
                </text>
                <text x="197" y="88" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">
                  1.500 gram
                </text>
                <text x="140" y="132" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">
                  Berat Barang Lain = ? gram
                </text>
              </g>
            )}
          </svg>
        )}

        {/* --- 8. RUTE / JARAK (Peta Petualangan m & km) --- */}
        {shape === 'rute_jarak' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="10" y="10" width="260" height="130" rx="12" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />

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

            <circle cx="40" cy="100" r="16" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <text x="40" y="105" textAnchor="middle" fill="#ffffff" fontSize="12">
              🏠
            </text>
            <text x="40" y="128" textAnchor="middle" fill="#1e3a8a" fontSize="8" fontWeight="bold">
              Titik Awal
            </text>

            <circle cx="240" cy="45" r="16" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
            <text x="240" y="50" textAnchor="middle" fill="#ffffff" fontSize="12">
              🏫
            </text>
            <text x="240" y="73" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">
              Tujuan Pos
            </text>

            <rect x="80" y="18" width="120" height="26" rx="8" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <text x="140" y="35" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">
              Total Jarak = ?
            </text>
          </svg>
        )}

        {/* --- 9. HARTA KARUN & TANTANGAN FINAL --- */}
        {shape === 'harta_karun' && (
          <svg viewBox="0 0 280 150" className="w-full h-full drop-shadow-sm select-none">
            <g id="peti">
              <ellipse cx="140" cy="115" rx="65" ry="12" fill="#cbd5e1" opacity="0.6" />
              <rect x="90" y="60" width="100" height="50" rx="8" fill="#854d0e" stroke="#713f12" strokeWidth="2.5" />
              <path d="M 85 60 Q 140 25 195 60 Z" fill="#a16207" stroke="#713f12" strokeWidth="2.5" />
              <rect x="110" y="42" width="10" height="68" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <rect x="160" y="42" width="10" height="68" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              <circle cx="140" cy="72" r="8" fill="#fde047" stroke="#a16207" strokeWidth="1.5" />
              <circle cx="140" cy="70" r="2.5" fill="#713f12" />
              <polygon points="139,70 141,70 142,75 138,75" fill="#713f12" />

              <text x="65" y="55" fontSize="14">
                💎
              </text>
              <text x="205" y="55" fontSize="14">
                ✨
              </text>
              <text x="140" y="24" fontSize="14" textAnchor="middle">
                👑
              </text>

              <rect x="40" y="120" width="200" height="22" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
              <text x="140" y="135" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="900">
                Pecahkan Tantangan Harta Karun!
              </text>
            </g>
          </svg>
        )}

        {/* Fallback for geometric shapes */}
        {shape === 'persegi' && (
          <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="45" y="20" width="110" height="110" fill="#fef08a" stroke="#d97706" strokeWidth="3" rx="6" />
            <text x="100" y="15" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="bold">
              s = {dimensions?.sisi || '8 cm'}
            </text>
          </svg>
        )}

        {shape === 'persegi_panjang' && (
          <svg viewBox="0 0 240 150" className="w-full h-full drop-shadow-sm select-none">
            <rect x="35" y="30" width="170" height="90" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" rx="6" />
            <text x="120" y="22" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold">
              p = {dimensions?.panjang || '12 cm'}
            </text>
            <text x="25" y="80" textAnchor="end" fill="#0369a1" fontSize="13" fontWeight="bold">
              l = {dimensions?.lebar || '7 cm'}
            </text>
          </svg>
        )}
      </div>
    </div>
  );
};
