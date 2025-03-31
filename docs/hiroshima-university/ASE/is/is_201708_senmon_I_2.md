---
sidebar_label: "2017年8月実施 専門科目I 問題2"
sidebar_position: 23
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2017年8月実施 専門科目I 問題2


## **Author**
samparker

## **Description**
(1) $\alpha > 0$ とする時、関数 $f(x) = x^{\alpha} e^{-x}$ の $[0, \infty)$ における最大値を求めよ。

(2) 以下の広義積分が $x > 0$ において収束することを示せ。

$$
\Gamma(x) = \int_0^{\infty} t^{x-1} e^{-t} dt
$$

(3) 極限 $\lim_{x \to +0} x \Gamma(x)$ を求めよ。

---

(1) For $\alpha > 0$, find the maximum of the function $f(x) = x^{\alpha} e^{-x}$ on $[0, \infty)$.

(2) Show the following improper integral converges on $x > 0$:

$$
\Gamma(x) = \int_0^{\infty} t^{x-1} e^{-t} dt
$$

(3) Find the limit:

$$
\lim_{x \to +0} x \Gamma(x)
$$

## **Kai**
### (1)

$$
\begin{aligned}
&f'(x) = 0 \\
&\Rightarrow \alpha x^{\alpha - 1} e^{-x} - x^{\alpha} e^{-x} = 0 \\
&\Rightarrow e^{-x} (\alpha x^{\alpha - 1} - x^{\alpha}) = 0 \\
&\Rightarrow x = \alpha
\end{aligned}
$$

Note that $f'(x) > 0$ when $x < \alpha$ and $f'(x) < 0$ when $x > \alpha$. Therefore, the maximum of $f(x)$ is $f(\alpha) = \alpha^{\alpha} e^{-\alpha}$.

### (2)
Let’s divide the integral in a sum of two terms,

$$
\Gamma(x) = \int_0^{1} t^{x-1} e^{-t} dt + \int_1^{\infty} t^{x-1} e^{-t} dt
$$

For the first term, since the function $e^{-t}$ is decreasing, it's maximum on the interval $[0, 1]$ is attained at $t = 0$, hence

$$
\int_0^{1} t^{x-1} e^{-t} dt < \int_0^1 t^{x-1} dt.
$$

But for $x > 0$, this last integral converges to $1/x$.

For the second term, since the exponential grows faster than any polynomial, for every $x$ we can take $N \in \mathbb{N}$ so big that $t \geq N \Rightarrow e^{t/2} > t^{x-1}$ so

$$
\begin{aligned}
    \int_1^{\infty} t^{x-1} e^{-t} dt &= \int_1^{N} t^{x-1} e^{-t} dt + \int_N^{\infty} t^{x-1} e^{-t} dt \\
    &< \int_1^{N} t^{x-1} e^{-t} dt + \int_N^{\infty} e^{t/2} e^{-t} dt \\
    &= \int_1^{N} t^{x-1} e^{-t} dt + \int_N^{\infty} e^{-t/2} dt \\
    &< \infty
\end{aligned}
$$

which completes the proof.

### (3)

$$
\begin{aligned}
    \Gamma(x+1) &= \int_0^{\infty} t^{x} e^{-t} dt \\
    &= \left[- e^{-t} t^x \right]_0^{\infty} + x \int_{0}^{\infty} t^{x-1} e^{-t} dt \\
    &= x \int_{0}^{\infty} t^{x-1} e^{-t} dt \\
    &= x \Gamma(x)
\end{aligned}
$$

$$
\lim_{x \to +0} x \Gamma(x) = \lim_{x \to +0} \Gamma(x+1) = \Gamma(1) = 1
$$
