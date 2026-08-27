---
sidebar_label: 2023年8月実施 必須問題（数学）問1
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2023年8月実施 必須問題（数学）問1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

関数

$$
f(x,y)=x^2+xy+2y^2-4y
$$

の極値を調べ、領域

$$
D=\{(x,y)\mid x\leq y\leq2x,\ x+y\leq3\}
$$

上の $\iint_D(2x-y)\,dx\,dy$ を求めよ。また、

$$
f''(x)-4f'(x)+4f(x)=6xe^{2x}
$$

の一般解を求めよ。

### 题目描述

求二元二次函数的极值、三直线所围区域上的二重积分，以及一个常系数二阶微分方程的通解。

## **Kai**

### (1)

$$
f_x=2x+y,\qquad f_y=x+4y-4
$$

より、停留点は

$$
(x,y)=\left(-\frac47,\frac87\right)
$$

のみである。Hesse 行列

$$
H=\begin{pmatrix}2&1\\1&4\end{pmatrix}
$$

は正定値であるから、

$$
\boxed{\text{極大値なし},\qquad
\text{極小値 }-\frac{16}{7}}
$$

である。

### (2)

領域を $x=1$ で分けると、

$$
\begin{aligned}
I
&=\int_0^1\int_x^{2x}(2x-y)\,dy\,dx
 +\int_1^{3/2}\int_x^{3-x}(2x-y)\,dy\,dx\\
&=\frac16+\frac5{24}
=\boxed{\frac38}.
\end{aligned}
$$

### (3)

$f(x)=e^{2x}u(x)$ とおけば、

$$
f''-4f'+4f=e^{2x}u''.
$$

したがって $u''=6x$ であり、

$$
\boxed{f(x)=e^{2x}(x^3+C_1x+C_2)}
$$

を得る。
