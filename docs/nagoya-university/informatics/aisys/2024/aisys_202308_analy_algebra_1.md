---
sidebar_label: "2023年8月実施 解析・線形代数 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 解析・線形代数 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/17b639d81a91ac5dca245f353c6a2378.pdf)

ある集合の要素がAとBの2群のいずれかに属するとする.ステップごとにA群の要素の10\%をB群へ、B群の要素の30\%をA群へ移す。nステップ後にA群とB群に属する要素数の割合をそれぞれ $a_n, b_n$ とし、その組を $S_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}$ と表す.ただし、 $a_n + b_n = 1, a_n \geq 0, b_n \geq 0$ とする。なお、 $M^T$ は行列 $M$ の転置を表す。以下の問いに答えよ。

(a) $S_{n+1} = AS_n$ となる2×2行列Aを示せ。

(b) Aのすべての固有値と、それらに対する単位固有ベクトルをそれぞれ一つ求めよ.

(c) 正則行列 $P$ を用いて、 $P^{-1}AP$ として $A$ を対角化することを考える. $P^{-1}$ と $P$ の組を一つ求めよ。

(d) $S_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ としたときの $a_5$ と $b_5$ の値を求めよ。ただし、四捨五入により小数点以下第4位まで解答するものとする。なお、次の値は使ってよい。
$0.1^5 = 0.00001, 0.2^5 = 0.00032, 0.3^5 = 0.00243, 0.4^5 = 0.01024, 0.5^5 = 0.03125,$
$0.6^5 = 0.07776, 0.7^5 = 0.16807, 0.8^5 = 0.32768, 0.9^5 = 0.59049$

(e) nが十分に大きいとき,任意の $S_0$ における $a_n$ と $b_n$ の値を求めよ.

### 题目描述

某集合的每个元素属于 A、B 两组之一。每一步把 A 组元素的 $10\%$ 移入 B 组，同时把 B 组元素的 $30\%$ 移入 A 组。经过 $n$ 步后，A、B 两组元素所占比例分别为 $a_n,b_n$，并记

$$
S_n=\begin{pmatrix}a_n\\b_n\end{pmatrix},
\qquad
a_n+b_n=1,\quad a_n\ge0,\quad b_n\ge0.
$$

以下 $M^{\mathsf T}$ 表示矩阵 $M$ 的转置。

1. 写出满足 $S_{n+1}=AS_n$ 的 $2\times2$ 矩阵 $A$；
2. 求 $A$ 的全部特征值，并对每个特征值分别给出一个单位特征向量；
3. 考察用可逆矩阵 $P$ 将 $A$ 对角化为 $P^{-1}AP$。求一组符合要求的 $P^{-1}$ 与 $P$；
4. 当

   $$
   S_0=\begin{pmatrix}1\\0\end{pmatrix}
   $$

   时，求 $a_5,b_5$，四舍五入到小数点后第 $4$ 位。可以使用

   $$
   \begin{gathered}
   0.1^5=0.00001,\quad0.2^5=0.00032,\quad0.3^5=0.00243,\\
   0.4^5=0.01024,\quad0.5^5=0.03125,\quad0.6^5=0.07776,\\
   0.7^5=0.16807,\quad0.8^5=0.32768,\quad0.9^5=0.59049;
   \end{gathered}
   $$

5. 当 $n$ 足够大时，对任意初始状态 $S_0$，求 $a_n,b_n$ 的极限值。

## **Kai**

(a)
A群の要素のうち $10\%$ が B群へ移り，B群の要素のうち $30\%$ が A群へ移るとする．
このとき，各時刻 $n$ における A群，B群の割合をそれぞれ $a_n,b_n$ とすると，

$$
a_{n+1}=0.9a_n+0.3b_n,
\qquad
b_{n+1}=0.1a_n+0.7b_n
$$

が成り立つ．

これを行列形式で表すと，

