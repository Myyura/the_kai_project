---
sidebar_label: '2022年8月実施 専門科目2 [2] 量子力学'
tags:
  - Hokkaido-University
  - Physics.Quantum-Mechanics.Time-Evolution-of-Two-Level-System
  - Physics.Quantum-Mechanics.Quantum-Measurement
  - Physics.Quantum-Mechanics.Wavefunction-Normalization-and-Energy-Expectation
---
# 北海道大学 情報科学院 情報科学専攻 情報エレクトロニクスコース 2022年8月実施 専門科目2 \[2\] 量子力学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
以下の各問において $i$ を虚数単位とする。また、$\hbar$ はプランク定数 $h$ を $2\pi$ で割った定数とする。

### 1.
ハミルトニアンが

$$
H=
\begin{pmatrix}
\varepsilon_1 & 0 \\
0 & \varepsilon_2
\end{pmatrix}
$$

で与えられている物理系がある。以下の問いに答えよ。

(1) 状態ベクトルを

$$
|\varphi(t)\rangle
=
c_1(t)
\begin{pmatrix}
1 \\
0
\end{pmatrix}
+
c_2(t)
\begin{pmatrix}
0 \\
1
\end{pmatrix}
$$

と表したとき、$|\varphi(t)\rangle$ が満たすシュレディンガー方程式を考えることにより、
$c_1(t)$ と $c_2(t)$ が初期値 $c_1(0)$、$c_2(0)$ によって

$$
c_1(t)=c_1(0)\exp\left(-i\frac{\varepsilon_1 t}{\hbar}\right)
$$

$$
c_2(t)=c_2(0)\exp\left(-i\frac{\varepsilon_2 t}{\hbar}\right)
$$

で与えられることを示せ。

(2) オブザーバブル

$$
\hat{\sigma}
=
\begin{pmatrix}
\cos 2\theta & \sin 2\theta \\
\sin 2\theta & -\cos 2\theta
\end{pmatrix}
$$

の固有ベクトルが

$$
|\lambda_1\rangle
=
\begin{pmatrix}
\cos\theta \\
\sin\theta
\end{pmatrix}
$$

$$
|\lambda_2\rangle
=
\begin{pmatrix}
-\sin\theta \\
\cos\theta
\end{pmatrix}
$$

であることを示せ。

(3) 状態ベクトルの初期値が

$$
|\varphi(0)\rangle=|\lambda_1\rangle
$$

であるとき、時刻 $t\geq 0$ でオブザーバブル $\hat{\sigma}$ を測定して結果 $\lambda_1$ が得られる確率を求めよ。

### 2.
図1のように、$x<0$ で $V(x)=\infty$、$0\leq x$ で $V(x)=v_0x$
ただし、$v_0>0$ とする、と与えられている1次元ポテンシャル中に質量 $m$ の粒子が閉じ込められている。

以下の問いに答えよ。必要であれば正整数 $n$ について成立する次の公式を用いてよい。

$$
\int_0^\infty x^n e^{-sx}\,dx
=
\frac{n!}{s^{n+1}}
$$

(1) 波動関数を

$$
\psi(x)
=
\begin{cases}
0, & -\infty<x<0, \\
Cxe^{-ax/2}, & 0\leq x<\infty
\end{cases}
$$

としたとき、規格化定数 $C$ を定めよ。ただし、$a>0$ であるとする。

(2) (1) の波動関数で表される状態のエネルギーの期待値を求めよ。

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hokkaido_university/IST/joele/joele_202208_senmon2_2_p1.png" width="300"  alt=""/>
</figure>

### 题目描述

以下 $i$ 表示虚数单位，$\hbar=h/(2\pi)$。

