---
sidebar_label: "2014年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Extrema
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

制約条件 $3x^2 + 4xy + 2y^2 = 2$ のもとで、関数 (function)

$$
f(x, y) = x^2 + y^2
$$

の最大値と最小値を求めよ。

### 题目描述

在约束条件

$$
3x^2+4xy+2y^2=2
$$

下，求函数

$$
f(x,y)=x^2+y^2
$$

的最大值与最小值。

## **Kai**

We use Lagrange multipliers. Let $g(x, y) = 3x^2 + 4xy + 2y^2 - 2 = 0$ . We want to find the maximum and minimum values of $f(x, y) = x^2 + y^2$ subject to the constraint $g(x, y) = 0$ .

We set up the Lagrangian:

$$
L(x, y, \lambda) = x^2 + y^2 - \lambda(3x^2 + 4xy + 2y^2 - 2)
$$

Taking partial derivatives and setting them to zero, we get:

$$
\frac{\partial L}{\partial x} = 2x - \lambda(6x + 4y) = 0 \quad \Rightarrow \quad x - \lambda(3x + 2y) = 0
$$

$$
\frac{\partial L}{\partial y} = 2y - \lambda(4x + 4y) = 0 \quad \Rightarrow \quad y - \lambda(2x + 2y) = 0
$$

$$
3x^2 + 4xy + 2y^2 = 2
$$

From the first two equations, we have:

$$
x = \lambda(3x + 2y)
$$

$$
y = \lambda(2x + 2y)
$$

これらは

$$
\begin{pmatrix}
3&2\\
2&2
\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
=\mu\begin{pmatrix}x\\y\end{pmatrix},
\qquad \mu=\frac1\lambda
$$

と同値である．したがって，停留点の方向は対称行列の固有ベクトルであり，
固有値は

$$
\det\begin{pmatrix}3-\mu&2\\2&2-\mu\end{pmatrix}
=\mu^2-5\mu+2=0
$$

より

$$
\mu_{\pm}=\frac{5\pm\sqrt{17}}{2}
$$

である．固有値 $\mu$ の固有ベクトル上では，制約条件は
$\mu(x^2+y^2)=2$ となるので， $f=2/\mu$ である．
よって最大値と最小値はそれぞれ

$$
\boxed{\max f=\frac{2}{\mu_-}=\frac{5+\sqrt{17}}{2}},
\qquad
\boxed{\min f=\frac{2}{\mu_+}=\frac{5-\sqrt{17}}{2}}.
$$
