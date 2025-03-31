---
sidebar_label: "2022年度 数学 第1問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2022年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
$\alpha\ge 1$と$n>0$に対し以下の積分$I_{n}(\alpha)$を考える．

$$
I_{n}(\alpha)=\int_\frac{1}{n}^n \frac{f(\alpha x)-f(x)}{x}\text{d}x
$$

ただし、実数値関数$f(x)$ は $x \ge 0$
において連続かつ微分可能で、導関数が連続であり、$\lim \limits_{x \to \infty}f(x)=0$が成り立つと仮定する．以下の問いに答えよ．

(1)、$J_{n}(\alpha)=\dfrac{\text{d}I_{n}(\alpha)}{\text{d}\alpha}$とおく．
$J_{n}(\alpha)=\dfrac{1}{\alpha}(f(\alpha n)-f(\dfrac{\alpha}{n}))$ であることを示せ．ここでは、積分と微分が交換可能であることを用いてもよい．

(2)、$I(\alpha)=\lim \limits_{n \to \infty}I_{n}(\alpha)$とおく．
任意の $\beta \in [1,\alpha]$ に対して $\lim \limits_{n \to \infty}J_{n}(\beta)$ が存在し、かつ、それが $[1,\alpha]$ 上一様収束することを示し、

$$
I(\alpha)=\int_1^\alpha(\lim_{n \to \infty}J_{n}(\beta))\text{d}\beta
$$

であることを示せ．

(3)、$I(\alpha)$を求めよ．

(4)、以下の積分を求めよ．ただし、$p>q>0$とする．

$$
\int_0^\infty\frac{e^{-px}\cos(px)-e^{-qx}\cos(qx)}{x}\text{d}x
$$

### **Kai**
### (1)

$$
\begin{aligned}
J_{n}(\alpha)=\frac{\text{d}I_{n}(\alpha)}{\text{d}\alpha}
&= \int_{\frac{1}{n}}^{n} \frac{\text{d}}{\text{d}\alpha} {[\frac{f(\alpha x)-f(x)}{x}]}\text{d}x \\
&= \int_{\frac{1}{n}}^{n} f'(\alpha x)\text{d}x \\
&= \frac{1}{\alpha}f(\alpha x) \Big|_{\frac{1}{n}}^{n} \\
&= \frac{1}{\alpha}(f(\alpha n)-f(\frac{\alpha}{n})) \\
\end{aligned}
$$

### (2)

$$
J_{n}(\alpha)=\frac{\text{d}I_{n}(\alpha)}{\text{d}\alpha} \qquad
\int_{a}^{b}J_{n}(\alpha)\text{d}\alpha=I_{n}(b)-I_{n}(a)
$$

$$
\begin{aligned}
I_{n}(1) &= \int_{\frac{1}{n}}^{n} \frac{f(x)-f(x)}{x} \text{d}x=0 \\
I_{n}(\alpha) &= \int_1^{\alpha}J_{n}(\beta)\text{d}\beta \\
I_{n}(\alpha) &= \lim_{n \rightarrow \infty} I_{n}(\alpha) = \int_1^{\alpha}(\lim_{n \rightarrow \infty}J_{n}(\beta))\text{d} \beta
\end{aligned}
$$

### (3)

$$
\lim_{n \rightarrow \infty} J_{n}(\beta) = \frac{1}{\beta}(\lim_{n \rightarrow \infty}f(\beta n) - \lim_{n \rightarrow \infty}f(\frac{\beta}{n}))
$$

Since $\lim_{n \rightarrow \infty}f(\beta n) = 0$, we have

$$
\begin{aligned}
&\lim_{n \rightarrow \infty}J_{n}(\beta) = \frac{1}{\beta}(-f(0)) \\
&I(\alpha) = \int_1^{\alpha} \frac{1}{\beta}(-f(0))\text{d}\beta = -f(0)\ln \alpha
\end{aligned}
$$

### (4)

$$
f(x)=e^{-x} \cos(x) \qquad f(0) = 1
$$

$$
\int_0^\infty\frac{e^{-px}\cos(px)-e^{-qx}\cos(qx)}{x}\text{d}x = \int_0^{\infty} \frac{f(\text{p}x) - f(\text{q}x)}{x} \text{d}x
$$