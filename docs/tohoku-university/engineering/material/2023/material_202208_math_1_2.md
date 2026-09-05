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

### 原題に基づく要約（日本語）

[公式原題](https://www.material.tohoku.ac.jp/media/files/admission/daigakuin_r5.pdf)

### 数学1

1. $A=\begin{pmatrix}2&4&3\\1&5&1\\3&4&5\end{pmatrix}$ の逆行列を求める。
2. $\boldsymbol f=(x^2,2xz,z^2)$ とする。平面 $x=0,y=0,z=0,y=1,z=3-x$ に囲まれた領域 $V$ 上で $\iiint_V\operatorname{div}\boldsymbol f\,dV$ を計算する。

### 数学2

1. $\sqrt3/4-i/4$ の4乗根をすべて求め、複素平面に図示する。
2. $f(z)=1/(z+1)$ を $z=1$ のまわりで Taylor 展開し、収束半径を求める。
3. 任意の単一閉曲線 $C$ に沿う $\displaystyle\oint_C(4-3z)/(z^2-z)\,dz$ を求める。曲線が囲む特異点により場合分けする。

### 题目描述

【数学 1】

1. 求矩阵 $A=\begin{pmatrix}2&4&3\\1&5&1\\3&4&5\end{pmatrix}$ 的逆矩阵。
2. 向量场为 $\boldsymbol f=(x^2,2xz,z^2)$，区域 $V$ 由平面 $x=0,y=0,z=0,y=1,z=3-x$ 围成，计算 $\iiint_V\operatorname{div}\boldsymbol f\,dV$。

【数学 2】

1. 求 $\sqrt3/4-i/4$ 的全部四次方根，并在复平面上表示。
2. 将 $f(z)=1/(z+1)$ 在 $z=1$ 处展开为 Taylor 级数，求收敛半径。
3. 对简单闭曲线 $C$，按其围住的奇点分类，求 $\oint_C(4-3z)/(z^2-z)\,dz$。

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

![四つの四乗根。半径2^(-1/4)の円周上にπ/2ずつ離れて並ぶ。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/material/2023/tohoku-material-2023-roots.svg)

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

### 【数学-2】問 3

$$\frac{4-3z}{z^2-z}=-\frac4z+\frac1{z-1}.$$

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
