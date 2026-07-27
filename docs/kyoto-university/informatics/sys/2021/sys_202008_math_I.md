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
[AKIRA](https://www.xiaohongshu.com/explore/6876f017000000000b02e5de?xsec_token=ABmrCiL2MzCm_HVVdiD-IywB7NzKDDRf5z4eqaPfw2Wck=)

## **Description**
行列 $A$ の転置を $A^{\mathrm{T}}$ で表す。
問1、問2 はそれぞれ別の解答用紙に解答すること。

### 問1
以下の設問に答えよ。

(i) 3次元実ベクトル空間を考える。
$[1, 1, 1]^{\mathrm{T}}$ を基底とする1次元部分空間 $V$ への正射影について、その射影行列と $[x, y, z]^{\mathrm{T}}$ の像を求めよ。
また、$V$ の直交補空間の正規直交基底を1つ求めよ。

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
ただし、$X, Y, Z$ はそれぞれ $n \times n, n \times m, m \times m$ の行列であり、$\det X \ne 0$ とする。
また、$O$ は $m \times n$ の零行列である。必要であれば、2つの正方行列 $P, Q$ について、
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
$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n$、対応する固有ベクトルを $e_1, e_2, \dots, e_n$ とする。
ただし、$e_i \ (i=1, \dots, n)$ は互いに直交し、それぞれ長さ $1$ の $n$ 次元ベクトルである。
$n$ 次元ベクトル $x \ne 0$ に対して定義される

$$
R(x) = \frac{x^{\mathrm{T}} C x}{x^{\mathrm{T}} x}
$$

について考える。

(1) スカラー $a_i \ (i = 1, \dots, n)$ を用いて、$x$ を

$$
x = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n
$$

としたとき、$R(x)$ を $\lambda_i \ (i = 1, \dots, n)、a_i\ (i = 1, \dots, n)$ を用いて表せ。

(2) $R(x)$ の最大値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最大値を与える $x \ne 0$ はいかなるものか、$a_i\ (i = 1, \dots, n)$ などを用いて示せ。

(3) $R(x)$ の最小値を $\lambda_i\ (i = 1, \dots, n)$ を用いて表せ。
また、その最小値を与える $x \ne 0$ はいかなるものか、$a_i\ (i = 1, \dots, n)$ などを用いて示せ。

#### (ii)
3つの実数 $(x, y, z)$ が $x^2 + y^2 + z^2 = 1$ を満たすとき、

$$
J = 4x^2 + y^2 + 4z^2 + 4xy + 4yz - 2zx
$$

の最大値と最小値を求め、それぞれを与える $(x, y, z)$ をすべて示せ。

### 题目描述

矩阵 $A$ 的转置记作 $A^{\mathrm T}$。第 1、2 题分别在不同答题纸上作答。

1. 回答下列问题。

   （i）在三维实向量空间中，令 $V$ 为以

   $$
   [1,1,1]^{\mathrm T}
   $$

   为基的一个一维子空间。求到 $V$ 的正交投影矩阵，以及向量 $[x,y,z]^{\mathrm T}$ 在该投影下的像；另给出 $V$ 的正交补空间的一组标准正交基。

   （ii）对矩阵

   $$
   A=
   \begin{bmatrix}
   1&2&3\\
   2&0&2\\
   3&2&1
   \end{bmatrix},
   $$

   求其秩和行列式；若逆矩阵存在，则求出逆矩阵。

   （iii）求分块矩阵

   $$
   B=
   \begin{bmatrix}
   X&Y\\
   O&Z
   \end{bmatrix}
   $$

   的行列式 $\det B$，并写出推导过程。其中 $X,Y,Z$ 的尺寸分别为 $n\times n$、$n\times m$、$m\times m$，$\det X\ne0$，$O$ 为 $m\times n$ 零矩阵。必要时可使用方阵 $P,Q$ 的性质

   $$
   \det(PQ)=\det P\cdot\det Q.
   $$

2. 回答下列问题，每问均需说明理由。

   （i）设 $C$ 为 $n\times n$ 实对称矩阵，其特征值按

   $$
   \lambda_1\geq\lambda_2\geq\cdots\geq\lambda_n
   $$

   排列，对应特征向量 $e_1,\ldots,e_n$ 两两正交且均为单位向量。对任意非零 $n$ 维向量 $x$，定义 Rayleigh 商

   $$
   R(x)=\frac{x^{\mathrm T}Cx}{x^{\mathrm T}x}.
   $$

   1. 若

      $$
      x=a_1e_1+a_2e_2+\cdots+a_ne_n,
      $$

      用 $\lambda_1,\ldots,\lambda_n$ 与 $a_1,\ldots,a_n$ 表示 $R(x)$。
   2. 用特征值表示 $R(x)$ 的最大值，并用 $a_i$ 等说明所有取得该最大值的非零向量 $x$。
   3. 用特征值表示 $R(x)$ 的最小值，并用 $a_i$ 等说明所有取得该最小值的非零向量 $x$。

   （ii）实数 $(x,y,z)$ 满足

   $$
   x^2+y^2+z^2=1.
   $$

   求

   $$
   J=4x^2+y^2+4z^2+4xy+4yz-2zx
   $$

   的最大值和最小值，并列出分别取得这些极值的所有 $(x,y,z)$。

#### 考点

- **正交投影与正交补**：由基向量构造投影算子，并求子空间正交补的标准正交基。
- **秩、行列式与逆矩阵**：对具体矩阵进行初等运算，并处理块上三角矩阵的行列式。
- **Rayleigh 商**：在正交特征基下把二次型写为特征值的加权平均，刻画极值及等号条件。
- **对称二次型的约束极值**：把球面上的二次优化转化为对称矩阵的最大、最小特征值问题。


## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p1_s.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_math_I_p2_s.jpg" width="700" alt=""/>
</figure>
