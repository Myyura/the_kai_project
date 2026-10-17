---
sidebar_label: "2019年8月実施 物理学 [III]"
tags:
  - Kyushu-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Number-Operator-Spectrum
  - Physics.Quantum-Mechanics.Canonical-Commutation-Relations
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
---
# 九州大学 理学府 物理学専攻 2019年8月実施 物理学 \[III\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### [A]

ハミルトニアン $H_1$ が，次の式で与えられる1次元の調和振動子を考える。

$$
H_1=\frac{1}{2m}\hat p^2+\frac{m\omega^2}{2}\hat x^2
$$

ここで，$m,\omega$ は振動子の質量と角振動数である。$\hat x,\hat p$ は，それぞれ，座標，運動量を表す演算子であり，$\hat p=-i\hbar\frac{\partial}{\partial x}$ で表され，演算子間に成り立つ正準交換関係は次のように与えられる。

$$
[\hat x,\hat p]=i\hbar,\qquad[\hat x,\hat x]=0,\qquad[\hat p,\hat p]=0
$$

ここで，$\hbar$ は換算プランク定数であり，$\hbar=h/2\pi$（$h$ はプランク定数）とする。また，演算子 $\hat a^\dagger,\hat a,\hat N$ を下記の通り定義する。

$$
\begin{aligned}
\hat a^\dagger&=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x-\frac{i}{m\omega}\hat p\right),\\
\hat a&=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x+\frac{i}{m\omega}\hat p\right),\\
\hat N&=\hat a^\dagger\hat a
\end{aligned}
$$

演算子 $\hat N$ の固有値を $n$，その固有値によって区別される固有状態を $|n\rangle$ とする。

$$
\hat N|n\rangle=n|n\rangle
$$

この時，以下の問いに答えよ。

(1) 交換関係 $[\hat a,\hat a^\dagger]=1$，$[\hat N,\hat a]=-\hat a$，$[\hat N,\hat a^\dagger]=\hat a^\dagger$ を示せ。また，ハミルトニアン $H_1$ を $\hat a,\hat a^\dagger$ を用いて表わせ。

(2) $\hat N\hat a^\dagger|n\rangle=(n+1)\hat a^\dagger|n\rangle$，および $\hat N\hat a|n\rangle=(n-1)\hat a|n\rangle$ を示せ。

(3) 演算子 $\hat N$ の固有値 $n$ が非負であること，および整数であることを示せ。

(4) $\langle n|\hat x^2|n\rangle$，および $\langle n|\hat p^2|n\rangle$ を計算し，それらの積 $\langle n|\hat x^2|n\rangle\langle n|\hat p^2|n\rangle$ を求めよ。ここで，$\langle m|n\rangle$ は下記の通り与えられる。

$$
\langle m|n\rangle=\begin{cases}1&(m=n)\\0&(m\ne n)\end{cases}
$$

以下の設問では，質量が $m$ で等しい2つの独立した調和振動子を考える。2つの振動子をプラス型，マイナス型とし，それぞれの角振動数を $\omega_\pm$ としたとき，ハミルトニアン $H_2$ は下記の通り与えられる。

$$
\begin{aligned}
H_2={}&\frac{1}{2m}\hat p_+^2+\frac{1}{2m}\hat p_-^2\\
&+\frac{m\omega_+^2}{2}\hat x_+^2+\frac{m\omega_-^2}{2}\hat x_-^2
\end{aligned}\tag{1}
$$

ここで，$\hat x_\pm,\hat p_\pm$ は，それぞれ，プラス型，マイナス型の振動子に対する座標，運動量を表す演算子である。

(5) $\omega_+=\omega$，$\omega_-=2\omega$ のときのエネルギー固有値を，プラス型，マイナス型のエネルギー固有値に対応する非負の整数 $n_+,n_-$ を用いて表現せよ。また，基底状態から第3励起状態までのエネルギー固有値とその縮退度を求めよ。

プラス型振動子に対して $\hat a_+^\dagger,\hat a_+$，マイナス型振動子に対して $\hat a_-^\dagger,\hat a_-$ の演算子を考える。同じ型の振動子の間には1次元の調和振動子で示した交換関係が成り立つとし，異なる型の振動子から取った一対の演算子は常に交換すると仮定する。

$$
[\hat a_+,\hat a_-^\dagger]=[\hat a_-,\hat a_+^\dagger]=0
$$

