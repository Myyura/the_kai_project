---
sidebar_label: "2016年9月実施 数理基礎 D"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Power
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 数理基礎 D

## **Author**
祭音Myyura

## **Description**
### [小問 D1]

$$
a=\begin{pmatrix}1\\x\\-1\end{pmatrix},\qquad
b=\begin{pmatrix}y\\3\\6\end{pmatrix}
$$

が一次独立となる条件および直交する条件を求め、直交すれば一次独立であることを示せ。

### [小問 D2]

可換な行列に対する二項定理を用いて

$$
C=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$

の $m$ 乗を求めよ。

## **Kai**

### [小問 D1]

$a,b$ が一次従属であると仮定すると、$b=\lambda a$ と書ける。第3成分から $\lambda=-6$、第2成分から $x=-1/2$、第1成分から $y=-6$ となる。よって一次独立の条件は

$$
\boxed{(x,y)\neq\left(-\frac12,-6\right)}.
$$

直交条件は

$$
a^{\mathsf T}b=y+3x-6=0,
$$

すなわち

$$
\boxed{y+3x=6}.
$$

$a,b$ はともに零ベクトルではない。零でない直交ベクトルが一次従属なら $b=\lambda a$ かつ

$$
0=a^{\mathsf T}b=\lambda\lVert a\rVert^2
$$

となるため $\lambda=0$、すなわち $b=0$ となって矛盾する。したがって直交すれば一次独立である。

### [小問 D2]

$$
C=E+N,\qquad
N=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad N^2=0
$$

と書ける。$E$ と $N$ は可換なので、二項定理から

$$
\begin{aligned}
C^m
&=(E+N)^m\\
&=E+mN\\
&=\boxed{\begin{pmatrix}1&m\\0&1\end{pmatrix}}.
\end{aligned}
$$
