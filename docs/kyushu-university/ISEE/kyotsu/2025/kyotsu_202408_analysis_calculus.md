---
sidebar_label: 2024年8月実施 解析学・微積分
tags:
  - Kyushu-University
  - Mathematics.Calculus
  - Mathematics.Differential-Equations
  - Mathematics.Complex-Analysis
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年8月実施 解析学・微積分

## **Author**
祭音Myyura (assisted by ChatGPT 5.5 Thinking)

## **Description**
(1) Calculate the following integral, where $a$ and $b$ are positive constants and $\mathbb{R}$ denotes the set of all real numbers.

$$
\int_D (x^2+y^2)\,dxdy,
\qquad
D=
\left\{
(x,y)\in\mathbb{R}^2
\mid
\frac{x^2}{a^2}+\frac{y^2}{b^2}\leq 1
\right\}.
$$

(2) Find the solution to the following differential equation using Laplace transforms. Here, $y'$ denotes the first-order derivative of a function $y(x)$ with respect to $x$.

$$
y''+4y=\cosh x-\sinh x,
\qquad
y(0)=2,
\qquad
y'(0)=3.
$$

(3) Let $z=x+iy$, where $x$ and $y$ are real numbers, and $i=\sqrt{-1}$. Answer the following questions.

- (a) Find a real number $a$ for which the function $e^{2x}(\cos ay+i\sin ay)$ is holomorphic.
- (b) Consider a holomorphic function $w(z)$. Suppose the real part of the function $w(z)$ is given as $\operatorname{Re}(w(z))=\cos x\cosh y,$ where $\operatorname{Re}(w(z))$ denotes the real part of the function $w(z)$. Then, find a formula for the function $w(z)$.

## Kai
### (1)

We calculate

$$
\int_D (x^2+y^2)\,dxdy,
$$

where

$$
D=
\left\{
(x,y)\in\mathbb{R}^2
\mid
\frac{x^2}{a^2}+\frac{y^2}{b^2}\leq 1
\right\}.
$$

Use the change of variables

$$
x=ar\cos\theta,
\qquad
y=br\sin\theta,
$$

where

$$
0\leq r\leq 1,
\qquad
0\leq \theta\leq 2\pi.
$$

The Jacobian is

$$
\left|
\frac{\partial(x,y)}{\partial(r,\theta)}
\right|
=abr.
$$

Also,

$$
x^2+y^2
=
a^2r^2\cos^2\theta+b^2r^2\sin^2\theta.
$$

Therefore,

$$
\begin{aligned}
\int_D (x^2+y^2)\,dxdy
&=
\int_0^{2\pi}\int_0^1
\left(
a^2r^2\cos^2\theta+b^2r^2\sin^2\theta
\right)abr\,drd\theta \\
&=
ab
\int_0^1 r^3\,dr
\int_0^{2\pi}
\left(
a^2\cos^2\theta+b^2\sin^2\theta
\right)
d\theta.
\end{aligned}
$$

Since

$$
\int_0^1 r^3\,dr=\frac14,
$$

and

$$
\int_0^{2\pi}\cos^2\theta\,d\theta
=
\int_0^{2\pi}\sin^2\theta\,d\theta
=
\pi,
$$

we get

$$
\begin{aligned}
\int_D (x^2+y^2)\,dxdy
&=
ab\cdot \frac14 \cdot \pi(a^2+b^2).
\end{aligned}
$$

Hence,

$$
\boxed{
\int_D (x^2+y^2)\,dxdy
=
\frac{\pi ab(a^2+b^2)}{4}
}.
$$

### (2)

Let

$$
Y(s)=\mathcal{L}\{y(x)\}.
$$

Taking the Laplace transform of both sides of

$$
y''+4y=\cosh x-\sinh x,
$$

we have

$$
\mathcal{L}\{y''\}+4\mathcal{L}\{y\}
=
\mathcal{L}\{\cosh x-\sinh x\}.
$$

Using

$$
\mathcal{L}\{y''\}=s^2Y(s)-sy(0)-y'(0),
$$

and the initial conditions

$$
y(0)=2,
\qquad
y'(0)=3,
$$

we obtain

