---
sidebar_label: "2018年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Limit
---

# 東北大学 理学研究科 数学専攻 2018年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#62ba5a41-1388-4e20-b56f-f4cc3a12d7fc) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb R$ は実数全体のなす集合を表す。

$3$ 次実正方行列

$$
A=\begin{pmatrix}0&-1&1\\-1&0&-1\\1&-1&0\end{pmatrix}
$$

について、以下の問いに答えよ。

(1) 行列 $A$ の固有値をすべて求めよ。また、固有値それぞれに対応する固有空間の基底を $1$ 組求めよ。

(2) 極限

$$
\lim_{n\to\infty}\frac1{2^n}A^n\begin{pmatrix}5\\0\\1\end{pmatrix}
$$

を求めよ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb R$ 表示实数集。

对于三阶实方阵

$$
A=\begin{pmatrix}0&-1&1\\-1&0&-1\\1&-1&0\end{pmatrix},
$$

回答下列问题。

(1) 求矩阵 $A$ 的全部特征值，并对每个特征值，求对应特征空间的一组基。

(2) 求极限

$$
\lim_{n\to\infty}\frac1{2^n}A^n\begin{pmatrix}5\\0\\1\end{pmatrix}.
$$

## **Kai**

### (1)

$$
\det(tI-A)=t^3-3t-2=(t+1)^2(t-2).
$$

固有値 $-1$ については $(A+I)x=0$ が $x_1-x_2+x_3=0$ と同値なので、

$$
E_{-1}=\operatorname{span}_{\mathbb R}
\left\{\begin{pmatrix}1\\0\\-1\end{pmatrix},
\begin{pmatrix}0\\1\\1\end{pmatrix}\right\}.
$$

固有値 $2$ については

$$
E_2=\operatorname{span}_{\mathbb R}
\left\{\begin{pmatrix}1\\-1\\1\end{pmatrix}\right\}.
$$

### (2)

初期ベクトルを固有空間に分解すると

$$
\begin{pmatrix}5\\0\\1\end{pmatrix}
=\begin{pmatrix}3\\2\\-1\end{pmatrix}
+2\begin{pmatrix}1\\-1\\1\end{pmatrix},
\qquad \begin{pmatrix}3\\2\\-1\end{pmatrix}\in E_{-1}.
$$

したがって

$$
\frac{1}{2^n}A^n\begin{pmatrix}5\\0\\1\end{pmatrix}
=\left(-\frac12\right)^n\begin{pmatrix}3\\2\\-1\end{pmatrix}
+2\begin{pmatrix}1\\-1\\1\end{pmatrix}
\longrightarrow\begin{pmatrix}2\\-2\\2\end{pmatrix}.
$$

## **Reference**

- [東北大学原問題の公開保存版（2019年度・共通問題、kyotsu2019(H31).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度の解答](https://note.com/normalmath/n/n89152917de11#62ba5a41-1388-4e20-b56f-f4cc3a12d7fc)
