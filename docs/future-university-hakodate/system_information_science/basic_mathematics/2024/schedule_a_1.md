---
sidebar_label: "2024年度 A日程 基礎数学 I"
tags:
  - Future-University-Hakodate
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Limit
---
# 公立はこだて未来大学 システム情報科学研究科 2024年度 A日程 基礎数学 I

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
$n$ を自然数とし、

$$
A_n=\begin{pmatrix}1&\dfrac1n\\[2mm]\dfrac1n&1\end{pmatrix}
$$

とする。$\displaystyle\lim_{n\to\infty}A_n^n$ を求めよ。

## **Kai**

$A_n$ の固有値と対応する正規直交固有ベクトルは

$$
1-\frac1n,\ \frac1{\sqrt2}\binom{1}{-1};\qquad
1+\frac1n,\ \frac1{\sqrt2}\binom{1}{1}.
$$

よって

$$
A_n^n=P
\begin{pmatrix}
(1-1/n)^n&0\\0&(1+1/n)^n
\end{pmatrix}P^{-1},\qquad
P=\frac1{\sqrt2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}.
$$

したがって

$$
\boxed{
\lim_{n\to\infty}A_n^n
=\frac12\begin{pmatrix}
e+e^{-1}&e-e^{-1}\\
e-e^{-1}&e+e^{-1}
\end{pmatrix}}
$$

である。

## **Reference**
- [公立はこだて未来大学 過去の大学院入試問題](https://www.fun.ac.jp/past-graduate-school-exam)
- [公立はこだて未来大学 2024年度 A日程 公式問題 PDF](https://www.fun.ac.jp/wp-content/uploads/2024/01/R05.8.pdf)
