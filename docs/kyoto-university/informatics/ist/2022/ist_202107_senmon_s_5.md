---
sidebar_label: 2021年7月実施 専門科目 S-5
tags:
  - Kyoto-University
  - Electrical-Electronic.Signal-Processing.Z-Transform
  - Electrical-Electronic.Signal-Processing.Discrete-Fourier-Transform
---

# 京都大学 情報学研究科 知能情報学専攻 2021年7月実施 専門科目 S-5

## **Author**
祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_ist.pdf)
Let $n \in \mathbb{Z}$ be a discrete-time index.
The unit impulse signal $\delta[n]$ and the unit step signal $u[n]$ are defined as follows:

$$
\delta[n] = \begin{cases}
    0 &(n \neq 0) \\
    1 &(n=0)
\end{cases}
$$

$$
u[n] = \begin{cases}
    0 &(n < 0) \\
    1 &(n \geq 0)
\end{cases}
$$

**Q.1** Compute the $z$-transform $X(z)$ of a discrete-time signal $x[n]$ given below.

- (1) $x[n] = 3\delta [n] - 2\delta [n-2] + 5\delta [n-4]$
- (2) $x[n] = nu[n]$

**Q.2** Judge the stability of a system whose transfer function $H(z)$ is given below and draw the correponding circuit.
In addition, compute the inverse $z$-transform $h[n]$.

- (1) $H(z) = 1 + 2z^{-1} + 3z^{-2}$
- (2) $H(z) = \frac{1 + 2z^{-1}}{2 - z^{-1}}$

**Q.3** Compute the discrete-time Fourier transform $F(\omega)$ of a discrete-time signal $x[n]$ given below, where $\omega$ represents a normalized angular frequency.

- (1) $x[n] = 3\delta [n] - 2\delta [n-2] + 5\delta [n-4]$
- (2) $x[n] = u[n] - u[n-6]$

### 题目描述

对离散时间 $n\in\mathbb Z$，单位冲激和单位阶跃定义为

$$
\delta[n]=\begin{cases}1,&n=0\\0,&n\ne0,\end{cases}
\qquad
u[n]=\begin{cases}0,&n<0\\1,&n\ge0.\end{cases}
$$

1. 求下列信号的 $z$ 变换 $X(z)$：
   1. $x[n]=3\delta[n]-2\delta[n-2]+5\delta[n-4]$；
   2. $x[n]=nu[n]$。
2. 对下列传递函数，判断系统稳定性、画出对应电路，并求逆 $z$ 变换 $h[n]$：
   1. $H(z)=1+2z^{-1}+3z^{-2}$；
   2. $H(z)=\dfrac{1+2z^{-1}}{2-z^{-1}}$。
3. 求下列信号的离散时间 Fourier 变换 $F(\omega)$，其中 $\omega$ 为归一化角频率：
   1. $x[n]=3\delta[n]-2\delta[n-2]+5\delta[n-4]$；
   2. $x[n]=u[n]-u[n-6]$。

## **Kai**
### Q.1
The bilateral $z$-transform is used.
#### (1)

$$
X(z) = 3-2z^{-2}+5z^{-4},\qquad |z|>0
$$

#### (2)
Note that

$$
\sum_{n=-\infty}^{\infty}u[n]z^{-n} =\sum_{n=0}^{\infty}z^{-n} = \frac{1}{1-z^{-1}}
$$

hence

$$
\sum_{n=0}^{\infty}(-n)z^{-n-1} = \frac{-z^{-2}}{(1-z^{-1})^{2}}
$$


$$
\sum_{n=0}^{\infty}nz^{-n} = X(z) = \frac{z^{-1}}{(1-z^{-1})^{2}}
$$

The series in (2) converges for $|z|>1$.

### Q.2
For the circuit realizations below, assume a causal system initially at rest.
#### (1)
The finite impulse response is absolutely summable, so the system is BIBO stable.

The corresponding circuit diagram is as follows:

![Causal FIR circuit](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2022/kyoto-ist-2021-fir.svg)

and

$$
h[n] = \delta[n]+2\delta[n-1]+3\delta[n-2]
$$

#### (2)
For the causal realization, the region of convergence is $|z|>1/2$, containing the unit circle, so the system is BIBO stable.

The corresponding circuit diagram is as follows:

![Causal IIR circuit](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist/2022/kyoto-ist-2021-iir.svg)

Note that

$$
\sum_{n=-\infty}^{\infty}a^{n}u[n]z^{-n}
= \sum_{n=-\infty}^{\infty}u[n](az^{-1})^{n}
= \sum_{n=0}^{\infty}(az^{-1})^{n}
=\frac{1}{1-az^{-1}}
$$

hence

$$
H(z) = -2+\frac{5}{2-z^{-1}} = -2+\frac52\frac{1}{1-2^{-1}\cdot z^{-1}}
$$

$$
\Rightarrow h[n] = -2\delta[n]+5\cdot 2^{-n-1}u[n]
$$

Without the causal assumption, the same rational expression also permits the region $|z|<1/2$, whose inverse is
$h[n]=-2\delta[n]-(5/2)(1/2)^n u[-n-1]$. This left-sided response is not absolutely summable and is unstable.

### Q.3
Note that

$$
\begin{align}
\sum_{n=-\infty}^{\infty}\delta[n-a]e^{-i\omega n} = e^{-i\omega a} \tag{*}
\end{align}
$$

and

$$
\begin{align}
\sum_{n=-\infty}^{\infty}(u[n]-u[n-a])e^{-i\omega n} &= \sum_{k=0}^{a-1}e^{-i\omega k}= \frac{1-e^{-i\omega a}}{1-e^{-i\omega}} \nonumber \\
&= \frac{e^{-i\omega a/2}\left(e^{i\omega a/2}-e^{-i\omega a/2}\right)}{e^{-i\omega/2}\left(e^{i\omega/2}-e^{-i\omega/2}\right)} \nonumber \\
&= e^{-i\omega(a-1)/2}\frac{\sin a\omega/2}{\sin \omega/2} \tag{**}
\end{align}
$$

#### (1)
By (*) we have

$$
F(\omega) = 3 - 2e^{-i2\omega} + 5e^{-i4\omega}
$$

#### (2)
By (**) we have

$$
F(\omega) = e^{-i5\omega/2}\frac{\sin 3\omega}{\sin \omega/2}
$$

At $\omega=2\pi k$ ($k\in\mathbb Z$), the value is $F(\omega)=6$, obtained directly from the six-sample sum or by continuity.
