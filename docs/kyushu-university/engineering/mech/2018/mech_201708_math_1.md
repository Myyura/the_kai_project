---
sidebar_label: "2017年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2017年8月実施 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下に示す微分方程式の一般解を求めよ。（50点）

1. $y''-4y'+3y=0$
2. $y''-4y'+3y=x$
3. $y''-4y'+3y=x\cos x$

#### 题目描述

分别求右端为 $0$、$x$、$x\cos x$ 的微分方程 $y^{\prime\prime}-4y^\prime+3y$ 的一般解。

## **Kai**

### (1)

特性方程式は $(\lambda-1)(\lambda-3)=0$ なので

$$
\boxed{y=C_1e^x+C_2e^{3x}}.
$$

### (2)

特解を $y_p=ax+b$ とおくと $3ax+3b-4a=x$。よって $a=1/3$、$b=4/9$ であり、

$$
\boxed{y=C_1e^x+C_2e^{3x}+\frac{x}{3}+\frac49}.
$$

### (3)

特解を $y_p=(ax+b)\cos x+(cx+d)\sin x$ とおいて係数を比較する。

$$
2a-4c=1,\quad 4a+2c=0,\quad
2b+2c-4a-4d=0,\quad 2d-2a-4c+4b=0.
$$

これより $(a,b,c,d)=(1/10,-1/25,-1/5,-11/50)$。したがって

$$
\boxed{y=C_1e^x+C_2e^{3x}
+\left(\frac{x}{10}-\frac1{25}\right)\cos x
-\left(\frac{x}{5}+\frac{11}{50}\right)\sin x}.
$$
