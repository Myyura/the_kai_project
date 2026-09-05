---
sidebar_label: "2018年8月実施 数2 [2]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Separation-of-Variables-for-Partial-Differential-Equation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2018年8月実施 数2 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/65eea0cc0623fd6a765dbc02dc3d5ff4.pdf)

実数値関数 $u(x,t)$ の偏導関数を $u_t = \frac{\partial u}{\partial t}, u_x = \frac{\partial u}{\partial x}, u_{xx} = \frac{\partial^2 u}{\partial x^2}$ と書く。変数 $x$ は $0 \leq x \leq L$ の範囲の値をとる。 $u(x,t)$ は境界条件付きの偏微分方程式

$$
u_t(x,t) = u_{xx}(x,t), \quad u_x(0,t) = u_x(L,t) = 0
$$

を満たすとする。以下の小問に答えよ。

1) 次式で定められる関数 $Q(t)$ は $\frac{dQ}{dt} = 0$ を満たすことを証明せよ。

$$
Q(t) = \int_0^L u(x,t) dx
$$

2) 次式で定められる関数 $V(t)$ は $\frac{dV}{dt} \leq 0$ を満たすことを証明せよ。

$$
V(t) = \frac{1}{2} \int_0^L \{u_x(x,t)\}^2 dx
$$

3) $m,n$ を正の整数または $0$ とすると、次式が成立することを証明せよ。

$$
\int_0^L \cos\left(\frac{m\pi x}{L}\right) \cos\left(\frac{n\pi x}{L}\right) dx = \begin{cases} L & (m=n=0 \text{ の場合}) \\ \frac{1}{2}L & (m=n \neq 0 \text{ の場合}) \\ 0 & (m \neq n \text{ の場合}) \end{cases}
$$

4) $n = 0,1,2,\cdots$ に対して $v_n(t)$ は変数 $t$ の微分可能関数とする。次式の関数 $u(x,t)$ が境界条件 $u_x(0,t)=u_x(L,t)=0$ を満たしていることを示せ。

$$
u(x,t) = \sum_{n=0}^{\infty} v_n(t) \cos\left(\frac{n\pi x}{L}\right)
$$

5) 初期条件 $u(x,0) = f(x)$ が与えられたとして $n=0,1,2,\cdots$ について $v_n(0)$ を求めよ。

6) 関数 $v_n(t)$ が満たすべき微分方程式を $u_t = u_{xx}$ から導け。また、その微分方程式の一般解を求めよ。

### 题目描述

对实值函数 $u(x,t)$，记

$$
u_t=\frac{\partial u}{\partial t},\qquad
u_x=\frac{\partial u}{\partial x},\qquad
u_{xx}=\frac{\partial^2u}{\partial x^2}.
$$

变量 $x$ 的范围为 $0\le x\le L$。设 $u(x,t)$ 满足带 Neumann 边界条件的偏微分方程

$$
u_t(x,t)=u_{xx}(x,t),\qquad
u_x(0,t)=u_x(L,t)=0.
$$

1. 对

   $$
   Q(t)=\int_0^L u(x,t)\,dx,
   $$

   证明 $\dfrac{dQ}{dt}=0$；
2. 对

   $$
   V(t)=\frac12\int_0^L\{u_x(x,t)\}^2\,dx,
   $$

   证明 $\dfrac{dV}{dt}\le0$；
3. 设 $m,n$ 为正整数或 $0$，证明

   $$
   \int_0^L
   \cos\left(\frac{m\pi x}{L}\right)
   \cos\left(\frac{n\pi x}{L}\right)\,dx
   =
   \begin{cases}
   L,&m=n=0,\\[2pt]
   \dfrac12L,&m=n\ne0,\\[2pt]
   0,&m\ne n;
   \end{cases}
   $$

4. 对 $n=0,1,2,\ldots$，设 $v_n(t)$ 是关于 $t$ 的可微函数。证明

   $$
   u(x,t)=\sum_{n=0}^{\infty}
   v_n(t)\cos\left(\frac{n\pi x}{L}\right)
   $$

   满足边界条件 $u_x(0,t)=u_x(L,t)=0$；
5. 给定初始条件 $u(x,0)=f(x)$，对每个 $n=0,1,2,\ldots$ 求 $v_n(0)$；
6. 从 $u_t=u_{xx}$ 导出 $v_n(t)$ 应满足的微分方程，并求该方程的通解。

## **Kai**

以下では必要な微分・積分の交換ができる滑らかな解を考える。

1) 関数 $Q(t)$ を $t$ で微分します。積分の下の微分（ライプニッツの法則）を用いると、

