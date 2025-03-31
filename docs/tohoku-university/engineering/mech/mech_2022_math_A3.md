---
sidebar_label: "2022年実施 数学A 3"
sidebar_position: 1
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 機械系 2022年実施 数学A 3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)

$$
\begin{aligned}
\boldsymbol{\nabla} \times \boldsymbol{A}
&= 2x \boldsymbol{k}
,\\
\boldsymbol{\nabla} \cdot \boldsymbol{A}
&= 2y+2
\end{aligned}
$$

### (2)
ガウスの発散定理より、

$$
\begin{aligned}
\int_S \boldsymbol{A} \cdot \boldsymbol{n} dS
&= \int_V \boldsymbol{\nabla} \cdot \boldsymbol{A} dV
\\
&= \int_{-1}^1 dx \int_0^{1-x^2} dz \int_0^1 dy \ (2y+2)
\\
&= \int_{-1}^1 dx \left( 1-x^2 \right) \left[ y^2 + 2y \right]_{y=0}^{y=1}
\\
&= 6 \int_0^1 dx \left( 1-x^2 \right)
\\
&= 6 \left[ x - \frac{x^3}{3} \right]_{x=0}^{x=1}
\\
&= 4
\end{aligned}
$$

である。

### (3)
$S'$ 上の位置ベクトル $\boldsymbol{r}$ は

$$
\begin{aligned}
\boldsymbol{r}
= x \boldsymbol{i} + y \boldsymbol{j} + \left( 1 - x^2 \right) \boldsymbol{k}
\ \ \ \ \left( -1 \leq x \leq 1, \ 0 \leq y \leq 1 \right)
\end{aligned}
$$

と表せるので、 $S'$ 上で

$$
\begin{aligned}
\frac{\partial \boldsymbol{r}}{\partial x}
&= \boldsymbol{i} - 2x \boldsymbol{k}
,\\
\frac{\partial \boldsymbol{r}}{\partial y}
&= \boldsymbol{j}
,\\
\frac{\partial \boldsymbol{r}}{\partial x} \times
\frac{\partial \boldsymbol{r}}{\partial y}
&= 2x \boldsymbol{i} + \boldsymbol{k}
,\\
\boldsymbol{A} \cdot
\left( \frac{\partial \boldsymbol{r}}{\partial x} \times
\frac{\partial \boldsymbol{r}}{\partial y} \right)
&= 2x^2 + 2xyz + z + xy
\\
&= -2x^3y + x^2 + 3xy + 1
\end{aligned}
$$

である。
よって、ストークスの定理より、

$$
\begin{aligned}
\int_{\partial S'} \boldsymbol{A} \cdot d \boldsymbol{r}
&= \int_{-1}^1 dx \int_0^1 dy \left( -2x^3y + x^2 + 3xy + 1 \right)
\\
&= 2 \int_0^1 dx \int_0^1 dy \left( x^2 + 1 \right)
\\
&= 2 \int_0^1 dx \left( x^2 + 1 \right)
\\
&= 2 \left[ \frac{x^3}{3} + x \right]_0^1
\\
&= \frac{8}{3}
\end{aligned}
$$

である。