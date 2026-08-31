---
sidebar_label: "2017年8月実施 数学コース 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Numerical-Analysis.Central-Finite-Difference-for-Second-Derivative
  - Mathematics.Calculus.Continuity-and-Differentiability
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2017年8月実施 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$f\colon\mathbb R\to\mathbb R$ が $C^2$ 級であるとき、任意の $x\in\mathbb R$ に対して

$$
\lim_{h\to0}\frac{f(x+h)+f(x-h)-2f(x)}{h^2}=f''(x)
$$

を示せ。

### (2)

$$
f(x)=
\begin{cases}
x\sin^2\dfrac1x,&x\ne0,\\
0,&x=0
\end{cases}
$$

とする。

1. $f$ が $x=0$ で微分可能でないことを示せ。
2. $\displaystyle\lim_{h\to0}\frac{f(h)+f(-h)-2f(0)}{h^2}$ が存在することを示せ。

### (3)

$f$ は連続であり、任意の $x\in\mathbb R$ で

$$
g(x)=\lim_{h\to0}\frac{f(x+h)+f(x-h)-2f(x)}{h^2}
$$

が存在して常に $g(x)>0$ であるとする。このとき $f$ が下に凸であることを示せ。

### 题目描述

1. 证明 $C^2$ 函数的二阶中心差商收敛到二阶导数。
2. 对 $f(x)=x\sin^2(1/x)$（$x\ne0$）且 $f(0)=0$，证明它在原点不可微，但原点的二阶中心差商极限存在。
3. 设连续函数处处具有严格为正的二阶中心差商极限，证明它是凸函数。

## **Kai**

### (1)

Taylor 展開より

$$
f(x\pm h)=f(x)\pm f'(x)h+\frac12f''(x)h^2+o(h^2).
$$

両式を加えて $2f(x)$ を引けば

$$
\frac{f(x+h)+f(x-h)-2f(x)}{h^2}
=f''(x)+o(1).
$$

したがって求める極限は $\boxed{f''(x)}$ である。

### (2)

#### (a)

$h\ne0$ に対して

$$
\frac{f(h)-f(0)}h=\sin^2\frac1h.
$$

$h_k=(k\pi)^{-1}$ では右辺は $0$、$\tilde h_k=(k\pi+\pi/2)^{-1}$ では $1$ となる。よって極限は存在せず、$f$ は $0$ で微分可能でない。

#### (b)

$f$ は奇関数であるから、$h\ne0$ では

$$
f(h)+f(-h)-2f(0)=0.
$$

したがって極限は $\boxed{0}$ である。

### (3)

任意の $a<b$ に対し、両端点を結ぶ直線を

$$
\ell(x)=\frac{b-x}{b-a}f(a)+\frac{x-a}{b-a}f(b)
$$

とし、$F=f-\ell$ とおく。もしある $x\in(a,b)$ で $F(x)>0$ なら、連続性により $F$ は $[a,b]$ の内点 $c$ で正の最大値をとる。十分小さい $h$ について

$$
F(c+h)+F(c-h)-2F(c)\le0
$$

であるから、その差商の極限も $0$ 以下である。一方、$\ell$ は一次関数なので、この極限は $g(c)>0$ に等しく、矛盾する。

ゆえに $F\le0$、すなわち任意の $a<x<b$ について

$$
f(x)\le
\frac{b-x}{b-a}f(a)+\frac{x-a}{b-a}f(b).
$$

したがって $f$ は下に凸である。
