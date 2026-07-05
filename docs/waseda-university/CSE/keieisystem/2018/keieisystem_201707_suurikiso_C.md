---
sidebar_label: "2017年7月実施 数理基礎 C"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Commuting-Matrices
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 数理基礎 C

## **Author**
祭音Myyura

## **Description**

1. $\boldsymbol a=(1,0,0)^{\mathsf T}$、$\boldsymbol b=(0,1,1)^{\mathsf T}$ を2辺とする平行四辺形の面積を求めよ。
2. $A=\begin{pmatrix}1&2\\4&-1\end{pmatrix}$ の相異なる固有値と、それぞれに対応する固有ベクトルを求めよ。
3. $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ と可換な任意の実2次正方行列は、互いに可換であることを示せ。

## **Kai**

### [小問 1]

$\boldsymbol a\cdot\boldsymbol b=0$ なので2辺は直交し、$\|\boldsymbol a\|=1$、$\|\boldsymbol b\|=\sqrt2$ である。したがって面積は

$$
\boxed{\|\boldsymbol a\|\|\boldsymbol b\|=\sqrt2}.
$$

### [小問 2]

特性方程式は

$$
\det(A-\lambda I)
=(1-\lambda)(-1-\lambda)-8
=\lambda^2-9=0.
$$

よって

$$
\lambda_1=3,qquad \lambda_2=-3.
$$

$\lambda_1=3$ では $-2x+2y=0$、$\lambda_2=-3$ では $4x+2y=0$ なので、対応する固有空間は

$$
\boxed{
E_3=\operatorname{span}\left\{\binom11\right\},qquad
E_{-3}=\operatorname{span}\left\{\binom1{-2}\right\}
}.
$$

### [小問 3]

$X=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ とおく。$XJ=JX$ を成分ごとに比較すると

$$
b=-c,qquad d=a
$$

を得る。したがって、$J$ と可換な行列は必ず

$$
X=\begin{pmatrix}a&b\\-b&a\end{pmatrix}=aI-bJ
$$

と表せる。同様に $Y=cI-dJ$ とすれば、$I$ と $J$ が可換であることから

$$
XY=(aI-bJ)(cI-dJ)=(cI-dJ)(aI-bJ)=YX.
$$

よって、$J$ と可換な任意の実2次正方行列は互いに可換である。
