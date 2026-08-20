---
sidebar_label: 2024年8月実施 専門 第5問
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Z-Transform
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2024年8月実施 専門 第5問

## **Author**

[adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

Answer the following questions about discrete-time signal processing.

(1) Describe briefly the functionality and role of an anti-aliasing filter.

(2) For a linear time-invariant and causal discrete-time signal processing system $L$, let the transfer function be

$$
H(z) = \frac{\alpha z^2}{\alpha\beta z^2 - \alpha\beta z + \beta - \gamma},
$$

where $z$ is a complex variable, $\alpha, \beta, \gamma$ are real constant numbers, and $\alpha, \beta > 0$. In this case, find the difference equation for the relationship between the input $x[n]$ and the output $y[n]$ of the discrete-time signal for $L$, where $n$ is an integer.

(3) In (2), find the range of $\gamma$ such that $L$ is stable when $\alpha = 4$ and $\beta = 1$.

(4) In (2), when $\alpha = 4$ and $\beta = \gamma = \frac{1}{2}$, find the magnitude response $|H(e^{j\Omega})|$ and the phase response $\angle H(e^{j\Omega})$ in $L$, where $j$ is the imaginary unit and $\Omega$ is the angular frequency.

(5) In (2), when $\alpha = 4, \beta = 1$, and $\gamma = \frac{1}{9}$, find the impulse response $h[n]$ of $L$ using the following discrete-time unit step signal $u[n]$.

$$
u[n] = \begin{cases} 1 & (n \ge 0) \\ 0 & (n < 0) \end{cases}
$$

### 题目描述

回答下列离散时间信号处理问题。

(1) 简要说明抗混叠滤波器的功能与作用。

(2) 对线性、时不变、因果的离散时间信号处理系统 $L$，传递函数为

$$
H(z)=\frac{\alpha z^2}
{\alpha\beta z^2-\alpha\beta z+\beta-\gamma},
$$

其中 $z$ 为复变量，$\alpha,\beta,\gamma$ 为实常数，且 $\alpha,\beta>0$。设 $n$ 为整数，求系统输入 $x[n]$ 与输出 $y[n]$ 之间的差分方程。

(3) 在 (2) 中取 $\alpha=4,\beta=1$，求使系统 $L$ 稳定的 $\gamma$ 取值范围。

(4) 在 (2) 中取 $\alpha=4$、$\beta=\gamma=\frac12$，求系统的幅频响应 $|H(e^{j\Omega})|$ 和相频响应 $\angle H(e^{j\Omega})$，其中 $j$ 为虚数单位，$\Omega$ 为角频率。

(5) 在 (2) 中取 $\alpha=4,\beta=1,\gamma=\frac19$，使用离散时间单位阶跃信号

$$
u[n]=
\begin{cases}
1,&n\ge0,\\
0,&n<0
\end{cases}
$$

求系统 $L$ 的冲激响应 $h[n]$。

## **Kai**
### (1)

An anti-aliasing filter is a filter used before a signal sampler to restrict the bandwidth of a signal to satisfy the Nyquist-Shannon sampling theorem over the band of interest.

### (2)

Given $H(z) = \frac{Y(z)}{X(z)} = \frac{\alpha z^2}{\alpha\beta z^2 - \alpha\beta z + \beta - \gamma}$

i.e., $Y(z)(\alpha\beta - \alpha\beta z^{-1} + (\beta - \gamma)z^{-2}) = X(z)\alpha$

Since $y[n-k] \leftrightarrow z^{-k}Y(z)$ :
$\alpha\beta y[n] - \alpha\beta y[n-1] + (\beta - \gamma) y[n-2] = \alpha x[n]$

Divide by $\alpha\beta$ (assuming non-zero) :
$y[n] - y[n-1] + \frac{\beta - \gamma}{\alpha\beta} y[n-2] = \frac{1}{\beta} x[n]$

### (3)

Substitute parameters into the denominator characteristic equation: $4z^2 - 4z + (1 - \gamma) = 0$

Roots: $z = \frac{4 \pm \sqrt{16 - 16(1 - \gamma)}}{8} = \frac{1 \pm \sqrt{\gamma}}{2}$

For stability, poles must be inside the unit circle: $|z| < 1$
i.e., $\left| \frac{1 \pm \sqrt{\gamma}}{2} \right| < 1 \implies |1 \pm \sqrt{\gamma}| < 2$

If $\gamma \ge 0$, $-3 < \pm \sqrt{\gamma} < 1 \implies 0 \le \gamma < 1$

If $\gamma < 0$, $1 + (-\gamma) < 4 \implies -3 < \gamma < 0$

i.e., $-3 < \gamma < 1$

### (4)

Given $\alpha = 4, \beta = \gamma = \frac{1}{2}$

$$
H(z) = \frac{4z^2}{2z^2 - 2z} = \frac{2z}{z - 1}
$$

Since $z = e^{j\Omega}$, $H(e^{j\Omega}) = \frac{2e^{j\Omega}}{e^{j\Omega} - 1} = \frac{2e^{j\Omega}}{e^{j\frac{\Omega}{2}}(e^{j\frac{\Omega}{2}} - e^{-j\frac{\Omega}{2}})} = \frac{e^{j\frac{\Omega}{2}}}{j \sin\frac{\Omega}{2}}$

Therefore, $|H(e^{j\Omega})| = \left| \frac{e^{j\frac{\Omega}{2}}}{j \sin\frac{\Omega}{2}} \right| = \frac{1}{|\sin\frac{\Omega}{2}|} = \begin{cases} \frac{1}{\sin\frac{\Omega}{2}} & \text{if } \sin\frac{\Omega}{2} > 0 \\ -\frac{1}{\sin\frac{\Omega}{2}} & \text{if } \sin\frac{\Omega}{2} < 0 \end{cases}$

Similarly, $\angle H(e^{j\Omega}) = \begin{cases} \frac{\Omega}{2} - \frac{\pi}{2} & \text{if } \sin\frac{\Omega}{2} > 0 \\ \frac{\Omega}{2} + \frac{\pi}{2} & \text{if } \sin\frac{\Omega}{2} < 0 \end{cases}\pmod{2\pi}$

In summary (phases are modulo $2\pi$):
- If $\sin\frac{\Omega}{2} > 0$, $|H(e^{j\Omega})| = \frac{1}{\sin\frac{\Omega}{2}}, \quad \angle H(e^{j\Omega}) = \frac{\Omega}{2} - \frac{\pi}{2}$
- If $\sin\frac{\Omega}{2} < 0$, $|H(e^{j\Omega})| = -\frac{1}{\sin\frac{\Omega}{2}}, \quad \angle H(e^{j\Omega}) = \frac{\Omega}{2} + \frac{\pi}{2}$

At $\Omega=2\pi k\ (k\in\mathbb Z)$, $H(e^{j\Omega})$ is undefined because the system has a pole on the unit circle.

### (5)

Given $\alpha = 4, \beta = 1, \gamma = \frac{1}{9}$

$$
H(z) = \frac{4z^2}{4z^2 - 4z + \frac{8}{9}} = \frac{1}{1 - z^{-1} + \frac{2}{9}z^{-2}} = \frac{1}{(1 - \frac{2}{3}z^{-1})(1 - \frac{1}{3}z^{-1})}
$$

i.e.,

$$
H(z) = \frac{6}{3 - 2z^{-1}} + \frac{-3}{3 - z^{-1}} = \frac{2}{1 - (\frac{2}{3})z^{-1}} - \frac{1}{1 - (\frac{1}{3})z^{-1}}
$$

Inverse Z-transform using $u[n]$:
- $h[n] = \left( 2\left(\frac{2}{3}\right)^n - \left(\frac{1}{3}\right)^n \right) u[n]$
