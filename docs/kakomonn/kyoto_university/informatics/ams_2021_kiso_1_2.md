---
comments: false
title: 京都大学 情報学研究科 先端数理科学専攻 2021年実施 基礎科目1, 基礎科目2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 先端数理科学専攻 2021年実施 基礎科目1, 基礎科目2

## **Author**
Miyake

## **Description**
### 日本語版
#### 1
$a$ を実数とする。$3$ 行 $3$ 列の実行列 $X$ を

$$
X = \begin{pmatrix}
1 & 1 & 2 \\
-3 & 0 & 3 \\
-1 & 2 & a
\end{pmatrix}
$$

によって与える。次の各問に答えよ。

(1) $X$ 正則行列にならないような $a$ の値を求めよ。

(2) $a = 4$ のとき、$X$ の逆行列を求めよ。

#### 2
自然数 $k$ に対して、$E_k$ と $O_k$ はそれぞれ $k$ 行 $k$ 列の単位行列と零行列を表わすものとする。また、$k$行 $k$ 列の実行列

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1k} \\
a_{21} & a_{22} & \cdots & a_{2k} \\
\vdots & \vdots & \ddots & \vdots \\
a_{k1} & a_{k2} & \cdots & a_{kk} 
\end{pmatrix}
$$

に対して、$A$ のトレース $\text{tr}(A)$ を

$$
\text{tr}(A) = \sum_{i = 1}^k a_{ii}
$$

によって与える。次の各問に答えよ。

(1) $k$ 行 $k$ 列の実行列 $A$ は 

$$
A^2 + A - 2E_k = O_k
$$

を満たしているとする。この時 $A$ の固有値の取りうる値をすべて求めよ。

(2) $k$行 $k$列の実行列 $B$と $C$に対して、 $\text{tr}(BC) = \text{tr}(CB)$　が成立することを示せ。

(3) $2$ 行 $2$ 列の実行列 $D$ は

$$
D^2 + D - 2E_2 = O_2
$$

を満たしているとする。このとき $\text{tr}(D)$ の取りうる値をすべて求めよ。

## **Kai**
### 1.
#### (1)

$$
\begin{aligned}
\det X
&= 3a-21 = 3(a-7)
\end{aligned}
$$

なので、 $X$ が正則にならないのは $a=7$ のときである。

#### (2)
$a=4$ のとき、

$$
\begin{aligned}
X
= \begin{pmatrix} 1 & 1 & 2 \\ -3 & 0 & 3 \\ -1 & 2 & 4 \end{pmatrix}
\end{aligned}
$$

である。

行基本変形あるいは余因子行列を使って計算すると、次がわかる：

$$
\begin{aligned}
X^{-1}
= \frac{1}{3} \begin{pmatrix} 2 & 0 & -1 \\ -3 & -2 & 3 \\ 2 & 1 & -1 \end{pmatrix}
\end{aligned}
$$