---
sidebar_label: "2017年度 電気回路"
sidebar_position: 2
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2017年度 電気回路


## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ の回路において，電源電圧 $E$ と電流 $I$ の位相差は $\arg(\frac{E}{I}) = 0$ であり，かつ $X_1 \neq X_2$ である．以下の問いに答えよ．

(1) $R_1,X_1,X_2$ の間の関係を示せ．

(2) $|E| = 8\text{V},|I| = 2\text{A},\frac{|I_1|}{I_2} = 2$ のとき，$R, X_1, X_2$ の値を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p1.png" width="280" height="210" alt=""/>
</figure>

### 【問 2】
図 $2$ の回路について，以下の問いに答えよ．

(1) $\begin{pmatrix}V_1 \\I_1\end{pmatrix} = \begin{pmatrix}a & b \\c & d\end{pmatrix}\begin{pmatrix}V_2 \\I_2\end{pmatrix}$ のとき，$Z$ と $Y$ を用いて行列 $\begin{pmatrix}a & b \\c & d\end{pmatrix}$ を表せ．

(2) 端子対 $2-2’$ にインピーダンス $Z_K$ をつないだところ，端子対 $1-1’$ から右側を見たインピーダンスも $Z_K$ となった．$Z$ と $Y$ を用いて $Z_K$ を表せ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p2.png" width="400" height="267" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路について，以下の問いに答えよ．ただし，電源の角周波数を $\omega$ とする．

(1) 節点電位 $V_a, V_b, V_c$ に対する回路方程式を立てよ．

(2) $V_b = V_c$ のとき，$R_0 \sim R_5,C_3,C_4,\omega$ が
満たすべき条件を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p3.png" width="405" height="300" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路において，時刻 $t = 0$ でスイッチを $S_1$ から $S_2$ に切り替えるとする．ただし，$t < 0$ の回路は定常状態にあるとする．また，$e_1(t) = 4\sin2t\text{ V},E_2 = 8\text{ V},R_1 = 2\Omega ,R_2 = 4\Omega,L = 1\text{ H},C = 0.125 \text{ F}$ とする．以下の問いに答えよ． 

(1) スイッチを切り替える前の電荷 $q(t)(t < 0)$ を求めよ．

(2) スイッチを切り替えた後の電荷 $q(t)(t > 0)$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p4.png" width="400" height="308" alt=""/>
</figure>

## **Kai** 
### 【問 1】
#### (1)

$$
\begin{aligned}
E &= \frac{(jX_1 + R)(-jX_2 + R)}{(jX_1 + R) + (-jX_2 + R)}I \\
\frac{E}{I} &= \frac{(R + jX_1)(R - jX_2)}{2R + j(X_1 - X_2)} \\
&= \frac{(R + jX_1)(R - jX_2)[2R - j(X_1 - X_2)]}{4R^2 + (X_1 - X_2)^2} \\
&= \frac{(R^2 - RjX_2 + jX_1R _+ X_1X_2)(2R - j(X_1 - X_2))}{4R^2 + (X_1 - X_2)^2}
\end{aligned}
$$

$\arg(\frac{E}{I}) = 0$ から、$\frac{E}{I}$ の虚部が $0$ となる。

$$
-jR^2(X_1 - X_2) - 2R^2jX_2 + 2R^2jX_1 - jX_1X_2(X_1 - X_2)
$$

$$
j[-R^2(X_1 - X_2) - 2R^2X_2 + 2R^2X_1 - X_1X_2(X_1 - X_2)]
$$

$$
j[(X_2 - X_1)(R^2 + X_1X_2) - 2R^2(X_2 - X_1)]
$$

$$
(X_2 - X_1)(R^2 + X_1X_2) - 2R^2(X_2 - X_1) = 0
$$

$X_2 \neq X_1$ より、

$$
R^2 + X_1X_2 - 2R^2 = 0
$$

$$
\begin{align}
R^2 = X_1X_2 \tag{①}
\end{align}
$$

#### (2)

$$
\begin{aligned}
\frac{E}{I} &= \frac{R^2 + X_1X_2 + jR(X_1 - X_2)}{2R + j(X_1 - X_2)} \\
\bigg|\frac{E}{I}\bigg|^2 &= \bigg|\frac{R^2 + X_1X_2 + jR(X_1 - X_2)}{2R + j(X_1 - X_2)}\bigg| \\
16 &= \frac{(R^2 + X_1X_2)^2 + R^2(X_1 - X_2)^2}{4R^2 + (X_1 - X_2)^2} \\
16 &= \frac{4X_1^2X_2^2 + X_1X_2(X_1 - X_2)^2}{(X_1 + X_2)^2} \\
16 &= \frac{X_1X_2(X_1 + X_2)^2}{(X_1 + X_2)^2} \\
16 &= X_1X_2
\end{aligned}
$$

$$
\begin{align}
X_2 = \frac{16}{X_1} \tag{②}
\end{align}
$$

①、② より、

$$
R^2 = 16
$$

$$
\therefore R = 4
$$

