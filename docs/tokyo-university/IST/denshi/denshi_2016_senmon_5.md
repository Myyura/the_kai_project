---
sidebar_label: "2016年度 専門 第5問"
sidebar_position: 12
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2016年度 専門 第5問


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Let us denote the Fourier transform of the signal $f(t)$ as $F(\omega)$, where $t$ and $\omega$ represent a time variable and an angle frequency, respectively.

(1) Show the definition of the Fourier transform $F(\omega)$ of the signal $f(t)$.
Also, explain the difference between the Fourier transform and the Fourier series expansion.

(2) Explain why $|F(\omega)|^2$ represents the power spectrum, i.e., the power at a certain angle frequency of $\omega$.

(3) Derive the following Parseval's theorem in the Fourier transform and determine $k$.

$$
\int_{-\infty}^{\infty}|f(t)|^2\text{d}t = k\int_{-\infty}^{\infty}|F(\omega)|^2\text{d}\omega, k\text{ is a real constant.}
$$

You may use $|f(t)|^2 = f(t)\overline{f(t)}$, $(\overline{f(t)} \text{ is the complex conjugate of }f(t))$. You may also use the Fourier transform of the following convolution integrals

$$
\int_{-\infty}^{\infty}f(t - \tau)g(\tau)\text{d}r = k'\int_{-\infty}^{\infty}F(\omega)G(\omega)e^{j\omega t}\text{d}\omega ,
$$

$j$ is the imaginary unit and $k'$ is a real constant.

You may include $k'$ when answering $k$.

(4) Explain the physical meaning of the Parseval's theorem in the Fourier transform.

## **Kai**
### (1)

$$
F(\omega) = \int_{-\infty}^{\infty}f(t)e^{-j\omega t}\text{d}t
$$

Fourier series can be applied to periodic signal. Fourier transform can be applied to non-periodic signal.

### (2)

$$
|F(\omega)|^2 = F(\omega)\overline{F(\omega)} = (\text{Real}\{F(\omega)\})^2 + (\text{Image}\{F(\omega)\})^2
$$

Thus $|F(\omega)|^2$ represents the power of certain angle frequency $\omega$.

### (3)

$$
\begin{aligned}
f(t) * g(t) &= \int_{-\infty}^{+\infty}f(t - \tau)g(\tau)\text{d}\tau = \int_{-\infty}^{+\infty}g(t - \tau)f(\tau)\text{d}\tau \\
f(0) * g(0) &= \int_{-\infty}^{+\infty}f(-\tau)g(\tau)\text{d}\tau = \int_{-\infty}^{+\infty}g(- \tau)f(\tau)\text{d}\tau \\
\end{aligned}
$$

if $g(\tau) = \overline{f(-\tau)}$

$$
\begin{aligned}
G(\omega) &= \int_{-\infty}^{+\infty}g(t)e^{-j\omega t}\text{d}t \\
&= \int_{-\infty}^{+\infty}\overline{f(-t)}e^{-j\omega t}\text{d}t \\
\overline{G(\omega)} &= \int_{-\infty}^{+\infty}f(-t)e^{-j\omega t} \\
&= \int_{-\infty}^{+\infty}f(t)e^{-j\omega t}\text{d}t = F(\omega) \qquad G(\omega) = \overline{F(\omega)}
\end{aligned}
$$

So

$$
\int_{-\infty}^{\infty}|f(t)|^2 = k'\int_{-\infty}^{\infty}|F(\omega)|^2 \text{d}\omega
$$

### (4)
The energy in time domain equals to $k'$ times energy in frequency domain.