---
sidebar_label: "2023年7月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Operations-Research.Nonlinear-Optimization.Steepest-Descent-Method
  - Operations-Research.Nonlinear-Optimization.Quadratic-Programming
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
---

# 大阪大学 情報科学研究科 情報数理学専攻 2023年7月実施 情報数理学 数理基礎

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### 1. 正定値二次関数と最急降下法

関数 $f:\mathbb R^n\to\mathbb R$ を

$$
f(x)=\frac12x^TQx-x^Tb
$$

とする。$x^{(0)}\in\mathbb R^n$ を初期値として、漸化式

$$
x^{(k+1)}=x^{(k)}-\alpha_k g^{(k)},\qquad
g^{(k)}=Qx^{(k)}-b,\qquad k=0,1,2,\ldots
$$

を考える。ただし、$\alpha_k\in\mathbb R$、$x,b\in\mathbb R^n$ とし、$Q$ は $n$ 次の対称な正定値行列、上付き $T$ は転置を表す。

(1) $Q$ の最大固有値を $\lambda_{\max}$、最小固有値を $\lambda_{\min}$ とする。任意の $x\ne0$ に対して、次の二つの不等式を示せ。

$$
\lambda_{\min}\le\frac{x^TQx}{x^Tx}\le\lambda_{\max},
$$

$$
\frac{\lambda_{\min}}{\lambda_{\max}}
\le\frac{(x^Tx)^2}{(x^TQx)(x^TQ^{-1}x)}
\le\frac{\lambda_{\max}}{\lambda_{\min}}.
$$

(2) $g^{(k)}\ne0$ のとき、$f(x^{(k)}-\alpha g^{(k)})$ を最小にする $\alpha$ を $\alpha_k$ とする。このとき

$$
\alpha_k=\frac{(g^{(k)})^Tg^{(k)}}{(g^{(k)})^TQg^{(k)}}
$$

を示せ。

(3) $f(x)$ を最小にする点を $x^*$ とし、

$$
Z(x)=\frac12(x-x^*)^TQ(x-x^*)
$$

とおく。$x^{(k)}\ne x^*$ とする。(2) の $\alpha_k$ を用い、

$$
\gamma_k=\frac{\bigl((g^{(k)})^Tg^{(k)}\bigr)^2}
{\bigl((g^{(k)})^TQg^{(k)}\bigr)\bigl((g^{(k)})^TQ^{-1}g^{(k)}\bigr)}
$$

と定めるとき、

$$
Z(x^{(k+1)})=(1-\gamma_k)Z(x^{(k)})
$$

を示せ。

### 2. 線形計画問題

次の線形計画問題を考える。

$$
\begin{array}{ll}
\text{最小化}&\displaystyle\sum_{k=1}^n c_kx_k\\[2mm]
\text{条件}&\displaystyle\sum_{k=1}^n x_k\ge1,\\
&x_k\ge0\quad(k=1,2,\ldots,n).
\end{array}
$$

(1) 最適解が存在するための必要十分条件を求めよ。

(2) 最適解が存在するとき、最適解および最適値を求めよ。

### 3. 対称分布のモーメントと共分散

確率変数 $X,Y$ は平均 $\mu$、分散 $\sigma^2$ をもち、平均の周りに対称な分布に従い、$X$ と $Y$ の相関係数が $\rho\ne0$ であるとする。

(1) $X^2$ の期待値 $E(X^2)$ を求めなさい。

(2) $X^3$ の期待値 $E(X^3)$ を求めなさい。

(3) $X$ と $X^2+aY$ が無相関となるときの $a$ の値を求めなさい。

#### 题目描述

**1. 正定二次函数与最速下降法。** 设 $f(x)=\frac12x^TQx-x^Tb$，其中 $Q$ 为 $n$ 阶实对称正定矩阵，$x,b\in\mathbb R^n$，上标 $T$ 表示转置。从初值 $x^{(0)}\in\mathbb R^n$ 出发，考虑迭代

$$
x^{(k+1)}=x^{(k)}-\alpha_k g^{(k)},\qquad
g^{(k)}=Qx^{(k)}-b,\qquad \alpha_k\in\mathbb R.
$$

(1) 以 $\lambda_{\max}$、$\lambda_{\min}$ 分别表示 $Q$ 的最大、最小特征值。证明对任意 $x\ne0$，

$$
\lambda_{\min}\le\frac{x^TQx}{x^Tx}\le\lambda_{\max},\qquad
\frac{\lambda_{\min}}{\lambda_{\max}}
\le\frac{(x^Tx)^2}{(x^TQx)(x^TQ^{-1}x)}
\le\frac{\lambda_{\max}}{\lambda_{\min}}.
$$

