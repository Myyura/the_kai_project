---
sidebar_label: 2020年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Projection-Operator
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 数学【I】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/6876f017000000000b02e5de?xsec_token=ABmrCiL2MzCm_HVVdiD-IywB7NzKDDRf5z4eqaPfw2Wck=), 祭音Myyura

## **Description**
行列 $A$ の転置を $A^{\mathrm{T}}$ で表す。
問1、問2 はそれぞれ別の解答用紙に解答すること。

### 問1
以下の設問に答えよ。

(i) 3次元実ベクトル空間を考える。
$[1, 1, 1]^{\mathrm{T}}$ を基底とする1次元部分空間 $V$ への正射影について、その射影行列と $[x, y, z]^{\mathrm{T}}$ の像を求めよ。
また、 $V$ の直交補空間の正規直交基底を1つ求めよ。

(ii) 行列 $A$ について、その階数と行列式の値を求めよ。
また、逆行列があれば逆行列を求めよ。

$$
A =
\begin{bmatrix}
1 & 2 & 3 \\
2 & 0 & 2 \\
3 & 2 & 1
\end{bmatrix}
$$

(iii) 次のブロック行列 $B$ の行列式の値 $\det B$ を求めよ。導出過程も示すこと。
ただし、 $X, Y, Z$ はそれぞれ $n \times n, n \times m, m \times m$ の行列であり、 $\det X \ne 0$ とする。
また、 $O$ は $m \times n$ の零行列である。必要であれば、2つの正方行列 $P, Q$ について、
$\det (PQ) = \det P \cdot \det Q$ であることを用いてよい。

$$
B =
\begin{bmatrix}
X & Y \\
O & Z
\end{bmatrix}
$$

### 問2
以下の設問に答えよ。それぞれ、答えだけでなく、その理由についても示すこと。

#### (i)
$n \times n$ の実数値対称行列 $C$ の固有値を
$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$ 、対応する固有ベクトルを $e_1, e_2, \dots, e_n$ とする。
ただし、 $e_i \ (i=1, \dots, n)$ は互いに直交し、それぞれ長さ $1$ の $n$ 次元ベクトルである。
$n$ 次元ベクトル $x \ne 0$ に対して定義される

$$
R(x) = \frac{x^{\mathrm{T}} C x}{x^{\mathrm{T}} x}
$$

について考える。

(1) スカラー $a_i \ (i = 1, \dots, n)$ を用いて、 $x$ を

$$
x = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n
$$

としたとき、 $R(x)$ を $\lambda_i \ (i = 1, \dots, n)、a_i\ (i = 1, \dots, n)$ を用いて表せ。

(2) $R(x)$ の最大値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最大値を与える $x \ne 0$ はいかなるものか、 $a_i\ (i = 1, \dots, n)$ などを用いて示せ。

(3) $R(x)$ の最小値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最小値を与える $x \ne 0$ はいかなるものか、 $a_i\ (i = 1, \dots, n)$ などを用いて示せ。

#### (ii)
3つの実数 $(x, y, z)$ が $x^2 + y^2 + z^2 = 1$ を満たすとき、

$$
J = 4x^2 + y^2 + 4z^2 + 4xy + 4yz - 2zx
$$

の最大値と最小値を求め、それぞれを与える $(x, y, z)$ をすべて示せ。

### 题目描述

以下用 $A^{\mathrm T}$ 表示矩阵 $A$ 的转置。第 1 题和第 2 题应分别写在不同答题纸上。

1. 回答下列各问。

   1. 在三维实向量空间中，令 $V$ 为由
      $[1,1,1]^{\mathrm T}$ 张成的一维子空间。求到 $V$ 的正交投影矩阵，求
      $[x,y,z]^{\mathrm T}$ 在该投影下的像，并给出 $V^\perp$ 的一组标准正交基。
   2. 对矩阵

$$
A=
\begin{bmatrix}
1&2&3\\
2&0&2\\
3&2&1
\end{bmatrix},
$$

求 $\operatorname{rank}A$ 和 $\det A$；若 $A$ 可逆，再求 $A^{-1}$。
   3. 对分块矩阵

$$
B=
\begin{bmatrix}
X&Y\\
O&Z
\end{bmatrix},
$$

求 $\det B$ 并写出推导过程。这里 $X$、$Y$、$Z$ 的尺寸依次为
$n\times n$、$n\times m$、$m\times m$，且
$\det X\ne0$；$O$ 是 $m\times n$ 零矩阵。必要时可以使用任意同阶方阵
$P,Q$ 的性质

$$
\det(PQ)=\det P\cdot\det Q.
$$

2. 回答下列各问；除答案外，每一问都要说明理由。

   1. 设 $C$ 是 $n\times n$ 实对称矩阵，其特征值按

$$
\lambda_1\geq\lambda_2\geq\cdots\geq\lambda_n
$$

排列。相应特征向量
$\boldsymbol{e}_1,\ldots,\boldsymbol{e}_n$ 两两正交且长度均为 $1$。对任意非零
$n$ 维向量 $\boldsymbol{x}$，定义 Rayleigh 商

$$
R(\boldsymbol{x})
=\frac{\boldsymbol{x}^{\mathrm T}C\boldsymbol{x}}
{\boldsymbol{x}^{\mathrm T}\boldsymbol{x}}.
$$

      1. 若

$$
\boldsymbol{x}
=a_1\boldsymbol{e}_1+\cdots+a_n\boldsymbol{e}_n,
$$

用 $\lambda_1,\ldots,\lambda_n$ 和 $a_1,\ldots,a_n$ 表示
$R(\boldsymbol{x})$。
      2. 用特征值表示 $R(\boldsymbol{x})$ 的最大值，并用系数 $a_i$ 等完整刻画所有取得该最大值的非零 $\boldsymbol{x}$。
      3. 用特征值表示 $R(\boldsymbol{x})$ 的最小值，并用系数 $a_i$ 等完整刻画所有取得该最小值的非零 $\boldsymbol{x}$。

   2. 实数 $x,y,z$ 满足

$$
x^2+y^2+z^2=1.
$$

求

$$
J=4x^2+y^2+4z^2+4xy+4yz-2zx
$$

的最大值和最小值，并分别列出取得这两个极值的全部三元组 $(x,y,z)$。

## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p1_s.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p2_s.jpg" width="700" alt=""/>
</figure>

#### 問2 (i) の訂正

最大値は $\lambda_1$ であり、これをとる非零ベクトルは

$$
x\in\operatorname{span}\{e_i\mid \lambda_i=\lambda_1\}\setminus\{0\}
$$

のすべてである。同様に、最小値 $\lambda_n$ をとるのは

$$
x\in\operatorname{span}\{e_i\mid \lambda_i=\lambda_n\}\setminus\{0\}
$$

のすべてである。