$$
\begin{aligned}
(R + jX_1)I_1 &= (R - jX_2)I_2 \\
\frac{I_1}{I_2} &= \frac{R - jX_2}{R + jX_1} \\
\bigg|\frac{I_1}{I_2}\bigg|^2 &= \bigg|\frac{R - jX_2}{R + jX_1}\bigg|^2 \\
4 &= \frac{R^2 + X_2^2}{R^2 + X_1^2} \\
3R^2 &= X_2^2 - 4X_1^2
\end{aligned}
$$

$R = 4,X_2 = \frac{16}{X_1}$ より、

$$
48 = \frac{16^2}{X_1^2} - 4X_1^2
$$

$$
X_1^4 + 12X_1^2 - 64 = 0
$$

$$
X_1^2 = -6 \pm 10
$$

$$
X_1^2 > 0 より、
$$

$$
X_1^2 = 4
$$

$$
\therefore X_1 = 2
$$

② より、$X_2 = 8$

以上から、$R = 4,X_1 = 2,X_2 = 8$

### 【問 2】
#### (1)
$\begin{pmatrix}V_1 \\I_1\end{pmatrix} = \begin{pmatrix}a & b \\c & d\end{pmatrix}\begin{pmatrix}V_2 \\I_2\end{pmatrix}$ のとき，

$$
V_1 = aV_2 + bI_2
$$

$$
I_1 = cV_2 + dI_2
$$

$I_2 = 0$ のとき、つまり端子対  $2-2’$ 間が $\text{open}$ のときを考える

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p5.png" width="400" height="500" alt=""/>
</figure>

