---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2020年8月実施 力学系数学
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

since $\Phi (t)$ is a solution, $$\frac{d \Phi(t)}{dt} = f(\Phi(t))$$,
From $\lim_{t\rightarrow \infty}\Phi(t) = a^+ $ and continuity , 
$$\lim_{t \rightarrow \infty} \frac{d\Phi(t)}{dt} = f(a^+) $$ 
then :
$$f(a^+) = 0$$
else without losing generality, we make an assumption that
$$f(a^+) > 0 \Rightarrow \lim_{t \rightarrow \infty} \frac{d\Phi(t)}{dt} > 0 $$
then from integeral
$$\lim_{t\rightarrow \infty} \Phi(t) = +\infty $$
which is conflict with $$\lim_{t\rightarrow \infty} \Phi(t) = a^+ $$
thus $\Phi(t) = a^+$ is a constant solution and similarly, $\Phi(t) = a^{-}$ is a constant solution,too.

And we notice that
$$\frac{df(\Phi(t))}{dt} = Df(\Phi(t))\frac{d\Phi(t)}{dt}, f(\Phi(t)) = \frac{d\Phi(t)}{dt} $$
obtain:
$$\frac{d\frac{d\Phi(t)}{dt}}{dt} = Df(\Phi(t))\frac{d\Phi(t)}{dt}, \psi(t) = \frac{d\Phi(t)}{dt} = f(\Phi(t))$$
and we konw
$$\lim_{t\rightarrow \infty} \psi(t) = f(a^+) = 0$$
since $f \in C^1$, $\Phi(t)$ is bounded, then $\psi(t)$ is bounded


### (ii)

$f(\Phi(t))$ is a solution, then
$$\frac{v(\Phi(t))}{dt} = Dv(\Phi(t))\frac{d\Phi(t)}{dt} = Dv(x)f(x) = Df(x)v(x) = Df(\Phi(t))v(\Phi(t))$$
then we see that $v(\Phi(t))$ is a solution to (2)
and we know
$$v(\Phi(t)) = v(\Phi(0)) + \int Df(\Phi(t))v(\Phi(t)) dt $$
$$f(\Phi(t)) = f(\Phi(0)) + \int Df(\Phi(t))v(\Phi(t)) dt $$
thus, $v(\Phi(0))$, $f(\Phi(0))$ are independent $\Rightarrow$ $v(\Phi(t))$, $f(\Phi(t))$ are independent.

### (iii)
Similar to $\boldsymbol{(\text{ii})}$, omitted