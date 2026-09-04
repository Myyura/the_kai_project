---
sidebar_label: "2017年8月実施 数学コース 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Linear-Operator-on-Polynomial-Space
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Exponential
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2017年8月実施 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$V$ を実係数の $4$ 次以下の多項式全体からなる線形空間とし、$t$ を $0$ でない実数とする。$f(x)$ に $f(x+t)$ を対応させる写像を $T$、$f'(x)$ を対応させる写像を $D$ とする。

1. $T,D$ が線形写像であることを示せ。
2. $T,D$ の固有値と固有ベクトルをすべて求めよ。
3. 基底 $[1,x,x^2,x^3,x^4]$ に関する $T,D$ の表現行列をそれぞれ $A,B$ とし、これらを求めよ。
4. $e^{tB}=\sum_{n=0}^{\infty}(tB)^n/n!$ と定めるとき、$A=e^{tB}$ を示せ。

### 题目描述

在次数不超过 $4$ 的实系数多项式空间上，考虑平移算子 $Tf(x)=f(x+t)$（$t\in\mathbb R\setminus\{0\}$）和微分算子 $Df(x)=f'(x)$：证明线性，求全部特征值与特征向量，写出在基底 $[1,x,x^2,x^3,x^4]$ 下的矩阵，并证明 $A=e^{tB}$。

## **Kai**

### (1)

任意の $f,g\in V$ と $\alpha,\beta\in\mathbb R$ に対して

$$
T(\alpha f+\beta g)=\alpha Tf+\beta Tg,
\qquad
D(\alpha f+\beta g)=\alpha Df+\beta Dg.
$$

よって $T,D$ は線形写像である。

### (2)

$0\ne f\in V$ の最高次の係数を比較すると、$Tf=\lambda f$ から $\lambda=1$ を得る。さらに $f(x+t)=f(x)$ を満たす多項式は定数のみである。したがって

$$
\boxed{T:\ \lambda=1,\quad E_1=\operatorname{span}\{1\}}.
$$

また $Df=\lambda f$ について次数を比較すると $\lambda\ne0$ は不可能であり、$Df=0$ を満たす多項式は定数のみである。ゆえに

$$
\boxed{D:\ \lambda=0,\quad E_0=\operatorname{span}\{1\}}.
$$

いずれの固有ベクトルも零でない定数多項式である。固有値の代数的重複度はともに $5$ である。

### (3)

二項展開と微分から

$$
A=
\begin{pmatrix}
1&t&t^2&t^3&t^4\\
0&1&2t&3t^2&4t^3\\
0&0&1&3t&6t^2\\
0&0&0&1&4t\\
0&0&0&0&1
\end{pmatrix},
\qquad
B=
\begin{pmatrix}
0&1&0&0&0\\
0&0&2&0&0\\
0&0&0&3&0\\
0&0&0&0&4\\
0&0&0&0&0
\end{pmatrix}.
$$

### (4)

$B^5=0$ である。任意の $f\in V$ に対し、Taylor の公式は有限和となり

$$
f(x+t)=\sum_{n=0}^{4}\frac{t^n}{n!}f^{(n)}(x)
=\left(\sum_{n=0}^{4}\frac{t^n}{n!}D^n\right)f(x).
$$

したがって $T=e^{tD}$ であり、同じ基底で表現行列をとれば

$$
\boxed{A=e^{tB}}.
$$
