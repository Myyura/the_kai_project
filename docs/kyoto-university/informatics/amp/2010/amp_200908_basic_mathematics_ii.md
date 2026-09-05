---
sidebar_label: "2009年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2009年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h22/h22_kiso6.pdf)

$M(n, \mathbb{R})$ で $n \times n$ 実行列の全体を表し， $I \in M(n, \mathbb{R})$ で単位行列を表す。以下の問いに答えよ。

(i) $I + X$ が可逆であるとして， $Y = (I - X)(I + X)^{-1}$ とおく。このとき， $I + Y$ もまた可逆で， $X = (I - Y)(I + Y)^{-1}$ が成り立つことを示せ。

(ii) $A \in M(n, \mathbb{R})$ が反対称行列で $I + A$ が可逆ならば， $G = (I - A)(I + A)^{-1}$ は直交行列であることを示せ。ただし， $A^T = -A$ の成り立つ行列 $A$ を反対称 (歪対称) 行列といい，上付きの添え字 $T$ は行列の転置を表す。

(iii) ある $J \in M(n, \mathbb{R})$ に対し， $H \in M(n, \mathbb{R})$ は $H^T J = -JH$ をみたし， $I + H$ は可逆とする。このとき $S = (I - H)(I + H)^{-1}$ は $S^T J S = J$ をみたすことを示せ。(特に $J = I$ ならば，この問題は (ii) に帰着する。)

(iv) $n = 2$ とする。(ii), (iii) における $A, G, H, S$ を一般的な形で求めたい。(iii) における $J$ はここでは特に $J = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ とする。まず，次の一般的な反対称行列を $A = \begin{pmatrix} 0 & a \\ -a & 0 \end{pmatrix}, a \in \mathbb{R}$ とおいて， $G$ を求めよ。さらに， $H = \begin{pmatrix} p & q \\ r & s \end{pmatrix} \in M(2, \mathbb{R})$ とおいて， $H^T J = -JH$ をみたすように $H$ を定め，続いて $S$ を求めよ。

### 题目描述

以 $M(n,\mathbb R)$ 表示全体 $n\times n$ 实矩阵，以 $I$ 表示单位矩阵。完成以下各问：

1. 假设 $I+X$ 可逆，并令

   $$
   Y=(I-X)(I+X)^{-1}.
   $$

   证明 $I+Y$ 也可逆，且

   $$
   X=(I-Y)(I+Y)^{-1}.
   $$

2. 若 $A\in M(n,\mathbb R)$ 为反对称矩阵，即 $A^T=-A$，且 $I+A$ 可逆，证明

   $$
   G=(I-A)(I+A)^{-1}
   $$

   是正交矩阵；上标 $T$ 表示转置。
3. 设给定 $J\in M(n,\mathbb R)$，矩阵 $H\in M(n,\mathbb R)$ 满足
   $H^TJ=-JH$，且 $I+H$ 可逆。证明

   $$
   S=(I-H)(I+H)^{-1}
   $$

   满足 $S^TJS=J$。特别地，$J=I$ 时即退化为第 2 问。
4. 取 $n=2$，并在第 3 问中令

   $$
   J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
   $$

   先对一般反对称矩阵

   $$
   A=\begin{pmatrix}0&a\\-a&0\end{pmatrix},\qquad a\in\mathbb R,
   $$

   求出 $G$。再令

   $$
   H=\begin{pmatrix}p&q\\r&s\end{pmatrix},
   $$

   求出满足 $H^TJ=-JH$ 的一般 $H$，进而计算相应的 $S$。

## **Kai**

### (i) Cayley 変換の反転

$Y=(I-X)(I+X)^{-1}$ から

$$
I+Y=2(I+X)^{-1}
$$

である。したがって $I+Y$ は正則である。また、

$$
\begin{aligned}
Y(I+X)&=I-X,\\
(I+Y)X&=I-Y
\end{aligned}
$$

だから

$$
X=(I+Y)^{-1}(I-Y).
$$

$I-Y$ と $I+Y$ はともに $Y$ の多項式なので可換であり、

$$
X=(I-Y)(I+Y)^{-1}
$$

を得る。

### (ii) 直交性

$A^T=-A$ から

$$
G^T=(I-A)^{-1}(I+A).
$$

$I-A$ と $I+A$ は可換なので、

$$
\begin{aligned}
G^TG
&=(I-A)^{-1}(I+A)(I-A)(I+A)^{-1}\\
&=I.
\end{aligned}
$$

したがって $G$ は直交行列である。

### (iii) $S^TJS=J$

$H^TJ=-JH$ は、次の二式と同値である。

$$
(I-H^T)J=J(I+H),
\qquad
(I+H^T)J=J(I-H).
$$

$I+H$ が正則なので $I+H^T$ も正則である。 $S^T=(I+H^T)^{-1}(I-H^T)$ を用いると、

$$
\begin{aligned}
S^TJS
&=(I+H^T)^{-1}(I-H^T)J(I-H)(I+H)^{-1}\\
&=(I+H^T)^{-1}J(I+H)(I-H)(I+H)^{-1}\\
&=(I+H^T)^{-1}J(I-H)\\
&=J.
\end{aligned}
$$

ここでは $J$ の可逆性を仮定していない。

### (iv) $n=2$ の計算

まず

$$
A=
\begin{pmatrix}
0&a\\
-a&0
\end{pmatrix}
$$

に対して、

$$
(I+A)^{-1}
=\frac1{1+a^2}
\begin{pmatrix}
1&-a\\
a&1
\end{pmatrix}.
$$

したがって

$$
G=
\frac1{1+a^2}
\begin{pmatrix}
1-a^2&-2a\\
2a&1-a^2
\end{pmatrix}.
$$

次に $H=\begin{pmatrix}p&q\\r&s\end{pmatrix}$ として $H^TJ=-JH$ を成分比較すると $s=-p$ を得る。よって

$$
H=
\begin{pmatrix}
p&q\\
r&-p
\end{pmatrix}.
$$

$I+H$ が正則であるという条件は

$$
\delta:=\det(I+H)=1-p^2-qr\neq0
$$

である。直接計算により、

$$
S=
\frac1{\delta}
\begin{pmatrix}
1-2p+p^2+qr&-2q\\
-2r&1+2p+p^2+qr
\end{pmatrix}
$$

を得る。
