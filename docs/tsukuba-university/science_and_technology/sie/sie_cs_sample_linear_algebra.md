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

行列 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$ について，以下の (a) から (e) を選択肢から選びなさい。

**問1** $A$ の固有値は $\lambda_1=(a)$ と $\lambda_2=(b)$ である（ただし $\lambda_1>\lambda_2$）。

**問2** $A$ は直交行列

$$
X=\frac{1}{\sqrt{(c)}}\begin{pmatrix}1&1\\(d)&(e)\end{pmatrix}
$$

を用いて

$$
X^{\mathsf T}AX=\begin{pmatrix}\lambda_1&0\\0&\lambda_2\end{pmatrix}
$$

と対角化できる。

選択肢（複数回使用しても良い。）

① $1$、② $2$、③ $3$、④ $4$、⑤ $5$、⑥ $-1$、⑦ $-2$、⑧ $-3$、⑨ $-4$、⑩ $-5$

### 题目描述

对于矩阵 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$，从选项中选择填入以下 (a) 至 (e) 的内容。

**问1** $A$ 的特征值为 $\lambda_1=(a)$、$\lambda_2=(b)$，其中 $\lambda_1>\lambda_2$。

**问2** 利用正交矩阵

$$
X=\frac{1}{\sqrt{(c)}}\begin{pmatrix}1&1\\(d)&(e)\end{pmatrix},
$$

可以将 $A$ 对角化为

$$
X^{\mathsf T}AX=\begin{pmatrix}\lambda_1&0\\0&\lambda_2\end{pmatrix}.
$$

选项（可以重复使用）：

① $1$、② $2$、③ $3$、④ $4$、⑤ $5$、⑥ $-1$、⑦ $-2$、⑧ $-3$、⑨ $-4$、⑩ $-5$

## **Kai**

### 問1

$$
\begin{gathered}
\det(\lambda I-A)=(\lambda-1)^2-4\\
=(\lambda-3)(\lambda+1).
\end{gathered}
$$

したがって、$\boxed{(a)=3\text{（③）},\ (b)=-1\text{（⑥）}}$。

### 問2

固有値 $3,-1$ に対応する単位固有ベクトルは、それぞれ $\frac1{\sqrt2}(1,1)^{\mathsf T}$、$\frac1{\sqrt2}(1,-1)^{\mathsf T}$ である。よって、

$$
\begin{gathered}
X=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\\
\boxed{(c)=2\text{（②）},\ (d)=1\text{（①）},\ (e)=-1\text{（⑥）}}.
\end{gathered}
$$

## **Reference**

- [大学公式問題（PDF 2ページ）](https://www.cs.tsukuba.ac.jp/admission/problem.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E6%83%85%E5%A0%B1%E7%94%9F%E5%91%BD%E5%AD%A6%E8%A1%93%E9%99%A2_%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%BE%A4_%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E4%BD%8D%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%95%8F%E9%A1%8C%E4%BE%8B_%E7%B7%9A%E5%BD%A2%E4%BB%A3%E6%95%B0.html)
