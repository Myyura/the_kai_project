---
comments: false
title: 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 必須問題 線形代数 [1]
tags:
  - University-of-Electro-Communications 
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 必須問題 線形代数 \[1\]

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
$A$ の固有値を $\lambda$ とすると、

$$
  \begin{aligned}
  0
  &= \det \begin{pmatrix}
  -1-\lambda & 1+a & -2 \\ 0 & 1-\lambda & 0 \\ 4 & 1-a & 5-\lambda \end{pmatrix}
  \\
  &= (1-\lambda) \det \begin{pmatrix} -1-\lambda & -2 \\ 4 & 5-\lambda \end{pmatrix}
  \\
  &= (1-\lambda) (\lambda^2 - 4 \lambda + 3)
  \\
  &= -(\lambda-1)^2 (\lambda-3)
  \\
  \therefore \ \ 
  \lambda &= 1, 3
  \end{aligned}
$$

を得る。

### (2)
$A$ の最大の固有値 $\lambda_1 = 3$ に対する固有ベクトルを求めるため、

$$
  \begin{aligned}
  \begin{pmatrix} -4 & 1+a & -2 \\ 0 & -2 & 0 \\ 4 & 1-a & 2 \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $y=0, 2x+z=0$ を得る。
したがって、 $\lambda_1=3$ に対する $A$ の固有空間は1次元であり、その基底は、例えば、

$$
  \begin{aligned}
  \begin{pmatrix} 1 \\ 0 \\ -2 \end{pmatrix}
  \end{aligned}
$$

である。

### (3)
$\lambda_2 = 1$ であり、

$$
  \begin{aligned}
  (\lambda_2 E - A)^2
  &= 4 \begin{pmatrix} -1 & -1 & -1 \\ 0 & 0 & 0 \\ 2 & 2 & 2 \end{pmatrix}
  \end{aligned}
$$

である。
この行列のランクは $1$ なので、
$f$ の核の次元は $2$ であり、 $f$ の像の次元は $1$ であることがわかる。

### (4)
$A$ が対角化可能であるための条件は、固有値 $\lambda_2=1$ の固有空間が2次元であることである。
固有値 $\lambda_2 = 1$ に対する固有ベクトルを求めるため、

$$
  \begin{aligned}
  \begin{pmatrix} -2 & 1+a & -2 \\ 0 & 0 & 0 \\ 4 & 1-a & 4 \end{pmatrix}
  \begin{pmatrix} x \\ y \\ z \end{pmatrix}
  = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、

$$
  \begin{align}
  -2x+(1+a)y-2z = 0 \tag{a} \label{a}
  \\
  4x+(1-a)y+4z = 0 \tag{b} \label{b}
  \end{align}
$$

を得る。
($\ref{a}$) $\times 2$ と ($\ref{b}$) の両辺を足すと、

$$
  \begin{align}
  (a+3)y = 0 \tag{c} \label{c}
  \end{align}
$$

を得る。

(i) $a \ne -3$ のとき、 ($\ref{a}$), ($\ref{b}$), ($\ref{c}$) より $y=0, x+z=0$ となるので、
固有値 $\lambda_2=1$ に対する固有空間は1次元であり、 $A$ は対角化可能でない。

(ii) $a = -3$ のとき、 ($\ref{a}$), ($\ref{b}$), ($\ref{c}$) より $x+y+z=0$ となるので、
固有値 $\lambda_2=1$ に対する固有空間は2次元であり、 $A$ は対角化可能である。

(i), (ii) より、 $A$ が対角化可能であるための条件は $a=-3$ である。

### (5)
$a=-3$ のとき、

$$
  \begin{aligned}
  P &= \begin{pmatrix} 1 & 1 & 1 \\ -1 & 0 & 0 \\ 0 & -1 & -2 \end{pmatrix}
  \end{aligned}
$$

とおくと、

$$
  \begin{aligned}
  P^{-1} &= \begin{pmatrix} 0 & -1 & 0 \\ 2 & 2 & 1 \\ -1 & -1 & -1 \end{pmatrix}
  \\
  P^{-1} A P &= \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  A^n
  &= P \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}^n P^{-1}
  \\
  &= P \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3^n \end{pmatrix} P^{-1}
  \\
  &= \begin{pmatrix} 2-3^n & 1-3^n & 1-3^n \\ 0 & 1 & 0 \\
  2 \cdot 3^n - 2 & 2 \cdot 3^n - 2 & 2 \cdot 3^n - 1 \end{pmatrix}
  \end{aligned}
$$

を得る。
