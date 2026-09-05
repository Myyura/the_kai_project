---
sidebar_label: "2007年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 数理工学専攻 2007年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h20/h20_kiso6.pdf)

nを2以上の自然数とし, Vandermonde行列 $V_n$ および Hankel行列 $H_n$ を

$$
V_n = \begin{pmatrix} 1 & 1 & \cdots & 1 \\ x_1 & x_2 & \cdots & x_n \\ x_1^2 & x_2^2 & \cdots & x_n^2 \\ \vdots & \vdots & & \vdots \\ x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1} \end{pmatrix}, \quad H_n = \begin{pmatrix} s_0 & s_1 & \cdots & s_{n-1} \\ s_1 & s_2 & \cdots & s_n \\ \vdots & \vdots & & \vdots \\ s_{n-1} & s_n & \cdots & s_{2n-2} \end{pmatrix}
$$

により導入する. 各 $s_k$ は $x_i$ を用いて $s_k = x_1^k + x_2^k + \cdots + x_n^k, (k=0, 1, \dots)$ と表されるとする. ここに, $s_0 = 1 + 1 + \cdots + 1 = n$ である. また,

$$
\Delta(x_1, x_2, \dots, x_n) := \prod_{1 \leq i < j \leq n} (x_i - x_j)
$$

とおく. 以下の問いに答えよ.

(i) $\det V_n = (-1)^{\frac{n(n-1)}{2}} \Delta(x_1, x_2, \dots, x_n)$ を示せ.

(ii) 相異なる $x_i$ について平面上の $n$ 点 $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ をとる. 曲線

$$
y = a_0 + a_1 x + a_2 x^2 + \cdots + a_{n-1} x^{n-1}
$$

がこれら $n$ 点をすべて通るとき, 係数 $a_0, a_1, \dots, a_{n-1}$ は, 与えられた $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ から一意に定まることを示せ.

(iii) $x_1 < x_2 < \cdots < x_n$ のとき, $\det V_n > 0$ が成り立つことを示せ.

(iv) $H_n$ を $V_n$ で表し, $\det H_n = \Delta(x_1, x_2, \dots, x_n)^2$ を示せ.

(v) Hankel行列 $H_{n+1}$ を

$$
H_{n+1} = \begin{pmatrix} s_0 & s_1 & \cdots & s_n \\ s_1 & s_2 & \cdots & s_{n+1} \\ \vdots & \vdots & & \vdots \\ s_n & s_{n+1} & \cdots & s_{2n} \end{pmatrix}
$$

で定めるとき, $\det H_{n+1} = 0$ が成り立つことを示せ.

### 题目描述

设 $n\geq2$ 为自然数，定义 Vandermonde 矩阵和 Hankel 矩阵

$$
V_n=
\begin{pmatrix}
1&1&\cdots&1\\
x_1&x_2&\cdots&x_n\\
x_1^2&x_2^2&\cdots&x_n^2\\
\vdots&\vdots&&\vdots\\
x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}
\end{pmatrix},
\qquad
H_n=
\begin{pmatrix}
s_0&s_1&\cdots&s_{n-1}\\
s_1&s_2&\cdots&s_n\\
\vdots&\vdots&&\vdots\\
s_{n-1}&s_n&\cdots&s_{2n-2}
\end{pmatrix},
$$

其中

$$
s_k=x_1^k+x_2^k+\cdots+x_n^k\quad(k=0,1,\ldots),
\qquad s_0=n,
$$

并记

$$
\Delta(x_1,\ldots,x_n)
:=\prod_{1\leq i<j\leq n}(x_i-x_j).
$$

完成以下各问：

1. 证明

   $$
   \det V_n=(-1)^{n(n-1)/2}\Delta(x_1,\ldots,x_n).
   $$

