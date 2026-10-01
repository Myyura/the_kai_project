---
sidebar_label: 2026年8月実施 6. 【選択問題】電子回路と論理設計
sidebar_position: 6
tags:
  - Osaka-University
  - Electrical-Electronic.Circuits.Alternating-Current-Power-and-Power-Factor
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Wheatstone-Bridge
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 6. 【選択問題】電子回路と論理設計

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1-1) 20，(1-2) 20，(1-3) 30，(1-4) 10，(2) 15，(3-1) 15，(3-2) 15

定常状態（steady state）にある交流回路（alternating current circuit）について以下の各問に答えよ。虚数単位（imaginary unit）を $\mathrm{j}$ とする。図中の記号は以下の凡例に従う。

<svg viewBox="0 0 1200 340" width="100%" height="340" role="img" aria-labelledby="circuit-legend-title" preserveAspectRatio="xMidYMid meet">
  <title id="circuit-legend-title">凡例</title>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <rect x="20" y="15" width="1160" height="315" />
    <line x1="77" y1="65" x2="115" y2="65" /><rect x="115" y="51" width="70" height="28" /><line x1="185" y1="65" x2="223" y2="65" /><circle cx="70" cy="65" r="7" /><circle cx="230" cy="65" r="7" />
    <line x1="77" y1="130" x2="120" y2="130" /><path d="M120 130 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="192" y1="130" x2="223" y2="130" /><circle cx="70" cy="130" r="7" /><circle cx="230" cy="130" r="7" />
    <line x1="77" y1="195" x2="142" y2="195" /><line x1="142" y1="175" x2="142" y2="215" /><line x1="158" y1="175" x2="158" y2="215" /><line x1="158" y1="195" x2="223" y2="195" /><circle cx="70" cy="195" r="7" /><circle cx="230" cy="195" r="7" />
    <line x1="77" y1="275" x2="126" y2="275" /><circle cx="150" cy="275" r="24" /><path d="M131 275 c6 -12 13 -12 19 0 c6 12 13 12 19 0" /><line x1="174" y1="275" x2="223" y2="275" /><circle cx="70" cy="275" r="7" /><circle cx="230" cy="275" r="7" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="22">
    <text x="150" y="45" text-anchor="middle" font-style="italic">R</text><text x="275" y="73">有限の抵抗値（resistance）R（&gt; 0）をもつ抵抗（resistor）</text>
    <text x="156" y="107" text-anchor="middle" font-style="italic">L</text><text x="275" y="138">有限のインダクタンス（inductance）L（&gt; 0）をもつインダクタ（inductor）</text>
    <text x="150" y="170" text-anchor="middle" font-style="italic">C</text><text x="275" y="203">有限の静電容量（capacitance）C（&gt; 0）をもつキャパシタ（capacitor）</text>
    <text x="150" y="242" text-anchor="middle" font-style="italic">E</text><text x="118" y="268" text-anchor="middle">+</text><text x="182" y="268" text-anchor="middle">−</text><text x="275" y="270">有限の振幅（amplitude）E（&gt; 0）および有限の角周波数</text><text x="275" y="297">（angular frequency）ω（&gt; 0）をもつ交流電圧源（alternating current voltage source）</text>
  </g>
</svg>

<div align="center">凡例</div>

### (1)

図1に示す交流回路について，以下の各小問に答えよ。

#### (1-1)

破線（dashed line）で囲まれた回路のインピーダンス（impedance）を $\omega$，$R$，$L$ の中から必要な項を用いて表せ。

#### (1-2)

交流電圧源の電圧（voltage）と電流（current）$I$ の位相（phase）の差が $60^\circ$ となる $\omega$ を $R$，$L$ の中から必要な項を用いて表せ。

#### (1-3)

破線で囲まれた回路の有効電力（effective power）$P_{\mathrm{eff}}$ は式 (A) で表される。有効電力は複素電力（complex power）の実部（real part）で定義される。式 (A) の空欄 $x$ および $y$ に当てはまる適切な式を $\omega$，$R$，$L$ の中から必要な項を用いて示せ。

$$
P_{\mathrm{eff}}=\frac{3}{2}\cdot\frac{\boxed{x}}{R^2+\boxed{y}}E^2\qquad\cdots\text{ (A)}
$$

#### (1-4)

節点（node）b から見た節点 a の電位（electric potential）$V_{\mathrm{ab}}$ の振幅の絶対値（absolute value）を $E$，$\omega$，$R$，$L$ の中から必要な項を用いて表せ。

