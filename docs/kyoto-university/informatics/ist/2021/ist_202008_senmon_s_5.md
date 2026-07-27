---
sidebar_label: 2020年8月実施 専門科目 S-5
tags:
  - Kyoto-University
  - Electrical-Electronic.Signal-Processing.Discrete-Fourier-Transform
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

### 题目描述

连续时间信号 $f(t)$ 的 Fourier 变换为
$F(\omega)=\int_{-\infty}^{\infty}f(t)e^{-j\omega t}\,dt$。长度 $N$ 的离散信号为 $x[n]$（$n=0,\ldots,N-1$），其 DFT 记为 $X[k]$。回答各空并写出推导。

1. 若 $f(t)$ 为偶函数，则
   $$
   F(\omega)=2\int_0^\infty f(t)\boxed{(A)}\,dt.
   $$
   求 $(A)$。
2. 将 $x[n]$ 循环右移 $s$ 位：
   $$
   x_s[n]=
   \begin{cases}
   x[N+n-s],&n<s,\\
   x[n-s],&n\ge s.
   \end{cases}
   $$
   其 DFT 为 $\boxed{(B)}X[k]$。求 $(B)$。
3. 构造长度 $2N$ 的偶对称延拓
   $$
   y[n]=
   \begin{cases}
   x[n],&0\le n<N,\\
   x[2N-1-n],&N\le n<2N.
   \end{cases}
   $$
   其 DFT 写为
   $$
   Y[k]=2\boxed{(C)}
   \sum_{n=0}^{N-1}x[n]\cos\bigl(\boxed{(D)}\bigr).
   $$
   求 $(C),(D)$。
4. 定义 DCT-II
   $$
   X_{\mathrm{DCT}}[k]=\alpha_k
   \sum_{n=0}^{N-1}x[n]\cos\bigl(\boxed{(D)}\bigr),
   \quad
   \alpha_0=\frac1{\sqrt N},\quad
   \alpha_k=\sqrt{\frac2N}.
   $$
   从数据压缩角度说明 DCT 相比 DFT 的一个优势，例如其在 JPEG 中的使用。

#### 考点

- **偶信号 Fourier 变换**：利用正弦项奇对称消失，将变换化为实余弦积分。
- **DFT 循环移位性质**：通过索引代换推导时域循环移位对应的频域线性相位因子。
- **偶延拓与 DCT-II**：把 $2N$ 点 DFT 配对为余弦和，确定相位因子与余弦角度。
- **变换编码能量集中**：说明实信号 DCT 的边界延拓减少不连续，常使低频少量系数集中更多能量且无需复数系数。

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
&\text{assume \textcircled{1}:} m=N+n-s;n=m+s-N\\
&\text{assume \textcircled{2}:} m=n-s;n=m+s\\
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
