---
sidebar_label: "2019年8月実施 数学 I"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語版

#### 問1

$\mathbb{R}^3$ から $\mathbb{R}^3$ への線形写像 $f$ の表現行列が $A$ であるとして, 以下の設問に答えよ。 ただし, $a$ は実数とする。

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & a \end{pmatrix}
$$

(i) 行列 $A$ の階数(ランク)が最小になる $a$ の値を求めよ。また, このときの行列 $A$ の階数を求めよ。

(ii) 行列 $A$ の階数が最小になるとき, 線形写像 $f$ の核(カーネル)を求めよ。また, このとき, $f$ の像の正規直交基底を求めよ。

(iii) 行列 $A$ が対角化できなくなる $a$ の値を求めよ。

(iv) $a=3$ のとき, 行列 $A$ は行列 $B$ と相似であることを示せ。

$$
B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
$$

#### 問2

以下の設問に答えよ。ただし, $\det$ は行列式, $T$ は転置, 行列の右上の $-1$ は逆行列を意味するものとし, 問題文中の行列およびベクトルの成分, スカラーはすべて実数とする。また, $n, m, l$ は正の整数とする。さらに, $m \times m$ 行列 $S$ , $m \times l$ 行列 $T$ , $l \times m$ 行列 $U$ , $l \times l$ 正則行列 $V$ について, $(m+l) \times (m+l)$ 行列 $\begin{bmatrix} S & T \\ U & V \end{bmatrix}$ と $S-TV^{-1}U$ が正則であれば,

$$
\begin{bmatrix} S & T \\ U & V \end{bmatrix}^{-1} =
\begin{bmatrix}
(S-TV^{-1}U)^{-1} & -(S-TV^{-1}U)^{-1}TV^{-1} \\
-V^{-1}U(S-TV^{-1}U)^{-1} & V^{-1} + V^{-1}U(S-TV^{-1}U)^{-1}TV^{-1}
\end{bmatrix}
$$

となる。

(i) 正則な $n \times n$ 行列 $A$ , $n$ 次元列ベクトル $b, c$ , スカラー $d$ について, 以下が成り立つことを示せ。

$$
\det \begin{bmatrix} A & b \\ c^T & d \end{bmatrix} = (\det A) \times (d - c^T A^{-1} b)
$$

(ii) $n \geq 2$ とする。 $A$ を $n \times n$ 正定値対称行列とする。このとき, $A^{-1}$ も $n \times n$ 正定値対称行列となり, スカラー $\alpha > 0$ , $(n-1)$ 次元列ベクトル $\beta$ , $(n-1) \times (n-1)$ 行列 $\Delta$ を用いて,

$$
A^{-1} = \begin{bmatrix} \alpha & \beta^T \\ \beta & \Delta \end{bmatrix}
$$

と表すことができる。 $\tilde{A}$ を行列 $A$ から最初の行と列を除いた $(n-1) \times (n-1)$ 小行列とするとき,

$$
\tilde{A}^{-1} = \Delta - \frac{\beta\beta^T}{\alpha}
$$

となることを示せ。

(iii) 設問 (ii) の条件に加えて, $x = [x_1, x_2, \dots, x_n]^T$ , また, $x$ の $(n-1)$ 次元部分ベクトルを $\tilde{x} = [x_2, x_3, \dots, x_n]^T$ とする。このとき, 二次形式 $x^T A^{-1} x$ は $x_1$ について二次式となるが, その二次式の $x_1$ に関する最小値は $\tilde{x}^T \tilde{A}^{-1} \tilde{x}$ となることを示せ。

(iv) 正方行列 $A_n$ を以下のように定義する。