下記の通り3つの演算子を定義する。

$$
\begin{aligned}
\hat J_+&=\hbar\hat a_+^\dagger\hat a_-,\\
\hat J_-&=\hbar\hat a_-^\dagger\hat a_+,\\
\hat J_z&=\frac{\hbar}{2}(\hat a_+^\dagger\hat a_+-\hat a_-^\dagger\hat a_-)
\end{aligned}
$$

(6) 交換関係 $[\hat J_+,\hat J_-]=2\hbar\hat J_z$ を示せ。

(7) 演算子 $\hat N_+=\hat a_+^\dagger\hat a_+$，$\hat N_-=\hat a_-^\dagger\hat a_-$ を用いて，$\hat N=\hat N_++\hat N_-$ としたとき，

$$
\hat J^2\equiv\hat J_z^2+\frac12(\hat J_+\hat J_-+\hat J_-\hat J_+)
$$

を，$\hbar$ と $\hat N$ を用いて表せ。

### [B]

二準位系の量子力学について考える。ハミルトニアン $H_0$ の行列表示が以下で表されるとし，

$$
H_0(\lambda)=\begin{pmatrix}k\lambda&0\\0&-k\lambda\end{pmatrix}
$$

この系の2つの独立した量子状態を表す波動関数 $\psi_1,\psi_2$ を以下のベクトルに対応させる。

$$
\psi_1=\begin{pmatrix}0\\1\end{pmatrix},\qquad
\psi_2=\begin{pmatrix}1\\0\end{pmatrix}
$$

ここで $k$ は正の実数，$\lambda$ は実数のパラメータとする。

(1) $H_0$ の固有状態 $\psi_1,\psi_2$ に対応するエネルギー固有値 $E_1,E_2$ を求めよ。また，固有値 $E_1,E_2$ を $-1<\lambda<1$ の範囲内で $\lambda$ の関数としてグラフに描け。

次に，上記のハミルトニアンに，以下の行列表示で与えられる項 $H_p$ を加えることを考える。

$$
H_p=\begin{pmatrix}0&c\\c^*&0\end{pmatrix}
$$

ここで，$c$ は任意の複素数である。

(2) $H_0$ に $H_p$ を加えたときのエネルギー固有値 $E'_1,E'_2$ を求めよ。ただし，$E'_1<E'_2$ の関係が成り立つように定義せよ。また，固有値 $E'_1,E'_2$ を $-1<\lambda<1$ の範囲内で $\lambda$ の関数としてグラフに描け。ここで，グラフは，（1）で描いたものに，区別がつくようにして描き加えること。

$H_p$ を加える前と加えた後のエネルギー間隔を，それぞれ，$\delta E_u\equiv E_2-E_1$ と $\delta E_p\equiv E'_2-E'_1$ とする。また，導入する $c$ と $\delta E_u$ の比を $r$，すなわち，$r\equiv\delta E_u/c$ と定義する。ただし，以下では $\lambda>0$ とする。

(3) $H_p$ を加える前後のエネルギー間隔の比 $\delta E_p/\delta E_u$ を，$r$ のみを用いて表せ。

(4) $H_p$ を加えた後の波動関数 $\psi'_1,\psi'_2$ は，以下のように，$H_p$ を加える前の波動関数 $\psi_1,\psi_2$ の線形結合で表すことができる。

$$
\begin{aligned}
\psi'_1&=\alpha\psi_1+\beta\psi_2\\
\psi'_2&=-\beta^*\psi_1+\alpha^*\psi_2
\end{aligned}
$$

規格化条件 $|\alpha|^2+|\beta|^2=1$ を使って，$|\alpha|,|\beta|$ を，$r$ のみを用いて表せ。

#### 题目描述

**[A]**

考虑哈密顿量 $H_1$ 由下式给出的一维简谐振子：

$$
H_1=\frac{1}{2m}\hat p^2+\frac{m\omega^2}{2}\hat x^2.
$$

其中 $m,\omega$ 分别为振子的质量和角频率。$\hat x,\hat p$ 分别是坐标和动量算符，$\hat p=-i\hbar\frac{\partial}{\partial x}$，算符间的正则对易关系为

$$
[\hat x,\hat p]=i\hbar,\qquad[\hat x,\hat x]=0,\qquad[\hat p,\hat p]=0.
$$

