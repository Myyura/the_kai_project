---
sidebar_label: "2019年度 電気回路"
sidebar_position: 9
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 電気回路


## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ の回路について, 以下の問いに答えよ。ただし, 電源電圧 $E$ と電流 $I_2$ の位相差は $\arg(E/I_2) = 0$ である。

(1) $R_1,R_2,X_1,X_2$ の問の関係式を示せ。

(2) $|I_1| = 2\text{A},|I_2| = 1\text{A},|V| = 4\text{V},|E| = 8\text{V}$ のとき, $R_1,R_2.X_1,X_2$ の各値を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p1.png" width="506" height="452" alt=""/>
</figure>

### 【問 2】
図 $2$ の回路について, 以下の問いに答えよ。ただし, 電源電圧 $E$ 角周波数を $\omega$ とする。

(1) 抵抗 $R_L$ の電流 $I$ と消費電力 $P$ を求めよ。

(2) リアクタンス $X$ が可変であるとき, 消費電力 $P$ が最大となるような $X$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p2.png" width="580" height="360" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路について, 以下の問いに答えよ。ただし, 電源電圧 $E$ 角周波数を $\omega$ とする。

(1) 抵抗 $r$ の電流 $I$ を求めよ。

(2) $z_0 = R,z_1 = jX_1,z_2 = -jX_2$ のとき, $E$ と $I$ の位相差が $\arg(E/I_2) = 0$ となる条件を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p3.png" width="386" height="355" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路について, 以下の問いに答えよ。ただし, $E = \sqrt{3}/2\text{V},R_1 = R_2 = 2\Omega,C = 4\text{F},L = 1 \text{H}$ とする。

(1) スイッチ $S_2$ を開いたまま, 時刻 $t = 0$ においてスイッチ $S_1$ を閉じる.このとき, $t > 0$ における電荷 $q(t)$ を求めよ.ただし, $q(0) = \frac{1}{2}CE$ とする。

(2) $S_2$ を開いたまま $S_1$ を閉じて回路が定常状態に達した後, $t = 0$ において $S_1$ を開くと同時に $S_2$ を閉じる. このとき, $t > 0$ における電流 $i(t)$ を求めよ.

(3) (2) で求めた $i(t)$ のきさが最大となる時刻 $t$ を求めよ.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p4.png" width="556" height="336" alt=""/>
</figure>

## **Kai** 
### 【問 1】
電源電圧 $E$ と電流 $I_2$ の位相差は $\arg(\frac{E}{I_2}) = 0$ である。

#### (1) 
$R_1,R_2,X_1,X_2$ の問の関係式を示せ

回路より、