$$
A_1 = [a_0], \quad A_2 = \begin{bmatrix} a_0 & a_1 \\ a_1 & a_0 \end{bmatrix}, \quad \dots, \quad A_{n+1} = \begin{bmatrix} a_0 & a_1 & a_2 & \cdots & a_n \\ a_1 & a_0 & a_1 & \cdots & a_{n-1} \\ a_2 & a_1 & a_0 & \cdots & a_{n-2} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a_n & a_{n-1} & a_{n-2} & \cdots & a_0 \end{bmatrix}
$$

いま, すべての $n$ について $A_n$ を正定値対称行列とするとき, $n \geq 2$ について,

$$
\det A_{n+1} \leq \frac{(\det A_n)^2}{\det A_{n-1}}
$$

となることを示せ。

### 题目描述

#### 問1

设从 $\mathbb{R}^3$ 到 $\mathbb{R}^3$ 的线性映射 $f$ 在标准基下的表示矩阵为

$$
A=
\begin{pmatrix}
1&2&-1\\
0&1&0\\
1&0&a
\end{pmatrix},
$$

其中 $a$ 为实数。回答：

1. 求使 $\operatorname{rank}A$ 最小的 $a$，并求此时的最小秩。
2. 在 $A$ 的秩最小时，求线性映射 $f$ 的核，并求
   $\operatorname{im}f$ 的一组标准正交基。
3. 求所有使 $A$ 在实数域上不可对角化的 $a$。
4. 当 $a=3$ 时，证明 $A$ 与矩阵

$$
B=
\begin{pmatrix}
1&0&0\\
0&2&1\\
0&0&2
\end{pmatrix}
$$

相似。

#### 問2

以下 $\det$ 表示行列式，记号 $A^{\mathrm T}$ 表示矩阵 $A$ 的转置，
$A^{-1}$ 表示其逆矩阵；题中所有矩阵、向量和标量的分量均为实数，
$n,m,l$ 均为正整数。

可以使用如下分块逆矩阵公式：设
$S$ 为 $m\times m$ 矩阵，$T$ 为 $m\times l$ 矩阵，
$U$ 为 $l\times m$ 矩阵，$V$ 为可逆的 $l\times l$ 矩阵。若

$$
\begin{bmatrix}
S&T\\
U&V
\end{bmatrix}
\quad\text{和}\quad
S-TV^{-1}U
$$

均可逆，则

$$
\begin{bmatrix}
S&T\\
U&V
\end{bmatrix}^{-1}
=
\begin{bmatrix}
(S-TV^{-1}U)^{-1}
&
-(S-TV^{-1}U)^{-1}TV^{-1}
\\[1mm]
-V^{-1}U(S-TV^{-1}U)^{-1}
&
V^{-1}
+V^{-1}U(S-TV^{-1}U)^{-1}TV^{-1}
\end{bmatrix}.
$$

回答下列问题。

1. 设 $A$ 是可逆的 $n\times n$ 矩阵，
   $\boldsymbol{b},\boldsymbol{c}$ 是 $n$ 维列向量，$d$ 是标量。证明

$$
\det
\begin{bmatrix}
A&\boldsymbol{b}\\
\boldsymbol{c}^{\mathrm T}&d
\end{bmatrix}
=
(\det A)
\left(
d-\boldsymbol{c}^{\mathrm T}A^{-1}\boldsymbol{b}
\right).
$$

2. 设 $n\geq2$，$A$ 是 $n\times n$ 正定实对称矩阵。于是
   $A^{-1}$ 也是正定实对称矩阵，并可写为

$$
A^{-1}
=
\begin{bmatrix}
\alpha&\boldsymbol{\beta}^{\mathrm T}\\
\boldsymbol{\beta}&\Delta
\end{bmatrix},
$$

其中 $\alpha>0$ 是标量，
$\boldsymbol{\beta}$ 是 $(n-1)$ 维列向量，
$\Delta$ 是 $(n-1)\times(n-1)$ 矩阵。令
$\widetilde{A}$ 为从 $A$ 删除第一行和第一列所得的
$(n-1)\times(n-1)$ 主子矩阵。证明

