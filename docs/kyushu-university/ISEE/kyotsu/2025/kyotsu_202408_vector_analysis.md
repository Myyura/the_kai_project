---
sidebar_label: "2024年8月実施 ベクトル解析"
tags:
  - Kyushu-University
  - Vector-Calculus
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年8月実施 ベクトル解析

## **Author**
祭音Myyura (assisted by ChatGPT 5.5 Thinking)

## **Description**
The unit vectors on $x$, $y$ and $z$ axes of Cartesian coordinates are denoted by $\mathbf{i}$, $\mathbf{j}$ and $\mathbf{k}$, respectively. Let the vector field

$$
\mathbf{F}=2x\mathbf{i}+3y\mathbf{j}+6z\mathbf{k}.
$$

Calculate the surface integral

$$
\int_S \sqrt{4x^2+9y^2+36z^2}\,dS
$$

over the closed surface

$$
S:\ 8x^2+12y^2+24z^2=4
$$

by answering the following questions.

(1) Find the outward-pointing normal vector $\mathbf{n}$ at each point $(x,y,z)$ on the closed surface $S$.

(2) Show

$$
\mathbf{F}\cdot \mathbf{n}
=
\sqrt{4x^2+9y^2+36z^2}
$$

on the closed surface $S$.

(3) Find

$$
\int_S \sqrt{4x^2+9y^2+36z^2}\,dS.
$$

## Kai

### (1)

The closed surface $S$ is given by

$$
8x^2+12y^2+24z^2=4.
$$

Define

$$
\phi(x,y,z)=8x^2+12y^2+24z^2.
$$

Then the outward normal direction is given by the gradient

$$
\nabla \phi
=
(16x,24y,48z).
$$

Since

$$
(16x,24y,48z)
=
8(2x,3y,6z),
$$

the outward-pointing unit normal vector is

$$
\mathbf{n}
=
\frac{(2x,3y,6z)}
{\sqrt{(2x)^2+(3y)^2+(6z)^2}}.
$$

Therefore,

$$
\boxed{
\mathbf{n}
=
\frac{(2x,3y,6z)}
{\sqrt{4x^2+9y^2+36z^2}}
}
$$

on $S$.

### (2)

We have

$$
\mathbf{F}=(2x,3y,6z).
$$

From part (1),

$$
\mathbf{n}
=
\frac{(2x,3y,6z)}
{\sqrt{4x^2+9y^2+36z^2}}.
$$

Hence,

$$
\begin{aligned}
\mathbf{F}\cdot\mathbf{n}
&=
(2x,3y,6z)\cdot
\frac{(2x,3y,6z)}
{\sqrt{4x^2+9y^2+36z^2}} \\
&=
\frac{4x^2+9y^2+36z^2}
{\sqrt{4x^2+9y^2+36z^2}} \\
&=
\sqrt{4x^2+9y^2+36z^2}.
\end{aligned}
$$

Therefore,

$$
\boxed{
\mathbf{F}\cdot\mathbf{n}
=
\sqrt{4x^2+9y^2+36z^2}
}.
$$

### (3)

By part (2),

$$
\int_S \sqrt{4x^2+9y^2+36z^2}\,dS
=
\int_S \mathbf{F}\cdot\mathbf{n}\,dS.
$$

By the divergence theorem,

$$
\int_S \mathbf{F}\cdot\mathbf{n}\,dS
=
\iiint_V \operatorname{div}\mathbf{F}\,dV,
$$

where $V$ is the solid ellipsoid enclosed by $S$.

Since

$$
\mathbf{F}=(2x,3y,6z),
$$

we have

$$
\operatorname{div}\mathbf{F}
=
\frac{\partial}{\partial x}(2x)
+
\frac{\partial}{\partial y}(3y)
+
\frac{\partial}{\partial z}(6z)
=
2+3+6=11.
$$

Therefore,

$$
\int_S \mathbf{F}\cdot\mathbf{n}\,dS
=
11\operatorname{Vol}(V).
$$

Now rewrite the ellipsoid:

$$
8x^2+12y^2+24z^2=4.
$$

Dividing by $4$, we get

$$
2x^2+3y^2+6z^2=1.
$$

Thus,

$$
\frac{x^2}{1/2}
+
\frac{y^2}{1/3}
+
\frac{z^2}{1/6}
=
1.
$$

So the semi-axes are

$$
a=\frac{1}{\sqrt{2}},
\qquad
b=\frac{1}{\sqrt{3}},
\qquad
c=\frac{1}{\sqrt{6}}.
$$

Hence,

$$
\operatorname{Vol}(V)
=
\frac{4}{3}\pi abc
=
\frac{4}{3}\pi
\cdot
\frac{1}{\sqrt{2}}
\cdot
\frac{1}{\sqrt{3}}
\cdot
\frac{1}{\sqrt{6}}.
$$

Since

$$
\sqrt{2}\sqrt{3}\sqrt{6}
=
\sqrt{36}
=
6,
$$

we get

$$
\operatorname{Vol}(V)
=
\frac{4}{3}\pi\cdot \frac{1}{6}
=
\frac{2\pi}{9}.
$$

Therefore,

$$
\int_S \sqrt{4x^2+9y^2+36z^2}\,dS
=
11\cdot \frac{2\pi}{9}.
$$

Hence,

$$
\boxed{
\int_S \sqrt{4x^2+9y^2+36z^2}\,dS
=
\frac{22\pi}{9}
}.
$$
