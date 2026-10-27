---
sidebar_label: "2021年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Generalized-Eigenvectors-and-Invariant-Subspaces
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#18a0c0f1-a5e8-4c70-9ba5-34a97a9392c0) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。

$A$ を次の二条件を満たすような実 $3$ 次正方行列とする。

(i) $v=\begin{pmatrix}1\\2\\3\end{pmatrix}$ は $(A-2I)^2v=0$ かつ $(A-2I)v\ne0$ を満たす。ここで $I$ は $3$ 次単位行列である。

(ii) $e_2=\begin{pmatrix}0\\1\\0\end{pmatrix}$、$e_3=\begin{pmatrix}0\\0\\1\end{pmatrix}$ はともに $A$ の固有値 $2$ の固有ベクトルである。

以下の問いに答えよ。

(1) $(p,q)\ne(0,0)$ を満たす実数 $p,q$ で、$(A-2I)v=pe_2+qe_3$ を満たすものが存在することを示せ。

(2) 前問で得られた実数 $p,q$ について、$A=\begin{pmatrix}2&0&0\\p&2&0\\q&0&2\end{pmatrix}$ が成り立つことを示せ。

### 题目描述

试卷共 $4$ 道题，全部作答。

设 $A$ 为满足以下两个条件的三阶实方阵。

(i) $v=\begin{pmatrix}1\\2\\3\end{pmatrix}$ 满足 $(A-2I)^2v=0$ 且 $(A-2I)v\ne0$，其中 $I$ 为三阶单位矩阵。

(ii) $e_2=\begin{pmatrix}0\\1\\0\end{pmatrix}$、$e_3=\begin{pmatrix}0\\0\\1\end{pmatrix}$ 都是 $A$ 的特征值 $2$ 对应的特征向量。

回答下列问题。

(1) 证明存在实数 $p,q$，满足 $(p,q)\ne(0,0)$ 且 $(A-2I)v=pe_2+qe_3$。

(2) 对于上一问得到的实数 $p,q$，证明 $A=\begin{pmatrix}2&0&0\\p&2&0\\q&0&2\end{pmatrix}$。

## **Kai**

### (1)

固有値 $2$ の固有空間を $E=\ker(A-2I)$ とおく。条件 (ii) より一次独立な $e_2,e_3$ が $E$ に属するので $\dim E\ge2$ である。一方、条件 (i) より $v\notin E$ であるから $\dim E<3$ である。従って

$$
E=\mathbb R e_2\oplus\mathbb R e_3.
$$

$w=(A-2I)v$ とおくと、条件 (i) より $w\ne0$ かつ $(A-2I)w=0$、すなわち $w\in E$ である。よって、ある $p,q\in\mathbb R$ が存在して

$$
(A-2I)v=pe_2+qe_3
$$

となり、$w\ne0$ から $(p,q)\ne(0,0)$ である。

### (2)

$Ae_2=2e_2$、$Ae_3=2e_3$ から、$A$ の第 $2,3$ 列は定まり、

$$
A=\begin{pmatrix}a&0&0\\b&2&0\\c&0&2\end{pmatrix}.
$$

$v={}^t(1,2,3)$ であるから、(1) の等式は

$$
\begin{pmatrix}a-2\\b\\c\end{pmatrix}=\begin{pmatrix}0\\p\\q\end{pmatrix}
$$

となる。よって

$$
A=\begin{pmatrix}2&0&0\\p&2&0\\q&0&2\end{pmatrix},\qquad (p,q)\ne(0,0).
$$

## **Reference**

- [東北大学原問題の公開保存版（2022年度・共通問題、PDF 2ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/6110ccabe6011778aebd2b7b2760cae02ff6a050fb05faeed14330c67bddee6d.pdf#page=2)
- [L^2：2022年度の解答](https://note.com/normalmath/n/n89152917de11#18a0c0f1-a5e8-4c70-9ba5-34a97a9392c0)
