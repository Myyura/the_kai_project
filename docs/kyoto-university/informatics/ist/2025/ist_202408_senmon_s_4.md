---
sidebar_label: 2024年8月実施 専門科目 S-4
tags:
  - Kyoto-University
  - Electrical-Electronic.Signal-Processing.Convolution-Theorem
  - Electrical-Electronic.Signal-Processing.Sampling-Theorem-and-Aliasing
  - Mathematics.Fourier-Analysis
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-4

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_ist.pdf)

Let us define the Fourier transform $\mathcal{F}[x(t)]$ of a real function $x(t)$ and the inverse Fourier transform $\mathcal{F}^{-1}[X(\omega)]$ of a function $X(\omega)$ with the following formulas, where $t$ and $\omega$ denote real numbers, and $j = \sqrt{-1}$.

$$ 
\mathcal{F}[x(t)] = \int_{-\infty}^{\infty} x(t)e^{-j\omega t} \mathrm d t \\
\mathcal{F}^{-1}[X(\omega)] = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega)e^{j\omega t} \mathrm d\omega 
$$

Answer the following questions, where $T_0, \omega_0$, and $T$ denote positive constants.

### Q.1
Prove that the following equation holds for real functions $f(t)$ and $g(t)$, where $*$ denotes convolution.

$$
\mathcal{F}[f(t)g(t)] = \frac{1}{2\pi} \mathcal{F}[f(t)] * \mathcal{F}[g(t)] 
$$

### Q.2
Compute the Fourier transform of the functions given below.
(1) $x_1(t) = \frac{1}{2}(\text{sgn}(T_0 - t) + \text{sgn}(T_0 + t))$,

$$
\text{where } \text{sgn}(t) = \begin{cases} -1 & (t < 0) \\ 0 & (t = 0) \\ 1 & (t > 0) \end{cases} 
$$

(2) $x_2(t) = \begin{cases} \frac{\sin \omega_0 t}{\pi t} & (t \neq 0) \\ \frac{\omega_0}{\pi} & (t = 0) \end{cases}$

### Q.3
Let $x_s(t, T) = x_2(t)\delta_T(t)$ be a signal sampled from $x_2(t)$ in Q.2 using a comb function $\delta_T(t) = \sum_{k=-\infty}^{\infty} \delta(t - kT)$, where $\delta(t)$ denotes the Dirac delta function. Answer the following questions. You may use that $\mathcal{F}[\delta_T(t)] = \frac{1}{T} \sum_{k=-\infty}^{\infty} \delta(\omega - \frac{k}{T})$ holds.

(1) Draw the graph of $\mathcal{F}[x_s(t, \frac{1}{3\omega_0})]$ in the range of $|\omega| \leq 3\omega_0$.

(2) Show the condition for $T$ to satisfy $\mathcal{F}[x_2(t)] = \mathcal{F}[x_s(t, T)]$ in the range of $|\omega| \leq \omega_0$.

(3) Draw the graph of $\mathcal{F}[x_s(t, \frac{2}{3\omega_0})]$ in the range of $|\omega| \leq 3\omega_0$.

(4) Draw the graph of $\mathcal{F}^{-1}[X_s(\omega)]$ in the range of $|t| \leq \frac{\pi}{\omega_0}$. $X_s(\omega)$ is given below.

$$
X_s(\omega) = \begin{cases} \mathcal{F}[x_s(t, \frac{2}{3\omega_0})] & (|\omega| \leq \omega_0) \\ 0 & (|\omega| > \omega_0) \end{cases} 
$$

### 题目描述

连续时间 Fourier 变换及其逆变换定义为

$$
\mathcal{F}[x(t)]=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}\,dt,\qquad
\mathcal{F}^{-1}[X(\omega)]=\frac{1}{2\pi}\int_{-\infty}^{\infty}X(\omega)e^{j\omega t}\,d\omega.
$$

1. 证明时域乘积的 Fourier 变换满足

   $$
   \mathcal{F}[f(t)g(t)]
   =\frac{1}{2\pi}\bigl(\mathcal{F}[f(t)]*\mathcal{F}[g(t)]\bigr),
   $$

   其中 $*$ 表示卷积。

2. 求下列两个信号的 Fourier 变换：

   $$
   x_1(t)=\frac12\{\operatorname{sgn}(T_0-t)+\operatorname{sgn}(T_0+t)\},
   $$

   其中符号函数 $\operatorname{sgn}(\cdot)$ 按题中定义取值；以及

   $$
   x_2(t)=
   \begin{cases}
   \dfrac{\sin\omega_0t}{\pi t} & (t\ne0),\\[4pt]
   \dfrac{\omega_0}{\pi} & (t=0).
   \end{cases}
   $$

3. 用冲激梳

   $$
   \delta_T(t)=\sum_{k=-\infty}^{\infty}\delta(t-kT)
   $$

   对 $x_2(t)$ 采样，令 $x_s(t,T)=x_2(t)\delta_T(t)$。可使用

   $$
   \mathcal{F}[\delta_T(t)]
   =\frac1T\sum_{k=-\infty}^{\infty}\delta\left(\omega-\frac{k}{T}\right).
   $$

   （1）在 $|\omega|\leq3\omega_0$ 范围内画出 $\mathcal{F}[x_s(t,\frac{1}{3\omega_0})]$；（2）求使得在 $|\omega|\leq\omega_0$ 上 $\mathcal{F}[x_2(t)]=\mathcal{F}[x_s(t,T)]$ 成立的 $T$ 的条件；（3）在 $|\omega|\leq3\omega_0$ 范围内画出 $\mathcal{F}[x_s(t,\frac{2}{3\omega_0})]$；（4）定义

   $$
   X_s(\omega)=
   \begin{cases}
   \mathcal{F}[x_s(t,\frac{2}{3\omega_0})] & (|\omega|\leq\omega_0),\\
   0 & (|\omega|>\omega_0),
   \end{cases}
   $$

   在 $|t|\leq\frac{\pi}{\omega_0}$ 范围内画出 $\mathcal{F}^{-1}[X_s(\omega)]$。

