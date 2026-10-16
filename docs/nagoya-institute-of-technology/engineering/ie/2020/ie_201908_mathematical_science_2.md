---
sidebar_label: "2019年8月実施 問題31 数理科学2"
tags:
  - Nagoya-Institute-of-Technology
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Geometric-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Matrix-Norm
---

# 名古屋工業大学 工学研究科 情報工学系 2019年8月実施 問題31 数理科学2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%B3%BB/2020%E5%B9%B4%E5%BA%A6_31.html) refined with GPT 6 Astra)

## **Description**

### I

サイコロを続けて投げ、1の目が出たら終了する。投げた回数を $X$ とする。

1. $P(X=k)$ を求めよ。
2. 積率母関数 $M(t)=\sum_{k=1}^{\infty}e^{tk}P(X=k)$ を求めよ。ただし $e^t<6/5$ とする。
3. $M'(t)$ を計算せよ。
4. $E[X]=\sum_{k=1}^{\infty}kP(X=k)=6$ を示せ。
5. 分散 $V[X]$ を求めよ。

### II

$n\ge2$ とする。実列ベクトルのノルムを $\|\boldsymbol x\|=\sqrt{\boldsymbol x^{\mathsf T}\boldsymbol x}$ とする。$n$ 次実対称行列 $S$ の固有値と単位固有ベクトルが

$$
S\boldsymbol a_i=\lambda_i\boldsymbol a_i,\qquad
\lambda_1>\lambda_2>\cdots>\lambda_n>0,\qquad\|\boldsymbol a_i\|=1
$$

を満たすとし、$P=[\boldsymbol a_1\ \cdots\ \boldsymbol a_n]$ とおく。

1. 任意の実列ベクトル $\boldsymbol x,\boldsymbol y$ に対し、$(S\boldsymbol x)^{\mathsf T}\boldsymbol y=\boldsymbol x^{\mathsf T}(S\boldsymbol y)$ を示せ。
2. $i\ne j$ のとき $\boldsymbol a_i^{\mathsf T}\boldsymbol a_j=0$ を示せ。
3. $P^{\mathsf T}SP$ を固有値を用いて表せ。
4. 任意の実列ベクトル $\boldsymbol x$ に対し、$\|P^{\mathsf T}\boldsymbol x\|^2=\|\boldsymbol x\|^2$ を示せ。
5. $\{\|S\boldsymbol x\|\mid\boldsymbol x\in\mathbb R^n,\ \|\boldsymbol x\|=1\}$ の最大値が $\lambda_1$ であることを示せ。

#### 题目描述

**I**：反复投掷公平骰子，直到第一次出现1。设投掷次数为 $X$。

1. 求 $P(X=k)$。
2. 在 $e^t<6/5$ 下求矩母函数 $M(t)=\sum_{k\ge1}e^{tk}P(X=k)$。
3. 计算 $M'(t)$。
4. 证明 $E[X]=6$。
5. 求方差。

**II**：设实对称矩阵 $S$ 有严格递减的正特征值 $\lambda_1>\cdots>\lambda_n>0$，对应单位特征向量为 $\boldsymbol a_i$，令 $P=[\boldsymbol a_1\cdots\boldsymbol a_n]$，范数为欧氏范数。

1. 证明 $(S\boldsymbol x)^{\mathsf T}\boldsymbol y=\boldsymbol x^{\mathsf T}S\boldsymbol y$。
2. 证明不同特征向量正交。
3. 用特征值表示 $P^{\mathsf T}SP$。
4. 证明 $\|P^{\mathsf T}\boldsymbol x\|^2=\|\boldsymbol x\|^2$。
5. 证明单位向量上 $\|S\boldsymbol x\|$ 的最大值是 $\lambda_1$。

## **Kai**

### I

(1) 初めの $k-1$ 回で1以外が出て、第 $k$ 回で1が出るから、

$$
\boxed{P(X=k)=\left(\frac56\right)^{k-1}\frac16\quad(k=1,2,\ldots)}.
$$

(2) 等比級数より、

$$
\boxed{M(t)=\frac{e^t}{6}\sum_{j=0}^{\infty}\left(\frac{5e^t}{6}\right)^j
=\frac{e^t}{6-5e^t}}\qquad(t<\log(6/5)).
$$

(3) 微分して、

$$
\boxed{M'(t)=\frac{6e^t}{(6-5e^t)^2}}.
$$

(4) 原点の近傍で積率母関数が存在するので、$\boxed{E[X]=M'(0)=6}$。

(5) さらに

$$
M''(t)=\frac{6e^t(6+5e^t)}{(6-5e^t)^3},\qquad M''(0)=66.
$$

したがって $\boxed{V[X]=66-6^2=30}$。

### II (1)

$S^{\mathsf T}=S$ より、

$$
(S\boldsymbol x)^{\mathsf T}\boldsymbol y
=\boldsymbol x^{\mathsf T}S^{\mathsf T}\boldsymbol y
=\boldsymbol x^{\mathsf T}S\boldsymbol y.
$$

### II (2)

(1) に固有ベクトルを代入すると、

$$
\lambda_i\boldsymbol a_i^{\mathsf T}\boldsymbol a_j
=(S\boldsymbol a_i)^{\mathsf T}\boldsymbol a_j
=\boldsymbol a_i^{\mathsf T}S\boldsymbol a_j
=\lambda_j\boldsymbol a_i^{\mathsf T}\boldsymbol a_j.
$$

$\lambda_i\ne\lambda_j$ より $\boxed{\boldsymbol a_i^{\mathsf T}\boldsymbol a_j=0}$。

### II (3)

各成分は $\boldsymbol a_i^{\mathsf T}S\boldsymbol a_j=\lambda_j\delta_{ij}$ であるから、

$$
\boxed{P^{\mathsf T}SP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)}.
$$

### II (4)

単位長と直交性から $P^{\mathsf T}P=I$。正方行列なので $P^{-1}=P^{\mathsf T}$、したがって $PP^{\mathsf T}=I$ でもある。よって

$$
\|P^{\mathsf T}\boldsymbol x\|^2
=\boldsymbol x^{\mathsf T}PP^{\mathsf T}\boldsymbol x
=\|\boldsymbol x\|^2.
$$

### II (5)

$\boldsymbol y=P^{\mathsf T}\boldsymbol x$ とおくと $\sum_i y_i^2=1$。$S=P\operatorname{diag}(\lambda_i)P^{\mathsf T}$ と直交変換によるノルムの保存より、

$$
\|S\boldsymbol x\|^2=\sum_i\lambda_i^2y_i^2
\le\lambda_1^2\sum_i y_i^2=\lambda_1^2.
$$

$\boldsymbol x=\boldsymbol a_1$ で等号となり、すべての固有値が正なので最大値は $\boxed{\lambda_1}$ である。

## **Reference**

- [大学公式問題（16ページ（公式PDFの保存版））](https://web.archive.org/web/20210506151616id_/https://www.nitech.ac.jp/examination/test/files/2020joho.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E7%B3%BB/2020%E5%B9%B4%E5%BA%A6_31.html)
