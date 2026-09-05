---
sidebar_label: 2024年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Numerical-Analysis
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Norm
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Discrete-Linear-Dynamical-System-Convergence
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 数値計算

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

行列

$$
A=\begin{pmatrix}1&2\\2&3\end{pmatrix}
$$

に、初期値 $y^{(0)}=(1,1)^{\mathsf T}$ として

$$
z^{(k)}=Ay^{(k-1)},\qquad
\rho^{(k)}=\frac{(y^{(k-1)})^{\mathsf T}z^{(k)}}
{(y^{(k-1)})^{\mathsf T}y^{(k-1)}},\qquad
y^{(k)}=\frac{z^{(k)}}{\lVert z^{(k)}\rVert_\infty}
$$

を適用する。固有値・固有ベクトルによる展開から、反復ベクトルが最大固有値の固有ベクトルへ収束し、Rayleigh 商が最大固有値へ収束することを示せ。

[公式問題（PDF第11頁）](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_i_choice202408.pdf)に基づく設問要約：(1) 初期ベクトルの固有ベクトル展開、(2) 展開係数 $c_i^{(k)}$ の更新式と $c_1^{(k)}\ne0$、(3) $r^{(k)}=c_2^{(k)}/c_1^{(k)}\to0$ と $\|y^{(k)}-c_1^{(k)}v_1\|_\infty\to0$、(4) $|c_1^{(k)}|\to1$、(5) $\rho^{(k)}\to\lambda_1$ を順に示す。小問 (3) では $|c_1^{(k)}|$ の極限が有限であることを既知としてよく、小問 (4) では逆三角不等式を使ってよい。

### 题目描述

对给定对称矩阵施行以无穷范数归一化的幂迭代。利用特征向量展开证明迭代向量收敛到主特征向量，并证明 Rayleigh 商收敛到最大特征值。

## **Kai**

固有値・固有ベクトルを

$$
\lambda_1=2+\sqrt5,\quad
\lambda_2=2-\sqrt5,\qquad
v_1=\begin{pmatrix}(\sqrt5-1)/2\\1\end{pmatrix},\quad
v_2=\begin{pmatrix}1\\ (1-\sqrt5)/2\end{pmatrix}
$$

とする。

### 1.

連立方程式を解くと、

$$
y^{(0)}=
\frac{5+3\sqrt5}{10}v_1+
\frac{5-\sqrt5}{10}v_2.
$$

したがって、

$$
\boxed{c_1^{(0)}=\frac{5+3\sqrt5}{10}},\qquad
\boxed{c_2^{(0)}=\frac{5-\sqrt5}{10}}.
$$

### 2.

$z^{(k)}=Ay^{(k-1)}$ より、

$$
\boxed{
c_i^{(k)}=
\frac{\lambda_i c_i^{(k-1)}}{\lVert z^{(k)}\rVert_\infty}
\quad(i=1,2)
}.
$$

$c_1^{(0)}>0$, $\lambda_1>0$, $\lVert z^{(k)}\rVert_\infty>0$ であるから、帰納的に

$$
\boxed{c_1^{(k)}\ne0\quad(k=0,1,2,\ldots)}.
$$

### 3.

$r^{(k)}=c_2^{(k)}/c_1^{(k)}$ とおくと、

$$
r^{(k)}=\left(\frac{\lambda_2}{\lambda_1}\right)^k r^{(0)}.
$$

$|\lambda_2/\lambda_1|<1$ より、

$$
\boxed{\lim_{k\to\infty}r^{(k)}=0}.
$$

また、$|c_1^{(k)}|$ が有界であることを用いれば、

$$
\left\lVert y^{(k)}-c_1^{(k)}v_1\right\rVert_\infty
=|c_1^{(k)}r^{(k)}|\,\lVert v_2\rVert_\infty
\longrightarrow0.
$$

したがって、

$$
\boxed{
\lim_{k\to\infty}
\left\lVert y^{(k)}-c_1^{(k)}v_1\right\rVert_\infty=0
}.
$$

### 4.

$\lVert y^{(k)}\rVert_\infty=\lVert v_1\rVert_\infty=1$ である。逆三角不等式を $a=y^{(k)}$, $b=c_1^{(k)}v_1$ に適用すると、

$$
1-\left\lVert y^{(k)}-c_1^{(k)}v_1\right\rVert_\infty
\le |c_1^{(k)}|
\le
1+\left\lVert y^{(k)}-c_1^{(k)}v_1\right\rVert_\infty.
$$

よって、はさみうちの原理から

$$
\boxed{\lim_{k\to\infty}|c_1^{(k)}|=1}.
$$

### 5.

$A$ は対称行列なので $v_1\perp v_2$ である。したがって、

$$
\rho^{(k)}=
\frac{
\lambda_1(c_1^{(k-1)})^2\lVert v_1\rVert_2^2+
\lambda_2(c_2^{(k-1)})^2\lVert v_2\rVert_2^2
}{
(c_1^{(k-1)})^2\lVert v_1\rVert_2^2+
(c_2^{(k-1)})^2\lVert v_2\rVert_2^2
}.
$$

$c_2^{(k-1)}/c_1^{(k-1)}=r^{(k-1)}\to0$ より、

$$
\boxed{\lim_{k\to\infty}\rho^{(k)}=\lambda_1=2+\sqrt5}.
$$