$$
\begin{align}
&R_2I_2 = jX_2(I_1 - I_2) \tag{①} \\
&(R_2 + jX_2)I_2 = jX_2I_1 \tag{①'} \\
&E = \{R_1 + jX_1 + (R_2 // jX_2)\}I_1 \tag{②} \\
&E = (R_1 + jX_1 + \frac{jR_2X_2}{R_2 + jX_2})I_1 \tag{②'}
\end{align}
$$

①' $\rightarrow$ ②' に代入

$$
\begin{aligned}
E &= (R_1 + jX_1 + \frac{jR_2X_2}{R_2 + jX_2}) \times \frac{R_2 + jX_2}{jX_2}I_2 \\
\frac{E}{I_2} &= \frac{(R_1 + jX_1)(R_2 + jX_2)}{jX_2} + \frac{jX_2R_2}{jX_2} \\
\frac{E}{I_2} &= \frac{R_1R_2 - X_1X_2 + j(R_1X_2 + X_1R_2 + X_2R_2)}{jX_2} \\
\frac{E}{I_2} &= \frac{R_1X_2 + X_1R_2 + X_2R_2 + j(X_1X_2 - R_1R_2)}{X_2}
\end{aligned}
$$

$\arg(\frac{E}{I_2}) = 0$ より、$\frac{E}{I_2}$ は虚部は $0$ なので、

$$
\begin{align}
&X_1X_2 - R_1R_2 = 0 \notag\\
&X_1X_2 = R_1R_2 \tag{*}
\end{align}
$$

#### (2)
(1) より、

$$
\begin{aligned}
\frac{E}{I_2} &= \frac{R_1X_2 + X_1R_2 + X_2R_2}{X_2} \\
&= R_1 + R_2 + \frac{X_1R_2}{X_2} \\
\bigg|\frac{E}{I_2}\bigg| &= R_1 + R_2 + \frac{X_1R_2}{X_2} = 8
\end{aligned}
$$

$$
\begin{align}
R_1 + R_2 + \frac{X_1R_2}{X_2} = 8 \tag{①}
\end{align}
$$

$$
\begin{aligned}
I_1 &= \frac{R_2 + jX_2}{jX_2}I_2 \\
\bigg|\frac{I_1}{I_2}\bigg| &= \frac{\sqrt{R_2^2 + X_2^2}}{X_2} \\
2 &= \frac{\sqrt{R_2^2 + X_2^2}}{X_2} \\
2X_2 &= \sqrt{R_2^2 + X_2^2} \\
R_2^2 &+ X_2^2 = 4X_2^2 \\
R_2^2 &= 3X_2^2 \\
\end{aligned}
$$

$X_2 > 0$ より、

$$
\begin{align}
R_2 = \sqrt{3}X_2 \tag{②}
\end{align}
$$

回路より、

$$
\begin{align}
\text{V} &= (R_1 + jX_1)I_1 \notag \\
\frac{\text{V}}{I_1} &= R_1 + jX_1 \notag \\
\bigg|\frac{\text{V}}{I_1}\bigg| &= \sqrt{R_1^2 + X_1^2} \notag \\
2 &= \sqrt{R_1^2 + X_1^2} \notag \\
4 &= R_1^2 + X_1^2 \tag{③}
\end{align}
$$

② を (1) の ($*$) に代入すると、

$$
X_1X_2 = R_1 \times \sqrt{3}X_2
$$

$X_2 > 0$ より、

$$
X_1 = \sqrt{3}R_1
$$

これを ③ に代入すると、

$$
\begin{aligned}
4 &= R_1^2 + 3R_1^2 \\
4R_1^2 &= 4 \\
R_1^2 &= 1
\end{aligned}
$$

$R_1 > 0$ より、

$$
\begin{align}
R_1 = 1 \tag{④} \\
③\text{より、 }X_1 = \sqrt{3} \tag{⑤}
\end{align}
$$

④、⑤ を ① に代入すると、

$$
\begin{aligned}
&1 + R_2 + \frac{\sqrt{3}R_2}{X_2} = 8 \\
&R_2 + \frac{\sqrt{3}R_2}{X_2} = 7 \\
&\sqrt{3}X_2 + \frac{3X_2}{X_2} = 7 \\
&\sqrt{3}X_2 = 4 \\
&X_2 = \frac{4}{\sqrt{3}}
\end{aligned}
$$

よって、

$$
\begin{aligned}
R_1 &= 1[\Omega] \\
R_2 &= 4[\Omega] \\
X_1 &= \sqrt{3}[\Omega] \\
X_2 &= \frac{4}{\sqrt{3}}[\Omega]
\end{aligned}
$$

### 【問 2】
#### (1)
図のように、$I_1,V_1,I_2,V_2$ を定義する。

$$
\begin{align}
V_1 = j\omega L_1I_1 + j\omega MI_2 \tag{①} \\
V_2 = j\omega L_2I_2 + j\omega MI_1 \tag{②} \\
E = R_1I_1 + V_1 \tag{③}
\end{align}
$$

① $\rightarrow$ ③ に代入すると、

$$
\begin{align}
E = R_1I_1 + j\omega L_1I_1 + j\omega MI_2 \notag \\
E = (R_1 + j\omega L_1)I_1 + j\omega MI_2 \tag{④} \\
V_2 = -I_2(jX + R_L) \tag{⑤}
\end{align}
$$

⑤ $\rightarrow$ ② に代入

$$
\begin{align}
-jXI_2 - R_LI_2 = j\omega L_2I_2 + j\omega MI_1 \notag \\
j\omega MI_1 + (R_L + jX + j\omega L_2)I_2 = 0 \tag{⑥}
\end{align}
$$

④、⑥より、

$$
\begin{pmatrix}
R_1 + j\omega L_1 & j\omega M \\
j\omega M & R_L + jX + j\omega L_2 \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\ I_2
\end{pmatrix} = 
\begin{pmatrix}
E \\ 0
\end{pmatrix}
$$

クラメルの公式より、

$$
I_2 = \frac{1}{\det|A|}
\begin{vmatrix}
R_1 + j\omega L_1 & E \\
j\omega M & 0
\end{vmatrix}
$$

$$
I_2 = \frac{1}{\det|A|}(-j\omega ME)
$$

$$
\begin{aligned}
\det(A) &= 
\begin{vmatrix}
R_1 + j\omega L_1 & j\omega M \\
j \omega M & R_L + j(X + \omega L_2) \\
\end{vmatrix} \\
&= (R_1 + j\omega L_1)(R_L + j(X + \omega L_2)) - \omega^2 M^2
\end{aligned}
$$

$I = -I_2$ より、

$$
I = \frac{j \omega ME}{R_1R_L - \omega XL_1 - \omega^2L_1L_2 - \omega^2M^2 + j(XR_1 + \omega L_2R_1 + \omega L_1R_L)}
$$

$P = |I|^2R_L$ より、

$$
P = \frac{\omega^2 M^2R_L}{(R_1R_L-\omega XL_1-\omega^2L_1L_2 - \omega^2M^2)^2 + (XR_1 + \omega L_2R_1 + \omega L_1R_1)^2}|E|^2
$$

#### (2)
(1) で求めた $P$ の分母が最小になればよい。

$$
P = \frac{\omega^2 M^2R_L}{\{\omega(R_1L_2 + R_LL_1) + R_1X\}^2 + \{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\}^2}|E|^2
$$

$$
f(X) = \{\omega(R_1L_2 + R_LL_1) + R_1X\}^2 + \{R_1R_2 + \omega^2(M^2 - L_1L_2) - \omega L_1X\}^2
$$

$$
\frac{\partial f(X)}{\partial X} = 2\{\omega(R_1L_2 + R_LL_1) + R_1X\} \cdot R_1 + 2\{R_1R_2 + \omega^2(M^2 - L_1L_2) - \omega L_1X\} \cdot (-\omega L_1)
$$

$\frac{\partial f(X)}{\partial X} = 0$ になる $X$ を求める。

$$
\begin{aligned}
\{\omega(R_1L_2 + R_LL_1) + R_1X\}R_1 &= \omega L_1\{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\} \\
\omega R_1(R_1L_2 + R_LL_1) + R_1^2X &= R_1R_L\omega L_1 + \omega^3 L_1(M^2 - L_1L_2) - \omega^2 L_1^2X \\
(R_1^2 + \omega^2L_1^2)X &= \omega^3L_1M^2 - \omega^3L_1^2L_2 - \omega R_L^2L_2 \\
(R_1^2 + \omega^2L_1^2)X &= \omega^3L_1M^2 - \omega L_2(\omega^2L_1^2 + R_1^2) \\
X &= \frac{\omega^3L_1M^2}{R_1^2 + \omega^2 L_1^2} - \omega L_2 \\
&= \omega\bigg\{\frac{\omega^2L_1M^2}{R_1^2 + \omega^2L_1^2} - L_2\bigg\}
\end{aligned}
$$

### 【問 3】
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p5.png" width="420" height="660" alt=""/>
</figure>

#### (1)
図のように節点番号と電流を $I_0 \sim I_5$ と定義文字が7つあるので、7つの方程式を立てる

$$
\begin{align}
&I_0 + I_1 = I_3 + I_5 \tag{①} \\
&I_1 = I + I_2 \tag{②} \\
&I_2 = I_3 + I_4 \tag{③} \\
&I_5 = I_4 + I \tag{④} \\
&E = Z_0(I_0 + I_3) \tag{⑤} \\
&rI = Z_1I_2 + Z_2I_4 \tag{⑥} \\
&E = Z_1I_1 + rI + Z_2I_5 \tag{⑦} \\
\end{align}
$$

② を用いて、$I_1$ を消去

① より、

$$
\begin{align}
I_0 + I + I_2 = I_3 + I_5 \tag{①'}
\end{align}
$$

⑦ より、

$$
\begin{align}
E &= Z_1(I_1 + I_2) + rI + Z_2I_5 \notag \\
E &= (Z_1 + r)I + Z_1I_2 + Z_2I_5 \tag{⑦'}
\end{align}
$$

③ を用いて、$I_2$ を消去

①' に代入すると、

$$
\begin{align}
I_0 + I + I_3 + I_4 &= I_3 + I_5 \notag \\
I_0 + I + I_4 &= I_5 \tag{⑧}
\end{align}
$$

⑥ に代入

$$
\begin{align}
rI &= Z_1(I_3 + I_4) + Z_2I_4 \notag \\
r_I &= Z_1I_3 + (Z_1 + Z_2)I_4 \tag{⑥'}
\end{align}
$$

⑦' に代入

$$
\begin{align}
E = (Z_1 + r)I + Z_1(I_3 + I_4) + Z_2I_5 \tag{⑦''}
\end{align}
$$

④ を用いて、$I_3$ を消去

⑧ に代入

$$
\begin{align}
I_0 + I + I_4 = I_4 + I \Leftrightarrow I_0 = 0 \tag{⑨}
\end{align}
$$

⑦'' に代入

$$
\begin{align}
E &= (Z_1 + r)I + Z_1(I_3 + I_4) + Z_2(I_4 + I) \notag \\
E &= (Z_1 + Z_2 + r)I + Z_1I_3 + (Z_1 + Z_2)I_4 \tag{⑦'''}
\end{align}
$$

⑨ を用いて、$I_0$ を消去

⑤ より、

$$
\begin{align}
E = Z_0I_3 \notag \\
\therefore \ I_3 = \frac{E}{Z_0} \tag{⑩}
\end{align}
$$

⑩ を用いて、$I_3$ を消去

⑥' より、

$$
rI = Z_1 \cdot \frac{E}{Z_0} + (Z_1 + Z_2)I_4 \tag{⑥''}
$$

⑦'' より、

$$
\begin{align}
E = (Z_1 + Z_2 + r)I + \frac{Z_1}{Z_0}E + (Z_1 + Z_2)I_4 \notag \\
\frac{Z_0 - Z_1}{Z_0}E - (Z_1 + Z_2 + r)I = (Z_1 + Z_2)I_4 \tag{⑪}
\end{align}
$$

⑪ を ⑥'' に代入 $(Z_1 + Z_2)I_4$ を消去

$$
\begin{aligned}
rI &= \frac{Z_1}{Z_0}E + E - \frac{Z_1}{Z_0}E - (Z_1 + Z_2 + r)I \\
rI &= E - (Z_1 + Z_2 + r)I \\
&\therefore I = \frac{E}{Z_1 + Z_2 + 2r}
\end{aligned}
$$

#### (2)
(1) の結果から、

$$
I = \frac{E}{Z_1 + Z_2 + 2r}
$$

$$
Z_1 + Z_2 + 2r = \frac{E}{I} \Leftrightarrow \arg(\frac{E}{2}) = \arg(Z_1 + Z_2 + 2r)
$$

両辺の $\arg$ をとる

$$
\arg(Z_1 + Z_2 + 2r) = 0 \Leftrightarrow \arg(jX_1 - jX_2 + 2r) = 0
$$

虚部が $0$ であればよい。

$$
\begin{aligned}
X_1 - X_2 & = 0 \\
X_1 &= X_2
\end{aligned}
$$

### 【問 4】
#### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p6.png" width="396" height="327" alt=""/>
</figure>

$t > 0$ における $q(t)$

$$
\begin{align}
E &= R_1i(t) + \frac{q(t)}{C} \tag{①}\\
i(t) &= \frac{dq(t)}{dt} \tag{②}
\end{align}
$$

①、② より、

$$
\begin{aligned}
E &= R_1\frac{dq(t)}{dt} + \frac{q(t)}{C} \\
\frac{E}{R_1} &= \frac{dq(t)}{dt} + \frac{1}{CR_1}q(t) \\
q(t) &= q_s(t) + q_f(t) \\
q_s(t) &= CE \\
q_f(t) &= Ae^{-\frac{t}{CR_1}} \\
q(t) &= CE +  Ae^{-\frac{t}{CR_1}} \\
\end{aligned}
$$

$q(0) = \frac{1}{2}CE$ より、

$$
\begin{aligned}
\frac{1}{2}CE &= CE + A \\
A &= -\frac{1}{2}CE \\
q(T) &= CE - \frac{1}{2}CE e^{-\frac{t}{CR_1}} \\
&= CE (1 - \frac{1}{2}CE e^{-\frac{t}{CR_1}})
\end{aligned}
$$

変数を全て、代入するて。

$$
q(t) = 2\sqrt{3}(1 - \frac{1}{2}e^{-\frac{t}{8}})\ (t > 0)
$$

#### (2)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p7.png" width="387" height="223" alt=""/>
</figure>

$q(-0) = 2\sqrt{3},i(0) = 0$

電荷量保存則より、

$$
\begin{aligned}
q(0) &= 2\sqrt{3},i(0) = 0 \\
\frac{1}{C}q(t) &= -R_2i(t) - L\frac{di(t)}{dt} \\
\end{aligned}
$$

$i(t) = \frac{dq(t)}{dt}$ より、

$$
\frac{1}{C}q(t) + R_2i(t) + L\frac{di(t)}{dt} = 0
$$

$$
L \frac{d^2q(t)}{dt^2} + R_2\frac{dq(t)}{dt} + \frac{1}{C}q(t) = 0
$$

$L = 1,R_2 = 2$ を代入すると、

$$
\frac{d^2q(t)}{dt^2} + 2\frac{dq(t)}{dt} + \frac{1}{C}q(t) = 0
$$

特性方程式を解いて、

$$
\lambda^2 + 2\lambda + \frac{1}{4} = 0
$$

$$
\lambda = -1 \pm \frac{\sqrt{3}}{2}
$$

$$
\lambda_1 = -1 + \frac{\sqrt{3}}{2},\lambda_2 = -1 - \frac{\sqrt{3}}{2}
$$

$$
\begin{aligned}
q(t) &= A\exp(-1 + \frac{\sqrt{3}}{2})t + B\exp(-1 - \frac{\sqrt{3}}{2})t \\
i(t) &= A(-1 + \frac{\sqrt{3}}{2})\exp(-1 + \frac{\sqrt{3}}{2})t + B(-1 - \frac{\sqrt{3}}{2})\exp(-1 - \frac{\sqrt{3}}{2})t
\end{aligned}
$$

$q(0) = 2\sqrt{3},i(0) = 0$ より、

$$
\left \{
\begin{aligned}
&2\sqrt{3} = A + B \\
&0 = A (-1 + \frac{\sqrt{3}}{2}) + B(-1 - \frac{\sqrt{3}}{2})
\end{aligned}
\right.
$$

$$
A = \sqrt{3} + 2,B = \sqrt{3} - 2
$$

よって、$i(t) = \frac{1}{2}\exp(-1 - \frac{\sqrt{3}}{2})t - \frac{1}{2}\exp(-1 + \frac{\sqrt{3}}{2})t \quad (t > 0)$

#### (3)
絶対値をとる(大きさなので)

$$
i(t) = \frac{1}{2}[\exp\{(-1 - \frac{\sqrt{3}}{2})t\} - \exp\{(-1 + \frac{\sqrt{3}}{2})t\}]
$$

$t > 0$ における、$|i(t)|$ が最大となるのは、

$\frac{d}{dt}\bigg|i(t)\bigg| = 0$ かつ、$\frac{d^2}{dt^2}\bigg|i(t)\bigg| < 0$ をみたす $t$ のとき  

$$
\begin{aligned}
\frac{d}{dt}\bigg|i(t)\bigg| &= \frac{1}{2}
\bigg[(-1 + \frac{\sqrt{3}}{2})\exp\{(-1 + \frac{\sqrt{3}}{2})t\} + (1 + \frac{\sqrt{3}}{2})\exp\{(-1 - \frac{\sqrt{3}}{2})t\}\bigg] \\
\frac{d^2}{d^2t^2}\bigg|i(t)\bigg| &= \frac{1}{2}\bigg[(-1 + \frac{\sqrt{3}}{2})^2\exp\{(-1 + \frac{\sqrt{3}}{2})t\} - (1 + \frac{\sqrt{3}}{2})^2\exp\{(-1 - \frac{\sqrt{3}}{2})t\}\bigg] 
\end{aligned}
$$

$$
A = \frac{1}{2}(-1 + \frac{\sqrt{3}}{2})^2\exp\{(-1 + \frac{\sqrt{3}}{2})t\}\quad,
B = (1 + \frac{\sqrt{3}}{2})^2\exp\{(-1 - \frac{\sqrt{3}}{2})t\}
$$

$\frac{d}{dt}\bigg|i(t)\bigg| = 0$ から、

$$
(-2 + \sqrt{3})\exp\{(-1 + \frac{\sqrt{3}}{2})t\}\exp\{(1 + \frac{\sqrt{3}}{2})t\} + 2 + \sqrt{3} = 0
$$

$$
\exp(\sqrt{3}t) = \frac{2 + \sqrt{3}}{2 - \sqrt{3}} = (2 + \sqrt{3})^2
$$

両辺の $\log$ をとる。

$$
\begin{aligned}
\sqrt{3}t &= 2\log(2 + \sqrt{3}) \\
t &= \frac{2}{\sqrt{3}}\log(2 + \sqrt{3})
\end{aligned}
$$

$t = \frac{2}{\sqrt{3}}\log(2 + \sqrt{3})$ のとき、 $\frac{A}{B}$ を考える。

$$
\begin{aligned}
\frac{A}{B} &= \bigg(\frac{-1 + \frac{\sqrt{3}}{2}}{1 + \frac{\sqrt{3}}{2}}\bigg)^2\exp\sqrt{3} t \\
&= \bigg(\frac{-2 + \sqrt{3}}{2 + \sqrt{3}}\bigg)^2 \exp(2\log(2 + \sqrt{3})) \\
&= \{-(2 - \sqrt{3})^2\}^2 (2 + \sqrt{3})^2 \\
&= (2 - \sqrt{3})^4 (2 + \sqrt{3})^2 \\
&= (2 - \sqrt{3})^2 < 1 \Rightarrow \frac{A}{B} < 1 
\end{aligned}
$$

$$
\frac{A}{B} < 1 \Leftrightarrow A < B \Leftrightarrow A - B < 0
$$

以上から、求める時刻 $t$ は,

$$
t > \frac{2}{\sqrt{3}}\log(2 + \sqrt{3})
$$