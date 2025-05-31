---
sidebar_label: "2020年8月実施 専門科目 S-5"
tags:
  - Kyoto-University
---

# 京都大学 情報学研究科 知能情報学専攻 2020年8月実施 専門科目 S-5

## **Author**
[realball](https://github.com/realballu3u)

## **Description**
The Fourier spectrum of a continuous-time signal $f(t)$ is given by $F(\omega) = \int_{-\infty}^{\infty}f(t)e^{-j\omega t}dt$, 
where $j$ denotes the imaginary unit.
Let $X[k]$ denote discrete Fourier transform of a finite-length discrete signal of length $N$, $x[n] \ (n = 0, \ldots, N-1)$.
Answer the following questions.

### Q.1
Suppose that $f(t)$ is an even function, that is $f(x) = f(-x).$ The Fourier spectrum of $f(t)$ is given by

$$
F(\omega) = 2 \int_0^{\infty} f(t) \boxed{\ (A)\ }dt.
$$

Answer $\boxed{\ (A)\ }$. Calculation procedure must also be included in the answer.

### Q.2
Let $x_s[n]$ be the circular shifted version of $x[n]$ by $s$,

$$
x_s[n] = \begin{cases}
    x[N+n-s] &(n<s) \\
    x[n-s] &(n \geq s)
\end{cases}
$$

The discrete Fourier transform of $x_s[n]$ is given by $\boxed{\ (B)\ }X[k]$.

Answer $\boxed{\ (B)\ }$. Calculation procedure must also be included in the answer.

### Q.3
Let $y[n]$ be a finite-length discrete signal of length $2N$,

$$
y[n] = \begin{cases}
    x[n] &(0 \leq n < N) \\
    x[2N-1-n] &(N \leq n < 2N).
\end{cases}
$$

The discrete Fourier transform of $y[n]$ is given by

$$
Y[k] = 2 \boxed{\ (C)\ } \sum_{n=0}^{N-1} x[n] \cos (\boxed{\ (D)\ }).
$$

Answer $\boxed{\ (C)\ }$ and $\boxed{\ (D)\ }$. Calculation procedure must also be included in the answer.

### Q.4
The transform of $x[n]$,

$$
X_{DCT}[k] = \alpha_k \sum_{n=0}^{N-1} x[n] \cos (\boxed{\ (D)\ }), \alpha_0 = 1/\sqrt{N}, \alpha_k = \sqrt{2/N}
$$

is known as a discrete cosine tranform (DCT-II), and is used in data compression such as JPEG.

Explain an advantage of the discrete cosine transform compared to the discrete Fourier transform in terms of data compression.

## **Kai**
### Q.1

$$
\begin{aligned}
\mathcal{F}(\omega)
&=\int_{-\infty}^{\infty} f(t)e^{-j\omega t}dt\\
&= \int_{-\infty}^{\infty}f(t)\left[\cos(\omega t)-j \sin(\omega t)dt \right]\\
&= \int_{-\infty}^{\infty}f(t)\cos(\omega t)dt - \int_{-\infty}^{\infty}f(t)j \sin(\omega t)dt\\
&= \int_{-\infty}^{\infty}f(t)\cos(\omega t)dt
\end{aligned}
$$

Thus, blank (A) is $\cos(\omega t)$.

### Q.2

$$
\begin{aligned}
X_s[k]&= \sum_{n=0}^{N-1}x_s[n]e^{-j\frac{2\pi}{N}kn}\\
&=\sum_{n=0}^{S-1}x[N+n-s]e^{-j\frac{2\pi}{N}kn}+\sum_{n=s}^{N-1}x[n-s]e^{-j\frac{2\pi}{N}kn}\\
&\text{assume ①:} m=N+n-s;n=m+s-N\\
&\text{assume ②:} m=n-s;n=m+s\\
&=\sum_{m=N-s}^{N-1}x[m]e^{-j\frac{2\pi}{N}k(m+s-N)}+\sum_{m=0}^{N-S-1}x[m]e^{-j\frac{2\pi}{N}k(m+s)}\\
&=e^{-j\frac{2\pi}{N}ks}\sum_{m=0}^{N-1}x[m]e^{-j\frac{2\pi}{N}km}\\
&\text{Thus: } x_s[k]=X[k]e^{-j\frac{2\pi}{N}ks}\\
&\text{Then: } (B)=e^{-j\frac{2\pi}{N}ks}
\end{aligned}
$$

### Q.3

$$
\begin{aligned}
Y[k]
&= \sum_{n=0}^{2N-1}x[n] e^{-j\frac{2\pi}{2N}kn} \\
&= \sum_{n=0}^{N-1}x[n] e^{-j\frac{\pi}{N}kn} + \sum_{n=N}^{2N-1}x[2N-1-n] e^{-j\frac{\pi}{N}kn} \\
&= \sum_{n=0}^{N-1}x[n] e^{-j\frac{\pi}{N}kn} + \sum_{n=0}^{N-1}x[N-1-n] e^{-j\frac{\pi}{N}kn} \\
&= \sum_{n=0}^{N-1}x[n] e^{-j\frac{\pi}{N}kn} + \sum_{m=0}^{N-1}x[m] e^{-j\frac{\pi}{N}k(N-1-m)} \\
&= \sum_{n=0}^{N-1}x[n] e^{-j\frac{\pi}{N}kn} + \sum_{m=0}^{N-1}x[m] e^{j\frac{\pi}{N}k(m+1)} \\
&= e^{j\frac{\pi}{2N}k}\left( \sum_{n=0}^{N-1}x[n] e^{-j\pi k\frac{2n+1}{2N}} + \sum_{n=0}^{N-1}x[n] e^{j\pi k\frac{2n+1}{2N}} \right) \\
&= 2e^{j\frac{\pi}{2N}k}\left( \sum_{n=0}^{N-1}x[n] \frac{e^{-j\pi k\frac{2n+1}{2N}} + e^{j\pi k\frac{2n+1}{2N}}}{2} \right) \\
&= 2e^{j\frac{\pi}{2N}k}\left( \sum_{n=0}^{N-1}x[n] \cos \frac{2n + 1}{2N}\pi k \right)
\end{aligned}
$$

### Q.4
Better concentrate energy
