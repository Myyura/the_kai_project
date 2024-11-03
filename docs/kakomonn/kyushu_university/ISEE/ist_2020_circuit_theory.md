---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年度 電気回路
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年度 電気回路


## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ の回路について, 以下の問いに答えよ。ただし, 電流 $I_1$ と電流 $I_2$ の位相差 $\arg(\frac{I_1}{I_2}) = \frac{\pi}{4},R = 1\Omega$ である。

(1) $X_1$ と $X_2$ の間の関係式を示せ。

(2) $\frac{|I_1|}{|I_2|} = \frac{2\sqrt{2}}{3}$ であるとき, $X_1,X_2$ の値を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p1.png" width="500" height="400" alt=""/>
</figure>

### 【問 2】
図 $2$ の回路について, 以下の問いに答えよ。

(1) 端子対 $1-1'$ 間を, 開放電圧 $V_0$, 内部インピーダンス $Z_0$ の等価回路と考えるとき, $V_0$ と $Z_0$ を求めよ。

(2) 端子対 $1-1'$ 間に可変インピーダンス $Z = R + jX$ を接続したとする。$R$ における消費電力 $P$ が最大となる $Z$ を求め, その時の $P$ の値を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p2.png" width="500" height="400" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路について, 以下の問いに答えよ。ただし, 電流電流 $E$ の角周波数を $\omega$ とする。

(1) 閉路電流 $I_1,I_2,I_3$ を変数に用いて閉路方程式を立てよ。

(2) 電源 $E$ から右を見たインピーダンス $Z$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p3.png" width="665" height="405" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路について, 以下の問いに答えよ。ただし, $E = 1\text{V},R_1 = R_2 = 1\Omega,C = 1\text{F},L = 1\text{H}$ とする。

(1) スイッチ $S$ を開いたまま回路が定常状態に達した後, 時刻 $t = 0$ において $S$ を閉じるとする。このとき, $t > 0$ における電流 $i_1(t)$, $i_2(t)$ をそれぞれ求めよ。

(2) スイッチ $S$ を閉じたまま回路が定常状態に達した後, $t = 0$ において $S$ を開くとする。このとき, $t > 0$ における電流 $i_1(t)$ を求めよ。

(3) 上記 (2) において, $t = 0$ から定常状態に達するまでに抵抗 $R_1$, $R_2$ で消費されるエネルギーの合計 $W$ を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p4.png" width="618" height="375" alt=""/>
</figure>

## **Kai** 
### 【問 1】
#### (1)

$$
\begin{align}
I_1 &= jX_1(I_0 - I_1) \tag{①} \\
I_2 &= -jX_2(I_0 - I_2) \tag{②} \\
\end{align}
$$

① より、

$$
\begin{aligned}
I_1 &= jX_1I_0 - jX_1I_1 \\
jX_1I_0 &= (1 + jX_1)I_1 \\
I_0 &= \frac{1 + jX_1}{jX_1}I_1 \\
\end{aligned}
$$

② より、

$$
\begin{aligned}
I_2 &= -jX_2I_0 + jX_2I_2 \\
(1 - jX_2)I_2 &= -jX_2 \cdot \frac{1 + jX_1}{jX_1}I_1 \\
(1 - jX_2)I_2 &= -\frac{X_2(1 + jX_1)}{X_1}I_1 \\
\frac{I_1}{I_2} &= \frac{(-1 + jX_2)X_1}{X_2(1 + jX_1)} \\
&= \frac{X_1(-1 + jX_2)(1 - jX_1)}{X_2(1 + X_1^2)} \\
&= \frac{X_1(-1 + X_1X_2 + jX_1 + jX_2)}{X_2(1 + X_1^2)} \\
&= \frac{X_1(-1 + X_1X_2) + jX_1(X_1 + X_2)}{X_2(1 + X_1^2)}
\end{aligned}
$$

$\arg(\frac{I_1}{I_2}) = \frac{\pi}{4}$ より、$\frac{I_1}{I_2}$ の実部と虚部が等しいので

$$
\begin{aligned}
-1 + X_1X_2 &= X_1 + X_2 \\
X_1X_2 &= X_1 + X_2 + 1 \\
X_1X_2 - X_1 &= X_2 + 1 \\ 
(X_2 - 1)X_1 &= X_2 + 1 \\
X_1 &= \frac{X_2 + 1}{X_2 - 1}
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\bigg|\frac{I_1}{I_2}\bigg| &= \frac{X_1}{X_2}\cdot \frac{\sqrt{1 + X_2^2}}{\sqrt{1 + X_1^2}} = \frac{2\sqrt{2}}{3} \\
\bigg|\frac{I_1}{I_2}\bigg|^2 &= \frac{X_1^2}{X_2^2}\cdot \frac{1 + X_2^2}{1 + X_1^2} = \frac{8}{9}
\end{aligned}
$$

