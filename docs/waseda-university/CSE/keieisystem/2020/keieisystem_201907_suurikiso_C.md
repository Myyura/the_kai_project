---
sidebar_label: "2019年7月実施 数理基礎 C"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Stochastic-Matrix
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Linear-Transformation
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 数理基礎 C

## **Author**
祭音Myyura

## **Description**

1. 各成分が非負で、各行の和が1である行列を確率行列とする。$A,B$ がともに $n$ 次確率行列なら $AB$ も確率行列であることを示せ。
2. 次のベクトルが生成する部分空間の次元を求めよ。

   $$
   (1,1,1)^{\mathsf T},\quad(0,0,0)^{\mathsf T},\quad
   (1,-3,5)^{\mathsf T},\quad(1,5,-3)^{\mathsf T}
   $$
3. 直線 $y=mx$ に関する鏡映を表す行列を求めよ。

## **Kai**

### [小問 1]

$A=(a_{ik})$、$B=(b_{kj})$ とする。積の各成分は

$$
(AB)_{ij}=\sum_{k=1}^na_{ik}b_{kj}\geq0
$$

なので非負である。また第 $i$ 行の和は

$$
\begin{aligned}
\sum_{j=1}^n(AB)_{ij}
&=\sum_j\sum_ka_{ik}b_{kj}
=\sum_ka_{ik}\left(\sum_jb_{kj}\right)\\
&=\sum_ka_{ik}=1.
\end{aligned}
$$

したがって $AB$ も確率行列である。

### [小問 2]

零ベクトルは次元に寄与しない。また

$$
(1,-3,5)^{\mathsf T}+(1,5,-3)^{\mathsf T}
=2(1,1,1)^{\mathsf T}
$$

なので3本の非零ベクトルは線形従属である。一方、$(1,1,1)^{\mathsf T}$ と $(1,-3,5)^{\mathsf T}$ は互いに定数倍でないため線形独立である。よって

$$
\boxed{\dim V=2}.
$$

### [小問 3]

直線方向の単位ベクトルを

$$
\boldsymbol u=\frac1{\sqrt{1+m^2}}\binom1m
$$

とする。鏡映は直線方向成分を保ち、直交成分の符号を反転するので

$$
R=2\boldsymbol u\boldsymbol u^{\mathsf T}-I.
$$

したがって

$$
\boxed{
R=\frac1{1+m^2}
\begin{pmatrix}
1-m^2&2m\\
2m&m^2-1
\end{pmatrix}
}.
$$
