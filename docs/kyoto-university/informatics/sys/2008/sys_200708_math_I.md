---
sidebar_label: 2007年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Inverse-of-Identity-plus-Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
---

# 京都大学 情報学研究科 システム科学専攻 2007年8月実施 数学【I】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$n\times n$ 実行列 $A_n=(a_{ij})$ の成分が $a_{ii}=1$、$a_{i,i+1}=-b$、その他は $0$ であるとき、$A_n^{-1}$ を求めよ。

### 問2
$A=I+ab^T$ とする。$I$ は $n$ 次単位行列、$a,b$ は $n$ 次元実列ベクトルである。

(i) スカラー数列 $\{c_k\}$ によって $A^k=I+c_kab^T$（$k=1,2,\ldots$）と表せることを数学的帰納法で示せ。

(ii) $b^Ta\ne0$ とする。$c_k$ を求め、実数 $t$ に対し $\exp(At)=\sum_{k=0}^\infty A^kt^k/k!$ を求めよ。

### 問3
$n\times n$ 実対称行列 $A=(a_{ij}),B=(b_{ij})$ を考える。

(i) $A=UDU^T$ と表せることを示せ。$U$ は直交行列、$D$ は対角行列である。すなわち $a_{ij}=\sum_{p=1}^n u_{ip}d_pu_{jp}$ と表される。

(ii) $c_{ij}=a_{ij}b_{ij}$ によって行列 $C$ を定義する。$A,B$ が正定値ならば $C$ も正定値であることを、$x^TCx=\sum_{i,j}c_{ij}x_ix_j$ を調べて証明せよ。

#### 题目描述

### 问1
实矩阵 $A_n$ 的主对角线为 $1$，上方紧邻的副对角线为 $-b$，其余为 $0$。求其逆矩阵。

### 问2
设 $A=I+ab^T$，$a,b$ 为 $n$ 维实列向量。

(i) 用数学归纳法证明存在标量序列 $c_k$，使 $A^k=I+c_kab^T$。

(ii) 若 $b^Ta\ne0$，求 $c_k$ 及 $\exp(At)=\sum_{k=0}^\infty A^kt^k/k!$，其中 $t$ 为实数。

### 问3
$A,B$ 为 $n$ 阶实对称矩阵。

(i) 证明 $A=UDU^T$，其中 $U$ 正交、$D$ 对角，即 $a_{ij}=\sum_pu_{ip}d_pu_{jp}$。

(ii) 定义 $c_{ij}=a_{ij}b_{ij}$。通过分析二次型 $x^TCx$，证明 $A,B$ 正定时 $C$ 也正定。

## **Kai**

### 問1
上方の副対角成分だけが $1$ の行列を $S$ とすると、$S^n=0$、$A_n=I-bS$。したがって

$$
\boxed{A_n^{-1}=\sum_{k=0}^{n-1}b^kS^k},\qquad
(A_n^{-1})_{ij}=\begin{cases}b^{j-i}&j\ge i,\\0&j<i.\end{cases}
$$

実際、$(I-bS)\sum_{k=0}^{n-1}b^kS^k=I-b^nS^n=I$。

### 問2
(i) $c_1=1$ とする。$\beta=b^Ta$ とおけば $(ab^T)^2=\beta ab^T$ であるから

$$
(I+c_kab^T)(I+ab^T)=I+\{1+(1+\beta)c_k\}ab^T.
$$

したがって $c_{k+1}=1+(1+\beta)c_k$ と定めれば帰納法が成立する。

(ii) 漸化式を解くと $c_k=((1+\beta)^k-1)/\beta$。$c_0=0$ として級数に代入すれば

$$
\boxed{e^{At}=e^tI+\frac{e^{(1+\beta)t}-e^t}{\beta}ab^T
=e^t\left(I+\frac{e^{\beta t}-1}{\beta}ab^T\right)}.
$$

### 問3
(i) 単位球面上で $x^TAx$ を最大にする単位ベクトル $u$ を選ぶ。ラグランジュの未定乗数法から $Au=du$。対称性より $u^\perp$ は $A$ の不変部分空間である。同じ議論をその部分空間に帰納的に適用すれば、正規直交固有ベクトル $u_1,\ldots,u_n$ が得られる。これらを列とする $U$ と $D=\operatorname{diag}(d_1,\ldots,d_n)$ により $A=UDU^T$。

(ii) $y_p=(u_{1p}x_1,\ldots,u_{np}x_n)^T$ とおくと

$$
x^TCx=\sum_{p=1}^nd_p\,y_p^TBy_p.
$$

すべての $d_p>0$ であり、各項は非負。また $x\ne0$ ならば

$$
\sum_p\|y_p\|^2=\sum_i x_i^2\sum_pu_{ip}^2=\|x\|^2>0
$$

なので少なくとも一つの $y_p\ne0$。その項は正であり、$x^TCx>0$。よって $C$ は正定値である。

