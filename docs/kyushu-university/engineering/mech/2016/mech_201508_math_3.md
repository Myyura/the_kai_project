---
sidebar_label: "2015年8月実施 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
---

# 九州大学 工学府 機械系専攻 2015年8月実施 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の2重積分を考える。

$$
I=\iint_D(x^2+ay^2)\,dx\,dy,\qquad a>0.
$$

以下の各領域 $D$ を図示し、それぞれの領域に対する積分値 $I$ を求めよ。（50点）

(1) $D=\{(x,y)\mid0\le x\le3,\ 0\le y\le4\}$

(2) $D=\{(x,y)\mid x\ge0,\ y\ge0,\ 2x+y\le1\}$

(3) $D=\{(x,y)\mid4\le x^2+y^2\le9\}$

#### 题目描述

考虑下列二重积分。

$$
I=\iint_D(x^2+ay^2)\,dx\,dy,\qquad a>0.
$$

分别画出以下各区域 $D$，并求各区域对应的积分值 $I$。（50分）

(1) $D=\{(x,y)\mid0\le x\le3,\ 0\le y\le4\}$。

(2) $D=\{(x,y)\mid x\ge0,\ y\ge0,\ 2x+y\le1\}$。

(3) $D=\{(x,y)\mid4\le x^2+y^2\le9\}$。

## **Kai**

3領域の概形は次の通りである。

![解答図 1（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math_3_answer_layout_1.svg)

![解答図 2（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math_3_answer_layout_2.svg)

![解答図 3（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math_3_answer_layout_3.svg)

### (1)

$$
I=\int_0^3\int_0^4(x^2+ay^2)\,dy\,dx
=\boxed{36+64a}.
$$

### (2)

頂点は $(0,0),(1/2,0),(0,1)$。従って

$$
\begin{aligned}
I&=\int_0^{1/2}\int_0^{1-2x}(x^2+ay^2)\,dy\,dx\\
&=\int_0^{1/2}\left[x^2(1-2x)+\frac a3(1-2x)^3\right]dx
=\boxed{\frac1{96}+\frac a{24}}.
\end{aligned}
$$

### (3)

半径2と3の同心円に挟まれた円環である。極座標を用いると

$$
\begin{gathered}
I=\int_0^{2\pi}\int_2^3\rho^3(\cos^2\theta+a\sin^2\theta)\,d\rho\,d\theta\\
=\boxed{\frac{65\pi}{4}(1+a)}.
\end{gathered}
$$
