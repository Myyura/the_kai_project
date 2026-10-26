---
sidebar_label: "2016年8月実施 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---

# 九州大学 工学府 機械系専攻 2016年8月実施 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$xyz$ 空間の2次曲面を表す次の方程式について、以下の問いに答えよ。（50点）

$$
\begin{aligned}
2x^2+2y^2+4z^2+2xy+2yz+2xz&\\
{}+4\sqrt3x+4\sqrt3y-4\sqrt3z+17&=0.
\end{aligned}
$$

(1) 与式を $\boldsymbol X^{\mathsf T}A\boldsymbol X+\boldsymbol B^{\mathsf T}\boldsymbol X+c=0$ と表したとき、行列 $A$ の固有値と正規化した固有ベクトルを求めよ。ただし $\boldsymbol X$ は $xyz$ 空間のベクトルを表す。

(2) $P^{\mathsf T}AP$ が対角行列になる行列 $P$ とその時の対角行列を求めよ。

(3) $xyz$ 空間は $uvw$ 空間を行列 $P$ によって変換されたものとすると、$uvw$ 空間の2次曲面を求めよ。

### 题目描述

对于表示 $xyz$ 空间中二次曲面的下列方程，回答以下各问。（50分）

$$
\begin{aligned}
2x^2+2y^2+4z^2+2xy+2yz+2xz&\\
{}+4\sqrt3x+4\sqrt3y-4\sqrt3z+17&=0.
\end{aligned}
$$

(1) 将该方程写为 $\boldsymbol X^{\mathsf T}A\boldsymbol X+\boldsymbol B^{\mathsf T}\boldsymbol X+c=0$ 时，求矩阵 $A$ 的特征值和归一化特征向量。其中 $\boldsymbol X$ 表示 $xyz$ 空间中的向量。

(2) 求使 $P^{\mathsf T}AP$ 成为对角矩阵的矩阵 $P$，以及相应的对角矩阵。

(3) 设 $xyz$ 空间由 $uvw$ 空间经矩阵 $P$ 变换得到，求 $uvw$ 空间中的二次曲面。

## **Kai**

### (1)

$$
\begin{gathered}
A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&4\end{pmatrix},\\
B=4\sqrt3\begin{pmatrix}1\\1\\-1\end{pmatrix},\\
c=17.
\end{gathered}
$$

$\det(\lambda I-A)=(\lambda-1)(\lambda-2)(\lambda-5)$。対応する単位固有ベクトルは

$$
\boxed{\begin{gathered}
v_1=\frac1{\sqrt2}(1,-1,0)^{\mathsf T},\\
v_2=\frac1{\sqrt3}(1,1,-1)^{\mathsf T},\\
v_3=\frac1{\sqrt6}(1,1,2)^{\mathsf T}
\end{gathered}}.
$$

### (2)

$$
\begin{gathered}
\boxed{P=(v_1\ v_2\ v_3)=\frac1{\sqrt6}
\begin{pmatrix}\sqrt3&\sqrt2&1\\-\sqrt3&\sqrt2&1\\0&-\sqrt2&2\end{pmatrix}},\\
\boxed{P^{\mathsf T}AP=\operatorname{diag}(1,2,5)}.
\end{gathered}
$$

### (3)

$X=PU$、$U=(u,v,w)^{\mathsf T}$、$P^{\mathsf T}B=(0,12,0)^{\mathsf T}$ より

$$
\begin{gathered}
u^2+2v^2+5w^2+12v+17=0\\
\Longleftrightarrow\\
\boxed{u^2+2(v+3)^2+5w^2=1}.
\end{gathered}
$$

中心 $(0,-3,0)$、半軸長 $1,1/\sqrt2,1/\sqrt5$ の楕円面である。
