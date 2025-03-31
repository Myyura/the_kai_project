---
sidebar_label: "2021年度 電気回路"
sidebar_position: 17
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年度 電気回路

## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ に示す回路において，$C = \sqrt{3}\text{F},L = \frac{\sqrt{3}}{6}\text{H}$, 電源の角周波数 $\omega = 2\text{rad/s}$, 端子間電圧 $V$ と電流 $I$ の位相差は $\arg(\frac{V}{I}) = -\frac{\pi}{6}\text{rad}$ であり，回路は定常状態にあるとする．以下の問いに答えよ.

(1) $R$ の値を求めよ．

(2) 電流 $I$ の時間関数が $i(t) = \sin(2t + \frac{\pi}{6})\text{A}$ であり，これに対応するフェーザ電流を $I = e^{j\frac{\pi}{6}}\text{A}$ と表すとき，フェーザ電圧 $V$ を求め，その時間関数 $v(t)$ を答えよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p1.png" width="335" height="200" alt=""/>
</figure>

### 【問 2】
図 $2$ の回路について，以下の問いに答えよ．ただし，図 $2(a)$ と図 $2(b)$ は等価である．

(1) 図 $2(b)$ のインピーダンス $Z_1，Z_2，Z_3$ を求めよ．

(2) 図 $2(b)$ において，端子対 $1-1'$ から右側を見たときのインピーダンス $Z_R$ および左側を見たときのインピーダンス $Z_L$ を記号 $Z_0,Z_1,Z_2,Z_3$ を用いずに表せ．ただし，インピーダンス $Z_0 = R + jX$ である．

(3) 図 $2(b)$ の $Z_0$ において，$R$ も $X$ も可変であるとき，$Z_0$ における消費電力を最大とする $R$ および $X$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p2.png" width="400" height="600" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路について，以下の問いに答えよ．ただし，電源の角周波数を $\omega$ とする．

(1) 図 $3(b)$ が図 $3(a)$ の端子対 $1-1’$ の左側の $2$ 端子回路と等価なとき，電流源 $J_0$ とアドミタンス $Y_0$ を求めよ．

(2) 図 $3(a)$ の電流 $I$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p3.png" width="660" height="290" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路について，以下の問いに答えよ．ただし，$e(t) = 50 \sin t \text{V}$ とし，スイッチ $S$ を閉じる前の回路は定常状態にあるとする．

(1) $t = 0$ でスイッチ $S$ を閉じた直後の電流 $i(+0)$ を求めよ．

(2) $t > 0$ における電流 $i(t)$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p4.png" width="360" height="245" alt=""/>
</figure>

## **Kai** 
### 【問 1】
#### (1)

$$
\begin{align}
Z_{\text{全}} &= R + \frac{1}{j\omega C} // j\omega L \notag\\
&= R + \frac{\frac{1}{j\omega C} \cdot j\omega L}{\frac{1}{j\omega C} + j\omega 
L} \notag\\
&= R + \frac{j\omega L}{1 - \omega^2CL} \notag\\
&= R + \frac{j \cdot 2 \cdot \frac{\sqrt{3}}{6}}{1 - 4 \cdot \sqrt{3} \cdot \frac{\sqrt{3}}{6}} \notag\\
&= R + \frac{\frac{\sqrt{3}}{3}j}{1 - 2} \notag\\
&= R - \frac{\sqrt{3}}{3}j \tag{①}
\end{align}
$$

$$
\frac{V}{I} = Z_{\text{全}}
$$

$$
\begin{align}
Z_{\text{全}} &= Ae^{-\frac{\pi}{6}}(A > 0) \notag \\
&= A(\frac{\sqrt{3}}{2} - \frac{1}{2}j) \tag{②}
\end{align}
$$

①、② の実部と虚部を比較