<svg viewBox="0 30 700 350" width="100%" height="350" role="img" aria-labelledby="circuit-figure-1-title" preserveAspectRatio="xMidYMid meet">
  <title id="circuit-figure-1-title">図1</title>
  <defs><marker id="arrow-c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor" /></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <rect x="240" y="55" width="350" height="275" stroke-dasharray="10 8" />
    <line x1="130" y1="195" x2="260" y2="195" /><line x1="260" y1="195" x2="260" y2="115" /><line x1="260" y1="115" x2="305" y2="115" />
    <path d="M305 115 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="377" y1="115" x2="435" y2="115" /><circle cx="435" cy="115" r="5" fill="currentColor" /><line x1="435" y1="115" x2="485" y2="115" /><rect x="485" y="98" width="65" height="34" /><line x1="550" y1="115" x2="575" y2="115" /><line x1="575" y1="115" x2="575" y2="250" />
    <line x1="260" y1="195" x2="260" y2="250" /><line x1="260" y1="250" x2="305" y2="250" /><path d="M305 250 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="377" y1="250" x2="435" y2="250" /><circle cx="435" cy="250" r="5" fill="currentColor" /><line x1="435" y1="250" x2="485" y2="250" /><rect x="485" y="233" width="65" height="34" /><line x1="550" y1="250" x2="575" y2="250" /><line x1="575" y1="195" x2="635" y2="195" /><line x1="635" y1="195" x2="635" y2="355" /><line x1="635" y1="355" x2="130" y2="355" />
    <line x1="130" y1="195" x2="130" y2="268" /><circle cx="130" cy="294" r="26" /><path d="M109 294 c7 -13 14 -13 21 0 c7 13 14 13 21 0" /><line x1="130" y1="320" x2="130" y2="355" />
    <line x1="70" y1="170" x2="190" y2="170" marker-end="url(#arrow-c1)" />
    <line x1="435" y1="225" x2="435" y2="142" marker-end="url(#arrow-c1)" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="24"><text x="98" y="280" text-anchor="end">+</text><text x="98" y="326" text-anchor="end">−</text><text x="82" y="302" text-anchor="end" font-style="italic">E</text><text x="130" y="155" text-anchor="middle" font-style="italic">I</text><text x="330" y="82" font-style="italic">4L</text><text x="505" y="82" font-style="italic">2R</text><text x="330" y="290" font-style="italic">2L</text><text x="515" y="290" font-style="italic">R</text><text x="447" y="108">a</text><text x="447" y="264">b</text><text x="455" y="190" font-style="italic">V<tspan baseline-shift="sub" font-size="16">ab</tspan></text></g>
</svg>

<div align="center">図1</div>

### (2)

図2に示す交流回路について，破線で囲まれた抵抗の平均消費電力（average power consumption）を $E$，$\omega$，$R$，$L$ の中から必要な項を用いて表せ。

<svg viewBox="0 20 700 340" width="100%" height="340" role="img" aria-labelledby="circuit-figure-2-title" preserveAspectRatio="xMidYMid meet">
  <title id="circuit-figure-2-title">図2</title>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <line x1="165" y1="175" x2="225" y2="175" /><line x1="225" y1="175" x2="225" y2="95" /><line x1="225" y1="95" x2="275" y2="95" /><path d="M275 95 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="347" y1="95" x2="410" y2="95" /><circle cx="410" cy="95" r="5" fill="currentColor" /><line x1="410" y1="95" x2="465" y2="95" /><rect x="465" y="78" width="65" height="34" /><line x1="530" y1="95" x2="560" y2="95" /><line x1="560" y1="95" x2="560" y2="245" />
    <line x1="225" y1="175" x2="225" y2="245" /><line x1="225" y1="245" x2="275" y2="245" /><path d="M275 245 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="347" y1="245" x2="410" y2="245" /><circle cx="410" cy="245" r="5" fill="currentColor" /><line x1="410" y1="245" x2="465" y2="245" /><rect x="465" y="228" width="65" height="34" /><line x1="530" y1="245" x2="560" y2="245" /><line x1="560" y1="175" x2="620" y2="175" /><line x1="620" y1="175" x2="620" y2="335" /><line x1="620" y1="335" x2="165" y2="335" />
    <line x1="165" y1="175" x2="165" y2="248" /><circle cx="165" cy="274" r="26" /><path d="M144 274 c7 -13 14 -13 21 0 c7 13 14 13 21 0" /><line x1="165" y1="300" x2="165" y2="335" />
    <rect x="378" y="125" width="88" height="90" stroke-dasharray="9 7" /><line x1="410" y1="95" x2="410" y2="137" /><rect x="394" y="137" width="32" height="66" /><line x1="410" y1="203" x2="410" y2="245" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="24"><text x="133" y="260" text-anchor="end">+</text><text x="133" y="306" text-anchor="end">−</text><text x="118" y="282" text-anchor="end" font-style="italic">E</text><text x="300" y="65" font-style="italic">4L</text><text x="497.5" y="65" text-anchor="middle" font-style="italic">2R</text><text x="300" y="285" font-style="italic">2L</text><text x="497.5" y="285" text-anchor="middle" font-style="italic">R</text><text x="446" y="180" text-anchor="middle" font-style="italic">R</text></g>
