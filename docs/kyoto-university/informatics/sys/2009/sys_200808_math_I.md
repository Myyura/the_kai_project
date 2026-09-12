---
sidebar_label: 2008年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
---

# 京都大学 情報学研究科 システム科学専攻 2008年8月実施 数学【I】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$A$ を $n\times m$ 実行列、$B$ を $m\times n$ 実行列とし、$I_n+AB$ は正則とする。$I_k$ は $k$ 次単位行列である。以下を証明せよ。

(i) $(I_n+AB)^{-1}=I_n-(I_n+AB)^{-1}AB$。

(ii) $(I_n+AB)^{-1}A=A(I_m+BA)^{-1}$。

(iii) $(I_n+AB)^{-1}=I_n-A(I_m+BA)^{-1}B$。

### 問2
(i) $n\ge2$ とする。$j$ 番目の成分が $b$、その他の成分が $1$ である $n$ 次元実ベクトルを $a_j$ とする。$\{a_1,\ldots,a_n\}$ が線形従属となる実数 $b$ をすべて求めよ。

(ii) $n\times n$ 実行列 $A,B$ が $A^TA=BA=BB^T$ を満たすとき、$A=B^T$ を示せ。任意の実行列 $C=(c_{ij})$ に対する $\operatorname{Tr}(C^TC)=\sum_{i,j}c_{ij}^2$ を用いてよい。

### 問3
$n\times m$ 実行列 $A$ について $A^TA$ は正則とし、$R$ は $n\times n$ 実対称正定値行列とする。

(i) $A^TRA$ が正則であることを示せ。

(ii) $b\in\mathbb R^n$ を定数、$x\in\mathbb R^m$ を変数とするとき、$(Ax-b)^TR(Ax-b)$ の最小値を与える $x$ を求めよ。

#### 题目描述

### 问1
$A$ 为 $n\times m$ 实矩阵，$B$ 为 $m\times n$ 实矩阵，$I_n+AB$ 可逆。$I_k$ 表示 $k$ 阶单位矩阵。证明：

(i) $(I_n+AB)^{-1}=I_n-(I_n+AB)^{-1}AB$。

(ii) $(I_n+AB)^{-1}A=A(I_m+BA)^{-1}$。

(iii) $(I_n+AB)^{-1}=I_n-A(I_m+BA)^{-1}B$。

### 问2
(i) $n\ge2$，$a_j$ 的第 $j$ 个分量为 $b$，其余均为 $1$。求使 $a_1,\ldots,a_n$ 线性相关的全部实数 $b$。

(ii) 实方阵 $A,B$ 满足 $A^TA=BA=BB^T$。证明 $A=B^T$。可用 $\operatorname{Tr}(C^TC)=\sum_{i,j}c_{ij}^2$。

### 问3
$A$ 是 $n\times m$ 实矩阵，$A^TA$ 可逆，$R$ 是 $n$ 阶实对称正定矩阵。

(i) 证明 $A^TRA$ 可逆。(ii) 对固定 $b\in\mathbb R^n$，求使 $(Ax-b)^TR(Ax-b)$ 最小的 $x\in\mathbb R^m$。

## **Kai**

### 問1
$C=I_n+AB$、$D=I_m+BA$ とおく。$Dv=0$ ならば $CAv=ADv=0$ より $Av=0$、さらに $v=Dv-BAv=0$。したがって $D$ も正則である。

(i) $C^{-1}+C^{-1}AB=C^{-1}C=I_n$。

(ii) $CA=AD$ の左から $C^{-1}$、右から $D^{-1}$ を掛ける。

(iii) (i) に (ii) を代入すれば $C^{-1}=I_n-AD^{-1}B$。

### 問2
(i) 列を $a_j$ とする行列は $(b-1)I_n+\boldsymbol1\boldsymbol1^T$。固有値は $b+n-1$ と $b-1$（重複度 $n-1$）なので

$$
\det(a_1,\ldots,a_n)=(b+n-1)(b-1)^{n-1}.
$$

よって $\boxed{b=1-n,\ 1}$。

(ii) $C=A-B^T$ とおく。仮定と転置によるトレースの不変性から

$$
\begin{aligned}
\operatorname{Tr}(C^TC)
&=\operatorname{Tr}(A^TA-A^TB^T-BA+BB^T)\\
&=\operatorname{Tr}(BA)-\operatorname{Tr}((BA)^T)=0.
\end{aligned}
$$

したがって全成分 $c_{ij}=0$、すなわち $A=B^T$。

### 問3
(i) $A^TA$ が正則なので $x\ne0$ ならば $Ax\ne0$。ゆえに

$$
x^TA^TRAx=(Ax)^TR(Ax)>0.
$$

$A^TRA$ は正定値、したがって正則である。

(ii) $x_*=(A^TRA)^{-1}A^TRb$ とおけば $A^TR(Ax_*-b)=0$。平方完成により

$$
(Ax-b)^TR(Ax-b)
=(Ax_*-b)^TR(Ax_*-b)+(x-x_*)^TA^TRA(x-x_*).
$$

右辺第2項は $x=x_*$ のときに限り $0$。したがって唯一の最小点は $\boxed{x=(A^TRA)^{-1}A^TRb}$。