$$
\widetilde{A}^{-1}
=
\Delta
-\frac{\boldsymbol{\beta}\boldsymbol{\beta}^{\mathrm T}}{\alpha}.
$$

3. 在上一小问的条件下，令

$$
\boldsymbol{x}
=
[x_1,x_2,\ldots,x_n]^{\mathrm T},
\qquad
\widetilde{\boldsymbol{x}}
=
[x_2,x_3,\ldots,x_n]^{\mathrm T}.
$$

把二次型
$\boldsymbol{x}^{\mathrm T}A^{-1}\boldsymbol{x}$
视为关于 $x_1$ 的二次函数，并保持
$\widetilde{\boldsymbol{x}}$ 固定。证明它关于 $x_1$ 的最小值为

$$
\widetilde{\boldsymbol{x}}^{\mathrm T}
\widetilde{A}^{-1}
\widetilde{\boldsymbol{x}}.
$$

4. 定义实对称 Toeplitz 方阵序列

$$
A_1=[a_0],
\qquad
A_2=
\begin{bmatrix}
a_0&a_1\\
a_1&a_0
\end{bmatrix},
$$

以及一般的

$$
A_{n+1}
=
\begin{bmatrix}
a_0&a_1&a_2&\cdots&a_n\\
a_1&a_0&a_1&\cdots&a_{n-1}\\
a_2&a_1&a_0&\cdots&a_{n-2}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
a_n&a_{n-1}&a_{n-2}&\cdots&a_0
\end{bmatrix}.
$$

假设对每个 $n$，$A_n$ 都是正定对称矩阵。证明对所有 $n\geq2$，

$$
\det A_{n+1}
\leq
\frac{(\det A_n)^2}{\det A_{n-1}}.
$$

## **Kai**

### 問1

(i) 解答
行列 $A$ の階数(ランク)は, $A$ の行列式 $\det(A)$ が 0 でないときは 3, 0 のときは 3 未満となります。
まず, $A$ の行列式を計算します。

$$
\det(A) = \begin{vmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & a \end{vmatrix} = 1(1 \cdot a - 0 \cdot 0) - 2(0 \cdot a - 0 \cdot 1) + (-1)(0 \cdot 0 - 1 \cdot 1) = a + 1
$$

$\det(A) = 0$ となるのは $a+1=0$ , すなわち $a=-1$ のときです。このとき, 階数が最小になる可能性があります。

- $a \neq -1$ のとき, $\det(A) \neq 0$ なので, $\mathrm{rank}(A) = 3$ です。
- $a = -1$ のとき, $\det(A) = 0$ なので, $\mathrm{rank}(A) < 3$ です。
このときの行列 $A$ は,

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & -1 \end{pmatrix}
$$

左上の $2 \times 2$ 小行列式は $\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1 \neq 0$ であるため, $\mathrm{rank}(A) \geq 2$ です。
したがって, $a=-1$ のとき, $\mathrm{rank}(A)=2$ となります。
これが最小の階数です。

答え: 階数が最小になる $a$ の値は $a=-1$ で, そのときの階数は 2 です。

(ii) 解答
$a=-1$ のとき, 行列 $A$ の階数は最小になります。

1. 線形写像 $f$ の核(カーネル) $\mathrm{Ker}(f)$

$\mathrm{Ker}(f)$ は, 方程式 $A\mathbf{x} = \mathbf{0}$ の解空間です。

$$
\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

これを連立方程式として解くと,

$$
\begin{cases} x + 2y - z = 0 \\ y = 0 \\ x - z = 0 \end{cases}
$$

第2式より $y=0$ 。これを第1式に代入すると $x-z=0$ となり, 第3式と同じです。
$x=z$ となります。 $z=t$ ( $t$ は任意の実数)とおくと, $x=t, y=0, z=t$ となります。
よって, 解ベクトルは $\mathbf{x} = t \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ と表せます。
したがって, $\mathrm{Ker}(f)$ は以下のように表せます。

$$
\mathrm{Ker}(f) = \left\{ c \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \mid c \in \mathbb{R} \right\}
$$

**2. 線形写像 $f$ の像 $\mathrm{Im}(f)$ の正規直交基底**

$\mathrm{Im}(f)$ は $A$ の列ベクトルで張られる空間(列空間)です。 $\mathrm{rank}(A)=2$ なので, 基底は2つの線形独立な列ベクトルで構成されます。 $A$ の第1列と第2列は線形独立なので, 基底として $\left\{ \mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \mathbf{u}_2 = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} \right\}$ を取ることができます。

