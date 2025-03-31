---
sidebar_label: "2022年8月実施 オペレーションズ・リサーチ"
sidebar_position: 5
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{Q} \in \mathbb{R}^{n \times n}$, $\boldsymbol{q} \in \mathbb{R}^n$, $\boldsymbol{u} \in \mathbb{R}^n$ とする．
$\boldsymbol{Q}, \boldsymbol{q}, \boldsymbol{u}$ は次の条件 (a)-$(c)$ を満たすとする．ただし，$\boldsymbol{I}$ は $n \times n$ の単位行列であり，$\top$ は転置を表す．

- (a) $\boldsymbol{Q} + \boldsymbol{I}$ は半正定値対称行列である
- (b) $\boldsymbol{Q}\boldsymbol{u} + \boldsymbol{u} + \boldsymbol{q} = 0$
- $(c)$ $\boldsymbol{u}^{\top} \boldsymbol{u} = 1$

関数 $f: \mathbb{R}^n \rightarrow \mathbb{R}$ と $g: \mathbb{R}^n \rightarrow \mathbb{R}$ を以下のように定義する．

$$
\begin{aligned}
&f(\boldsymbol{x}) = \frac{1}{2}\boldsymbol{x}^{\top} \boldsymbol{Q}\boldsymbol{x} + \boldsymbol{q}^{\top}\boldsymbol{x} \\
&g(\boldsymbol{x}) = f(\boldsymbol{x}) + \frac{1}{2} \boldsymbol{x}^{\top} \boldsymbol{x}
\end{aligned}
$$

次の最適化問題 (P1) と (P2) を考える．

$$
\begin{aligned}
\text{(P1)}: &\text{minimize} &f(\boldsymbol{x}) \\
&\text{subject to} &\boldsymbol{x}^{\top}\boldsymbol{x} \leqq 1
\end{aligned}
$$

$$
\begin{aligned}
\text{(P2)}: &\text{minimize} &g(\boldsymbol{x}) \\
&\text{subject to} &\boldsymbol{x}^{\top}\boldsymbol{x} \leqq 1
\end{aligned}
$$

以下の問いに答えよ．

(i) 任意の $\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^n$ に対して，次の不等式が成り立つことを示せ．

$$
g(\boldsymbol{x}) \geqq g(\boldsymbol{y}) + \nabla g(\boldsymbol{y})^{\top} (\boldsymbol{x} - \boldsymbol{y})
$$

(ii) 問題 (P2) の大域的最適解を一つ求めよ．さらに，それが実際に (P2) の大域的最適解であることを示せ．

(iii) $\boldsymbol{u}$ が問題 (P1) の大域的最適解であることを示せ．

### English Version

## **Kai**
### (i)

$$ 
\begin{aligned}
g(x) = & \frac{1}{2} x^\top Q x + \frac{1}{2} x^\top x + q^\top x \\
& \frac{1}{2} x^\top(Q+I)x + q^\top x \\
\end{aligned}
$$

easy to see that $g(x)$ is convex, and from first-order condition:

$$
g(x) \geq \nabla g(y)^{\top} (x-y)
$$

### (ii)
Lagrangian:

$$
L(x,\lambda) = \frac{1}{2} x^\top (Q+I)x + q^\top x + \lambda(x^2 - 1)
$$

and we get:

$$
\text{KKT-conditions } \left\{
\begin{aligned}
(Q+I)x^* + 2\lambda I x^* + q & = & \mathbf{0} \\
\lambda ((x^*)^2 - 1) &=&0 \\
\lambda &\geq& 0\\
\end{aligned}
\right.
$$

### (iii)
$$
f(x) = \frac{1}{2} x^\top Q x + q^\top x + \frac{1}{2} x^\top x - \frac{1}{2} x^\top x
$$

$$
f(u) = g(u) - \frac{1}{2} u^\top u = g(u) - \frac{1}{2}
$$

$$
\forall x, f(x) = g(x) - \frac{1}{2} \geq g(u) - \frac{1}{2} \geq g(u) - \frac{1}{2} = f(u)
$$

thus $u$ is a global optimal solution to (P1)
