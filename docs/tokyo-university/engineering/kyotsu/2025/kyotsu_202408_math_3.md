---
sidebar_label: '2024年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Infinite-Series-by-Residues
---

# 東京大学 工学系研究科 2024年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

複素関数 $f(z)=\cot z/z^2$ を考える。ただし $\cot z=1/\tan z$ とする。正整数 $m$ に対して

$$
D_m=\lim_{z\to0}\frac{d^m}{dz^m}(z\cot z)
$$

とする。必要ならば $D_2=-2/3$ および $\lim_{z\to n\pi}(z-n\pi)/\sin z=(-1)^n$（$n\in\mathbb Z$）を用いてよい。

I. $f$ のすべての極と、その位数を求めよ。

II. 各極における留数を求めよ。

III. 正整数 $M$ に対し $R=\pi(2M+1)$ とおき、$-R/2\le t\le R/2$ を動く媒介変数 $t$ によって、図の四つの線分を定義する。

$$
C_1:z=R/2+it,\quad C_2:z=-t+iR/2,\quad C_3:z=-R/2-it,\quad C_4:z=t-iR/2.
$$

いずれも始点は $t=-R/2$、終点は $t=R/2$ に対応する。$I_k=\int_{C_k}f(z)\,dz$ とし、$\lim_{M\to\infty}I_k$ を求めよ（$k=1,2,3,4$）。

![正方形の積分路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2025/math3-square-contour.svg)

IV. 四つの線分をつないだ閉曲線を $C$ とする。$I=\oint_Cf(z)\,dz$ に留数定理を適用して、$\sum_{n=1}^{\infty}1/n^2$ を求めよ。

V. 正整数 $N$ に対して $g(z)=\cot z/z^{2N}$ とする。I–IV と同様の手順により、$\sum_{n=1}^{\infty}1/n^{2N}$ を $D_m$ を用いて表せ。

#### 题目描述

设 $f(z)=\cot z/z^2$，其中 $\cot z=1/\tan z$。对正整数 $m$，定义

$$
D_m=\lim_{z\to0}\frac{d^m}{dz^m}(z\cot z).
$$

可使用 $D_2=-2/3$ 及 $\lim_{z\to n\pi}(z-n\pi)/\sin z=(-1)^n$（$n\in\mathbb Z$）。

I. 求 $f$ 的全部极点及其阶数。

II. 求各极点的留数。

III. 对正整数 $M$，令 $R=\pi(2M+1)$，以 $-R/2\le t\le R/2$ 定义四条有向线段

$$
C_1:z=R/2+it,\quad C_2:z=-t+iR/2,\quad
C_3:z=-R/2-it,\quad C_4:z=t-iR/2.
$$

各线段均从 $t=-R/2$ 走向 $t=R/2$。令 $I_k=\int_{C_k}f(z)\,dz$，求 $\lim_{M\to\infty}I_k$（$k=1,2,3,4$）。


IV. 将四条线段连接成闭合曲线 $C$，对 $I=\oint_C f(z)\,dz$ 应用留数定理，求 $\sum_{n=1}^{\infty}1/n^2$。

V. 对正整数 $N$，将 $f$ 换成 $g(z)=\cot z/z^{2N}$，仿照 I–IV，用 $D_m$ 表示 $\sum_{n=1}^{\infty}1/n^{2N}$。

## **Kai**

### I、II

$z\cot z$ は原点に正則に延長でき、その値は $1$ である。よって $f$ は $0$ に3位の極を持ち、他の極 $n\pi$（$n\in\mathbb Z\setminus\{0\}$）はすべて単純極である。

原点では $f=(z\cot z)/z^3$ の $z^{-1}$ の係数が $D_2/2!=-1/3$ となる。非零整数 $n$ に対しては

$$
\operatorname{Res}(f,n\pi)=\lim_{z\to n\pi}\frac{(z-n\pi)\cos z}{z^2\sin z}=\frac1{n^2\pi^2}.
$$

よって

$$
\boxed{\operatorname{Res}(f,0)=-\frac13,\qquad\operatorname{Res}(f,n\pi)=\frac1{n^2\pi^2}\ (n\ne0)}.
$$

### III

各辺で $|z|\ge R/2$ である。縦の辺では $\Re z=\pm(M+1/2)\pi$ より $|\cot z|=|\tanh(\Im z)|\le1$ である。横の辺では

$$
|\cot(x+iy)|^2=\frac{\cosh2y+\cos2x}{\cosh2y-\cos2x}\le\coth^2|y|
$$

より $|\cot z|$ は一様有界である。$M$ に依存しない上界を $K$ とすると、

$$
|I_k|\le\frac{KR}{(R/2)^2}=\frac{4K}{R}\to0.
$$

したがって

$$
\boxed{\lim_{M\to\infty}I_k=0\qquad(k=1,2,3,4)}.
$$

### IV

$C$ の内部の極は $n\pi$（$-M\le n\le M$）である。留数定理より

$$
I=2\pi i\left(-\frac13+\frac2{\pi^2}\sum_{n=1}^M\frac1{n^2}\right).
$$

$M\to\infty$ として III を用いると、

$$
\boxed{\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}}.
$$

### V

$g$ は原点に $2N+1$ 位の極を持ち、留数は $D_{2N}/(2N)!$ である。非零の $n\pi$ における留数は $(n\pi)^{-2N}$ である。各辺の積分は $O(R^{1-2N})\to0$ なので、

$$
0=\frac{D_{2N}}{(2N)!}+\frac2{\pi^{2N}}\sum_{n=1}^{\infty}\frac1{n^{2N}}.
$$

したがって

$$
\boxed{\sum_{n=1}^{\infty}\frac1{n^{2N}}=-\frac{\pi^{2N}D_{2N}}{2(2N)!}}.
$$