この基底にグラム・シュミットの直交化法を適用して正規直交基底 $\left\{ \mathbf{w}_1, \mathbf{w}_2 \right\}$ を求めます。

- $\mathbf{w}_1$ の計算:

$$
\mathbf{w}_1 = \frac{\mathbf{u}_1}{\|\mathbf{u}_1\|} = \frac{1}{\sqrt{1^2+0^2+1^2}} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
$$

- $\mathbf{w}_2$ の計算:
まず, $\mathbf{u}_2$ から $\mathbf{w}_1$ 方向の成分を引きます。

$$
\mathbf{u}_2' = \mathbf{u}_2 - (\mathbf{u}_2 \cdot \mathbf{w}_1)\mathbf{w}_1 = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} - \left( \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \right) \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
$$

$$
\mathbf{u}_2' = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} - \frac{2}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} - \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}
$$

次に, $\mathbf{u}_2'$ を正規化します。

$$
\mathbf{w}_2 = \frac{\mathbf{u}_2'}{\|\mathbf{u}_2'\|} = \frac{1}{\sqrt{1^2+1^2+(-1)^2}} \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}
$$

答え: $f$ の像の正規直交基底は $\left\{ \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} \right\}$ です。

(iii) 解答
ここでは $f:\mathbb R^3\to\mathbb R^3$ の対角化なので，実数体上で考える。
特性多項式は

$$
\det(A - \lambda I) = (1-\lambda) [\lambda^2 - (a+1)\lambda + a+1]
$$

である。二次因子に $\lambda=1$ を代入した値は $1$ なので，
$1$ が二次因子の根と重なることはない。二次因子の判別式は

$$
D = (a+1)^2 - 4(a+1) = (a+1)(a-3)
$$

である。

- $a<-1$ または $a>3$ なら $D>0$ であり，相異なる3個の実固有値を
  もつので実対角化できる。
- $-1<a<3$ なら $D<0$ であり，非実共役な固有値をもつので
  実数体上では対角化できない。
- $a=-1$ では固有値 $0$ の代数的多重度は2であるが，(i) より
  $\dim\ker A=1$ なので対角化できない。
- $a=3$ では固有値 $2$ の代数的多重度は2である。一方，

$$
\operatorname{rank}(A-2I)=2,\qquad \dim\ker(A-2I)=1,
$$

  なので対角化できない。

したがって，実数体上で対角化できないための必要十分条件は

$$
\boxed{-1\leq a\leq3}.
$$

なお，複素数体上の対角化を意味する場合には， $-1<a<3$ の3固有値は
相異なるため対角化でき，対角化できない値は端点 $a=-1,3$ だけである。

(iv) 解答
$a=3$ のとき, 行列 $A$ が行列 $B$ と相似であることを示すには, $A$ のジョルダン標準形が $B$ と一致することを示せばよいです。

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & 3 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
$$

(iii)の計算より, $a=3$ のときの $A$ の固有値とその多重度は以下の通りです。
- 固有値 $\lambda_1 = 1$ : 代数的多重度 1, 幾何学的多重度 1
- 固有値 $\lambda_2 = 2$ : 代数的多重度 2, 幾何学的多重度 1

