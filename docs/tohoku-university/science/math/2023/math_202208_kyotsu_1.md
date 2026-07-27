---
sidebar_label: "2022年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Skew-Symmetric-Matrix
  - Mathematics.Linear-Algebra.Skew-Symmetric-Subspace-under-Congruence
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 東北大学 理学研究科 数学専攻 2022年8月実施 共通問題 \[1\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
$V = M_3(\mathbb{R})$ を３次実正方行列全体のなす実ベクトル空間とし、$V$ の部分空間 $W$ を 

$$
W = \{A \in V \mid A^T = -A\}
$$

と定める。ただし、$A^T$ は行列 $A$ の転置行列を表す。以下の問いに答えよ。

(1) $W$ の基底を含むような $V$ の基底を $1$ 組求めよ。

(2) $R \in M_3(\mathbb{R})$ を固定して、線形写像  $f: V \rightarrow V$ を $f(x) = R^TXR$ と定める。このとき、$f(W) \subset W$ であることを示せ。

(3) $R = \begin{pmatrix} -1 & 3 & 2 \\ 2 & 0 & -1 \\ -1 & 1 & 2 \end{pmatrix}$ とする。この $R$ に対して (2) で定めた写像 $f$ の $W$ への制限を $g$ とする。このとき、(1)で求めた $W$ の基底に関する $g$ の表現行列 $S$ を求めよ。

(4) (3)で求めた行列 $S$ の固有値を全て求めよ。

### 题目描述

令 $V=M_3(\mathbb R)$ 为全体三阶实方阵构成的实向量空间，并定义子空间
$$
W=\{A\in V\mid A^T=-A\},
$$
即三阶实反对称矩阵空间。

1. 求一组 $V$ 的基，使其中包含一组 $W$ 的基。
2. 固定 $R\in M_3(\mathbb R)$，定义线性映射
   $$f:V\to V,\qquad f(X)=R^TXR.$$
   证明 $f(W)\subset W$。
3. 取
   $$R=\begin{pmatrix}-1&3&2\\2&0&-1\\-1&1&2\end{pmatrix},$$
   将 $f$ 在 $W$ 上的限制记为 $g$。求 $g$ 关于第 1 问所取 $W$ 基的表示矩阵 $S$。
4. 求矩阵 $S$ 的全部特征值。

#### 考点

- **矩阵空间与子空间基**：构造反对称矩阵空间的基并扩充为全空间基。
- **线性映射的不变子空间**：利用转置运算验证 $R^TXR$ 仍为反对称矩阵。
- **表示矩阵**：计算基向量的像并在指定基下展开。
- **特征值**：由特征多项式求线性变换在不变子空间上的谱。

## **Kai**
### (1)
$W$ は3次元であり、例えば、

$$
\begin{aligned}
A_1 = \begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\  0 &  0 & 0 \end{pmatrix}
, \ 
A_2 = \begin{pmatrix} 0 & 0 & 1 \\  0 & 0 & 0 \\ -1 &  0 & 0 \end{pmatrix}
, \ 
A_3 = \begin{pmatrix} 0 & 0 & 0 \\  0 & 0 & 1 \\  0 & -1 & 0 \end{pmatrix}
\end{aligned}
$$

は $W$ の基底である。
$V$ は9次元であり、例えば、上の $A_1, A_2, A_3$ と

$$
\begin{aligned}
\begin{pmatrix} 1 & 0 & 0 \\  0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
, \ 
\begin{pmatrix} 0 & 0 & 0 \\  0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}
, \ 
\begin{pmatrix} 0 & 0 & 0 \\  0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
, \ 
\begin{pmatrix} 0 & 1 & 0 \\  1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
, \ 
\begin{pmatrix} 0 & 0 & 1 \\  0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}
, \ 
\begin{pmatrix} 0 & 0 & 0 \\  0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
\end{aligned}
$$

を合わせて $V$ の基底となる。

### (2)
任意の $A \in W$ について $A^T = -A$ であるから、

$$
\begin{aligned}
f(A)^T
&= (R^T A R)^T
\\
&= R^T A^T R
\\
&= - R^T A R
\\
&= - f(A)
\\
\therefore \ \ 
f(A) &\in W
\end{aligned}
$$

がわかり、これは $f(W) \subset W$ を意味する。

### (3)

$$
\begin{aligned}
g(A_1) &= -6A_1 - 3A_2 - 3A_3
\\
g(A_2) &= 2A_1 + 4A_3
\\
g(A_3) &= 2A_1 + 3A_2 + A_3
\end{aligned}
$$

であるから、

$$
\begin{aligned}
S &= \begin{pmatrix} -6 & 2 & 2 \\ -3 & 0 & 3 \\ -3 & 4 & 1 \end{pmatrix}
\end{aligned}
$$

がわかる。

### (4)

$$
\begin{aligned}
-3, -1 \pm \sqrt{13}
\end{aligned}
$$
