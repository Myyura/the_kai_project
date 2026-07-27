---
sidebar_label: "2015年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Power-Spectrum-and-Parseval-Energy-Identity
  - Mathematics.Fourier-Analysis.Parseval-Identity
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2015年8月実施 専門 第5問


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

### 题目描述

记信号 $f(t)$ 的傅里叶变换为 $F(\omega)$，其中 $t$ 为时间变量，$\omega$ 为角频率。

(1) 写出 $f(t)$ 的傅里叶变换 $F(\omega)$ 的定义，并说明傅里叶变换与傅里叶级数展开的区别。

(2) 解释为何 $|F(\omega)|^2$ 表示功率谱，即角频率 $\omega$ 处的功率。

(3) 推导傅里叶变换形式的帕塞瓦尔定理并确定实常数 $k$：

$$
\int_{-\infty}^{\infty}|f(t)|^2\,\mathrm dt
=k\int_{-\infty}^{\infty}|F(\omega)|^2\,\mathrm d\omega.
$$

可以使用 $|f(t)|^2=f(t)\overline{f(t)}$，其中 $\overline{f(t)}$ 是 $f(t)$ 的复共轭；也可以使用卷积积分的傅里叶表示

$$
\int_{-\infty}^{\infty}f(t-\tau)g(\tau)\,\mathrm d\tau
=k'\int_{-\infty}^{\infty}F(\omega)G(\omega)e^{j\omega t}\,\mathrm d\omega,
$$

其中 $j$ 为虚数单位，$k'$ 为实常数。求 $k$ 时可以用 $k'$ 表示答案。

(4) 说明傅里叶变换中帕塞瓦尔定理的物理意义。

#### 考点

- 傅里叶变换与功率谱：要求从变换定义和复频谱幅值说明 $|F(\omega)|^2$ 的含义，并区分变换与级数。
- 帕塞瓦尔恒等式：要求结合复共轭和卷积关系推导时域、频域能量等价及归一化常数。

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