(2) 当 $g^{(k)}\ne0$ 时，令 $\alpha_k$ 为使 $f(x^{(k)}-\alpha g^{(k)})$ 最小的步长，证明

$$
\alpha_k=\frac{(g^{(k)})^Tg^{(k)}}{(g^{(k)})^TQg^{(k)}}.
$$

(3) 设 $x^*$ 为 $f$ 的最小值点，定义 $Z(x)=\frac12(x-x^*)^TQ(x-x^*)$。当 $x^{(k)}\ne x^*$，并使用 (2) 的步长时，令

$$
\gamma_k=\frac{\bigl((g^{(k)})^Tg^{(k)}\bigr)^2}
{\bigl((g^{(k)})^TQg^{(k)}\bigr)\bigl((g^{(k)})^TQ^{-1}g^{(k)}\bigr)},
$$

证明 $Z(x^{(k+1)})=(1-\gamma_k)Z(x^{(k)})$。

**2. 线性规划。** 考虑最小化 $\sum_{k=1}^n c_kx_k$，约束为 $\sum_{k=1}^n x_k\ge1$ 及 $x_k\ge0\ (k=1,\ldots,n)$ 的线性规划问题。

(1) 求最优解存在的充要条件。

(2) 最优解存在时，求最优解及最优值。

**3. 对称分布的矩与协方差。**

随机变量 $X,Y$ 的均值均为 $\mu$、方差均为 $\sigma^2$，各自的分布均关于均值对称，且 $X$ 与 $Y$ 的相关系数为 $\rho\ne0$。

(1) 求 $E(X^2)$。

(2) 求 $E(X^3)$。

(3) 求使 $X$ 与 $X^2+aY$ 不相关的 $a$。

## **Kai**

### 1. 正定値二次関数と最急降下法

#### (1)

$Q$ は実対称正定値行列なので、ある直交行列 $P$ により

$$
P^TQP=\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),\qquad \lambda_i>0
$$

と対角化できる。$y=P^Tx$、すなわち $x=Py$ とおけば

$$
x^Tx=y^Ty=\sum_{i=1}^n y_i^2,\qquad
x^TQx=y^T\Lambda y=\sum_{i=1}^n\lambda_i y_i^2.
$$

したがって

$$
\lambda_{\min}\sum_i y_i^2
\le\sum_i\lambda_i y_i^2
\le\lambda_{\max}\sum_i y_i^2.
$$

$x\ne0$ より $x^Tx>0$ なので、両辺を $x^Tx$ で割ると

$$
\boxed{\lambda_{\min}\le\frac{x^TQx}{x^Tx}\le\lambda_{\max}}.
$$

$Q^{-1}$ の固有値は $\lambda_i^{-1}$ である。同じ結果を $Q^{-1}$ に適用すると

$$
\frac1{\lambda_{\max}}
\le\frac{x^TQ^{-1}x}{x^Tx}
\le\frac1{\lambda_{\min}}.
$$

各辺は正なので、二つの不等式を辺々掛けて

$$
\frac{\lambda_{\min}}{\lambda_{\max}}
\le\frac{(x^TQx)(x^TQ^{-1}x)}{(x^Tx)^2}
\le\frac{\lambda_{\max}}{\lambda_{\min}}
$$

を得る。逆数を取れば

$$
\boxed{
\frac{\lambda_{\min}}{\lambda_{\max}}
\le\frac{(x^Tx)^2}{(x^TQx)(x^TQ^{-1}x)}
\le\frac{\lambda_{\max}}{\lambda_{\min}}
}.
$$

#### (2)

$\nabla f(x)=Qx-b$、$\nabla^2 f(x)=Q$ である。$g=g^{(k)}$ と略記すると、二次式の展開より

$$
f(x^{(k)}-\alpha g)
=f(x^{(k)})-\alpha g^Tg+\frac{\alpha^2}{2}g^TQg.
$$

$\alpha$ で微分して零とおくと

$$
-g^Tg+\alpha g^TQg=0.
$$

$Q$ は正定値で $g\ne0$ なので、$g^TQg>0$ であり、$\alpha$ に関する二階微分も正となる。よって唯一の最小点は

$$
\boxed{\alpha_k=\frac{g^Tg}{g^TQg}
=\frac{(g^{(k)})^Tg^{(k)}}{(g^{(k)})^TQg^{(k)}}}.
$$

#### (3)

$\nabla f(x^*)=0$ より $Qx^*=b$ であり、$x^*=Q^{-1}b$ である。$e=x^{(k)}-x^*$、$g=g^{(k)}$ とおけば $g=Qe$、$e=Q^{-1}g$ なので

$$
Z(x^{(k)})=\frac12g^TQ^{-1}g.
$$

また、$x^{(k+1)}-x^*=e-\alpha_k g$ であるから

