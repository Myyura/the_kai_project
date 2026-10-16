---
sidebar_label: "2022年7月実施 前期募集 数学 問2"
tags:
  - Yamanashi-University
  - Mathematics.Linear-Algebra.Linear-Transformation
---

# 山梨大学 医工農学総合教育部 工学専攻 機械工学コース 2022年7月実施 前期募集 数学 問2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html) refined with GPT 6 Astra)

## **Description**

線形写像 $f:\mathbb R^3\to\mathbb R^2$、$g:\mathbb R^2\to\mathbb R^2$ を

$$
f\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}2x_1-x_2\\3x_2+2x_3\end{pmatrix},\qquad
g\begin{pmatrix}y_1\\y_2\end{pmatrix}
=\begin{pmatrix}y_1+3y_2\\-2y_1+y_2\end{pmatrix}
$$

と定める。

(1) $f(\boldsymbol x)=A\boldsymbol x,\ g(\boldsymbol y)=B\boldsymbol y$ を満たす表現行列を求めよ。

(2) 合成写像 $g\circ f$ の表現行列が $C=BA$ になることを示し、$C$ を求めよ。

#### 题目描述

线性映射 $f,g$ 如上。(1) 求满足 $f(\boldsymbol x)=A\boldsymbol x,\ g(\boldsymbol y)=B\boldsymbol y$ 的表示矩阵；(2) 证明复合映射 $g\circ f$ 的矩阵为 $C=BA$，并求 $C$。

## **Kai**

### (1)

各成分の係数を並べると

$$
\boxed{A=\begin{pmatrix}2&-1&0\\0&3&2\end{pmatrix}},\qquad
\boxed{B=\begin{pmatrix}1&3\\-2&1\end{pmatrix}}.
$$

### (2)

任意の $\boldsymbol x\in\mathbb R^3$ に対して

$$
(g\circ f)(\boldsymbol x)=g(A\boldsymbol x)=B(A\boldsymbol x)=(BA)\boldsymbol x.
$$

よって表現行列は $BA$ であり、

$$
\boxed{C=BA=\begin{pmatrix}2&8&6\\-4&5&2\end{pmatrix}}.
$$

## **Reference**

- [山梨大学公式問題（PDF 2頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05M1_1TM.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html)
- [山梨大学募集要項（試験日：25頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05_mt_yoko_j.pdf)
