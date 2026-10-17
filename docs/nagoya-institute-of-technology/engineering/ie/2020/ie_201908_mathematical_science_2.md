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

設問すべてについて解答すること。

### I

サイコロを続けて投げ、$1$ の目が出たら終了とする。このときサイコロを投げた回数を $X$ とする。

(1) 確率 $P(X=k)$ を求めよ。

(2) 積率母関数 $M(t)=\displaystyle\sum_{k=1}^{\infty}e^{tk}P(X=k)$ を求めよ。ただし $e^t<\dfrac65$ とする。

(3) 導関数 $M'(t)$ を計算せよ。

(4) 期待値 $E[X]=\displaystyle\sum_{k=1}^{\infty}kP(X=k)$ は $6$ であることを示せ。

(5) 分散 $V[X]$ を求めよ。

### II

$n$ を $2$ 以上の自然数とする。$n$ 次実列ベクトル $\boldsymbol x$ について、$\boldsymbol x$ の転置を ${}^t\boldsymbol x$ と表し、$\boldsymbol x$ のノルムを $\|\boldsymbol x\|=\sqrt{{}^t\boldsymbol x\boldsymbol x}$ と表す。また、$n$ 次実対称行列 $S$ の固有値を $\lambda_1,\lambda_2,\ldots,\lambda_n$ とし、対応する固有ベクトルを $\boldsymbol a_1,\boldsymbol a_2,\ldots,\boldsymbol a_n$ とする。すなわち、

$$
S\boldsymbol a_i=\lambda_i\boldsymbol a_i\qquad(i=1,2,\ldots,n)
$$

ただし、$\lambda_1>\lambda_2>\cdots>\lambda_n>0$、$\|\boldsymbol a_i\|=1$ とする。さらに、$n$ 次正方行列 $P$ を $[\boldsymbol a_1\ \boldsymbol a_2\ \cdots\ \boldsymbol a_n]$ と定める。

(1) 任意の $n$ 次実列ベクトル $\boldsymbol x,\boldsymbol y$ について、${}^t(S\boldsymbol x)\boldsymbol y={}^t\boldsymbol x(S\boldsymbol y)$ となることを示せ。

(2) $i\ne j$ のとき、${}^t\boldsymbol a_i\boldsymbol a_j=0$ となることを示せ。

(3) $n$ 次正方行列 ${}^tPSP$ を、固有値 $\lambda_1,\lambda_2,\ldots,\lambda_n$ を用いて表せ。

(4) 任意の $n$ 次実列ベクトル $\boldsymbol x$ について、$\|{}^tP\boldsymbol x\|^2=\|\boldsymbol x\|^2$ となることを示せ。

(5) 集合 $A$ を

$$
\left\{
\|S\boldsymbol x\|\;\middle|\;
\begin{gathered}
\boldsymbol x\text{ は }n\text{ 次実列ベクトルで}\\
\|\boldsymbol x\|=1
\end{gathered}
\right\}
$$

と定める。$A$ の最大値は $\lambda_1$ であることを示せ。

#### 题目描述

回答全部问题。

**I** 连续投掷骰子，出现 $1$ 点时结束。记投掷次数为 $X$。

(1) 求概率 $P(X=k)$。

(2) 求矩母函数 $M(t)=\displaystyle\sum_{k=1}^{\infty}e^{tk}P(X=k)$，其中 $e^t<\dfrac65$。

(3) 计算导函数 $M'(t)$。

(4) 证明期望 $E[X]=\displaystyle\sum_{k=1}^{\infty}kP(X=k)$ 等于 $6$。

(5) 求方差 $V[X]$。

**II** 设 $n$ 为不小于 $2$ 的自然数。对于 $n$ 维实列向量 $\boldsymbol x$，以 ${}^t\boldsymbol x$ 表示其转置，范数记为 $\|\boldsymbol x\|=\sqrt{{}^t\boldsymbol x\boldsymbol x}$。设 $n$ 阶实对称矩阵 $S$ 的特征值为 $\lambda_1,\lambda_2,\ldots,\lambda_n$，对应的特征向量为 $\boldsymbol a_1,\boldsymbol a_2,\ldots,\boldsymbol a_n$，即

$$
S\boldsymbol a_i=\lambda_i\boldsymbol a_i\qquad(i=1,2,\ldots,n).
$$

其中 $\lambda_1>\lambda_2>\cdots>\lambda_n>0$、$\|\boldsymbol a_i\|=1$。再定义 $n$ 阶方阵 $P=[\boldsymbol a_1\ \boldsymbol a_2\ \cdots\ \boldsymbol a_n]$。

(1) 证明对于任意 $n$ 维实列向量 $\boldsymbol x,\boldsymbol y$，有 ${}^t(S\boldsymbol x)\boldsymbol y={}^t\boldsymbol x(S\boldsymbol y)$。

(2) 证明当 $i\ne j$ 时，${}^t\boldsymbol a_i\boldsymbol a_j=0$。

(3) 用特征值 $\lambda_1,\lambda_2,\ldots,\lambda_n$ 表示 $n$ 阶方阵 ${}^tPSP$。

(4) 证明对于任意 $n$ 维实列向量 $\boldsymbol x$，有 $\|{}^tP\boldsymbol x\|^2=\|\boldsymbol x\|^2$。

(5) 定义集合 $A$ 为所有满足 $\|\boldsymbol x\|=1$ 的 $n$ 维实列向量 $\boldsymbol x$ 所对应的 $\|S\boldsymbol x\|$ 的集合。证明 $A$ 的最大值为 $\lambda_1$。

## **Kai**

### I

(1) 初めの $k-1$ 回で1以外が出て、第 $k$ 回で1が出るから、

$$
\boxed{P(X=k)=\left(\frac56\right)^{k-1}\frac16\quad(k=1,2,\ldots)}.
$$

(2) 等比級数より、

$$
\begin{gathered}
\boxed{M(t)=\frac{e^t}{6}\sum_{j=0}^{\infty}\left(\frac{5e^t}{6}\right)^j
=\frac{e^t}{6-5e^t}}\\
(t<\log(6/5)).
\end{gathered}
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