$$
\left \{
\begin{align}
R &= \frac{\sqrt{3}}{2}A \quad \tag{③} \\
-\frac{\sqrt{3}}{3} &= -\frac{A}{2} \tag{④}
\end{align}
\right.
$$

④ より、

$$
\begin{aligned}
2\sqrt{3} &= 3A \\
A &= \frac{2\sqrt{3}}{3} \\
R &= \frac{\sqrt{3}}{2} \times \frac{2\sqrt{3}}{3} = 1
\end{aligned}
$$

#### (2)
$$
i(t) = \sin(2t + \frac{\pi}{6}),I = e^{j\frac{\pi}{6}}
$$

(1) より、

$$
Z_{\text{全}} = \frac{2\sqrt{3}}{3}(\frac{\sqrt{3}}{2} - \frac{1}{2}j)
$$

$$
Z_{\text{全}} = 1 - \frac{\sqrt{3}}{3}j = \frac{2}{\sqrt{3}}e^{-j\frac{\pi}{6}}
$$

$$
\begin{aligned}
V &= I \times Z_{\text{全}} \\
&= e^{j\frac{\pi}{6}} \times \frac{2}{\sqrt{3}}e^{-j\frac{\pi}{6}} \\
&= \frac{2}{\sqrt{3}}
\end{aligned}
$$

$$
v(t) = \frac{2}{\sqrt{3}}\sin2t
$$

### 【問 2】
#### (1)
$\Delta \rightarrow Y$ 変換より、

$$
\begin{aligned}
Z_1 &= \frac{2j}{4 + j} \\
&= \frac{2j(4 - j)}{17} \\
&= \frac{2 + 8j}{17} \\
&= \frac{2(1 + 4j)}{17}
\end{aligned}
$$

$$
\begin{aligned}
Z_2 &= \frac{2j}{4 + j} \\
&= \frac{2(1 + 4j)}{17}
\end{aligned}
$$

$$
\begin{aligned}
Z_3 &= \frac{4}{4 + j} \\
&= \frac{4(4 - j)}{17} \\
&= \frac{16 - 4j}{17}
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
Z_R &= Z_0 + Z_2 \\
&= R + jX + \frac{2(1 + 4j)}{17} \\
&= \frac{17R + 2 + j(8 + X)}{17} \\
\end{aligned}
$$

$$
\begin{aligned}
Z_L &= Z_1 + Z_3 - j \\
&= \frac{2}{4 + j} + \frac{4}{4 + j} - j \\
&= \frac{18 - 3j}{17}
\end{aligned}
$$

#### (3)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p5.png" width="400" height="190" alt=""/>
</figure>

$Z_L$ を電源側、$Z_R$ を負荷側におく、$Z_R$ の消費電力が最大になるには

$Z_L = \overline{Z_R}$ となればよい

$Z_L = \frac{18 - 3j}{17}$

$\overline{Z_R} = \frac{17R + 2 - j(8 + X)}{17}$

実部と虚部を比較して

$$
\left \{
\begin{aligned}
&17R + 2 = 18 \\
&8 + X = 3
\end{aligned}
\right.
$$

$$
\left \{
\begin{aligned}
&R = \frac{16}{17} \\
&X = -5
\end{aligned}
\right.
$$

### 【問 3】
#### (1)
$1 - 1'$ の左の電圧源を短絡、電流源を開放する

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p6.png" width="355" height="200" alt=""/>
</figure>

$$
\begin{aligned}
Z_0 &= R + R//j\omega L \\
&= \frac{2R \cdot j\omega L}{2R + j\omega L}
\end{aligned}
$$

$$
\begin{aligned}
\frac{1}{Z_0} = Y_0 &= \frac{2R + j\omega L}{j2R\omega L} \\
&= \frac{-j2R\omega L(2R + j\omega L)}{j2R\omega L \times (-j2R\omega L)} \\
&= \frac{2R\omega^2L^2 - j4R^2\omega L}{4R^2\omega^2L^2} \\
&= \frac{2R\omega L(\omega L - j2R)}{4R^2\omega^2L^2} \\
&= \frac{\omega L - j2R}{2R\omega L}
\end{aligned}
$$

##### (i)
J のみ残したとき

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p7.png" width="390" height="260" alt=""/>
</figure>

$I_J = \frac{R}{R + R}J = \frac{1}{2}J$

##### (ii)
$E$ を残したとき

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p8.png" width="435" height="340" alt=""/>
</figure>

$I_E = \frac{E}{2R}$

##### (iii)
$E'$ を残したとき

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_circuit_theory_p9.png" width="420" height="265" alt=""/>
</figure>

$I_E = -\frac{E}{2R}$

$J_0 = \frac{1}{2}J + \frac{E}{2R} - \frac{E}{2R} = \frac{1}{2}J$

#### (2)
(1) より $1-1'$ 間の電圧は、

$$
\begin{aligned}
V &= \frac{J_0}{Y_0 + \frac{1}{R}} \\
&= \frac{\frac{1}{2}J}{\frac{\omega L - j2R}{2R\omega L} + \frac{1}{R}} \\
&= \frac{R\omega LJ}{\omega L - j2R + 2\omega L} \\
&= \frac{R\omega LJ}{3\omega L - j2R}
\end{aligned}
$$

$I = \frac{V}{R}$ より、

$$
I = \frac{\omega L}{3\omega L - j2R}J
$$

### 【問 4】
#### (1)
$e(t) = i(t) + L\frac{di(t)}{dt}$

定常状態なので、$\frac{Ldi(t)}{dt} = 0$

$e(t) = i(t)$

$50\sin t = i(t)$

$i(+0) = 0$

#### (2)

$$
\frac{di(t)}{dt} = 3i'(t)
$$

$$
\begin{aligned}
e(t) &= i(t) + i'(t) + 3i'(t) \\
e(t) &= i(t) + 4i'(t) \\
e(t) &= i(t) + 4 \cdot \frac{1}{3}\frac{di(t)}{dt} \\
e(t) &= i(t) + \frac{4}{3}\frac{di(t)}{dt} \\
\frac{3}{4}e(t) &= \frac{di(t)}{dt} + \frac{3}{4}i(t) \\
\frac{75}{2}\sin t &= \frac{di(t)}{dt} + \frac{3}{4}i(t) \\
\end{aligned}
$$

$i(t) = i_s(t) + i_f(t)$

$i_s(t)$ は $i_s(t) = A\sin t + B\cos t$ とおくと

$\frac{di_s(t)}{dt} = A\cos t - B\sin t$

$$
\begin{aligned}
\frac{75}{2}\sin t &= A\cos t - B\sin t + \frac{3}{4}(A\sin t + B\cos t) \\
\frac{75}{2}\sin t &= (\frac{3}{4}A - B)\sin t + (A + \frac{3}{4}B)\cos t
\end{aligned}
$$

$$
\left \{
\begin{aligned}
&\frac{75}{2} = \frac{3}{4}A - B \\
&0 = A + \frac{3}{4}B \\
\end{aligned}
\right. \Rightarrow 
\left \{
\begin{aligned}
&A = 18 \\
&B = -24
\end{aligned}
\right.
$$

$i_s(t) = 18\sin t - 24\cos t$

次に $i_s(t)$ を求める

特性方程式より、

$0 = \lambda + \frac{3}{4} \Rightarrow \lambda = -\frac{3}{4}$

$i(t) = 18\sin t - 24\cos t + Ce^{-\frac{3}{4}t}$

(1) より $i(0) = 0$ より、

$0 = -24 + C \Rightarrow C = 24$

$i(t) = 18\sin t -24\cos t + 24e^{-\frac{3}{4}t}(t > 0)$