$\hbar$ 为约化普朗克常数，$\hbar=h/2\pi$，其中 $h$ 为普朗克常数。定义算符 $\hat a^\dagger,\hat a,\hat N$ 如下：

$$
\begin{aligned}
\hat a^\dagger&=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x-\frac{i}{m\omega}\hat p\right),\\
\hat a&=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat x+\frac{i}{m\omega}\hat p\right),\\
\hat N&=\hat a^\dagger\hat a.
\end{aligned}
$$

记算符 $\hat N$ 的本征值为 $n$，由本征值区分的本征态为 $|n\rangle$，即

$$
\hat N|n\rangle=n|n\rangle.
$$

回答以下问题。

(1) 证明对易关系 $[\hat a,\hat a^\dagger]=1$、$[\hat N,\hat a]=-\hat a$、$[\hat N,\hat a^\dagger]=\hat a^\dagger$，并用 $\hat a,\hat a^\dagger$ 表示哈密顿量 $H_1$。

(2) 证明 $\hat N\hat a^\dagger|n\rangle=(n+1)\hat a^\dagger|n\rangle$ 和 $\hat N\hat a|n\rangle=(n-1)\hat a|n\rangle$。

(3) 证明算符 $\hat N$ 的本征值 $n$ 为非负数，且为整数。

(4) 计算 $\langle n|\hat x^2|n\rangle$、$\langle n|\hat p^2|n\rangle$，并求二者的乘积 $\langle n|\hat x^2|n\rangle\langle n|\hat p^2|n\rangle$。其中内积为

$$
\langle m|n\rangle=\begin{cases}1&(m=n)\\0&(m\ne n).\end{cases}
$$

以下考虑质量同为 $m$ 的两个独立简谐振子。分别称为正型和负型，角频率分别为 $\omega_\pm$，哈密顿量 $H_2$ 为

$$
\begin{aligned}
H_2={}&\frac{1}{2m}\hat p_+^2+\frac{1}{2m}\hat p_-^2\\
&+\frac{m\omega_+^2}{2}\hat x_+^2+\frac{m\omega_-^2}{2}\hat x_-^2.
\end{aligned}\tag{1}
$$

其中 $\hat x_\pm,\hat p_\pm$ 分别是对应于正型、负型振子的坐标和动量算符。

(5) 当 $\omega_+=\omega$、$\omega_-=2\omega$ 时，用对应于正型、负型振子能量本征值的非负整数 $n_+,n_-$ 表示系统的能量本征值，并求从基态至第三激发态的能量本征值及其简并度。

对正型振子考虑算符 $\hat a_+^\dagger,\hat a_+$，对负型振子考虑算符 $\hat a_-^\dagger,\hat a_-$。同种类型振子的算符满足前述一维简谐振子的对易关系，且假设分别取自不同类型振子的一对算符总是对易：

$$
[\hat a_+,\hat a_-^\dagger]=[\hat a_-,\hat a_+^\dagger]=0.
$$

定义以下三个算符：

$$
\begin{aligned}
\hat J_+&=\hbar\hat a_+^\dagger\hat a_-,\\
\hat J_-&=\hbar\hat a_-^\dagger\hat a_+,\\
\hat J_z&=\frac{\hbar}{2}(\hat a_+^\dagger\hat a_+-\hat a_-^\dagger\hat a_-).
\end{aligned}
$$

(6) 证明对易关系 $[\hat J_+,\hat J_-]=2\hbar\hat J_z$。

(7) 利用算符 $\hat N_+=\hat a_+^\dagger\hat a_+$、$\hat N_-=\hat a_-^\dagger\hat a_-$，令 $\hat N=\hat N_++\hat N_-$。用 $\hbar$ 和 $\hat N$ 表示

$$
\hat J^2\equiv\hat J_z^2+\frac12(\hat J_+\hat J_-+\hat J_-\hat J_+).
$$

**[B]**

考虑二能级系统的量子力学。哈密顿量 $H_0$ 的矩阵表示为

$$
H_0(\lambda)=\begin{pmatrix}k\lambda&0\\0&-k\lambda\end{pmatrix}.
$$

将表示该系统两个独立量子态的波函数 $\psi_1,\psi_2$ 对应于以下矢量：

$$
\psi_1=\begin{pmatrix}0\\1\end{pmatrix},\qquad
\psi_2=\begin{pmatrix}1\\0\end{pmatrix}.
$$