$$
\begin{align}
a &= \frac{V_1}{V_2},c = \frac{I_1}{V_2} \notag \\
V_2 &= \frac{1}{2}I_1Z' - \frac{1}{2}I_1Z \notag \\
V_2 &= \frac{1}{2}(Z'- Z) \notag \\
I_1 &= \frac{2V_2}{Z' - Z} \Leftrightarrow c = \frac{I_1}{V_2} = \frac{2}{Z' - Z} = \frac{2Y}{1 - YZ} \notag \\
V_1 &= \frac{Z + Z'}{2}I_1 \Leftrightarrow I_1 = \frac{2}{Z + Z'}V_1 \tag{1}
\end{align}
$$

$\frac{I_1}{V_2} = \frac{2}{Z' - Z}$ に (1) を代入

$$
\frac{2}{Z + Z'}\frac{V_1}{V_2} = \frac{2}{z' - z} \Leftrightarrow a = \frac{V_1}{V_2} = \frac{Z' + Z}{Z' - Z} = \frac{1 + YZ}{1 - YZ}
$$

$V_2 = 0$ のとき、つまり端子対  $2-2’$ 間が $\text{short}$ のときを考える

このとき、$b = \frac{V_1}{I_2},d = \frac{I_1}{I_2}$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p6.png" width="503" height="500" alt=""/>
</figure>

$$
\begin{align}
I_3Z' &= I_4Z \notag \\
I_3 &= \frac{Z}{Z'}I_4 \tag{1} \\
\frac{Z'}{Z + Z'}I_1 &= I_2 + I_3 \tag{2} \\
\frac{Z'}{Z + Z'}I_1 + I_2 &= I_4 \tag{3} \\
V_1 &= 2 \times \frac{ZZ'}{Z + Z'}I_1 \tag{4} \\
I_1 &= \frac{Z + Z'}{2ZZ'}V_1 \tag{4'}
\end{align}
$$

(1) $\rightarrow$ (2) に代入

$$
\begin{align}
\frac{Z'}{Z + Z'}I_1 = I_2 + \frac{Z}{Z'}I_4 \tag{5}
\end{align}
$$

(5) $\rightarrow$ (3) に代入

$$
\begin{aligned}
\frac{Z'}{Z + Z'}I_1 &= I_2 + \frac{Z}{Z'}(\frac{Z}{Z + Z'}I_1 + I_2) \\
\frac{Z'}{Z + Z'}I_1 &= I_2 + \frac{Z}{Z'}(\frac{Z}{Z + Z'}I_1 + I_2) \\
\frac{Z'}{Z + Z'}I_1 - \frac{Z}{Z'}\cdot \frac{Z}{Z + Z'}I_1 &= I_2 + \frac{Z}{Z'}I_2 \\
\frac{Z'^2 - Z^2}{Z + Z'}I_1 &= (Z' + Z)I_2 \\
\frac{I_1}{I_2} &= \frac{(Z + Z')^2}{Z'^2 - Z^2} = \frac{Z' + Z}{Z' - Z} \\
d &= \frac{1 + YZ}{1 - YZ} \\
b &= \frac{2ZZ'}{Z' - Z} = \frac{2Z}{1 - YZ}
\end{aligned}
$$

以上から、行列 $\begin{pmatrix}a & b \\c & d\end{pmatrix}$ は

$$
\begin{pmatrix}a & b \\c & d\end{pmatrix} = \frac{1}{1 - YZ}
\begin{pmatrix}
1 + YZ & 2Z \\
2Y & 1 + YZ
\end{pmatrix}
$$

#### (2)

$$
\begin{aligned}
\frac{V_1}{I_1} &= \frac{aV_2 + bI_2}{cV_2 + dI_2} \\
\frac{V_1}{I_1} &= \frac{a\frac{V_2}{I_2} + b}{c\frac{V_2}{I_2} + d} \\
Z_K &= \frac{aZ_K + b}{cZ_K + d} \\
cZ_K^2 + dZ_K &= aZ_K + b   
\end{aligned}
$$

(1) より、$a = d$ より、

$$
Z_K^2 = \frac{b}{c} = \frac{Z}{Y} \Rightarrow Z_K = \sqrt{\frac{Z}{Y}}
$$

### 【問 3】
#### (1)
節点電位 $V_a,V_b,V_c$ に対して,回路方程式 

$V_a$ 関して

$$
\begin{align}
J - \frac{V_a}{R_0} = \frac{V_a - V_b}{R_1} + \frac{V_a - V_c}{R_3 + \frac{1}{j\omega C_3}} \tag{①}
\end{align}
$$

$V_b$ 関して

$$
\begin{align}
\frac{V_a - V_b}{R_1} = \frac{V_b - V_c}{R_5} + \frac{V_b}{R_2} \tag{②}
\end{align}
$$

$V_c$ 関して

$$
\begin{align}
\frac{V_a - V_c}{R_3 + \frac{1}{j\omega C_3}} + \frac{V_b - V_c}{R_5} = \frac{V_c}{\frac{1}{j\omega C_4}//R_4} \tag{③}
\end{align}
$$

#### (2)

$$
\begin{aligned}
R_1 \cdot (R_4//\frac{1}{j\omega C_4}) &= (R_3 + \frac{1}{j\omega C_3}) \cdot R_2 \\
R_1 \cdot \frac{R_4 \cdot \frac{1}{j\omega C_4}}{R_4 + \frac{1}{j\omega C_4}} &= (R_3 + \frac{1}{j\omega C_3})\cdot R_2
\end{aligned}
$$

$$
\frac{R_1R_4}{R_2} = R_3 + \frac{C_4R_4}{C_3} + j(\omega C_4R_3R_4 - \frac{1}{\omega C_3})
$$

実部、虚部を比較すると。

$$
\frac{R_1R_4}{R_2} = R_3 + \frac{C_4R_4}{C_3} \Leftrightarrow \frac{R_1R_4}{R_2} \cdot C_3 = R_3C_3 + R_4C_4 
$$

$$
\omega C_4R_2R_4 - \frac{1}{\omega C_3} = 0
$$

$$
\omega  = \frac{1}{\sqrt{C_3C_4R_3R_4}}
$$

### 【問 4】
#### (1)

$$
e_1(T) = R_1\frac{dq(t)}{dt} + L\frac{dq^2(t)}{dt^2} + \frac{1}{C}q(t) 
$$

$$
\begin{align}
4\sin2t = \frac{d^2q(t)}{dt^2} 
+ 2\frac{dq(t)}{dt} + 8q(t) \tag{*}
\end{align}
$$

定常状態に求めるから、定常解 $q_s(t)$ を求める。

$q_s(t) = A\cos2t + B\sin2t$ とおくと

$$
\begin{aligned}
\frac{dq_s(t)}{dt} &= 2B\cos2t - 2A\sin2t \\
\frac{d^2q_s(t)}{dt^2} &= -4A\cos2t - 4B\sin2t
\end{aligned}
$$

これらを $(*)$ に代入して、

$$
\begin{aligned}
4\sin2t &= -4A\cos2t - 4B\sin2t + 2(2B\cos2t - 2A\sin t) + 8(A\cos2t + B\sin2t) \\
4\sin2t &= (4A + 4B)\cos2t + (-4A + 4B)\sin2t 
\end{aligned}
$$

両辺を比較して

$$
\left \{
\begin{aligned}
&4A + 4B = 0 \\
&-4A + 4B = 4
\end{aligned}
\right.
$$

$$
\therefore A = -\frac{1}{2},B = \frac{1}{2}
$$

よって、

$$
q(t)(t < 0) = -\frac{1}{2}\cos2t + \frac{1}{2}\sin2t
$$

#### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_circuit_theory_p7.png" width="500" height="384" alt=""/>
</figure>

$$
\begin{aligned}
E_2 &= R_2I + \frac{1}{C}q(t) \\
E_2 &= R_2\frac{dq(t)}{dt} + \frac{1}{C}q(t) \\
8 &= 4 \cdot \frac{dq(t)}{dt} + 8q(t) \\
2 &= \frac{dq(t)}{dt} + 2q(t) \\
q(t) &= Ce^{-2t} + 1 
\end{aligned}
$$

電荷保存則より、$q(+0) = q(-0) = -\frac{1}{2}$ より、

$$
-\frac{1}{2} = C + 1 \rightarrow C = -\frac{3}{2}
$$

よって、

$$
q(t) = -\frac{3}{2}e^{-2t} + 1(t > 0)
$$