---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(I) 関数 $J(x)$ を、

$$
J(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(n!)^2} \left(\frac{x}{2}\right)^{2n}
$$

と定義する。次の問に答えよ。

(1) $J(x)$ を定義する級数が任意の実数 $x$ で収束することを示せ。

(2) $\frac{d^2}{dx^2}J(x) + \frac{1}{x} \frac{d}{dx}J(x) + J(x) = 0$ を示せ。

(II) $xy$ 平面で定義された2変数関数

$$
f(x,y) = \frac{x^2 - y^2}{x^2 + y^2 + 1}
$$

を考える。次の問に答えよ。

(1) 変数変換

$$
\begin{cases} u = x + y \\ v = x - y \end{cases}
$$

のヤコビ行列式

$$
\frac{\partial u}{\partial x} \frac{\partial v}{\partial y} - \frac{\partial u}{\partial y} \frac{\partial v}{\partial x}
$$

を求めよ。

(2) 正の定数 $a$ に対して、定積分

$$
\int_{0}^{1} w \log(w^2 + a) dw
$$

を計算せよ。

(3) $xy$ 平面の領域

$$
D = \{(x, y) \in \mathbb{R}^2 | 0 \leq x + y \leq 1, 0 \leq x - y \leq 1\}
$$

における重積分

$$
\iint_D f(x, y) dx dy
$$

を計算せよ。

### 题目描述

I. 定义函数

$$
J(x)=\sum_{n=0}^{\infty}
\frac{(-1)^n}{(n!)^2}
\left(\frac{x}{2}\right)^{2n}.
$$

回答下列问题。

(1) 证明定义 $J(x)$ 的级数对任意实数 $x$ 都收敛。

(2) 证明

$$
\frac{d^2}{dx^2}J(x)
+\frac1x\frac{d}{dx}J(x)
+J(x)=0.
$$

II. 考虑定义在 $xy$ 平面上的二元函数

$$
f(x,y)=\frac{x^2-y^2}{x^2+y^2+1}.
$$

回答下列问题。

(1) 求变量变换

$$
\begin{cases}
u=x+y,\\
v=x-y
\end{cases}
$$

的 Jacobian 行列式

$$
\frac{\partial u}{\partial x}\frac{\partial v}{\partial y}
-\frac{\partial u}{\partial y}\frac{\partial v}{\partial x}.
$$

(2) 对正数 $a$，计算定积分

$$
\int_0^1 w\log(w^2+a)\,dw.
$$

(3) 定义 $xy$ 平面上的区域

$$
D=\left\{(x,y)\in\mathbb{R}^2\,\middle|\,
0\leq x+y\leq1,\;
0\leq x-y\leq1
\right\}.
$$

计算二重积分

$$
\iint_D f(x,y)\,dx\,dy.
$$

## **Kai**

(I)(1)
If $x=0$ , the series has only its first nonzero term and therefore converges. Let $x\ne0$ and $a_n = \frac{(-1)^n}{(n!)^2} \left(\frac{x}{2}\right)^{2n}$ . Then

$$
\left| \frac{a_{n+1}}{a_n} \right| = \frac{\frac{1}{((n+1)!)^2} \left(\frac{|x|}{2}\right)^{2(n+1)}}{\frac{1}{(n!)^2} \left(\frac{|x|}{2}\right)^{2n}} = \frac{(n!)^2}{((n+1)!)^2} \left(\frac{|x|}{2}\right)^2 = \frac{1}{(n+1)^2} \left(\frac{|x|}{2}\right)^2
$$

Thus, $\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{1}{(n+1)^2} \left(\frac{|x|}{2}\right)^2 = 0 < 1$ for every fixed $x\ne0$ .
By the ratio test, the series converges for all $x \in \mathbb{R}$ .

(2)
上で求めた収束半径は無限大なので、べき級数は項別に何度でも微分できる。まず $x\ne0$ として、 $J(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(n!)^2} \left(\frac{x}{2}\right)^{2n}$ の一階和二階導数を計算する。

求导得：

$$
\frac{d}{dx} J(x) = \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} \cdot 2n \left(\frac{x}{2}\right)^{2n-1} \cdot \frac{1}{2} = \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} n \left(\frac{x}{2}\right)^{2n-1}
$$

$$
\frac{d^2}{dx^2} J(x) = \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} n (2n-1) \left(\frac{x}{2}\right)^{2n-2} \cdot \frac{1}{2}
$$

将导数代入方程左边的前两项 $\frac{d^2 J}{dx^2} + \frac{1}{x} \frac{dJ}{dx}$ 中：

