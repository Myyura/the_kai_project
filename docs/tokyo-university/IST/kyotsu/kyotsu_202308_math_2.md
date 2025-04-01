---
sidebar_label: "数学 第2問"
sidebar_position: 17
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2023年8月実施 数学 第2問

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Consider a function $f(s)$ defined by the following integral for positive real numbers $s$.

$$
f(s) = \int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t.
$$

Answer the following questions. You may answer without showing that the above integral converges.

(1) Find the value of $f(1)$.

(2) The inequality $\exp(t) > \frac{t^n}{n!}$ holds for any positive real number $t$ and non-negative integer $n$.

- (a) For positive real numbers $s$, show the following inequality.

$$
\int_0^1 t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{1}{s}.
$$

- (b) When $n > s > 0$, show that the following inequality holds for any real number $c$ that satisfies $c > 1$.

$$
\int_1^c t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{n!}{n-s}.
$$

(3) When the second-order derivative of $f(s)$ is expressed as

$$
\frac{\mathrm{d}^2 f(s)}{\mathrm{d}s^2} = \int_0^\infty g(t, s) \exp(-t) \,\mathrm{d}t,
$$

   find a function $g(t, s)$. You may answer without showing that the order of differentiation and integration can be exchanged.

(4) Find the value of $D$ defined as

$$
D = \int_0^\infty (\log t)^2 \exp(-t) \,\mathrm{d}t - \left(\int_0^\infty (\log t) \exp(-t) \,\mathrm{d}t \right)^2.
$$

Here, you may use the fact that the following relation holds.

$$
\frac{\mathrm{d}^2 \log f(s)}{\mathrm{d}s^2}\bigg|_{s=1} = \frac{\pi^2}{6}.
$$

(5) Define a function $p(r)$ for positive real numbers $r$ and $\alpha$ as

$$
p(r) = \frac{r}{\alpha} \exp \left(-\frac{r^2}{2\alpha}\right).
$$

Find the value of $S$ defined as

$$
S = \int_0^\infty (\log r)^2 p(r) \,\mathrm{d}r - \left(\int_0^\infty (\log r) p(r) \,\mathrm{d}r\right)^2.
$$

## **Kai**
### (1)

We start by evaluating $f(1)$:

$$
f(1) = \int_0^\infty t^{1-1} \exp(-t) \,\mathrm{d}t = \int_0^\infty \exp(-t) \,\mathrm{d}t.
$$

This integral is well-known and is the Laplace transform of a constant function $1$. Evaluating the integral:

$$
\int_0^\infty \exp(-t) \,\mathrm{d}t = \left[-\exp(-t)\right]_0^\infty = \left(0 - (-1)\right) = 1.
$$

So, $f(1) = 1$.

### (2)

#### Part 1: Show that $\int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{1}{s}$ for positive real numbers $s$

To show this inequality, we start by considering the definition of $f(s)$:

$$
f(s) = \int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t.
$$

The problem gives us the inequality $\exp(t) > \frac{t^n}{n!}$ for any positive real number $t$ and non-negative integer $n$. Taking the reciprocal and considering the exponential function in the integrand:

$$
\exp(-t) < \frac{n!}{t^n}.
$$

Substituting this into the integral, we obtain:

$$
f(s) = \int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t < \int_0^\infty t^{s-1} \frac{n!}{t^n} \,\mathrm{d}t = n! \int_0^\infty t^{s-n-1} \,\mathrm{d}t.
$$

The integral $\int_0^\infty t^{s-n-1} \,\mathrm{d}t$ converges when $s-n > 0$. Evaluating this integral:

$$
\int_0^\infty t^{s-n-1} \,\mathrm{d}t = \frac{1}{s-n}.
$$

Thus, the inequality becomes:

$$
f(s) < \frac{n!}{s-n}.
$$

Now, by setting $n=1$, we obtain:

$$
f(s) < \frac{1!}{s-1} = \frac{1}{s}.
$$

Therefore, we have shown that:

$$
\int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{1}{s}.
$$

#### Part 2: Show that $\int_1^c t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{n!}{n-s}$ for $n > s > 0$ and $c > 1$

We are given that $n > s > 0$ and $c > 1$, and we need to prove the inequality:

$$
\int_1^c t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{n!}{n-s}.
$$

Using the same inequality $\exp(-t) < \frac{n!}{t^n}$, we substitute it into the integral:

$$
\int_1^c t^{s-1} \exp(-t) \,\mathrm{d}t < \int_1^c t^{s-1} \frac{n!}{t^n} \,\mathrm{d}t = n! \int_1^c t^{s-n-1} \,\mathrm{d}t.
$$

Next, we evaluate the integral:

$$
n! \int_1^c t^{s-n-1} \,\mathrm{d}t = n! \left[\frac{t^{s-n}}{s-n}\right]_1^c = \frac{n!}{n-s} \left(1 - \frac{1}{c^{n-s}}\right).
$$

Since $c > 1$, the term $\frac{1}{c^{n-s}}$ is less than $1$, which means:

