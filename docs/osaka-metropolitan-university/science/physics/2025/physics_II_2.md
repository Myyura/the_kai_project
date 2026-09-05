---
sidebar_label: "2025年度 物理学 II-2"
tags:
  - Osaka-Metropolitan-University
  - Physics.Thermodynamics.Mean-Field-Ising-Model-and-Phase-Transition
---
# 大阪公立大学 理学研究科 物理学専攻 2025年度 物理学 II-2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下は公式問題の要約である。
$N$ 個のスピン $s_i=\pm1$ からなる強磁性 Ising 模型

$$
H=-J\sum_{(i,j)}s_is_j\qquad(J>0)
$$

を平均場近似で考える。配位数を $z$、平均磁化を $m$ とし、

$$
H_i=-zJms_i
$$

と近似する。

1. $\langle s_i\rangle$ を求め、自己無撞着方程式を導け。
2. 全エネルギー $E(m)$ を求めよ。
3. 微視的状態数 $W(m)$ とエントロピー $S(m)$ を求めよ。
4. $F=E-TS$ の極値条件から自己無撞着方程式を導け。
5. $T_c=zJ/k_B$、$x=(T_c/T)m$ として、$T\gtrless T_c$ における解を図示・説明せよ。
6. $T<T_c$ での正の非零解を $x_0$、$m_0=(T/T_c)x_0$ とおく。自由エネルギーを最小にする $m$ は、$T>T_c$ では $0$、$T<T_c$ では $\pm m_0$ となることを示せ。
7. $T\to0$ における $m_0$ の極限値を求めよ。
8. $T\le T_c$ かつ $|T-T_c|\ll T_c$ において、$m_0\simeq\sqrt{3(T_c-T)/T_c}$ を示せ。

## **Kai**

### (1)

$$
\langle s_i\rangle
=\frac{e^{\beta zJm}-e^{-\beta zJm}}
{e^{\beta zJm}+e^{-\beta zJm}}
=\tanh(\beta zJm).
$$

したがって

$$
\boxed{m=\tanh\left(\frac{zJm}{k_BT}\right)}.
$$

### (2)

各結合を二重に数えないようにすると

$$
E(m)=\frac12\sum_i(-zJms_i)
=-\frac12NzJm^2.
$$

### (3)

$$
N_\pm=\frac{N(1\pm m)}2,\qquad
W(m)=\frac{N!}{N_+!N_-!}.
$$

Stirling の公式より

$$
S(m)=\frac{Nk_B}{2}
\left[2\log2-(1+m)\log(1+m)-(1-m)\log(1-m)\right].
$$

### (4)

$$
\frac{dF}{dm}
=Nk_B\left(T\tanh^{-1}m-T_cm\right).
$$

$dF/dm=0$ より

$$
\tanh^{-1}m=\frac{T_c}{T}m,\qquad
m=\tanh\left(\frac{T_c}{T}m\right).
$$

### (5)

$a=T/T_c$ とすれば $ax=\tanh x$ である。$y=\tanh x$ は原点で傾き $1$ の奇関数なので、グラフの交点は

![高温では原点のみ、低温では原点と正負の二点で交わる y=tanh x と y=(T/Tc)x](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka_metropolitan_university/science/physics/2025/physics_II_2_intersections.svg)

$$
\begin{array}{c|c}
T>T_c\ (a>1)&x=0\\
T=T_c\ (a=1)&x=0\\
T<T_c\ (a<1)&x=0,\ \pm x_0
\end{array}
$$

となる。$x>0$ では $\tanh x$ は狭義凹関数であり、$\tanh x/x$ は $1$ から $0$ まで単調に減少するため、$0<a<1$ のとき正の交点は一つだけである。

### (6)

$$
F''(m)=Nk_B\left(\frac{T}{1-m^2}-T_c\right).
$$

$T>T_c$ では $F''>0$ だから最小点は $m=0$。$T<T_c$ では $F''(0)<0$ であり、$m=\pm m_0$ が最小点である。ただし

$$
m_0=\frac{T}{T_c}x_0.
$$

$0<T<T_c$ では $F'(m)$ は $0<m<m_0$ で負、$m_0<m<1$ で正である。$F$ は偶関数なので、$\pm m_0$ はともに大域的最小点となる。$T=T_c$ では $F''(m)\geq0$ であり、最小点は $m=0$ のみである。

### (7)

$T/T_c\to0$ では $x_0\to\infty$ なので

$$
\boxed{m_0=\tanh x_0\longrightarrow1}.
$$

### (8)

$x_0\ll1$ として $\tanh x_0\simeq x_0-x_0^3/3$ を用いると

$$
\frac{T}{T_c}x_0=x_0-\frac{x_0^3}{3},\qquad
x_0^2=\frac{3(T_c-T)}{T_c}.
$$

$m_0=(T/T_c)x_0\simeq x_0$ より

$$
\boxed{m_0\simeq\sqrt{\frac{3(T_c-T)}{T_c}}}.
$$

## **Reference**
- [大阪公立大学 物理学専攻 大学院入試](https://www.omu.ac.jp/sci/phys/admission/admin-grad.html)
- [大阪公立大学 2025年度 公式問題 PDF](https://www.omu.ac.jp/sci/phys/assets/MC2024.pdf)
