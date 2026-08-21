---
sidebar_label: "2014年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Characteristic-Polynomial
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A_n$ を次のように定義する：

$$
A_n = \begin{pmatrix}
0 & n & & & 0 \\
1 & 0 & n-1 & & \\
0 & 2 & 0 & \ddots & \\
& & \ddots & 0 & n-2 \\
& & & n-1 & 0 & 1 \\
0 & & & & n & 0
\end{pmatrix}
$$

固有値 $n$ および $-n$ に対応する固有ベクトルをそれぞれ $v_1$ および $v_2$ とする。また、

$$
\delta_{i,j} = \begin{cases}
1 & (i = j) \\
0 & (i \neq j)
\end{cases}
$$

として、単位ベクトル $e_j = (\delta_{1,j}, \delta_{2,j}, ..., \delta_{n+1,j})^T$ を定義する。ここで、 $^T$ は転置を表す。

以下の問いに答えよ。

(i) 固有ベクトル $v_1, v_2$ を求めよ。

(ii) $n \geq 2$ とした時、行列 $T$ を $T = (v_1 \ v_2 \ e_3 \ ... \ e_{n+1})$ によって定義する。このとき、行列 $T^{-1}A_nT$ はブロック行列

$$
\begin{pmatrix}
B & C \\
0 & D
\end{pmatrix}
$$

で表されることを示し、行列 $B$ および $D$ を求めよ。ここで、 $0$ は $(n-1) \times 2$ の零行列を表す。

(iii) (ii) で求めた行列 $D$ および $A_{n-2}$ との間で

$$
SDS^{-1} = A_{n-2}
$$

を満たす正則な下三角行列 $S$ が存在することを示せ。

(iv) 行列 $A_n$ の固有多項式を計算し、全ての固有値を求めよ。

### 题目描述

定义 $(n+1)\times(n+1)$ 三对角矩阵

$$
A_n=
\begin{pmatrix}
0&n&&&0\\
1&0&n-1&&\\
0&2&0&\ddots&\\
&&\ddots&0&n-2\\
&&&n-1&0&1\\
0&&&&n&0
\end{pmatrix}.
$$

设 $v_1,v_2$ 分别是 $A_n$ 对应于特征值 $n$、$-n$ 的特征向量。再定义 Kronecker 符号与标准基向量

$$
\delta_{i,j}=
\begin{cases}
1,&i=j,\\
0,&i\neq j,
\end{cases}
\qquad
e_j=(\delta_{1,j},\delta_{2,j},\ldots,\delta_{n+1,j})^T,
$$

其中上标 $T$ 表示转置。完成以下各问：

1. 求特征向量 $v_1,v_2$。
2. 当 $n\geq2$ 时，定义

   $$
   T=(v_1\ \ v_2\ \ e_3\ \cdots\ e_{n+1}).
   $$

   证明

   $$
   T^{-1}A_nT=
   \begin{pmatrix}
   B&C\\
   0&D
   \end{pmatrix},
   $$

   并求出分块 $B,D$；其中左下角的 $0$ 是 $(n-1)\times2$ 零矩阵。
3. 对第 2 问得到的 $D$，证明存在可逆下三角矩阵 $S$ 使

   $$
   SDS^{-1}=A_{n-2}.
   $$

4. 计算 $A_n$ 的特征多项式，并求出其全部特征值。

## **Kai**

### (i) 固有値 $\pm n$ の固有ベクトル

$A_n$ の成分は

$$
(A_n)_{i,i-1}=i-1,\qquad
(A_n)_{i,i+1}=n-i+1
$$

であり、その他は $0$ である。したがって各行の和は $n$ なので、

$$
v_1=(1,1,\ldots,1)^T
$$

に対して $A_nv_1=nv_1$ である。

また、

$$
v_2=(1,-1,1,-1,\ldots,(-1)^n)^T
$$

とおくと、第 $i$ 成分について

$$
\begin{aligned}
(A_nv_2)_i
&=(i-1)(-1)^{i-2}+(n-i+1)(-1)^i\\
&=n(-1)^i=-n(-1)^{i-1}
\end{aligned}
$$

となる。よって $A_nv_2=-nv_2$ である。

### (ii) ブロック上三角表示

$v_1,v_2$ の最初の二成分からなる行列の行列式は $-2$ である。したがって

$$
T=(v_1\ v_2\ e_3\ \cdots\ e_{n+1})
$$

は正則である。最初の二列の作用から、

$$
T^{-1}A_nT=
\begin{pmatrix}
B&C\\
0&D
\end{pmatrix},
\qquad
B=
\begin{pmatrix}
n&0\\
0&-n
\end{pmatrix}.
$$

$D$ を具体的に求める。 $m=n-1$ とし、 $D=(d_{rk})_{1\leq r,k\leq m}$ とする。 $e_{k+2}$ に対応する列番号を $k$ とすれば、

$$
d_{r1}=
\begin{cases}
4-n,&r=2,\\
-(n-1),&r\geq4\ \text{かつ}\ r\ \text{が偶数},\\
0,&\text{その他},
\end{cases}
$$

また $2\leq k\leq m$ に対して

$$
d_{rk}
=(n-k)\delta_{r,k-1}+(k+2)\delta_{r,k+1}.
$$

実際、

$$
A_ne_j=(n-j+2)e_{j-1}+je_{j+1}
$$

である。 $j=3$ の場合だけ $e_2$ を

$$
e_2=\frac12(v_1-v_2)-e_4-e_6-\cdots
$$

で消去すれば、上の第 $1$ 列が得られる。 $j\geq4$ では両項が $e_3,\ldots,e_{n+1}$ の張る部分に入るので、残りの列の式が得られる。

### (iii) $D$ と $A_{n-2}$ の相似

$m=n-1$ 次行列 $S=(s_{ij})$ を

$$
s_{ij}=\delta_{ij}-\delta_{i,j+2}
$$

で定める。すなわち、主対角成分が $1$ 、第 $2$ 下対角成分が $-1$ で、その他が $0$ の下三角行列である。したがって

$$
\det S=1
$$

であり、 $S$ は正則である。

(ii) で得た $d_{rk}$ を代入して成分ごとに比較すると、

$$
SD=A_{n-2}S.
$$

実際、 $S$ の第 $j$ 列は $e_j-e_{j+2}$ であり、この差をとることで $D$ の第 $1$ 列の余分な偶数行成分が消え、残る上下対角成分はそれぞれ $n-2-i+1$ と $i$ になる。したがって

$$
SDS^{-1}=A_{n-2}
$$

である。

### (iv) 固有多項式と固有値

$\chi_n(\lambda)=\det(\lambda I_{n+1}-A_n)$ とおく。ブロック上三角表示と (iii) から、

$$
\chi_n(\lambda)
=(\lambda-n)(\lambda+n)\chi_{n-2}(\lambda).
$$

初期値は

$$
\chi_0(\lambda)=\lambda,
\qquad
\chi_1(\lambda)=(\lambda-1)(\lambda+1)
$$

である。帰納的に、

$$
\boxed{
\chi_n(\lambda)
=\prod_{k=0}^n\{\lambda-(n-2k)\}
}
$$

を得る。したがって固有値はすべて単純で、

$$
\boxed{\lambda_k=n-2k\qquad(k=0,1,\ldots,n)}
$$

である。