$$
\begin{pmatrix}
a_{n+1}\\
b_{n+1}
\end{pmatrix}
=
\begin{pmatrix}
0.9 & 0.3\\
0.1 & 0.7
\end{pmatrix}
\begin{pmatrix}
a_n\\
b_n
\end{pmatrix}
$$

となる．よって，

$$
A=
\begin{pmatrix}
0.9 & 0.3\\
0.1 & 0.7
\end{pmatrix}
$$

である．

(b)
行列 $A$ の固有値を求める．固有方程式は

$$
\det(A-\lambda I)
=
\begin{vmatrix}
0.9-\lambda & 0.3\\
0.1 & 0.7-\lambda
\end{vmatrix}
$$

であり，

$$
(0.9-\lambda)(0.7-\lambda)-0.03
=\lambda^2-1.6\lambda+0.6
$$

となる．したがって，

$$
(\lambda-1)(\lambda-0.6)=0
$$

より，

$$
\lambda_1=1,\qquad \lambda_2=0.6
$$

を得る．

まず $\lambda_1=1$ のとき，

$$
(A-I)
=
\begin{pmatrix}
-0.1 & 0.3\\
0.1 & -0.3
\end{pmatrix}
$$

であるから，

$$
-0.1x+0.3y=0
$$

より $x=3y$ が得られる．よって固有ベクトルとして

$$
\begin{pmatrix}
3\\
1
\end{pmatrix}
$$

をとることができ，対応する単位固有ベクトルは

$$
\frac{1}{\sqrt{10}}
\begin{pmatrix}
3\\
1
\end{pmatrix}
$$

である．

次に $\lambda_2=0.6$ のとき，

$$
(A-0.6I)
=
\begin{pmatrix}
0.3 & 0.3\\
0.1 & 0.1
\end{pmatrix}
$$

であり，

$$
0.3x+0.3y=0
$$

より $x=-y$ が成り立つ．したがって固有ベクトルとして

$$
\begin{pmatrix}
1\\
-1
\end{pmatrix}
$$

をとることができ，単位固有ベクトルは

$$
\frac{1}{\sqrt{2}}
\begin{pmatrix}
1\\
-1
\end{pmatrix}
$$

である．

(c)
固有ベクトルを並べた行列を

$$
P=
\begin{pmatrix}
3 & 1\\
1 & -1
\end{pmatrix}
$$

とすると，

$$
P^{-1}
=
\frac{1}{4}
\begin{pmatrix}
1 & 1\\
1 & -3
\end{pmatrix}
$$

である．

(d)
状態ベクトルを $S_n=(a_n,b_n)^T$ とすると，

$$
S_n=A^n S_0
$$

が成り立つ． $A=PDP^{-1}$ と対角化できるので，

$$
A^5=PD^5P^{-1}
$$

である．ここで

$$
D=
\begin{pmatrix}
1 & 0\\
0 & 0.6
\end{pmatrix}
$$

より，

$$
D^5=
\begin{pmatrix}
1 & 0\\
0 & 0.6^5
\end{pmatrix}
=
\begin{pmatrix}
1 & 0\\
0 & 0.07776
\end{pmatrix}
$$

である．

計算すると，

$$
A^5=
\begin{pmatrix}
0.76944 & 0.69168\\
0.23056 & 0.30832
\end{pmatrix}
$$

となる．初期状態 $S_0=(1,0)^T$ に対して，

$$
S_5=A^5S_0
=
\begin{pmatrix}
0.76944\\
0.23056
\end{pmatrix}
$$

を得る．したがって，

$$
a_5=0.7694,\qquad b_5=0.2306
$$

である．

(e)
$a_n+b_n=1$ より $a_{n+1}=0.6a_n+0.3$ である。したがって

$$
a_{n+1}-\frac34=0.6\left(a_n-\frac34\right),\qquad
a_n=\frac34+(0.6)^n\left(a_0-\frac34\right),\qquad b_n=1-a_n.
$$

$(0.6)^n\to0$ なので、どの初期状態でも $a_n\to3/4$、$b_n\to1/4$ となる。
