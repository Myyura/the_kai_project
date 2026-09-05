---
sidebar_label: "2019年8月実施 物理学 [III]"
tags:
  - Kyushu-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Number-Operator-Spectrum
  - Physics.Quantum-Mechanics.Canonical-Commutation-Relations
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-Uncertainty
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[III\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

題意の要約。

### [A]

一次元調和振動子

$$
H_1=\frac{\hat p^2}{2m}+\frac{m\omega^2\hat x^2}{2},\quad
[\hat x,\hat p]=i\hbar,\quad
\hat a=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x+\frac{i\hat p}{m\omega}\right),\quad
\hat a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x-\frac{i\hat p}{m\omega}\right),\quad
\hat N=\hat a^\dagger\hat a
$$

を考え、$\hat N|n\rangle=n|n\rangle$、$\langle m|n\rangle=\delta_{mn}$ とする。

1. $[\hat a,\hat a^\dagger]=1$、$[\hat N,\hat a]=-\hat a$、$[\hat N,\hat a^\dagger]=\hat a^\dagger$ を示し、$H_1$ を $\hat a,\hat a^\dagger$ で表す。
2. $\hat N\hat a^\dagger|n\rangle=(n+1)\hat a^\dagger|n\rangle$ と $\hat N\hat a|n\rangle=(n-1)\hat a|n\rangle$ を示す。
3. $n$ が非負整数であることを示す。
4. $\langle n|\hat x^2|n\rangle$、$\langle n|\hat p^2|n\rangle$ とその積を求める。

次に、質量がともに $m$ の独立な振動子を $+$ 型、$-$ 型とし、

$$
H_2=\frac{\hat p_+^2+\hat p_-^2}{2m}
+\frac{m\omega_+^2\hat x_+^2+m\omega_-^2\hat x_-^2}{2}
$$

とする。異なる型の演算子は可換で、同じ型では上の交換関係が成立する。

5. $\omega_+=\omega$、$\omega_-=2\omega$ の場合にエネルギーを $n_+,n_-$ で表し、基底状態から第3励起状態までのエネルギーと縮退度を求める。
6. $\hat J_+=\hbar\hat a_+^\dagger\hat a_-$、$\hat J_-=\hbar\hat a_-^\dagger\hat a_+$、$\hat J_z=\frac\hbar2(\hat N_+-\hat N_-)$、$\hat N_\pm=\hat a_\pm^\dagger\hat a_\pm$ とする。$[\hat J_+,\hat J_-]=2\hbar\hat J_z$ を示す。
7. $\hat N=\hat N_++\hat N_-$ として、$\hat J^2=\hat J_z^2+\frac12(\hat J_+\hat J_-+\hat J_-\hat J_+)$ を $\hbar,\hat N$ で表す。

### [B]

二準位系に対し

$$
H_0(\lambda)=\begin{pmatrix}k\lambda&0\\0&-k\lambda\end{pmatrix},\quad
\psi_1=\begin{pmatrix}0\\1\end{pmatrix},\quad
\psi_2=\begin{pmatrix}1\\0\end{pmatrix},\quad k>0,\quad\lambda\in\mathbb R
$$

とする。

1. $\psi_1,\psi_2$ のエネルギー $E_1,E_2$ を求め、$-1<\lambda<1$ でグラフを描く。
2. $H_p=\begin{pmatrix}0&c\\c^*&0\end{pmatrix}$（$c\in\mathbb C$）を加えた系の固有値 $E'_1,E'_2$ を小さい方から求め、(1) のグラフに区別して描き加える。
3. $\lambda>0$ とし、$\delta E_u=E_2-E_1$、$\delta E_p=E'_2-E'_1$、$r=\delta E_u/c$ とおく。$\delta E_p/\delta E_u$ を $r$ で表す。
4. 固有状態を $\psi'_1=\alpha\psi_1+\beta\psi_2$、$\psi'_2=-\beta^*\psi_1+\alpha^*\psi_2$ と書く。$|\alpha|^2+|\beta|^2=1$ を用い、$|\alpha|,|\beta|$ を $r$ で表す。

