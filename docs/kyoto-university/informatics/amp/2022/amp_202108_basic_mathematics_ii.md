---
sidebar_label: "2021年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)

Aを次に定める $n \times n$ 行列とする。

$$
A = \begin{pmatrix}
-a_1 & -a_2 & \cdots & -a_{n-2} & -a_{n-1} & -a_n \\
1 & 0 & \cdots & 0 & 0 & 0 \\
0 & 1 & \cdots & 0 & 0 & 0 \\
\vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
0 & 0 & \cdots & 1 & 0 & 0 \\
0 & 0 & \cdots & 0 & 1 & 0
\end{pmatrix}
$$

また、 $p(x)$ を次に定める $x$ の多項式とする。

$$
p(x) = \det(xI_n - A)
$$

ここで、 $I_n$ は $n$ 次単位行列を表す。 $k = 1, 2, \dots, n-1$ に対して、 $n \times n$ 行列 $A_k$ をブロック対角行列

$$
A_k = \begin{pmatrix}
I_{k-1} & 0_{k-1,2} & 0_{k-1,n-k-1} \\
0_{2,k-1} & C_k & 0_{2,n-k-1} \\
0_{n-k-1,k-1} & 0_{n-k-1,2} & I_{n-k-1}
\end{pmatrix}
$$

とする。ただし、 $0_{\ell, m}$ は $\ell \times m$ 零行列、 $C_k$ は $2 \times 2$ 行列

$$
C_k = \begin{pmatrix}
-a_k & 1 \\
1 & 0
\end{pmatrix}
$$

を表す。 $n \times n$ 行列 $A_n$ を対角行列 $A_n = \text{diag}(1, \dots, 1, -a_n)$ とする。以下の問いに答えよ。

(i) 多項式 $p(x)$ を、定数 $a$ と非負整数 $r$ による $ax^r$ の形の項の和によって表わせ。

(ii) $A = A_1 A_2 \dots A_{n-1} A_n$ が成り立つことを示せ。

(iii) $|j - k| > 1$ において、 $A_k A_j = A_j A_k$ が成り立つことを示せ。

(iv) $n$ を奇数とする。このとき、

$$
p(x) = \det(xI_n - A_1 A_3 \dots A_n A_2 A_4 \dots A_{n-1})
$$

が成り立つことを示せ。

(v) $n$ を奇数とする。 $p(x) = 0$ の根は、 $n \times n$ の対称三重対角行列で定まる方程式

$$
\det \begin{pmatrix}
a_1 + x & -1 & & & \\
-1 & 0 & x & & \\
& x & a_3 + a_2x & -1 & \\
& & -1 & 0 & \ddots \\
& & & \ddots & & x \\
& & & & x & a_n + a_{n-1}x
\end{pmatrix} = 0
$$

の根と一致することを示せ。

### 题目描述

定义 $n\times n$ 矩阵

$$
A=
\begin{pmatrix}
-a_1&-a_2&\cdots&-a_{n-2}&-a_{n-1}&-a_n\\
1&0&\cdots&0&0&0\\
0&1&\cdots&0&0&0\\
\vdots&\vdots&\ddots&\vdots&\vdots&\vdots\\
0&0&\cdots&1&0&0\\
0&0&\cdots&0&1&0
\end{pmatrix}
$$

及多项式

$$
p(x)=\det(xI_n-A),
$$

其中 $I_n$ 是 $n$ 阶单位矩阵。

对 $k=1,2,\ldots,n-1$，定义块对角矩阵

$$
A_k=
\begin{pmatrix}
I_{k-1}&0_{k-1,2}&0_{k-1,n-k-1}\\
0_{2,k-1}&C_k&0_{2,n-k-1}\\
0_{n-k-1,k-1}&0_{n-k-1,2}&I_{n-k-1}
\end{pmatrix},
$$

其中 $0_{\ell,m}$ 表示 $\ell\times m$ 零矩阵，且

$$
C_k=
\begin{pmatrix}
-a_k&1\\
1&0
\end{pmatrix}.
$$

再定义对角矩阵

$$
A_n=\operatorname{diag}(1,\ldots,1,-a_n).
$$

回答：

1. 把 $p(x)$ 明确写成若干形如 $ax^r$ 的项之和，其中 $a$ 为常数、$r$ 为非负整数。
2. 证明

$$
A=A_1A_2\cdots A_{n-1}A_n.
$$

3. 证明当 $|j-k|>1$ 时，

$$
A_kA_j=A_jA_k.
$$

4. 设 $n$ 为奇数。证明

$$
p(x)
=
\det\!\left(
xI_n-
A_1A_3\cdots A_n
A_2A_4\cdots A_{n-1}
\right).
$$

5. 设 $n$ 为奇数。证明 $p(x)=0$ 的根与下列对称三对角矩阵方程的根一致：