$$
\begin{aligned}
Z(x^{(k+1)})
&=\frac12(e-\alpha_k g)^TQ(e-\alpha_k g)\\
&=Z(x^{(k)})-\alpha_k g^Tg+\frac{\alpha_k^2}{2}g^TQg\\
&=Z(x^{(k)})-\frac12\frac{(g^Tg)^2}{g^TQg}.
\end{aligned}
$$

ここで $x^{(k)}\ne x^*$ より $g\ne0$ であり、

$$
\gamma_k Z(x^{(k)})
=\frac{(g^Tg)^2}{(g^TQg)(g^TQ^{-1}g)}\cdot\frac12g^TQ^{-1}g
=\frac12\frac{(g^Tg)^2}{g^TQg}.
$$

したがって

$$
\boxed{Z(x^{(k+1)})=(1-\gamma_k)Z(x^{(k)})}.
$$

### 2. 線形計画問題

#### (1)

双対問題は

$$
\begin{array}{ll}
\text{最大化}&w\\
\text{条件}&0\le w\le c_k\quad(k=1,2,\ldots,n)
\end{array}
$$

である。主問題は単位ベクトル $e_j$ を実行可能解に持つので、双対定理より、最適解が存在するための必要十分条件は双対問題が実行可能であること、すなわち

$$
\boxed{c_k\ge0\quad(k=1,2,\ldots,n)}
$$

である。実際、ある $c_j<0$ があれば $x=te_j\ (t\ge1)$ として目的関数を $tc_j\to-\infty$ とできる。

#### (2)

$c_k\ge0$ とし、

$$
m=\min_{1\le k\le n}c_k,\qquad J=\{j:c_j=m\}
$$

とおく。任意の実行可能解について

$$
\sum_{k=1}^n c_kx_k\ge m\sum_{k=1}^n x_k\ge m
$$

であり、$j\in J$ を選べば $x=e_j$ が値 $m$ を達成する。したがって、最適値は

$$
\boxed{m=\min_{1\le k\le n}c_k}.
$$

最適解全体は、上の不等式で等号が成立する条件から次のように求まる。

- $m>0$ の場合：

$$
\boxed{
x=\sum_{j\in J}\lambda_je_j,\qquad
\lambda_j\ge0,\quad\sum_{j\in J}\lambda_j=1
}.
$$

- $m=0$ の場合：

$$
\boxed{
x=\sum_{j\in J}\lambda_je_j,\qquad
\lambda_j\ge0,\quad\sum_{j\in J}\lambda_j\ge1
}.
$$

後者では、目的関数の係数が $0$ の成分だけを用いれば目的値は $0$ のままであり、成分の和を $1$ に限定する必要はない。

### 3. 対称分布のモーメントと共分散

以下では、(2) の三次モーメントおよび (3) で用いる共分散が存在するものとする。また、相関係数 $\rho$ が定義されていることから $\sigma^2>0$ である。

#### (1)

分散の定義から、

$$
\boxed{E(X^2)=\operatorname{Var}(X)+E(X)^2=\sigma^2+\mu^2}.
$$

#### (2)

$X-\mu$ の分布は原点に関して対称であるから、$E[(X-\mu)^3]=0$ である。これを展開すると、

$$
\begin{aligned}
0
&=E(X^3)-3\mu E(X^2)+3\mu^2E(X)-\mu^3\\
&=E(X^3)-3\mu(\sigma^2+\mu^2)+2\mu^3.
\end{aligned}
$$

したがって、

$$
\boxed{E(X^3)=\mu^3+3\mu\sigma^2}.
$$

#### (3)

共分散の線形性により、

$$
\operatorname{Cov}(X,X^2+aY)
=\operatorname{Cov}(X,X^2)+a\operatorname{Cov}(X,Y).
$$

(1)、(2) の結果と相関係数の定義から、

$$
\begin{aligned}
\operatorname{Cov}(X,X^2)
&=E(X^3)-E(X)E(X^2)\\
&=\mu^3+3\mu\sigma^2-\mu(\sigma^2+\mu^2)
=2\mu\sigma^2,\\
\operatorname{Cov}(X,Y)
&=\rho\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}
=\rho\sigma^2.
\end{aligned}
$$

よって無相関となる条件は

$$
0=\operatorname{Cov}(X,X^2+aY)
=\sigma^2(2\mu+a\rho).
$$

$\sigma^2>0$、$\rho\ne0$ であるから、

$$
\boxed{a=-\frac{2\mu}{\rho}}.
$$

## **Reference**

- [大阪大学公式：令和6年度 情報数理学専攻 入学者選抜試験問題（2023年7月29日実施、数理基礎：PDF 4–5ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/IPS_nyushi_2024_JA.pdf)
