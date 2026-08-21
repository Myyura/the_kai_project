---
sidebar_label: "2008年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2008年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3次実正方行列 $X$ と実パラメータ $\lambda$ に対して、

$$
\det(\lambda I_3 - X) = \lambda^3 - \lambda^2 \phi_1(X) + \lambda \phi_2(X) - \phi_3(X)
$$

とおいて、関数 $\phi_j(X), j = 1, 2, 3$ を定める。ただし、 $\det$ は正方行列の行列式を表し、 $I_3$ は 3次単位行列である。以下の問いに答えよ。

(i) 次の等式を示せ。

$$
\phi_1(X) = \text{tr}(X), \quad \phi_2(X) = \sum_{k=1}^3 \det(X^{(kk)}), \quad \phi_3(X) = \det X
$$

ただし、 $\text{tr}$ は正方行列のトレースを、 $X^{(kk)}$ は行列 $X$ から $k$ 行と $k$ 列を取り除いてできる2次正方行列をそれぞれ表す。

(ii) 3次実正方行列 $A$ を列ベクトル $\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathbb{R}^3$ を用いて、 $A = (\mathbf{a}, \mathbf{b}, \mathbf{c})$ のように表す。このとき、 $X = A^T A$ に対し、 $\phi_j(A^T A), j = 1, 2, 3$ をベクトル $\mathbf{a}, \mathbf{b}, \mathbf{c}$ の内積、外積、ノルム等を用いて書き表せ。ただし、 $A^T$ は $A$ の転置行列を表す。また、 $\mathbf{x}, \mathbf{y} \in \mathbb{R}^3$ の内積、外積をそれぞれ $\mathbf{x} \cdot \mathbf{y}, \mathbf{x} \times \mathbf{y}$ で表し、 $\mathbf{x}$ のノルムを $|\mathbf{x}| = \sqrt{\mathbf{x} \cdot \mathbf{x}}$ と記す。

(iii) (ii) の $A$ に対し、以下の不等式を証明せよ。

$$
|\det A| \leq |\mathbf{a}| |\mathbf{b}| |\mathbf{c}|
$$

また、等号が成り立つのはどのような場合か。

### 题目描述

对三阶实方阵 $X$ 和实参数 $\lambda$，由特征多项式

$$
\det(\lambda I_3-X)
=\lambda^3-\lambda^2\phi_1(X)+\lambda\phi_2(X)-\phi_3(X)
$$

定义函数 $\phi_j(X)\ (j=1,2,3)$；其中 $\det$ 表示行列式，$I_3$ 为三阶单位矩阵。完成以下各问：

1. 证明

   $$
   \phi_1(X)=\operatorname{tr}(X),\qquad
   \phi_2(X)=\sum_{k=1}^{3}\det(X^{(kk)}),\qquad
   \phi_3(X)=\det X,
   $$

   其中 $X^{(kk)}$ 是从 $X$ 中删去第 $k$ 行和第 $k$ 列所得的二阶方阵。
2. 将三阶实方阵写成列向量形式 $A=(\mathbf a,\mathbf b,\mathbf c)$。对 $X=A^TA$，用 $\mathbf a,\mathbf b,\mathbf c\in\mathbb R^3$ 的内积、叉积和范数表示 $\phi_j(A^TA)\ (j=1,2,3)$。这里 $T$ 表示转置，
   $\mathbf x\cdot\mathbf y$、$\mathbf x\times\mathbf y$ 分别表示内积和叉积，且
   $|\mathbf x|=\sqrt{\mathbf x\cdot\mathbf x}$。
3. 证明

   $$
   |\det A|\leq|\mathbf a|\,|\mathbf b|\,|\mathbf c|,
   $$

   并说明等号成立的全部情形。

## **Kai**

### (i) 特性多項式の係数

$X=(x_{ij})$ とする。 $\det(\lambda I_3-X)$ を展開すると、 $\lambda^2$ の係数は

$$
-(x_{11}+x_{22}+x_{33})=-\operatorname{tr}X
$$

である。また、 $\lambda$ の係数は三つの主小行列式の和

$$
\begin{aligned}
&(x_{11}x_{22}-x_{12}x_{21})
+(x_{22}x_{33}-x_{23}x_{32})\\
&\qquad +(x_{33}x_{11}-x_{31}x_{13})
=\sum_{k=1}^3\det X^{(kk)}
\end{aligned}
$$

となる。定数項は $\det(-X)=-\det X$ である。定義式と係数を比較して、

$$
\phi_1(X)=\operatorname{tr}X,\qquad
\phi_2(X)=\sum_{k=1}^3\det X^{(kk)},\qquad
\phi_3(X)=\det X
$$

を得る。

### (ii) $X=A^TA$ の場合

$A=(\boldsymbol a,\boldsymbol b,\boldsymbol c)$ だから、

$$
A^TA=
\begin{pmatrix}
\boldsymbol a\cdot\boldsymbol a & \boldsymbol a\cdot\boldsymbol b & \boldsymbol a\cdot\boldsymbol c\\
\boldsymbol b\cdot\boldsymbol a & \boldsymbol b\cdot\boldsymbol b & \boldsymbol b\cdot\boldsymbol c\\
\boldsymbol c\cdot\boldsymbol a & \boldsymbol c\cdot\boldsymbol b & \boldsymbol c\cdot\boldsymbol c
\end{pmatrix}.
$$

したがって

$$
\phi_1(A^TA)
=|\boldsymbol a|^2+|\boldsymbol b|^2+|\boldsymbol c|^2.
$$

さらに Lagrange の恒等式

$$
|\boldsymbol u\times\boldsymbol v|^2
=|\boldsymbol u|^2|\boldsymbol v|^2-(\boldsymbol u\cdot\boldsymbol v)^2
$$

を各主小行列式に用いると、

$$
\phi_2(A^TA)
=|\boldsymbol a\times\boldsymbol b|^2
+|\boldsymbol b\times\boldsymbol c|^2
+|\boldsymbol c\times\boldsymbol a|^2.
$$

また、

$$
\begin{aligned}
\phi_3(A^TA)
&=\det(A^TA)
=(\det A)^2\\
&=\{\boldsymbol a\cdot(\boldsymbol b\times\boldsymbol c)\}^2
\end{aligned}
$$

である。

### (iii) Hadamard の不等式

スカラー三重積と Cauchy--Schwarz の不等式から、

$$
\begin{aligned}
|\det A|
&=|\boldsymbol a\cdot(\boldsymbol b\times\boldsymbol c)|\\
&\leq|\boldsymbol a|\,|\boldsymbol b\times\boldsymbol c|\\
&\leq|\boldsymbol a|\,|\boldsymbol b|\,|\boldsymbol c|
\end{aligned}
$$

を得る。

等号は、 $\boldsymbol a,\boldsymbol b,\boldsymbol c$ のいずれかが零ベクトルである場合には成立する。三つとも非零の場合、等号成立の必要十分条件は三ベクトルが互いに直交することである。このとき、 $\boldsymbol a$ は $\boldsymbol b\times\boldsymbol c$ と平行であり、その向きは問わない。
