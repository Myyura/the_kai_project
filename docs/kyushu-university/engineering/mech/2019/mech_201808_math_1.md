---
sidebar_label: "2019年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2019年度 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下に示す微分方程式の一般解をそれぞれ求めよ。なお、積分定数は適宜定義してよい。（50点）

1. $y''(x)-5y'(x)+6y(x)=e^{2x}$
2. $x^2y''(x)-4xy'(x)+6y(x)=0$
3. $y''(x)-\{y'(x)\}^2=0$

#### 题目描述

分别求三个微分方程的一般解，积分常数可自行定义：① $y''-5y'+6y=e^{2x}$；② $x^2y''-4xy'+6y=0$；③ $y''-(y')^2=0$。

## **Kai**

### (1)

同次方程式の特性方程式は $(\lambda-2)(\lambda-3)=0$。非同次項が同次解と重なるので、特解を $y_p=axe^{2x}$ とおくと、代入により $-ae^{2x}=e^{2x}$、したがって $a=-1$。よって

$$
\boxed{y(x)=C_1e^{2x}+C_2e^{3x}-xe^{2x}}.
$$

### (2)

$x\ne0$ の区間で $y=x^m$ とおくと

$$
m(m-1)-4m+6=(m-2)(m-3)=0.
$$

したがって

$$
\boxed{y(x)=C_1x^2+C_2x^3}.
$$

$x>0$、$x<0$ のいずれの区間でも同じ形となる。

### (3)

$u=y'$ とおくと $u'=u^2$。$u\ne0$ の場合は

$$
\frac{du}{u^2}=dx
\quad\Longrightarrow\quad
u=-\frac1{x-C_1},\qquad
\boxed{y(x)=-\log|x-C_1|+C_2}\quad(x\ne C_1).
$$

また、$u=0$ に対応する定数解 $\boxed{y(x)=C}$ もある。