ジョルダン標準形の構造は, これらの多重度によって決まります。
- $\lambda_1 = 1$ について: 幾何学的多重度が1なので, $1 \times 1$ のジョルダンブロックが1つです: $\begin{pmatrix} 1 \end{pmatrix}$ 。
- $\lambda_2 = 2$ について: 幾何学的多重度が1なので, ジョルダンブロックは1つです。代数的多重度が2なので, ブロックのサイズは $2 \times 2$ になります: $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ 。

したがって, $A$ のジョルダン標準形 $J_A$ はこれらのブロックを対角に並べたものになります。

$$
J_A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
$$

これは行列 $B$ と一致します。行列はそのジョルダン標準形と相似であるため, $A$ は $J_A$ と相似であり, $J_A = B$ なので, $A$ は $B$ と相似です。
(証明終)

### 問2

解答

(i) の証明

与えられた行列を $M = \begin{bmatrix} A & b \\ c^T & d \end{bmatrix}$ とする。 $A$ は正則（可逆）であるため、 $A^{-1}$ が存在する。
行列 $M$ を次のようにブロック行列の積で分解できる。

$$
\begin{bmatrix} A & b \\ c^T & d \end{bmatrix} = \begin{bmatrix} A & 0 \\ c^T & 1 \end{bmatrix} \begin{bmatrix} I & A^{-1}b \\ 0 & d - c^T A^{-1} b \end{bmatrix}
$$

この分解が正しいことを確認する：

$$
\begin{bmatrix} A & 0 \\ c^T & 1 \end{bmatrix} \begin{bmatrix} I & A^{-1}b \\ 0 & d - c^T A^{-1} b \end{bmatrix} = \begin{bmatrix} A \cdot I + 0 \cdot 0 & A(A^{-1}b) + 0 \cdot (d - c^T A^{-1} b) \\ c^T \cdot I + 1 \cdot 0 & c^T(A^{-1}b) + 1 \cdot (d - c^T A^{-1} b) \end{bmatrix} = \begin{bmatrix} A & b \\ c^T & d \end{bmatrix}
$$

行列の積の行列式は、各行列の行列式の積に等しいので、

$$
\det(M) = \det \begin{pmatrix} \begin{bmatrix} A & 0 \\ c^T & 1 \end{bmatrix} \end{pmatrix} \times \det \begin{pmatrix} \begin{bmatrix} I & A^{-1}b \\ 0 & d - c^T A^{-1} b \end{bmatrix} \end{pmatrix}
$$

ブロック三角行列の行列式は、対角ブロックの行列式の積となる。

$$
\det \begin{bmatrix} A & 0 \\ c^T & 1 \end{bmatrix} = (\det A) \times (\det 1) = \det A
$$

$$
\det \begin{bmatrix} I & A^{-1}b \\ 0 & d - c^T A^{-1} b \end{bmatrix} = (\det I) \times \det(d - c^T A^{-1} b) = 1 \times (d - c^T A^{-1} b)
$$

ここで、 $d - c^T A^{-1} b$ はスカラー（ $1 \times 1$ 行列）なので、その行列式は値自身である。
したがって、

$$
\det \begin{bmatrix} A & b \\ c^T & d \end{bmatrix} = (\det A) \times (d - c^T A^{-1} b)
$$

が示された。

(ii) の証明

$A$ を $n \times n$ 正定値対称行列とする。 $A$ を次のように分割する。

$$
A = \begin{bmatrix} a & b^T \\ b & \tilde{A} \end{bmatrix}
$$

ここで、 $a$ はスカラー、 $b$ は $(n-1)$ 次元の列ベクトル、 $\tilde{A}$ は $(n-1) \times (n-1)$ の小行列である。
$A$ が正定値であるため、その主小行列 $\tilde{A}$ も正定値であり、したがって正則である。

問題の冒頭で与えられたブロック行列の逆行列の公式を用いる。ここで $S=a$ , $T=b^T$ , $U=b$ , $V=\tilde{A}$ と対応させる。

