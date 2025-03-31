---
sidebar_label: "情報エレクトロニクスコース 2022年8月実施 専門科目2 [2] 量子力学"
sidebar_position: 4
tags:
  - Hokkaido-University
---
# 北海道大学 情報科学院 情報科学専攻 情報エレクトロニクスコース 2022年8月実施 専門科目2 \[2\] 量子力学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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