$$
s^2Y(s)-2s-3+4Y(s)
=
\mathcal{L}\{\cosh x-\sinh x\}.
$$

Since

$$
\cosh x-\sinh x=e^{-x},
$$

we have

$$
\mathcal{L}\{\cosh x-\sinh x\}
=
\mathcal{L}\{e^{-x}\}
=
\frac{1}{s+1}.
$$

Thus,

$$
(s^2+4)Y(s)-2s-3
=
\frac{1}{s+1}.
$$

Hence,

$$
Y(s)
=
\frac{2s+3}{s^2+4}
+
\frac{1}{(s+1)(s^2+4)}.
$$

Now decompose

$$
\frac{1}{(s+1)(s^2+4)}
=
\frac{A}{s+1}
+
\frac{Bs+C}{s^2+4}.
$$

Then

$$
1
=
A(s^2+4)+(Bs+C)(s+1).
$$

Comparing coefficients gives

$$
A=\frac15,
\qquad
B=-\frac15,
\qquad
C=\frac15.
$$

Therefore,

$$
\frac{1}{(s+1)(s^2+4)}
=
\frac{1}{5}\cdot\frac{1}{s+1}
-
\frac{1}{5}\cdot\frac{s}{s^2+4}
+
\frac{1}{5}\cdot\frac{1}{s^2+4}.
$$

Thus,

$$
Y(s)
=
\frac{2s}{s^2+4}
+
\frac{3}{s^2+4}
+
\frac{1}{5}\cdot\frac{1}{s+1}
-
\frac{1}{5}\cdot\frac{s}{s^2+4}
+
\frac{1}{5}\cdot\frac{1}{s^2+4}.
$$

Taking the inverse Laplace transform, we get

$$
y(x)
=
2\cos 2x
+
\frac32\sin 2x
+
\frac15 e^{-x}
-
\frac15\cos 2x
+
\frac{1}{10}\sin 2x.
$$

Therefore,

$$
y(x)
=
\frac95\cos 2x
+
\frac85\sin 2x
+
\frac15 e^{-x}.
$$

Hence,

$$
\boxed{
y(x)=\frac95\cos 2x+\frac85\sin 2x+\frac15 e^{-x}
}.
$$

### (3)

#### (a)

Let

$$
f(z)=e^{2x}(\cos ay+i\sin ay).
$$

Write

$$
f(z)=u(x,y)+iv(x,y),
$$

where

$$
u(x,y)=e^{2x}\cos ay,
\qquad
v(x,y)=e^{2x}\sin ay.
$$

For $f$ to be holomorphic, the Cauchy-Riemann equations must hold:

$$
u_x=v_y,
\qquad
u_y=-v_x.
$$

Compute each derivative:

$$
u_x=2e^{2x}\cos ay,
$$

$$
v_y=ae^{2x}\cos ay,
$$

$$
u_y=-ae^{2x}\sin ay,
$$

$$
v_x=2e^{2x}\sin ay.
$$

The first Cauchy-Riemann equation gives

$$
2e^{2x}\cos ay
=
ae^{2x}\cos ay.
$$

Thus,

$$
a=2.
$$

The second Cauchy-Riemann equation also gives the same condition:

$$
-ae^{2x}\sin ay
=
-2e^{2x}\sin ay.
$$

Hence,

$$
\boxed{a=2}.
$$

Indeed, when $a=2$,

$$
e^{2x}(\cos 2y+i\sin 2y)
=
e^{2x}e^{2iy}
=
e^{2z},
$$

which is holomorphic.

#### (b)

We are given

$$
\operatorname{Re}(w(z))=\cos x\cosh y.
$$

Recall that

$$
\cos z
=
\cos(x+iy)
=
\cos x\cosh y
-
i\sin x\sinh y.
$$

Therefore, the real part of $\cos z$ is

$$
\operatorname{Re}(\cos z)=\cos x\cosh y.
$$

Hence, one such holomorphic function is

$$
w(z)=\cos z.
$$

Since adding a purely imaginary constant does not change the real part, the general formula is

$$
\boxed{
w(z)=\cos z+iC
}
$$

where $C$ is a real constant.