$$
A^{-1} = \begin{bmatrix} a & b^T \\ b & \tilde{A} \end{bmatrix}^{-1} = \begin{bmatrix} (a-b^T\tilde{A}^{-1}b)^{-1} & -(a-b^T\tilde{A}^{-1}b)^{-1}b^T\tilde{A}^{-1} \\ -\tilde{A}^{-1}b(a-b^T\tilde{A}^{-1}b)^{-1} & \tilde{A}^{-1} + \tilde{A}^{-1}b(a-b^T\tilde{A}^{-1}b)^{-1}b^T\tilde{A}^{-1} \end{bmatrix}
$$

与えられた $A^{-1}$ の分割形式と比較する。

$$
A^{-1} = \begin{bmatrix} \alpha & \beta^T \\ \beta & \Delta \end{bmatrix}
$$

各ブロックを比較すると、
1. $\alpha = (a-b^T\tilde{A}^{-1}b)^{-1}$
2. $\beta = -\tilde{A}^{-1}b(a-b^T\tilde{A}^{-1}b)^{-1} = -\alpha \tilde{A}^{-1}b$
3. $\Delta = \tilde{A}^{-1} + \tilde{A}^{-1}b(a-b^T\tilde{A}^{-1}b)^{-1}b^T\tilde{A}^{-1} = \tilde{A}^{-1} + \alpha (\tilde{A}^{-1}b)(b^T\tilde{A}^{-1})$

式(2)より、 $\tilde{A}^{-1}b = -\frac{1}{\alpha}\beta$ となる。これを式(3)に代入する。

$$
\Delta = \tilde{A}^{-1} + \alpha \left(-\frac{1}{\alpha}\beta\right) \left(-\frac{1}{\alpha}\beta\right)^T = \tilde{A}^{-1} + \alpha \left(-\frac{1}{\alpha}\beta\right) \left(-\frac{1}{\alpha}\beta^T\right)
$$

$$
\Delta = \tilde{A}^{-1} + \alpha \frac{1}{\alpha^2} \beta\beta^T = \tilde{A}^{-1} + \frac{\beta\beta^T}{\alpha}
$$

この式を $\tilde{A}^{-1}$ について解くと、

$$
\tilde{A}^{-1} = \Delta - \frac{\beta\beta^T}{\alpha}
$$

が示された。

(iii) の証明

二次形式 $Q(x) = x^T A^{-1} x$ を $x_1$ と $\tilde{x}$ を用いて展開する。

$$
x = \begin{bmatrix} x_1 \\ \tilde{x} \end{bmatrix}, \quad A^{-1} = \begin{bmatrix} \alpha & \beta^T \\ \beta & \Delta \end{bmatrix}
$$

$$
Q(x) = \begin{bmatrix} x_1 & \tilde{x}^T \end{bmatrix} \begin{bmatrix} \alpha & \beta^T \\ \beta & \Delta \end{bmatrix} \begin{bmatrix} x_1 \\ \tilde{x} \end{bmatrix}
$$

$$
= \begin{bmatrix} x_1 & \tilde{x}^T \end{bmatrix} \begin{bmatrix} \alpha x_1 + \beta^T \tilde{x} \\ \beta x_1 + \Delta \tilde{x} \end{bmatrix}
$$

$$
= x_1(\alpha x_1 + \beta^T \tilde{x}) + \tilde{x}^T(\beta x_1 + \Delta \tilde{x})
$$

$$
= \alpha x_1^2 + x_1\beta^T \tilde{x} + \tilde{x}^T\beta x_1 + \tilde{x}^T\Delta\tilde{x}
$$

$x_1\beta^T \tilde{x}$ はスカラーなので、その転置 $\tilde{x}^T\beta x_1$ と等しい。したがって、

$$
Q(x) = \alpha x_1^2 + 2(\beta^T \tilde{x})x_1 + \tilde{x}^T\Delta\tilde{x}
$$

