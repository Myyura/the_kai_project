---
sidebar_label: "2022年8月実施 数学 2"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Burgers-Equation
---

# 京都大学 工学研究科 機械工学群 2022年8月実施 数学 問題2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html) refined with GPT 6 Astra)

## **Description**

2.

### 2-1

(1) 実変数 $x$ の実関数 $f(x)$ は次の常微分方程式

$$
f\frac{df}{dx}=\frac{d^2f}{dx^2},\tag{2.1}
$$

の有界な解で、$f(0)=0$ かつ $\displaystyle\lim_{x\to\pm\infty}f(x)=\mp1$（複号同順）であるとする。$\dfrac{df^2}{dx}=2f\dfrac{df}{dx}$ の関係に注意して $f(x)$ を具体的に求めよ。なお、求解の際には $\displaystyle\lim_{x\to\pm\infty}\dfrac{df}{dx}=0$ としてよい。

(2) 問い2-1 (1) の解 $f(x)$ を用いて $g(x)=af(a(x-b))+c$ とおく（$a>0$、$b,c$ はそれぞれ実定数）。$g(x)$ が次の常微分方程式

$$
(g-c)\frac{dg}{dx}=\frac{d^2g}{dx^2},\tag{2.2}
$$

を満たすことを示せ。また、$\displaystyle\lim_{x\to\pm\infty}g(x)$ の値を求めよ。

### 2-2

実変数 $t,x$ の実関数 $u(t,x)$ に対する次の偏微分方程式を考える。

$$
\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial x}=\frac{\partial^2u}{\partial x^2}.\tag{2.3}
$$

この方程式には $u(t,x)=V(\xi)$ という形［ここで $\xi=x-wt$（$w$ は実定数）とおいた］で表される有界な解（進行波解とよぶ）があることが知られている。以下では、この進行波解で次の条件を満たすものを考える。

$$
\begin{cases}u\to u_+&(x\to\infty),\\u\to u_-&(x\to-\infty).\end{cases}
$$

ここで $u_+,u_-$ は $u_->u_+$ を満たす実定数である。

(1) $\dfrac{\partial u}{\partial t}$ を $V(\xi)$ を用いて表せ。

(2) 式 (2.3) を $V(\xi)$ に対する常微分方程式に書き換えよ。

(3) $u(0,0)=\dfrac12(u_++u_-)$ のとき、$V(\xi)$ を具体的に求めよ。また、$w$ を $u_+$ および $u_-$ を用いて表せ。

### 题目描述

2.

**2-1**

(1) 实变量 $x$ 的实函数 $f(x)$ 是下列常微分方程的有界解：

$$
f\frac{df}{dx}=\frac{d^2f}{dx^2}.\qquad(2.1)
$$

设 $f(0)=0$ 且 $\displaystyle\lim_{x\to\pm\infty}f(x)=\mp1$（上下符号按顺序对应）。利用 $\dfrac{df^2}{dx}=2f\dfrac{df}{dx}$ 的关系，求 $f(x)$ 的具体表达式。求解时可设 $\displaystyle\lim_{x\to\pm\infty}\dfrac{df}{dx}=0$。

(2) 利用2-1 (1) 的解 $f(x)$，令 $g(x)=af(a(x-b))+c$，其中 $a>0$，$b,c$ 分别为实常数。证明 $g(x)$ 满足常微分方程

$$
(g-c)\frac{dg}{dx}=\frac{d^2g}{dx^2},\qquad(2.2)
$$

并求 $\displaystyle\lim_{x\to\pm\infty}g(x)$。

**2-2**

考虑实变量 $t,x$ 的实函数 $u(t,x)$ 所满足的偏微分方程

$$
\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial x}=\frac{\partial^2u}{\partial x^2}.\qquad(2.3)
$$

已知该方程存在形如 $u(t,x)=V(\xi)$ 的有界解，称为行波解，其中 $\xi=x-wt$，$w$ 为实常数。下面考虑满足下列条件的行波解：

$$
\begin{cases}u\to u_+&(x\to\infty),\\u\to u_-&(x\to-\infty).\end{cases}
$$

这里 $u_+,u_-$ 为满足 $u_->u_+$ 的实常数。

(1) 用 $V(\xi)$ 表示 $\dfrac{\partial u}{\partial t}$。

(2) 将式 (2.3) 改写为关于 $V(\xi)$ 的常微分方程。

(3) 当 $u(0,0)=\dfrac12(u_++u_-)$ 时，求 $V(\xi)$ 的具体表达式，并用 $u_+,u_-$ 表示 $w$。

## **Kai**

### 2-1 (1)

$(f^2-2f')'=0$ より $f^2-2f'=C$。無限遠の条件から $C=1$ なので

$$
f'=\frac{f^2-1}{2}.
$$

$f(0)=0$ の近傍で変数を分離して積分すると

$$
\log\left|\frac{f-1}{f+1}\right|=x+C_1.
$$

初期条件を用いて $(f-1)/(f+1)=-e^x$、したがって

$$
\boxed{f(x)=\frac{1-e^x}{1+e^x}=-\tanh\frac x2}.
$$

この式は全実数で有界であり、指定された両端の極限も満たす。

### 2-1 (2)

$y=a(x-b)$ とすると $g'=a^2f'(y)$、$g''=a^3f''(y)$。よって

$$
(g-c)g'=a^3f(y)f'(y)=a^3f''(y)=g''.
$$

$a>0$ より

$$
\boxed{\lim_{x\to+\infty}g(x)=c-a,\qquad
\lim_{x\to-\infty}g(x)=c+a}.
$$

### 2-2 (1)

連鎖律により

$$
\boxed{\frac{\partial u}{\partial t}=-wV'(\xi)}.
$$

### 2-2 (2)

$u_x=V'$、$u_{xx}=V''$ を代入すると

$$
\boxed{(V-w)V'=V''}.
$$

### 2-2 (3)

2-1 (2) と対応させ、$c=w$ とおく。両端の条件から

$$
w-a=u_+,\qquad w+a=u_-.
$$

したがって

$$
\boxed{w=\frac{u_-+u_+}{2}},\qquad a=\frac{u_--u_+}{2}>0.
$$

$V(0)=w$ から平行移動の定数は $b=0$。よって

$$
\boxed{V(\xi)=\frac{u_-+u_+}{2}
-\frac{u_--u_+}{2}\tanh\left(\frac{u_--u_+}{4}\xi\right)}.
$$

この解は左側の値 $u_-$ から右側の値 $u_+$ へ単調に減少する。

## **Reference**

- [京都大学公式問題の保存版：2023年度数学（2022年8月5日実施、PDF 4ページ）](https://web.archive.org/web/20230514225706id_/https://www.me.t.kyoto-u.ac.jp/ja/admission/exam/body/past_problems/files/2023_math)
- [Miyake：2023年度数学 2](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6_2.html)
