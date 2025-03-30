---
sidebar_label: "2023年度 量子力学および熱・統計力学 問題5"
sidebar_position: 3
tags:
  - Waseda-University
---
# 早稲田大学 先進理工学研究科 物理学及応用物理学専攻 2023年度 量子力学および熱・統計力学 問題5

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)

$$
\begin{aligned}
\hat{H}_0 | L \rangle = \varepsilon_L | L \rangle
, \ \ 
\hat{H}_0 | R \rangle = \varepsilon_R | R \rangle
\end{aligned}
$$

なので、 $\hat{H}_0$ の固有値は $\varepsilon_L, \varepsilon_R$ で、
それぞれに属する固有ベクトルは、 $| L \rangle, | R \rangle$ である。
（ $| L \rangle, | R \rangle$ で張られる2次元ベクトル空間を考えているので、これら以外にはない。）

### (2)

$$
\begin{aligned}
H &= \begin{pmatrix}
\varepsilon_L & \Delta \\ \Delta & \varepsilon_R \end{pmatrix}
\end{aligned}
$$

### (3)
$H$ の固有値を $\lambda$ とすると、

$$
  \begin{aligned}
  0
  &= \det \begin{pmatrix}
  \varepsilon_L - \lambda & \Delta \\ \Delta & \varepsilon_R - \lambda
  \end{pmatrix}
  \\
  &= \lambda^2 - (\varepsilon_L + \varepsilon_R) \lambda
  + \varepsilon_L \varepsilon_R - \Delta^2
  \\
  \therefore \ \ 
  \lambda
  &= \frac{ \varepsilon_L + \varepsilon_R \pm
  \sqrt{ (\varepsilon_L - \varepsilon_R )^2 + 4 \Delta^2}}{2}
  \end{aligned}
$$

### (4)
(2), (3) の結果は、 $\varepsilon_L = \varepsilon_R = \varepsilon$ とすると、
次のようになる：

$$
\begin{aligned}
H
&=
\begin{pmatrix}
\varepsilon & \Delta \\ \Delta & \varepsilon
\end{pmatrix}
\\
\lambda &= \varepsilon \pm \Delta
\end{aligned}
$$

$\Delta \ne 0$ を仮定する。
$H$ の固有値 $\varepsilon + \Delta$ に属する固有ベクトルを求めるために

$$
\begin{aligned}
\begin{pmatrix}
\varepsilon & \Delta \\ \Delta & \varepsilon
\end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix}
=
(\varepsilon + \Delta)
\begin{pmatrix} x \\ y \end{pmatrix}
\end{aligned}
$$

とおくと $x=y$ がわかり、
$H$ の固有値 $\varepsilon - \Delta$ に属する固有ベクトルを求めるために

$$
\begin{aligned}
\begin{pmatrix}
\varepsilon & \Delta \\ \Delta & \varepsilon
\end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix}
=
(\varepsilon - \Delta)
\begin{pmatrix} x \\ y \end{pmatrix}
\end{aligned}
$$

とおくと $x+y=0$ がわかる。
よって、 $\hat{H}$ の固有値 $\varepsilon + \Delta, \varepsilon - \Delta$
に属する規格化された固有ベクトルは、それぞれ、

$$
\begin{aligned}
\frac{1}{\sqrt{2}} ( | L \rangle + | R \rangle )
, \ \ 
\frac{1}{\sqrt{2}} ( | L \rangle - | R \rangle )
\end{aligned}
$$

と選べる。

### (5)

$$
\begin{aligned}
\hat{Z} &= i | L \rangle \langle R | - i | R \rangle \langle L |
\\
\left[ \hat{Y}, \hat{Z} \right]
&= 2i \left( - | L \rangle \langle L | + | R \rangle \langle R | \right)
\\
&= 2i \hat{X}
\\
\left[ \hat{Z}, \hat{X} \right]
&= 2i \left( | L \rangle \langle R | + | R \rangle \langle L | \right)
\\
&= 2i \hat{Y}
\end{aligned}
$$

### (6)
$\hat{H} = \varepsilon \hat{1} + \Delta \hat{Y}$
であり、 $\hat{1}$ と $\hat{Y}$ は可換であるから、

$$
\begin{aligned}
e^{- \frac{i}{\hbar} \hat{H} t}
&= e^{- \frac{i}{\hbar} \varepsilon t}
e^{- \frac{i}{\hbar} \Delta t \hat{Y}}
\end{aligned}
$$

であり、さらに $\hat{Y}^2 = \hat{1}$ であるから、

$$
\begin{aligned}
e^{- \frac{i}{\hbar} \Delta t \hat{Y}}
&= \sum_{n=0}^\infty \frac{1}{n!}
\left( - \frac{i}{\hbar} \Delta t \right)^n \hat{Y}^n
\\
&= \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!}
\left( \frac{\Delta t}{\hbar} \right)^{2n} \hat{1}
- i \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!}
\left( \frac{\Delta t}{\hbar} \right)^{2n+1} \hat{Y}
\\
&= \cos \left( \frac{\Delta t}{\hbar} \right) \hat{1}
- i \sin \left( \frac{\Delta t}{\hbar} \right) \hat{Y}
\end{aligned}
$$

であるので、次を得る：

$$
\begin{aligned}
e^{- \frac{i}{\hbar} \hat{H} t}
&= e^{- \frac{i}{\hbar} \varepsilon t} \left(
\cos \left( \frac{\Delta t}{\hbar} \right) \hat{1}
- i \sin \left( \frac{\Delta t}{\hbar} \right) \hat{Y}
\right)
\end{aligned}
$$

### (7)

$$
\begin{aligned}
| \psi (t) \rangle
&= e^{- \frac{i}{\hbar} \varepsilon t} \left(
\cos \left( \frac{\Delta t}{\hbar} \right) \hat{1}
- i \sin \left( \frac{\Delta t}{\hbar} \right) \hat{Y}
\right) | L \rangle
\\
&= e^{- \frac{i}{\hbar} \varepsilon t} \left(
\cos \left( \frac{\Delta t}{\hbar} \right) | L \rangle
- i \sin \left( \frac{\Delta t}{\hbar} \right) | R \rangle
\right)
\end{aligned}
$$

### (8)

$$
\begin{aligned}
P_L(t)
&= \left| \langle L | \psi (t) \rangle \right|^2
= \cos^2 \left( \frac{\Delta t}{\hbar} \right)
\\
P_R(t)
&= \left| \langle R | \psi (t) \rangle \right|^2
= \sin^2 \left( \frac{\Delta t}{\hbar} \right)
\end{aligned}
$$

### (9)
