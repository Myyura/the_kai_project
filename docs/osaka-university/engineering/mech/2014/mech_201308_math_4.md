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

問題4（解答用紙：黄）

以下の問いに答えなさい。ただし、$y$ は実数 $x$ を変数とする関数とする。

(1) $y=x^\lambda$ とおいて、次の常微分方程式 (A) の基本解の組を求めなさい。

$$
2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=0 \tag{A}
$$

(2) $x=1$ のとき $y=3$ かつ $dy/dx=1$ であるとき、常微分方程式 (A) の解を求めなさい。

(3) 小問 (1) の基本解を用いて、次の常微分方程式 (B) の特解を求めなさい。

$$
2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=x \tag{B}
$$

(4) $x=1$ のとき $y=2$ かつ $dy/dx=1$ であるとき、常微分方程式 (B) の解を求めなさい。

### 题目描述

问题4（使用黄色答题纸）

回答下列问题，其中 $y$ 为实变量 $x$ 的函数。

(1) 令 $y=x^\lambda$，求常微分方程 (A) 的一组基本解。

$$
2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=0 \tag{A}
$$

(2) 若 $x=1$ 时 $y=3$ 且 $dy/dx=1$，求常微分方程 (A) 的解。

(3) 利用 (1) 中的基本解，求常微分方程 (B) 的一个特解。

$$
2x^2\frac{d^2y}{dx^2}+3x\frac{dy}{dx}-y=x \tag{B}
$$

(4) 若 $x=1$ 时 $y=2$ 且 $dy/dx=1$，求常微分方程 (B) 的解。

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