この式は、 $x_1$ に関する二次関数である。 $A$ が正定値なので、 $A^{-1}$ も正定値であり、その主小行列である $\alpha$ は $\alpha > 0$ である。したがって、この二次関数は下に凸の放物線であり、最小値を持つ。

最小値は、この二次関数を $x_1$ で微分して 0 とおくことで見つけられる。

$$
\frac{\partial Q(x)}{\partial x_1} = 2\alpha x_1 + 2(\beta^T \tilde{x}) = 0
$$

これを解くと、最小値を与える $x_1$ の値 $x_1^*$ は、

$$
x_1^* = -\frac{\beta^T \tilde{x}}{\alpha}
$$

となる。
この $x_1^*$ を $Q(x)$ の式に代入して最小値を計算する。

$$
\min_{x_1} Q(x) = \alpha \left(-\frac{\beta^T \tilde{x}}{\alpha}\right)^2 + 2(\beta^T \tilde{x})\left(-\frac{\beta^T \tilde{x}}{\alpha}\right) + \tilde{x}^T\Delta\tilde{x}
$$

$$
= \alpha \frac{(\beta^T \tilde{x})^2}{\alpha^2} - 2\frac{(\beta^T \tilde{x})^2}{\alpha} + \tilde{x}^T\Delta\tilde{x}
$$

$$
= \frac{(\beta^T \tilde{x})^2}{\alpha} - 2\frac{(\beta^T \tilde{x})^2}{\alpha} + \tilde{x}^T\Delta\tilde{x}
$$

$$
= -\frac{(\beta^T \tilde{x})^2}{\alpha} + \tilde{x}^T\Delta\tilde{x}
$$

ここで、 $(\beta^T \tilde{x})^2 = (\tilde{x}^T \beta)(\beta^T \tilde{x}) = \tilde{x}^T (\beta\beta^T) \tilde{x}$ と書けるので、

$$
\min_{x_1} Q(x) = \tilde{x}^T\Delta\tilde{x} - \frac{\tilde{x}^T\beta\beta^T\tilde{x}}{\alpha} = \tilde{x}^T \left( \Delta - \frac{\beta\beta^T}{\alpha} \right) \tilde{x}
$$

設問 (ii) の結果から、 $\tilde{A}^{-1} = \Delta - \frac{\beta\beta^T}{\alpha}$ である。
したがって、二次形式の最小値は、

$$
\min_{x_1} x^T A^{-1} x = \tilde{x}^T \tilde{A}^{-1} \tilde{x}
$$

となり、題意は示された。

#### (iv)

设 $D_n = \det A_n$ 。根据题意， $A_n$ 对所有 $n$ 都是正定矩阵，因此其所有主子式都为正。特别地，行列式 $D_n = \det A_n > 0$ 对所有 $n$ 成立。

需要证明的不等式为：

$$
D_{n+1} \leq \frac{D_n^2}{D_{n-1}}
$$

因为 $D_{n-1} > 0$ ，该不等式等价于：

$$
D_{n+1} D_{n-1} \leq D_n^2
$$

我们将使用 Desnanot-Jacobi 恒等式（也称为 Sylvester 行列式恒等式或 Dodgson 凝聚法）。对于任意一个 $m \times m$ 矩阵 $M$ ，该恒等式为：

$$
\det(M) \det(M_{1,m}^{1,m}) = \det(M_1^1) \det(M_m^m) - \det(M_1^m) \det(M_m^1)
$$

其中， $M_i^j$ 表示从 $M$ 中移除第 $i$ 行和第 $j$ 列得到的子矩阵， $M_{i,j}^{k,l}$ 表示移除第 $i,j$ 行和第 $k,l$ 列得到的子矩阵。

我们将此恒等式应用于 $(n+1) \times (n+1)$ 矩阵 $M = A_{n+1}$ 。此时 $m=n+1$ 。

