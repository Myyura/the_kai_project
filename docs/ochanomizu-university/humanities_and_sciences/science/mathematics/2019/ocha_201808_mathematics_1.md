---
sidebar_label: "2018年8月実施 数学コース 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Real-Analysis.Uniform-Convergence-by-Supremum-Error
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
  - Mathematics.Calculus.Improper-Integral
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2018年8月実施 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$a<b$ とし、$[a,b]\times[0,\infty)$ 上の連続関数

$$
f:[a,b]\times[0,\infty)\longrightarrow\mathbb R
$$

を考える。広義積分 $\int_0^\infty f(x,y)\,dy$ は $[a,b]$ 上で一様収束するとする。すなわち、任意の $\varepsilon>0$ に対してある $M>0$ が存在し、$d>M$ と $a\le x\le b$ を満たす任意の $d,x$ について

$$
\left|\int_d^\infty f(x,y)\,dy\right|<\varepsilon
$$

が成り立つものとする。

1. $\displaystyle x\longmapsto\int_0^\infty f(x,y)\,dy$ が $[a,b]$ 上で連続であることを示せ。
2. 次式を証明せよ。

$$
\lim_{t\to\infty}\int_0^t\left(\int_a^b f(x,y)\,dx\right)dy
=\int_a^b\left(\int_0^\infty f(x,y)\,dy\right)dx.
$$

### 题目描述

设 $f$ 在 $[a,b]\times[0,\infty)$ 上连续，且关于 $y$ 的反常积分在 $x\in[a,b]$ 上一致收敛。证明该积分关于 $x$ 连续，并证明可交换有限区间上的 $x$ 积分与 $t\to\infty$ 的极限。

## **Kai**

$t>0$ に対して

$$
F_t(x)=\int_0^t f(x,y)\,dy,
\qquad
F(x)=\int_0^\infty f(x,y)\,dy
$$

とおく。

### (1)

$f$ はコンパクト集合 $[a,b]\times[0,t]$ 上で連続であるから、$F_t$ は $[a,b]$ 上で連続である。また、仮定より

$$
\sup_{x\in[a,b]}|F(x)-F_t(x)|
=\sup_{x\in[a,b]}
\left|\int_t^\infty f(x,y)\,dy\right|
\longrightarrow0
$$

である。したがって $F_t$ は $F$ に一様収束する。連続関数列の一様極限は連続なので、$F$ は $[a,b]$ 上で連続である。

### (2)

有限長方形 $[a,b]\times[0,t]$ 上では $f$ が連続であるため、積分順序を交換でき、

$$
\int_0^t\left(\int_a^b f(x,y)\,dx\right)dy
=\int_a^b F_t(x)\,dx
$$

である。一様収束より

$$
\left|
\int_a^b F_t(x)\,dx-
\int_a^b F(x)\,dx
\right|
\le(b-a)\sup_{x\in[a,b]}|F_t(x)-F(x)|
\longrightarrow0.
$$

よって

$$
\boxed{
\lim_{t\to\infty}\int_0^t\left(\int_a^b f(x,y)\,dx\right)dy
=\int_a^b\left(\int_0^\infty f(x,y)\,dy\right)dx
}.
$$
