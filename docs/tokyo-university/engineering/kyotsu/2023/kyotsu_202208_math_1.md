---
sidebar_label: '2022年8月実施 数学 第1問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2022年8月実施 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約

[公式問題 PDF・3ページ](https://www.t.u-tokyo.ac.jp/hubfs/M_J_E_2023.pdf#page=3)

I. $a,b,c>0$ として、$\displaystyle\lim_{x\to0}\frac{b^x-c^x}{ax}$ を求める。

II. 次の微分方程式の一般解を求める。

1. $\displaystyle \frac{dy}{dx}-\frac yx=\log x\quad(x>0).$ （2）
2. $\displaystyle \frac{d^2y}{dx^2}-\frac{dy}{dx}-2y=2x^2+2x.$ （3）

III. 正の整数 $n$ に対し $\displaystyle a_n=\frac{n!}{n^{n+1/2}e^{-n}}$ とおく。$\displaystyle\lim_{n\to\infty}\frac{a_n}{a_{n+1}}$ を求める。$e$ は自然対数の底である。$x>0$ で $y=x^{-1}$ が下に凸であることを利用してよい。

### 题目描述

1. 给定 $a,b,c>0$，求极限 $\lim_{x\to0}(b^x-c^x)/(ax)$。
2. 求两个微分方程的通解：
   1. $y'-y/x=\log x$，$x>0$；
   2. $y''-y'-2y=2x^2+2x$。
3. 对正整数 $n$，定义 $a_n=n!/(n^{n+1/2}e^{-n})$。求 $\lim_{n\to\infty}a_n/a_{n+1}$，其中 $e$ 是自然对数的底。可利用 $y=x^{-1}$ 在 $x>0$ 上向上凸。

## **Kai**
### I.

$$
\begin{aligned}
\lim_{x \to 0} \frac{b^x - c^x}{ax}
&= \lim_{x \to 0} \frac{e^{x \log b} - e^{x \log c}}{ax}
\\
&= \lim_{x \to 0}
\frac{\log b \cdot e^{x \log b} - \log c \cdot e^{x \log c}}{a}
\\
&= \frac{\log b - \log c}{a}
\\
&= \frac{1}{a} \log \frac{b}{c}
\end{aligned}
$$

### II.
#### 1.
$x$ の関数 $f(x)$ を使って、 $y=f(x)x$ を (2) に代入すると、

$$
\begin{aligned}
\frac{df(x)}{dx} x &= \log x
\\
\therefore \ \ 
f(x)
&= \int \frac{\log x}{x} dx
\\
&= \int \left( \log x \right)' \log x dx
\\
&= \left( \log x \right)^2 - \int \frac{\log x}{x} dx
\\
\therefore \ \ 
f(x) &= \frac{1}{2} \left( \log x \right)^2 + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

となるので、求める一般解は

$$
\begin{aligned}
y &= \frac{1}{2} x \left( \log x \right)^2 + Cx
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

である。

#### 2.
まず、

$$
\begin{aligned}
\frac{d^2y}{dx^2} - \frac{dy}{dx} - 2y = 0
\end{aligned}
$$

に $y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）
を代入すると、

$$
\begin{aligned}
\lambda^2 - \lambda - 2 &= 0
\\
(\lambda - 2)(\lambda + 1) &= 0
\\
\therefore \ \ \lambda &= 2, -1
\end{aligned}
$$

となるので、この微分方程式の一般解は

$$
\begin{aligned}
y = A e^{2x} + B e^{-x}
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{aligned}
$$

である。

次に、 (3) に $y=Cx^2+Dx+E$ （ $C,D,E$ は $x$ によらない定数） を代入すると、

$$
\begin{aligned}
C = -1, \ \ D = 0, \ \ E = -1
\end{aligned}
$$

を得るので、

$$
\begin{aligned}
y = -x^2 - 1
\end{aligned}
$$

は (3) の特殊解である。

以上より、 (3) の一般解は

$$
\begin{aligned}
y = A e^{2x} + B e^{-x} -x^2 - 1
\ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
\end{aligned}
$$

である。

### III.

$$
\begin{aligned}
\frac{a_n}{a_{n+1}}
&= \frac{n!}{n^{n + \frac{1}{2}} e^{-n}}
\cdot \frac{(n+1)^{n + \frac{3}{2}} e^{-n-1}}{(n+1)!}
\\
&= \frac{1}{e} \cdot \left( 1 + \frac{1}{n} \right)^\frac{1}{2}
\cdot \left( 1 + \frac{1}{n} \right)^n
\\
&\xrightarrow{n \to \infty} 1
\end{aligned}
$$
