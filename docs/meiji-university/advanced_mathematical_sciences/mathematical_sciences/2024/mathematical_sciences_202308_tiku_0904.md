---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\mathbb{R}^3$ の3つのベクトル $\mathbf{a}_0, \mathbf{a}_1, \mathbf{a}_2$ を

$$
\mathbf{a}_0 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \quad \mathbf{a}_1 = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}, \quad \mathbf{a}_2 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}
$$

で定義し、 $\mathbb{R}^3$ の2直線

$$
l_1: \{\mathbf{a}_0 + \mathbf{a}_1 t \mid t \in \mathbb{R}\}, \quad l_2: \{\mathbf{a}_2 t \mid t \in \mathbb{R}\}
$$

を考える。次の問に答えよ。

(1) 2直線 $l_1, l_2$ が交わらないことを示せ。

(2) 外積 $\mathbf{a}_3 = \mathbf{a}_1 \times \mathbf{a}_2$ を求めよ。また、 $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$ を並べてできる3行3列の行列の固有値を求めよ。

(3) 2直線 $l_1, l_2$ に直交する直線を求めよ。

### 题目描述

定义 $\mathbb{R}^3$ 中的三个向量

$$
\mathbf{a}_0=\begin{pmatrix}1\\1\\1\end{pmatrix},
\qquad
\mathbf{a}_1=\begin{pmatrix}1\\-1\\1\end{pmatrix},
\qquad
\mathbf{a}_2=\begin{pmatrix}1\\1\\2\end{pmatrix},
$$

并考虑 $\mathbb{R}^3$ 中的两条直线

$$
l_1=\left\{\mathbf{a}_0+\mathbf{a}_1t\,\middle|\,t\in\mathbb{R}\right\},
\qquad
l_2=\left\{\mathbf{a}_2t\,\middle|\,t\in\mathbb{R}\right\}.
$$

回答下列问题。

(1) 证明两条直线 $l_1,l_2$ 不相交。

(2) 求叉积

$$
\mathbf{a}_3=\mathbf{a}_1\times\mathbf{a}_2.
$$

再求以 $\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3$ 为列排成的三阶方阵的特征值。

(3) 求同时与两条直线 $l_1,l_2$ 正交的直线。

## **Kai**

(1) $l_1$ 上の点 $\mathbf{a}_0 + \mathbf{a}_1 t$ と $l_2$ 上の点 $\mathbf{a}_2 s$ が一致すると仮定すると、

$$
\mathbf{a}_0 + \mathbf{a}_1 t = \mathbf{a}_2 s
$$

$$
\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} t = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} s
$$

これは連立一次方程式

$$
\begin{cases} 1 + t = s \\ 1 - t = s \\ 1 + t = 2s \end{cases}
$$

を意味する。最初の2式から $1 + t = 1 - t$ なので $t = 0$ 。すると、 $s = 1$ 。しかし、第3式に代入すると $1 + 0 = 2(1)$ となり、 $1 = 2$ となり矛盾する。したがって、 $l_1$ と $l_2$ は交わらない。

(2) 外積 $\mathbf{a}_3 = \mathbf{a}_1 \times \mathbf{a}_2$ は

$$
\mathbf{a}_3 = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} \times \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} = \begin{pmatrix} (-1)(2) - (1)(1) \\ (1)(1) - (1)(2) \\ (1)(1) - (-1)(1) \end{pmatrix} = \begin{pmatrix} -3 \\ -1 \\ 2 \end{pmatrix}
$$

行列 $A = [\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3]$ は

$$
A = \begin{pmatrix} 1 & 1 & -3 \\ -1 & 1 & -1 \\ 1 & 2 & 2 \end{pmatrix}
$$

固有値を求めるには、 $\det(A - \lambda I) = 0$ を解く必要がある。

$$
\det(A - \lambda I) = \begin{vmatrix} 1 - \lambda & 1 & -3 \\ -1 & 1 - \lambda & -1 \\ 1 & 2 & 2 - \lambda \end{vmatrix} = (1 - \lambda)((1 - \lambda)(2 - \lambda) + 2) - (-(2 - \lambda) + 1) - 3(-2 - (1 - \lambda))
$$

$$
= (1 - \lambda)(\lambda^2 - 3\lambda + 4) - (\lambda - 1) - 3(\lambda - 3)
$$

$$
= \lambda^2 - 3\lambda + 4 - \lambda^3 + 3\lambda^2 - 4\lambda - \lambda + 1 - 3\lambda + 9
$$

$$
= -\lambda^3 + 4\lambda^2 - 11\lambda + 14 = -(\lambda - 2)(\lambda^2 - 2\lambda + 7) = 0
$$

したがって、固有値は $\lambda = 2$ と $\lambda = \frac{2 \pm \sqrt{4 - 28}}{2} = 1 \pm i\sqrt{6}$ である。

(3) 両直線の公垂線の方向ベクトルは

$$
\mathbf a_3=\mathbf a_1\times\mathbf a_2
=\begin{pmatrix}-3\\-1\\2\end{pmatrix}
$$

である。 $l_1$ 上の点
$p=\mathbf a_0+t\mathbf a_1$ と $l_2$ 上の点 $q=s\mathbf a_2$ に対し，
$q-p$ が両方向ベクトルに直交する条件は

$$
(q-p)\cdot\mathbf a_1=2s-1-3t=0,\qquad
(q-p)\cdot\mathbf a_2=6s-4-2t=0.
$$

これを解くと $t=\frac17,\ s=\frac57$ であり，

$$
p=\frac17\begin{pmatrix}8\\6\\8\end{pmatrix},
\qquad
q=\frac17\begin{pmatrix}5\\5\\10\end{pmatrix},
\qquad
q-p=\frac17\mathbf a_3.
$$

したがって求める公垂線は

$$
\boxed{
\left\{
\frac17\begin{pmatrix}8\\6\\8\end{pmatrix}
+u\begin{pmatrix}-3\\-1\\2\end{pmatrix}
\ \middle|\ u\in\mathbb R
\right\}.
}
$$
