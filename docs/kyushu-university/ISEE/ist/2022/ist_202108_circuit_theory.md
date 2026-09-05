---
sidebar_label: "2021年8月実施 電気回路"
tags:
  - Kyushu-University
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Maximum-Power-Transfer
  - Electrical-Electronic.Circuits.Mutual-Inductance
  - Electrical-Electronic.Circuits.Two-Port-Network
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年8月実施 電気回路

## **Author**
Zero

## **Description**
> 出典：九州大学[公式問題](https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/R04ist.pdf)。

### 【問 1】
図 $1$ に示す回路において, 電流 $I_1$ と電圧 $E$ の位相差が $\arg(\frac{E}{I_1}) = \frac{\pi}{6},\big|\frac{E}{I_1}\big| = 2$ である。以下の問いに答えよ。なお, コイルの相互インダクタンスは無視する。

(1) $R_1$ および $X_1$ を求めよ。

(2) $\big|\frac{V}{E}\big| = 1$となるときの $\arg(\frac{V}{E})$ を求めよ。

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

### 题目描述

【问题 1】在[图 1 电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p1.png)中，电流 $I_1$ 与电压 $E$ 满足

$$
\arg(E/I_1)=\frac{\pi}{6},\qquad |E/I_1|=2.
$$

忽略线圈间的互感。回答：

1. 求 $R_1,X_1$。
2. 当 $|V/E|=1$ 时，求 $\arg(V/E)$。

【问题 2】对[图 2 电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p2.png)，回答：

1. 在图 2(a) 中，求从端口 $1-1'$ 向左看入的导纳 $Y_1$。
2. 在图 2(a) 的端口 $1-1'$ 接入图 2(b) 所示的导纳
   $Y_2=G+jB$，其中电导 $G>0$ 与电纳 $B$ 均可调。求使
   $Y_2$ 消耗功率 $P$ 最大的 $G,B$，并求该最大功率。

【问题 3】对[图 3 耦合线圈电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p3.png)，电源电压 $E$ 的角频率为 $\omega$；$L_1,L_2$ 为自感，$M>0$ 为互感。回答：

1. 若图 3(b) 与图 3(a) 虚线框内的二端口网络等效，分别用
   $L_1,L_2,M$ 表示 $Z_1,Z_2,Z_3$。
2. 求从图 3(a) 端口 $1-1'$ 向右看入的输入阻抗 $Z$。

【问题 4】在[图 4 开关电路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p4.png)中，$t=0$ 时同时断开 $S_1$、闭合 $S_2$。已知

$$
E=2\,\mathrm V,\quad C=1\,\mathrm F,\quad L=1\,\mathrm H,\quad
R_1=2\,\Omega,\quad R_2=1\,\Omega,
$$

并且 $v(0)=1\,\mathrm V$，$t=0$ 前电路处于稳态。回答：

1. 求 $i(0)$。
2. 求 $v(t)$（$t\ge0$）。

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
\Leftrightarrow &\text{Re}(\frac{E}{I_1}):\operatorname{Im}(\frac{E}{I_1}) = \sqrt{3}:1 \notag\\
&\sqrt{3}\operatorname{Im}(\frac{E}{I_1}) = \text{Re}(\frac{E}{I_1}) \tag{A}
\end{align}
$$

#### (1)

$$
\frac{E}{I_1} = R_1 + jX_1
$$

$$
\begin{align}
\bigg|\frac{E}{I_1}\bigg| = 2 \Leftrightarrow &\sqrt{R_1^2 + X_1^2} = 2 \notag \\
&R_1^2 + X_1^2 = 4 \tag{\textcircled{1}}
\end{align}
$$

(A) より、

$$
\begin{align}
R_1 = \sqrt{3}X_1 \tag{\textcircled{2}}
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
&= \frac{\sqrt{3}R_2 + X_2}{4(R_2^2 + X_2^2)}[(\sqrt{3}R_2 - X_2) - j(R_2 + \sqrt{3}X_2)] \tag{\textcircled{3}}
\end{align}
$$

$\left|\frac{V}{E}\right| = 1$ より、

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

③ に $R_2=\sqrt3X_2$ を代入すると、

$$
\frac VE=\frac{4X_2}{2X_2+j2\sqrt3X_2}
=\frac12-j\frac{\sqrt3}{2}=e^{-j\pi/3}.
$$

したがって $\arg(V/E)=-\pi/3$ である。