$$
\begin{aligned}
8X_2^2(1 + X_1^2) &= 9X_1^2(1 + X_2^2) \\
8X_2^2\bigg[1 + (\frac{X_2 + 1}{X_2 - 1})^2\bigg] &= 9\bigg(\frac{X_2 + 1}{X_2 - 1}\bigg)^2(1 + X_2^2) \\
8X_2^2\bigg[\frac{(X_2^2 - 1)^2 + (X_2 + 1)^2}{(X_2 - 1)^2}\bigg] &= 9\bigg[\frac{(X_2 + 1)^2}{(X_2 - 1)^2}\bigg](1 + X_2^2) \\
8X_2^2(X_2^2 - 2X_2 + 1 + X_2^2 + 2X_2 + 1) &= 9(X_2 + 1)^2(1 + X_2^2) \\
8X_2^2(2X_2^2 + 2) &= 9(X_2^2 + 2X_2 + 1)(1 + X_2^2) \\
16X_2^2(X_2^2 + 1) &= 9(X_2^2 + 2X^2 + 1)(1 + X_2^2) \\
7X_2^2 - 18X_2 - 9 &= 0
\end{aligned}
$$

$X_2 > 0$ より、

$$
X_2 = \frac{21}{7} = 3,X_1 = \frac{3 + 1}{3 - 1} = 2
$$


### 【問 2】
#### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p5.png" width="450" height="175" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p6.png" width="470" height="178" alt=""/>
</figure>

$$
R_A = \frac{2}{1 + j},R_B = \frac{-j}{1 + j},R_C = \frac{2j}{1 + j}
$$

$$
Z_0 = \frac{2}{5}(2 - j)
$$

<!-- ***Picture 图2-2*** -->

$$
\begin{aligned}
V_0 &= \frac{R_B + j}{R_C + R_B + j} \times 10 \\ 
&= \frac{1}{1 - 2j} \times 10 \\
&= \frac{1 + 2j}{5} \times 10 \\
&= 2(1 + 2j)[\text{V}]
\end{aligned}
$$

#### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p7.png" width="400" height="170" alt=""/>
</figure>

$\overline{Z_0} = Z$ のとき、消費電力 $P$ が最大となる。

$$
\overline{Z_0} = \frac{4}{5} + \frac{2}{5}j, \ Z = R + jX
$$

$$
R = \frac{4}{5},X = \frac{2}{5}
$$

そのときの $P$ を求める。

$$
\begin{aligned}
I &= \frac{V_0}{Z_0 + Z} \\
&= \frac{2(1 + 2j)}{\frac{2}{5}(2 - j) + \frac{4}{5} + \frac{2}{5}j} \\
&= \frac{5}{4}(1 + 2j)
\end{aligned}
$$

複数電力を $P_C$ とすると

$$
\begin{aligned}
P_C &= |I|^2Z \\
&= \frac{25}{16} \times 5 \times (\frac{4}{5} + \frac{2}{5}j) \\
&= \frac{25}{16}(4 + 2j)
\end{aligned}
$$

$$
P = \text{Re}[P_C] = \frac{25}{4}[\text{W}]
$$

### 【問 3】
#### (1)
$I_1$ に関して

$$
\begin{align}
E = R(I_1 - I_2) \tag{①}
\end{align}
$$

$I_2$ に関して

$$
\begin{align}
0 = R(I_2 - I_1) + j\omega L_1I_2 + j\omega MI_3 \tag{②}
\end{align}
$$

$I_3$ に関して

$$
0 = j\omega L_2I_2 + j\omega MI_2  + I_3R \tag{③}
$$

#### (2)
① より、

