---
sidebar_label: "2022年8月実施 専門科目 S-5"
tags:
  - Kyoto-University
  - Signal-Processing
  - Convolution
  - Fourier-Analysis
---

# 京都大学 情報学研究科 知能情報学専攻 2022年8月実施 専門科目 S-5

## **Author**
[realball](https://github.com/realballu3u)

## **Description**
Suppose that the Fourier transform $\mathcal{F}[f(x)]$ of a function $f(x)$ and the Fourier integral representation of the Dirac delta function $\delta(x)$ are given by the following formulae, where $x$ and $k$ are real numbers, and $i=\sqrt{-1}$. Answer the following questions.

$$
\begin{align}
\mathcal{F}[f(x)]&=F(k)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)\mathrm{e}^{-ikx}\text{d}x \tag{i}\\
\delta(x)&=\frac{1}{2\pi}\int_{-\infty}^{\infty}\mathrm{e}^{ikx}\text{d}k \tag{ii}
\end{align}
$$

### Q.1
Compute the Fourier transform of the function given below, where $\omega$ is a real number.

(1) $f_1(x)=\left\{\begin{array}{ll}0&(x<0) \\ 1&(0\le x\le2)\\0&(x>2)\end{array}\right.$

(2) $f_{2}(x)=\cos^{2}\omega x$

### Q.2
Compute the Fourier transform of function $f_3(x)$ by following the steps below.

$$
f_3(x)=\left\{\begin{array}{l}0 \ \ (x<-2)\\
x+2 \ \ (-2\leq x<0)\\
2-x \ \ (0\leq x<2)\\
0 \ \ (x\geq2)\end{array}\right.
$$

(1) Derive the following equation concerning convolution operation.

$$
\mathcal{F}[f(x)*g(x)]=\mathcal{F}\left[\int_{-\infty}^{\infty}f(\tau)g(x-\tau)\text{d}\tau\right]=\sqrt{2\pi}\mathcal{F}[f(x)]\mathcal{F}[g(x)]
$$


(2) Find function $f_4(x)$ whose convolution with the above $f_1(x)$ satisfies $f_3(x)=f_1(x) * f_4(x)$, and explain how the convolution gives $f_3(x)$.

(3) Compute $\mathcal{F}[f_3(x)]$.

## **Kai**
### Q.1
#### (1)

$$
\begin{aligned}
\mathcal{F}\left[f_{1}(x)\right]
&= \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-ikx}dx\\
&= \frac{1}{\sqrt{2\pi}}\int_{0}^{2}e^{-ikx}dx\\
&= -\frac{1}{ik\sqrt{2\pi}}\left[e^{-ikx}\right]_{0}^{2}\\
&= \frac{1}{ik\sqrt{2\pi}}\left(1-e^{-2ik}\right)
\end{aligned}
$$

applying the Euler formula,

$$
\begin{aligned}
\mathcal{F}\left[f_{1}(x)\right]
&= e^{-ik}\frac{2}{k\sqrt{2\pi}}\frac{e^{ik}-e^{-ik}}{2i}\\
&= e^{-ik}\sqrt{\frac{2}{\pi}}\frac{\sin k}{k}
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\mathcal{F}(f_{2}(x)) &= \mathcal{F}\left(\cos^{2}\omega x\right)\\
&= \frac{1}{2}\mathcal{F}\left(1+\cos 2\omega x\right)\\
&= \frac{1}{2}\left(\mathcal{F}(1) + \mathcal{F}\left(\cos 2\omega x\right)\right)
\end{aligned}
$$

$$
\sqrt{2\pi}\delta(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-ikx}dx \Rightarrow 
\mathcal{F}(1) = \sqrt{2\pi}\delta(k)
$$

$$
\begin{aligned}
\mathcal{F}\left[\cos 2\omega x\right]
&= \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}(\cos 2\omega x)e^{-ikx}dx\\
&= \frac{1}{2\sqrt{2\pi}}\int_{-\infty}^{\infty}\left(e^{i2\omega x}+e^{-i2\omega x}\right) e^{-ikx}dx\\
&= \frac{1}{2\sqrt{2\pi}}\int_{-\infty}^{\infty}\left(e^{-i(k-2\omega)x}+e^{-i(k+2\omega)x}\right)dx\\
&= \frac{1}{2}\cdot\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-i(k-2\omega)x}dx+\frac{1}{2}\cdot\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-i(k+2\omega)x}dx\\
&= \frac{1}{2}\cdot \sqrt{2\pi}\delta(k-2\omega)+\frac{1}{2}\cdot \sqrt{2\pi}\delta(k+2\omega)\\
&= \frac{\sqrt{2\pi}}{2}\left(\delta(k-2\omega)+\delta(k+2\omega)\right)
\end{aligned}
$$

Hence

$$
\mathcal{F}(f_{2}(x)) = \frac{\sqrt{2\pi}}{4}\left(\delta(k-2\omega)+2\delta(k)+\delta(k+2\omega)\right)
$$

### Q.2
#### (1)

$$
\begin{aligned}
\mathcal{F}\left[f(x)\ast g(x)\right] &= \mathcal{F}\left[\int_{-\infty}^{\infty}f(\tau)g(x-\tau)d\tau\right]\\
&= \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}\left(\int_{-\infty}^{\infty}f(\tau)g(x-\tau)d\tau\right)e^{-ikx}dx\\
&= \int_{-\infty}^{\infty}f(\tau)\left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}g(x-\tau)e^{-ikx}dx\right)d\tau\\
&= \int_{-\infty}^{\infty}f(\tau)e^{-ik\tau}\left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}g(x-\tau)e^{-ik(x-\tau)}dx\right)d\tau\\
&= \int_{-\infty}^{\infty}f(\tau)\left(\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}g(y)e^{-iky}dy\right)d\tau\\
&= \int_{-\infty}^{\infty}f(\tau)\mathcal{F}\left[g(x)\right]d\tau\\
&= \int_{-\infty}^{\infty}f(\tau)d\tau\cdot\mathcal{F}\left[g(x)\right]\\
&= \sqrt{2\pi}\mathcal{F}\left[g(x)\right]\mathcal{F}\left[g(x)\right]
\end{aligned}
$$

#### (2)

$$
f_4(x)=\begin{cases} 
0 & x < -2 \\
1 & -2\leq x \leq 0\\
0 & x > 0
\end{cases}
$$

$$
f_3(x)=f_1(x)\ast f_4(x) =\int_{0}^{2}f_4(x-\tau)d\tau
$$

#### (3)

$$
\begin{aligned}
\mathcal{F}\left[f_{3}(x)\right]
&= \mathcal{F}\left[f_{1}(x)\ast f_{4}(x)\right]\\
&= \mathcal{F}\left[f_{1}(x)\ast f_{1}(x+2)\right]\\
&= \sqrt{2\pi}\mathcal{F}\left[f_{1}(x)\right]\mathcal{F}\left[f_{1}(x+2)\right]\\
&= \sqrt{2\pi}\mathcal{F}\left[f_{1}(x)\right]\left(e^{2ik}\mathcal{F}\left[f_{1}(x)\right]\right)\\
&= \sqrt{2\pi}e^{2ik}\left(\mathcal{F}\left[f_{1}(x)\right]\right)^{2}\\
&= \sqrt{2\pi}e^{2ik}\left(e^{-ik}\sqrt{\frac{2}{\pi}}\frac{\sin k}{k}\right)^{2}\\
&= 2\sqrt{\frac{2}{\pi}}\left( \frac{\sin k}{k} \right)^{2}
\end{aligned}
$$
