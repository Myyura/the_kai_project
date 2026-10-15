---
sidebar_label: "2017年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Power-Series
---

# 九州大学 工学府 機械系専攻 2017年度 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下に示す (1)(2) の微分方程式の解を (A) 式で表すとき、係数 $a_0,a_1,a_2,\ldots,a_n,\ldots$ を求めよ。（50点）

$$
y(x)=\sum_{n=0}^{\infty}a_nx^n=a_0+a_1x+a_2x^2+\cdots+a_nx^n+\cdots.\tag{A}
$$

1. $y'-y=0,\quad y(0)=1$
2. $(x+1)y'+y-2x=0,\quad y(0)=0$

#### 题目描述

将两道初值问题的解展开为 $y=\sum_{n\ge0}a_nx^n$，求所有系数。

## **Kai**

### (1)

$y'=\sum_{n=0}^{\infty}(n+1)a_{n+1}x^n$ を代入すると

$$
(n+1)a_{n+1}=a_n,\qquad a_0=1.
$$

従って $\boxed{a_n=1/n!\ (n\ge0)}$。級数は $e^x$ であり、すべての実数 $x$ で収束する。

### (2)

定数項より $a_0+a_1=0$、$x$ の係数より $2a_1+2a_2=2$、$x^n\ (n\ge2)$ の係数より $(n+1)(a_n+a_{n+1})=0$。$a_0=0$ を用いると

$$
\boxed{a_0=a_1=0,\qquad a_n=(-1)^n\quad(n\ge2)}.
$$

実際、$|x|<1$ では $y=x^2/(1+x)=x^2-x^3+x^4-\cdots$ である。