$$
\frac{dQ}{dt} = \frac{d}{dt} \int_0^L u(x,t) dx = \int_0^L \frac{\partial u}{\partial t}(x,t) dx = \int_0^L u_t(x,t) dx
$$

与えられた偏微分方程式 $u_t = u_{xx}$ を代入すると、

$$
\frac{dQ}{dt} = \int_0^L u_{xx}(x,t) dx
$$

これを $x$ について積分すると、

$$
\frac{dQ}{dt} = [u_x(x,t)]_0^L = u_x(L,t) - u_x(0,t)
$$

境界条件 $u_x(0,t) = 0$ と $u_x(L,t) = 0$ を用いると、

$$
\frac{dQ}{dt} = 0 - 0 = 0
$$

よって、 $\frac{dQ}{dt} = 0$ が証明されました。

2) 関数 $V(t)$ を $t$ で微分します。

$$
\frac{dV}{dt} = \frac{d}{dt} \left( \frac{1}{2} \int_0^L \{u_x(x,t)\}^2 dx \right) = \frac{1}{2} \int_0^L \frac{\partial}{\partial t} \{u_x(x,t)\}^2 dx
$$

連鎖律（合成関数の微分法）を用いると、 $\frac{\partial}{\partial t} \{u_x\}^2 = 2 u_x \frac{\partial}{\partial t}(u_x) = 2 u_x u_{xt}$ となるので、

$$
\frac{dV}{dt} = \frac{1}{2} \int_0^L 2 u_x u_{xt} dx = \int_0^L u_x (u_t)_x dx
$$

ここで部分積分を行います（ $\int f g' = [fg] - \int f' g$ ）。 $f = u_x$ , $g' = (u_t)_x$ とおくと、 $f' = u_{xx}$ , $g = u_t$ となるので、

$$
\int_0^L u_x (u_t)_x dx = [u_x u_t]_0^L - \int_0^L u_{xx} u_t dx
$$

境界条件 $u_x(0,t) = u_x(L,t) = 0$ より、第一項は $0$ になります。

$$
[u_x u_t]_0^L = u_x(L,t)u_t(L,t) - u_x(0,t)u_t(0,t) = 0 \cdot u_t(L,t) - 0 \cdot u_t(0,t) = 0
$$

したがって、

$$
\frac{dV}{dt} = - \int_0^L u_{xx} u_t dx
$$

偏微分方程式 $u_t = u_{xx}$ を代入すると、

$$
\frac{dV}{dt} = - \int_0^L u_{xx} u_{xx} dx = - \int_0^L \{u_{xx}(x,t)\}^2 dx
$$

被積分関数 $\{u_{xx}(x,t)\}^2$ は常に非負であるため、その積分も非負です。( $\int_0^L \{u_{xx}(x,t)\}^2 dx \geq 0$ )
ゆえに、

$$
\frac{dV}{dt} \leq 0
$$

が証明されました。

3) 三角関数の積和公式 $\cos A \cos B = \frac{1}{2}(\cos(A-B) + \cos(A+B))$ を用いて積分を計算します。

$$
\int_0^L \cos\left(\frac{m\pi x}{L}\right) \cos\left(\frac{n\pi x}{L}\right) dx = \frac{1}{2} \int_0^L \left\{ \cos\left(\frac{(m-n)\pi x}{L}\right) + \cos\left(\frac{(m+n)\pi x}{L}\right) \right\} dx
$$

(i) $m \neq n$ の場合:
$m-n$ と $m+n$ はゼロでない整数です。ゼロでない整数 $k$ に対して、

$$
\int_0^L \cos\left(\frac{k\pi x}{L}\right) dx = \left[ \frac{L}{k\pi} \sin\left(\frac{k\pi x}{L}\right) \right]_0^L = \frac{L}{k\pi}(\sin(k\pi) - \sin(0)) = 0
$$

よって、積分は $0$ となります。
(ii) $m = n \neq 0$ の場合:
$m-n=0$ なので、

$$
\frac{1}{2} \int_0^L \left\{ \cos(0) + \cos\left(\frac{2n\pi x}{L}\right) \right\} dx = \frac{1}{2} \int_0^L \left( 1 + \cos\left(\frac{2n\pi x}{L}\right) \right) dx
$$

$$
= \frac{1}{2} \left[ x + \frac{L}{2n\pi} \sin\left(\frac{2n\pi x}{L}\right) \right]_0^L = \frac{1}{2} \left\{ (L + 0) - (0 + 0) \right\} = \frac{L}{2}
$$

(iii) $m = n = 0$ の場合:

$$
\int_0^L \cos(0) \cos(0) dx = \int_0^L 1 dx = [x]_0^L = L
$$

以上より、与式が成立することが証明されました。

