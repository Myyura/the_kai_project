---
sidebar_label: "2010年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2010年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\mathbb{R}^N$ の $n (< N)$ 次元線形部分空間を $V_n$ とし, $V_n$ 上の一次独立なベクトルを $v_1, v_2,..., v_n$ とする. さらに, $x$ を $\mathbb{R}^N$ 上の点とし, $x$ と $V_n$ との距離を

$$
\text{dist}(x, V_n) := \inf_{(\alpha_1,...,\alpha_n) \in \mathbb{R}^n} ||x - \alpha_1 v_1 - \alpha_2 v_2 - ... - \alpha_n v_n||
$$

で表す. ただし, $||f|| = \sqrt{\langle f,f\rangle}$ で $f$ のノルム, $\langle f,g\rangle$ で $f$ と $g$ の内積をそれぞれ表す. また, グラム行列式を

$$
G(f_1,..., f_n) = \det ((\langle f_i, f_j\rangle))_{1\leq i,j \leq n}
$$

で定義する. このとき, 以下の問いに答えよ.

(i) $||x-y||= \text{dist}(x, V_n)$ をみたす $V_n$ 上の点 $y$ が存在することを示せ.

(ii) $||x-y||= \text{dist}(x, V_n)$ を実現する $V_n$ 上の点を $y$ とする. このとき, $x-y$ は $V_n$ 上の任意のベクトルと直交すること, すなわち

$$
\langle x - y, w\rangle = 0, \quad \forall w \in V_n
$$

を示せ.

(iii) 次式の成り立つことを示せ.

$$
\text{dist}(x, V_n)^2 = \frac{G(v_1, v_2, ..., v_n, x)}{G(v_1, v_2, ..., v_n)}
$$

ここで, $f_1, f_2,..., f_k$ が一次独立ならば, $G(f_1, f_2,..., f_k) \neq 0$ であることは用いてよい.

(iv) $G(v_1, v_2,..., v_n) > 0$ を示せ.

(v) $V_m \subset V_n$ ( $0 \leq m < n$ ) のとき,

$$
\text{dist}(x, V_n) \leq \text{dist}(x, V_m)
$$

を示すことにより,

$$
G(v_1, v_2,..., v_n) \leq G(v_1, v_2,..., v_{n-1}) G(v_n)
$$

を証明せよ.

### 题目描述

设 $V_n$ 是 $\mathbb R^N$ 的一个 $n$ 维线性子空间，其中 $n<N$；设 $v_1,v_2,\ldots,v_n$ 是 $V_n$ 中的一组线性无关向量，并取 $x\in\mathbb R^N$。定义点 $x$ 到子空间 $V_n$ 的距离为

$$
\operatorname{dist}(x,V_n)
:=\inf_{(\alpha_1,\ldots,\alpha_n)\in\mathbb R^n}
\left\|x-\sum_{i=1}^n\alpha_iv_i\right\|.
$$

这里 $\|f\|=\sqrt{\langle f,f\rangle}$，$\langle f,g\rangle$ 表示 $f$ 与 $g$ 的内积。另定义向量 $f_1,\ldots,f_k$ 的 Gram 行列式

$$
G(f_1,\ldots,f_k)
=\det\bigl((\langle f_i,f_j\rangle)_{1\leq i,j\leq k}\bigr).
$$

完成以下各问：

1. 证明存在 $y\in V_n$ 使

   $$
   \|x-y\|=\operatorname{dist}(x,V_n).
   $$

2. 设 $y\in V_n$ 实现了上述最短距离。证明 $x-y$ 与 $V_n$ 中任意向量正交，即

   $$
   \langle x-y,w\rangle=0,\qquad \forall\,w\in V_n.
   $$

3. 证明

   $$
   \operatorname{dist}(x,V_n)^2
   =\frac{G(v_1,v_2,\ldots,v_n,x)}
   {G(v_1,v_2,\ldots,v_n)}.
   $$

   本问允许使用：若 $f_1,\ldots,f_k$ 线性无关，则 $G(f_1,\ldots,f_k)\neq0$。
4. 证明

   $$
   G(v_1,v_2,\ldots,v_n)>0.
   $$