$$
\det(A_{n+1}) \det((A_{n+1})_{1,n+1}^{1,n+1}) = \det((A_{n+1})_1^1) \det((A_{n+1})_{n+1}^{n+1}) - \det((A_{n+1})_1^{n+1}) \det((A_{n+1})_{n+1}^1)
$$

接下来，我们根据 $A_{n+1}$ 的结构来确定上式中各项的行列式：
1.  $A_{n+1}$ 本身： $\det(A_{n+1}) = D_{n+1}$ 。

2.  $(A_{n+1})_1^1$ 是移除第一行和第一列得到的子矩阵。根据 $A_{n+1}$ 的定义，这是一个 $n \times n$ 的主子矩阵，其结构与 $A_n$ 完全相同。

$$
(A_{n+1})_1^1 = A_n \implies \det((A_{n+1})_1^1) = D_n
$$

3.  $(A_{n+1})_{n+1}^{n+1}$ 是移除最后一行和最后一列得到的子矩阵。同样，这也是 $A_n$ 。

$$
(A_{n+1})_{n+1}^{n+1} = A_n \implies \det((A_{n+1})_{n+1}^{n+1}) = D_n
$$

4.  $(A_{n+1})_{1,n+1}^{1,n+1}$ 是移除第一行、最后一行、第一列和最后一列得到的子矩阵。这是一个 $(n-1) \times (n-1)$ 的中心子矩阵，其结构与 $A_{n-1}$ 相同（此步骤要求 $n \geq 2$ ）。

$$
(A_{n+1})_{1,n+1}^{1,n+1} = A_{n-1} \implies \det((A_{n+1})_{1,n+1}^{1,n+1}) = D_{n-1}
$$

5.  $(A_{n+1})_{n+1}^1$ 和 $(A_{n+1})_1^{n+1}$ 是非主子矩阵。由于 $A_{n+1}$ 是一个对称矩阵，其元素满足 $(A_{n+1})_{ij} = (A_{n+1})_{ji}$ 。我们来比较这两个子矩阵。
    令 $B = (A_{n+1})_1^{n+1}$ 和 $C = (A_{n+1})_{n+1}^1$ 。
    $C$ 的 $(i,j)$ 元素为 $(A_{n+1})_{i, j+1}$ 。
    $B$ 的 $(j,i)$ 元素为 $(A_{n+1})_{j+1, i}$ 。
    因为 $A_{n+1}$ 是对称的， $(A_{n+1})_{i, j+1} = (A_{n+1})_{j+1, i}$ 。所以 $C_{ij} = B_{ji}$ 。
    这意味着 $C = B^T$ 。因此，它们的行列式相等：

$$
\det((A_{n+1})_{n+1}^1) = \det(((A_{n+1})_1^{n+1})^T) = \det((A_{n+1})_1^{n+1})
$$

将以上结果代入 Desnanot-Jacobi 恒等式：

$$
D_{n+1} \cdot D_{n-1} = D_n \cdot D_n - \det((A_{n+1})_1^{n+1}) \cdot \det((A_{n+1})_{n+1}^1)
$$

$$
D_{n+1} D_{n-1} = D_n^2 - (\det((A_{n+1})_1^{n+1}))^2
$$

令 $C_n = \det((A_{n+1})_1^{n+1})$ 。由于 $A_{n+1}$ 的元素是实数， $C_n$ 是一个实数，所以 $C_n^2 \geq 0$ 。
因此，我们得到：

$$
D_{n+1} D_{n-1} = D_n^2 - C_n^2 \leq D_n^2
$$

我们已经证明了 $D_{n+1} D_{n-1} \leq D_n^2$ 。因为 $A_{n-1}$ 是正定矩阵，所以 $D_{n-1} = \det A_{n-1} > 0$ 。两边同时除以 $D_{n-1}$ ，不等号方向不变：

$$
D_{n+1} \leq \frac{D_n^2}{D_{n-1}}
$$

证明完毕。