4) 項別微分と境界での極限交換ができることを仮定する。例えば、固定した $t$ ごとに $\sum_{n\ge1}n|v_n(t)|<\infty$ なら、導関数の級数が $[0,L]$ 上一様収束し、以下の計算が正当化される。元の級数の一様収束だけでは項別微分は保証されない。

この条件の下で $u(x,t)$ を $x$ で微分すると、

$$
u_x(x,t) = \frac{\partial}{\partial x} \sum_{n=0}^{\infty} v_n(t) \cos\left(\frac{n\pi x}{L}\right) = \sum_{n=0}^{\infty} v_n(t) \left( -\frac{n\pi}{L} \sin\left(\frac{n\pi x}{L}\right) \right)
$$

$n=0$ の項は $0$ なので、

$$
u_x(x,t) = - \frac{\pi}{L} \sum_{n=1}^{\infty} n v_n(t) \sin\left(\frac{n\pi x}{L}\right)
$$

境界 $x=0$ と $x=L$ での値を計算します。

$$
u_x(0,t) = - \frac{\pi}{L} \sum_{n=1}^{\infty} n v_n(t) \sin(0) = 0
$$

$$
u_x(L,t) = - \frac{\pi}{L} \sum_{n=1}^{\infty} n v_n(t) \sin(n\pi) = 0 \quad (\text{整数 } n \text{ に対して } \sin(n\pi) = 0)
$$

したがって、 $u(x,t)$ は境界条件 $u_x(0,t)=u_x(L,t)=0$ を満たします。

5) 初期条件 $u(x,0) = f(x)$ を級数表示に代入すると、

$$
f(x) = u(x,0) = \sum_{n=0}^{\infty} v_n(0) \cos\left(\frac{n\pi x}{L}\right)
$$

これは $f(x)$ のフーリエ余弦級数です。係数 $v_n(0)$ を求めるために、3)の直交関係を利用します。両辺に $\cos\left(\frac{m\pi x}{L}\right)$ を掛けて $0$ から $L$ まで積分します。

$$
\int_0^L f(x) \cos\left(\frac{m\pi x}{L}\right) dx = \sum_{n=0}^{\infty} v_n(0) \int_0^L \cos\left(\frac{n\pi x}{L}\right) \cos\left(\frac{m\pi x}{L}\right) dx
$$

3)の結果より、右辺の積分は $n=m$ の項のみが残ります。
(i) $m=0$ の場合:

$$
\int_0^L f(x) dx = v_0(0) \cdot L \implies v_0(0) = \frac{1}{L} \int_0^L f(x) dx
$$

(ii) $m \geq 1$ の場合:

$$
\int_0^L f(x) \cos\left(\frac{m\pi x}{L}\right) dx = v_m(0) \cdot \frac{L}{2} \implies v_m(0) = \frac{2}{L} \int_0^L f(x) \cos\left(\frac{m\pi x}{L}\right) dx
$$

6) $u(x,t) = \sum_{n=0}^{\infty} v_n(t) \cos\left(\frac{n\pi x}{L}\right)$ を $u_t = u_{xx}$ に代入します。
左辺 $u_t$ :

$$
u_t(x,t) = \sum_{n=0}^{\infty} \frac{dv_n}{dt}(t) \cos\left(\frac{n\pi x}{L}\right)
$$

右辺 $u_{xx}$ :

$$
u_{xx}(x,t) = \frac{\partial^2}{\partial x^2} \sum_{n=0}^{\infty} v_n(t) \cos\left(\frac{n\pi x}{L}\right) = \sum_{n=0}^{\infty} v_n(t) \left(-\left(\frac{n\pi}{L}\right)^2\right) \cos\left(\frac{n\pi x}{L}\right)
$$

$u_t = u_{xx}$ より、フーリエ級数の一意性から各項の係数が等しくなければなりません。

$$
\frac{dv_n}{dt}(t) = -\left(\frac{n\pi}{L}\right)^2 v_n(t)
$$

これが $v_n(t)$ が満たすべき常微分方程式です。
この方程式は変数分離形です。

$$
\frac{dv_n}{v_n} = -\left(\frac{n\pi}{L}\right)^2 dt
$$

両辺を積分すると、

$$
\ln|v_n| = -\left(\frac{n\pi}{L}\right)^2 t + C'
$$

したがって、一般解は任意定数 $A_n$ を用いて次のように書けます。

$$
v_n(t) = A_n e^{-\left(\frac{n\pi}{L}\right)^2 t}
$$


$A_n=0$ の零解も含まれる。特に $n=0$ では $v_0(t)=A_0$ が一定となり、1) の積分量保存に対応する。
