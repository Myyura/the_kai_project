---
sidebar_label: 2010年8月実施 数学【III】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 数学【III】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題

(i) 実数 $a,b,c,d$、定数 $D>0$ に対し $ad-bc=D$ とする。ラグランジュの未定乗数法を用いて $J_2=a^2+b^2+c^2+d^2$ の最小値を求めよ。

(ii) $n\ge2$、$X=(x_{ij})$ を $n$ 次実行列とし、第 $(i,j)$ 余因子を $\widetilde X_{ij}$ とする。任意の $i$ について $\sum_jx_{ij}\widetilde X_{ij}=|X|$ が成り立つ。また $\widetilde X_{ji}$ を $(i,j)$ 成分とする余因子行列を $\widetilde X$ とすれば $X\widetilde X=|X|I$ が成り立つ。

(a) $|X|\ne0$ のとき $|\widetilde X|$ を求めよ。

(b) 正定数 $D>0$ に対し $|X|=D$ のもとで $J_n=\sum_{i=1}^n\sum_{j=1}^nx_{ij}^2$ の最小値を求めよ。

#### 题目描述

(i) 设实数 $a,b,c,d$ 满足 $ad-bc=D>0$，用拉格朗日乘数法求 $a^2+b^2+c^2+d^2$ 的最小值。

(ii) 对 $n\ge2$ 的实矩阵 $X=(x_{ij})$，令 $\widetilde X_{ij}$ 为代数余子式；将其转置排列得到伴随矩阵 $\widetilde X$，满足 $X\widetilde X=|X|I$。(a) 若 $|X|\ne0$，求 $|\widetilde X|$。(b) 在 $|X|=D>0$ 条件下求 $\sum_{i,j}x_{ij}^2$ 的最小值。

## **Kai**

### (i)
$L=a^2+b^2+c^2+d^2+\lambda(ad-bc-D)$ とおく。停留条件は

$$
2a+\lambda d=0,\quad2b-\lambda c=0,\quad2c-\lambda b=0,\quad2d+\lambda a=0.
$$

$D>0$ よりすべての変数が零とはならず、$\lambda^2=4$。$\lambda=2$ では $a=-d,b=c$ より $ad-bc=-d^2-b^2\le0$ となるので不適。$\lambda=-2$ では $d=a,c=-b$、$a^2+b^2=D$ となり、$J_2=2D$。さらに

$$
J_2-2D=(a-d)^2+(b+c)^2\ge0
$$

なので、得られた値は大域的最小値 $\boxed{2D}$ である。

### (ii)(a)
$X\widetilde X=|X|I$ の行列式をとると $|X||\widetilde X|=|X|^n$。従って $\boxed{|\widetilde X|=|X|^{n-1}}$。

### (ii)(b)
$X^{\mathrm T}X$ は正定対称行列であり、その固有値を $\lambda_1,\ldots,\lambda_n>0$ とすると

$$
J_n=\operatorname{tr}(X^{\mathrm T}X)=\sum_i\lambda_i,\qquad\prod_i\lambda_i=D^2.
$$

相加相乗平均不等式より $J_n\ge nD^{2/n}$。$X=D^{1/n}I$ で等号を達成するので

$$
\boxed{\min J_n=nD^{2/n}}.
$$

