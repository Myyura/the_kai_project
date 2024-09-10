---
comments: false
title: 名古屋大学 環境学研究科 地球環境科学専攻 地球惑星科学系 2023年度 H (数学)
tags:
  - Nagoya-University
---
# 名古屋大学 環境学研究科 地球環境科学専攻 地球惑星科学系 2023年度 H (数学)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 問題 1

$$
\begin{aligned}
\det \begin{pmatrix}
1+a & a & -1 \\ a-1 & 0 & a+1 \\ 2a & a & 2a+1
\end{pmatrix}
&= -a^3 + a
\\
&= - a(a+1)(a-1)
\end{aligned}
$$

なので、与えられた連立方程式が自明でない解をもつのは
$a=-1,0,1$ のときである。

### 問題 2
#### 問 1

$$
  \begin{aligned}
  \int_0^1 x \log_e x dx
  &= \left[ \frac{x^2}{2} \log_e x \right]_0^1
  - \frac{1}{2} \int_0^1 x^2 \cdot \frac{1}{x} dx
  \\
  &= - \frac{1}{2} \int_0^1 x dx
  \\
  &= - \frac{1}{2} \left[ \frac{x^2}{2} \right]_0^1
  \\
  &= - \frac{1}{4}
  \end{aligned}
$$

#### 問 2

$$
  \begin{aligned}
  \int_0^1 \frac{x^2}{\sqrt{1 - x^2}} dx
  &= \int_0^\frac{\pi}{2}
  \frac{\sin^2 \theta}{\cos \theta} \cdot \cos \theta d \theta
  \ \ \ \ \ \ \ \ ( x = \sin \theta )
  \\
  &= \int_0^\frac{\pi}{2} \sin^2 \theta d \theta
  \\
  &= \int_0^\frac{\pi}{2} \frac{1 - \cos 2 \theta}{2} d \theta
  \\
  &= \frac{\pi}{4}
  \end{aligned}
$$

### 問題 3
#### 問 1

$$
  \begin{aligned}
  \frac{du}{u^2} &= \frac{dt}{t}
  \\
  - \frac{1}{u} &= \log |t| + C
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \\
  \therefore \ \ 
  u &= - \frac{1}{ \log |t| + C }
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \end{aligned}
$$

#### 問 2
$v=u-t$ とすると、

$$
  \begin{aligned}
  \frac{d^2v}{dt^2}
  &= \frac{d^2u}{dt^2}
  \\
  &= -u+t
  \\
  &= -v
  \end{aligned}
$$

なので、

$$
  \begin{aligned}
  v &= A \sin t + B \cos t
  \ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
  \\
  \therefore \ \ 
  u &= A \sin t + B \cos t + t
  \ \ \ \ \ \ \ \ ( A, B \text{ は積分定数 } )
  \end{aligned}
$$

がわかる。

### 問題 4
#### 問 1
##### (1)

$$
  \begin{aligned}
  F (2 \omega)
  &= \int_{- \infty}^\infty f(s) \exp (-2i \omega s) ds
  \\
  &= \int_{- \infty}^\infty f \left( \frac{t}{2} \right)
  \exp (-i \omega t) \frac{dt}{2}
  \ \ \ \ \ \ \ \ (t=2s)
  \end{aligned}
$$

なので、 $F(2\omega)$ の逆フーリエ変換は

$$
  \begin{aligned}
  \frac{1}{2} f \left( \frac{t}{2} \right)
  \end{aligned}
$$

である。

##### (2)

$$
  \begin{aligned}
  F (\omega-1)
  &= \int_{- \infty}^\infty f(t) \exp (-i (\omega-1) t) dt
  \\
  &= \int_{- \infty}^\infty f(t) \exp (it) \exp (-i \omega t) dt
  \end{aligned}
$$

なので、 $F(\omega-1)$ の逆フーリエ変換は

$$
  \begin{aligned}
  f(t) \exp (it)
  \end{aligned}
$$

である。

#### 問 2

$$
\begin{aligned}
F(\omega)
&= \int_{-T}^T \sin (\omega_0 t) \exp(-i \omega t) dt
\\
&= - \frac{1}{i \omega}
\left[ \sin (\omega_0 t) \exp(-i \omega t) \right]_{-T}^T
+ \frac{\omega_0}{i \omega} \int_{-T}^T \cos (\omega_0 t) \exp(-i \omega t) dt
\\
&= - \frac{1}{i \omega}
\sin (\omega_0 T) \left( \exp(-i \omega T) + \exp(i \omega T) \right)
+ \frac{\omega_0}{i \omega} \int_{-T}^T \cos (\omega_0 t) \exp(-i \omega t) dt
\\
&= \frac{2i}{\omega} \sin (\omega_0 T) \cos (\omega T)
+ \frac{\omega_0}{\omega^2}
\left[ \cos (\omega_0 t) \exp(-i \omega t) \right]_{-T}^T
+ \frac{\omega_0^2}{\omega^2}
\int_{-T}^T \sin (\omega_0 t) \exp(-i \omega t) dt
\\
&= \frac{2i}{\omega} \sin (\omega_0 T) \cos (\omega T)
+ \frac{\omega_0}{\omega^2} \cos (\omega_0 T)
\left( \exp(-i \omega T) - \exp(i \omega T) \right)
+ \frac{\omega_0^2}{\omega^2} F(\omega)
\\
&= \frac{2i}{\omega} \sin (\omega_0 T) \cos (\omega T)
- \frac{2i \omega_0}{\omega^2} \cos (\omega_0 T) \sin (\omega T)
+ \frac{\omega_0^2}{\omega^2} F(\omega)
\\
\therefore \ \ 
\left( \omega^2 - \omega_0^2 \right) F(\omega)
&= 2i \left( \omega \sin (\omega_0 T) \cos (\omega T)
- \omega_0 \cos (\omega_0 T) \sin (\omega T) \right)
\end{aligned}
$$

なので、 $\omega \ne \omega_0$ のとき

$$
\begin{aligned}
F(\omega)
&= \frac{2i}{\omega^2 - \omega_0^2}
\left( \omega \sin (\omega_0 T) \cos (\omega T)
- \omega_0 \cos (\omega_0 T) \sin (\omega T) \right)
\end{aligned}
$$

である。

### 問題 5
#### 問 1

$$
  \begin{aligned}
  \int_0^\infty \phi(\tau) d \tau
  &= \frac{1}{\mu} \int_0^\infty \exp \left( - \frac{\tau}{\mu} \right) d \tau
  \\
  &= - \left[ \exp \left( - \frac{\tau}{\mu} \right) \right]_0^\infty
  \\
  &= 1
  \end{aligned}
$$

#### 問 2

$$
  \begin{aligned}
  \int_0^\infty \tau \phi(\tau) d \tau
  &= \frac{1}{\mu} \int_0^\infty
  \tau \exp \left( - \frac{\tau}{\mu} \right) d \tau
  \\
  &= - \left[ \tau \exp \left( - \frac{\tau}{\mu} \right) \right]_0^\infty
  + \int_0^\infty \exp \left( - \frac{\tau}{\mu} \right) d \tau
  \\
  &= - \mu \left[ \exp \left( - \frac{\tau}{\mu} \right) \right]_0^\infty
  \\
  &= \mu
  \end{aligned}
$$

#### 問 3

$$
  \begin{aligned}
  \frac{1}{2} \int_0^1 \exp \left( - \frac{\tau}{2} \right) d \tau
  &= - \left[ \exp \left( - \frac{\tau}{2} \right) \right]_0^1
  \\
  &= - \frac{1}{\sqrt{e}} + 1
  \end{aligned}
$$