2. 取横坐标 $x_i$ 两两不同的平面点 $(x_i,y_i)\ (i=1,\ldots,n)$。证明：若次数不超过 $n-1$ 的曲线

   $$
   y=a_0+a_1x+\cdots+a_{n-1}x^{n-1}
   $$

   通过全部这些点，则系数 $a_0,\ldots,a_{n-1}$ 由所给点唯一确定。
3. 当 $x_1<x_2<\cdots<x_n$ 时，证明 $\det V_n>0$。
4. 用 $V_n$ 表示 $H_n$，并证明

   $$
   \det H_n=\Delta(x_1,\ldots,x_n)^2.
   $$

5. 再定义

   $$
   H_{n+1}=
   \begin{pmatrix}
   s_0&s_1&\cdots&s_n\\
   s_1&s_2&\cdots&s_{n+1}\\
   \vdots&\vdots&&\vdots\\
   s_n&s_{n+1}&\cdots&s_{2n}
   \end{pmatrix},
   $$

   证明 $\det H_{n+1}=0$。

## **Kai**

### (i) Vandermonde 行列式

$D_n=\det V_n$ を $x_n$ の多項式とみると次数は高々 $n-1$ である。$x_n=x_i$（$i<n$）では第 $i$ 列と第 $n$ 列が一致するので $D_n=0$ となり、$x_n^{n-1}$ の係数は最終列による展開から $D_{n-1}$ である。従って多項式の恒等式として

$$D_n=D_{n-1}\prod_{i=1}^{n-1}(x_n-x_i)$$

が成り立つ。$D_1=1$ から帰納的に、

$$
\det V_n=\prod_{1\leq i<j\leq n}(x_j-x_i)
$$

である。一方、因子の個数は $\binom n2=n(n-1)/2$ であり、各因子について $x_j-x_i=-(x_i-x_j)$ だから、

$$
\det V_n
=(-1)^{\frac{n(n-1)}2}\prod_{1\leq i<j\leq n}(x_i-x_j)
=(-1)^{\frac{n(n-1)}2}\Delta(x_1,\ldots,x_n)
$$

を得る。

### (ii) 補間多項式の一意性

$\boldsymbol a=(a_0,\ldots,a_{n-1})^T$ 、 $\boldsymbol y=(y_1,\ldots,y_n)^T$ とおくと、各点を通る条件は

$$
V_n^T\boldsymbol a=\boldsymbol y
$$

と書ける。 $x_1,\ldots,x_n$ は相異なるので、(i) より $\det V_n\neq0$ である。したがって $V_n^T$ は正則であり、

$$
\boldsymbol a=(V_n^T)^{-1}\boldsymbol y
$$

は一意に定まる。

### (iii) 行列式の符号

$x_1<x_2<\cdots<x_n$ なら、 $i<j$ に対して $x_j-x_i>0$ である。よって

$$
\det V_n=\prod_{1\leq i<j\leq n}(x_j-x_i)>0
$$

となる。

### (iv) Hankel 行列の分解

$H_n$ の $(i,j)$ 成分は

$$
s_{i+j-2}
=\sum_{k=1}^n x_k^{i+j-2}
=\sum_{k=1}^n x_k^{i-1}x_k^{j-1}
$$

であり、これは $V_nV_n^T$ の $(i,j)$ 成分に等しい。したがって

$$
H_n=V_nV_n^T
$$

である。ゆえに

$$
\det H_n
=\det V_n\det V_n^T
=(\det V_n)^2
=\Delta(x_1,\ldots,x_n)^2
$$

を得る。

### (v) $H_{n+1}$ の行列式

$(n+1)\times n$ 行列 $W$ を

$$
W_{ij}=x_j^{i-1}
\qquad
(1\leq i\leq n+1,\ 1\leq j\leq n)
$$

で定めると、(iv) と同様に

$$
H_{n+1}=WW^T
$$

と分解できる。したがって

$$
\operatorname{rank}H_{n+1}
\leq\operatorname{rank}W
\leq n<n+1
$$

であるから、 $\det H_{n+1}=0$ である。
