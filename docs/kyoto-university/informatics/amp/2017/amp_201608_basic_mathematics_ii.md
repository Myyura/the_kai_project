---
sidebar_label: "2016年8月実施 基礎数学 II"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 京都大学 情報学研究科 数理工学専攻 2016年8月実施 基礎数学 II

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

Mat(n)をn次複素正方行列全体の集合とする. $A \in Mat(n)$ に対して線形写像

$$
f_A: Mat(n) \to Mat(n)
$$

を

$$
f_A(X) = AX - XA
$$

で定める. Aが異なるn個の固有値をもつと仮定し, $O$ はn次ゼロ行列とする. 以下の問いに答えよ.

(i) $n = 2$ かつ $a \in \mathbb{C}$ で $X \in Mat(2)$ が $\det(f_A(X)) = a$ を満たすとき, $f_A(X)$ の固有値をaを用いて表せ.

(ii) $X \in Mat(n)$ が $f_A(X) = O$ を満たすとき, $A$ と $X$ は同じ正則行列により対角化できることを示せ.

(iii) $X, Y \in Mat(n)$ が $f_A(X) = f_A(Y) = O$ を満たすとき,

$$
XY = YX
$$

が成り立つことを示せ.

(iv) $A$ が対角行列であるとき, 線形写像 $f_A$ の像の次元 $\dim f_A(Mat(n))$ を求めよ.

### 题目描述

记 $\operatorname{Mat}(n)$ 为全体 $n$ 阶复方阵组成的集合。对 $A\in\operatorname{Mat}(n)$，定义线性映射

$$
f_A:\operatorname{Mat}(n)\to\operatorname{Mat}(n),
\qquad
f_A(X)=AX-XA.
$$

假设 $A$ 有 $n$ 个互不相同的特征值，并以 $O$ 表示 $n$ 阶零矩阵。完成以下各问：

1. 设 $n=2$、$a\in\mathbb C$，且 $X\in\operatorname{Mat}(2)$ 满足

   $$
   \det(f_A(X))=a.
   $$

   用 $a$ 表示矩阵 $f_A(X)$ 的两个特征值。
2. 若 $X\in\operatorname{Mat}(n)$ 满足 $f_A(X)=O$，证明 $A$ 与 $X$ 可以由同一个可逆矩阵同时对角化。
3. 若 $X,Y\in\operatorname{Mat}(n)$ 均满足

   $$
   f_A(X)=f_A(Y)=O,
   $$

   证明

   $$
   XY=YX.
   $$

4. 当 $A$ 为对角矩阵时，求线性映射 $f_A$ 的像空间维数

   $$
   \dim f_A(\operatorname{Mat}(n)).
   $$

## **Kai**

### (i) $f_A(X)$ の固有値

$n=2$ のとき、トレースの巡回性から

$$
\operatorname{tr}f_A(X)
=\operatorname{tr}(AX-XA)=0.
$$

$f_A(X)$ の二つの固有値を $\mu_1,\mu_2$ とすると、

$$
\mu_1+\mu_2=0,\qquad
\mu_1\mu_2=\det f_A(X)=a.
$$

したがって $\mu_2=-\mu_1$ かつ $\mu_1^2=-a$ であり、固有値は重複も含めて

$$
\boxed{\mu=\pm\sqrt{-a}}
$$

である。

### (ii) $A$ と $X$ の同時対角化

$A$ の相異なる固有値を $\lambda_1,\ldots,\lambda_n$ 、対応する固有ベクトルを $v_1,\ldots,v_n$ とする。 $AX=XA$ なら、

$$
A(Xv_i)=X(Av_i)=\lambda_iXv_i.
$$

したがって $Xv_i$ は $\lambda_i$ の固有空間に属する。この固有空間は一次元なので、ある $\xi_i\in\mathbb C$ により

$$
Xv_i=\xi_iv_i
$$

と書ける。 $P=(v_1,\ldots,v_n)$ とすれば、

$$
P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),
\qquad
P^{-1}XP=\operatorname{diag}(\xi_1,\ldots,\xi_n).
$$

よって $A$ と $X$ は同時対角化可能である。

### (iii) $X$ と $Y$ の可換性

(ii) と同じ固有ベクトル基底では、 $A$ と可換な $X,Y$ はともに対角行列になる。したがって

$$
P^{-1}XYP
=(P^{-1}XP)(P^{-1}YP)
=(P^{-1}YP)(P^{-1}XP)
=P^{-1}YXP
$$

であり、 $XY=YX$ である。

### (iv) 像の次元

$A=\operatorname{diag}(a_1,\ldots,a_n)$ とし、 $X=(x_{ij})$ とすると、

$$
\{f_A(X)\}_{ij}=(a_i-a_j)x_{ij}.
$$

$a_i$ はすべて相異なるので、対角成分は常に $0$ であり、非対角成分は任意に指定できる。したがって

$$
f_A(\operatorname{Mat}(n))
=\{Y=(y_{ij})\mid y_{ii}=0\}
$$

であり、

$$
\dim f_A(\operatorname{Mat}(n))=n^2-n
$$

となる。
