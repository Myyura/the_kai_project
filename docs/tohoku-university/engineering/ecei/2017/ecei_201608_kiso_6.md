---
sidebar_label: 2016年8月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Commuting-Matrices
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 基礎科目 問題6 物理基礎2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

行列の交換関係に関して，次の問に答えよ。交換関係とは，$[A,B]=AB-BA$ のことである。$A$ と $B$ は任意の正方行列である。ここで，$i$ は虚数単位であり，$O$ は零行列である。$f(t)=\exp(tA)B\exp(-tA),\ g(\lambda)=\exp(\lambda A)\exp(\lambda B)$ とする。ただし，$A$ と $B$ は変数 $t$ 及び $\lambda$ を含まないものとする。行列の指数関数は次のように定義される：
$$
\exp(X)=\sum_{n=0}^{\infty}\frac1{n!}X^n.
$$
ここで，$X$ は任意の正方行列であり，$X^0$ は単位行列 $I$ を表すものとする。

(1)
$$
\alpha=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\quad
\beta=\frac1{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix},\quad
\gamma=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}
$$
とする。交換関係 $[\alpha,\beta]$ 及び $[\alpha,(\alpha^2+\beta^2+\gamma^2)]$ を計算せよ。

(2) $f(0)$ を求めよ。

(3) $\frac d{dt}\exp(tA)=A\exp(tA)=\exp(tA)A$ を示せ。

(4) 下記二つの関係式を示せ：
$$
f'(t)=\frac d{dt}f(t)=\exp(tA)[A,B]\exp(-tA),
$$
$$
f''(t)=\frac d{dt}f'(t)=\exp(tA)[A,[A,B]]\exp(-tA).
$$

(5) $[A,[A,B]]=[B,[A,B]]=O$ のとき，$\exp(A)B\exp(-A)$ を計算せよ。$f(t)$ が次のように展開できることに注意せよ：
$$
f(t)=f(0)+\frac t{1!}f'(0)+\frac{t^2}{2!}f''(0)+\frac{t^3}{3!}f^{(3)}(0)+\cdots.
$$

(6) $[A,[A,B]]=[B,[A,B]]=O$ のとき，$[\exp(\lambda A),B]=-\lambda[B,A]\exp(\lambda A)$ となる。この関係式を用いて，$\frac d{d\lambda}g(\lambda)=(A+B+\lambda[A,B])g(\lambda)$ を示せ。

(7) $[A,[A,B]]=[B,[A,B]]=O$ のとき，$\exp(A)\exp(B)=\exp\left(A+B+\frac12[A,B]\right)$ を証明せよ。

### 题目描述

矩阵交换子定义为 $[A,B]=AB-BA$，矩阵指数定义为 $e^X=\sum_{n\ge0}X^n/n!$。令

$$
f(t)=e^{tA}Be^{-tA},\qquad g(\lambda)=e^{\lambda A}e^{\lambda B},
$$

$A,B$ 不依赖于 $t,\lambda$，$O$ 表示零矩阵。

1. 给定
   

$$
\alpha=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\quad
   \beta=\frac1{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix},\quad
   \gamma=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix},
$$

   求 $[\alpha,\beta]$ 和 $[\alpha,\alpha^2+\beta^2+\gamma^2]$。
2. 求 $f(0)$。
3. 证明 $\frac d{dt}e^{tA}=Ae^{tA}=e^{tA}A$。
4. 证明 $f'(t)=e^{tA}[A,B]e^{-tA}$、$f''(t)=e^{tA}[A,[A,B]]e^{-tA}$。
5. 当 $[A,[A,B]]=[B,[A,B]]=O$ 时，求 $e^ABe^{-A}$。
6. 在相同条件下，利用 $[e^{\lambda A},B]=-\lambda[B,A]e^{\lambda A}$ 证明 $g'(\lambda)=(A+B+\lambda[A,B])g(\lambda)$。
7. 在相同条件下证明 $e^Ae^B=e^{A+B+[A,B]/2}$。

## **Kai**

### (1)

直接计算得

$$
\boxed{[\alpha,\beta]=i\gamma.}
$$

又 $\alpha^2+\beta^2+\gamma^2=2I$，因此

$$
\boxed{[\alpha,\alpha^2+\beta^2+\gamma^2]=O.}
$$

### (2)–(3)

$$
\boxed{f(0)=B.}
$$

逐项求导并移指标：

$$
\frac d{dt}e^{tA}=\sum_{n=1}^{\infty}\frac{t^{n-1}A^n}{(n-1)!}=A\sum_{k=0}^{\infty}\frac{t^kA^k}{k!}=Ae^{tA}=e^{tA}A.
$$

### (4)

由乘积法则及 $A$ 与 $e^{tA}$ 可交换，

$$
f'=Ae^{tA}Be^{-tA}-e^{tA}Be^{-tA}A=e^{tA}(AB-BA)e^{-tA}.
$$

再求导一次即得

$$
\boxed{f''=e^{tA}[A,[A,B]]e^{-tA}.}
$$

### (5)

记 $C=[A,B]$。条件给出 $f''=0$，且 $f(0)=B,f'(0)=C$，所以

$$
f(t)=B+tC,\qquad\boxed{e^ABe^{-A}=B+[A,B].}
$$

### (6)

由 $e^{\lambda A}B=(B+\lambda C)e^{\lambda A}$，

$$
g'=Ae^{\lambda A}e^{\lambda B}+e^{\lambda A}Be^{\lambda B}
=\boxed{(A+B+\lambda C)g}.
$$

### (7)

因 $[A,C]=[B,C]=0$，矩阵 $A+B$ 与 $C$ 可交换。因此

$$
h(\lambda)=\exp\left[\lambda(A+B)+\frac{\lambda^2}2C\right]
$$

满足 $h'=(A+B+\lambda C)h$、$h(0)=I$，与 $g$ 的初值问题相同。由解的唯一性 $g=h$，令 $\lambda=1$ 得

$$
\boxed{e^Ae^B=\exp\left(A+B+\frac12[A,B]\right).}
$$