$$
\begin{aligned}
\frac{d^2 J}{dx^2} + \frac{1}{x} \frac{dJ}{dx} &= \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} \frac{n(2n-1)}{2} \left(\frac{x}{2}\right)^{2n-2} + \frac{1}{x} \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} n \left(\frac{x}{2}\right)^{2n-1} \\
\text{注意到 } \frac{1}{x} \left(\frac{x}{2}\right)^{2n-1} &= \frac{1}{2(x/2)} \left(\frac{x}{2}\right)^{2n-1} = \frac{1}{2} \left(\frac{x}{2}\right)^{2n-2}，\text{代入后合并同类项：}\\
&= \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} \left[ \frac{n(2n-1)}{2} + \frac{n}{2} \right] \left(\frac{x}{2}\right)^{2n-2} \\
&= \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} \left[ \frac{2n^2 - n + n}{2} \right] \left(\frac{x}{2}\right)^{2n-2} \\
&= \sum_{n=1}^{\infty} \frac{(-1)^n}{(n!)^2} n^2 \left(\frac{x}{2}\right)^{2n-2}
\end{aligned}
$$

利用 $\frac{n^2}{(n!)^2} = \frac{n^2}{n^2((n-1)!)^2} = \frac{1}{((n-1)!)^2}$ 化简系数：

$$
= \sum_{n=1}^{\infty} \frac{(-1)^n}{((n-1)!)^2} \left(\frac{x}{2}\right)^{2n-2}
$$

令 $k = n - 1$ ，则当 $n$ 从 $1$ 开始时， $k$ 从 $0$ 开始。同时注意 $(-1)^n = (-1)^{k+1} = -(-1)^k$ ：

$$
= \sum_{k=0}^{\infty} \frac{-(-1)^{k}}{(k!)^2} \left(\frac{x}{2}\right)^{2k} = - \sum_{k=0}^{\infty} \frac{(-1)^{k}}{(k!)^2} \left(\frac{x}{2}\right)^{2k} = -J(x)
$$

因此，原方程得证：

$$
\frac{d^2 J}{dx^2} + \frac{1}{x} \frac{dJ}{dx} + J(x) = -J(x) + J(x) = 0
$$

これは $x\ne0$ で成立する。問題の式は $x=0$ では $1/x$ のためそのままでは定義されないが、同値な正則形

$$
x^2J''(x)+xJ'(x)+x^2J(x)=0
$$

は $x=0$ を含むすべての実数で成立する。また $J'(x)/x$ は $x\to0$ で $-1/2$ に収束するので、元の左辺も連続的に $0$ へ延長できる。

(II)(1)

$$
\frac{\partial u}{\partial x} = 1, \quad \frac{\partial u}{\partial y} = 1
$$

$$
\frac{\partial v}{\partial x} = 1, \quad \frac{\partial v}{\partial y} = -1
$$

Therefore, the Jacobian determinant is

$$
\frac{\partial u}{\partial x} \frac{\partial v}{\partial y} - \frac{\partial u}{\partial y} \frac{\partial v}{\partial x} = (1)(-1) - (1)(1) = -1 - 1 = -2
$$

(2) 计算定积分 $\int_0^1 w \log(w^2 + a) \, dw$ 。

解：
令 $t = w^2 + a$ 。
对两边微分得 $dt = 2w \, dw$ ，即 $w \, dw = \frac{1}{2} dt$ 。

接下来进行积分限的变换：

- 当 $w = 0$ 时， $t = 0^2 + a = a$ 。
- 当 $w = 1$ 时， $t = 1^2 + a = 1 + a$ 。

代入原积分进行计算：

$$
\begin{aligned}
\int_0^1 w \log(w^2 + a) \, dw &= \int_a^{1+a} \log t \cdot \frac{1}{2} \, dt \\
&= \frac{1}{2} \int_a^{1+a} \log t \, dt
\end{aligned}
$$

利用对数函数的积分公式 $\int \log x \, dx = x \log x - x + C$ ，得：

$$
\begin{aligned}
&= \frac{1}{2} \left[ t \log t - t \right]_a^{1+a} \\
&= \frac{1}{2} \left( \Big[ (1+a)\log(1+a) - (1+a) \Big] - \Big[ a \log a - a \Big] \right) \\
&= \frac{1}{2} \left( (1+a)\log(1+a) - 1 - a - a \log a + a \right) \\
&= \frac{1}{2} \left( (1+a)\log(1+a) - a \log a - 1 \right)
\end{aligned}
$$

结果：

$$
\frac{1}{2} \left[ (1+a)\log(1+a) - a \log a - 1 \right]
$$

(3) 计算重积分 $\displaystyle \iint_D f(x, y)\,dxdy$ ，其中

$$
D = \{(x,y)\in\mathbb{R}^2 \mid 0 \le x+y \le 1,\ 0 \le x-y \le 1\},
\qquad
f(x,y) = \frac{x^2 - y^2}{x^2 + y^2 + 1}.
$$

**解：**

**第一步：变量代换**

令

$$
u = x+y,\qquad v = x-y.
$$

则积分区域条件

$$
0\le x+y\le1,\quad 0\le x-y\le1
$$

变为

$$
0\le u\le1,\quad 0\le v\le1,
$$

故新区域为

