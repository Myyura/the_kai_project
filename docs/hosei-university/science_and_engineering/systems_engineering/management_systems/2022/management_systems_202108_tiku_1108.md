---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Hosei-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

数列 $\{a_n\}_{n\geq 1}, \{b_n\}_{n\geq 1}, \{c_n\}_{n\geq 1}$ が次の漸化式をみたしているとする。

$$
\begin{pmatrix} a_{i+1} \\ b_{i+1} \\ c_{i+1} \end{pmatrix} = \frac{1}{3} A \begin{pmatrix} a_i \\ b_i \\ c_i \end{pmatrix}, \quad A = \begin{pmatrix} 0 & -2 & -2 \\ 2 & 3 & 0 \\ -1 & 0 & 3 \end{pmatrix}
$$

(1) $A$ の固有値、およびその固有値に対する固有ベクトルをそれぞれ一つ求めよ。
(2) $a_1 = 1, b_1 = -1, c_1 = 1$ とするとき、

$$
\lim_{n\to\infty} a_n, \quad \lim_{n\to\infty} b_n, \quad \lim_{n\to\infty} c_n
$$

を求めよ。
(3) $B = \frac{1}{2} A$ とする。 $v = {^t}(p, q, r)$ として、

$$
B^n v = \begin{pmatrix} p_n \\ q_n \\ r_n \end{pmatrix}
$$

とする。このとき、 $\lim_{n\to\infty} p_n, \lim_{n\to\infty} q_n, \lim_{n\to\infty} r_n$ のすべてが有限の値に収束するための $p, q, r$ に関する条件を求めよ。ただし、 $p, q, r$ についての1次式に関する条件で表すこと。ここで ${^t}u$ は $u$ の転置を表すものとする。

### 题目描述

数列 $\{a_n\}_{n\ge1},\{b_n\}_{n\ge1},\{c_n\}_{n\ge1}$ 满足递推关系

$$
\begin{pmatrix}
a_{i+1}\\b_{i+1}\\c_{i+1}
\end{pmatrix}
=\frac13A
\begin{pmatrix}
a_i\\b_i\\c_i
\end{pmatrix},
\qquad
A=
\begin{pmatrix}
0&-2&-2\\
2&3&0\\
-1&0&3
\end{pmatrix}.
$$

（1）求 $A$ 的全部特征值，并对每个特征值各求一个对应的特征向量。

（2）当 $a_1=1,\ b_1=-1,\ c_1=1$ 时，求

$$
\lim_{n\to\infty}a_n,\qquad
\lim_{n\to\infty}b_n,\qquad
\lim_{n\to\infty}c_n.
$$

（3）令 $B=\frac12A$，并令 $v={}^{t}(p,q,r)$。定义

$$
B^nv=
\begin{pmatrix}
p_n\\q_n\\r_n
\end{pmatrix}.
$$

求使

$$
\lim_{n\to\infty}p_n,\qquad
\lim_{n\to\infty}q_n,\qquad
\lim_{n\to\infty}r_n
$$

全部收敛到有限值的 $p,q,r$ 的条件，并将条件表示为关于 $p,q,r$ 的一次式。这里 ${}^{t}u$ 表示 $u$ 的转置。

## **Kai**

(1) 行列 $A$ の固有値および固有ベクトルを求める．

固有多項式は

$$
\det(A-\lambda I)
=
\begin{vmatrix}
-\lambda & -2 & -2\\
2 & 3-\lambda & 0\\
-1 & 0 & 3-\lambda
\end{vmatrix}
=-(\lambda-1)(\lambda-2)(\lambda-3),
$$

より

$$
\boxed{\lambda_1=1,\quad \lambda_2=2,\quad \lambda_3=3}.
$$

それぞれについて $(A-\lambda I)v=0$ を解くと，例えば

$$
v_1=
\begin{pmatrix}
2\\ -2\\ 1
\end{pmatrix} \ (\lambda_1=1),
\quad
v_2=
\begin{pmatrix}
1\\ -2\\ 1
\end{pmatrix} \ (\lambda_2=2),
\quad
v_3=
\begin{pmatrix}
0\\ -1\\ 1
\end{pmatrix} \ (\lambda_3=3)
$$

を固有ベクトルとして取ることができる．

(2) $a_1=1,\ b_1=-1,\ c_1=1$ のときの極限を求める．

$$
x_1=
\begin{pmatrix}
1\\ -1\\ 1
\end{pmatrix}
=\alpha_1 v_1+\alpha_2 v_2+\alpha_3 v_3
$$

とおくと

$$
\alpha_1=1,\quad \alpha_2=-1,\quad \alpha_3=1
$$

となる．

$$
M=\frac13A
$$

の固有値は

$$
\mu_1=\frac13,\quad \mu_2=\frac23,\quad \mu_3=1
$$

であり，固有ベクトルは $v_1,v_2,v_3$ のままである．したがって

$$
x_n=M^{\,n-1}x_1
=\alpha_1\mu_1^{\,n-1}v_1+\alpha_2\mu_2^{\,n-1}v_2+\alpha_3\mu_3^{\,n-1}v_3
=\Big(\frac13\Big)^{n-1}v_1-\Big(\frac23\Big)^{n-1}v_2+v_3.
$$

$n\to\infty$ で

$$
(1/3)^{n-1}\to0,\ (2/3)^{n-1}\to0
$$

より

$$
\lim_{n\to\infty}x_n=v_3=
\begin{pmatrix}
0\\ -1\\ 1
\end{pmatrix}.
$$

従って

$$
\boxed{
\lim_{n\to\infty}a_n=0,\quad
\lim_{n\to\infty}b_n=-1,\quad
\lim_{n\to\infty}c_n=1 }.
$$

(3) $B=\dfrac12A$ とし， $v={}^{t}(p,q,r)$ ，

$$
B^{n}v=
\begin{pmatrix}
p_n\\ q_n\\ r_n
\end{pmatrix}
$$

とおく．

$B$ の固有値は

$$
\tilde{\lambda}_1=\frac12,\quad
\tilde{\lambda}_2=1,\quad
\tilde{\lambda}_3=\frac32
$$

であり，固有ベクトルはやはり $v_1,v_2,v_3$ である．

$$
v=\beta_1 v_1+\beta_2 v_2+\beta_3 v_3
$$

とすると

$$
B^n v
=\beta_1\Big(\frac12\Big)^n v_1
+\beta_2\cdot 1^{n} v_2
+\beta_3\Big(\frac32\Big)^n v_3.
$$

$\left(p_n,q_n,r_n\right)$ の各成分が有界な値に収束するためには，
$\bigl(\tfrac32\bigr)^n$ の項が存在してはならないので

$$
\beta_3=0
$$

が必要十分条件である．すなわち $v$ は $v_1,v_2$ の張る平面上にある必要がある．

$v_1,v_2$ に直交するベクトルとして

$$
w=
\begin{pmatrix}
0\\ 1\\ 2
\end{pmatrix}
$$

を取ると，

$$
w\cdot v_1=0,\quad w\cdot v_2=0
$$

が成り立つので，

$$
v\in\mathrm{span}\{v_1,v_2\}
\iff w\cdot v=0
\iff 0\cdot p+1\cdot q+2\cdot r=0.
$$

したがって必要十分条件は

$$
\boxed{q+2r=0\quad(\text{すなわち }q=-2r,\;p\text{ は任意})}.
$$