1. 某物理系统的 Hamiltonian 为

   $$
   H=
   \begin{pmatrix}
   \varepsilon_1&0\\
   0&\varepsilon_2
   \end{pmatrix}.
   $$

   （1）把状态向量写成

   $$
   |\varphi(t)\rangle
   =
   c_1(t)
   \begin{pmatrix}1\\0\end{pmatrix}
   +c_2(t)
   \begin{pmatrix}0\\1\end{pmatrix}.
   $$

   从 Schrödinger 方程证明

   $$
   c_1(t)=c_1(0)
   \exp\left(-i\frac{\varepsilon_1t}{\hbar}\right),
   $$

   $$
   c_2(t)=c_2(0)
   \exp\left(-i\frac{\varepsilon_2t}{\hbar}\right).
   $$

   （2）对可观测量

   $$
   \hat\sigma=
   \begin{pmatrix}
   \cos2\theta&\sin2\theta\\
   \sin2\theta&-\cos2\theta
   \end{pmatrix},
   $$

   证明其特征向量为

   $$
   |\lambda_1\rangle=
   \begin{pmatrix}\cos\theta\\\sin\theta\end{pmatrix},
   \qquad
   |\lambda_2\rangle=
   \begin{pmatrix}-\sin\theta\\\cos\theta\end{pmatrix}.
   $$

   （3）若初态为

   $$
   |\varphi(0)\rangle=|\lambda_1\rangle,
   $$

   求在任意 $t\geq0$ 测量 $\hat\sigma$ 并得到结果 $\lambda_1$ 的概率。

2. 如图 1，质量为 $m$ 的粒子被限制在一维势能

   $$
   V(x)=
   \begin{cases}
   \infty&(x<0),\\
   v_0x&(x\geq0),
   \end{cases}
   \qquad v_0>0
   $$

   中。必要时可使用对正整数 $n$ 成立的公式

   $$
   \int_0^\infty x^ne^{-sx}\,dx
   =\frac{n!}{s^{n+1}}.
   $$

   （1）若

   $$
   \psi(x)=
   \begin{cases}
   0&(-\infty<x<0),\\
   Cxe^{-ax/2}&(0\leq x<\infty),
   \end{cases}
   \qquad a>0,
   $$

   求归一化常数 $C$。

   （2）求该波函数所描述状态的能量期望值。

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hokkaido_university/IST/joele/joele_202208_senmon2_2_p1.png" width="300" alt=""/>
</figure>

## **Kai**
### 1.
#### (1)
シュレディンガー方程式

$$
  \begin{aligned}
  i \hbar \frac{d}{dt} | \varphi(t) \rangle
  = \hat{H} | \varphi(t) \rangle
  \end{aligned}
  に
  \begin{aligned}
  | \varphi(t) \rangle
  = c_1(t) \begin{pmatrix} 1 \\ 0 \end{pmatrix}
  + c_2(t) \begin{pmatrix} 0 \\ 1 \end{pmatrix}
  \end{aligned}
$$

を代入すると、

$$
  \begin{aligned}
  i \hbar \left(
  \frac{dc_1(t)}{dt} \begin{pmatrix} 1 \\ 0 \end{pmatrix}
  + \frac{dc_2(t)}{dt} \begin{pmatrix} 0 \\ 1 \end{pmatrix}
  \right)
  = \varepsilon_1 c_1(t) \begin{pmatrix} 1 \\ 0 \end{pmatrix}
  + \varepsilon_2 c_2(t) \begin{pmatrix} 0 \\ 1 \end{pmatrix}
  \end{aligned}
$$

となるから、

$$
  \begin{aligned}
  i \hbar \frac{dc_1(t)}{dt} = \varepsilon_1 c_1(t)
  , \ \ 
  i \hbar \frac{dc_2(t)}{dt} = \varepsilon_2 c_2(t)
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  c_1(t) = c_1(0) \exp \left( -i \frac{\varepsilon_1 t}{\hbar} \right)
  , \ \ 
  c_2(t) = c_2(0) \exp \left( -i \frac{\varepsilon_2 t}{\hbar} \right)
  \end{aligned}
$$

がわかる。

#### (2)
まず、

$$
\begin{aligned}
\hat{\sigma} | \lambda_1 \rangle
&= \begin{pmatrix} \cos 2 \theta \cos \theta + \sin 2 \theta \sin \theta \\
\sin 2 \theta \cos \theta - \cos 2 \theta \sin \theta \end{pmatrix}
\\
&= \begin{pmatrix} \cos \theta \\ \sin \theta \end{pmatrix}
\\
&= | \lambda_1 \rangle
\end{aligned}
$$

なので、 $| \lambda_1 \rangle$ は
$\hat{\sigma}$ の固有値 $1$ に属する固有ベクトルである。

