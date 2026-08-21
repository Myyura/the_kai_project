---
sidebar_label: "2022年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2022年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

正の整数 $m$ に対して，行列 $A(m)$ を

$$
A(m) = \begin{pmatrix} 1 & \frac{1}{\sqrt{2m}} & 0 \\ \frac{1}{\sqrt{2m}} & 1 & \frac{1}{\sqrt{2m}} \\ 0 & \frac{1}{\sqrt{2m}} & 1 \end{pmatrix}
$$

で定める．次の問に答えよ．

(1) 行列 $A(m)$ の固有値と，それらに対応する固有ベクトルを求めよ．

(2) 正の整数 $n$ に対して， $P^{-1}A(m)^nP$ が対角行列になるような直交行列 $P$ を1つ求めよ．

(3) 行列 $A(n)^n$ の固有値を $\lambda_1(n), \lambda_2(n), \lambda_3(n)$ とおく．ただし， $\lambda_1(n) > \lambda_2(n) > \lambda_3(n)$ とする．このとき， $i = 1, 2, 3$ について，極限値 $\lambda_i = \lim_{n \to \infty} \lambda_i(n)$ をそれぞれ求めよ．

### 题目描述

对正整数 $m$，定义矩阵

$$
A(m)=\begin{pmatrix}
1&\dfrac1{\sqrt{2m}}&0\\
\dfrac1{\sqrt{2m}}&1&\dfrac1{\sqrt{2m}}\\
0&\dfrac1{\sqrt{2m}}&1
\end{pmatrix}.
$$

回答下列问题。

(1) 求矩阵 $A(m)$ 的特征值及其对应的特征向量。

(2) 对正整数 $n$，求一个正交矩阵 $P$，使

$$
P^{-1}A(m)^nP
$$

为对角矩阵。

(3) 记矩阵 $A(n)^n$ 的特征值为

$$
\lambda_1(n),\lambda_2(n),\lambda_3(n),
$$

并规定

$$
\lambda_1(n)>\lambda_2(n)>\lambda_3(n).
$$

对 $i=1,2,3$，分别求极限

$$
\lambda_i=\lim_{n\to\infty}\lambda_i(n).
$$

## **Kai**

(1) $A(m)$ の固有方程式は

$$
\begin{aligned} \begin{vmatrix} 1-\lambda & \frac{1}{\sqrt{2m}} & 0 \\ \frac{1}{\sqrt{2m}} & 1-\lambda & \frac{1}{\sqrt{2m}} \\ 0 & \frac{1}{\sqrt{2m}} & 1-\lambda \end{vmatrix} = 0 \end{aligned}
$$

これを展開すると，

$$
\begin{aligned} (1-\lambda)\left((1-\lambda)^2 - \frac{1}{2m}\right) - \frac{1}{\sqrt{2m}}\left(\frac{1}{\sqrt{2m}}(1-\lambda)\right) = 0 \end{aligned}
$$

$$
\begin{aligned} (1-\lambda)\left((1-\lambda)^2 - \frac{1}{2m} - \frac{1}{2m}\right) = 0 \end{aligned}
$$

$$
\begin{aligned} (1-\lambda)\left((1-\lambda)^2 - \frac{1}{m}\right) = 0 \end{aligned}
$$

したがって，固有値は $\lambda = 1, 1+\frac{1}{\sqrt{m}}, 1-\frac{1}{\sqrt{m}}$ となる．

$\lambda = 1$ のとき，固有ベクトルは

$$
\begin{aligned} \begin{pmatrix} 0 & \frac{1}{\sqrt{2m}} & 0 \\ \frac{1}{\sqrt{2m}} & 0 & \frac{1}{\sqrt{2m}} \\ 0 & \frac{1}{\sqrt{2m}} & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \end{aligned}
$$

第1行と第3行より $y=0$ であり，第2行より
$\frac{x}{\sqrt{2m}} + \frac{z}{\sqrt{2m}} = 0$ ，すなわち $x=-z$ である．
$z=t$ とすると，固有ベクトルは $t\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$ ( $t \neq 0$ ).

