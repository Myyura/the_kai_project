---
sidebar_label: '2011年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---

# 東京大学 工学系研究科 2011年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実対称行列 $A=\begin{pmatrix}0&-1&-1\\-1&0&-1\\-1&-1&\alpha\end{pmatrix}$（$\alpha\ge0$）を考える。

I. $\alpha=5/2$ のとき、すべての固有値と対応する大きさ $1$ の固有ベクトルを求めよ。

II. $\alpha>0$ とし、固有値を $\lambda_1,\lambda_2,\lambda_3$ とする。
(1) これらを $\alpha$ で表し、すべて異なることを示せ。
(2) $\lim_{\alpha\to\infty}\max_j\lambda_j/\alpha$ を求めよ。
(3) $\lim_{\alpha\downarrow0}\min_j\lambda_j$ を求めよ。

III. $\alpha=0$ のとき $A^n$ の全成分を求めよ。$n$ は正の整数とする。

#### 题目描述

设 $A=\begin{pmatrix}0&-1&-1\\-1&0&-1\\-1&-1&\alpha\end{pmatrix}$，$\alpha\ge0$。

I. 当 $\alpha=5/2$ 时，求全部特征值及对应的单位特征向量。

II. 当 $\alpha>0$ 时，将全部特征值记为 $\lambda_1,\lambda_2,\lambda_3$。
(1) 用 $\alpha$ 表示它们并证明互不相同；(2) 求 $\lim_{\alpha\to\infty}\max_j\lambda_j/\alpha$；
(3) 求 $\lim_{\alpha\downarrow0}\min_j\lambda_j$。

III. 当 $\alpha=0$ 时，求 $A^n$ 的全部元素，$n$ 为正整数。

## **Kai**

### I–II

$\boldsymbol u=(1,-1,0)^T$ は固有値 $1$ に対応する。
不変部分空間 $x=y$ でベクトルを $(x,x,z)^T$ とおくと、特性方程式は
$(\lambda+1)(\lambda-\alpha)-2=0$ となる。従って、

$$
\boxed{\lambda_1=1,\quad
\lambda_\pm=\frac{\alpha-1\pm\sqrt{\alpha^2+2\alpha+9}}2}.
$$

$\alpha>0$ では $\lambda_-<0<1<\lambda_+$ であり、三つの固有値は互いに異なる。
$\alpha=5/2$ のとき、固有値と単位固有ベクトルはすべて次の通りである。

$$
\boxed{\begin{array}{c|c}
1&\pm(1,-1,0)^T/\sqrt2\\
3&\pm(1,1,-4)^T/\sqrt{18}\\
-3/2&\pm(2,2,1)^T/3
\end{array}}.
$$

一般式から直ちに、

$$
\boxed{\lim_{\alpha\to\infty}\frac{\lambda_+}{\alpha}=1,\qquad
\lim_{\alpha\downarrow0}\lambda_-=-2}.
$$

### III

このとき $A=I-J$ である。$J$ は全成分が $1$ の行列で、$P=J/3$ は $(1,1,1)^T$ 方向への直交射影である。
従って、

$$
\boxed{A^n=(I-P)+(-2)^nP=I+\frac{(-2)^n-1}{3}J}.
$$

すなわち対角成分は $[2+(-2)^n]/3$、非対角成分は $[(-2)^n-1]/3$ である。
