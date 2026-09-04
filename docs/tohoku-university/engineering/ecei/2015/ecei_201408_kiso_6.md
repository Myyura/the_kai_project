---
sidebar_label: 2014年8月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Exponential
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 基礎科目 問題6 物理基礎2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

行列

$$
A=\begin{pmatrix}
\frac13&\frac23&0&0\\
\frac{\sqrt2}3&\frac{\sqrt2}6&\frac{\sqrt2}4&\frac{\sqrt2}8\\
-\frac{\sqrt2}3&-\frac{\sqrt2}6&\frac{\sqrt2}4&\frac{\sqrt2}8\\
0&0&\frac14&\frac12
\end{pmatrix},
$$

回転行列

$$
R=\begin{pmatrix}1&0&0&0\\0&\cos\theta&-\sin\theta&0\\0&\sin\theta&\cos\theta&0\\0&0&0&1\end{pmatrix},
$$

および $4\times4$ 行列 $Y=\begin{pmatrix}C&O\\O&D\end{pmatrix}$ を考える。ただし，$C,D$ は $2\times2$ 行列であり，また，$O$ は $2\times2$ 零行列である。

以下の問に答えよ。

(1) $A$ が $R$ によって $Y=RA$ に変換されるとき，$\theta$ と $Y$ を求めよ。ただし，$0<\theta<\pi$ とする。

(2) $Y$ の全ての固有値 $\lambda_1,\lambda_2,\lambda_3,\lambda_4$（$\lambda_1>\lambda_2>\lambda_3>\lambda_4$）とこれらに対応する規格化された固有ベクトルを求めよ。

(3) 任意の正の整数 $n$ に対して $Y^n$ を求めよ。

(4) $\alpha,\beta,\gamma,\varepsilon$ を実数とする。$(\alpha+\beta)^2+(\gamma+\varepsilon)^2=1$ の条件下で

$$
\lim_{n\to\infty}(\alpha\ \beta\ \gamma\ \varepsilon)Y^n\begin{pmatrix}\alpha\\\beta\\\gamma\\\varepsilon\end{pmatrix}
$$

の最大値を求めよ。

(5) 正方行列 $X$ の指数関数は次の様に定義される。

$$
\exp(X)=\sum_{n=0}^{\infty}\frac1{n!}X^n
$$

ここで $X^0$ は単位行列を表すものとする。行列 $\exp(Y)$ の対角和と行列式を求めよ。

### 题目描述

设

$$
A=\begin{pmatrix}
1/3&2/3&0&0\\\sqrt2/3&\sqrt2/6&\sqrt2/4&\sqrt2/8\\
-\sqrt2/3&-\sqrt2/6&\sqrt2/4&\sqrt2/8\\0&0&1/4&1/2
\end{pmatrix},\qquad
R=\begin{pmatrix}1&0&0&0\\0&\cos\theta&-\sin\theta&0\\0&\sin\theta&\cos\theta&0\\0&0&0&1\end{pmatrix}.
$$

1. 令 $Y=RA=\operatorname{diag}(C,D)$，其中 $C,D$ 为 $2\times2$ 矩阵，求 $0<\theta<\pi$ 及 $Y$。
2. 求 $Y$ 的特征值 $\lambda_1>\lambda_2>\lambda_3>\lambda_4$ 和对应单位特征向量。
3. 求正整数 $n$ 对应的 $Y^n$。
4. 在 $(\alpha+\beta)^2+(\gamma+\varepsilon)^2=1$ 下，求

$$
\lim_{n\to\infty}(\alpha,\beta,\gamma,\varepsilon)Y^n(\alpha,\beta,\gamma,\varepsilon)^T
$$

的最大值。
5. 定义 $\exp X=\sum_{n=0}^\infty X^n/n!$，求 $\operatorname{tr}(\exp Y)$ 与 $\det(\exp Y)$。

## **Kai**

### (1)

消去两个非对角块要求 $\cos\theta=\sin\theta$，故

$$
\boxed{\theta=\pi/4},\qquad
\boxed{Y=\begin{pmatrix}1/3&2/3&0&0\\2/3&1/3&0&0\\0&0&1/2&1/4\\0&0&1/4&1/2\end{pmatrix}}.
$$

### (2)

$$
\begin{array}{c|c|c}
i&\lambda_i&u_i\\\hline
1&1&(1,1,0,0)^T/\sqrt2\\
2&3/4&(0,0,1,1)^T/\sqrt2\\
3&1/4&(0,0,1,-1)^T/\sqrt2\\
4&-1/3&(1,-1,0,0)^T/\sqrt2
\end{array}
$$

### (3)

令 $a_n=(-1/3)^n,b_n=(3/4)^n,c_n=(1/4)^n$，则

$$
\boxed{Y^n=\frac12\begin{pmatrix}
1+a_n&1-a_n&0&0\\1-a_n&1+a_n&0&0\\
0&0&b_n+c_n&b_n-c_n\\0&0&b_n-c_n&b_n+c_n
\end{pmatrix}}.
$$

### (4)

极限为 $(\alpha+\beta)^2/2$。由约束它至多为 $1/2$，当 $\alpha+\beta=\pm1$、$\gamma+\varepsilon=0$ 时取到，故最大值为 $\boxed{1/2}$。

### (5)

$\exp Y$ 的特征值为 $e^{\lambda_i}$，所以

$$
\boxed{\operatorname{tr}(\exp Y)=e+e^{3/4}+e^{1/4}+e^{-1/3}},\qquad
\boxed{\det(\exp Y)=e^{5/3}}.
$$