$$
\left \{
\begin{align}
&RI_1 - RI_2 = E \tag{①} \\
&-RI_1 + (R + j\omega L_1)I_2 + j\omega MI_3 = 0 \tag{②} \\
&j\omega MI_2 + (j\omega L_2 + R)I_3 = 0 \tag{③} \\
\end{align}
\right.
$$

$$
\begin{pmatrix}
R & -R & 0 \\
-R & R + j\omega L_1 & j\omega M \\
0 & j\omega M & j\omega L_2 + R \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\I_2 \\I_3 \\
\end{pmatrix} = 
\begin{pmatrix}
E \\ 0 \\ 0 \\
\end{pmatrix}
$$

クラメルの公式より

$$
I_1 = \frac{1}{\det|A|}
\begin{vmatrix}
E & -R & 0 \\
0 & R + j\omega L_1 & j\omega M \\
0 & j\omega M & j\omega L_2 + R \\
\end{vmatrix}
$$

$$
\begin{aligned}
\det|A| &= 
\begin{vmatrix}
R & 0 & 0 \\
0 & j\omega L_1 & j\omega M \\
0 & j\omega M & j\omega L_2 + R \\
\end{vmatrix} \\
&= j\omega L_1R(j\omega L_2 + R) - R(j\omega M)^2 \\
&= j\omega L_1R(j\omega L_2 + R) + R\omega^2M^2 \\
&= -\omega^2L_1L_2R + j\omega L_1R^2 + R\omega^2M^2 
\end{aligned}
$$

$$
\begin{aligned}
&\quad\begin{vmatrix}
E & -R & 0 \\
0 & R + j\omega L_1 & j\omega M \\
0 & j\omega M & j\omega L_2 + R \\
\end{vmatrix} \\
&= E(R + j\omega L_1)(R + j\omega L_2) - E(j\omega M)^2 \\
&= E(R + j\omega L_1)(R + j\omega L_2) + E\omega^2M^2
\end{aligned}
$$

$$
I_1 = \frac{R^2 - \omega^2L_1L_2 + j\omega R(L_1 + L_2) + \omega^2M^2}{R\omega^2M^2 - \omega^2L_1L_2R + j\omega L_1R^2}E
$$

$Z = \frac{E}{I_1}$ より、

$$
Z = \frac{R\omega^2M^2 - \omega^2L_1L_2R + j\omega L_1R^2}{R^2 - \omega^2L_1L_2 + \omega^2M^2 + j\omega R(L_1 + L_2)}
$$

### 【問 4】
#### (1)

$$
\begin{align}
E &= R_1i_1(t) + \frac{1}{C}q(t) \tag{①} \\
i_1(t) &= \frac{dq(t)}{dt} \tag{②}
\end{align}
$$

$$
\begin{aligned}
E &= R_1 \frac{dq(t)}{dt} + \frac{1}{C}q(t) \\
\frac{E}{R_1} &= \frac{dq(t)}{dt} + \frac{1}{CR_1}q(t) \\
q(t) &= q_s(t) + q_f(t)
\end{aligned}
$$

$q_s(t)$ は特解、$q_f(t)$ は同次型の基本解

$$
q_s(t) = CE
$$

$$
0 = \lambda + \frac{1}{CR_1} \Rightarrow \lambda = -\frac{1}{CR_1}
$$

$$
\begin{aligned}
q(t) &= CE + Ae^{-\frac{1}{CR_1}t} \\
q(t) &= 1 + Ae^{-t}
\end{aligned}
$$

$q(0) = 0$ より、

$$
0 = 1 + A \Leftrightarrow A = -1
$$

$$
q(t) = 1 - e^{-t}
$$ 

$$
i_1(t) = \frac{dq(t)}{dt} = e^{-t}
$$

$$
i_1(t) = e^{-t} (t > 0)
$$

$$
E = R_2i_2(t) + L\frac{di_2(t)}{dt}
$$ 

$$
\frac{E}{L} = \frac{di_2(t)}{dt} + \frac{R_2}{L}i_2(t)
$$

$$
i_2(t) = i_s(t) + i_f(t)
$$

$$
i_s(t) = \frac{E}{R_2}
$$

$$
0 = \lambda + \frac{R_2}{L} \Leftrightarrow \lambda = -\frac{R_2}{L}
$$

$$
i_2(t) = \frac{E}{R_2} + Ae^{-\frac{R_2}{L}t} = 1 + Ae^{-t}
$$

$i_2(0) = 0$ より、

$$
0 = 1 + A \Leftrightarrow A = -1
$$

$$
i_2(t) = 1 - e^{-t}
$$

#### (2)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2020_circuit_theory_p8.png" width="256" height="240" alt=""/>
</figure>

$$
i_1(t) = \frac{dq(t)}{dt}
$$

$$
\frac{1}{C}q(t) = -R_1i_1(t) - R_2i_1(t) - L\frac{di_1(t)}{dt}
$$

$$
\frac{1}{C}q(t) + R_1\frac{dq(t)}{dt} + R_1\frac{dq(t)}{dt} + R_2\frac{dq(t)}{dt} + L\frac{d^2q(t)}{dt^2} = 0
$$

$$
\frac{d^2q(t)}{dt^2} + 2\frac{dq(t)}{dt} + q(t) = 0
$$

特性方程式より、

$$
\lambda^2 + 2\lambda + 1 = 0 \Rightarrow \lambda = -1
$$

$$
q(t) = C_1e^{-t} + C_2te^{-t}
$$

$$
q(-0) = CE = 1,q(+0) = 1
$$

$$
i(0) = 0, 1 = C_1
$$

$$
i(t) = -C_1e^{-t} + C_2(e^{-t} - te^{-t})
$$

$$
0 = -C_1 + C_2
$$

$$
0 = -1 + C_2 \Rightarrow C_2 = 1
$$

$$
i_1(t) = -e^{-t} + e^{-t} - te^{-t}
$$

$$
i_1(t) = -te^{-t}
$$

#### (3)

$$
W = \int_0^{\infty}|i_1(t)|^2R_1dt + \int_0^{\infty}|i_2(t)|^2R_2dt
$$

(2) より、

$$
i_1(t) = -te^{-t},i_2(t) = -te^{-t}
$$

$$
\begin{aligned}
W &= \int_0^{\infty}t^2e^{-2t}dt + \int_0^{\infty}t^2e^{-2t}dt \\
&= \bigg[-\frac{1}{2}t^2e^{-2t} - \frac{1}{2}te^{-2t} - \frac{1}{4}e^{-2t}\bigg]_0^{\infty} + \bigg[-\frac{1}{2}t^2e^{-2t} - \frac{1}{2}te^{-2t} - \frac{1}{4}e^{-2t}\bigg]_0^{\infty} \\
&= \frac{1}{4} + \frac{1}{4} \\
&= \frac{1}{2}
\end{aligned}
$$