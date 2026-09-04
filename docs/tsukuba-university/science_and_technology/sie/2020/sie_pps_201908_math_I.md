---
sidebar_label: "社会工学学位プログラム 2019年8月実施 数学 I"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 筑波大学 システム情報工学研究科 社会工学専攻（社会工学学位プログラム・サービス工学学位プログラム） 2019年8月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

数学

問題IとIIの両方に答えよ。問題ごとに別々の解答用紙を使用せよ。
以下では，実数全体の集合を $\mathbb{R}$ とする。

I. $n$ 次元実ベクトル $a \in \mathbb{R}^n$ , $n$ 次正方行列 $A \in \mathbb{R}^{n \times n}$ に対して, ${}^t a$ , ${}^t A$ をそれぞれ $a$ の転置ベクトル, $A$ の転置行列とする。次の3つの3次元実ベクトル

$$
p_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, p_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}, p_3 = \begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix}
$$

に対して，3つの3次正方行列

$$
P_1 = p_1 {}^t p_1 = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}, P_2 = p_2 {}^t p_2 = \begin{pmatrix} 1 & -1 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, P_3 = p_3 {}^t p_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

を定義し，さらに3つの実数 $\alpha_1, \alpha_2, \alpha_3 \in \mathbb{R}$ に対して3次正方行列

$$
A(\alpha_1, \alpha_2, \alpha_3) = \alpha_1 P_1 + \alpha_2 P_2 + \alpha_3 P_3
$$

を定義する。以下の(1)-(5)に答えよ。

(1) 以下の3次正方行列の各要素を計算せよ。

$$
\begin{pmatrix}
{}^t p_1 p_1 & {}^t p_1 p_2 & {}^t p_1 p_3 \\
{}^t p_2 p_1 & {}^t p_2 p_2 & {}^t p_2 p_3 \\
{}^t p_3 p_1 & {}^t p_3 p_2 & {}^t p_3 p_3
\end{pmatrix}
$$

(2) 3つの3次元実ベクトル $A(\alpha_1, \alpha_2, \alpha_3) p_1$ , $A(\alpha_1, \alpha_2, \alpha_3) p_2$ , $A(\alpha_1, \alpha_2, \alpha_3) p_3$ それぞれを, $\alpha_1, \alpha_2, \alpha_3$ と具体的な実数で表される $x_1, x_2, x_3$ を用いて, $x_1 p_1 + x_2 p_2 + x_3 p_3$ の形で表せ。

(3) 3次正方行列 $A(1, 2, 3)$ の固有値をすべて求めよ。

(4) $n$ 次正方行列 $A$ について，任意の $n$ 次元実ベクトル $d \in \mathbb{R}^n$ に対して ${}^t d A d > 0$ が成り立つとき， $A$ は正定値行列であるという。3次正方行列 $A(1, 2, 3)$ が正定値行列であるか否か，理由を付して述べよ。

(5) 3次正方行列 $A(\alpha_1, \alpha_2, \alpha_3)$ が半正定値行列であるための, 3つの実数 $\alpha_1, \alpha_2, \alpha_3 \in \mathbb{R}$ に関する必要十分条件について，理由を付して述べよ。

### 题目描述

原题开头要求问题 I、II 均作答并分别使用答题纸，但当前文件的 Description 与 Kai 只包含问题 I；问题 II 的题面缺失，无法由本文件唯一恢复。以下为现有问题 I。

对 $n$ 维实向量 $a\in\mathbb R^n$ 和 $n$ 阶实方阵 $A\in\mathbb R^{n\times n}$，分别以 ${}^ta$、${}^tA$ 表示其转置。给定

$$
p_1=\begin{pmatrix}1\\0\\1\end{pmatrix},\qquad
p_2=\begin{pmatrix}-1\\1\\0\end{pmatrix},\qquad
p_3=\begin{pmatrix}0\\-1\\0\end{pmatrix},
$$

并定义三个外积矩阵

$$
P_1=p_1{}^tp_1=
\begin{pmatrix}1&0&1\\0&0&0\\1&0&1\end{pmatrix},
$$

$$
P_2=p_2{}^tp_2=
\begin{pmatrix}1&-1&0\\-1&1&0\\0&0&0\end{pmatrix},\qquad
P_3=p_3{}^tp_3=
\begin{pmatrix}0&0&0\\0&1&0\\0&0&0\end{pmatrix}.
$$

对 $\alpha_1,\alpha_2,\alpha_3\in\mathbb R$，再令

$$
A(\alpha_1,\alpha_2,\alpha_3)
=\alpha_1P_1+\alpha_2P_2+\alpha_3P_3.
$$

回答下列问题：

