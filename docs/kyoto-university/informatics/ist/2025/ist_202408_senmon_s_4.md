---
sidebar_label: "2024年8月実施 専門科目 S-4"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2024年8月実施 専門科目 S-4

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**

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