$$
1 - \frac{1}{c^{n-s}} < 1.
$$

Thus:

$$
\int_1^c t^{s-1} \exp(-t) \,\mathrm{d}t < \frac{n!}{n-s}.
$$

### (3)

Given:

$$
\frac{\mathrm{d}^2 f(s)}{\mathrm{d}s^2} = \int_0^\infty g(t, s) \exp(-t) \,\mathrm{d}t,
$$

We first need to compute the second derivative of $f(s)$:

$$
f(s) = \int_0^\infty t^{s-1} \exp(-t) \,\mathrm{d}t.
$$

First derivative:

$$
\frac{\mathrm{d}f(s)}{\mathrm{d}s} = \int_0^\infty \frac{\partial}{\partial s} \left( t^{s-1} \right) \exp(-t) \,\mathrm{d}t = \int_0^\infty t^{s-1} \log(t) \exp(-t) \,\mathrm{d}t.
$$

Second derivative:

$$
\frac{\mathrm{d}^2 f(s)}{\mathrm{d}s^2} = \int_0^\infty \frac{\partial}{\partial s} \left( t^{s-1} \log(t) \right) \exp(-t) \,\mathrm{d}t = \int_0^\infty t^{s-1} \log^2(t) \exp(-t) \,\mathrm{d}t.
$$

Thus, $g(t, s) = t^{s-1} \log^2(t)$.

### (4)

We need to find the value of the expression

$$
D = \int_0^\infty (\log t)^2 \exp(-t) \,\mathrm{d}t - \left(\int_0^\infty (\log t) \exp(-t) \,\mathrm{d}t \right)^2.
$$

This problem requires us to calculate two integrals: one involving $(\log t)^2$ and another involving $\log t$. We are also given the hint that the following relation holds:

$$
\frac{\mathrm{d}^2 \log f(s)}{\mathrm{d}s^2}\bigg|_{s=1} = \frac{\pi^2}{6}.
$$

#### Step 1: Expressing the Second-Order Derivative of $f(s)$

From **Question 3**, we know that:

$$
\frac{\mathrm{d}^2 f(s)}{\mathrm{d}s^2} = \int_0^\infty t^{s-1} \log^2(t) \exp(-t) \,\mathrm{d}t.
$$

Setting $s = 1$:

$$
\frac{\mathrm{d}^2 f(1)}{\mathrm{d}s^2} = \int_0^\infty t^{1-1} \log^2(t) \exp(-t) \,\mathrm{d}t = \int_0^\infty \log^2(t) \exp(-t) \,\mathrm{d}t.
$$

This integral represents the first term in $D$, which is:

$$
\int_0^\infty (\log t)^2 \exp(-t) \,\mathrm{d}t.
$$

Thus, we have:

$$
\int_0^\infty (\log t)^2 \exp(-t) \,\mathrm{d}t = \frac{\mathrm{d}^2 f(1)}{\mathrm{d}s^2}.
$$

#### Step 2: Calculating the First Integral

The value of the second derivative of the logarithm of $f(s)$ at $s = 1$ is given as:

$$
\frac{\mathrm{d}^2 \log f(s)}{\mathrm{d}s^2}\bigg|_{s=1} = \frac{\pi^2}{6}.
$$

We know that:

$$
\frac{\mathrm{d}^2 \log f(s)}{\mathrm{d}s^2} = \frac{f''(s) f(s) - \left(f'(s)\right)^2}{\left(f(s)\right)^2}.
$$

At $s = 1$, $f(1) = 1$, $f'(1)$ is the first moment (which is $\int_0^\infty \log t \exp(-t) \,\mathrm{d}t$), and $f''(1)$ is the second moment (which is $\int_0^\infty \log^2 t \exp(-t) \,\mathrm{d}t$).

We can express:

$$
\frac{\mathrm{d}^2 \log f(1)}{\mathrm{d}s^2} = f''(1) - \left(f'(1)\right)^2.
$$

Given:

$$
\frac{\mathrm{d}^2 \log f(s)}{\mathrm{d}s^2}\bigg|_{s=1} = \frac{\pi^2}{6},
$$

Thus:

$$
D = \frac{\pi^2}{6}.
$$

### (5)

We are asked to find the value of $S$, defined as:

$$
S = \int_0^\infty (\log r)^2 p(r) \,\mathrm{d}r - \left(\int_0^\infty (\log r) p(r) \,\mathrm{d}r\right)^2,
$$

where the function $p(r)$ is given by:

$$
p(r) = \frac{r}{\alpha} \exp\left(-\frac{r^2}{2\alpha}\right).
$$

#### Step 1: Identify the form of $p(r)$

The function $p(r)$ is a probability density function corresponding to a Rayleigh distribution, with the parameter $\alpha$. The Rayleigh distribution has the form:

$$
p(r) = \frac{r}{\alpha} \exp\left(-\frac{r^2}{2\alpha}\right),
$$

which is commonly used to describe the distribution of the magnitude of a two-dimensional vector with independent and identically distributed normal components.

#### Step 2: Calculation of the first moment $\mathbb{E}[\log r]$

We need to compute the expected value of $\log r$ under this distribution, given by:

$$
\mathbb{E}[\log r] = \int_0^\infty (\log r) p(r) \,\mathrm{d}r = \int_0^\infty \log r \cdot \frac{r}{\alpha} \exp\left(-\frac{r^2}{2\alpha}\right) \,\mathrm{d}r.
$$

We perform a substitution to simplify this integral:

Let $u = \frac{r^2}{2\alpha}$, hence $\mathrm{d}u = \frac{r \,\mathrm{d}r}{\alpha}$.

The integral becomes:

$$
\mathbb{E}[\log r] = \int_0^\infty \log \left(\sqrt{2\alpha u}\right) \exp(-u) \,\mathrm{d}u.
$$

This simplifies to:

$$
\mathbb{E}[\log r] = \frac{1}{2}\log(2\alpha) \int_0^\infty \exp(-u) \,\mathrm{d}u + \frac{1}{2} \int_0^\infty \log u \exp(-u) \,\mathrm{d}u.
$$

The first integral evaluates to 1 because it is the integral of the exponential distribution. The second integral is a well-known result:

$$
\int_0^\infty \log u \exp(-u) \,\mathrm{d}u = -\gamma,
$$

where $\gamma$ is the Euler-Mascheroni constant. Thus,

$$
\mathbb{E}[\log r] = \frac{1}{2}\log(2\alpha) - \frac{\gamma}{2}.
$$

#### Step 3: Calculation of the second moment $\mathbb{E}[(\log r)^2]$

Next, we need to compute the second moment:

$$
\mathbb{E}[(\log r)^2] = \int_0^\infty (\log r)^2 p(r) \,\mathrm{d}r = \int_0^\infty (\log r)^2 \frac{r}{\alpha} \exp\left(-\frac{r^2}{2\alpha}\right) \,\mathrm{d}r.
$$

Using the same substitution $u = \frac{r^2}{2\alpha}$:

$$
\mathbb{E}[(\log r)^2] = \int_0^\infty \left[\log\left(\sqrt{2\alpha u}\right)\right]^2 \exp(-u) \,\mathrm{d}u.
$$

This expands to:

$$
\mathbb{E}[(\log r)^2] = \frac{1}{4} \left[\log(2\alpha)\right]^2 + \frac{1}{2} \log(2\alpha) \int_0^\infty \log u \exp(-u) \,\mathrm{d}u + \frac{1}{4} \int_0^\infty (\log u)^2 \exp(-u) \,\mathrm{d}u.
$$

Using the known results:

$$
\int_0^\infty \log u \exp(-u) \,\mathrm{d}u = -\gamma,
$$

and

$$
\int_0^\infty (\log u)^2 \exp(-u) \,\mathrm{d}u = \gamma^2 + \frac{\pi^2}{6},
$$

we have:

$$
\mathbb{E}[(\log r)^2] = \frac{1}{4} \left[\log(2\alpha)\right]^2 - \frac{\gamma}{2} \log(2\alpha) + \frac{1}{4} \left(\gamma^2 + \frac{\pi^2}{6}\right).
$$

#### Step 4: Calculate $S$

Finally, $S$ is the variance, which is given by:

$$
S = \mathbb{E}[(\log r)^2] - \left(\mathbb{E}[\log r]\right)^2.
$$

Substitute the values:

$$
\mathbb{E}[\log r] = \frac{1}{2}\log(2\alpha) - \frac{\gamma}{2},
$$

so:

$$
\left(\mathbb{E}[\log r]\right)^2 = \frac{1}{4} \left[\log(2\alpha)\right]^2 - \gamma \log(2\alpha) + \frac{\gamma^2}{4}.
$$

Subtracting:

$$
S = \frac{1}{4} \left[\log(2\alpha)\right]^2 - \gamma \log(2\alpha) + \frac{1}{4} \left(\gamma^2 + \frac{\pi^2}{6}\right) - \left(\frac{1}{4} \left[\log(2\alpha)\right]^2 - \gamma \log(2\alpha) + \frac{\gamma^2}{4}\right).
$$

Simplifying:

$$
S = \frac{\pi^2}{24}.
$$

This is the final value of $S$.

## **Knowledge**

Gamma函数 不定积分 定积分 方差

### 解题技巧和信息

1. **Gamma Function**: Recognize that $f(s)$ represents the Gamma function $\Gamma(s)$.
2. **Inequality Manipulation**: Use known inequalities such as $\exp(t) > \frac{t^n}{n!}$ to estimate integrals.
3. **Variance Calculation**: The variance of logarithms of exponential and Rayleigh distributed variables often results in expressions involving $\frac{\pi^2}{6}$.

### 重点词汇

- Gamma function 伽马函数
- Inequality 不等式
- Variance 方差
- Logarithm 对数
- Rayleigh distribution 瑞利分布
- Logarithm 对数
- Euler-Mascheroni constant 欧拉-马歇罗尼常数
- Variance 方差
