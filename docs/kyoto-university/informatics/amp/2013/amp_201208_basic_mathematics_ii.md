---
sidebar_label: "2012年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 京都大学 情報学研究科 数理工学専攻 2012年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$\mathbb{C}^{\,n \times m}$ で、 $n \times m$ 複素行列の全体を表す。
行列 $A \in \mathbb{C}^{\,n \times m}$ のエルミート共役を $A^*$ で表す。
$H \in \mathbb{C}^{\,n \times n}$ を正定値エルミート行列とする。
以下の問いに答えよ。
(i) $H$ は逆行列をもつが, $H^{-1}$ もまた正定値エルミート行列であることを示せ.

(ii) $n$ の分割 $n = r + s, r > 0, s > 0$ , に応じて, $H$ を次のようにブロック行列に分割する.

$$
H = \begin{pmatrix} A & B \\ B^* & D \end{pmatrix}  \qquad (*)
$$

ただし, $A \in C^{r \times r}, B \in C^{r \times s}, B^* \in C^{s \times r}, D \in C^{s \times s}$ . このとき, $A$ も $D$ も正定値エルミート行列であることを示せ.

(iii) 適当な下三角行列を左から, 上三角行列を右からそれぞれかけることにより, (*) の行列は, $A$ を変化させることなくブロック対角行列 (左下と右上のブロックが零行列の形の行列) に変形できることを示せ.

(iv) 次に, $H \in C^{n \times n}$ の $(i, j)$ 成分を $h_{ij}$ で表すとき,

$$
\det H \leq h_{11} h_{22} \cdots h_{nn}
$$

の成り立つことを $n$ に関する数学的帰納法で証明せよ.

(v) $A \in C^{n \times n}$ を $A = (\mathbf{a}_1, \dots, \mathbf{a}_n)$ の形に表す. ただし, $\mathbf{a}_k \in C^n, k = 1, \dots, n$ . このとき

$$
|\det(A)|^2 \leq ||\mathbf{a}_1||^2 \cdots ||\mathbf{a}_n||^2
$$

の成り立つことを示せ. ただし, $||\mathbf{a}_k||$ は $\mathbf{a}_k$ の標準的ノルムを表す.

### 题目描述

以 $\mathbb C^{n\times m}$ 表示全体 $n\times m$ 复矩阵，以 $A^*$ 表示矩阵 $A$ 的 Hermite 共轭。设 $H\in\mathbb C^{n\times n}$ 是正定 Hermite 矩阵。完成以下各问：

1. 已知 $H$ 可逆，证明 $H^{-1}$ 也是正定 Hermite 矩阵。
2. 对分拆 $n=r+s$（$r>0,\ s>0$），将 $H$ 写成

   $$
   H=
   \begin{pmatrix}
   A&B\\
   B^*&D
   \end{pmatrix},\tag{*}
   $$

   其中

   $$
   A\in\mathbb C^{r\times r},\quad
   B\in\mathbb C^{r\times s},\quad
   B^*\in\mathbb C^{s\times r},\quad
   D\in\mathbb C^{s\times s}.
   $$

   证明 $A$ 与 $D$ 都是正定 Hermite 矩阵。
3. 证明可以在 $(*)$ 左侧乘某个适当的下三角分块矩阵、右侧乘某个适当的上三角分块矩阵，在保持左上角分块 $A$ 不变的同时，把 $H$ 化为上下两个非对角分块均为零的分块对角矩阵。
4. 记 $H$ 的 $(i,j)$ 元为 $h_{ij}$。用关于 $n$ 的数学归纳法证明

   $$
   \det H\leq h_{11}h_{22}\cdots h_{nn}.
   $$

5. 将任意 $A\in\mathbb C^{n\times n}$ 按列写成

   $$
   A=(\boldsymbol a_1,\ldots,\boldsymbol a_n),
   \qquad \boldsymbol a_k\in\mathbb C^n.
   $$

   证明

   $$
   |\det A|^2
   \leq\|\boldsymbol a_1\|^2\cdots\|\boldsymbol a_n\|^2,
   $$

   其中 $\|\boldsymbol a_k\|$ 为标准范数。

