---
sidebar_label: "2024年1月実施 解析学・微積分"
tags:
  - Kyushu-University
  - Calculus
  - Differential-Equation
  - Complex-Analysis
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年1月実施 解析学・微積分

## **Author**
祭音Myyura (assisted by ChatGPT 5.5)

## **Description**
(1) Find the maximum and the minimum of the function $f(x,y)=x^2+2xy+2y^2$ over the curve $x^2 + xy + y^2 = 1$, and find the points which achieve them.

(2) Find the solution to the following differential equation defined for $x \ge 0$, where $y(0)=0$,

$$
\frac{dy}{dx} + y = \sin x
$$

(3) Find the radius of convergence of the series

$$
\sum_{n=1}^{\infty} \frac{(z+1)^{n-1}}{(n+1)^3 2^n}
$$

where $z$ is a complex number.

## **Kai**
### (1)

We want to optimize

$$
f(x,y)=x^2+2xy+2y^2
$$

subject to

$$
x^2+xy+y^2=1.
$$

Use Lagrange multipliers:

$$
\nabla f=\lambda \nabla g,
$$

where

$$
g(x,y)=x^2+xy+y^2.
$$

Then

$$
\frac{\partial f}{\partial x}=2x+2y,
\qquad
\frac{\partial f}{\partial y}=2x+4y,
$$

and

$$
\frac{\partial g}{\partial x}=2x+y,
\qquad
\frac{\partial g}{\partial y}=x+2y.
$$

So

$$
2x+2y=\lambda(2x+y),
$$

$$
2x+4y=\lambda(x+2y).
$$

Solving this generalized eigenvalue problem gives

$$
\lambda=2
\qquad \text{or} \qquad
\lambda=\frac{2}{3}.
$$

Because the constraint satisfies $g(x,y)=1$, the value of $f$ equals $\lambda$.

#### Case 1: $\lambda=2$

This gives

$$
x=0.
$$

Using the constraint,

$$
y^2=1,
$$

so

$$
y=\pm 1.
$$

Thus the maximum value is

$$
\boxed{2}
$$

at the points

$$
\boxed{(0,1),\ (0,-1)}.
$$

#### Case 2: $\lambda=\frac{2}{3}$

This gives

$$
x+2y=0,
$$

so

$$
x=-2y.
$$

Substitute into the constraint:

$$
x^2+xy+y^2=1.
$$

Then

$$
4y^2-2y^2+y^2=1,
$$

so

$$
3y^2=1.
$$

Hence

$$
y=\pm \frac{1}{\sqrt{3}},
$$

and

$$
x=\mp \frac{2}{\sqrt{3}}.
$$

Thus the minimum value is

$$
\boxed{\frac{2}{3}}
$$

at the points

$$
\boxed{\left(-\frac{2}{\sqrt{3}},\frac{1}{\sqrt{3}}\right),
\left(\frac{2}{\sqrt{3}},-\frac{1}{\sqrt{3}}\right)}.
$$

Therefore,

$$
\boxed{\max f=2}
$$

and

$$
\boxed{\min f=\frac{2}{3}}.
$$

### (2)

We solve

$$
\frac{dy}{dx}+y=\sin x,
$$

with initial condition

$$
y(0)=0.
$$

This is a first-order linear differential equation. The integrating factor is

$$
e^x.
$$

Multiplying both sides by $e^x$, we get

$$
e^x\frac{dy}{dx}+e^x y=e^x\sin x.
$$

The left side becomes

$$
\frac{d}{dx}(e^x y).
$$

So

$$
\frac{d}{dx}(e^x y)=e^x\sin x.
$$

Integrate both sides:

$$
e^x y=\int e^x\sin x\,dx.
$$

Using

$$
\int e^x\sin x\,dx
=
\frac{e^x(\sin x-\cos x)}{2},
$$

we have

$$
e^x y=\frac{e^x(\sin x-\cos x)}{2}+C.
$$

Divide by $e^x$:

$$
y=\frac{\sin x-\cos x}{2}+Ce^{-x}.
$$

Use the initial condition $y(0)=0$:

$$
0=\frac{\sin 0-\cos 0}{2}+C
$$

$$
0=\frac{0-1}{2}+C
$$

$$
C=\frac{1}{2}.
$$

Therefore,

$$
\boxed{
y(x)=\frac{\sin x-\cos x+e^{-x}}{2}
}
$$

for $x\ge 0$.

### (3) Radius of convergence

Consider the power series

$$
\sum_{n=1}^{\infty} \frac{(z+1)^{n-1}}{(n+1)^3 2^n}.
$$

Let

$$
w=z+1.
$$

Then the series becomes

$$
\sum_{n=1}^{\infty} \frac{w^{n-1}}{(n+1)^3 2^n}.
$$

We examine the general term

$$
a_n=\frac{w^{n-1}}{(n+1)^3 2^n}.
$$

Using the root test,

$$
\lim_{n\to\infty} |a_n|^{1/n}
=
\lim_{n\to\infty}
\left(
\frac{|w|^{n-1}}{(n+1)^3 2^n}
\right)^{1/n}.
$$

This equals

$$
\frac{|w|}{2}
=
\frac{|z+1|}{2}.
$$

For convergence, we need

$$
\frac{|z+1|}{2}<1.
$$

Thus

$$
|z+1|<2.
$$

Therefore, the radius of convergence is

$$
\boxed{2}.
$$