出典：[九州大学 令和2年度 物理学III](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=12)。

### 题目描述

**A（量子简谐振子）**：考虑质量为 $m$、角频率为 $\omega$ 的一维简谐振子，$[\hat x,\hat p]=i\hbar$。产生算符 $\hat a^\dagger$、湮灭算符 $\hat a$ 按上方定义，数算符为 $\hat N=\hat a^\dagger\hat a$，归一化本征态满足 $\hat N|n\rangle=n|n\rangle$。

1. 求 $[\hat a,\hat a^\dagger]$、$[\hat N,\hat a]$、$[\hat N,\hat a^\dagger]$，并用产生、湮灭算符表示 Hamiltonian。
2. 证明 $\hat a^\dagger|n\rangle$、$\hat a|n\rangle$ 在非零时分别属于 $\hat N$ 的本征值 $n+1$、$n-1$。
3. 证明数算符的本征值为非负整数。
4. 求 $\langle n|\hat x^2|n\rangle$、$\langle n|\hat p^2|n\rangle$ 及二者乘积。

再考虑质量同为 $m$ 的两个独立振子，分别用 $+$、$-$ 标记，不同振子的算符对易。

5. 当 $\omega_+=\omega$、$\omega_-=2\omega$ 时，用 $n_+,n_-$ 表示能量，并给出基态至第三激发能级的能量和简并度。
6. 定义 $\hat J_+=\hbar\hat a_+^\dagger\hat a_-$、$\hat J_-=\hbar\hat a_-^\dagger\hat a_+$、$\hat J_z=\frac\hbar2(\hat N_+-\hat N_-)$，证明 $[\hat J_+,\hat J_-]=2\hbar\hat J_z$。
7. 令 $\hat N=\hat N_++\hat N_-$，用 $\hbar,\hat N$ 表示 $\hat J^2=\hat J_z^2+\frac12(\hat J_+\hat J_-+\hat J_-\hat J_+)$。

**B（二能级系统）**：设

$$
H_0(\lambda)=\begin{pmatrix}k\lambda&0\\0&-k\lambda\end{pmatrix},\quad
\psi_1=\begin{pmatrix}0\\1\end{pmatrix},\quad
\psi_2=\begin{pmatrix}1\\0\end{pmatrix},\quad k>0,\quad\lambda\in\mathbb R.
$$

1. 求 $\psi_1,\psi_2$ 的能量 $E_1,E_2$，并在 $-1<\lambda<1$ 内画图。
2. 加入扰动 $H_p=\begin{pmatrix}0&c\\c^*&0\end{pmatrix}$（$c\in\mathbb C$），求按从小到大排列的能量 $E'_1,E'_2$，并画在同一图中加以区分。
3. 在 $\lambda>0$ 时令 $\delta E_u=E_2-E_1$、$\delta E_p=E'_2-E'_1$、$r=\delta E_u/c$，用 $r$ 表示 $\delta E_p/\delta E_u$。
4. 将本征态写成 $\psi'_1=\alpha\psi_1+\beta\psi_2$、$\psi'_2=-\beta^*\psi_1+\alpha^*\psi_2$，利用归一化条件 $|\alpha|^2+|\beta|^2=1$，用 $r$ 表示 $|\alpha|,|\beta|$。

## **Kai**
### \[A\]
#### (1)
$\hat{x}, \hat{p}$ の交換関係を使って、次のように計算できる：

