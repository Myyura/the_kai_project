---
sidebar_label: "2013年8月実施 問題4（数学）"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Initial-Value-Problem
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 数学 問題4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$y$ を実変数 $x$ の実数値関数とする。以下の問いに答えなさい。

1. $y=x^\lambda$ の形の解を考えることにより、次の同次微分方程式 (A) の基本解を求めなさい。

   $$
   2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=0.\tag{A}
   $$

2. $x=1$ において $y=3$、$dy/dx=1$ を満たす微分方程式 (A) の解を求めなさい。
3. (1) で求めた基本解を用いて、次の非同次微分方程式 (B) の特解を求めなさい。

   $$
   2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=x.\tag{B}
   $$

4. $x=1$ において $y=2$、$dy/dx=1$ を満たす微分方程式 (B) の解を求めなさい。

#### 题目描述

设 $y$ 为实变量 $x$ 的实值函数。

1. 将 $y=x^\lambda$ 代入齐次方程 $2x^2y''+3xy'-y=0$，求其基本解。
2. 求满足 $y(1)=3$、$y'(1)=1$ 的齐次方程解。
3. 利用第 (1) 问的基本解，求非齐次方程 $2x^2y''+3xy'-y=x$ 的一个特解。
4. 求满足 $y(1)=2$、$y'(1)=1$ 的非齐次方程解。

## **Kai**

初期点 $x=1$ を含む区間 $x>0$ で解を求める。

### (1)

$y=x^\lambda$ を (A) に代入すると

$$
[2\lambda(\lambda-1)+3\lambda-1]x^\lambda
=(2\lambda-1)(\lambda+1)x^\lambda=0.
$$

したがって $\lambda=-1,1/2$ であり、基本解は

$$
\boxed{y_1=x^{-1},\qquad y_2=\sqrt x}.
$$

### (2)

一般解 $y=C_1/x+C_2\sqrt x$ に初期条件を代入すると

$$
C_1+C_2=3,\qquad -C_1+\frac12C_2=1.
$$

これより $C_1=1/3$、$C_2=8/3$ なので

$$
\boxed{y=\frac1{3x}+\frac83\sqrt x}.
$$

### (3)

(B) を $2x^2$ で割ると

$$
y''+\frac3{2x}y'-\frac1{2x^2}y=\frac1{2x}.
$$

(1) の基本解の Wronskian は

$$
W=y_1y_2'-y_1'y_2=\frac3{2x^{3/2}}.
$$

定数変化法により $y_p=c_1(x)y_1+c_2(x)y_2$ とおくと

$$
c_1'=-\frac{y_2}{W}\frac1{2x}=-\frac x3,\qquad
c_2'=\frac{y_1}{W}\frac1{2x}=\frac1{3\sqrt x}.
$$

積分定数を $0$ として $c_1=-x^2/6$、$c_2=2\sqrt x/3$ を選べば

$$
\boxed{y_p=-\frac x6+\frac{2x}3=\frac x2}.
$$

### (4)

一般解は $y=C_1/x+C_2\sqrt x+x/2$ である。初期条件から

$$
C_1+C_2=\frac32,\qquad -C_1+\frac12C_2=\frac12.
$$

よって $C_1=1/6$、$C_2=4/3$ であり

$$
\boxed{y=\frac1{6x}+\frac43\sqrt x+\frac x2}.
$$
