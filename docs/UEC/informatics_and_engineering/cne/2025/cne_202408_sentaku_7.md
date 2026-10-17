---
sidebar_label: 2024年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Norm
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Discrete-Linear-Dynamical-System-Convergence
  - Mathematics.Numerical-Analysis.Power-Method
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 数値計算

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

行列

$$
A=\begin{pmatrix}1&2\\2&3\end{pmatrix}
$$

は固有値 $\lambda_1=2+\sqrt5$, $\lambda_2=2-\sqrt5$ およびそれぞれの固有ベクトル

$$
\boldsymbol v_1=\left(\frac{\sqrt5-1}{2},1\right)^T,
\qquad
\boldsymbol v_2=\left(1,\frac{1-\sqrt5}{2}\right)^T
$$

を持つ。ただし固有ベクトルは最大値ノルム（無限大ノルム）で規格化されている。この行列に対し次の無限回反復を考える。

(i) $\boldsymbol y^{(0)}=(1,1)^T$ とする。

(ii) $k=1,2,3,\ldots$ に対して以下を反復する。

$$
\begin{aligned}
\boldsymbol z^{(k)}&:=A\boldsymbol y^{(k-1)},\\
\rho^{(k)}&:=\frac{(\boldsymbol y^{(k-1)})^T\boldsymbol z^{(k)}}{(\boldsymbol y^{(k-1)})^T\boldsymbol y^{(k-1)}},\\
\boldsymbol y^{(k)}&:=\frac{\boldsymbol z^{(k)}}{\|\boldsymbol z^{(k)}\|}.
\end{aligned}
$$

ただしノルムは最大値ノルムを用いる。

以下の問いに答えよ。

1. $\boldsymbol y^{(0)}$ を $\boldsymbol v_1$ および $\boldsymbol v_2$ の線形結合で表せ。

2. $\boldsymbol y^{(k-1)}=c_1^{(k-1)}\boldsymbol v_1+c_2^{(k-1)}\boldsymbol v_2$, $\boldsymbol y^{(k)}=c_1^{(k)}\boldsymbol v_1+c_2^{(k)}\boldsymbol v_2$ と置く。$c_1^{(k)},c_2^{(k)}$ を $c_1^{(k-1)},c_2^{(k-1)},\lambda_1,\lambda_2$ および $\|\boldsymbol z^{(k)}\|$ を用いて表し，かつ，任意の $k=0,1,2,\ldots$ に対して $c_1^{(k)}\ne0$ であることを示せ。

3. $r^{(k)}=c_2^{(k)}/c_1^{(k)}$ と置く。

   $$
   \lim_{k\to\infty}r^{(k)}=0,
   \qquad
   \lim_{k\to\infty}\|\boldsymbol y^{(k)}-c_1^{(k)}\boldsymbol v_1\|=0
   $$

   を証明せよ。ただし $\lim_{k\to\infty}|c_1^{(k)}|<\infty$ を既知として良い。

4. $\lim_{k\to\infty}|c_1^{(k)}|=1$ を証明せよ。ただし任意の $n$ 元ベクトル $\boldsymbol a,\boldsymbol b$ に対して以下の不等式が成り立つことを用いてよい。

   $$
   \|\boldsymbol a\|-\|\boldsymbol a-\boldsymbol b\|
   \le\|\boldsymbol b\|
   \le\|\boldsymbol a\|+\|\boldsymbol a-\boldsymbol b\|.\tag{1}
   $$

5. $\lim_{k\to\infty}\rho^{(k)}=\lambda_1$ を証明せよ。

最大値ノルム：maximum norm，無限大ノルム：infinity norm，固有値：eigenvalue，固有ベクトル：eigenvector，線形結合：linear combination

#### 题目描述

矩阵

$$
A=\begin{pmatrix}1&2\\2&3\end{pmatrix}
$$

具有特征值 $\lambda_1=2+\sqrt5$、$\lambda_2=2-\sqrt5$，相应特征向量为

$$
\boldsymbol v_1=\left(\frac{\sqrt5-1}{2},1\right)^T,
\qquad
\boldsymbol v_2=\left(1,\frac{1-\sqrt5}{2}\right)^T.
$$

特征向量已按最大值范数（无穷范数）归一化。对该矩阵考虑以下无限次迭代。

(i) 令 $\boldsymbol y^{(0)}=(1,1)^T$。

(ii) 对 $k=1,2,3,\ldots$，重复计算

$$
\begin{aligned}
\boldsymbol z^{(k)}&:=A\boldsymbol y^{(k-1)},\\
\rho^{(k)}&:=\frac{(\boldsymbol y^{(k-1)})^T\boldsymbol z^{(k)}}{(\boldsymbol y^{(k-1)})^T\boldsymbol y^{(k-1)}},\\
\boldsymbol y^{(k)}&:=\frac{\boldsymbol z^{(k)}}{\|\boldsymbol z^{(k)}\|}.
\end{aligned}
$$

其中范数均采用最大值范数。请回答下列问题。

1. 将 $\boldsymbol y^{(0)}$ 表示为 $\boldsymbol v_1$ 与 $\boldsymbol v_2$ 的线性组合。

2. 设 $\boldsymbol y^{(k-1)}=c_1^{(k-1)}\boldsymbol v_1+c_2^{(k-1)}\boldsymbol v_2$、$\boldsymbol y^{(k)}=c_1^{(k)}\boldsymbol v_1+c_2^{(k)}\boldsymbol v_2$。使用 $c_1^{(k-1)},c_2^{(k-1)},\lambda_1,\lambda_2$ 和 $\|\boldsymbol z^{(k)}\|$ 表示 $c_1^{(k)},c_2^{(k)}$，并证明任意 $k=0,1,2,\ldots$ 均有 $c_1^{(k)}\ne0$。

3. 令 $r^{(k)}=c_2^{(k)}/c_1^{(k)}$。证明

   $$
   \lim_{k\to\infty}r^{(k)}=0,
   \qquad
   \lim_{k\to\infty}\|\boldsymbol y^{(k)}-c_1^{(k)}\boldsymbol v_1\|=0.
   $$

   可以将 $\lim_{k\to\infty}|c_1^{(k)}|<\infty$ 视为已知。

4. 证明 $\lim_{k\to\infty}|c_1^{(k)}|=1$。可以使用对任意 $n$ 维向量 $\boldsymbol a,\boldsymbol b$ 成立的不等式

   $$
   \|\boldsymbol a\|-\|\boldsymbol a-\boldsymbol b\|
   \le\|\boldsymbol b\|
   \le\|\boldsymbol a\|+\|\boldsymbol a-\boldsymbol b\|.\tag{1}
   $$

5. 证明 $\lim_{k\to\infty}\rho^{(k)}=\lambda_1$。

## **Kai**

固有値・固有ベクトルを

$$
\begin{aligned}
\lambda_1&=2+\sqrt5,&
v_1&=\begin{pmatrix}(\sqrt5-1)/2\\1\end{pmatrix},\\[6pt]
\lambda_2&=2-\sqrt5,&
v_2&=\begin{pmatrix}1\\ (1-\sqrt5)/2\end{pmatrix}.
\end{aligned}
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

## **Reference**

- [公式原題（大学公開PDF）](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_4_i_choice202408.pdf)
