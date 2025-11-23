---
sidebar_label: "2022年8月実施 専門科目II 問題6"
tags:
  - Hiroshima-University
  - Sigmoid-Function
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年8月実施 専門科目II 問題6


## **Author**
祭音Myyura

## **Description**
Let the sigmoid function be

$$
\sigma(x) = \frac{1}{1 + \exp(-x)}.
$$

(1) Show that the following equation holds:

$$
   1 - \sigma(x) = \sigma(-x).
$$

(2) Show that the derivative of the sigmoid function can be written as

$$
   \frac{d}{dx}\sigma(x) = \sigma(x)(1-\sigma(x)).
$$

(3) The inverse function of the sigmoid function $\sigma$ is called the **logit** function.
Show that the logit function $\sigma^{-1}$ can be written as

$$
   \sigma^{-1}(p) = \log\!\left(\frac{p}{1-p}\right),
$$

where $0 \le p \le 1$.

## **Kai**
Throughout, $\log$ denotes the natural logarithm.

### (1)
Start from the definition:

$$
\sigma(x) = \frac{1}{1+e^{-x}}.
$$

Then

$$
1 - \sigma(x)
= 1 - \frac{1}{1+e^{-x}}
= \frac{1+e^{-x} - 1}{1+e^{-x}}
= \frac{e^{-x}}{1+e^{-x}}.
$$

Multiply numerator and denominator by $e^{x}$:

$$
1 - \sigma(x)
= \frac{e^{-x}e^{x}}{(1+e^{-x})e^{x}}
= \frac{1}{1+e^{x}}
= \sigma(-x).
$$

### (2)
Differentiate the definition:

$$
\sigma(x) = \frac{1}{1+e^{-x}}.
$$

Using the chain rule:

$$
\begin{aligned}
\frac{d}{dx}\sigma(x)
&= \frac{d}{dx}\left(1+e^{-x}\right)^{-1} \\
&= -1\cdot\left(1+e^{-x}\right)^{-2}\cdot\frac{d}{dx}(1+e^{-x}) \\
&= -\left(1+e^{-x}\right)^{-2}\cdot(-e^{-x}) \\
&= \frac{e^{-x}}{\left(1+e^{-x}\right)^2}.
\end{aligned}
$$

Now compute $\sigma(x)(1-\sigma(x))$, from (1), we have

$$
1-\sigma(x) = \frac{e^{-x}}{1+e^{-x}}.
$$

hence

$$
\sigma(x)(1-\sigma(x))
= \frac{1}{1+e^{-x}}\cdot\frac{e^{-x}}{1+e^{-x}}
= \frac{e^{-x}}{\left(1+e^{-x}\right)^2}.
$$

### (3)
Let $p = \sigma(x)$. Then

$$
p = \frac{1}{1+e^{-x}}.
$$

We want to solve for $x$ in terms of $p$.

First invert the fraction:

$$
\frac{1}{p} = 1 + e^{-x}.
$$

So

$$
e^{-x} = \frac{1}{p} - 1 = \frac{1-p}{p}.
$$

Take the natural logarithm of both sides:

$$
-x = \log\left(\frac{1-p}{p}\right),
$$

so

$$
x = -\log\left(\frac{1-p}{p}\right)
= \log\left(\frac{p}{1-p}\right).
$$

Therefore the inverse function of $\sigma$ is

$$
\sigma^{-1}(p) = \log\left(\frac{p}{1-p}\right),
$$

which is defined for $0 < p < 1$ (and extends to $\pm\infty$ at the endpoints $p=0,1$).
