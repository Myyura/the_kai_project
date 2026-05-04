---
sidebar_label: "2024年1月実施 ベクトル解析"
tags:
  - Kyushu-University
  - Vector-Analysis
  - Green’s-Identity
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年1月実施 ベクトル解析

## **Author**
祭音Myyura (assisted by ChatGPT 5.5)

## **Description**
(1) Prove the following relationship between the volume integral and the surface integral:

$$
\iiint_V \left\{ f\nabla^2 g+(\nabla f)\cdot(\nabla g) \right\}\,dV
=
\iint_S (f\nabla g)\cdot d\mathbf{S}.
$$

(2) Prove the following relationship between the volume integral and the surface integral:

$$
\iiint_V \left(f\nabla^2 g-g\nabla^2 f\right)\,dV
=
\iint_S \left(f\nabla g-g\nabla f\right)\cdot d\mathbf{S}.
$$

Here,

$$
d\mathbf{S}=\mathbf{n}\,dS
$$

where $\mathbf{n}$ is the outward unit normal vector to the closed surface $S$.

## **Kai**
### (1)

We use the divergence theorem:

$$
\iiint_V \nabla\cdot \mathbf{F}\,dV
=
\iint_S \mathbf{F}\cdot d\mathbf{S}.
$$

Choose the vector field

$$
\mathbf{F}=f\nabla g.
$$

Then

$$
\nabla\cdot \mathbf{F}
=
\nabla\cdot(f\nabla g).
$$

Using the product rule for divergence,

$$
\nabla\cdot(f\nabla g)
=
(\nabla f)\cdot(\nabla g)+f\nabla\cdot(\nabla g).
$$

Since

$$
\nabla\cdot(\nabla g)=\nabla^2 g,
$$

we have

$$
\nabla\cdot(f\nabla g)
=
(\nabla f)\cdot(\nabla g)+f\nabla^2 g.
$$

Therefore,

$$
\iiint_V \nabla\cdot(f\nabla g)\,dV
=
\iiint_V \left\{ f\nabla^2 g+(\nabla f)\cdot(\nabla g) \right\}\,dV.
$$

By the divergence theorem,

$$
\iiint_V \nabla\cdot(f\nabla g)\,dV
=
\iint_S (f\nabla g)\cdot d\mathbf{S}.
$$

Hence,

$$
\boxed{
\iiint_V \left\{ f\nabla^2 g+(\nabla f)\cdot(\nabla g) \right\}\,dV
=
\iint_S (f\nabla g)\cdot d\mathbf{S}
}
$$

as required.

### (2)

We again use the divergence theorem.

Choose the vector field

$$
\mathbf{F}=f\nabla g-g\nabla f.
$$

Then

$$
\nabla\cdot \mathbf{F}
=
\nabla\cdot(f\nabla g-g\nabla f).
$$

Using linearity of divergence,

$$
\nabla\cdot \mathbf{F}
=
\nabla\cdot(f\nabla g)-\nabla\cdot(g\nabla f).
$$

From the product rule,

$$
\nabla\cdot(f\nabla g)
=
(\nabla f)\cdot(\nabla g)+f\nabla^2 g,
$$

and

$$
\nabla\cdot(g\nabla f)
=
(\nabla g)\cdot(\nabla f)+g\nabla^2 f.
$$

Thus,

$$
\nabla\cdot \mathbf{F}
=
\left\{(\nabla f)\cdot(\nabla g)+f\nabla^2 g\right\}
-
\left\{(\nabla g)\cdot(\nabla f)+g\nabla^2 f\right\}.
$$

Since the dot product is commutative,

$$
(\nabla f)\cdot(\nabla g)
=
(\nabla g)\cdot(\nabla f),
$$

these two terms cancel. Therefore,

$$
\nabla\cdot \mathbf{F}
=
f\nabla^2 g-g\nabla^2 f.
$$

Now applying the divergence theorem,

$$
\iiint_V \nabla\cdot \mathbf{F}\,dV
=
\iint_S \mathbf{F}\cdot d\mathbf{S}.
$$

Substituting

$$
\mathbf{F}=f\nabla g-g\nabla f,
$$

we get

$$
\iiint_V \left(f\nabla^2 g-g\nabla^2 f\right)\,dV
=
\iint_S \left(f\nabla g-g\nabla f\right)\cdot d\mathbf{S}.
$$

Hence,

$$
\boxed{
\iiint_V \left(f\nabla^2 g-g\nabla^2 f\right)\,dV
=
\iint_S \left(f\nabla g-g\nabla f\right)\cdot d\mathbf{S}
}
$$

as required.