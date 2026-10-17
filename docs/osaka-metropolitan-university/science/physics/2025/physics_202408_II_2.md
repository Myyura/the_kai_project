---
sidebar_label: "2024年8月実施 物理学 II-2"
tags:
  - Osaka-Metropolitan-University
  - Physics.Thermodynamics.Mean-Field-Ising-Model-and-Phase-Transition
---
# 大阪公立大学 理学研究科 物理学専攻 2024年8月実施 物理学 II-2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

強磁性イジング模型の相転移を考える．結晶の各原子は2つの状態をとるスピンをもち，$i$ 番目のスピンの状態は $\pm1$ の値をとる変数 $s_i$ で指定される．系のエネルギーは

$$
H=-J\sum_{(i,j)}s_is_j\tag{1}
$$

で与えられるとする．ここで，$J>0$ であり，$\sum_{(i,j)}$ は全ての隣接スピンの組についての和を表す．スピンの総数を $N$，1つのスピンに隣接するスピンの数（配位数）を $z$ とする．

**(1)** ひとつのスピン $s_i$ に注目し，式(1)の $s_i$ が関係する部分だけを取り出すと，

$$
H_i=-Js_i\sum_j{}^{(i)}s_j.\tag{2}
$$

ここで，$j$ についての和はスピン $s_i$ の隣接スピンについての和を表す．各 $s_j$ を平均値 $m$ におきかえることができるとすれば，

$$
H_i=-zJms_i\tag{3}
$$

となり，スピン $s_i$ は強さが $m$ に比例する磁場の中にあるとみなすことができる．スピン $s_i$ のエネルギーが式(3)で与えられるとして，温度 $T$ の熱平衡状態における平均値 $\langle s_i\rangle$ を計算せよ．さらに，スピンの間に区別はないので，平均値 $\langle s_i\rangle$ は式(3)で仮定した平均値 $m$ に等しくなければならないとして，$m=\langle s_i\rangle$ とおくことにより，次の $m$ に対する方程式を導け．

$$
m=\tanh\left(\frac{zJ}{k_BT}m\right).\tag{4}
$$

ここで，$k_B$ はボルツマン定数，

$$
\tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}}\tag{5}
$$

である．

以下の問に対する解答に必要であれば，$|x|\ll1$ のとき $\tanh x\simeq x-\dfrac{x^3}{3}$ であることを用いてよい．

**(2)** (1)の近似では，系の全エネルギーは

$$
E(m)=-\frac12NzJm^2\tag{6}
$$

となることを示せ．

**(3)** $N$ 個のスピンの平均値が $m$，すなわち $\dfrac1N\sum_i s_i=m$ である微視的状態の数 $W(m)$ を求め，$S(m)=k_B\log W(m)$ で与えられる系のエントロピー $S(m)$ に対する表式

$$
\begin{aligned}
S(m)=\frac12Nk_B\bigl[&2\log2-(1+m)\log(1+m)\\
&-(1-m)\log(1-m)\bigr]
\end{aligned}\tag{7}
$$

を導け．

**(4)** 自由エネルギー $F(m)=E(m)-TS(m)$ が極値をとるための条件から，$m$ に対する方程式(4)を導け．

**(5)** $T_c=\dfrac{zJ}{k_B}$ とし，$x=\dfrac{T_c}{T}m$ とおくと，方程式(4)は $x$ についての方程式

$$
\frac{T}{T_c}x=\tanh x\tag{8}
$$

に書き換えられる．そして，方程式(8)の解は2つの関数のグラフ $y=\dfrac{T}{T_c}x$ と $y=\tanh x$ の交点の $x$ の値である．これら2つの関数のグラフを描き，方程式(8)の解は，$T>T_c$ のとき $x=0$ のみであり，$T<T_c$ のときには $x=0$ の解に加えて $x=\pm x_0\ (x_0>0)$ と表される2つの解が現れることを説明せよ．

**(6)** 熱平衡状態における $m$ の値は，自由エネルギー $F(m)=E(m)-TS(m)$ を最小にする $m$ の値として決まる．$T>T_c$ の熱平衡状態においては $m=0$，$T<T_c$ の熱平衡状態においては $|m|=m_0\equiv\dfrac{T}{T_c}x_0\ (\ne0)$ であることを示せ．

以上のことから，ここで用いた近似（平均場近似）においては，転移温度 $T_c$ を境目にして，系は高温側の無秩序相 $(m=0)$ から低温側の秩序相 $(m\ne0)$ へと相転移することが分った．秩序の程度を表す量 $m$ は，秩序パラメータと呼ばれる．以下では，秩序パラメータ $m$ の温度依存性，特に絶対零度での極限値と転移点近傍の振る舞いを調べてみよう．

**(7)** 絶対零度の極限 $(T\to0)$ での $m_0$ の極限値を求めよ．

**(8)** 転移点近傍 $(|T-T_c|\ll T_c$，ただし $T\le T_c)$ では，$m_0\simeq x_0\ll1$ であることを考慮して，

