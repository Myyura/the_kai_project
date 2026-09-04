---
sidebar_label: "2024年度 数理科学 [I-2]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-2]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\begin{pmatrix}4&-1&2\\-1&4&-2\\2&-2&7\end{pmatrix}
$$

について、(1) 固有値をすべて求めよ。(2) $Q^TAQ$ が対角行列となる直交行列 $Q$ を1つ求めよ。

(3) 実数 $x,y,z$ が $x^2+y^2+z^2=1$ を満たすもとで、$f(x,y,z)=4x^2+4y^2+7z^2-2xy+4xz-4yz$ が最大値、最小値を取る点をそれぞれすべて求めよ。

## **Kai**

### (1)

$u=(1,-1,2)^T$ とおけば $A=3I+uu^T$、$u^Tu=6$ である。よって $u$ の方向の固有値は9、その直交補空間の固有値は3。従って $\boxed{3,3,9}$。

### (2)

$$
\boxed{Q=\begin{pmatrix}
1/\sqrt2&1/\sqrt3&1/\sqrt6\\
1/\sqrt2&-1/\sqrt3&-1/\sqrt6\\
0&-1/\sqrt3&2/\sqrt6
\end{pmatrix}},\qquad Q^TAQ=\operatorname{diag}(3,3,9).
$$

### (3)

$v=(x,y,z)^T$ に対して $f=3+(u^Tv)^2$ なので、最大値は9で、達成点は

$$
\boxed{v=\pm\frac1{\sqrt6}(1,-1,2)^T}.
$$

最小値は3で、達成点は $u^Tv=0$ を満たすすべての単位ベクトル、すなわち

$$
\boxed{v=\frac{\cos t}{\sqrt2}(1,1,0)^T+\frac{\sin t}{\sqrt3}(1,-1,-1)^T,\quad0\le t<2\pi}.
$$