其中 $k$ 为正实数，$\lambda$ 为实参数。

(1) 求 $H_0$ 的本征态 $\psi_1,\psi_2$ 对应的能量本征值 $E_1,E_2$，并在 $-1<\lambda<1$ 内画出本征值 $E_1,E_2$ 关于 $\lambda$ 的图像。

接着，考虑在上述哈密顿量中加入矩阵表示为下式的项 $H_p$：

$$
H_p=\begin{pmatrix}0&c\\c^*&0\end{pmatrix},
$$

其中 $c$ 为任意复数。

(2) 求在 $H_0$ 中加入 $H_p$ 后的能量本征值 $E'_1,E'_2$，并定义它们使 $E'_1<E'_2$ 成立。在 $-1<\lambda<1$ 内画出 $E'_1,E'_2$ 关于 $\lambda$ 的图像，须添加到（1）的图中，并能够加以区分。

将加入 $H_p$ 前后的能量间隔分别记作 $\delta E_u\equiv E_2-E_1$ 和 $\delta E_p\equiv E'_2-E'_1$。引入 $c$ 与 $\delta E_u$ 的比 $r$，具体定义为 $r\equiv\delta E_u/c$。以下假设 $\lambda>0$。

(3) 仅用 $r$ 表示加入 $H_p$ 前后能量间隔之比 $\delta E_p/\delta E_u$。

(4) 加入 $H_p$ 后的波函数 $\psi'_1,\psi'_2$ 可表示为加入前波函数 $\psi_1,\psi_2$ 的如下线性组合：

$$
\begin{aligned}
\psi'_1&=\alpha\psi_1+\beta\psi_2,\\
\psi'_2&=-\beta^*\psi_1+\alpha^*\psi_2.
\end{aligned}
$$

利用归一化条件 $|\alpha|^2+|\beta|^2=1$，仅用 $r$ 表示 $|\alpha|,|\beta|$。

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
\begin{gathered}
\hat J_+\hat J_-=\hbar^2\hat N_+(\hat N_-+1),\\
\hat J_-\hat J_+=\hbar^2\hat N_-(\hat N_++1).
\end{gathered}
$$

差を取れば $[\hat J_+,\hat J_-]=\hbar^2(\hat N_+-\hat N_-)=2\hbar\hat J_z$ となる。

#### (7)

$$
\begin{aligned}
\hat J^2
&=\frac{\hbar^2}{4}(\hat N_+-\hat N_-)^2\\
&\quad+\frac{\hbar^2}{2}(2\hat N_+\hat N_-+\hat N_++\hat N_-)\\
&=\frac{\hbar^2}{4}\hat N(\hat N+2).
\end{aligned}
$$

### \[B\]

#### (1)

$E_1=-k\lambda$、$E_2=k\lambda$ であり、$\lambda=0$ で交差する直線になる。

#### (2)

$D=\sqrt{k^2\lambda^2+|c|^2}$ とおくと

$$
\begin{gathered}
\det(EI-H_0-H_p)=E^2-k^2\lambda^2-|c|^2,\\
E'_1=-D,\quad E'_2=D.
\end{gathered}
$$

$c\ne0$ なら最小ギャップは $\lambda=0$ での $2|c|$ となり、準位は交差しない。$c=0$ では $E'_{1,2}=\mp k|\lambda|$ で、$\lambda=0$ では縮退する。

![無摂動準位と結合による反交差](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2020/kyushu-phys-201908-avoided-crossing.svg)

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
\begin{gathered}
|\alpha|^2=\frac12\left(1+\frac{k\lambda}{D}\right),\\
|\beta|^2=\frac12\left(1-\frac{k\lambda}{D}\right).
\end{gathered}
$$

したがって

$$
\begin{gathered}
\boxed{|\alpha|=\sqrt{\frac12\left(1+\frac1{\sqrt{1+4/|r|^2}}\right)}},\\
\boxed{|\beta|=\sqrt{\frac12\left(1-\frac1{\sqrt{1+4/|r|^2}}\right)}}.
\end{gathered}
$$

$c=0$、$\lambda>0$ の場合には $|\alpha|=1$、$|\beta|=0$ となる。

## **Reference**

- [大学公表の原題](https://pr.phys.kyushu-u.ac.jp/graduate/pdf/R2_inshi.pdf#page=12)
