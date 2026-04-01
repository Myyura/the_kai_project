---
sidebar_label: '2024-02 F1-1'
tags:
  - Kyoto-University
  - Informatics
  - Intelligence-Science-and-Technology-Course
  - Fundamentals-of-Informatics
  - Linear-Algebra-Calculus
---

# Kyoto University Graduate School of Informatics  
## Intelligence Science and Technology Course  
### 2024-02 Fundamentals of Informatics F1-1

## Problem transcription

### Q1
Consider simultaneous linear equations given by

```text
λx1 + 3x3 = 0
x1 + (1 - λ)x2 + 2x3 = 0
2x1 + (5 - λ)x3 = 0
```

Find all values of `λ` such that there is a solution except for `x1 = x2 = x3 = 0`.

### Q2
Consider a quadratic equation given by

```text
5x^2 - 4xy + 8y^2 = 1.
```

Draw the ellipse represented by this equation in the `xy`-plane. The semi-major and semi-minor axes of the ellipse must be specified.

### Q3
Consider an inner product space `R^3`, where we have two vectors given by

```text
x1 = (3, 0, 4)^T
x2 = (4, 5, -3)^T
```

Let `W` be a subspace of `R^3` spanned by `x1` and `x2`.

1. Compute an orthonormal basis `{v1, v2}` of `W`.
2. Compute `v3 ∈ R^3` such that `{v1, v2, v3}` forms an orthonormal basis of `R^3`.

## Solutions

### Q1
This is a homogeneous linear system. A non-zero solution exists if and only if the coefficient matrix is singular.

The coefficient matrix is

```text
A(λ) = [[λ, 0, 3],
        [1, 1-λ, 2],
        [2, 0, 5-λ]].
```

Its determinant is

```text
det A(λ)
= λ((1-λ)(5-λ)) + 3(2(1-λ))
= (λ - 1)(λ - 2)(λ - 3).
```

Therefore, a non-trivial solution exists exactly when

```text
λ = 1, 2, 3.
```

### Q2
Write the quadratic form as

```text
[x y] [[5, -2], [-2, 8]] [x y]^T = 1.
```

The symmetric matrix

```text
M = [[5, -2], [-2, 8]]
```

has eigenvalues `4` and `9`.

- Eigenvalue `4` has eigenvector `(2, 1)^T`.
- Eigenvalue `9` has eigenvector `(-1, 2)^T`.

So if we rotate coordinates to the orthonormal axes

```text
u = (2x + y) / sqrt(5),
v = (-x + 2y) / sqrt(5),
```

then the equation becomes

```text
4u^2 + 9v^2 = 1.
```

Hence:

- the center is the origin;
- the semi-major axis length is `1/2`, along the direction `(2, 1)`;
- the semi-minor axis length is `1/3`, along the direction `(-1, 2)`.

### Q3

#### (1) Orthonormal basis of `W`
First,

```text
||x1|| = sqrt(3^2 + 0^2 + 4^2) = 5,
```

so we may take

```text
v1 = x1 / ||x1|| = (3/5, 0, 4/5)^T.
```

Next, check orthogonality:

```text
x1 · x2 = 3·4 + 0·5 + 4·(-3) = 12 - 12 = 0.
```

Thus `x2` is already orthogonal to `x1`. Also,

```text
||x2|| = sqrt(4^2 + 5^2 + (-3)^2) = sqrt(50) = 5sqrt(2).
```

Therefore

```text
v2 = x2 / ||x2|| = (4, 5, -3)^T / (5sqrt(2)).
```

So an orthonormal basis of `W` is

```text
{
  (3/5, 0, 4/5)^T,
  (4, 5, -3)^T / (5sqrt(2))
}.
```

#### (2) A vector `v3` completing an orthonormal basis of `R^3`
Take a unit vector orthogonal to both `v1` and `v2`. Using the cross product:

```text
x1 × x2 = (-20, 25, 15)^T = 5(-4, 5, 3)^T.
```

The norm of `(-4, 5, 3)^T` is `sqrt(16 + 25 + 9) = 5sqrt(2)`, so we can choose

```text
v3 = (-4, 5, 3)^T / (5sqrt(2)).
```

Then `{v1, v2, v3}` is an orthonormal basis of `R^3`.

(Any choice differing by sign is also correct.)
