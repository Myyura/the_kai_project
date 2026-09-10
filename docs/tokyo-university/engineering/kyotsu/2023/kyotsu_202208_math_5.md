---
sidebar_label: '2022年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Fourier-Series-Solution-of-Ordinary-Differential-Equation
---

# 東京大学 工学系研究科 2022年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. $f(x+\pi)=f(x-\pi)$ を満たす周期関数 $f(x)$ を考える。次の各場合についてフーリエ級数展開を求めよ。

1. $f(x)=x$（$-\pi<x<\pi$）、$f(-\pi)=f(\pi)=0$。
2. $f(x)=x^2$（$-\pi\le x\le\pi$）。

フーリエ級数は

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),
$$

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}f(x)\,dx,\quad a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\quad b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx
$$

で与えられる。

II. $A,T,L,R$ は正の実数、$\omega=2\pi/T$ とする。図に示す関数

$$
V(t)=A\left|\sin\frac{\omega t}{2}\right|
$$

の複素フーリエ級数展開は

$$
V(t)=-\frac{2A}{\pi}\sum_{n=-\infty}^{\infty}\frac{e^{in\omega t}}{4n^2-1}
$$

である。常微分方程式 $LI'(t)+RI(t)=V(t)$ の周期解を

$$
I(t)=\sum_{n=-\infty}^{\infty}C_ne^{in\omega t}
$$

と表すとき、$C_n$ を求めよ。

![電圧Vの周期波形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2023/math5-voltage.svg)

#### 题目描述

I. 对满足 $f(x+\pi)=f(x-\pi)$ 的周期函数，分别求下列情形的傅里叶级数。

1. $f(x)=x$（$-\pi<x<\pi$），且 $f(-\pi)=f(\pi)=0$。
2. $f(x)=x^2$（$-\pi\le x\le\pi$）。

采用

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),
$$

其中

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}f(x)\,dx,\quad a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\quad b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx.
$$

II. 设 $A,T,L,R>0$、$\omega=2\pi/T$，函数

$$
V(t)=A\left|\sin\frac{\omega t}{2}\right|
$$

的图形如下，其复傅里叶级数为

$$
V(t)=-\frac{2A}{\pi}\sum_{n=-\infty}^{\infty}\frac{e^{in\omega t}}{4n^2-1}.
$$

考虑微分方程 $LI'(t)+RI(t)=V(t)$ 的周期解。若

$$
I(t)=\sum_{n=-\infty}^{\infty}C_ne^{in\omega t},
$$

求 $C_n$。

## **Kai**

### I.1

奇関数なので $a_0=a_n=0$ である。部分積分により

$$
b_n=\frac2\pi\int_0^\pi x\sin nx\,dx=\frac{2(-1)^{n+1}}n.
$$

したがって

$$
\boxed{f(x)=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin nx}.
$$

端点では級数は左右極限の平均 $0$ に収束し、与えられた関数値に一致する。

### I.2

偶関数なので $b_n=0$ であり、

$$
a_0=\frac{2\pi^2}{3},\qquad a_n=\frac2\pi\int_0^\pi x^2\cos nx\,dx=\frac{4(-1)^n}{n^2}.
$$

よって

$$
\boxed{f(x)=\frac{\pi^2}{3}+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx}.
$$

### II

周期解のフーリエ級数を代入して係数を比較すると、

$$
(R+in\omega L)C_n=-\frac{2A}{\pi(4n^2-1)}.
$$

よって

$$
\boxed{C_n=-\frac{2A}{\pi(4n^2-1)(R+in\omega L)}}\quad(n\in\mathbb Z).
$$

特に $C_0=2A/(\pi R)$ である。同次解 $ce^{-Rt/L}$ が周期関数になるのは $c=0$ のときだけなので、この周期解は一意である。