5. 当 $V_m\subset V_n$ 且 $0\leq m<n$ 时，先证明

   $$
   \operatorname{dist}(x,V_n)\leq\operatorname{dist}(x,V_m),
   $$

   再由此证明

   $$
   G(v_1,v_2,\ldots,v_n)
   \leq G(v_1,v_2,\ldots,v_{n-1})\,G(v_n).
   $$

## **Kai**

### (i) 最短点の存在

$d=\operatorname{dist}(x,V_n)$ とし、 $\|x-z_k\|\to d$ となる列 $z_k\in V_n$ をとる。この列は

$$
\|z_k\|\leq\|x-z_k\|+\|x\|
$$

により有界である。有限次元空間 $V_n$ の有界列には収束部分列があるので、ある部分列について $z_{k_\ell}\to y\in V_n$ となる。ノルムの連続性から

$$
\|x-y\|
=\lim_{\ell\to\infty}\|x-z_{k_\ell}\|
=d
$$

であり、最短点 $y$ が存在する。

### (ii) 最短点における直交性

$w\in V_n$ を任意にとる。 $y+tw\in V_n$ だから、

$$
\begin{aligned}
\varphi(t)
&=\|x-y-tw\|^2\\
&=\|x-y\|^2-2t\langle x-y,w\rangle+t^2\|w\|^2
\end{aligned}
$$

は $t=0$ で最小となる。したがって

$$
\varphi'(0)=-2\langle x-y,w\rangle=0.
$$

よって $\langle x-y,w\rangle=0$ であり、 $x-y$ は $V_n$ のすべてのベクトルと直交する。

### (iii) Gram 行列式による距離

$h=x-y$ とおくと、 $h\perp V_n$ かつ $\|h\|=\operatorname{dist}(x,V_n)$ である。また、ある $\alpha_1,\ldots,\alpha_n$ により

$$
x=\sum_{j=1}^n\alpha_jv_j+h
$$

と書ける。Gram 行列の最終列から第 $j$ 列の $\alpha_j$ 倍を引き、続いて最終行にも対応する操作を行うと、

$$
\begin{aligned}
G(v_1,\ldots,v_n,x)
&=
\det
\begin{pmatrix}
(\langle v_i,v_j\rangle)&0\\
0&\|h\|^2
\end{pmatrix}\\
&=\|h\|^2G(v_1,\ldots,v_n).
\end{aligned}
$$

$v_1,\ldots,v_n$ は一次独立なので分母は $0$ ではない。したがって

$$
\operatorname{dist}(x,V_n)^2
=\frac{G(v_1,\ldots,v_n,x)}
{G(v_1,\ldots,v_n)}.
$$

### (iv) Gram 行列式の正値性

$n=1$ なら

$$
G(v_1)=\|v_1\|^2>0.
$$

$n-1$ まで成立すると仮定する。(iii) を $x=v_n$ と $V_{n-1}=\operatorname{Span}\{v_1,\ldots,v_{n-1}\}$ に適用すると、

$$
G(v_1,\ldots,v_n)
=\operatorname{dist}(v_n,V_{n-1})^2G(v_1,\ldots,v_{n-1}).
$$

一次独立性から $v_n\notin V_{n-1}$ なので距離は正である。帰納法の仮定と合わせて

$$
G(v_1,\ldots,v_n)>0
$$

を得る。

### (v) 部分空間の包含と Gram 行列式

$V_m\subset V_n$ なら、下限をとる集合が大きくなるので

$$
\begin{aligned}
\operatorname{dist}(x,V_n)
&=\inf_{z\in V_n}\|x-z\|\\
&\leq\inf_{z\in V_m}\|x-z\|
=\operatorname{dist}(x,V_m).
\end{aligned}
$$

特に $V_{n-1}=\operatorname{Span}\{v_1,\ldots,v_{n-1}\}$ とし、 $x=v_n$ とする。 $0\in V_{n-1}$ だから

$$
\operatorname{dist}(v_n,V_{n-1})\leq\|v_n\|.
$$

(iii) と (iv) から、

$$
\begin{aligned}
G(v_1,\ldots,v_n)
&=\operatorname{dist}(v_n,V_{n-1})^2G(v_1,\ldots,v_{n-1})\\
&\leq G(v_n)G(v_1,\ldots,v_{n-1})
\end{aligned}
$$

となる。
