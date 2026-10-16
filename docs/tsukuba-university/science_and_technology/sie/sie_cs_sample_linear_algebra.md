---
sidebar_label: "情報理工学位プログラム 問題例 線形代数"
tags:
  - Tsukuba-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---

# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 問題例 線形代数

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html) refined with GPT 6 Astra)

## **Description**

行列 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$ について、以下の (a)～(e) を選択肢から選べ。

**問1** $A$ の固有値は $\lambda_1=(a)$ と $\lambda_2=(b)$ である。ただし $\lambda_1>\lambda_2$ とする。

**問2** 直交行列

$$
X=\frac1{\sqrt{(c)}}\begin{pmatrix}1&1\\(d)&(e)\end{pmatrix}
$$

を用いて、$X^{\mathsf T}AX=\operatorname{diag}(\lambda_1,\lambda_2)$ と対角化できる。

選択肢（複数回使用可）：① $1$、② $2$、③ $3$、④ $4$、⑤ $5$、⑥ $-1$、⑦ $-2$、⑧ $-3$、⑨ $-4$、⑩ $-5$。

#### 题目描述

对于矩阵 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$，求按大小排列的两个特征值 $\lambda_1>\lambda_2$，并补全上述正交矩阵 $X$ 中的 (c)、(d)、(e)，使 $X^{\mathsf T}AX=\operatorname{diag}(\lambda_1,\lambda_2)$。各空从日文题面的十个数值中选择，允许重复。

## **Kai**

### 問1

$$
\det(\lambda I-A)=(\lambda-1)^2-4=(\lambda-3)(\lambda+1).
$$

したがって、$\boxed{(a)=3\text{（③）},\ (b)=-1\text{（⑥）}}$。

### 問2

固有値 $3,-1$ に対応する単位固有ベクトルは、それぞれ $\frac1{\sqrt2}(1,1)^{\mathsf T}$、$\frac1{\sqrt2}(1,-1)^{\mathsf T}$ である。よって、

$$
X=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad
\boxed{(c)=2\text{（②）},\ (d)=1\text{（①）},\ (e)=-1\text{（⑥）}}.
$$

## **Reference**

- [大学公式問題（PDF 2ページ）](https://www.cs.tsukuba.ac.jp/admission/problem.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html)
