---
sidebar_label: "2015年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
関数 $f : \mathbb{R}^n \rightarrow \mathbb{R}$ は2回連続的微分可能な関数とし、$\boldsymbol{a}$ は $\boldsymbol{0}$ でない $n$ 次元ベクトルとする。

次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P}: \ &\text{Minimize} &f(\boldsymbol{x}) \\
&\text{subject to} &\boldsymbol{a}^{\top} \boldsymbol{x} = 0
\end{aligned}
$$

ただし、$\top$ はベクトルの転置を表す。$x^*$ は問題 P の大域的最適解とする。

さらに、次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P}(k): \ &\text{Minimize} &f_k(\boldsymbol{x}) \\
&\text{subject to} &(\boldsymbol{x} - \boldsymbol{x}^*)^{\top} (\boldsymbol{x} - \boldsymbol{x}^*) \leqq 1
\end{aligned}
$$

ただし、$k$ は非負の整数であり、 $f_k : \mathbb{R}^n \rightarrow \mathbb{R}$ は以下に定義された関数である。

$$
f_k(\boldsymbol{x}) = f(\boldsymbol{x}) + \frac{k}{2} (\boldsymbol{a}^{\top} \boldsymbol{x})^2 + \frac{1}{2}(\boldsymbol{x} - \boldsymbol{x}^*)^{\top} (\boldsymbol{x} - \boldsymbol{x}^*)
$$

問題 $\text{P}(k)$ の大域的最適解を $\boldsymbol{x}^k$ とする。さらに、$\lim_{k \to \infty} \boldsymbol{x}^k = \bar{\boldsymbol{x}}$, $\lim_{k \to \infty} k(\boldsymbol{a}^{\top} \boldsymbol{x}^k) = \bar{\lambda}$ と仮定する。

以下の問いに答えよ。

(i) 任意の非負の整数 $k$ に対して $f_k(\boldsymbol{x}^k) \leqq f(\boldsymbol{x}^*)$ が成り立つことを示せ。

(ii) $\boldsymbol{a}^{\top} \bar{\boldsymbol{x}} = 0$, $\bar{\boldsymbol{x}} = \boldsymbol{x}^*$ となることを示せ。

(iii) 問題 $\text{P}(k)$ のカルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を書け。

(iv) 十分大きな $k$ に対して、$\nabla f_k(\boldsymbol{x}^k) = \boldsymbol{0}$ となることを示せ。

(v) $\nabla f(\boldsymbol{x}^*) + \bar{\lambda} \boldsymbol{a} = \boldsymbol{0}$ となることを示せ。

### English Version

## **Kai**
### (i)

$$
f_k(x^k) \leq f_k(x^*) = f(x^*) + \frac k2 (a^\top x^*)^2 = f(x^*)
$$

### (ii)
By (i) we have

$$
\begin{aligned}
    \lim_{k \to \infty} f_k(x^k) &= \lim_{k\rightarrow\infty} (f(x^k) + \frac k2 (a^\top x^k)^2 + \frac12 (x^k - x^*)^\top (x^k - x^*)) \\
    &= f(\bar{x}) + \lim_{k\rightarrow \infty} \frac{k^2}{2}(a^\top \bar{x})^2 + \frac 12 (\bar{x} - x^*)^\top (\bar{x} - x^*) \\
    & \leq f(x^*)
\end{aligned}
$$

which implies that

$$
a^\top \bar{x} = 0
$$

and then we have

$$
f(\bar{x}) + \frac 12 (\bar{x} - x^*)^\top(\bar{x} - x^*) \leq f(x^*)
$$

since $x^*$ is optimal, we have

$$
f(\bar{x}) \geq f(x^*)
$$

thus

$$
f(x^*) = f(\bar{x}), \text{and } \bar{x}=x^*
$$ 

### (iii)
Lagrangian

$$
L(x, \lambda) = f(x) + \frac k2 (a^\top x)^2 + (\frac 12 + \lambda)(x-x^*)^\top (x-x^*) - \lambda
$$

$$
\text{KKT-conditions:} \left\{
\begin{aligned}
\nabla f(x) + k aa^\top x + (1+2\lambda)(x-x^*)^\top (x-x^*) & = \boldsymbol{0} \\
\lambda \succeq  \boldsymbol{0}, \lambda ((x-x^*)^\top (x-x^*) - 1) &= 0 \\
(x-x^*)^\top (x-x^*)-1 &\leq 0
\end{aligned}
\right.
$$

### (iv)
$$
\nabla f(x^k) + k a^\top a x^k + (x-x^k)(1+2\lambda) = 0
$$

and

$$
\lambda \geq 0, \lambda ((x^k - x^*)^\top(x^k - x^*)-1) = 0
$$

when $k$ is sufficiently large, we have

$$
(x^k - x^*)^\top (x^k - x^*)<1
$$

then

$$
\lambda = 0
$$

thus 

$$
\nabla f_k(x^k) + ka^\top a x^* + x^k - x^* = 0
$$

therefore

$$
\nabla f_k(x^k) = \nabla f(x^k) + ka^\top a x^* + x^k - x^* = 0
$$

### (v)

$$
\lim_{k \to \infty}x^k = x^*
$$

from KKT-conditions:

$$
\nabla f(x^k) + aka^\top x^k + (1+2\lambda)(x^k - x^*) = 0
$$

let $k \to \infty$, we get

$$
\nabla f(x^*) + a \bar{\lambda} = 0
$$
