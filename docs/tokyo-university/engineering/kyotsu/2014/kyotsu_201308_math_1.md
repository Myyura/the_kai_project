---
sidebar_label: '2013年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Higher-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Differential-Equations.Systems-of-ODEs
---

# 東京大学 工学系研究科 2013年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 微分方程式 $y^{(3)}-3y''+2y'=R(t)$ について、(1) $R(t)=0$、(2) $R(t)=3t^2$ の場合の一般解をそれぞれ求めよ。

II. 次の連立微分方程式を考える。

$$
x''=-2x'-3y+2,\qquad y'=x'+2y,\qquad x(0)=x'(0)=0,\quad y(0)=2.
$$

1. $\boldsymbol x=(x,x',y)^T$ として $\boldsymbol x'=A\boldsymbol x+\boldsymbol b$、$\boldsymbol x(0)=\boldsymbol c$ と書き、$A,\boldsymbol b,\boldsymbol c$ を求めよ。
2. $e^{tA}$ の全成分を求めよ。
3. 前二問の結果を用いて連立方程式を解け。

#### 题目描述

I. 对方程 $y^{(3)}-3y''+2y'=R(t)$，分别在 (1) $R(t)=0$、(2) $R(t)=3t^2$ 时求通解。

II. 考虑初值问题

$$
x''=-2x'-3y+2,\qquad y'=x'+2y,\qquad x(0)=x'(0)=0,\quad y(0)=2.
$$

1. 令 $\boldsymbol x=(x,x',y)^T$，写成 $\boldsymbol x'=A\boldsymbol x+\boldsymbol b$、$\boldsymbol x(0)=\boldsymbol c$ 的形式，求 $A,\boldsymbol b,\boldsymbol c$。
2. 求 $e^{tA}$ 的全部元素。
3. 利用以上结果求解初值问题。

## **Kai**

### I

特性多項式は $\lambda(\lambda-1)(\lambda-2)$ である。

1. $\boxed{y=C_1+C_2e^t+C_3e^{2t}}$。
2. 多項式特解を $y_p=at^3+bt^2+ct$ とおく。係数比較により $a=1/2,b=9/4,c=21/4$ なので、

$$
\boxed{y=C_1+C_2e^t+C_3e^{2t}+\frac{t^3}2+\frac{9t^2}4+\frac{21t}4}.
$$

### II

#### 1

$$
\boxed{A=\begin{pmatrix}0&1&0\\0&-2&-3\\0&1&2\end{pmatrix},\quad
\boldsymbol b=\begin{pmatrix}0\\2\\0\end{pmatrix},\quad
\boldsymbol c=\begin{pmatrix}0\\0\\2\end{pmatrix}}.
$$

#### 2

直接計算すると $A^3=A$ であるから、
$e^{tA}=I+\sinh t\,A+(\cosh t-1)A^2$ となる。各成分は

$$
\boxed{e^{tA}=\begin{pmatrix}
1&\sinh t-2\cosh t+2&3-3\cosh t\\
0&\cosh t-2\sinh t&-3\sinh t\\
0&\sinh t&\cosh t+2\sinh t
\end{pmatrix}}.
$$

#### 3

定数変化法より、

$$
\boldsymbol x(t)=e^{tA}\boldsymbol c+\int_0^t e^{(t-s)A}\boldsymbol b\,ds
=\begin{pmatrix}4t-4e^t+4\\4-4e^t\\4e^t-2\end{pmatrix}.
$$

従って $\boxed{x(t)=4(t-e^t+1),\ y(t)=4e^t-2}$ である。
