---
sidebar_label: "2018年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$n \times n$ 行列 $A$ を用い, 線形写像 $f$ を

$$
f: \mathbb{R}^n \to \mathbb{R}^n; v \mapsto Av
$$

によって定める。このとき, $f$ の核を

$$
N = \{ v \in \mathbb{R}^n \mid f(v) = 0 \}
$$

で表し, ベクトル $v = (v_1, v_2, \dots, v_n)^T \in \mathbb{R}^n$ の非ゼロ要素数を

$$
\sigma(v) = \sum_{j=1}^n \delta(v_j)
$$

によって定める。ただし, 記号 $^T$ は転置を表し, $\delta(a) = \begin{cases} 0 & (a = 0) \\ 1 & (a \neq 0) \end{cases}$ とする。
$d$ を $n$ 以下の正の整数とする。このとき, 以下の問いに答えよ。

(i) $\mathbb{R}^n$ の部分空間 $V = \{ v \in \mathbb{R}^n \mid v = f(u), u \in \mathbb{R}^n \}$ の次元が

$$
\dim V = n - \dim N
$$

で与えられることを示せ。

(ii) 行列 $A$ の適当な $d-1$ 個の列ベクトルの組が線形従属ならば, $\sigma(x) < d$ を満たす非ゼロベクトル $x \in N$ が存在することを示せ。

(iii) 任意の非ゼロベクトル $x \in N$ に対して $\sigma(x) \ge d$ が成り立つための必要十分条件は, 行列 $A$ の任意の $d-1$ 個の列ベクトルの組が常に一次独立であることを示せ。

### 题目描述

用 $n\times n$ 矩阵 $A$ 定义线性映射

$$
f:\mathbb{R}^n\to\mathbb{R}^n,
\qquad
\boldsymbol{v}\longmapsto A\boldsymbol{v}.
$$

记其核为

$$
N
=
\{\boldsymbol{v}\in\mathbb{R}^n
\mid f(\boldsymbol{v})=\boldsymbol{0}\}.
$$

对

$$
\boldsymbol{v}
=(v_1,v_2,\ldots,v_n)^\top
\in\mathbb{R}^n,
$$

定义非零分量的个数

$$
\sigma(\boldsymbol{v})
=
\sum_{j=1}^n\delta(v_j),
\qquad
\delta(a)
=
\begin{cases}
0,&a=0,\\
1,&a\ne0,
\end{cases}
$$

其中 $\top$ 表示转置。设 $d$ 是不超过 $n$ 的正整数。回答：

1. 定义像空间

$$
V
=
\{\boldsymbol{v}\in\mathbb{R}^n
\mid
\boldsymbol{v}=f(\boldsymbol{u})
\text{ for some }\boldsymbol{u}\in\mathbb{R}^n\}.
$$

证明

$$
\dim V=n-\dim N.
$$

2. 证明：若能从 $A$ 的列向量中选出 $d-1$ 个线性相关的列，则存在
   $\boldsymbol{0}\ne\boldsymbol{x}\in N$ 满足
   $\sigma(\boldsymbol{x})<d$。
3. 证明以下两项互为充要条件：

   - 对每个 $\boldsymbol{0}\ne\boldsymbol{x}\in N$，都有
     $\sigma(\boldsymbol{x})\geq d$；
   - 任取 $A$ 的 $d-1$ 个列向量，它们都线性无关。

## **Kai**

### (i) 像と核の次元

線形写像 $f:\mathbb R^n\to\mathbb R^n$ に次元定理を適用すると、

$$
\dim\operatorname{Im}f+\dim\ker f=n.
$$

$V=\operatorname{Im}f$ 、 $N=\ker f$ だから、

$$
\dim V=n-\dim N
$$

である。

### (ii) 列の一次従属から核ベクトルを作る

$A$ の列を $\boldsymbol a_1,\ldots,\boldsymbol a_n$ とする。添字 $i_1,\ldots,i_{d-1}$ の列が一次従属なら、すべては $0$ ではない係数 $c_1,\ldots,c_{d-1}$ が存在して

$$
\sum_{k=1}^{d-1}c_k\boldsymbol a_{i_k}=0
$$

となる。 $x\in\mathbb R^n$ を

$$
x_{i_k}=c_k,\qquad
x_j=0\quad
(j\notin\{i_1,\ldots,i_{d-1}\})
$$

で定めると、 $x\neq0$ かつ $Ax=0$ である。また、非零成分は高々 $d-1$ 個なので、

$$
\sigma(x)\leq d-1<d.
$$

### (iii) 必要十分条件

まず、すべての $x\in N\setminus\{0\}$ が $\sigma(x)\geq d$ を満たすとする。もしある $d-1$ 本の列が一次従属なら、(ii) により $\sigma(x)<d$ となる $x\in N\setminus\{0\}$ が存在して矛盾する。したがって任意の $d-1$ 本の列は一次独立である。

逆に、任意の $d-1$ 本の列が一次独立であるとする。 $\sigma(x)=s<d$ となる $x\in N\setminus\{0\}$ があれば、

$$
0=Ax=\sum_{x_j\neq0}x_j\boldsymbol a_j
$$

は $s$ 本の列の非自明な一次従属関係である。これらの列を $d-1$ 本まで補えば、一次従属な $d-1$ 本の列が得られて仮定に反する。よってすべての $x\in N\setminus\{0\}$ について $\sigma(x)\geq d$ である。
