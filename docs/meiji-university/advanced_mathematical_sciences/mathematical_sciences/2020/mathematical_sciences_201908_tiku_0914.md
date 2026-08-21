---
sidebar_label: "2019年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2019年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) 実数を成分とする行列 $A$ が ${}^t A = -A$ を満たすとする。ただし, ${}^t A$ は $A$ の転置行列を表す。

(a) $A$ の固有値は純虚数であることを示せ。

(b) $A$ の相異なる固有値 $\lambda, \mu$ に対し, $\lambda$ に対する固有ベクトル $x$ と $\mu$ に対する固有ベクトル $y$ は直交することを示せ。

(2) $A = \begin{pmatrix} 0 & 1 & 1 \\ -1 & 0 & 1 \\ -1 & -1 & 0 \end{pmatrix}$ とする。

(a) $A$ の固有値をすべて求めよ。

(b) $A$ の各固有値に対する固有ベクトルを1つずつ求めよ。

(c) $A$ を対角化するユニタリ行列 $U$ を1つ求めよ。

### 题目描述

(1) 设实矩阵 $A$ 满足

$$
{}^tA=-A,
$$

其中 ${}^tA$ 表示 $A$ 的转置矩阵。

(a) 证明 $A$ 的特征值均为纯虚数。

(b) 对于 $A$ 的两个不同特征值 $\lambda,\mu$，设 $x$ 是对应于 $\lambda$ 的特征向量，$y$ 是对应于 $\mu$ 的特征向量，证明 $x$ 与 $y$ 正交。

(2) 设

$$
A=\begin{pmatrix}
0&1&1\\
-1&0&1\\
-1&-1&0
\end{pmatrix}.
$$

(a) 求 $A$ 的全部特征值。

(b) 对 $A$ 的每个特征值，各求一个对应的特征向量。

(c) 求一个将 $A$ 对角化的酉矩阵 $U$。

## **Kai**

(1) の解答

(a) $A$ の固有値は純虚数であることの証明

$A$ の固有値を $\lambda$ 、対応する固有ベクトルを $x (x \neq \boldsymbol{0})$ とする。定義より、 $Ax = \lambda x$ が成り立つ。
この式の両辺のエルミート共役（随伴）をとると、 $(Ax)^H = (\lambda x)^H$ となる。
これは、 $x^H A^H = \bar{\lambda} x^H$ となる。

行列 $A$ は実数成分を持つため、 $A^H = ({}^t \bar{A}) = {}^t A$ である。
また、問題の条件より ${}^t A = -A$ なので、 $A^H = -A$ となる。
これを代入すると、 $-x^H A = \bar{\lambda} x^H$ を得る。

元の式 $Ax = \lambda x$ の両辺に左から $x^H$ をかけると、

$$
x^H A x = x^H (\lambda x) = \lambda (x^H x) \quad (1)
$$

随伴をとった式 $-x^H A = \bar{\lambda} x^H$ の両辺に右から $x$ をかけると、

$$
-x^H A x = (\bar{\lambda} x^H) x = \bar{\lambda} (x^H x) \quad (2)
$$

(1) と (2) より、 $\lambda (x^H x) = -\bar{\lambda} (x^H x)$ となる。
これを整理すると、 $(\lambda + \bar{\lambda})(x^H x) = 0$ となる。

$x$ は固有ベクトルなので $x \neq \boldsymbol{0}$ であり、 $x^H x = ||x||^2 > 0$ である。
したがって、 $\lambda + \bar{\lambda} = 0$ でなければならない。
$\lambda = a + bi$ ( $a, b$ は実数) とおくと、 $\bar{\lambda} = a - bi$ なので、 $\lambda + \bar{\lambda} = 2a = 0$ となり、 $a=0$ が導かれる。
よって、 $\lambda = bi$ となり、 $A$ の固有値は純虚数である（ $0$ を含む）。

(b) 固有ベクトルの直交性の証明

$A$ の相異なる固有値 $\lambda, \mu$ に対応する固有ベクトルをそれぞれ $x, y$ とする。
$Ax = \lambda x \quad (3)$
$Ay = \mu y \quad (4)$

(3) のエルミート共役をとると、 $x^H A^H = \bar{\lambda} x^H$ となる。(a) と同様に $A^H = -A$ であるから、 $-x^H A = \bar{\lambda} x^H$ となる。
この式の両辺に右から $y$ をかけると、

$$
-x^H A y = \bar{\lambda} (x^H y) \quad (5)
$$

(4) を (5) の左辺に代入すると、

$$
-x^H (\mu y) = \bar{\lambda} (x^H y)
$$

$$
-\mu (x^H y) = \bar{\lambda} (x^H y)
$$

$$
(\bar{\lambda} + \mu) (x^H y) = 0
$$

(a) の結果から、固有値は純虚数である。 $\lambda = ik_1, \mu = ik_2$ ( $k_1, k_2 \in \mathbb{R}$ ) とおける。
すると、 $\bar{\lambda} = -ik_1 = -\lambda$ となる。
したがって、 $(-\lambda + \mu)(x^H y) = 0$ となる。

問題の条件より $\lambda \neq \mu$ なので、 $-\lambda + \mu \neq 0$ である。
よって、 $x^H y = 0$ でなければならない。これは、ベクトル $x$ と $y$ が直交することを示している。

(2) の解答

$A = \begin{pmatrix} 0 & 1 & 1 \\ -1 & 0 & 1 \\ -1 & -1 & 0 \end{pmatrix}$ とする。