$\lambda = 1 + \frac{1}{\sqrt{m}}$ のとき，固有ベクトルは

$$
\begin{aligned} \begin{pmatrix} -\frac{1}{\sqrt{m}} & \frac{1}{\sqrt{2m}} & 0 \\ \frac{1}{\sqrt{2m}} & -\frac{1}{\sqrt{m}} & \frac{1}{\sqrt{2m}} \\ 0 & \frac{1}{\sqrt{2m}} & -\frac{1}{\sqrt{m}} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \end{aligned}
$$

$-\frac{x}{\sqrt{m}} + \frac{y}{\sqrt{2m}} = 0$ より， $y = \sqrt{2}x$ ． $\frac{y}{\sqrt{2m}} - \frac{z}{\sqrt{m}} = 0$ より， $\frac{\sqrt{2}x}{\sqrt{2m}} = \frac{z}{\sqrt{m}}$ ． よって， $z = x$ ． $x = t$ とすると，固有ベクトルは $t\begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \end{pmatrix}$ ( $t \neq 0$ ).

$\lambda = 1 - \frac{1}{\sqrt{m}}$ のとき，固有ベクトルは

$$
\begin{aligned} \begin{pmatrix} \frac{1}{\sqrt{m}} & \frac{1}{\sqrt{2m}} & 0 \\ \frac{1}{\sqrt{2m}} & \frac{1}{\sqrt{m}} & \frac{1}{\sqrt{2m}} \\ 0 & \frac{1}{\sqrt{2m}} & \frac{1}{\sqrt{m}} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \end{aligned}
$$

$\frac{x}{\sqrt{m}} + \frac{y}{\sqrt{2m}} = 0$ より， $y = -\sqrt{2}x$ ． $\frac{y}{\sqrt{2m}} + \frac{z}{\sqrt{m}} = 0$ より， $\frac{-\sqrt{2}x}{\sqrt{2m}} = -\frac{z}{\sqrt{m}}$ ． よって， $z = x$ ． $x = t$ とすると，固有ベクトルは $t\begin{pmatrix} 1 \\ -\sqrt{2} \\ 1 \end{pmatrix}$ ( $t \neq 0$ ).

(2) $P$ を固有ベクトルを正規化したものとする．

$$
\begin{aligned} P = \begin{pmatrix} -\frac{1}{\sqrt{2}} & \frac{1}{2} & \frac{1}{2} \\ 0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} \\ \frac{1}{\sqrt{2}} & \frac{1}{2} & \frac{1}{2} \end{pmatrix} \end{aligned}
$$

このとき， $P^{-1}A(m)^n P$ は対角行列となる．

(3) $A(n)$ の固有値は $1, 1 + \frac{1}{\sqrt{n}}, 1 - \frac{1}{\sqrt{n}}$ なので， $A(n)^n$ の固有値は $1^n, (1+\frac{1}{\sqrt{n}})^n, (1-\frac{1}{\sqrt{n}})^n$ ．

したがって， $\lambda_1(n) = (1+\frac{1}{\sqrt{n}})^n, \lambda_2(n) = 1, \lambda_3(n) = (1-\frac{1}{\sqrt{n}})^n$ ．

$\lambda_1 = \lim_{n \to \infty} (1+\frac{1}{\sqrt{n}})^n = \lim_{n \to \infty} \left( \left(1+\frac{1}{\sqrt{n}}\right)^{\sqrt{n}} \right)^{\sqrt{n}} = \infty$

$\lambda_2 = \lim_{n \to \infty} 1 = 1$

$\lambda_3 = \lim_{n \to \infty} (1-\frac{1}{\sqrt{n}})^n = \lim_{n \to \infty} \left( \left(1-\frac{1}{\sqrt{n}}\right)^{-\sqrt{n}} \right)^{-\sqrt{n}} = 0$
