---
sidebar_label: "2019年7月実施 数理基礎 D"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Matrix-Exponential
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 数理基礎 D

## **Author**
祭音Myyura

## **Description**

1. $\boldsymbol a_1,\ldots,\boldsymbol a_r$ が線形独立で、$\boldsymbol a_1,\ldots,\boldsymbol a_r,\boldsymbol a_{r+1}$ が線形従属なら、$\boldsymbol a_{r+1}$ は前 $r$ 本の線形結合として一意に表せることを示せ。
2. $A^n=0$ となる正方行列 $A$ の固有値を求めよ。
3. $A=\begin{pmatrix}a&1\\0&a\end{pmatrix}$ に対し $\exp A$ を求めよ。

## **Kai**

### [小問 1]

線形従属性から、すべては0でない係数 $c_1,\ldots,c_{r+1}$ が存在して

$$
\sum_{i=1}^rc_i\boldsymbol a_i+c_{r+1}\boldsymbol a_{r+1}=\boldsymbol0
$$

となる。もし $c_{r+1}=0$ なら前 $r$ 本の線形独立性に反するため、$c_{r+1}\neq0$ である。よって

$$
\boldsymbol a_{r+1}=-\sum_{i=1}^r\frac{c_i}{c_{r+1}}\boldsymbol a_i.
$$

2通りの表示があると仮定して差を取れば、前 $r$ 本の非自明な線形関係を得てしまう。したがって表示は一意である。

### [小問 2]

$\lambda$ を固有値、$\boldsymbol v\neq\boldsymbol0$ を対応する固有ベクトルとする。$A\boldsymbol v=\lambda\boldsymbol v$ を $n$ 回適用すると

$$
\boldsymbol0=A^n\boldsymbol v=\lambda^n\boldsymbol v.
$$

$\boldsymbol v\neq\boldsymbol0$ なので $\lambda^n=0$、したがって

$$
\boxed{\lambda=0}
$$

である。ゆえにすべての固有値は $0$ である。

### [小問 3]

$$
A=aI+N,\qquad N=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad N^2=0
$$

と分解する。$aI$ と $N$ は可換なので

$$
e^A=e^{aI}e^N=e^a(I+N).
$$

よって

$$
\boxed{
e^A=e^a\begin{pmatrix}1&1\\0&1\end{pmatrix}
=\begin{pmatrix}e^a&e^a\\0&e^a\end{pmatrix}
}.
$$
