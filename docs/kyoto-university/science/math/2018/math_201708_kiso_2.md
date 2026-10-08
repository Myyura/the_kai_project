---
sidebar_label: "2017年8月実施 基礎科目 [2]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Rank-Criterion-for-Linear-System-Consistency
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [2]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$a,b$ を実数とする。実行列

$$
A=
\begin{pmatrix}
1&1&a&b\\
0&1&2&0\\
2&0&1&4
\end{pmatrix}
$$

について、以下の問に答えよ。

(1) 行列 $A$ の階数を求めよ。

(2) 連立一次方程式

$$
A\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}
=\begin{pmatrix}1\\1\\1\end{pmatrix}
$$

が解を持つような実数 $a,b$ をすべて求めよ。

#### 题目描述

设 $a,b\in\mathbb R$，给定矩阵

$$
A=
\begin{pmatrix}
1&1&a&b\\
0&1&2&0\\
2&0&1&4
\end{pmatrix}.
$$

(1) 求 $A$ 的秩。

(2) 求使方程组 $A(x_1,x_2,x_3,x_4)^{\mathsf T}=(1,1,1)^{\mathsf T}$ 有解的全部参数 $(a,b)$。

## **Kai**

### (1)

$R_3\leftarrow R_3-2R_1+2R_2$ という行基本変形によって、

$$
A\sim
\begin{pmatrix}
1&1&a&b\\
0&1&2&0\\
0&0&5-2a&4-2b
\end{pmatrix}.
$$

上の二行は常に一次独立なので、

$$
\boxed{
\operatorname{rank}A=
\begin{cases}
2,&(a,b)=(5/2,2),\\
3,&(a,b)\ne(5/2,2).
\end{cases}
}
$$

### (2)

同じ変形を拡大係数行列に施すと、

$$
\left(
\begin{array}{cccc|c}
1&1&a&b&1\\
0&1&2&0&1\\
0&0&5-2a&4-2b&1
\end{array}
\right)
$$

を得る。$(a,b)=(5/2,2)$ なら最終行は $0=1$ となるため、解は存在しない。それ以外なら最終行を満たす $x_3,x_4$ を選べ、次に第二行、第一行から $x_2,x_1$ を順に定められる。したがって求める条件は

$$
\boxed{(a,b)\in\mathbb R^2\setminus\{(5/2,2)\}}.
$$

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
