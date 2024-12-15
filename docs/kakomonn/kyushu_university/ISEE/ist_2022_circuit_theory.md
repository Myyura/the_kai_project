---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 電気回路
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 電気回路

## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ に示す回路において, 電流 $I_1$ と電圧 $E$ の位相差が $\arg(\frac{E}{I_1}) = \frac{\pi}{6},\big|\frac{E}{I_1}\big| = 2$ である。以下の問いに答えよ。なお, コイルの相互インダクタンスは無視する。

(1) $R_1$ および $X_1$ を求めよ。

(2) $\big|\frac{V}{E} = 1\big|$となるときの $\arg(\frac{V}{E})$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p1.png" width="250" height="350" alt=""/>
</figure>

### 【問 2】
図 $2$ の回路について, 以下の問いに答えよ。

(1) 図 $2(a)$ において, 端子対 $1-1'$ より左側をみたときのアドミタンス $Y_1$ を求めよ。

(2) 図 $2(a)$ の端子対 $1-1'$ に図 $2(b)$ に示すアドミタンス $Y_2 = G + jB$ を接続したとする。コンダクタンス $G(>0)$ およびサセプタンス $B$ は可変とする。アドミタンス $Y_2$ における最大消費電力 $P$ を最大とする $G$ および $B$ を求めよ。また, このときの消費電力 $P$ の最大値を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p2.png" width="450" height="275" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路において, 以下の問いに答えよ。ただし, 電源電圧 $E$ の角周波数を $\omega,L_1$ と $L_2$ を自己インダクタンス, $M(>0)$ を相互インダクタンスとする。

(1) 図 $3(b)$ の回路が図 $3(a)$ の点線で囲まれた $2$ 端子対回路を等価なとき, インピーダンス $Z_1,Z_2$ と $Z_3$ を $L_1,L_2,M$ を使ってそれぞれ表せ。

(2) 図 $3(a)$ の端子対 $1-1'$ から右側を見た入力インピーダンス $Z$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p3.png" width="390" height="480" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路で $t = 0$ でスイッチ $S_1$ を開くと同時にスイッチ $S_2$ を閉じたとする。$E = 2\text{ V},C = 1\text{ F},L = 1\text{ H},R_1 = 2\ \Omega,R_2 = 1\ \Omega$ の場合に関して, 以下の問いに答えよ。ただし, $v(0) = 1\text{ V}$ であり, $t = 0$ で回路は定常状態であったとする。

(1) $i(0)$ を求めよ。

(2) $v(t)(t \ge 0)$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p4.png" width="515" height="220" alt=""/>
</figure>

## **Kai** 
### 【問 1】

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p5.png" width="515" height="450" alt=""/>
</figure>

$$
\arg(\frac{E}{I_1}) = \frac{\pi}{6}
$$

$$
\begin{align}
e^{j\frac{\pi}{6}} &= \cos\frac{\pi}{6} + j\sin\frac{\pi}{6} \notag\\
&= \frac{1}{2}(\sqrt{3} + j) \notag\\
\Leftrightarrow &\text{Re}(\frac{E}{I_1}):I_{\omega}(\frac{E}{I_1}) = \sqrt{3}:1 \notag\\
&\sqrt{3}I_{\omega}(\frac{E}{I_1}) = \text{Re}(\frac{E}{I_1}) \tag{A}
\end{align}
$$

#### (1)

$$
\frac{E}{I_1} = R_1 + jX_1
$$

$$
\begin{align}
\bigg|\frac{E}{I_1}\bigg| = 2 \Leftrightarrow &\sqrt{R_1^2 + X_1^2} = 2 \notag \\
&R_1^2 + X_1^2 = 4 \tag{①}
\end{align}
$$

(A) より、

$$
\begin{align}
R_1 = \sqrt{3}X_1 \tag{②}
\end{align}
$$

①、② より、

$$
R_1 = \sqrt{3},X_1 = 1
$$

#### (2)
図 $a$ ように $V_1,V_2$ を置くと、

