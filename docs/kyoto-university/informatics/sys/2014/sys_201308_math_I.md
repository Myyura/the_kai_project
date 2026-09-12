---
sidebar_label: 2013年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Limit
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
---
# 京都大学 情報学研究科 システム科学専攻 2013年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

以下、$A^{\mathrm T}$ は転置を表し、ベクトルはすべて実列ベクトルとする。

### 問1
(i) $x,b\in\mathbb R^n$、$A$ は $n\times n$ の正定対称行列、$c$ はスカラーとする。$f(x)=x^{\mathrm T}Ax+b^{\mathrm T}x+c$ の極値および極値点を求めよ。

(ii) $n\times n$ 実行列 $A,B$ に対して $\ker A\cap\ker B\subset\ker(A+B)$ を証明せよ。$\ker X$ は行列 $X$ の定める線形写像の核を表す。

(iii) 次の行列の固有値を求め、任意の $x\in\mathbb R^4$ に対して $\lim_{k\to\infty}A^kx=0$ となる実数 $a$ の範囲を求めよ。

$$
A=\begin{pmatrix}0.9&0&0&0\\1&0.5&a&0\\1&a&0.5&0\\-1&1&-1&0.8\end{pmatrix}.
$$

### 問2
連立一次方程式

$$
3x+2y+z=0,\qquad3x+y+2z=0,\qquad ax+2y+3z=0
$$

が零解以外の解をもつ場合を考える。

(i) 係数を縦に並べた $k_x=(3,3,a)^{\mathrm T},k_y=(2,1,2)^{\mathrm T},k_z=(1,2,3)^{\mathrm T}$ が線形従属であることを示せ。

(ii) $a$ を求めよ。

(iii) この方程式を $A(x,y,z)^{\mathrm T}=0$ と書いたとき、$A$ の階数を求めよ。

(iv) 各方程式の係数を並べた $k_1=(3,2,1)^{\mathrm T},k_2=(3,1,2)^{\mathrm T},k_3=(a,2,3)^{\mathrm T}$ のすべてと直交するベクトルを求めよ。

#### 题目描述

以下 $A^{\mathrm T}$ 表示转置，所有向量均为实列向量。

**问1** (i) 设 $x,b\in\mathbb R^n$，$A$ 为正定对称矩阵，$c$ 为标量，求 $x^{\mathrm T}Ax+b^{\mathrm T}x+c$ 的极值与极值点。(ii) 对 $n$ 阶实矩阵 $A,B$，证明 $\ker A\cap\ker B\subset\ker(A+B)$，其中 $\ker$ 表示核。(iii) 求下列矩阵的特征值，以及使任意 $x\in\mathbb R^4$ 都有 $A^kx\to0$ 的实数 $a$ 的范围。

$$
A=\begin{pmatrix}0.9&0&0&0\\1&0.5&a&0\\1&a&0.5&0\\-1&1&-1&0.8\end{pmatrix}.
$$

**问2** 假设方程组 $3x+2y+z=0,\ 3x+y+2z=0,\ ax+2y+3z=0$ 有非零解。(i) 证明列向量 $(3,3,a)^{\mathrm T},(2,1,2)^{\mathrm T},(1,2,3)^{\mathrm T}$ 线性相关。(ii) 求 $a$。(iii) 求方程组系数矩阵的秩。(iv) 求与三个行系数向量 $(3,2,1)^{\mathrm T},(3,1,2)^{\mathrm T},(a,2,3)^{\mathrm T}$ 都正交的向量。

## **Kai**

### 問1
(i) 平方完成すると

$$
f(x)=\left(x+\frac12A^{-1}b\right)^{\mathrm T}A\left(x+\frac12A^{-1}b\right)+c-\frac14b^{\mathrm T}A^{-1}b.
$$

従って唯一の極小点は $\boxed{x=-A^{-1}b/2}$、極小値は $\boxed{c-b^{\mathrm T}A^{-1}b/4}$。極大値はない。

(ii) $x\in\ker A\cap\ker B$ なら $(A+B)x=Ax+Bx=0$。よって所定の包含が成り立つ。

(iii) ブロック三角構造より固有値は $\boxed{0.9,0.8,0.5+a,0.5-a}$。$A^k\to0$ の必要十分条件はすべての固有値の絶対値が $1$ 未満であることだから、

$$
|0.5+a|<1,\quad|0.5-a|<1\quad\Longleftrightarrow\quad\boxed{-0.5<a<0.5}.
$$

重複固有値がある場合も、ジョルダンブロックのべきに現れる多項式因子は絶対値 $1$ 未満の指数減衰により零に収束する。

### 問2
(i) 非零解 $(x,y,z)$ によって $xk_x+yk_y+zk_z=0$ となる。係数がすべて零ではないので線形従属である。

(ii) 係数行列の行列式は $3a-15$。非零解があるため $\boxed{a=5}$。

(iii) 左上 $2\times2$ 小行列の行列式は $-3\ne0$、全体の行列式は零なので $\boxed{\operatorname{rank}A=2}$。

(iv) 直交条件は同じ連立方程式であり、$y=z=-x$ を得る。従ってすべての該当ベクトルは $\boxed{t(-1,1,1)^{\mathrm T},\ t\in\mathbb R}$。

