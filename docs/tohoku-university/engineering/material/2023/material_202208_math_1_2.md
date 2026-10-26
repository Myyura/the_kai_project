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

### 数学－1

以下の問に答えよ．

**問1**

$$
A=\begin{pmatrix}2&4&3\\1&5&1\\3&4&5\end{pmatrix}
$$

の逆行列 $A^{-1}$ を，公式 $A^{-1}=\dfrac1{|A|}\widetilde A$（ただし，$\widetilde A$ は $A$ の余因子行列），もしくは掃き出し法で求めよ．

**問2**

空間ベクトル場 $\boldsymbol f=(x^2,2xz,z^2)$ において，図1に示すように $x=0,y=0,z=0$ の三つの座標平面と，平面 $y=1$ と平面 $z=3-x$ とで囲まれる領域を $V$ とおく．$\displaystyle\iiint_V\operatorname{div}\boldsymbol f\,dV$ を求めよ．

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/material/2023/material_202208_math_1_2_figure_1.png)

### 数学－2

以下の問に答えよ．ただし，$z$ は複素数とし，$i=\sqrt{-1}$ は虚数単位である．

**問1** $\displaystyle\sqrt[4]{\frac{\sqrt3}{4}-\frac14i}$ のべき乗根を全て求め，複素平面上に図示せよ．

**問2** $f(z)=\dfrac1{z+1}$ を，$z=1$ を中心にテイラー展開せよ．また，収束半径を求めよ．

**問3** 次の積分を求めよ．ただし，$C$ は任意の単一閉曲線とする．

$$
I=\int_C\frac{4-3z}{z^2-z}\,dz
$$

### 题目描述

**数学－1** 回答下列问题。

**问1** 用公式 $A^{-1}=\dfrac1{|A|}\widetilde A$（其中 $\widetilde A$ 为 $A$ 的伴随矩阵）或消元法，求下列矩阵的逆矩阵。

$$
A=\begin{pmatrix}2&4&3\\1&5&1\\3&4&5\end{pmatrix}
$$

**问2** 在空间向量场 $\boldsymbol f=(x^2,2xz,z^2)$ 中，如上方图1所示，将由三个坐标平面 $x=0,y=0,z=0$、平面 $y=1$ 和平面 $z=3-x$ 围成的区域记作 $V$。求 $\displaystyle\iiint_V\operatorname{div}\boldsymbol f\,dV$。

**数学－2** 回答下列问题。其中 $z$ 为复数，$i=\sqrt{-1}$ 为虚数单位。

**问1** 求 $\displaystyle\frac{\sqrt3}{4}-\frac14i$ 的全部四次方根，并在复平面上画出。

**问2** 将 $f(z)=\dfrac1{z+1}$ 在 $z=1$ 处展开成泰勒级数，并求收敛半径。

**问3** 求下列积分，其中 $C$ 为任意简单闭曲线。

$$
I=\int_C\frac{4-3z}{z^2-z}\,dz
$$

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

![四つの四乗根。半径2^(-1/4)の円周上にπ/2ずつ離れて並ぶ。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/material/2023/tohoku-material-202208-roots.svg)

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

#### 問 3

$$
\frac{4-3z}{z^2-z}=-\frac4z+\frac1{z-1}.
$$

したがって、留数は $z=0$ で $-4$、$z=1$ で $1$ である。正向き（反時計回り）の単純閉曲線では

$$
I=\begin{cases}
0,&0,1\text{ のいずれも外部},\\
-8\pi i,&0\text{ のみ内部},\\
2\pi i,&1\text{ のみ内部},\\
-6\pi i,&0,1\text{ とも内部}.
\end{cases}
$$

時計回りなら符号が逆になる。一般には巻き数 $\operatorname{Ind}_C$ を用いて $I=2\pi i[-4\operatorname{Ind}_C(0)+\operatorname{Ind}_C(1)]$ と書ける。$C$ が $0$ または $1$ を通る場合、通常の意味の積分は定義されない。

## **Reference**

- [東北大学 マテリアル・開発系 令和5年度入学試験（2022年度実施）](https://www.material.tohoku.ac.jp/media/files/admission/daigakuin_r5.pdf)