(a) 固有値の計算

固有方程式 $\det(A - \lambda I) = 0$ を解く。

$$
\det(A - \lambda I) = \begin{vmatrix} -\lambda & 1 & 1 \\ -1 & -\lambda & 1 \\ -1 & -1 & -\lambda \end{vmatrix} = -\lambda(\lambda^2+1) - 1(\lambda+1) + 1(1-\lambda) = -\lambda^3 - \lambda - \lambda - 1 + 1 - \lambda = -\lambda^3 - 3\lambda
$$

よって、固有方程式は $-\lambda(\lambda^2 + 3) = 0$ である。
これを解くと、固有値は $\lambda_1 = 0, \lambda_2 = i\sqrt{3}, \lambda_3 = -i\sqrt{3}$ となる。

(b) 固有ベクトルの計算

- ** $\lambda_1 = 0$ の場合**: $(A-0I)x_1 = \boldsymbol{0}$ を解く。

$$
\begin{pmatrix} 0 & 1 & 1 \\ -1 & 0 & 1 \\ -1 & -1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \implies \begin{cases} y+z=0 \\ -x+z=0 \\ -x-y=0 \end{cases}
$$

$z=t$ とおくと、 $x=t, y=-t$ となる。 $t=1$ とすると、固有ベクトル $x_1 = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$ を得る。

- ** $\lambda_2 = i\sqrt{3}$ の場合**: $(A-i\sqrt{3}I)x_2 = \boldsymbol{0}$ を解く。

$$
\begin{pmatrix} -i\sqrt{3} & 1 & 1 \\ -1 & -i\sqrt{3} & 1 \\ -1 & -1 & -i\sqrt{3} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

1行目から2行目を引くと $(1-i\sqrt{3})x + (1+i\sqrt{3})y = 0$ 。 $x=1+i\sqrt{3}$ とすると $y=-(1-i\sqrt{3})=-1+i\sqrt{3}$ 。これを3行目の式 $-x-y-i\sqrt{3}z=0$ に代入すると、 $-(1+i\sqrt{3}) - (-1+i\sqrt{3}) - i\sqrt{3}z = 0 \implies -2i\sqrt{3} - i\sqrt{3}z = 0 \implies z=-2$ 。よって固有ベクトル $x_2 = \begin{pmatrix} 1+i\sqrt{3} \\ -1+i\sqrt{3} \\ -2 \end{pmatrix}$ を得る。

- ** $\lambda_3 = -i\sqrt{3}$ の場合**: $\lambda_3 = \bar{\lambda}_2$ であり、行列 $A$ が実数行列なので、対応する固有ベクトルは $x_2$ の複素共役となる。
よって、固有ベクトル $x_3 = \bar{x}_2 = \begin{pmatrix} 1-i\sqrt{3} \\ -1-i\sqrt{3} \\ -2 \end{pmatrix}$ を得る。

(c) ユニタリ行列の計算

(b)で求めた固有ベクトルを正規化し、それらを列ベクトルとするユニタリ行列 $U$ を構成する。

- $x_1$ のノルム: $||x_1|| = \sqrt{1^2+(-1)^2+1^2} = \sqrt{3}$
- $x_2$ のノルム: $||x_2|| = \sqrt{|1+i\sqrt{3}|^2 + |-1+i\sqrt{3}|^2 + |-2|^2} = \sqrt{(1+3)+(1+3)+4} = \sqrt{12} = 2\sqrt{3}$
- $x_3$ のノルム: $||x_3|| = ||\bar{x}_2|| = ||x_2|| = 2\sqrt{3}$

正規化された固有ベクトル $u_1, u_2, u_3$ は、

$$
u_1 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}, \quad u_2 = \frac{1}{2\sqrt{3}} \begin{pmatrix} 1+i\sqrt{3} \\ -1+i\sqrt{3} \\ -2 \end{pmatrix}, \quad u_3 = \frac{1}{2\sqrt{3}} \begin{pmatrix} 1-i\sqrt{3} \\ -1-i\sqrt{3} \\ -2 \end{pmatrix}
$$

これらを列ベクトルとして並べ、ユニタリ行列 $U$ を得る。

$$
U = [u_1, u_2, u_3] = \begin{pmatrix} \frac{1}{\sqrt{3}} & \frac{1+i\sqrt{3}}{2\sqrt{3}} & \frac{1-i\sqrt{3}}{2\sqrt{3}} \\ -\frac{1}{\sqrt{3}} & \frac{-1+i\sqrt{3}}{2\sqrt{3}} & \frac{-1-i\sqrt{3}}{2\sqrt{3}} \\ \frac{1}{\sqrt{3}} & -\frac{2}{2\sqrt{3}} & -\frac{2}{2\sqrt{3}} \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{3}} & \frac{1+i\sqrt{3}}{2\sqrt{3}} & \frac{1-i\sqrt{3}}{2\sqrt{3}} \\ -\frac{1}{\sqrt{3}} & \frac{-1+i\sqrt{3}}{2\sqrt{3}} & \frac{-1-i\sqrt{3}}{2\sqrt{3}} \\ \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{3}} \end{pmatrix}
$$

この行列 $U$ によって $A$ は対角化され、 $U^H A U = \begin{pmatrix} 0 & 0 & 0 \\ 0 & i\sqrt{3} & 0 \\ 0 & 0 & -i\sqrt{3} \end{pmatrix}$ となる。