1. 计算 Gram 矩阵

   $$
   \begin{pmatrix}
   {}^tp_1p_1&{}^tp_1p_2&{}^tp_1p_3\\
   {}^tp_2p_1&{}^tp_2p_2&{}^tp_2p_3\\
   {}^tp_3p_1&{}^tp_3p_2&{}^tp_3p_3
   \end{pmatrix}
   $$

   的每个元素。
2. 分别将

   $$
   A(\alpha_1,\alpha_2,\alpha_3)p_1,\quad
   A(\alpha_1,\alpha_2,\alpha_3)p_2,\quad
   A(\alpha_1,\alpha_2,\alpha_3)p_3
   $$

   表示成 $x_1p_1+x_2p_2+x_3p_3$ 的形式，其中 $x_1,x_2,x_3$ 要用 $\alpha_1,\alpha_2,\alpha_3$ 和具体实数写出。
3. 求 $A(1,2,3)$ 的全部特征值。
4. 判断 $A(1,2,3)$ 是否为正定矩阵，并说明理由。题面以 ${}^tdAd>0$ 定义正定性；按 Kai 可唯一确认的标准含义，此条件针对任意非零 $d\in\mathbb R^n$（若含 $d=0$，严格不等式不可能成立）。
5. 给出 $A(\alpha_1,\alpha_2,\alpha_3)$ 为半正定矩阵时，$\alpha_1,\alpha_2,\alpha_3$ 所满足的必要充分条件，并说明理由。

## **Kai**

(1)

$$
\begin{pmatrix}
{}^t p_1p_1 & {}^t p_1p_2 & {}^t p_1p_3\\
{}^t p_2p_1 & {}^t p_2p_2 & {}^t p_2p_3\\
{}^t p_3p_1 & {}^t p_3p_2 & {}^t p_3p_3
\end{pmatrix}
=
\begin{pmatrix}
2 & -1 & 0\\
-1 & 2 & -1\\
0 & -1 & 1
\end{pmatrix}.
$$

(2)

$$
\begin{aligned}
A(\alpha_1,\alpha_2,\alpha_3)p_1
&=2\alpha_1p_1-\alpha_2p_2,\\
A(\alpha_1,\alpha_2,\alpha_3)p_2
&=-\alpha_1p_1+2\alpha_2p_2-\alpha_3p_3,\\
A(\alpha_1,\alpha_2,\alpha_3)p_3
&=-\alpha_2p_2+\alpha_3p_3.
\end{aligned}
$$

実際， $P=(p_1,p_2,p_3)$ とおけば
$A=P\operatorname{diag}(\alpha_1,\alpha_2,\alpha_3){}^tP$ であり，
上の係数は (1) の内積から得られる。

(3)

$\alpha_1=1,\alpha_2=2,\alpha_3=3$ を代入すると

$$
A(1,2,3)
=
\begin{pmatrix}
3 & -2 & 1\\
-2 & 5 & 0\\
1 & 0 & 1
\end{pmatrix}
.
$$

その固有方程式は

$$
\lambda^3-9\lambda^2+18\lambda-6=0
$$

$\theta=\frac13\arccos(1/\sqrt3)$ とおけば，3つの固有値は

$$
\lambda_k=3+2\sqrt3\cos\left(\theta+\frac{2k\pi}{3}\right)
\qquad(k=0,1,2)
$$

である（近似値は $0.415775,\,2.294280,\,6.289945$ ）。

(4)

対称行列 $A(1,2,3)$ の首座主小行列式は

$$
3,\qquad
\begin{vmatrix}3&-2\\-2&5\end{vmatrix}=11,\qquad
\det A(1,2,3)=6
$$

であり，すべて正である。したがって Sylvester の判定法により
$A(1,2,3)$ は正定値行列である。

(5)

$P=(p_1,p_2,p_3)$ とおくと $\det P=1$ なので $P$ は正則であり，

$$
A(\alpha_1,\alpha_2,\alpha_3)
=P\operatorname{diag}(\alpha_1,\alpha_2,\alpha_3){}^tP
$$

と書ける。任意の $d\in\mathbb R^3$ に対して

$$
{}^tdA(\alpha_1,\alpha_2,\alpha_3)d
=\alpha_1({}^tp_1d)^2+\alpha_2({}^tp_2d)^2+\alpha_3({}^tp_3d)^2.
$$

$P$ が正則であるから， $({}^tp_1d,{}^tp_2d,{}^tp_3d)$ は
$\mathbb R^3$ のすべての値をとる。よって半正定値であるための必要十分条件は

$$
\alpha_1\ge 0,\quad
\alpha_2\ge 0,\quad
\alpha_3\ge 0
$$

である。
