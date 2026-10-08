---
sidebar_label: "2016年8月実施 基礎科目 [2]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Gaussian-Elimination
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [2]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実行列

$$
A=
\begin{pmatrix}
1&-2&-1&1&0\\
-2&5&3&-2&1\\
1&1&2&0&-1\\
5&0&5&3&2
\end{pmatrix}
$$

について、以下の問に答えよ。

(i) 連立一次方程式 $A(x_1,x_2,x_3,x_4,x_5)^{\mathsf T}=(0,0,0,0)^{\mathsf T}$ の解をすべて求めよ。

(ii) 連立一次方程式 $A(x_1,x_2,x_3,x_4,x_5)^{\mathsf T}=(0,-1,1,c)^{\mathsf T}$ が解を持つような実数 $c$ をすべて求めよ。

#### 题目描述

给定实矩阵

$$
A=
\begin{pmatrix}
1&-2&-1&1&0\\
-2&5&3&-2&1\\
1&1&2&0&-1\\
5&0&5&3&2
\end{pmatrix}.
$$

(i) 求齐次方程组 $A(x_1,x_2,x_3,x_4,x_5)^{\mathsf T}=0$ 的全部解。

(ii) 求使 $A(x_1,x_2,x_3,x_4,x_5)^{\mathsf T}=(0,-1,1,c)^{\mathsf T}$ 有解的全部实数 $c$。

## **Kai**

### (i)

行基本変形により

$$
A\sim
\begin{pmatrix}
1&0&1&0&-2\\
0&1&1&0&1\\
0&0&0&1&4\\
0&0&0&0&0
\end{pmatrix}.
$$

したがって、$x_3=s,\ x_5=t$ と置けば、解は

$$
\boxed{
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\\x_5\end{pmatrix}
=s\begin{pmatrix}-1\\-1\\1\\0\\0\end{pmatrix}
+t\begin{pmatrix}2\\-1\\0\\-4\\1\end{pmatrix},
\qquad s,t\in\mathbb R
}.
$$

### (ii)

$A$ の第 $j$ 行を $R_j$ と書くと、

$$
R_4=11R_1+4R_2+2R_3
$$

である。よって解が存在するためには

$$
c=11\cdot0+4(-1)+2\cdot1=-2
$$

が必要である。一方、$c=-2$ のとき

$$
A\begin{pmatrix}2\\-1\\0\\-4\\0\end{pmatrix}
=\begin{pmatrix}0\\-1\\1\\-2\end{pmatrix}
$$

となるので、この条件は十分でもある。したがって $\boxed{c=-2}$ である。

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 2–3ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
