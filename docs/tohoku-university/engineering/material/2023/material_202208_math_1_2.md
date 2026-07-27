---
sidebar_label: "2022年8月実施 【数学-1,2】"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Vector-Calculus.Divergence-Theorem
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
---
# 東北大学 工学研究科 マテリアル・開発系 2022年8月実施 【数学-1,2】

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失，以下依据现有解答整理；其中矩阵和向量场的具体定义未保留。

【数学 1】

1. 对原题给定的三阶矩阵 $A$，求行列式 $|A|$ 与逆矩阵 $A^{-1}$。矩阵 $A$ 本身未保留在当前文件中。
2. 对原题给定的向量场 $\boldsymbol f$，使用 Gauss 散度定理计算其通过区域 $V$ 边界的通量。解答显示
   $$\operatorname{div}\boldsymbol f=2x+2z,$$
   且区域为
   $$0\le y\le1,\qquad0\le z\le3,\qquad0\le x\le3-z.$$

【数学 2】

1. 求复数
   $$\frac{\sqrt3}{4}-\frac14i$$
   的全部四次方根。
2. 将
   $$f(z)=\frac1{z+1}$$
   在 $z=1$ 处展开为 Taylor 级数，并求收敛半径。

#### 考点

- **矩阵行列式与逆矩阵**：计算三阶矩阵的可逆性及逆。
- **Gauss 散度定理**：把闭曲面通量转化为区域上的散度三重积分。
- **复数的极形式与开方**：由模和辐角列出全部复数根。
- **复 Taylor 级数**：化为几何级数并由最近奇点确定收敛半径。

## **Kai**
### 【数学-1】
#### 問 1

$$
\begin{aligned}
\left| A \right| &= 1
\\
A^{-1} &= \begin{pmatrix} 21 & -8 & -11 \\ -2 & 1 & 1 \\ -11 & 4 & 6 \end{pmatrix}
\end{aligned}
$$

#### 問 2

$$
\begin{aligned}
\mathrm{div} \boldsymbol{f} = 2x+2z
\end{aligned}
$$

なので、

$$
\begin{aligned}
\iiint_V \mathrm{div} \boldsymbol{f} \ dV
&= 2 \iiint_V (x+z) \ dV
\\
&= 2 \int_0^1 dy \int_0^3 dz \int_0^{3-z} dx \ (x+z)
\\
&= 2 \int_0^3 dz \left[ \frac{x^2}{2} + xz \right]_{x=0}^{x=3-z}
\\
&= \int_0^3 dz \ \left( -z^2 + 9 \right)
\\
&= 18
\end{aligned}
$$

を得る。

### 【数学-2】
#### 問 1

$$
\begin{aligned}
\frac{\sqrt{3}}{4} - \frac{1}{4} i
&= \frac{1}{2} e^{\frac{11}{6} \pi i}
\end{aligned}
$$

より、

$$
\begin{aligned}
\left( \frac{\sqrt{3}}{4} - \frac{1}{4} i \right)^\frac{1}{4}
&= \frac{1}{2^\frac{1}{4}} e^{\frac{11}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{23}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{35}{24} \pi i}
, \frac{1}{2^\frac{1}{4}} e^{\frac{47}{24} \pi i}
\end{aligned}
$$

がわかる。

#### 問 2

$$
\begin{aligned}
f(z)
&= \frac{1}{z+1}
\\
&= \frac{1}{(z-1)+2}
\\
&= \frac{1}{2} \frac{1}{1 - \left( - \frac{z-1}{2} \right)}
\end{aligned}
$$

と変形できるので、 $z=1$ を中心とするテイラー展開は

$$
\begin{aligned}
f(z)
&= \frac{1}{2} \sum_{n=0}^\infty \left( - \frac{z-1}{2} \right)^n
\\
&= \sum_{n=0}^\infty \frac{(-1)^n}{2^{n+1}} (z-1)^n
\end{aligned}
$$

であり、収束半径は $2$ である。
