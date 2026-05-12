---
sidebar_label: "2022年8月実施 専門科目2 [2] 量子力学"
tags:
  - Hokkaido-University
  - Quantum-Mechanics
---
# 北海道大学 情報科学院 情報科学専攻 情報エレクトロニクスコース 2022年8月実施 専門科目2 \[2\] 量子力学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

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
Cxe^{-\alpha x}, & 0\leq x<\infty
\end{cases}
$$

としたとき、規格化定数 $C$ を定めよ。ただし、$\alpha>0$ であるとする。

(2) (1) の波動関数で表される状態のエネルギーの期待値を求めよ。

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hokkaido_university/IST/joele/joele_202208_senmon2_2_p1.png" width="300"  alt=""/>
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
よって、

$$
\begin{aligned}
\langle \lambda_1 | \hat{\sigma} | \varphi(t) \rangle
&= \langle \lambda_1 | \varphi(t) \rangle
\\
&= \cos^2 \theta \exp \left( -i \frac{\varepsilon_1 t}{\hbar} \right)
+ \sin^2 \theta \exp \left( -i \frac{\varepsilon_2 t}{\hbar} \right)
\end{aligned}
$$

となり、求める確率は、

$$
\begin{aligned}
\left| \langle \lambda_1 | \hat{\sigma} | \varphi(t) \rangle \right|^2
&= \cos^4 \theta + \sin^4 \theta
+ \cos^2 \theta \sin^2 \theta \left(
\exp \left( i \frac{(\varepsilon_1-\varepsilon_2) t}{\hbar} \right)
+ \exp \left( -i \frac{(\varepsilon_1-\varepsilon_2) t}{\hbar} \right)
\right)
\\
&= 1 + \frac{1}{2} \sin^2 2 \theta \left(
\cos \left( \frac{(\varepsilon_1-\varepsilon_2)t}{\hbar} - 1 \right) \right)
\end{aligned}
$$

である。

### 2.
#### (1)
波動関数の規格化条件より、

$$
\begin{aligned}
1
&= \int_{-\infty}^\infty \left| \psi(x) \right|^2 dx
\\
&= |C|^2 \int_0^\infty x^2 e^{-ax} dx
\\
&= |C|^2 \frac{2}{a^3}
\end{aligned}
$$

なので、

$$
\begin{aligned}
C &= \sqrt{\frac{a^3}{2}}
\end{aligned}
$$

とすればよい。

#### (2)
ポテンシャルエネルギーの期待値は

$$
\begin{aligned}
\int_{-\infty}^\infty \psi(x)^* V(x) \psi(x) dx
&= |C|^2 v_0 \int_0^\infty x^3 e^{-ax} dx
\\
&= \frac{a^3}{2} v_0 \frac{3!}{a^4}
\\
&= \frac{3v_0}{a}
\end{aligned}
$$

であり、運動エネルギーの期待値は

$$
\begin{aligned}
\int_{-\infty}^\infty \psi(x)^*
\left( - \frac{\hbar^2}{2m} \frac{d^2}{dx^2} \right) \psi(x) dx
&= - \frac{\hbar^2}{2m} |C|^2 \int_0^\infty xe^{-\frac{ax}{2}}
\left( -a + \frac{a^2}{4} x \right) e^{-\frac{ax}{2}} dx
\\
&= - \frac{\hbar^2 a}{2m} \frac{a^3}{2} \int_0^\infty
\left( -x + \frac{a}{4} x^2 \right) e^{-ax} dx
\\
&= - \frac{\hbar^2 a^4}{4m}
\left( - \frac{1!}{a^2} + \frac{a}{4} \frac{2!}{a^3} \right)
\\
&= \frac{\hbar^2 a^2}{8m}
\end{aligned}
$$

であるから、エネルギーの期待値は

$$
\begin{aligned}
\frac{3v_0}{a} + \frac{\hbar^2 a^2}{8m}
\end{aligned}
$$

である。
