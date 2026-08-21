---
sidebar_label: "2009年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Differentiation
---
# 京都大学 情報学研究科 数理工学専攻 2009年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

実数列 $a_j (j = 1, 2, ...)$ と漸化式

$$
\begin{cases}
p_0(x) = 1, \\
p_1(x) = x - a_1, \\
p_k(x) = (x - a_k)p_{k-1}(x) - p_{k-2}(x), \quad (k = 2, 3, ...)
\end{cases}
$$

によって実変数 $x$ の多項式の列 $p_k(x) (k = 0, 1, ...)$ を定める. 以下の問いに答えよ.

(i) 任意の $x$ において $p_k(x)$ と $p_{k-1}(x)$ が同時に $0$ となることはないことを示せ.

(ii) $x = \lambda$ を $k$ 次多項式 $p_k(x)$ の実の零点とするとき,

$$
p_{k+1}(\lambda)p_{k-1}(\lambda) < 0, \quad (k = 1, 2, ...)
$$

が成り立つことを示せ.

(iii) 多項式 $p_k(x)$ の導関数を $p'_k(x)$ とかく.

$$
q_k(x) = p'_k(x)p_{k-1}(x) - p_k(x)p'_{k-1}(x), \quad (k = 1, 2, ...)
$$

とおくとき, 任意の $x$ において $q_k(x) \geq q_{k-1}(x)$ , および, $q_k(x) \geq 1$ が成り立つことを示せ.

(iv) 多項式 $p_k(x)$ の実の零点は単根であることを示せ.

(v) 多項式 $p_k(x)$ の実の零点 $\lambda_i^{(k)} (i = 1, 2, ..., l)$ が $\lambda_1^{(k)} < \lambda_2^{(k)} < ... < \lambda_l^{(k)}$ をみたし, 多項式 $p_{k+1}(x)$ の実の零点 $\lambda_j^{(k+1)} (j = 1, 2, ..., m)$ が $\lambda_1^{(k+1)} < \lambda_2^{(k+1)} < ... < \lambda_m^{(k+1)}$ をみたすとする. このとき, $l = k$ , $m = k + 1$ で

$$
\lambda_1^{(k+1)} < \lambda_1^{(k)} < \lambda_2^{(k+1)} < \lambda_2^{(k)} < ... < \lambda_k^{(k+1)} < \lambda_k^{(k)} < \lambda_{k+1}^{(k+1)}
$$

が成り立つことを示せ.

### 题目描述

给定实数列 $(a_j)_{j\geq1}$，由递推关系

$$
\begin{cases}
p_0(x)=1,\\
p_1(x)=x-a_1,\\
p_k(x)=(x-a_k)p_{k-1}(x)-p_{k-2}(x),
\quad k=2,3,\ldots
\end{cases}
$$

定义实变量多项式列 $(p_k)_{k\geq0}$。完成以下各问：

1. 证明对任意 $x$，$p_k(x)$ 与 $p_{k-1}(x)$ 不会同时为零。
2. 若实数 $\lambda$ 是 $k$ 次多项式 $p_k$ 的零点，证明对每个 $k\geq1$，

   $$
   p_{k+1}(\lambda)p_{k-1}(\lambda)<0.
   $$

3. 记 $p_k'$ 为 $p_k$ 的导数，并定义

   $$
   q_k(x)=p_k'(x)p_{k-1}(x)-p_k(x)p_{k-1}'(x)
   \quad(k\geq1).
   $$

   证明对任意 $x$ 都有 $q_k(x)\geq q_{k-1}(x)$，并且 $q_k(x)\geq1$。
4. 证明 $p_k$ 的每个实零点都是单根。
5. 将 $p_k$ 的实零点按
   $\lambda_1^{(k)}<\cdots<\lambda_l^{(k)}$ 排列，将 $p_{k+1}$ 的实零点按
   $\lambda_1^{(k+1)}<\cdots<\lambda_m^{(k+1)}$ 排列。证明 $l=k$、$m=k+1$，且两组零点严格交错：

   $$
   \lambda_1^{(k+1)}<\lambda_1^{(k)}
   <\lambda_2^{(k+1)}<\lambda_2^{(k)}
   <\cdots<
   \lambda_k^{(k+1)}<\lambda_k^{(k)}
   <\lambda_{k+1}^{(k+1)}.
   $$

## **Kai**

### (i)

ある実数 $\alpha$ で

$$
p_k(\alpha)=p_{k-1}(\alpha)=0
$$

と仮定する。漸化式に $\alpha$ を代入すると、

$$
0=(\alpha-a_k)\cdot 0-p_{k-2}(\alpha)
$$

より $p_{k-2}(\alpha)=0$ である。同じ議論を順に繰り返すと $p_0(\alpha)=0$ となるが、 $p_0=1$ に反する。したがって、隣接する $p_k$ と $p_{k-1}$ は共通零点をもたない。

