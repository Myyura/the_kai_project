---
comments: false
title: 東京大学 理学系研究科 物理学専攻 2022年度 専門科目 第1問
tags:
  - Tokyo-University
---
# 東京大学 理学系研究科 物理学専攻 2022年度 専門科目 第1問

## **Author**
Miyake

## **Description**
[過去の大学院入試問題（PDF形式）](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2022/04/R4master.pdf)

## **Kai**
### 1. 

$$
\begin{aligned}
\langle \hat{x} \rangle &= \int_{- \infty}^\infty dx \  \psi^*(x) x \psi(x) = \frac{1}{\sqrt{\pi} a} \int_{-\infty}^\infty dx \  x \exp \left( - \frac{x^2}{a^2}\right) = 0 \\
\langle \hat{x}^2 \rangle &= \int_{- \infty}^\infty dx \  \psi^*(x) x^2 \psi(x) = \frac{1}{\sqrt{\pi} a} \int_{-\infty}^\infty dx \  x^2 \exp \left( - \frac{x^2}{a^2}\right) \\
&= \frac{1}{\sqrt{\pi} a} \cdot \frac{1}{2} \sqrt{\pi a^6} = \frac{a^2}{2} \\
\langle \hat{p} \rangle &= \frac{\hbar}{i} \int_{- \infty}^\infty dx \  \psi^*(x) \frac{d}{dx} \psi(x) = 0 \\
\langle \hat{p}^2 \rangle &= - \hbar^2 \int_{- \infty}^\infty dx \  \psi^*(x) \frac{d^2}{dx^2} \psi(x) = - \frac{\hbar^2}{\sqrt{\pi} a^3} \int_{- \infty}^\infty dx \  \left( \frac{x^2}{a^2} - 1 \right) \exp \left( - \frac{x^2}{a^2} \right) \\
&= - \frac{\hbar^2}{\sqrt{\pi} a^3} \left( \frac{\sqrt{\pi a^6}}{2a^2} - \sqrt{\pi a^2} \right) = \frac{\hbar^2}{2a^2} \\
\Delta x &= \sqrt{\langle \hat{x}^2 \rangle - \langle \hat{x} \rangle^2} = \frac{a}{\sqrt{2}} \\
\Delta p &= \sqrt{\langle \hat{p}^2 \rangle - \langle \hat{p} \rangle^2} = \frac{\hbar}{\sqrt{2} a}
\end{aligned}
$$

$\Delta x$ は $a$ に比例し、 $\Delta p$ は $a$ に反比例するので、
$\Delta x$ と $\Delta p$ は互いに反比例し、
$\Delta x \Delta p = \hbar / 2$ である。
これは与えられた (1) の等号が成り立つ場合であり、最小不確定状態である。

### 2.
波動関数 $\varphi(x)$ で表される状態について、

$$
\begin{aligned}
\langle \hat{O}^\dagger \hat{O} \rangle &= \int_{- \infty}^\infty dx \ \varphi^*(x) \hat{O}^\dagger \hat{O} \varphi(x) \\
&= \int_{- \infty}^\infty dx \ \left( \hat{O} \varphi(x) \right)^* \hat{O} \varphi(x) \\
&= \int_{- \infty}^\infty dx \ \left| \hat{O} \varphi(x) \right|^2 \geq 0
\end{aligned}
$$

がわかる。

### 3. 
まず、 $\hat{O} = t \Delta \hat{x} - i \Delta \hat{p}$ のとき、
$\hat{O}^\dagger = t \Delta \hat{x} + i \Delta \hat{p}$ である。
また、正準交換関係 $\hat{x} \hat{p} - \hat{p} \hat{x} = i \hbar$ から、
$\Delta \hat{x} \Delta \hat{p} - \Delta \hat{p} \Delta \hat{x} = i \hbar$
がわかるので、

