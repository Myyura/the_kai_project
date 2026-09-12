---
sidebar_label: 2006年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Skew-Symmetric-Matrix
  - Mathematics.Linear-Algebra.Tridiagonal-Determinant-Recurrence
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
---

# 京都大学 情報学研究科 システム科学専攻 2006年8月実施 数学【I】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
次の連立一次方程式が解をもつための実数 $a$ の条件と、そのときの解を求めよ。

$$
\begin{cases}
x+y-z=1,\\
2x-y+z=-1,\\
3x+ay+z=-1,\\
2x-2y+(a+3)z=a-7.
\end{cases}
$$

### 問2
$n\times n$ 実行列 $A$ が交代行列、すなわち $A=-A^T$ であるとする。

(i) 固有値を $\lambda$、対応する固有ベクトルを $x$ とし、$x^HA^Hx$ を考えて $\lambda$ が $0$ または純虚数であることを示せ。$H$ は共役転置を表す。

(ii) $I+A$ が正則であることを示せ。

### 問3
$n\times n$ 実行列 $A_n$ の主対角成分は $1$、隣接する上下の成分は $b$、その他は $0$ とする。

(i) $D_n=\det A_n$ とおくと、$D_n=D_{n-1}-b^2D_{n-2}$（$n>2$）を満たすことを示せ。

(ii) $b=c/(1+c^2)$、$-1<c<1$ のとき、$A_n$ は正定値であることを示せ。

#### 题目描述

### 问1
求参数 $a$ 的条件，使下列方程组有解，并求解：

$$
\begin{cases}x+y-z=1,\\2x-y+z=-1,\\3x+ay+z=-1,\\2x-2y+(a+3)z=a-7.\end{cases}
$$

### 问2
实矩阵 $A$ 满足 $A=-A^T$。

(i) 设 $Ax=\lambda x$，通过 $x^HA^Hx$ 证明特征值为零或纯虚数，$H$ 表示共轭转置。(ii) 证明 $I+A$ 可逆。

### 问3
三对角实矩阵 $A_n$ 的主对角线为 $1$，两条相邻副对角线为 $b$，其余为 $0$。

(i) 证明 $D_n=\det A_n$ 满足 $D_n=D_{n-1}-b^2D_{n-2}$（$n>2$）。

(ii) 若 $b=c/(1+c^2)$、$-1<c<1$，证明 $A_n$ 正定。

## **Kai**

### 問1
最初の二式から $x=0,y=z+1$。残りの二式は

$$
(a+1)(z+1)=0,\qquad(a+1)z=a-5.
$$

$a=-1$ ならば後式が矛盾する。$a\ne-1$ ならば $z=-1$ であり、$-a-1=a-5$ から $a=2$。したがって

$$
\boxed{a=2,\qquad(x,y,z)=(0,0,-1)}.
$$

### 問2
(i) 実交代行列なので $A^H=-A$。$Ax=\lambda x$、$x\ne0$ より

$$
\bar\lambda\,x^Hx=(Ax)^Hx=x^HA^Hx=-x^HAx=-\lambda\,x^Hx.
$$

したがって $\bar\lambda=-\lambda$、すなわち $\operatorname{Re}\lambda=0$。

(ii) $I+A$ が特異ならば $Av=-v$ を満たす非零 $v$ が存在し、$-1$ が固有値となる。(i) に反するので $I+A$ は正則。

### 問3
(i) 第1行で余因子展開すると、第1項は $D_{n-1}$、第2項は $-b^2D_{n-2}$ となる。

(ii) $D_0=1,D_1=1$ とすると、漸化式から

$$
D_k=\frac{1-c^{2k+2}}{(1-c^2)(1+c^2)^k}\qquad(k\ge0).
$$

$|c|<1$ よりすべての $D_k>0$。$D_1,\ldots,D_n$ は実対称行列 $A_n$ の首座小行列式であるから、シルベスターの判定法により $A_n$ は正定値。

