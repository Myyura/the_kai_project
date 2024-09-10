---
comments: false
title: 早稲田大学 先進理工学研究科 物理学及応用物理学専攻 2023年度 力学および電磁力学 問題3
tags:
  - Waseda-University
---
# 早稲田大学 先進理工学研究科 物理学及応用物理学専攻 2023年度 力学および電磁力学 問題3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
時刻を $t$ で表し、時間微分を $d/dt$ や $\dot{}$ で表す。

### (1)
質点にはたらく力を $\boldsymbol{f}$ とすると、
運動方程式 $\dot{\boldsymbol{p}} = \boldsymbol{f}$ が成り立ち、また、
中心力であることから $\boldsymbol{r} \times \boldsymbol{f} = \boldsymbol{0}$
が成り立つ。

さらに、速度 $\dot{\boldsymbol{r}}$ と運動量 $\boldsymbol{p}$ は平行なので、
$\dot{\boldsymbol{r}} \times \boldsymbol{p} = \boldsymbol{0}$ が成り立つ。

よって、質点の角運動量
$\boldsymbol{l} = \boldsymbol{r} \times \boldsymbol{p}$ の時間微分は

$$
\begin{aligned}
\dot{\boldsymbol{l}}
&= \dot{\boldsymbol{r}} \times \boldsymbol{p}
+ \boldsymbol{r} \times \dot{\boldsymbol{p}}
\\
&= \boldsymbol{0}
\end{aligned}
$$

となり、 $\boldsymbol{l}$ は保存することがわかる。

### (2)
質点の質量を $m$ とすると
$\boldsymbol{p} = m \dot{\boldsymbol{r}}$ である。

微小な時間 $\Delta t$ の間の質点の位置の変化は
$\dot{\boldsymbol{r}} \Delta t$ であるので、
この間に原点と質点の位置を結ぶ線分が掃過する面積のベクトル
$\Delta \boldsymbol{S}$
（その大きさが面積で、向きは
$\boldsymbol{r}, \dot{\boldsymbol{r}}$ に直交し、
$\boldsymbol{r}, \dot{\boldsymbol{r}}, \Delta \boldsymbol{S}$
が右手系をなす）は

$$
\begin{aligned}
\Delta S
&= \frac{1}{2} \boldsymbol{r} \times
\left( \boldsymbol{r} + \dot{\boldsymbol{r}} \Delta t \right)
\\
&= \frac{\Delta t}{2m} \boldsymbol{l}
\end{aligned}
$$

となる。

(1) より $\boldsymbol{l}$ は保存するので、
$\Delta \boldsymbol{S} / \Delta t$ が保存することがわかり、
これは面積速度が一定であることを意味する。

### (3)
物体 A が B におよぼす重力を $\boldsymbol{f}$ とすると、
B が A におよぼす重力は $ - \boldsymbol{f}$ であり、
$(\boldsymbol{r}_B - \boldsymbol{r}_A) \times \boldsymbol{f} = \boldsymbol{0}$
が成り立つ。

また、A, B それぞれの運動方程式は

$$
\begin{aligned}
\dot{\boldsymbol{p}}_A = - \boldsymbol{f}
, \ \ 
\dot{\boldsymbol{p}}_B = \boldsymbol{f}
\end{aligned}
$$

である。

よって、

$$
\begin{aligned}
\frac{d}{dt} \left( \boldsymbol{l}_A + \boldsymbol{l}_B \right)
&=
\frac{d}{dt} \left( \boldsymbol{r}_A \times \boldsymbol{p}_A
+ \boldsymbol{r}_B \times \boldsymbol{p}_B \right)
\\
&= \dot{\boldsymbol{r}}_A \times \boldsymbol{p}_A
+ \boldsymbol{r}_A \times \dot{\boldsymbol{p}}_A
+ \dot{\boldsymbol{r}}_B \times \boldsymbol{p}_B
+ \boldsymbol{r}_B \times \dot{\boldsymbol{p}}_B
\\
&= \left( \boldsymbol{r}_B - \boldsymbol{r}_A \right) \times \boldsymbol{f}
\\
&= \boldsymbol{0}
\end{aligned}
$$

となるので、
$\boldsymbol{l}_A + \boldsymbol{l}_B$ は保存されることがわかる。

### (4)
A, B それぞれの運動方程式は

$$
\begin{aligned}
M \ddot{\boldsymbol{r}}_A = - \boldsymbol{F}
, \ \ 
m \ddot{\boldsymbol{r}}_B = \boldsymbol{F}
\end{aligned}
$$

なので、
$\boldsymbol{r} = \boldsymbol{r}_B - \boldsymbol{r}_A$ について、

$$
\begin{aligned}
\ddot{\boldsymbol{r}}
&= \ddot{\boldsymbol{r}}_B - \ddot{\boldsymbol{r}}_A
\\
&= \left( \frac{1}{m} + \frac{1}{M} \right) \boldsymbol{F}
\\
\therefore \ \ 
\frac{1}{ \frac{1}{m} + \frac{1}{M} } \ddot{\boldsymbol{r}} &= \boldsymbol{F}
\end{aligned}
$$

が成り立つ。
これは、質量 $1/((1/m)+(1/M))$ 力 $\boldsymbol{F}$
の1つの質点の運動方程式と同じである。

### (5)
速度の動径方向に垂直な成分は $l/(mr)$ であるので、
力学的エネルギーの総和 $E$ は

$$
\begin{aligned}
E
&= \frac{1}{2} m \left( v_r^2 + \left( \frac{l}{mr} \right)^2 \right)
- \frac{GmM}{r}
\\
&= \frac{1}{2} m v_r^2 + \frac{l^2}{2mr^2} - \frac{GmM}{r}
\end{aligned}
$$

である。
（重力のポテンシャルエネルギーは $r \to \infty$ で $0$ とした。）

### (6)
(5) より

$$
\begin{aligned}
V(r) &= \frac{l^2}{2mr^2} - \frac{GmM}{r}
\\
\frac{dV(r)}{dr}
&= - \frac{l^2}{mr^3} + \frac{GmM}{r^2}
\\
&= \frac{- l^2 + Gm^2Mr}{mr^3}
\end{aligned}
$$

なので、

$$
\begin{aligned}
r_m &= \frac{l^2}{Gm^2M}
\\
V_m &= V(r_m)
\\
&= - \frac{G^2m^3M^2}{2l^2}
\end{aligned}
$$

を得る。

### (7)
(i) $E \lt V_m$ であるような運動はありえない。

(ii) $E = V_m$ のときは、 $r$ は一定 $r_m$ であり、円運動である。

(iii) $V_m \lt E \lt 0$ のときは、 $r$ に関して有界な運動である。

(iv) $0 \leq E $ のときは、 $r$ に関して非有界な運動である。