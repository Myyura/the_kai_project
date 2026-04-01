---
sidebar_label: '2024-02 F1-2'
tags:
  - Kyoto-University
  - Informatics
  - Intelligence-Science-and-Technology-Course
  - Fundamentals-of-Informatics
  - Linear-Algebra-Calculus
  - Analysis
---

# Kyoto University Graduate School of Informatics  
## Intelligence Science and Technology Course  
### 2024-02 Fundamentals of Informatics F1-2

## Problem transcription

### Q1
Consider the following functions `f1(x)` and `f2(x)`:

```text
f1(x) = x sin(1/x)   (x ≠ 0)
        0            (x = 0)

f2(x) = x^2 sin(1/x) (x ≠ 0)
        0            (x = 0)
```

1. Evaluate whether `f1(x)` and `f2(x)` are differentiable, respectively.
2. Evaluate whether their derivatives `f1'(x)` and `f2'(x)` are continuous at `x = 0`, respectively.

### Q2
Evaluate the directional differentiability and continuity of the following function:

```text
f(x, y) = xy^2 / (x^2 + y^4)   (either x ≠ 0 or y ≠ 0)
          0                    (both x = 0 and y = 0)
```

### Q3
Compute the volume in the `xyz`-space for each of the following conditions.

1. Under the surface `z = e^x cos(y)` and over the rectangle defined by `D = [0,1] × [0, π/2]` on the `xy`-plane.
2. Under the surface of the paraboloid `z = 1 - x^2 - y^2` and over the `xy`-plane.

## Solutions

### Q1

#### (1) Differentiability

For `f1` at `x = 0`:

```text
(f1(h) - f1(0)) / h = (h sin(1/h)) / h = sin(1/h).
```

As `h -> 0`, `sin(1/h)` has no limit. Therefore `f1` is **not differentiable at `0`**.

For `f2` at `x = 0`:

```text
(f2(h) - f2(0)) / h = (h^2 sin(1/h)) / h = h sin(1/h).
```

Since `|h sin(1/h)| <= |h| -> 0`, the limit exists and equals `0`. Therefore `f2` **is differentiable at `0`**, with

```text
f2'(0) = 0.
```

Conclusion:

- `f1` is not differentiable at `x = 0`;
- `f2` is differentiable at `x = 0`.

#### (2) Continuity of the derivatives at `x = 0`

For `x ≠ 0`:

```text
f1'(x) = sin(1/x) - cos(1/x) / x,
f2'(x) = 2x sin(1/x) - cos(1/x).
```

- Since `f1` is not differentiable at `0`, `f1'(0)` does not exist, so `f1'` is not continuous at `0`.
- For `f2`, we have `f2'(0) = 0`, but as `x -> 0`, the term `-cos(1/x)` oscillates and has no limit. Hence `f2'` is **not continuous at `0`**.

Final answer:

- `f1` is not differentiable at `0`, and `f1'` is not continuous at `0`;
- `f2` is differentiable at `0`, but `f2'` is not continuous at `0`.

### Q2
The only interesting point is `(0,0)`.

#### Directional differentiability at `(0,0)`
Let the direction be `a = (u, v)`. Then

```text
f(tu, tv) = (tu)(tv)^2 / ((tu)^2 + (tv)^4)
          = t u v^2 / (u^2 + t^2 v^4).
```

Therefore the directional derivative is

```text
D_a f(0,0)
= lim_{t->0} (f(tu, tv) - 0) / t
= lim_{t->0} u v^2 / (u^2 + t^2 v^4).
```

So:

- if `u ≠ 0`, then `D_a f(0,0) = v^2 / u`;
- if `u = 0`, then `f(0, tv) = 0`, so `D_a f(0,0) = 0`.

Hence `f` is **directionally differentiable in every direction** at `(0,0)`.

#### Continuity at `(0,0)`
Take the curve `x = y^2`. Then

```text
f(y^2, y) = y^2 * y^2 / (y^4 + y^4) = 1/2
```

for `y ≠ 0`. Hence

```text
lim_{y->0} f(y^2, y) = 1/2 ≠ 0 = f(0,0).
```

Therefore `f` is **not continuous at `(0,0)`**.

So the conclusion is:

- `f` is directionally differentiable at `(0,0)` in every direction;
- `f` is not continuous at `(0,0)`, and therefore not differentiable there in the usual multivariable sense.

### Q3

#### (1) Volume under `z = e^x cos(y)` over `D = [0,1] × [0, π/2]`
The volume is

```text
V = ∫∫_D e^x cos(y) dA
  = ∫_0^1 ∫_0^{π/2} e^x cos(y) dy dx.
```

Evaluate the inner integral:

```text
∫_0^{π/2} cos(y) dy = 1.
```

Thus

```text
V = ∫_0^1 e^x dx = e - 1.
```

#### (2) Volume under `z = 1 - x^2 - y^2` over the `xy`-plane
Since the volume must lie above the `xy`-plane, we need

```text
1 - x^2 - y^2 >= 0  <=>  x^2 + y^2 <= 1.
```

So the domain is the unit disk. In polar coordinates,

```text
V = ∫_0^{2π} ∫_0^1 (1 - r^2) r dr dθ.
```

Compute:

```text
∫_0^1 (1 - r^2) r dr
= ∫_0^1 (r - r^3) dr
= 1/2 - 1/4
= 1/4.
```

Therefore

```text
V = 2π * 1/4 = π/2.
```

Final answers:

```text
(1) e - 1
(2) π / 2
```
