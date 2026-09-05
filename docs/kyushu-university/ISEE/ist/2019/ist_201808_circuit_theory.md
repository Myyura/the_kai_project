---
sidebar_label: "2018年8月実施 電気回路"
tags:
  - Kyushu-University
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Maximum-Power-Transfer
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年8月実施 電気回路


## **Author**
Zero

## **Description**

出典：[公式問題（保存版、10–11頁）](https://web.archive.org/web/20190715211433id_/http://www.isee.kyushu-u.ac.jp:80/script/wordpress/wp-content/uploads/H31infait.pdf#page=10)。

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

(2) $z_0 = R,z_1 = jX_1,z_2 = -jX_2$ のとき, $E$ と $I$ の位相差が $\arg(E/I) = 0$ となる条件を求めよ。

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

### 题目描述

【问题 1】对[图 1 电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p1.png)，电源电压 $E$ 与电流 $I_2$ 同相，即
$\arg(E/I_2)=0$。回答：

1. 写出 $R_1,R_2,X_1,X_2$ 之间的关系式。
2. 当
   $|I_1|=2\,\mathrm A$、$|I_2|=1\,\mathrm A$、
   $|V|=4\,\mathrm V$、$|E|=8\,\mathrm V$
   时，求 $R_1,R_2,X_1,X_2$。

【问题 2】对[图 2 电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p2.png)，电源电压 $E$ 的角频率为 $\omega$。回答：

1. 求负载电阻 $R_L$ 中的电流 $I$ 与消耗功率 $P$。
2. 电抗 $X$ 可调时，求使 $P$ 最大的 $X$。

【问题 3】对[图 3 电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p3.png)，电源电压 $E$ 的角频率为 $\omega$。回答：

1. 求电阻 $r$ 中的电流 $I$。
2. 当 $z_0=R$、$z_1=jX_1$、$z_2=-jX_2$ 时，求使电源电压与电流的同相条件
   $\arg(E/I)=0$ 成立的条件。

【问题 4】对[图 4 开关电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p4.png)，已知

$$
E=\frac{\sqrt3}{2}\,\mathrm V,\quad
R_1=R_2=2\,\Omega,\quad C=4\,\mathrm F,\quad L=1\,\mathrm H.
$$

1. 保持 $S_2$ 断开，在 $t=0$ 闭合 $S_1$；已知
   $q(0)=\frac12CE$，求 $t>0$ 的电荷 $q(t)$。
2. 保持 $S_2$ 断开并闭合 $S_1$，待电路达到稳态后，在 $t=0$ 同时断开 $S_1$、闭合 $S_2$；求 $t>0$ 的电流 $i(t)$。
3. 求 (2) 中 $|i(t)|$ 达到最大值的时刻 $t$。

## **Kai** 
### 【問 1】
電源電圧 $E$ と電流 $I_2$ の位相差は $\arg(\frac{E}{I_2}) = 0$ である。

#### (1) 
$R_1,R_2,X_1,X_2$ の問の関係式を示せ

回路より、

$$
\begin{align}
&R_2I_2 = jX_2(I_1 - I_2) \tag{\textcircled{1}} \\
&(R_2 + jX_2)I_2 = jX_2I_1 \tag{\textcircled{1}'} \\
&E = \{R_1 + jX_1 + (R_2 // jX_2)\}I_1 \tag{\textcircled{2}} \\
&E = (R_1 + jX_1 + \frac{jR_2X_2}{R_2 + jX_2})I_1 \tag{\textcircled{2}'}
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
R_1 + R_2 + \frac{X_1R_2}{X_2} = 8 \tag{\textcircled{1}}
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
R_2 = \sqrt{3}X_2 \tag{\textcircled{2}}
\end{align}
$$

回路より、

$$
\begin{align}
\text{V} &= (R_1 + jX_1)I_1 \notag \\
\frac{\text{V}}{I_1} &= R_1 + jX_1 \notag \\
\bigg|\frac{\text{V}}{I_1}\bigg| &= \sqrt{R_1^2 + X_1^2} \notag \\
2 &= \sqrt{R_1^2 + X_1^2} \notag \\
4 &= R_1^2 + X_1^2 \tag{\textcircled{3}}
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
R_1 = 1 \tag{\textcircled{4}} \\
\textcircled{3}\text{より、 }X_1 = \sqrt{3} \tag{\textcircled{5}}
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
各巻線のドット側に流れ込む電流を $I_1,I_2$ とし、ドット側を正とする端子電圧を $V_1,V_2$ とする。図の負荷電流は $I=-I_2$ である。

$$
\begin{align}
V_1 = j\omega L_1I_1 + j\omega MI_2 \tag{\textcircled{1}} \\
V_2 = j\omega L_2I_2 + j\omega MI_1 \tag{\textcircled{2}} \\
E = R_1I_1 + V_1 \tag{\textcircled{3}}
\end{align}
$$

① $\rightarrow$ ③ に代入すると、

$$
\begin{align}
E = R_1I_1 + j\omega L_1I_1 + j\omega MI_2 \notag \\
E = (R_1 + j\omega L_1)I_1 + j\omega MI_2 \tag{\textcircled{4}} \\
V_2 = -I_2(jX + R_L) \tag{\textcircled{5}}
\end{align}
$$

⑤ $\rightarrow$ ② に代入

$$
\begin{align}
-jXI_2 - R_LI_2 = j\omega L_2I_2 + j\omega MI_1 \notag \\
j\omega MI_1 + (R_L + jX + j\omega L_2)I_2 = 0 \tag{\textcircled{6}}
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
&= (R_1 + j\omega L_1)(R_L + j(X + \omega L_2)) + \omega^2 M^2
\end{aligned}
$$

$I = -I_2$ より、

$$
I = \frac{j \omega ME}{R_1R_L - \omega XL_1 - \omega^2L_1L_2 + \omega^2M^2 + j(XR_1 + \omega L_2R_1 + \omega L_1R_L)}
$$

$P = |I|^2R_L$ より、

$$
P = \frac{\omega^2 M^2R_L}{(R_1R_L-\omega XL_1-\omega^2L_1L_2 + \omega^2M^2)^2 + (XR_1 + \omega L_2R_1 + \omega L_1R_L)^2}|E|^2
$$

#### (2)
(1) で求めた $P$ の分母が最小になればよい。

$$
P = \frac{\omega^2 M^2R_L}{\{\omega(R_1L_2 + R_LL_1) + R_1X\}^2 + \{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\}^2}|E|^2
$$

$$
f(X) = \{\omega(R_1L_2 + R_LL_1) + R_1X\}^2 + \{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\}^2
$$

$$
\frac{\partial f(X)}{\partial X} = 2\{\omega(R_1L_2 + R_LL_1) + R_1X\} \cdot R_1 + 2\{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\} \cdot (-\omega L_1)
$$

$\frac{\partial f(X)}{\partial X} = 0$ になる $X$ を求める。

$$
\begin{aligned}
\{\omega(R_1L_2 + R_LL_1) + R_1X\}R_1 &= \omega L_1\{R_1R_L + \omega^2(M^2 - L_1L_2) - \omega L_1X\} \\
\omega R_1(R_1L_2 + R_LL_1) + R_1^2X &= R_1R_L\omega L_1 + \omega^3 L_1(M^2 - L_1L_2) - \omega^2 L_1^2X \\
(R_1^2 + \omega^2L_1^2)X &= \omega^3L_1M^2 - \omega^3L_1^2L_2 - \omega R_1^2L_2 \\
(R_1^2 + \omega^2L_1^2)X &= \omega^3L_1M^2 - \omega L_2(\omega^2L_1^2 + R_1^2) \\
X &= \frac{\omega^3L_1M^2}{R_1^2 + \omega^2 L_1^2} - \omega L_2 \\
&= \omega\bigg\{\frac{\omega^2L_1M^2}{R_1^2 + \omega^2L_1^2} - L_2\bigg\}
\end{aligned}
$$


$f^{\prime\prime}(X)=2(R_1^2+\omega^2L_1^2)>0$ なので、$M E\ne0$ のときこの点が唯一の最大電力条件である。

### 【問 3】
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p5.png" width="420" height="660" alt=""/>
</figure>

#### (1)
電源の下側を基準電位 $0$、上側を $E$ とし、図 3 の右上、右下、中央の電位をそれぞれ $V_a,V_b,V_c$ とする。$I$ は $r$ を上から下に流れるので、$V_a-V_b=rI$ である。

右上と右下の節点にキルヒホッフの電流則を適用すると、

$$
\frac{E-V_a}{z_1}+\frac{V_c-V_a}{z_1}=I,
\qquad
\frac{V_b}{z_2}+\frac{V_b-V_c}{z_2}=I.
$$

したがって

$$
2V_a=E+V_c-z_1I,\qquad 2V_b=V_c+z_2I.
$$

差を取れば中央電位が消去でき、

$$
2rI=E-(z_1+z_2)I.
$$

よって

$$
\boxed{I=\frac{E}{z_1+z_2+2r}}.
$$

この結果は $z_0$ に依存しないが、$z_0$ を流れる電流が零という意味ではない。

#### (2)
図の負荷電流 $I$ と電源電圧 $E$ が同相となる条件 $\arg(E/I)=0$ を求める。

$$
\frac{E}{I}=2r+j(X_1-X_2).
$$

$r>0$ なので、同相となる条件は

$$
\boxed{X_1=X_2}.
$$

### 【問 4】
#### (1)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2019_circuit_theory_p6.png" width="396" height="327" alt=""/>
</figure>

$t > 0$ における $q(t)$

$$
\begin{align}
E &= R_1i(t) + \frac{q(t)}{C} \tag{\textcircled{1}}\\
i(t) &= \frac{dq(t)}{dt} \tag{\textcircled{2}}
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
q(t) &= CE - \frac{1}{2}CE e^{-\frac{t}{CR_1}} \\
&= CE (1 - \frac{1}{2}e^{-\frac{t}{CR_1}})
\end{aligned}
$$

変数を全て、代入するて。

$$
q(t) = 2\sqrt{3}(1 - \frac{1}{2}e^{-\frac{t}{8}})\ (t > 0)
$$

#### (2)
切替前は $q(0^-)=CE=2\sqrt3$、コイル電流は零である。コンデンサ電圧とコイル電流の連続性から、$q(0^+)=2\sqrt3$、$i(0^+)=0$ となる。図の電流の向きでは $i=q'$ なので、

$$
Lq''+R_2q'+\frac{q}{C}=0,
\qquad q''+2q'+\frac14q=0.
$$

特性根は $\lambda_\pm=-1\pm\sqrt3/2$ である。初期条件を用いると

$$
q(t)=(\sqrt3+2)e^{\lambda_+t}+(\sqrt3-2)e^{\lambda_-t}.
$$

したがって

$$
\boxed{i(t)=\frac12\left(e^{(-1-\sqrt3/2)t}-e^{(-1+\sqrt3/2)t}\right)\quad(t>0)}.
$$

#### (3)
$t>0$ では $i(t)<0$ なので

$$
|i(t)|=\frac12\left(e^{\lambda_+t}-e^{\lambda_-t}\right).
$$

微分が零となる条件は

$$
\lambda_+e^{\lambda_+t}=\lambda_-e^{\lambda_-t},
\qquad e^{\sqrt3t}=\frac{2+\sqrt3}{2-\sqrt3}=(2+\sqrt3)^2.
$$

したがって

$$
\boxed{t=\frac{2}{\sqrt3}\log(2+\sqrt3)}.
$$

この時刻は唯一の正の停留点である。$|i(0)|=0$、$\lim_{t\to\infty}|i(t)|=0$ かつ $t>0$ で $|i(t)|>0$ なので、ここで大域的な最大値を取る。
