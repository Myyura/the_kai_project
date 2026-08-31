---
sidebar_label: "2017年2月実施 数学コース 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Symmetric-and-Skew-Symmetric-Decomposition
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Invariant-Subspace-and-Restricted-Operator
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2017年2月実施 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
$3$ 次実正方行列全体の集合 $M_3(\mathbb{R})$ を通常の行列の和、実数倍について実ベクトル空間とみなす。$M_3(\mathbb{R})$ の部分集合 $V,W$ を次で定める。

$$
V=\{X\in M_3(\mathbb{R})\mid {}^tX=X\},
\qquad
W=\{X\in M_3(\mathbb{R})\mid {}^tX=-X\}.
$$

ここで、${}^tX$ は $X$ の転置行列を表す。$3$ 次実正方行列 $A$ を

$$
A=\begin{pmatrix}
1&0&0\\
0&-1&0\\
0&0&0
\end{pmatrix}
$$

と定める。この $A$ に対し、写像 $T:M_3(\mathbb{R})\to M_3(\mathbb{R})$ を

$$
T(X)=AX-XA
$$

で定義する。このとき次の問に答えよ。

1. $V,W$ はそれぞれ $M_3(\mathbb{R})$ の線形部分空間であることを示せ。
2. $M_3(\mathbb{R})$ は $V,W$ の直和空間になることを示せ。すなわち、任意の $Z\in M_3(\mathbb{R})$ は $X\in V$ と $Y\in W$ の和 $X+Y$ として一意的に表せることを示せ。
3. $T$ は $M_3(\mathbb{R})$ から $M_3(\mathbb{R})$ への線形写像であることを示せ。
4. $T$ の核空間 $\operatorname{Ker}T=\{X\in M_3(\mathbb{R})\mid T(X)=0\}$ の基底と次元を求めよ。
5. $T(V)\subset W$, $T(W)\subset V$ が成立することを示せ。
6. (5) によって $T^2=T\circ T$ は $V$ を不変にする。$T^2$ を $V$ に制限して得られる $V$ の線形変換を $S$ と表す。$S$ の固有値が $0,1,4$ であることを示し、それぞれの固有値に属する固有空間 $V(0),V(1),V(4)$ を求めよ。

### 题目描述

令 $V,W$ 分别为 $3$ 阶实对称矩阵和实反对称矩阵构成的集合，$A=\operatorname{diag}(1,-1,0)$，并定义 $T(X)=AX-XA$。

1. 证明 $V,W$ 都是线性子空间。
2. 证明 $M_3(\mathbb R)=V\oplus W$。
3. 证明 $T$ 是线性映射。
4. 求 $\ker T$ 的一组基和维数。
5. 证明 $T(V)\subset W$、$T(W)\subset V$。
6. 对 $S=T^2|_V$，证明其特征值为 $0,1,4$，并求相应特征空间。

## **Kai**

$E_{ij}$ を第 $(i,j)$ 成分だけが $1$ である行列とする。

### (1)

$X,Y\in V$, $a,b\in\mathbb{R}$ に対して

$$
{}^t(aX+bY)=a\,{}^tX+b\,{}^tY=aX+bY
$$

であり、零行列も $V$ に属する。よって $V$ は線形部分空間である。同様に $X,Y\in W$ なら

$$
{}^t(aX+bY)=a(-X)+b(-Y)=-(aX+bY),
$$

したがって $W$ も線形部分空間である。

### (2)

任意の $Z\in M_3(\mathbb{R})$ に対して

$$
X=\frac{Z+{}^tZ}{2},
\qquad
Y=\frac{Z-{}^tZ}{2}
$$

とおけば、$X\in V$, $Y\in W$ かつ $Z=X+Y$ である。また、$Q\in V\cap W$ なら ${}^tQ=Q=-Q$ より $Q=0$ である。ゆえに分解は一意で、

$$
\boxed{M_3(\mathbb{R})=V\oplus W}
$$

となる。

### (3)

$X,Y\in M_3(\mathbb{R})$, $a,b\in\mathbb{R}$ に対して

$$
T(aX+bY)=A(aX+bY)-(aX+bY)A=aT(X)+bT(Y).
$$

よって $T$ は線形写像である。

### (4)

$X=(x_{ij})$ とし、$A$ の対角成分を $\lambda_1=1$, $\lambda_2=-1$, $\lambda_3=0$ とおくと、

$$
(T(X))_{ij}=(\lambda_i-\lambda_j)x_{ij}.
$$

$\lambda_1,\lambda_2,\lambda_3$ は相異なるので、$T(X)=0$ なら $i\ne j$ に対して $x_{ij}=0$ である。したがって

$$
\operatorname{Ker}T
=\left\{\begin{pmatrix}a&0&0\\0&b&0\\0&0&c\end{pmatrix}
\middle|a,b,c\in\mathbb{R}\right\},
$$

ゆえに

$$
\boxed{\text{基底 }\{E_{11},E_{22},E_{33}\},\qquad \dim\operatorname{Ker}T=3}
$$

である。

### (5)

$A$ は対称行列である。$X\in V$ なら

$$
{}^tT(X)={}^t(AX-XA)=XA-AX=-T(X),
$$

よって $T(X)\in W$ である。一方、$Y\in W$ なら

$$
{}^tT(Y)={}^t(AY-YA)=(-Y)A-A(-Y)=AY-YA=T(Y),
$$

よって $T(Y)\in V$ である。

### (6)

$i<j$ に対して $F_{ij}=E_{ij}+E_{ji}\in V$ とおく。(4) の計算から

$$
T^2(F_{ij})=(\lambda_i-\lambda_j)^2F_{ij},
\qquad
T^2(E_{ii})=0.
$$

ここで

$$
(\lambda_1-\lambda_2)^2=4,
\qquad
(\lambda_1-\lambda_3)^2=(\lambda_2-\lambda_3)^2=1.
$$

したがって

$$
\boxed{
\begin{aligned}
V(0)&=\operatorname{span}\{E_{11},E_{22},E_{33}\},\\
V(1)&=\operatorname{span}\{E_{13}+E_{31},\ E_{23}+E_{32}\},\\
V(4)&=\operatorname{span}\{E_{12}+E_{21}\}.
\end{aligned}}
$$

各空間の次元の和は $3+2+1=6=\dim V$ であるから、これらで $V$ 全体を尽くす。