$$
\begin{aligned}
V &= V_1 - V_2 \\
&= \frac{R_1}{R_1 + jX_1}E - \frac{jX_2}{R_2 + jX_2}E \\
\frac{V}{E} &= \frac{R_1(R_2 + jX_2) - jX_2(R_1 + jX_1)}{(R_1 + jX_1)(R_2 + jX_2)} \\
&= \frac{R_1R_2 + X_1X_2}{R_1R_2 - X_1X_2 + j(R_1X_2 + R_2X_1)} 
\end{aligned}
$$

$R_1 = \sqrt{3},X_1 = 1$ より、

$$
\begin{align}
\frac{V}{E} &= \frac{\sqrt{3}R_2 + X_2}{\sqrt{3}R_2 - X_2 + j(R_2 + \sqrt{3}X_2)} \notag \\
&= \frac{(\sqrt{3}R_2 + X_2)[(\sqrt{3}R_2 - X_2) - j(R_2 + \sqrt{3}X_2)]}{(\sqrt{3}R_2 - X_2)^2 + (R_2 + \sqrt{3}X_2)^2} \notag \\
&= \frac{\sqrt{3}R_2 + X_2}{4(R_2^2 + X_2^2)}[(\sqrt{3}R_2 - X_2) - j(R_2 + \sqrt{3}X_2)] \tag{③} 
\end{align}
$$

$\frac{V}{E} = 1$ より、

$$
\frac{\sqrt{3}R_2 + X_2}{4(R_2^2 + X_2^2)}\sqrt{(\sqrt{3}R_2 - X_2)^2 + (R_2 + \sqrt{3}X_2)^2} = 1
$$

$$
\begin{aligned}
\frac{\sqrt{3}R_2 + X_2}{2\sqrt{R_2^2 + X_2^2}} &= 1 \\
(R_2 - \sqrt{3}X_2)^2 &= 0 \\
R_2 & = \sqrt{3}X_2 
\end{aligned}
$$

③ に代入すると、

$$
\begin{aligned}
\arg(\frac{V}{E}) &= \tan^{-1}(\frac{2\sqrt{3}X_2}{2X_2}) \\
&= \tan^{-1}(\sqrt{3}) \\
&= \frac{\pi}{3}
\end{aligned}
$$

### 【問 2】
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p6.png" width="400" height="375" alt=""/>
</figure>

$$
\begin{align}
Z_a &= Z_b \notag \\
Z_1 &= \frac{Z_aZ_b}{Z_a + Z_b} = \frac{1}{2}Z_a \notag \\
&= \frac{1}{2}(5 - j2) \tag{①} \\ 
\end{align}
$$

$$
\begin{aligned}
Y_1 = \frac{1}{Z_1} &= \frac{2}{5 - j2} \\
&= 2 \cdot \frac{5 + j2}{29} \\
&= \frac{2}{29}(5 + j2S)
\end{aligned}
$$

#### (2)

$$
\begin{align}
Y_2 = G + jB,Z_2 &= \frac{1}{G + jB} \notag \\
&= \frac{G - jB}{G^2 + B^2} \tag{②}
\end{align}
$$

インピーダンス整合条件より、

$$
\text{Re}(Z_1) = \text{Re}(Z_2),I_{\omega}(Z_1) = -I_{\omega}(Z_2)
$$

のとき、$P$ は最大となり, ①、② より、

