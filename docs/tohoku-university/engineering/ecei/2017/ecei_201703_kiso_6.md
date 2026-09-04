---
sidebar_label: 2017年3月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Positive-Semidefinite-Matrix
  - Mathematics.Linear-Algebra.Hermitian-Matrix
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 基礎科目 問題6 数学基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

(1) $n\times n$ エルミート行列 $A$、$n$ 次元複素列ベクトル $\boldsymbol x$、および二次形式 $f(\boldsymbol x)=\boldsymbol x^*A\boldsymbol x$ を考える。ここで、$\boldsymbol x^*$ は $\boldsymbol x$ の複素共役転置（随伴行列）を表す。零ベクトルでない全ての $\boldsymbol x$ に対して $f(\boldsymbol x)\ge0$ を満たすとき、$A$ は半正定値行列であると言う。次の問に答えよ。

(a) ある正方行列 $U$ が存在して $A=U^*U$ と表せるとき、$A$ が半正定値行列であることを示せ。

(b) $A$ の固有値がすべて実数であることを示せ。

(c) $A$ の異なる固有値に対応する固有ベクトルは直交することを示せ。

(d) $A$ の固有値がすべて非負であるとき、$A$ は半正定値行列であることを示せ。必要に応じて、エルミート行列はユニタリー行列によって対角化可能であるという事実を用いてよい。

(e) 次の関係式を満たす $3\times3$ 実対称行列 $B$ を求めよ。

$$
x_1^2+x_2^2+x_3^2-x_1x_2-x_2x_3=(x_1\quad x_2\quad x_3)B\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
$$

また、$B$ の固有値をすべて求め、$B$ が半正定値行列かどうか判定せよ。

(2) 複素変数 $z$ の関数 $g(z)=\dfrac{z}{(z^2-6z+1)^2}$ を考える。

$C$ は $z=e^{2i\theta}$（$0\le\theta\le\pi$）により表される円周上を正の向きに回る積分路である。$i$ は虚数単位である。次の問に答えよ。

(a) 関数 $g(z)$ のすべての孤立特異点とその留数を求めよ。

(b) 複素積分 $\displaystyle\int_Cg(z)\,dz$ を求めよ。

(c) 実定積分 $\displaystyle\int_0^\pi\frac{d\theta}{(1+\sin^2\theta)^2}$ を求めよ。

### 题目描述

1. 设 $A$ 为 $n\times n$ Hermitian 矩阵，$f(\boldsymbol x)=\boldsymbol x^*A\boldsymbol x$。若对任意非零复向量 $\boldsymbol x$ 都有 $f(\boldsymbol x)\ge0$，称 $A$ 半正定。
   - (a) 若存在方阵 $U$ 使 $A=U^*U$，证明 $A$ 半正定。
   - (b) 证明 $A$ 的全部特征值为实数。
   - (c) 证明属于不同特征值的特征向量正交。
   - (d) 若全部特征值非负，证明 $A$ 半正定；可用 Hermitian 矩阵可酉对角化。
   - (e) 求实对称矩阵 $B$，使 $x_1^2+x_2^2+x_3^2-x_1x_2-x_2x_3=\boldsymbol x^TB\boldsymbol x$；求其全部特征值并判断半正定性。
2. 设 $g(z)=z/(z^2-6z+1)^2$，$C:z=e^{2i\theta}$，$0\le\theta\le\pi$，取正向。
   - (a) 求全部孤立奇点及留数。
   - (b) 求 $\oint_Cg(z)\,dz$。
   - (c) 求 $\displaystyle\int_0^\pi(1+\sin^2\theta)^{-2}\,d\theta$。

## **Kai**

### (1)

**(a)** $\boldsymbol x^*A\boldsymbol x=(U\boldsymbol x)^*(U\boldsymbol x)=\|U\boldsymbol x\|^2\ge0$。

**(b)** 若 $Av=\lambda v$，则 $\lambda v^*v=v^*Av=\overline{v^*Av}=\bar\lambda v^*v$，故 $\lambda\in\mathbb R$。

**(c)** 若 $Au=\lambda u,Av=\mu v$，则 $\lambda u^*v=(Au)^*v=u^*Av=\mu u^*v$。当 $\lambda\ne\mu$ 时，$u^*v=0$。

**(d)** 写成 $A=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_n)Q^*$，令 $y=Q^*x$，则 $x^*Ax=\sum_j\lambda_j|y_j|^2\ge0$。

**(e)**

$$
B=\begin{pmatrix}1&-1/2&0\\-1/2&1&-1/2\\0&-1/2&1\end{pmatrix},\qquad
\det(\lambda I-B)=(\lambda-1)\left((\lambda-1)^2-\frac12\right).
$$

特征值为 $\boxed{1,1\pm1/\sqrt2}$，均正，所以 $B$ 正定，因而半正定。

### (2)

令 $a=3-2\sqrt2,b=3+2\sqrt2$，两者均为二阶极点。

$$
\operatorname{Res}(g,a)=\left[\frac{d}{dz}\frac{z}{(z-b)^2}\right]_{z=a}
=-\frac{a+b}{(a-b)^3}=\frac{3\sqrt2}{128},
$$

$$
\operatorname{Res}(g,b)=-\frac{3\sqrt2}{128}.
$$

单位圆仅包含 $a$，所以

$$
\boxed{\oint_Cg(z)\,dz=\frac{3\sqrt2\pi i}{64}}.
$$

由 $z=e^{2i\theta}$ 得 $dz=2iz\,d\theta$，且

$$
z^2-6z+1=-4z(1+\sin^2\theta).
$$

因而

$$
\oint_Cg(z)\,dz=\frac{i}{8}\int_0^\pi\frac{d\theta}{(1+\sin^2\theta)^2},
$$

故 $\boxed{\displaystyle\int_0^\pi\frac{d\theta}{(1+\sin^2\theta)^2}=\frac{3\pi}{4\sqrt2}}$。