$$
  \begin{aligned}
  \left[ \hat{a}, \hat{a}^\dagger \right]
  &= \frac{m \omega}{2 \hbar} \cdot \frac{-2i}{m \omega}
  \left[ \hat{x}, \hat{p} \right]
  \\
  &= 1
  \\
  \left[ \hat{N}, \hat{a} \right]
  &= \left[ \hat{a}^\dagger \hat{a}, \hat{a} \right]
  \\
  &= \hat{a}^\dagger \left[ \hat{a}, \hat{a} \right]
  + \left[ \hat{a}^\dagger, \hat{a} \right] \hat{a}
  \\
  &= - \hat{a}
  \\
  \left[ \hat{N}, \hat{a}^\dagger \right]
  &= \left[ \hat{a}^\dagger \hat{a}, \hat{a}^\dagger \right]
  \\
  &= \hat{a}^\dagger \left[ \hat{a}, \hat{a}^\dagger \right]
  + \left[ \hat{a}^\dagger, \hat{a}^\dagger \right] \hat{a}
  \\
  &= \hat{a}^\dagger
  \end{aligned}
$$

また、

$$
H_1=\frac{\hbar\omega}{2}(\hat a\hat a^\dagger+\hat a^\dagger\hat a)
=\hbar\omega\left(\hat N+\frac12\right).
$$

#### (2)
(1) で得た交換関係を使って、次のように計算できる：

$$
  \begin{aligned}
  \hat{N} \hat{a}^\dagger | n \rangle
  &= \left( \hat{a}^\dagger \hat{N} + \hat{a}^\dagger \right) | n \rangle
  \\
  &= \left( n + 1 \right) \hat{a}^\dagger | n \rangle
  \\
  \hat{N} \hat{a} | n \rangle
  &= \left( \hat{a} \hat{N} - \hat{a} \right) | n \rangle
  \\
  &= \left( n - 1 \right) \hat{a} | n \rangle
  \end{aligned}
$$

#### (3)

規格化された固有状態に対し、$n=\langle n|\hat a^\dagger\hat a|n\rangle=\|\hat a|n\rangle\|^2\ge0$ である。

非整数の固有値 $\nu\ge0$ があると仮定し、$k=\lfloor\nu\rfloor+1$ とする。このとき

$$
\|\hat a^k|\nu\rangle\|^2
=\nu(\nu-1)\cdots(\nu-k+1)>0.
$$

したがって、この非零ベクトルは固有値 $\nu-k<0$ に属することになり矛盾する。よって固有値は非負整数に限られる。

なお、$\hat a|0\rangle=0$ は位置表示で規格化可能なガウス関数 $\psi_0(x)\propto e^{-m\omega x^2/(2\hbar)}$ を解に持つ。$\|\hat a^\dagger|n\rangle\|^2=n+1>0$ なので、これを繰り返し上げるとすべての非負整数が得られる。

#### (4)

$$
\begin{aligned}
\hat{x}
&= \sqrt{\frac{\hbar}{2 m \omega}} \left( \hat{a}^\dagger + \hat{a} \right)
\\
\hat{p}
&= i \sqrt{\frac{m \hbar \omega}{2}} \left( \hat{a}^\dagger - \hat{a} \right)
\\
\hat{x}^2
&= \frac{\hbar}{2 m \omega} \left( \hat{a}^\dagger \hat{a}^\dagger
+ \hat{a}^\dagger \hat{a} + \hat{a} \hat{a}^\dagger + \hat{a} \hat{a}
\right)
\\
&= \frac{\hbar}{2 m \omega} \left( 2 \hat{N} + 1
+ \hat{a}^\dagger \hat{a}^\dagger + \hat{a} \hat{a} \right)
\\
\hat{p}^2
&= - \frac{m \hbar \omega}{2} \left( \hat{a}^\dagger \hat{a}^\dagger
- \hat{a}^\dagger \hat{a} - \hat{a} \hat{a}^\dagger + \hat{a} \hat{a}
\right)
\\
&= \frac{m \hbar \omega}{2} \left( 2 \hat{N} + 1
- \hat{a}^\dagger \hat{a}^\dagger - \hat{a} \hat{a} \right)
\\
\langle n | \hat{x}^2 | n \rangle
&= \frac{\hbar}{2 m \omega} (2n+1)
\\
\langle n | \hat{p}^2 | n \rangle
&= \frac{m \hbar \omega}{2} (2n+1)
\\
\langle n | \hat{x}^2 | n \rangle
\langle n | \hat{p}^2 | n \rangle
&= \frac{\hbar^2}{4} (2n+1)^2
\end{aligned}
$$

