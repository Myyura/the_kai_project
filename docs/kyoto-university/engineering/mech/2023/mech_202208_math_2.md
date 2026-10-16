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

### 2-1

(1) 実変数 $x$ の実関数 $f(x)$ は常微分方程式

$$
f\frac{df}{dx}=\frac{d^2f}{dx^2}
$$

の有界な解で、$f(0)=0$、$\lim_{x\to\pm\infty}f(x)=\mp1$（複号同順）を満たす。$d(f^2)/dx=2f\,df/dx$ に注意して $f(x)$ を具体的に求めよ。求解に際して $\lim_{x\to\pm\infty}df/dx=0$ としてよい。

(2) (1) の解を用いて $g(x)=af(a(x-b))+c$ とおく。ただし $a>0$、$b,c$ は実定数である。$g$ が

$$
(g-c)\frac{dg}{dx}=\frac{d^2g}{dx^2}
$$

を満たすことを示し、$\lim_{x\to\pm\infty}g(x)$ を求めよ。

### 2-2

実変数 $t,x$ の実関数 $u(t,x)$ に関する偏微分方程式

$$
\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial x}
=\frac{\partial^2u}{\partial x^2}
$$

を考える。この方程式には $u(t,x)=V(\xi)$、$\xi=x-wt$（$w$ は実定数）という形の有界な進行波解が存在する。以下では

$$
u\to u_+\quad(x\to\infty),\qquad
u\to u_-\quad(x\to-\infty),\qquad u_->u_+
$$

を満たす進行波解を考える。

(1) $\partial u/\partial t$ を $V(\xi)$ を用いて表せ。

(2) 偏微分方程式を $V$ に対する常微分方程式に書き換えよ。

(3) $u(0,0)=(u_++u_-)/2$ のとき、$V(\xi)$ を具体的に求めよ。また $w$ を $u_+,u_-$ で表せ。

#### 题目描述

2-1：(1) 求有界实函数 $f$，满足 $ff'=f''$、$f(0)=0$、$f(+\infty)=-1$、$f(-\infty)=1$。可使用 $f'(\pm\infty)=0$。(2) 令 $g(x)=af(a(x-b))+c$，其中 $a>0$，$b,c$ 为实常数。证明 $(g-c)g'=g''$，并求 $g(\pm\infty)$。

2-2：考虑 $u_t+uu_x=u_{xx}$ 的有界行波解 $u(t,x)=V(\xi)$，$\xi=x-wt$，$w$ 为实常数。要求 $V(+\infty)=u_+$、$V(-\infty)=u_-$，且 $u_->u_+$。(1) 用 $V$ 表示 $u_t$；(2) 将偏微分方程改写为 $V$ 的常微分方程；(3) 若 $u(0,0)=(u_++u_-)/2$，求 $V(\xi)$ 及波速 $w$。

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
