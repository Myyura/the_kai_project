---
sidebar_label: 2023年8月実施 選択問題 基礎数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Vector-Calculus.Line-Integral
  - Mathematics.Vector-Calculus.Divergence-Theorem
  - Mathematics.Vector-Calculus.Surface-Normal
---

# 電気通信大学 情報理工学研究科 基盤理工学専攻 2023年8月実施 選択問題 基礎数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

与えられた $4$ 次行列と三つのベクトルについて、行列式、固有ベクトル、一次関係、部分空間の元および行列のべき乗を求めよ。さらに長方形上の線積分・重積分と、単位球に関する発散・流束積分を計算せよ。

### 题目描述

计算四阶矩阵的行列式、特征向量、向量关系与矩阵幂；再求矩形上的线积分、二重积分，以及单位球上的散度体积分和通量。

## **Kai**

### (1)

#### (a)

行列式を計算すると、

$$
\boxed{\det A=9}.
$$

#### (b)

直接掛け算して、

$$
AP_1=3P_1,\qquad AP_2=-P_2
$$

であるから、

$$
\boxed{\alpha_1=3,\qquad\alpha_2=-1}.
$$

一方、

$$
AP_3=(-29,-2,-4,21)^{\mathsf T}
$$

は $P_3$ の定数倍でないので、$\boxed{\alpha_3\text{ は存在しない}}$。

#### (c)

$$
\boxed{P_3=-5P_1+2P_2}.
$$

#### (d)

$P_4=c_1P_1+c_2P_2$ とおく。第 3、第 4 成分より $c_2=1,\ c_1=-4$ となるので、

$$
\boxed{P_4=(3,1,2,1)^{\mathsf T}}.
$$

#### (e)

$P_3=-5P_1+2P_2$ を用いると、

$$
\boxed{
A^nP_1=3^nP_1,\qquad
A^nP_2=(-1)^nP_2,\qquad
A^nP_3=-5\cdot3^nP_1+2(-1)^nP_2}.
$$

### (2)

#### (a)

Green の定理より、

$$
\begin{aligned}
\oint_C(f\,dx+g\,dy)
&=\iint_D(g_x-f_y)\,dx\,dy\\
&=\int_{-4}^{2}\int_{-1}^{2}y\,dy\,dx
=\boxed{9}.
\end{aligned}
$$

#### (b)

$$
G-F=f_x-g_y=2x-(3x+2y)=-x-2y
$$

であるから、

$$
\boxed{\iint_D(G-F)\,dx\,dy=0}.
$$

### (3)

#### (a)

単位球面上では外向き単位法線ベクトルは

$$
\boxed{\boldsymbol n=(x,y,z)^{\mathsf T}}
$$

である。

#### (b)

$$
\operatorname{div}\boldsymbol M=2+3-4=1
$$

より、

$$
\boxed{\iiint_V\operatorname{div}\boldsymbol M\,dV
=\frac{4\pi}{3}}.
$$

#### (c)

$\boldsymbol Q=(x,y,z)^{\mathsf T}=\boldsymbol n$ であるから、球面上で $\boldsymbol Q\cdot\boldsymbol n=1$。したがって、

$$
\boxed{\iint_S\boldsymbol Q\cdot\boldsymbol n\,dS=4\pi}.
$$