$$
\left \{
\begin{align}
&\frac{5}{2} = \frac{G}{G^2 + B^2} \tag{③} \\
&1 = \frac{B}{G^2 + B^2} \tag{④}
\end{align}
\right.
$$

$$
\frac{③}{④} \Leftrightarrow \frac{5}{2} = \frac{G}{B} \Leftrightarrow G = \frac{5}{2}B
$$

$$
\therefore G = \frac{10}{29},B = \frac{4}{29}
$$

$$
Z_2 = \frac{2}{29}(5 - j2)
$$

$$
Z_1 + Z_2 = \frac{20}{29} = R
$$

$$
r = R|J|^2 = \frac{20}{29}|J|^2
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p7.png" width="370" height="300" alt=""/>
</figure>

### 【問 3】
#### (1)

$$
\left \{
\begin{aligned}
&V_1 = j\omega L_1I_1 - j\omega MI_2 \\
&V_2 = -j\omega MI_1 + j\omega L_2I_2
\end{aligned}
\right.
$$

$$
\begin{pmatrix}
V_1 \\ V_2
\end{pmatrix} = j\omega
\begin{pmatrix}
L_1 & -M \\
-M & L_2 \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\ I_2
\end{pmatrix}
$$

$$
\begin{pmatrix}
V_1 \\ V_2
\end{pmatrix} = 
\begin{pmatrix}
Z_1 + Z_2 & Z_2 \\
Z_2 & Z_2 + Z_3 \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\ I_2
\end{pmatrix}
$$

$$
\left \{
\begin{aligned}
&Z_2 = -M \\
&Z_1 + Z_2 = L_1 \\
&Z_2 + Z_3 = L_2 \\
\end{aligned}
\right.
\Leftrightarrow Z_1 = L_1 + M，Z_2 = -M,Z_3 = L_2 + M
$$

#### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p8.png" width="500" height="190" alt=""/>
</figure>

$Z_4$ を接続すると、

$$
\left \{
\begin{align}
&V_2 = -I_2Z_4 \tag{①} \\
&V_2 = Z_2I_1 + (Z_2 + Z_3)I_2 \tag{②}
\end{align}
\right.
$$

①、② より、

$$
\begin{aligned}
\Leftrightarrow -I_2Z_4 &= Z_2I_1 + (Z_2 + Z_3)I_2 \\
I_2 &= \frac{-Z_2}{Z_2 + Z_3 + Z_4}I_1
\end{aligned}
$$

$$
\begin{aligned}
Z = \frac{V_1}{I_1} &= Z_1 + Z_2 + Z_2 \cdot \frac{I_2}{I_1} \\
&= Z_1 + Z_2 + Z_2 \cdot \frac{-Z_2}{Z_2 + Z_3 + Z_4} \\
&= (L_1 + M) - M + (-M) \cdot \frac{-(-M)}{L_2 + Z_4} \\
&= L_1 - \frac{M^2}{L_2 + Z_4} \\
&= \frac{L_1(L_2 + Z_4) - M^2}{L_2 + Z_4}
\end{aligned}
$$

### 【問 4】
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p9.png" width="300" height="175" alt=""/>
</figure>

$$
i(-0) = \frac{E}{R_1} = \frac{2}{2} = 1
$$

$$
\therefore i(0) = 1[\text{A}]
$$

#### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p10.png" width="205" height="155" alt=""/>
</figure>

$$
\begin{aligned}
&\frac{q(t)}{C} = R_2i(t) + L\frac{di(t)}{dt} \\
\Leftrightarrow &q = i + i' \\
\Leftrightarrow &q'' + q' - q = 0 \\
&\lambda^2 + \lambda - \lambda = 0\\
&\lambda = \frac{-1 \pm \sqrt{1 - 4 \cdot 1 \cdot (-1)}}{2} = \frac{-1 \pm \sqrt{5}}{2}\\
\end{aligned}
$$

$\alpha = \frac{-1 -\sqrt{5}}{2},\beta = \frac{-1 + \sqrt{5}}{2}$ とすると、

$$
q(t) = C_1e^{\alpha t} + C_2 e^{\beta t} \quad  (C_1,C_2 \text{は定数})
$$

$$
i(t) = q'(t) = \alpha C_1e^{\alpha t} + \beta C_2 e^{\beta t}
$$

$$
\left \{
\begin{aligned}
&i(0) = 1 \\
&q(0) = 1 \\
\end{aligned}
\right. \Leftrightarrow 
\left \{
\begin{aligned}
&\alpha C_1 + \beta C_2 = 1 \\
&C_1 + C_2 = 1
\end{aligned}
\right. 
$$

$$
\therefore C_1 = \frac{\beta - 1}{\beta - \alpha},C_2 = \frac{1 - \alpha}{\beta - \alpha}
$$

$$
\therefore C_1 = \frac{\sqrt{5} - 3}{2\sqrt{5}},C_2 = \frac{\sqrt{5} + 3}{2\sqrt{5}}
$$

$$
v(t) = \frac{\sqrt{5} - 3}{2\sqrt{5}}\exp(\frac{-1 - \sqrt{5}}{2})t + \frac{\sqrt{5} + 3}{2\sqrt{5}}\exp(\frac{-1 + \sqrt{5}}{2})t
$$