$$
D' = \{(u,v)\mid 0\le u\le1,\ 0\le v\le1\}.
$$

由 $u,v$ 解得

$$
x = \frac{u+v}{2},\qquad y = \frac{u-v}{2}.
$$

雅可比行列式：

$$
J = \det\frac{\partial(x,y)}{\partial(u,v)}
= \det
\begin{pmatrix}
\frac12 & \frac12\\[2pt]
\frac12 & -\frac12
\end{pmatrix}
= -\frac12.
$$

因此

$$
dx\,dy = |J|\,du\,dv = \frac12\,du\,dv.
$$

**第二步：被积函数在 $(u,v)$ 坐标中的表达**

计算

$$
x^2 = \frac{(u+v)^2}{4},\qquad
y^2 = \frac{(u-v)^2}{4}.
$$

分子：

$$
x^2 - y^2
= \frac{(u+v)^2 - (u-v)^2}{4}
= \frac{4uv}{4}
= uv.
$$

分母：

$$
x^2 + y^2
= \frac{(u+v)^2 + (u-v)^2}{4}
= \frac{u^2+v^2}{2},
$$

$$
x^2 + y^2 + 1
= \frac{u^2+v^2}{2} + 1
= \frac{u^2+v^2+2}{2}.
$$

于是

$$
f(x,y)
= \frac{x^2-y^2}{x^2+y^2+1}
= \frac{uv}{\dfrac{u^2+v^2+2}{2}}
= \frac{2uv}{u^2+v^2+2}.
$$

连同 $dx\,dy = \frac12 du\,dv$ ，有

$$
f(x,y)\,dx\,dy
= \frac{2uv}{u^2+v^2+2}\cdot\frac12\,du\,dv
= \frac{uv}{u^2+v^2+2}\,du\,dv.
$$

故原积分变为

$$
I = \iint_D f(x,y)\,dx\,dy
  = \int_0^1\int_0^1 \frac{uv}{u^2+v^2+2}\,du\,dv.
$$

**第三步：计算 $u$ 方向的积分**

对 $u$ 积分（视 $v$ 为常数）：

$$
\int_0^1 \frac{uv}{u^2+v^2+2}\,du
= v\int_0^1 \frac{u}{u^2+(v^2+2)}\,du.
$$

令

$$
t = u^2 + v^2 + 2,\qquad dt = 2u\,du \ \Rightarrow\ u\,du = \frac12\,dt,
$$

当 $u=0$ 时 $t = v^2+2$ ，当 $u=1$ 时 $t = v^2+3$ ，于是

$$
v\int_0^1 \frac{u}{u^2+v^2+2}\,du
= \frac{v}{2}\int_{v^2+2}^{v^2+3} \frac{1}{t}\,dt
= \frac{v}{2}\bigl[\log t\bigr]_{v^2+2}^{v^2+3}
= \frac{v}{2}\Bigl(\log(v^2+3)-\log(v^2+2)\Bigr).
$$

因此

$$
I = \frac12\int_0^1
v\Bigl(\log(v^2+3)-\log(v^2+2)\Bigr)\,dv.
$$

**第四步：引入通用积分并求值**

记

$$
K(\alpha) = \int_0^1 v\log(v^2+\alpha)\,dv \qquad (\alpha>0).
$$

同样令 $t=v^2+\alpha,\ dt=2v\,dv\Rightarrow v\,dv=\frac12 dt$ ，得到

$$
K(\alpha)
= \frac12\int_{\alpha}^{\alpha+1} \log t\,dt
= \frac12\bigl[t\log t - t\bigr]_{\alpha}^{\alpha+1}
= \frac12\Bigl((\alpha+1)\log(\alpha+1) - \alpha\log\alpha - 1\Bigr).
$$

则

$$
I = \frac12\bigl(K(3)-K(2)\bigr).
$$

计算

$$
K(3)
= \frac12\Bigl(4\log4 - 3\log3 - 1\Bigr),
\qquad
K(2)
= \frac12\Bigl(3\log3 - 2\log2 - 1\Bigr).
$$

故

$$
\begin{aligned}
I
&= \frac12\left[
\frac12\bigl(4\log4 - 3\log3 - 1\bigr)
- \frac12\bigl(3\log3 - 2\log2 - 1\bigr)
\right]\\[4pt]
&= \frac14\Bigl(4\log4 + 2\log2 - 6\log3\Bigr).
\end{aligned}
$$

注意 $\log4 = 2\log2$ ，于是

$$
4\log4 + 2\log2 = 8\log2 + 2\log2 = 10\log2,
$$

从而

$$
I = \frac14(10\log2 - 6\log3)
  = \frac12\bigl(5\log2 - 3\log3\bigr).
$$

也可以写成

$$
5\log2 - 3\log3
= \log 2^5 - \log3^3
= \log\frac{32}{27},
$$

所以

$$
\boxed{
I = \frac12\log\frac{32}{27}
= \frac12\bigl(5\log2 - 3\log3\bigr).
}
$$