#### (5)

独立な二振動子のエネルギーを足すと

$$
E_{n_+,n_-}=\hbar\omega\left(n_++2n_-+\frac32\right).
$$

| 状態 | $(n_+,n_-)$ | エネルギー | 縮退度 |
| --- | --- | --- | --- |
| 基底 | $(0,0)$ | $3\hbar\omega/2$ | 1 |
| 第1励起 | $(1,0)$ | $5\hbar\omega/2$ | 1 |
| 第2励起 | $(2,0),(0,1)$ | $7\hbar\omega/2$ | 2 |
| 第3励起 | $(3,0),(1,1)$ | $9\hbar\omega/2$ | 2 |

#### (6)

異なる型の演算子の可換性より

$$
\hat J_+\hat J_-=\hbar^2\hat N_+(\hat N_-+1),\qquad
\hat J_-\hat J_+=\hbar^2\hat N_-(\hat N_++1).
$$

差を取れば $[\hat J_+,\hat J_-]=\hbar^2(\hat N_+-\hat N_-)=2\hbar\hat J_z$ となる。

#### (7)

$$
\begin{aligned}
\hat J^2
&=\frac{\hbar^2}{4}(\hat N_+-\hat N_-)^2
+\frac{\hbar^2}{2}(2\hat N_+\hat N_-+\hat N_++\hat N_-)\\
&=\frac{\hbar^2}{4}\hat N(\hat N+2).
\end{aligned}
$$

### \[B\]

#### (1)

$E_1=-k\lambda$、$E_2=k\lambda$ であり、$\lambda=0$ で交差する直線になる。

#### (2)

$D=\sqrt{k^2\lambda^2+|c|^2}$ とおくと

$$
\det(EI-H_0-H_p)=E^2-k^2\lambda^2-|c|^2,
\qquad E'_1=-D,\quad E'_2=D.
$$

$c\ne0$ なら最小ギャップは $\lambda=0$ での $2|c|$ となり、準位は交差しない。$c=0$ では $E'_{1,2}=\mp k|\lambda|$ で、$\lambda=0$ では縮退する。

![無摂動準位と結合による反交差](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/science/phys/2020/kyushu-phys-2019-avoided-crossing.svg)

#### (3)

$\lambda>0$、$c\ne0$ では

$$
\frac{\delta E_p}{\delta E_u}
=\frac{2D}{2k\lambda}
=\sqrt{1+\frac{4}{|r|^2}}.
$$

$c$ が実数の場合には $|r|^2=r^2$ と書ける。$c=0$ では $r$ は定義されないが、ギャップの比は $1$ である。

#### (4)

$\psi'_1=(\beta,\alpha)^{\mathsf T}$ の固有方程式から

$$
(k\lambda+D)\beta+c\alpha=0.
$$

規格化条件と $D^2-k^2\lambda^2=|c|^2$ を用いると

$$
|\alpha|^2=\frac12\left(1+\frac{k\lambda}{D}\right),\qquad
|\beta|^2=\frac12\left(1-\frac{k\lambda}{D}\right).
$$

したがって

$$
\boxed{|\alpha|=\sqrt{\frac12\left(1+\frac1{\sqrt{1+4/|r|^2}}\right)}},\qquad
\boxed{|\beta|=\sqrt{\frac12\left(1-\frac1{\sqrt{1+4/|r|^2}}\right)}}.
$$

$c=0$、$\lambda>0$ の場合には $|\alpha|=1$、$|\beta|=0$ となる。