$$
\det
\begin{pmatrix}
a_1+x&-1&&&&\\
-1&0&x&&&\\
&x&a_3+a_2x&-1&&\\
&&-1&0&\ddots&\\
&&&\ddots&\ddots&x\\
&&&&x&a_n+a_{n-1}x
\end{pmatrix}
=0.
$$

## **Kai**

### (i) 特性多項式

第 $n$ 列について展開する漸化式、または帰納法により、

$$
\boxed{
p(x)=x^n+a_1x^{n-1}+a_2x^{n-2}+\cdots+a_{n-1}x+a_n
}
$$

を得る。実際、 $xI_n-A$ の最下行までの下三角部分には $-1$ が並ぶため、第 $n$ 列の第 $1$ 成分 $a_n$ の余因子は $1$ となり、残る項は $x$ 倍の同型の行列式になる。

### (ii) $A$ の積表示

$A_k$ は座標 $k,k+1$ のみに

$$
C_k=
\begin{pmatrix}
-a_k&1\\
1&0
\end{pmatrix}
$$

として作用し、それ以外の座標では恒等写像である。右端の $A_n$ から順に掛けると、各段階で新しい係数 $-a_k$ が先頭行側へ入り、同時に $1$ が一段下へ移る。標準基底への作用を列ごとに比較すれば、

$$
A_1A_2\cdots A_{n-1}A_n
=
\begin{pmatrix}
-a_1&-a_2&\cdots&-a_n\\
1&0&\cdots&0\\
&\ddots&\ddots&\vdots\\
0&&1&0
\end{pmatrix}
=A.
$$

### (iii) 離れた因子の可換性

$A_k$ が単位行列と異なる行・列の添字は $\{k,k+1\}$ だけである。 $|j-k|>1$ なら

$$
\{k,k+1\}\cap\{j,j+1\}=\varnothing
$$

だから、二つの行列は互いに異なる座標ブロックに作用する。したがって

$$
A_kA_j=A_jA_k.
$$

### (iv) 因子の並べ替え

$n=2m+1$ とし、$O=A_1A_3\cdots A_n$、$E=A_2A_4\cdots A_{n-1}$ とおく。
$E$ は互いに交わらない $2\times2$ ブロックの積で、$\det E=(-1)^m$ である。

$$
\det(xI_n-OE)=\det(xE^{-1}-O)\det E.
$$

$M(x)=xE^{-1}-O$ は (v) の対称三重対角行列になる。ここではその行列式を直接計算し、因子の並べ替えを正当化する。
$D_j$ を $M(x)$ の左上 $j\times j$ 部分の行列式とし、$D_0=1$ とする。
三重対角行列式の最終行による展開から、

$$
D_1=x+a_1,\qquad D_{2r}=-D_{2r-2}=(-1)^r,
$$

$$
D_{2r+1}=(a_{2r+1}+a_{2r}x)D_{2r}-x^2D_{2r-1}.
$$

したがって $Q_r=(-1)^rD_{2r+1}$ は

$$
Q_0=x+a_1,\qquad
Q_r=x^2Q_{r-1}+a_{2r}x+a_{2r+1}
$$

を満たす。帰納的に $Q_m=x^n+a_1x^{n-1}+\cdots+a_n=p(x)$ を得るので、

$$
\det(xI_n-OE)=(-1)^mD_n=p(x).
$$

これは行列積そのものの一致を主張せず、必要な特性多項式の一致を直接証明している。

### (v) 対称三重対角行列

$n=2m+1$ とし、

$$
O=A_1A_3\cdots A_n,
\qquad
E=A_2A_4\cdots A_{n-1}
$$

とおく。(iv) から $p(x)=\det(xI_n-OE)$ である。

偶数添字の各ブロックは

$$
C_{2j}^{-1}
=
\begin{pmatrix}
0&1\\
1&a_{2j}
\end{pmatrix},
\qquad
\det C_{2j}=-1
$$

を満たす。したがって $E$ は正則で、

$$
\det E=(-1)^m.
$$

ここで

$$
xI_n-OE=(xE^{-1}-O)E
$$

である。 $M(x)=xE^{-1}-O$ を書き下すと、ちょうど題示の対称三重対角行列

$$
M(x)=
\begin{pmatrix}
a_1+x&-1&&&&\\
-1&0&x&&&\\
&x&a_3+a_2x&-1&&\\
&&-1&0&\ddots&\\
&&&\ddots&\ddots&x\\
&&&&x&a_n+a_{n-1}x
\end{pmatrix}
$$

になる。ゆえに

$$
p(x)
=\det M(x)\det E
=(-1)^m\det M(x).
$$

両辺は非零定数倍だけ異なるので、

$$
p(x)=0
\quad\Longleftrightarrow\quad
\det M(x)=0.
$$

したがって二つの方程式の根は重複度も含めて一致する。