### (ii)

$p_k(\lambda)=0$ とする。漸化式から

$$
p_{k+1}(\lambda)
=(\lambda-a_{k+1})p_k(\lambda)-p_{k-1}(\lambda)
=-p_{k-1}(\lambda)
$$

である。(i) より $p_{k-1}(\lambda)\neq 0$ なので、

$$
\boxed{
p_{k+1}(\lambda)p_{k-1}(\lambda)
=-p_{k-1}(\lambda)^2<0}
$$

を得る。

### (iii)

漸化式を微分すると、

$$
p'_k
=p_{k-1}+(x-a_k)p'_{k-1}-p'_{k-2}
$$

である。これと元の漸化式を $q_k$ に代入して整理すると、

$$
\begin{aligned}
q_k
&=\left\{p_{k-1}+(x-a_k)p'_{k-1}-p'_{k-2}\right\}p_{k-1}\\
&\quad-\left\{(x-a_k)p_{k-1}-p_{k-2}\right\}p'_{k-1}\\
&=p_{k-1}^2+p'_{k-1}p_{k-2}-p_{k-1}p'_{k-2}\\
&=p_{k-1}^2+q_{k-1}
\end{aligned}
$$

を得る。したがって $k\geq 2$ では

$$
q_k(x)\geq q_{k-1}(x)
$$

である。また、

$$
q_1=p'_1p_0-p_1p'_0=1
$$

なので、すべての $k\geq 1$ と実数 $x$ に対して

$$
\boxed{q_k(x)\geq 1}
$$

が成り立つ。

### (iv)

$\lambda$ が $p_k$ の重根ならば、

$$
p_k(\lambda)=p'_k(\lambda)=0
$$

である。このとき $q_k(\lambda)=0$ となるが、(iii) の $q_k(\lambda)\geq 1$ に反する。よって $p_k$ の実零点はすべて単根である。

### (v)

数学的帰納法で、 $p_k$ が $k$ 個、 $p_{k+1}$ が $k+1$ 個の実零点をもち、それらが交互に並ぶことを示す。

$p_0=1$ と $p_1=x-a_1$ の場合は明らかである。帰納法の仮定として、 $p_{k-1}$ が $k-1$ 個、 $p_k$ が $k$ 個の単根をもち、

$$
\lambda_1^{(k)}
<\lambda_1^{(k-1)}
<\lambda_2^{(k)}
<\cdots
<\lambda_{k-1}^{(k-1)}
<\lambda_k^{(k)}
$$

と交互に並んでいるとする。

(ii) より

$$
p_{k+1}\left(\lambda_i^{(k)}\right)
=-p_{k-1}\left(\lambda_i^{(k)}\right)
$$

である。帰納法の仮定と (iv) によれば、 $p_{k-1}$ は隣り合う $\lambda_i^{(k)}$ と $\lambda_{i+1}^{(k)}$ の間でちょうど一つの単根をもつ。したがって、上の $p_{k+1}$ の値は $i$ ごとに符号が交代する。中間値の定理より、各区間

$$
\left(\lambda_i^{(k)},\lambda_{i+1}^{(k)}\right),
\qquad i=1,\ldots,k-1
$$

に $p_{k+1}$ の零点が存在する。

さらに、すべての $p_j$ は最高次係数が $1$ の $j$ 次多項式である。 $\lambda_k^{(k)}$ は $p_{k-1}$ の全零点より右にあるので、

$$
p_{k-1}\left(\lambda_k^{(k)}\right)>0,
\qquad
p_{k+1}\left(\lambda_k^{(k)}\right)<0
$$

である。一方、 $x\to+\infty$ で $p_{k+1}(x)\to+\infty$ だから、 $\lambda_k^{(k)}$ の右にも零点が一つある。

同様に、 $\lambda_1^{(k)}$ は $p_{k-1}$ の全零点より左にあるため、

$$
\operatorname{sgn}p_{k+1}\left(\lambda_1^{(k)}\right)=(-1)^k
$$

であるが、 $x\to-\infty$ での $p_{k+1}(x)$ の符号は $(-1)^{k+1}$ である。よって $\lambda_1^{(k)}$ の左にも零点が一つある。

以上で $p_{k+1}$ の相異なる $k+1$ 個の実零点が得られた。次数も $k+1$ なので、ほかに零点はない。したがって

$$
\boxed{
\lambda_1^{(k+1)}
<\lambda_1^{(k)}
<\lambda_2^{(k+1)}
<\lambda_2^{(k)}
<\cdots
<\lambda_k^{(k+1)}
<\lambda_k^{(k)}
<\lambda_{k+1}^{(k+1)}}
$$

が成り立つ。
