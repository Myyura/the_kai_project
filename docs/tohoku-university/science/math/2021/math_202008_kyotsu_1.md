---
sidebar_label: "2020年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Trace
  - Mathematics.Linear-Algebra.Invariant-Subspace-and-Restricted-Operator
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#20989d20-1e0a-4b03-bd9b-9b2955337115) refined with GPT 6 Astra)

## **Description**

$\mathbb R$ は実数全体のなす集合を表す。

$V$ を $2$ 次実正方行列全体のなす線形空間とし、$V$ の部分空間 $W$ を

$$
W=\{Z\in V\mid\operatorname{tr}(Z)=0\}
$$

と定める。ただし、$\operatorname{tr}(Z)$ は $Z$ のトレースのことである。$2$ 次実正方行列 $A=\begin{pmatrix}10&1\\-4&5\end{pmatrix}$ に対して

$$
f(X)=AX-XA
$$

で線形写像 $f:V\to V$ を定める。以下の問いに答えよ。

(1) $f(W)\subset W$ を示せ。

(2) $f$ を $W$ 上に制限した線形写像を $g:W\to W$ と表す。$W$ の基底

$$
e_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad e_2=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad e_3=\begin{pmatrix}0&0\\1&0\end{pmatrix}
$$

に関する $g$ の表現行列 $R$ を求めよ。

(3) (2) で求めた行列 $R$ の固有値をすべて求めよ。

### 题目描述

$\mathbb R$ 表示实数集。

设 $V$ 为全体二阶实方阵组成的线性空间，并定义其子空间

$$
W=\{Z\in V\mid\operatorname{tr}(Z)=0\},
$$

其中 $\operatorname{tr}(Z)$ 表示 $Z$ 的迹。对于二阶实方阵 $A=\begin{pmatrix}10&1\\-4&5\end{pmatrix}$，通过

$$
f(X)=AX-XA
$$

定义线性映射 $f:V\to V$。回答下列问题。

(1) 证明 $f(W)\subset W$。

(2) 将 $f$ 在 $W$ 上的限制记为 $g:W\to W$。求 $g$ 关于 $W$ 的基

$$
e_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad e_2=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad e_3=\begin{pmatrix}0&0\\1&0\end{pmatrix}
$$

的表示矩阵 $R$。

(3) 求第 (2) 问中矩阵 $R$ 的全部特征值。

## **Kai**

### (1)

任意の $Z\in W$ について、トレースの巡回性から

$$
\operatorname{tr}(f(Z))=\operatorname{tr}(AZ)-\operatorname{tr}(ZA)=0.
$$

したがって $f(Z)\in W$、すなわち $f(W)\subset W$ である。

### (2)

直接計算すると

$$
\begin{aligned}
g(e_1)&=\begin{pmatrix}0&-2\\-8&0\end{pmatrix}=-2e_2-8e_3,\\
g(e_2)&=\begin{pmatrix}4&5\\0&-4\end{pmatrix}=4e_1+5e_2,\\
g(e_3)&=\begin{pmatrix}1&0\\-5&-1\end{pmatrix}=e_1-5e_3.
\end{aligned}
$$

よって表現行列は

$$
R=\begin{pmatrix}0&4&1\\-2&5&0\\-8&0&-5\end{pmatrix}.
$$

### (3)

$$
\det(tI-R)=\det\begin{pmatrix}t&-4&-1\\2&t-5&0\\8&0&t+5\end{pmatrix}
=t(t^2-9).
$$

したがって固有値は $0,3,-3$ である。

## **Reference**

- [東北大学原問題の公開保存版（2021年度・共通問題、2021(R3)kyotsu.pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度の解答](https://note.com/normalmath/n/n89152917de11#20989d20-1e0a-4b03-bd9b-9b2955337115)
