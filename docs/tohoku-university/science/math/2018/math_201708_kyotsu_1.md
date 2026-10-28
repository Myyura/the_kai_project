---
sidebar_label: "2017年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Characteristic-Polynomial
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
  - Mathematics.Linear-Algebra.Generalized-Eigenvectors-and-Invariant-Subspaces
---

# 東北大学 理学研究科 数学専攻 2017年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#a72eb977-0b94-4615-940e-5ecb0587aac5) refined with GPT 6 Astra)

## **Description**

$\mathbb R$、$\mathbb C$ はそれぞれ実数全体、複素数全体のなす集合を表す。

$a$ を実数とする。$3$ 次実正方行列

$$
A=\begin{pmatrix}2&a&-1\\0&2&1\\-1&8&-1\end{pmatrix}
$$

に対して、線形写像 $f_A:\mathbb R^3\to\mathbb R^3$ を $x\mapsto Ax$ により定める。以下の問いに答えよ。

(1) 行列 $A$ の固有多項式 $p_A(x)$ を求めよ。

(2) 行列 $A$ を複素行列によって対角化できないような実数 $a$ をすべて求めよ。

(3) $a$ を (2) で求めたものとする。各 $a$ に対して、$\mathbb R^3$ の $1$ 次元部分空間 $W$ で次の $2$ つの性質を同時に満たすものを与えよ。

(a) $f_A(W)\subset W$。

(b) $f_A$ が誘導する線形写像 $\widetilde f_A:\mathbb R^3/W\to\mathbb R^3/W$ の表現行列は対角化可能である。

### 题目描述

$\mathbb R$、$\mathbb C$ 分别表示实数集和复数集。

设 $a$ 为实数。对于三阶实方阵

$$
A=\begin{pmatrix}2&a&-1\\0&2&1\\-1&8&-1\end{pmatrix},
$$

以 $x\mapsto Ax$ 定义线性映射 $f_A:\mathbb R^3\to\mathbb R^3$。回答下列问题。

(1) 求矩阵 $A$ 的特征多项式 $p_A(x)$。

(2) 求所有使矩阵 $A$ 不能通过复矩阵对角化的实数 $a$。

(3) 对第 (2) 问中求出的每个 $a$，给出 $\mathbb R^3$ 的一个一维子空间 $W$，使以下两个条件同时成立。

(a) $f_A(W)\subset W$。

(b) $f_A$ 诱导的线性映射 $\widetilde f_A:\mathbb R^3/W\to\mathbb R^3/W$ 的表示矩阵可以对角化。

## **Kai**

### (1)

$$
\begin{aligned}
p_A(t)=\det(tI-A)&=\det\begin{pmatrix}t-2&-a&1\\0&t-2&-1\\1&-8&t+1\end{pmatrix}\\
&=t^3-3t^2-9t+a+22.
\end{aligned}
$$

### (2)

$p(t)=t^3-3t^2-9t+a+22$ とおく。重根がなければ $A$ は複素数体上で対角化可能である。重根は

$$
p'(t)=3(t-3)(t+1)
$$

の根でもあるので、$p(3)=a-5=0$ または $p(-1)=a+27=0$ が必要である。

$a=5$ のときは $p(t)=(t-3)^2(t+3)$ であり、

$$
\ker(A-3I)=\mathbb C\begin{pmatrix}4\\1\\1\end{pmatrix}.
$$

$a=-27$ のときは $p(t)=(t+1)^2(t-5)$ であり、

$$
\ker(A+I)=\mathbb C\begin{pmatrix}-8\\-1\\3\end{pmatrix}.
$$

どちらも重複度 $2$ の固有値に対する固有空間の次元が $1$ なので、対角化不可能である。従って求める値は $a=5,-27$ である。

### (3)

重根を $\lambda$、残りの固有値を $\mu$ とする。(2) より $\lambda$ の固有空間は一次元なので、$A$ のジョルダン標準形から、実ベクトル空間 $\mathbb R^3$ の基底 $v,w,u$ で

$$
Av=\lambda v,\qquad Aw=\lambda w+v,\qquad Au=\mu u
$$

を満たすものが存在する。ただし

$$
(\lambda,\mu)=\begin{cases}(3,-3)&(a=5),\\(-1,5)&(a=-27).\end{cases}
$$

一次元部分空間 $W$ が $A$ に関して不変ならば、その非零元は固有ベクトルであるから、$W=\mathbb Rv$ または $W=\mathbb Ru$ である。

$W=\mathbb Rv$ の場合、商空間の基底 $[w],[u]$ に関する誘導写像の表現行列は $\operatorname{diag}(\lambda,\mu)$ である。従って対角化可能である。一方、$W=\mathbb Ru$ の場合、商空間の基底 $[v],[w]$ に関する表現行列は

$$
\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}
$$

であり、対角化不可能である。従って求める部分空間は

$$
\begin{cases}
W=\mathbb R\,{}^t(4,1,1)&(a=5),\\
W=\mathbb R\,{}^t(-8,-1,3)&(a=-27).
\end{cases}
$$

## **Reference**

- [東北大学原問題の公開保存版（2018年度・共通問題、kyotsu2018(H30).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度の解答](https://note.com/normalmath/n/n89152917de11#a72eb977-0b94-4615-940e-5ecb0587aac5)
