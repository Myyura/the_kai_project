---
sidebar_label: "2017年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
  - Mathematics.Real-Analysis.Uniform-Continuity
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$a>0$ とする。$f:[0,a]\times[0,\infty)\to[0,\infty)$ を連続関数とし、任意の実数 $t\in[0,a]$ および $x_1,x_2\ge0$ に対して、

$$
x_1\le x_2\text{ ならば }f(t,x_1)\le f(t,x_2)
$$

が成り立つものとする。さらに、ある $M>0$ で $\sup_{t\in[0,a]}f(t,M)\le M/a$ が成り立つとする。以下の問いに答えよ。

(1) 関数列 $\{y_n\}_{n=1}^\infty$ を

$$
\begin{cases}
y_n(t)=\displaystyle\int_0^t f(s,y_{n-1}(s))ds&\text{（ただし }n\text{ は1以上の整数）},\\
y_0(t)=0
\end{cases}
\qquad(0\le t\le a)
$$

によって帰納的に定義する。

(a) 各 $t\in[0,a]$ で $\{y_n(t)\}_{n=1}^\infty$ が単調増加な数列であることを示せ。

(b) $1$ 以上のすべての整数 $n$ に対して、各 $t\in[0,a]$ で $0\le y_n(t)\le M$ が成り立つことを示せ。

(2) (1) で定義した関数列 $\{y_n\}_{n=1}^\infty$ は、ある連続関数 $y$ に $[0,a]$ 上で一様収束することを示せ。また、$y$ は $(0,a)$ 上で連続的微分可能であること、および、各 $t\in(0,a)$ で

$$
y'(t)=f(t,y(t))
$$

が成り立つことを示せ。

### 题目描述

设 $a>0$，连续函数 $f:[0,a]\times[0,\infty)\to[0,\infty)$ 满足：对任意 $t\in[0,a]$ 和 $x_1,x_2\ge0$，

$$
x_1\le x_2\quad\Longrightarrow\quad f(t,x_1)\le f(t,x_2).
$$

此外，存在 $M>0$，使 $\sup_{t\in[0,a]}f(t,M)\le M/a$。回答下列问题。

(1) 递归定义函数列 $\{y_n\}_{n=1}^\infty$：

$$
\begin{cases}
y_n(t)=\displaystyle\int_0^t f(s,y_{n-1}(s))ds& (n\ge1),\\
y_0(t)=0
\end{cases}
\qquad(0\le t\le a).
$$

(a) 证明对每个 $t\in[0,a]$，数列 $\{y_n(t)\}_{n=1}^\infty$ 单调递增。

(b) 证明对所有整数 $n\ge1$ 和所有 $t\in[0,a]$，都有 $0\le y_n(t)\le M$。

(2) 证明第 (1) 问定义的函数列在 $[0,a]$ 上一致收敛于某个连续函数 $y$。再证明 $y$ 在 $(0,a)$ 上连续可微，且对每个 $t\in(0,a)$，

$$
y'(t)=f(t,y(t)).
$$

## **Kai**

### (1)(a)

$f\ge0$ より $y_1\ge y_0=0$ である。$y_n\ge y_{n-1}$ とすると、$f$ の第2変数に関する単調性から

$$
y_{n+1}(t)-y_n(t)
=\int_0^t\bigl(f(s,y_n(s))-f(s,y_{n-1}(s))\bigr)\,ds\ge0.
$$

従って帰納法により各点で単調増加する。

### (1)(b)

$y_0=0$ であり、$0\le y_{n-1}(s)\le M$ ならば仮定から

$$
0\le y_n(t)\le\int_0^t f(s,M)\,ds
\le\frac{M}{a}t\le M.
$$

帰納法により全ての $n$ と $t\in[0,a]$ について成立する。

### (2)

(1) によって各点極限 $y(t)=\lim_n y_n(t)$ が存在する。また $0\le f(s,y_{n-1}(s))\le M/a$ なので

$$
|y_n(t)-y_n(s)|\le\frac Ma|t-s|.
$$

極限をとると同じ不等式が $y$ にも成立し、$y$ は連続である。連続関数列 $(y_n)$ はコンパクト区間上で連続関数 $y$ に単調収束するので、Dini の定理から一様収束する。

$f$ は $[0,a]\times[0,M]$ 上で一様連続であるため、$f(s,y_{n-1}(s))\to f(s,y(s))$ も一様収束する。よって積分方程式の極限をとれば

$$
y(t)=\int_0^t f(s,y(s))\,ds.
$$

右辺の被積分関数は連続なので、$y$ は $(0,a)$ 上で連続微分可能であり、$y'(t)=f(t,y(t))$, $y(0)=0$ を満たす。

## **Reference**

- [東北大学 2018年度・選択問題の公開保存資料（PDF 5ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#b2d74e26-6bf7-416c-8393-0be5c7f25de8)
