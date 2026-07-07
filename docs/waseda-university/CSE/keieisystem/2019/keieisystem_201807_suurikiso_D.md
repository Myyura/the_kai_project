---
sidebar_label: "2018年7月実施 数理基礎 D"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Complex-Analysis.Complex-Numbers
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Decomposition
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 D

## **Author**
祭音Myyura

## **Description**

1. 実 $n$ 次正方行列 $A$ とベクトル $\boldsymbol a$ に対し、ある自然数 $m$ について $A^m\boldsymbol a\neq\boldsymbol0$、$A^{m+1}\boldsymbol a=\boldsymbol0$ が成り立つとする。$\boldsymbol a,A\boldsymbol a,\ldots,A^m\boldsymbol a$ が線形独立であることを示せ。
2. $z=a+bi$ に対して

   $$
   A(z)=\begin{pmatrix}-a&-b\\b&-a\end{pmatrix}
   $$

   とする。原題が求める積と逆行列の関係を検討せよ。
3. $A=\begin{pmatrix}0&2&1\\2&3&2\\1&2&0\end{pmatrix}$、$\boldsymbol v_1=(1,0,-1)^{\mathsf T}/\sqrt2$ とする。$\boldsymbol v_1$ が固有ベクトルであることを示し、これと互いに直交する残り2本の単位固有ベクトルを求めよ。

## **Kai**

### [小問 1]

線形関係

$$
c_0\boldsymbol a+c_1A\boldsymbol a+\cdots+c_mA^m\boldsymbol a=\boldsymbol0
$$

を仮定する。0でない係数があるとして、その添字の最小値を $k$ とする。両辺に $A^{m-k}$ を作用させると、$j>k$ の項は $A^{m+(j-k)}\boldsymbol a=\boldsymbol0$ となるため

$$
c_kA^m\boldsymbol a=\boldsymbol0
$$

だけが残る。しかし $c_k\neq0$ かつ $A^m\boldsymbol a\neq\boldsymbol0$ なので矛盾する。したがって全係数は0であり、これらのベクトルは線形独立である。

### [小問 2]

$z_j=a_j+b_ji$ として直接掛け算すれば

$$
\boxed{A(z_1z_2)=-A(z_1)A(z_2)}
$$

が成り立つ。また

$$
\det A(z)=a^2+b^2
$$

なので $z\neq0$ なら正則であり、

$$
A(z)^{-1}
=\frac1{a^2+b^2}
\begin{pmatrix}-a&b\\-b&-a\end{pmatrix}.
$$

一方、$z^{-1}=(a-bi)/(a^2+b^2)$ を代入すると

$$
\boxed{A(z^{-1})=A(z)^{-1}}
$$

である。原題には $A(z^{-1})=-A(z)^{-1}$ と印刷されているが、これは $z=1$ とするだけで $-I=I$ を要求するため成立しない。したがって第2式の負号は誤植と判断できる。

### [小問 3]

計算すると

$$
A\boldsymbol v_1=-\boldsymbol v_1
$$

なので、$\boldsymbol v_1$ は固有値 $-1$ の単位固有ベクトルである。残りは例えば

$$
\boxed{
\boldsymbol v_2=\frac1{\sqrt3}(1,-1,1)^{\mathsf T},\qquad
\boldsymbol v_3=\frac1{\sqrt6}(1,2,1)^{\mathsf T}
}
$$

と取れる。実際、

$$
A\boldsymbol v_2=-\boldsymbol v_2,\qquad
A\boldsymbol v_3=5\boldsymbol v_3
$$

であり、3本はすべて長さ1で互いに直交する。