</svg>

<div align="center">図2</div>

### (3)

図3に示す交流回路について，以下の各小問に答えよ。

#### (3-1)

破線Aで囲まれた抵抗に電流が流れないよう $L$ を設定したい。$L$ を $\omega$，$R_1$，$R_2$，$R_3$，$C$ の中から必要な項を用いて表せ。

#### (3-2)

破線Aで囲まれた抵抗に電流が流れないよう $L$ を設定しながら，さらに破線Bで囲まれた回路の無効電力（reactive power）が0になるよう $R_1$ を設定したい。無効電力は複素電力の虚部（imaginary part）で定義される。$L$ を用いずに，$R_1$ を $\omega$，$R_2$，$R_3$，$C$ の中から必要な項を用いて表せ。

<svg viewBox="0 20 700 370" width="100%" height="370" role="img" aria-labelledby="circuit-figure-3-title" preserveAspectRatio="xMidYMid meet">
  <title id="circuit-figure-3-title">図3</title>
  <g fill="none" stroke="currentColor" stroke-width="3">
    <rect x="225" y="45" width="365" height="285" stroke-dasharray="10 8" />
    <line x1="165" y1="175" x2="245" y2="175" /><line x1="245" y1="175" x2="245" y2="105" /><line x1="245" y1="105" x2="290" y2="105" /><path d="M290 105 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0 c8 -18 16 -18 24 0" /><line x1="362" y1="105" x2="420" y2="105" /><circle cx="420" cy="105" r="5" fill="currentColor" /><line x1="420" y1="105" x2="475" y2="105" /><rect x="475" y="88" width="65" height="34" /><line x1="540" y1="105" x2="570" y2="105" /><line x1="570" y1="105" x2="570" y2="255" />
    <line x1="245" y1="175" x2="245" y2="255" /><line x1="245" y1="255" x2="290" y2="255" /><rect x="290" y="238" width="65" height="34" /><line x1="355" y1="255" x2="420" y2="255" /><circle cx="420" cy="255" r="5" fill="currentColor" /><line x1="420" y1="255" x2="475" y2="255" /><line x1="475" y1="232" x2="475" y2="278" /><line x1="493" y1="232" x2="493" y2="278" /><line x1="493" y1="255" x2="570" y2="255" />
    <rect x="380" y="132" width="96" height="96" stroke-dasharray="9 7" /><line x1="420" y1="105" x2="420" y2="145" /><rect x="404" y="145" width="32" height="66" /><line x1="420" y1="211" x2="420" y2="255" />
    <line x1="570" y1="175" x2="630" y2="175" /><line x1="630" y1="175" x2="630" y2="365" /><line x1="630" y1="365" x2="165" y2="365" /><line x1="165" y1="175" x2="165" y2="278" /><circle cx="165" cy="304" r="26" /><path d="M144 304 c7 -13 14 -13 21 0 c7 13 14 13 21 0" /><line x1="165" y1="330" x2="165" y2="365" />
  </g>
  <g fill="currentColor" font-family="serif" font-size="24"><text x="204" y="70">B</text><text x="365" y="160">A</text><text x="133" y="290" text-anchor="end">+</text><text x="133" y="336" text-anchor="end">−</text><text x="118" y="312" text-anchor="end" font-style="italic">E</text><text x="325" y="75" font-style="italic">L</text><text x="507.5" y="75" text-anchor="middle" font-style="italic">R<tspan baseline-shift="sub" font-size="16">2</tspan></text><text x="322.5" y="300" text-anchor="middle" font-style="italic">R<tspan baseline-shift="sub" font-size="16">1</tspan></text><text x="478" y="300" font-style="italic">C</text><text x="452" y="184" text-anchor="middle" font-style="italic">R<tspan baseline-shift="sub" font-size="16">3</tspan></text></g>
</svg>

<div align="center">図3</div>