$$
\begin{aligned}
\langle \hat{O}^\dagger \hat{O} \rangle
&= \left\langle
\left( t \Delta \hat{x} + i \Delta \hat{p} \right)
\left( t \Delta \hat{x} - i \Delta \hat{p} \right)
\right\rangle \\
&= t^2 \left\langle \left( \Delta \hat{x} \right)^2 \right\rangle - it \left\langle
\Delta \hat{x} \Delta \hat{p} - \Delta \hat{p} \Delta \hat{x}
\right\rangle
+ \left\langle \left( \Delta \hat{p} \right)^2 \right\rangle \\
&= t^2 \left( \Delta x \right)^2 + \hbar t + \left( \Delta p \right)^2 \\
&= \left( \Delta x \right)^2 \left( t + \frac{\hbar}{2 \left( \Delta x \right)^2} \right)
- \frac{\hbar^2}{2 \left( \Delta x \right)^2} + \left( \Delta p \right)^2
\end{aligned}
$$

である。

一方、2. から、任意の実数 $t$ について $\langle \hat{O}^\dagger \hat{O} \rangle \geq 0$ であるから、

$$
\begin{aligned}
- \frac{\hbar^2}{2 \left( \Delta x \right)^2} + \left( \Delta p \right)^2 &\geq 0 \\
\therefore \ \ \Delta x \Delta p &\geq \frac{\hbar}{2}
\end{aligned}
$$

がわかる。

### 4.
$\hat{O}$ が固有値 $0$ をもつということは、それに属する固有関数について
$\langle \hat{O}^\dagger \hat{O} \rangle = 0$
が成り立つということである。3. より、その条件は
   
$$
\begin{aligned}
t = - \frac{\hbar}{2 ( \Delta x )^2}
, \ \ 
\Delta x \Delta p = \frac{\hbar}{2}
\end{aligned}
$$

である。

### 5.
次のように書くことにする：

$$
\begin{aligned}
s^2 = \left( \Delta x \right)^2
, \ \ 
\bar{x} = \langle \hat{x} \rangle
, \ \ 
\bar{p} = \langle \hat{p} \rangle
\end{aligned}
$$

4. で求めた $t$ を使って $\hat{O}$ は次のようになる：

$$
\begin{aligned}
\hat{O}
&= - \frac{\hbar}{2 s^2} \left( \hat{x} - \bar{x} \right)
- i \left( \hat{p} - \bar{p} \right) \\
&= - \frac{\hbar}{2 s^2} \left( x - \bar{x} \right)
- i \left( \frac{\hbar}{i} \frac{d}{dx} - \bar{p} \right) \\
&= - \hbar \left( \frac{d}{dx} + \frac{ x - \bar{x} }{2 s^2} 
- \frac{i \bar{p}}{\hbar} \right)
\end{aligned}
$$

求める波動関数 $u(x)$ は、$\hat{O} u(x) = 0$ が成り立つので、

$$
\begin{aligned}
\frac{du(x)}{dx}
&= \left( - \frac{ x - \bar{x} }{2 s^2} + \frac{i \bar{p}}{\hbar} \right) u(x) \\
\frac{du}{u}
&=
\left( - \frac{ x - \bar{x} }{2 s^2} 
+ \frac{i \bar{p}}{\hbar} \right) dx \\
\therefore \ \ 
u(x) &= C \exp \left( - \frac{ (x - \bar{x})^2 }{4 s^2}
+ \frac{i \bar{p} x}{\hbar} \right)
\end{aligned}
$$

ここで $C$ は積分定数であり、規格化条件から $C = 1/(2 \pi s^2)^{1/4}$ がわかるので、結局、

$$
\begin{aligned}
u(x) = \left( \frac{1}{2 \pi s^2} \right)^\frac{1}{4}
\exp \left( - \frac{ (x - \bar{x})^2 }{4 s^2}
+ \frac{i \bar{p} x}{\hbar} \right)
\end{aligned}
$$

を得る。