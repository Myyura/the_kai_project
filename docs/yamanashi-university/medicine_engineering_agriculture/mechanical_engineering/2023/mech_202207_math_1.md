---
sidebar_label: "2022年7月実施 前期募集 数学 問1"
tags:
  - Yamanashi-University
  - Mathematics.Linear-Algebra.Commuting-Matrices
---

# 山梨大学 医工農学総合教育部 工学専攻 機械工学コース 2022年7月実施 前期募集 数学 問1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html) refined with GPT 6 Astra)

## **Description**

実数 $\lambda,a,b,c,d,e,f,g,h,i$ に対して

$$
A=\begin{pmatrix}\lambda&0&1\\0&\lambda&0\\1&1&\lambda\end{pmatrix},\qquad
X=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}
$$

とおく。$AX=XA$ を満たすとき、$a,b,c,d,e,f,g,h,i$ のうち必ず $0$ になるものをすべて答えよ。

#### 题目描述

给定实数矩阵 $A,X$ 如上。在 $AX=XA$ 条件下，求 $a,b,c,d,e,f,g,h,i$ 中所有必为零的元素。

## **Kai**

$A=\lambda I+N$ とおけば、$AX=XA$ は $NX=XN$ と同値である。

$$
NX-XN=\begin{pmatrix}
g-c&h-c&i-a\\
-f&-f&-d\\
a+d-i&b+e-i&c+f-g
\end{pmatrix}.
$$

したがって

$$
d=f=0,\qquad g=h=c,\qquad i=a,\qquad e=a-b.
$$

$a,b,c$ は自由に選べるので、必ず $0$ となる成分は $\boxed{d,f}$ のみである。

## **Reference**

- [山梨大学公式問題（PDF 2頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05M1_1TM.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html)
- [山梨大学募集要項（試験日：25頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05_mt_yoko_j.pdf)
