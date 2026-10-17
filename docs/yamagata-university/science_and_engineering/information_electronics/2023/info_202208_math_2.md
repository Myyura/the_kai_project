---
sidebar_label: "2022年8月実施 基礎科目 問題2"
tags:
  - Yamagata-University
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Limit
---

# 山形大学 理工学研究科 情報・エレクトロニクス専攻 2022年8月実施 基礎科目 問題2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_2.html) refined with GPT 6 Astra)

## **Description**

実数 $\lambda$ が $\lambda\ne0$ を満たすとき，3 つの行列：

$$
A=\begin{pmatrix}\lambda-2&1\\-4&\lambda+2\end{pmatrix},\quad
P=\begin{pmatrix}1&0\\2&1\end{pmatrix},\quad
J=\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}
$$

について，次の問いに答えよ。ただし，以下では $n$ を自然数とする。

(1) 逆行列 $P^{-1}$ を求め，$A=PJP^{-1}$ を示せ。

(2) 数学的帰納法を用いて，$J^n=\begin{pmatrix}\lambda^n&n\lambda^{n-1}\\0&\lambda^n\end{pmatrix}$ を示せ。

(3) $A^n=PJ^nP^{-1}$ を示し，$A^n$ を $n$ と $\lambda$ の式で表せ。

(4) $\displaystyle\lim_{n\to\infty}\frac{1}{n\lambda^{n-1}}A^n$ を求めよ。

#### 题目描述

实数 $\lambda$ 满足 $\lambda\ne0$。对于三个矩阵

$$
A=\begin{pmatrix}\lambda-2&1\\-4&\lambda+2\end{pmatrix},\quad
P=\begin{pmatrix}1&0\\2&1\end{pmatrix},\quad
J=\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix},
$$

回答以下问题。其中 $n$ 为自然数。

(1) 求逆矩阵 $P^{-1}$，并证明 $A=PJP^{-1}$。

(2) 用数学归纳法证明 $J^n=\begin{pmatrix}\lambda^n&n\lambda^{n-1}\\0&\lambda^n\end{pmatrix}$。

(3) 证明 $A^n=PJ^nP^{-1}$，并用 $n$ 和 $\lambda$ 的表达式表示 $A^n$。

(4) 求 $\displaystyle\lim_{n\to\infty}\frac{1}{n\lambda^{n-1}}A^n$。

## **Kai**

### (1)

$$
\begin{gathered}
P^{-1}=\begin{pmatrix}1&0\\-2&1\end{pmatrix},\\
PJP^{-1}=\begin{pmatrix}\lambda-2&1\\-4&\lambda+2\end{pmatrix}=A.
\end{gathered}
$$

### (2)

$n=1$ では明らかである。$n=k$ で成り立つと仮定すると

$$
\begin{gathered}
J^{k+1}=J^kJ\\
=\begin{pmatrix}\lambda^k&k\lambda^{k-1}\\0&\lambda^k\end{pmatrix}
\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}\\
=\begin{pmatrix}\lambda^{k+1}&(k+1)\lambda^k\\0&\lambda^{k+1}\end{pmatrix}.
\end{gathered}
$$

したがって数学的帰納法により、すべての自然数 $n$ で成立する。

### (3)

積の途中の $P^{-1}P$ が単位行列になるため、$A^n=(PJP^{-1})^n=PJ^nP^{-1}$。よって

$$
\boxed{A^n=\begin{pmatrix}
\lambda^n-2n\lambda^{n-1}&n\lambda^{n-1}\\
-4n\lambda^{n-1}&\lambda^n+2n\lambda^{n-1}
\end{pmatrix}}.
$$

### (4)

$$
\frac{A^n}{n\lambda^{n-1}}
=\begin{pmatrix}\lambda/n-2&1\\-4&\lambda/n+2\end{pmatrix}
\longrightarrow\boxed{\begin{pmatrix}-2&1\\-4&2\end{pmatrix}}.
$$

## **Reference**

- [山形大学公式問題（PDF 5頁）](https://www.yz.yamagata-u.ac.jp/download_file/3157/227/)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_2.html)
