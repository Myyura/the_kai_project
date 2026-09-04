---
sidebar_label: "2018年8月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Vector-Calculus.Surface-Normal
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年8月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]

$a$ を正の整数とし、$f(x)=x(\log x)^a\ (x>0)$ とする。

1. $f'(x)$ を求めよ。
2. $\displaystyle\lim_{x\to+0}f(x)$ と $\displaystyle\lim_{x\to+0}f'(x)$ を求めよ。
3. $a=3$ のときの $y=f(x)$ の概形を描け。

### [2]

$$
D=\{(x,y)\mid |x+y|\le1,\ |x-2y|\le1\}
$$

とするとき、$\displaystyle\iint_D(x-2y)^2\,dx\,dy$ を求めよ。

### [3]

$f(x,y)=\tan^{-1}(y/x)$ とする。

1. $\partial f/\partial x$ と $\partial f/\partial y$ を求めよ。
2. 曲面 $z=f(x,y)$ の点 $(1,-1,-\pi/4)$ における接平面と法線の方程式を求めよ。

### 题目描述

1. 对 $f(x)=x(\log x)^a$（$a$ 为正整数、$x>0$）求导和右极限，并在 $a=3$ 时作图。
2. 用变量代换计算平行四边形区域上的二重积分。
3. 求 $\arctan(y/x)$ 的偏导数，以及指定点处曲面的切平面和法线。

## **Kai**

### [1]

#### (1)

$$
\boxed{f'(x)=(\log x)^{a-1}(\log x+a)}.
$$

#### (2)

$x=e^{-u}$ とおくと $u\to\infty$ であるから、

$$
f(x)=(-1)^a u^ae^{-u}\longrightarrow0.
$$

一方、$f'(x)$ の最高次項は $(\log x)^a$ である。したがって

$$
\boxed{
\lim_{x\to+0}f(x)=0,
\qquad
\lim_{x\to+0}f'(x)=
\begin{cases}
+\infty,&a\text{ が偶数},\\
-\infty,&a\text{ が奇数}.
\end{cases}}
$$

#### (3)

$a=3$ のとき、

$$
f'(x)=(\log x)^2(\log x+3),
\qquad
f''(x)=\frac{3\log x(\log x+2)}{x}.
$$

よって $f$ は $(0,e^{-3})$ で減少し、$(e^{-3},\infty)$ で増加する。ただし $x=1$ では $f'(1)=0$ だが増減は変わらない。極小点と変曲点は

$$
\text{極小点 }(e^{-3},-27e^{-3}),\qquad
\text{変曲点 }(e^{-2},-8e^{-2}),\ (1,0)
$$

である。また、$(0,e^{-2})$ と $(1,\infty)$ では $f''>0$、$(e^{-2},1)$ では $f''<0$ である。

```text
y
^                                               /
|                                             _/
|                                           _/
○-----------------------------------------●----------> x
 \                                       (1,0)
  \                                    __/
   \__                              ___/
      ●________○___________________/
   極小          変曲
 (e^-3,-27e^-3) (e^-2,-8e^-2)
```

### [2]

$$
u=x+y,\qquad v=x-2y
$$

とおく。$|\partial(u,v)/\partial(x,y)|=3$ なので $dx\,dy=\frac13du\,dv$ であり、$D$ は $-1\le u,v\le1$ に移る。よって

$$
\begin{aligned}
\iint_D(x-2y)^2\,dx\,dy
&=\frac13\int_{-1}^1\int_{-1}^1v^2\,du\,dv\\
&=\boxed{\frac49}.
\end{aligned}
$$

### [3]

#### (1)

$$
\boxed{
f_x=-\frac{y}{x^2+y^2},
\qquad
f_y=\frac{x}{x^2+y^2}}
$$

である。

#### (2)

$(1,-1)$ では $f_x=f_y=1/2$ である。したがって接平面は

$$
z+\frac\pi4=\frac12(x-1)+\frac12(y+1),
$$

すなわち

$$
\boxed{x+y-2z-\frac\pi2=0}.
$$

法線の方向ベクトルとして $(1,1,-2)$ を取れるので、法線は

$$
\boxed{(x,y,z)=\left(1,-1,-\frac\pi4\right)+t(1,1,-2)\quad(t\in\mathbb R)}.
$$