また、

$$
\begin{aligned}
\hat{\sigma} | \lambda_2 \rangle
&= \begin{pmatrix} - \cos 2 \theta \sin \theta + \sin 2 \theta \cos \theta \\
- \sin 2 \theta \sin \theta - \cos 2 \theta \cos \theta \end{pmatrix}
\\
&= \begin{pmatrix} \sin \theta \\ - \cos \theta \end{pmatrix}
\\
&= - | \lambda_2 \rangle
\end{aligned}
$$

なので、 $| \lambda_2 \rangle$ は
$\hat{\sigma}$ の固有値 $-1$ に属する固有ベクトルである。

#### (3)

$$
\begin{aligned}
| \varphi(0) \rangle
&= | \lambda_1 \rangle
\\
&= \cos \theta \begin{pmatrix} 1 \\ 0 \end{pmatrix}
+ \sin \theta \begin{pmatrix} 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

なので、 (1) から、

$$
\begin{aligned}
| \varphi(t) \rangle
&= \cos \theta \exp \left( -i \frac{\varepsilon_1 t}{\hbar} \right)
\begin{pmatrix} 1 \\ 0 \end{pmatrix}
+ \sin \theta \exp \left( -i \frac{\varepsilon_2 t}{\hbar} \right)
\begin{pmatrix} 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

がわかる。
よって、$\lambda_1$ が得られる確率は

$$
\begin{aligned}
P_{\lambda_1}(t)
&=\left| \langle \lambda_1|\varphi(t)\rangle \right|^2\\
&= \cos^4 \theta + \sin^4 \theta
+ \cos^2 \theta \sin^2 \theta \left(
\exp \left( i \frac{(\varepsilon_1-\varepsilon_2) t}{\hbar} \right)
+ \exp \left( -i \frac{(\varepsilon_1-\varepsilon_2) t}{\hbar} \right)
\right)
\\
&=1-\sin^2(2\theta)
\sin^2 \left(\frac{(\varepsilon_1-\varepsilon_2)t}{2\hbar}\right)
\end{aligned}
$$

である。

### 2.
原問題の減衰係数を $a$ とし、以下では $\alpha=a/2$ とおく。

#### (1)
波動関数の規格化条件より、

$$
\begin{aligned}
1
&= \int_{-\infty}^\infty \left| \psi(x) \right|^2 dx
\\
&= |C|^2 \int_0^\infty x^2 e^{-2\alpha x} dx
\\
&= \frac{|C|^2}{4\alpha^3}
\end{aligned}
$$

なので、

$$
\begin{aligned}
C &= 2\alpha^{3/2}
\end{aligned}
$$

とすればよい。原題の記号では $C=a^{3/2}/\sqrt2$ である（全体位相は任意）。

#### (2)
ポテンシャルエネルギーの期待値は

$$
\begin{aligned}
\int_{-\infty}^\infty \psi(x)^* V(x) \psi(x) dx
&= 4\alpha^3v_0 \int_0^\infty x^3 e^{-2\alpha x} dx
\\
&= \frac{3v_0}{2\alpha}
\end{aligned}
$$

であり、運動エネルギーの期待値は

$$
\begin{aligned}
\left\langle T\right\rangle
&=\frac{\hbar^2}{2m}\int_0^\infty |\psi'(x)|^2\,dx\\
&=\frac{\hbar^2}{2m}\,4\alpha^3
\int_0^\infty(1-\alpha x)^2e^{-2\alpha x}\,dx\\
&=\frac{\hbar^2\alpha^2}{2m}
\end{aligned}
$$

であるから、エネルギーの期待値は

$$
\begin{aligned}
\boxed{\langle H\rangle
=\frac{\hbar^2\alpha^2}{2m}+\frac{3v_0}{2\alpha}}
\end{aligned}
$$

である。

原題の記号で表すと、

$$
\boxed{\langle H\rangle=\frac{\hbar^2a^2}{8m}+\frac{3v_0}{a}}.
$$

[原問題の保存版（PDF 3ページ）](https://web.archive.org/web/20230627090819id_/https://www.ist.hokudai.ac.jp/examinfo/files/joele02.pdf)にある指数は $-ax/2$ であり、上記はこの記号に合わせた結果である。