### 【問 2】
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2022_circuit_theory_p6.png" width="400" height="375" alt=""/>
</figure>

$$
\begin{align}
Z_a &= Z_b \notag \\
Z_1 &= \frac{Z_aZ_b}{Z_a + Z_b} = \frac{1}{2}Z_a \notag \\
&= \frac{1}{2}(5 - j2) \tag{\textcircled{1}} \\
\end{align}
$$

$$
\begin{aligned}
Y_1 = \frac{1}{Z_1} &= \frac{2}{5 - j2} \\
&= 2 \cdot \frac{5 + j2}{29} \\
&= \frac{2}{29}(5 + j2)\,\mathrm{S}
\end{aligned}
$$

#### (2)
電流源を開放したときの出力インピーダンスは

$$
Z_{\rm th}=\frac{5-j2}{2},\qquad
Y_1=\frac{10+j4}{29}.
$$

負荷を外し、電流源下端を基準電位とする。電流源の電流は等しいインピーダンス $5-j2$ の二枝に $J/2$ ずつ分かれる。
端子 $1$ の電位は $5J/2$、端子 $1'$ の電位は $-jJ$ なので、

$$
V_{\rm th}=\frac{5+j2}{2}J.
$$

したがって Norton 電流は
$J_{\rm N}=V_{\rm th}/Z_{\rm th}=(5+j2)J/(5-j2)$ であり、$|J_{\rm N}|=|J|$ である。
負荷電圧とその平均消費電力は、実効値フェーザを用いて

$$
V=\frac{J_{\rm N}}{Y_1+G+jB},\qquad
P=\frac{G|J|^2}{(G+10/29)^2+(B+4/29)^2}.
$$

まず $B=-4/29$ により分母の虚部を打ち消す。その後
$(G+10/29)^2\ge4G(10/29)$ より、等号条件は $G=10/29$ である。
よって

$$
\boxed{G=\frac{10}{29}\,\mathrm S,\qquad B=-\frac4{29}\,\mathrm S},
\qquad
\boxed{P_{\max}=\frac{29}{40}|J|^2\,\mathrm W}.
$$

これは $Y_2=Y_1^*$、すなわち $Z_2=Z_{\rm th}^*=(5+j2)/2$ とする共役整合に一致する。

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

各行列成分を比較する。$Z_i$ はインダクタンスではなくインピーダンスなので、$j\omega$ を含めて

$$
\boxed{Z_1=j\omega(L_1+M),\quad Z_2=-j\omega M,\quad Z_3=j\omega(L_2+M)}.
$$

#### (2)
負荷では $V_2=-Z_4I_2$ であるから、

$$
-Z_4I_2=-j\omega MI_1+j\omega L_2I_2,
\qquad
I_2=\frac{j\omega M}{Z_4+j\omega L_2}I_1.
$$

従って、図3(a)の入力インピーダンスは

$$
\boxed{
Z=\frac{V_1}{I_1}
=j\omega L_1+\frac{\omega^2M^2}{Z_4+j\omega L_2}
}.
$$

同じ結果は T 形等価回路から
$Z=Z_1+Z_2-Z_2^2/(Z_2+Z_3+Z_4)$ としても得られる。

### 【問 4】
切替直前に回路は定常状態にあり、電流の連続性から $i(0)=i(0^-)=i(0^+)$ である。

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
スイッチ切替後、電流 $i$ はコンデンサの正極から抵抗・コイルへ流れる。
したがって、$C=1$ より $i=-v'$ である。Kirchhoff の電圧則は

$$
v=R_2i+Li'=i+i'.
$$

両式から、受動 RLC 回路の自然応答は

$$
v''+v'+v=0,\qquad v(0)=1,\quad v'(0)=-i(0)=-1.
$$

特性根は $(-1\pm j\sqrt3)/2$ であり、初期条件を代入すると

$$
\boxed{v(t)=e^{-t/2}\left(\cos\frac{\sqrt3t}{2}
-\frac1{\sqrt3}\sin\frac{\sqrt3t}{2}\right)\,\mathrm V,\quad t\ge0}.
$$

確認として $i(t)=-v'(t)=e^{-t/2}(\cos(\sqrt3t/2)+\sin(\sqrt3t/2)/\sqrt3)$ であり、
$i(0)=1$ を満たす。蓄積エネルギー $\tfrac12v^2+\tfrac12i^2$ の時間微分は $-i^2\le0$ となる。