## **Kai**

### (i) $H^{-1}$ の正定値性

$H$ は正定値なので $\ker H=\{0\}$ であり、正則である。また

$$
(H^{-1})^*=(H^*)^{-1}=H^{-1}
$$

だから $H^{-1}$ は Hermite 行列である。任意の $y\neq0$ に対し $x=H^{-1}y$ とおけば $x\neq0$ であり、

$$
y^*H^{-1}y=(Hx)^*H^{-1}(Hx)=x^*Hx>0.
$$

よって $H^{-1}$ も正定値 Hermite 行列である。

### (ii) 主対角ブロック

$u\in\mathbb C^r\setminus\{0\}$ に対して $\binom u0\neq0$ だから、

$$
\begin{pmatrix}u^*&0\end{pmatrix}
H
\begin{pmatrix}u\\0\end{pmatrix}
=u^*Au>0.
$$

同様に、 $v\in\mathbb C^s\setminus\{0\}$ に対して

$$
\begin{pmatrix}0&v^*\end{pmatrix}
H
\begin{pmatrix}0\\v\end{pmatrix}
=v^*Dv>0.
$$

$H=H^*$ から $A=A^*$ 、 $D=D^*$ でもあるので、 $A,D$ はともに正定値 Hermite 行列である。

### (iii) Schur 補行列

(ii) より $A$ は正則である。次の下三角行列と上三角行列を用いる。

$$
L=
\begin{pmatrix}
I_r&0\\
-B^*A^{-1}&I_s
\end{pmatrix},
\qquad
U=
\begin{pmatrix}
I_r&-A^{-1}B\\
0&I_s
\end{pmatrix}.
$$

直接乗法すると、

$$
LH=
\begin{pmatrix}
A&B\\
0&D-B^*A^{-1}B
\end{pmatrix}
$$

および

$$
LHU=
\begin{pmatrix}
A&0\\
0&D-B^*A^{-1}B
\end{pmatrix}
$$

を得る。なお $U=L^*$ なので、これは合同変換でもある。したがって Schur 補行列

$$
D-B^*A^{-1}B
$$

も正定値である。

### (iv) Hadamard の不等式

$n=1$ の場合は等号である。 $n-1$ 次まで成立すると仮定し、 $r=1$ 、 $s=n-1$ として

$$
H=
\begin{pmatrix}
h_{11}&B\\
B^*&D
\end{pmatrix}
$$

と分割する。(iii) から

$$
\det H
=h_{11}\det\left(D-B^*h_{11}^{-1}B\right).
$$

$S=B^*h_{11}^{-1}B$ とおくと $S$ は半正定値であり、 $D-S$ は正定値である。 $D^{-1/2}SD^{-1/2}$ の固有値を $\mu_i$ とすれば $0\leq\mu_i<1$ だから、

$$
\det(D-S)
=\det D\prod_{i=1}^{n-1}(1-\mu_i)
\leq\det D.
$$

帰納法の仮定を $D$ に適用して、

$$
\det H
\leq h_{11}\det D
\leq h_{11}h_{22}\cdots h_{nn}
$$

を得る。

### (v) 一般の行列に対する不等式

$A$ が正則でなければ左辺は $0$ なので明らかである。 $A$ が正則なら $H=A^*A$ は正定値 Hermite 行列であり、

$$
h_{ii}=\boldsymbol a_i^*\boldsymbol a_i=\|\boldsymbol a_i\|^2
$$

かつ

$$
\det H=\det(A^*)\det A=|\det A|^2.
$$

(iv) を適用すれば、

$$
|\det A|^2
\leq\|\boldsymbol a_1\|^2\cdots\|\boldsymbol a_n\|^2
$$

となる。
