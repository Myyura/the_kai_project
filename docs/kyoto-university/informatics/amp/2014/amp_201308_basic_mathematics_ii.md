---
sidebar_label: "2013年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Norm
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 京都大学 情報学研究科 数理工学専攻 2013年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

n次ベクトル $x = (x_1, x_2, ..., x_n)^T$ および n次正方行列 $A = (a_{ij})$ に対して、実数 $||x||_{\infty}$ および $||A||_{\infty}$ をそれぞれ $||x||_{\infty} = \max_{1 \leq i \leq n} |x_i|$ および $||A||_{\infty} = \max_{x \neq 0} \frac{||Ax||_{\infty}}{||x||_{\infty}}$ と定義する。ここで、記号 $^T$ は転置を表す。また、行列Aの固有値を $\lambda_1, \lambda_2, ..., \lambda_n$ とするとき、 $\rho(A) = \max_{1 \leq i \leq n} |\lambda_i|$ とおく。このとき、以下の問いに答えよ。

(i) $\rho(A) \leq ||A||_{\infty}$ が成り立つことを示せ。

(ii) $||A||_{\infty} = \max_{1 \leq i \leq n} \sum_{j=1}^n |a_{ij}|$ が成り立つことを示せ。

(iii) $\lim_{k \to \infty} A^k = O$ が成り立つためには、 $\rho(A) < 1$ であることが必要十分であることを示せ。

(iv) $||A||_{\infty} < 1$ ならば $I - A$ は正則で

$$
(I - A)^{-1} = I + \lim_{k \to \infty} \sum_{i=1}^k A^i
$$

が成り立つことを示せ。ここで、 $I$ は単位行列を表わす。任意の n次ベクトル $x, y$ および n次正方行列 $A, B$ に対して、

$||x + y||_{\infty} \leq ||x||_{\infty} + ||y||_{\infty}, \quad ||A + B||_{\infty} \leq ||A||_{\infty} + ||B||_{\infty}$

が成立することを用いてよい。

### 题目描述

对 $n$ 维向量 $x=(x_1,x_2,\ldots,x_n)^T$ 及 $n$ 阶方阵 $A=(a_{ij})$，定义

$$
\|x\|_\infty=\max_{1\leq i\leq n}|x_i|,
\qquad
\|A\|_\infty=\max_{x\neq0}\frac{\|Ax\|_\infty}{\|x\|_\infty},
$$

其中上标 $T$ 表示转置。若 $A$ 的特征值为 $\lambda_1,\ldots,\lambda_n$，定义其谱半径

$$
\rho(A)=\max_{1\leq i\leq n}|\lambda_i|.
$$

完成以下各问：

1. 证明

   $$
   \rho(A)\leq\|A\|_\infty.
   $$

2. 证明诱导矩阵无穷范数等于最大绝对行和：

   $$
   \|A\|_\infty
   =\max_{1\leq i\leq n}\sum_{j=1}^n|a_{ij}|.
   $$

3. 证明

   $$
   \lim_{k\to\infty}A^k=O
   $$

   成立的充要条件是 $\rho(A)<1$，其中 $O$ 为零矩阵。
4. 证明若 $\|A\|_\infty<1$，则 $I-A$ 可逆，且

   $$
   (I-A)^{-1}
   =I+\lim_{k\to\infty}\sum_{i=1}^kA^i,
   $$

   其中 $I$ 为单位矩阵。可以使用对任意 $n$ 维向量 $x,y$ 及 $n$ 阶方阵 $A,B$ 成立的三角不等式

   $$
   \|x+y\|_\infty\leq\|x\|_\infty+\|y\|_\infty,\qquad
   \|A+B\|_\infty\leq\|A\|_\infty+\|B\|_\infty.
   $$

## **Kai**

### (i) スペクトル半径の評価

$\lambda$ を $A$ の固有値、 $x\neq0$ を対応する固有ベクトルとする。すると

$$
\|Ax\|_\infty
=\|\lambda x\|_\infty
=|\lambda|\,\|x\|_\infty.
$$

したがって

$$
|\lambda|
=\frac{\|Ax\|_\infty}{\|x\|_\infty}
\leq\|A\|_\infty.
$$

すべての固有値について最大をとれば、

$$
\rho(A)\leq\|A\|_\infty
$$

を得る。

### (ii) 行和による表示

$y=Ax$ とすると、

$$
|y_i|
\leq\sum_{j=1}^n|a_{ij}|\,|x_j|
\leq\left(\sum_{j=1}^n|a_{ij}|\right)\|x\|_\infty.
$$

よって

$$
\|A\|_\infty
\leq\max_{1\leq i\leq n}\sum_{j=1}^n|a_{ij}|.
$$

逆向きを示す。行和が最大となる行を $k$ とし、

$$
\widehat x_j=
\begin{cases}
\overline{a_{kj}}/|a_{kj}|,&a_{kj}\neq0,\\
1,&a_{kj}=0
\end{cases}
$$

とおく。実行列ならこれは通常の符号の選択である。 $\|\widehat x\|_\infty=1$ かつ

$$
(A\widehat x)_k=\sum_{j=1}^n|a_{kj}|
$$

なので、

$$
\|A\|_\infty
\geq\|A\widehat x\|_\infty
\geq\sum_{j=1}^n|a_{kj}|.
$$

以上から

$$
\|A\|_\infty
=\max_{1\leq i\leq n}\sum_{j=1}^n|a_{ij}|
$$

である。

### (iii) $A^k\to O$ の必要十分条件

まず $A^k\to O$ とする。任意の固有対 $Ax=\lambda x$ に対して

$$
A^kx=\lambda^kx\to0.
$$

$x\neq0$ だから $\lambda^k\to0$ 、したがって $|\lambda|<1$ である。ゆえに $\rho(A)<1$ である。

逆に $\rho(A)<1$ とする。複素数体上の Jordan 標準形を

$$
A=PJP^{-1}
$$

とする。固有値 $\lambda$ をもつ Jordan ブロック $J_\lambda=\lambda I+N$ に対して、

$$
J_\lambda^k
=\sum_{m=0}^{s-1}\binom{k}{m}\lambda^{k-m}N^m,
$$

ここで $s$ はブロックの大きさである。 $|\lambda|<1$ なら各係数は $0$ に収束するので $J_\lambda^k\to O$ である。したがって $J^k\to O$ 、さらに

$$
A^k=PJ^kP^{-1}\to O
$$

となる。

### (iv) Neumann 級数

誘導ノルムの性質から

$$
\|A^i\|_\infty\leq\|A\|_\infty^i.
$$

$q=\|A\|_\infty<1$ とし、 $S_k=\sum_{i=0}^kA^i$ とおく。 $m>k$ なら

$$
\|S_m-S_k\|_\infty
\leq\sum_{i=k+1}^mq^i\to0,
$$

したがって $S_k$ は収束する。その極限を $S$ とする。有限和の恒等式

$$
(I-A)S_k=S_k(I-A)=I-A^{k+1}
$$

で $k\to\infty$ とすれば、

$$
(I-A)S=S(I-A)=I.
$$

よって $I-A$ は正則であり、

$$
(I-A)^{-1}
=S
=I+\lim_{k\to\infty}\sum_{i=1}^kA^i
$$

を得る。