$$
m_0\simeq\sqrt{\frac{3(T_c-T)}{T_c}}\tag{9}
$$

であることを示せ．

#### 题目描述

考虑铁磁伊辛模型的相变。晶体中每个原子具有可取两种状态的自旋，第 $i$ 个自旋的状态由取值为 $\pm1$ 的变量 $s_i$ 指定。设系统能量为

$$
H=-J\sum_{(i,j)}s_is_j.\qquad\text{(1)}
$$

其中 $J>0$，$\sum_{(i,j)}$ 表示对所有相邻自旋对求和。自旋总数为 $N$，每个自旋的相邻自旋数（配位数）为 $z$。

**(1)** 关注某一个自旋 $s_i$，从式(1)中只取出与 $s_i$ 有关的部分，有

$$
H_i=-Js_i\sum_j{}^{(i)}s_j.\qquad\text{(2)}
$$

其中对 $j$ 的求和表示对自旋 $s_i$ 的相邻自旋求和。若可将每个 $s_j$ 替换为平均值 $m$，则

$$
H_i=-zJms_i.\qquad\text{(3)}
$$

因而可将自旋 $s_i$ 看作处于强度与 $m$ 成正比的磁场中。设自旋 $s_i$ 的能量由式(3)给出，计算温度 $T$ 的热平衡状态下的平均值 $\langle s_i\rangle$。此外，因为自旋之间没有区别，平均值 $\langle s_i\rangle$ 必须等于式(3)中假设的平均值 $m$。令 $m=\langle s_i\rangle$，导出下列关于 $m$ 的方程：

$$
m=\tanh\left(\frac{zJ}{k_BT}m\right).\qquad\text{(4)}
$$

这里 $k_B$ 为玻尔兹曼常数，且

$$
\tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}}.\qquad\text{(5)}
$$

解答以下问题时，如有需要，可使用 $|x|\ll1$ 时 $\tanh x\simeq x-\dfrac{x^3}{3}$。

**(2)** 证明在(1)的近似下，系统总能量为

$$
E(m)=-\frac12NzJm^2.\qquad\text{(6)}
$$

**(3)** 求 $N$ 个自旋的平均值为 $m$，即满足 $\dfrac1N\sum_i s_i=m$ 的微观状态数 $W(m)$，并导出由 $S(m)=k_B\log W(m)$ 给出的系统熵的表达式：

$$
\begin{aligned}
S(m)=\frac12Nk_B\bigl[&2\log2-(1+m)\log(1+m)\\
&-(1-m)\log(1-m)\bigr].
\end{aligned}\qquad\text{(7)}
$$

**(4)** 从自由能 $F(m)=E(m)-TS(m)$ 取极值的条件，导出关于 $m$ 的方程(4)。

**(5)** 令 $T_c=\dfrac{zJ}{k_B}$、$x=\dfrac{T_c}{T}m$，方程(4)可改写为关于 $x$ 的方程

$$
\frac{T}{T_c}x=\tanh x.\qquad\text{(8)}
$$

方程(8)的解是两个函数图像 $y=\dfrac{T}{T_c}x$ 与 $y=\tanh x$ 的交点的 $x$ 值。画出这两个函数的图像，说明当 $T>T_c$ 时方程(8)仅有解 $x=0$；当 $T<T_c$ 时，除 $x=0$ 外还出现表示为 $x=\pm x_0\ (x_0>0)$ 的两个解。

**(6)** 热平衡状态下的 $m$ 值由使自由能 $F(m)=E(m)-TS(m)$ 最小的 $m$ 值决定。证明在 $T>T_c$ 的热平衡状态下 $m=0$，在 $T<T_c$ 的热平衡状态下 $|m|=m_0\equiv\dfrac{T}{T_c}x_0\ (\ne0)$。

由此可知，在这里采用的近似（平均场近似）中，系统以转变温度 $T_c$ 为界，从高温侧的无序相 $(m=0)$ 转变为低温侧的有序相 $(m\ne0)$。表示有序程度的量 $m$ 称为序参量。以下考察序参量 $m$ 的温度依赖性，特别是绝对零度下的极限值和转变点附近的行为。

**(7)** 求绝对零度极限 $(T\to0)$ 下 $m_0$ 的极限值。

**(8)** 在转变点附近 $(|T-T_c|\ll T_c$，且 $T\le T_c)$，考虑 $m_0\simeq x_0\ll1$，证明

$$
m_0\simeq\sqrt{\frac{3(T_c-T)}{T_c}}.\qquad\text{(9)}
$$

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
\begin{aligned}S(m)&=\frac{Nk_B}{2}
\left[2\log2-(1+m)\log(1+m)\right.\\&\qquad\left. -(1-m)\log(1-m)\right].\end{aligned}
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

![高温では原点のみ、低温では原点と正負の二点で交わる y=tanh x と y=(T/Tc)x](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-metropolitan-university/science/physics/2025/physics_202408_physics_II_2_intersections.svg)

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
