---
sidebar_label: 2012年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Matrix-Exponential
---
# 京都大学 情報学研究科 システム科学専攻 2012年8月実施 数学【I】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

行列 $A$ の転置と行列式を $A^{\mathrm T},|A|$ と表す。$\|x\|^2=x^{\mathrm T}x$ とする。

### 問1
(i) $n\times m$ 行列 $M$ の階数が $m$ であることと、$|M^{\mathrm T}M|\ne0$ が等価であることを証明せよ。

(ii) ブロック行列 $\begin{pmatrix}A&B\\O&C\end{pmatrix}$ の逆行列を求めよ。$A,B,C$ のサイズはそれぞれ $n\times n,n\times m,m\times m$、$|A|,|C|\ne0$ とし、$O$ は $m\times n$ の零行列である。

(iii) 次の行列の固有ベクトルの一つが $(1,2,a,b,5)^{\mathrm T}$ であるとき、$a,b$ を求めよ。

$$
A=\begin{pmatrix}-5&1&4&1&1\\1&2&5&1&0\\-2&0&5&0&1\\3&3&9&2&0\\0&0&-1&1&1\end{pmatrix}.
$$

(iv) $n$ 次行列 $A$ に対して $I+\sum_{k=1}^\infty A^k/k!$ が正則であることを証明せよ。$I$ は単位行列である。

### 問2
内積 $x^{\mathrm T}y$ をもつ $\mathbb R^4$ を考える。$W$ の基底とベクトル $x$ を

$$
w_1=(1,1,0,0)^{\mathrm T},\qquad w_2=(1,0,1,0)^{\mathrm T},\qquad x=(1,1,1,1)^{\mathrm T}
$$

とする。

(i) $w_1$ が張る直線 $L$ への $x$ の正射影と、射影ベクトルと $x$ のなす角 $\theta$ を求めよ。

(ii) 任意の $u\in\mathbb R^4$ の $W$ への正射影を $y=Pu$ と表す。$P$ と、$u=x$ の場合の $y$ を求めよ。

(iii) $W$ の直交補空間 $W^\perp$ への正射影を $z=Qu$ と表す。$Q$ と、$u=x$ の場合の $z$ を求めよ。

#### 题目描述

以 $A^{\mathrm T},|A|$ 表示转置、行列式，并令 $\|x\|^2=x^{\mathrm T}x$。

**问1** (i) 证明 $n\times m$ 实矩阵 $M$ 的秩为 $m$ 当且仅当 $|M^{\mathrm T}M|\ne0$。(ii) 求块矩阵 $\begin{pmatrix}A&B\\0&C\end{pmatrix}$ 的逆，其中 $A,B,C$ 分别为 $n\times n,n\times m,m\times m$，且 $A,C$ 可逆。(iii) 若

$$
\begin{pmatrix}-5&1&4&1&1\\1&2&5&1&0\\-2&0&5&0&1\\3&3&9&2&0\\0&0&-1&1&1\end{pmatrix}
$$

有特征向量 $(1,2,a,b,5)^{\mathrm T}$，求 $a,b$。(iv) 证明对任意 $n$ 阶矩阵 $A$，$I+\sum_{k=1}^\infty A^k/k!$ 可逆。

**问2** 在标准内积的 $\mathbb R^4$ 中，$W$ 的基为 $w_1=(1,1,0,0)^{\mathrm T}$、$w_2=(1,0,1,0)^{\mathrm T}$，另有 $x=(1,1,1,1)^{\mathrm T}$。(i) 求 $x$ 在 $\operatorname{span}(w_1)$ 上的正交投影，以及投影向量与 $x$ 的夹角。(ii) 写出向 $W$ 正交投影的矩阵 $P$，并求 $Px$。(iii) 写出向 $W^\perp$ 正交投影的矩阵 $Q$，并求 $Qx$。

## **Kai**

### 問1
(i) $M^{\mathrm T}Mv=0$ なら $0=v^{\mathrm T}M^{\mathrm T}Mv=\|Mv\|^2$ より $Mv=0$。逆は明らかなので $\ker(M^{\mathrm T}M)=\ker M$。従って両者の核が零である条件、すなわち $\operatorname{rank}M=m$ と $|M^{\mathrm T}M|\ne0$ は等価である。

(ii) 直接乗算によって

$$
\boxed{\begin{pmatrix}A&B\\O&C\end{pmatrix}^{-1}
=\begin{pmatrix}A^{-1}&-A^{-1}BC^{-1}\\O&C^{-1}\end{pmatrix}}.
$$

(iii) 固有値を $\lambda$ とすると第一、第二、第五成分より

$$
2+4a+b=\lambda,\qquad5+5a+b=2\lambda,\qquad-a+b+5=5\lambda.
$$

これらを解くと $\boxed{a=-1,b=4}$、$\lambda=2$。第三、第四成分もそれぞれ $-2,8$ となり、確かに固有ベクトルである。

(iv) 所定の行列は $e^A$ である。絶対収束する級数を乗じると $e^Ae^{-A}=e^0=I$ なので正則であり、逆行列は $e^{-A}$。

### 問2
(i) $\operatorname{proj}_Lx=(w_1^{\mathrm T}x)/(w_1^{\mathrm T}w_1)\,w_1=\boxed{(1,1,0,0)^{\mathrm T}}$。$\cos\theta=2/(2\sqrt2)$ より $\boxed{\theta=\pi/4}$。

(ii) $B=(w_1\ w_2)$ とすると $P=B(B^{\mathrm T}B)^{-1}B^{\mathrm T}$ だから

$$
\boxed{P=\frac13\begin{pmatrix}2&1&1&0\\1&2&-1&0\\1&-1&2&0\\0&0&0&0\end{pmatrix}},\qquad
\boxed{Px=\frac13(4,2,2,0)^{\mathrm T}}.
$$

(iii) $Q=I-P$ より

$$
\boxed{Q=\frac13\begin{pmatrix}1&-1&-1&0\\-1&1&1&0\\-1&1&1&0\\0&0&0&3\end{pmatrix}},\qquad
\boxed{Qx=\frac13(-1,1,1,3)^{\mathrm T}}.
$$