## **Kai**
### Q.1
Assume, for example, that $f,g$ are Schwartz functions. Substituting the inverse transform of $g$ and applying Fubini's theorem gives

$$
\begin{aligned}
\mathcal F[fg](\omega)
&=\int_{\mathbb R}f(t)e^{-j\omega t}
\left(\frac1{2\pi}\int_{\mathbb R}G(\nu)e^{j\nu t}\,d\nu\right)dt\\
&=\frac1{2\pi}\int_{\mathbb R}G(\nu)F(\omega-\nu)\,d\nu
=\frac1{2\pi}(F*G)(\omega).
\end{aligned}
$$

### Q.2
#### (1)
The function is $1$ for $|t|<T_0$, $0$ for $|t|>T_0$, and $1/2$ at the two endpoints. These endpoint values do not affect its integral. Hence

$$
X_1(\omega)=\int_{-T_0}^{T_0}e^{-j\omega t}\,dt
=\begin{cases}2\sin(\omega T_0)/\omega,&\omega\ne0,\\2T_0,&\omega=0.\end{cases}
$$

#### (2)
The inverse transform of the frequency rectangle is

$$
\frac1{2\pi}\int_{-\omega_0}^{\omega_0}e^{j\omega t}\,d\omega
=\frac{\sin(\omega_0t)}{\pi t},
$$

with the continuous value $\omega_0/\pi$ at $t=0$. Thus, with symmetric improper integration at the jump points,

$$
X_2(\omega)=R(\omega):=
\begin{cases}
1,&|\omega|<\omega_0,\\
1/2,&|\omega|=\omega_0,\\
0,&|\omega|>\omega_0.
\end{cases}
$$

### Q.3
For the angular-frequency convention $e^{-j\omega t}$, the distributional Fourier-series identity is

$$
\delta_T(t)=\frac1T\sum_{m\in\mathbb Z}e^{j2\pi mt/T},
\qquad
\mathcal F[\delta_T](\omega)
=\frac{2\pi}{T}\sum_{m\in\mathbb Z}\delta\left(\omega-\frac{2\pi m}{T}\right).
$$

Using Q.1, the sampled spectrum is therefore

$$
\mathcal F[x_s](\omega)=\frac1T\sum_{m\in\mathbb Z}
R\left(\omega-\frac{2\pi m}{T}\right).
\tag{*}
$$

The following answers use this transform convention and the half-height values of $R$ at its two discontinuities.

#### (1)
For $T=1/(3\omega_0)$, neighboring replicas are separated by $6\pi\omega_0$. Only the central rectangle intersects $|\omega|\le3\omega_0$, so

$$
\mathcal F[x_s](\omega)=3\omega_0 R(\omega)
\qquad(|\omega|\le3\omega_0).
$$

#### (2)
In the absence of spectral overlap, $2\pi/T>2\omega_0$ and (*) equals $X_2/T$ on the baseband. Thus exact equality of the unscaled spectra throughout the closed interval $|\omega|\le\omega_0$ requires

$$
\boxed{T=1\quad\text{and}\quad0<\omega_0<\pi}.
$$

To see that overlap cannot provide another solution with these endpoint values, note that (*) is periodic with period $a=2\pi/T$. If $a<2\omega_0$, periodicity makes its value at $-\omega_0$ equal its value at the interior point $-\omega_0+a$, whereas $R$ takes the unequal values $1/2$ and $1$ there. If $a=2\omega_0$, two half-height replicas sum to one at either boundary, again preventing equality with $R$ after matching the interior amplitude.

For amplitude-normalized sampling, the usual no-aliasing identity is instead

$$
T\mathcal F[x_s](\omega)=X_2(\omega),
\qquad T<\frac{\pi}{\omega_0},\quad |\omega|\le\omega_0.
$$

The non-strict bound $T\le\pi/\omega_0$ suffices if equality is required only almost everywhere and boundary values are disregarded.

#### (3)
For $T=2/(3\omega_0)$, replicas are separated by $3\pi\omega_0$. Again only the central rectangle intersects the indicated range, giving

$$
\mathcal F[x_s](\omega)=\frac{3\omega_0}{2}R(\omega)
\qquad(|\omega|\le3\omega_0).
$$

#### (4)
The baseband restriction keeps this central rectangle. Consequently

$$
\mathcal F^{-1}[X_s](t)
=\frac{3\omega_0}{2}\,x_2(t)
=\begin{cases}
\dfrac{3\omega_0\sin(\omega_0t)}{2\pi t},&t\ne0,\\[4pt]
\dfrac{3\omega_0^2}{2\pi},&t=0.
\end{cases}
$$

It is even, nonnegative on the requested interval, maximal at zero, and zero at $t=\pm\pi/\omega_0$.

![Sampled spectra and reconstructed signal under the angular-frequency convention](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2025/kyoto-ist-2024-sampling.svg)
