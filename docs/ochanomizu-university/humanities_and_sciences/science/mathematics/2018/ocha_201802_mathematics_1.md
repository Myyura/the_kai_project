---
sidebar_label: "2018年2月実施 数学コース 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Continuity-and-Differentiability
  - Operations-Research.Convex-Optimization.Jensen-Inequality
  - Mathematics.Calculus.Definite-Integral
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2018年2月実施 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$\mathbb R^2$ 上で定義された関数 $f(x,y)$ を

$$
f(x,y)=
\begin{cases}
\dfrac{xy}{x^2+|y|},&(x,y)\ne(0,0),\\[2mm]
0,&(x,y)=(0,0)
\end{cases}
$$

で定義する。このとき $f$ の原点 $(0,0)$ における全微分可能性を調べよ。

### (2)

$a,b$ を $b>a$ となる定数とし、$g(x)$ を有界閉区間 $[a,b]$ で連続な実数値関数とする。関数 $g$ が下に凸な関数であるとき、$a\le x-h<x+h\le b$ を満たす任意の $x\in(a,b)$ と任意の $h>0$ に対して

$$
g(x)\le\frac1{2h}\int_{x-h}^{x+h}g(t)\,dt
$$

が成り立つことを示せ。

### (3)

$p(x)$ を $[0,\infty)$ で単調増加で連続な実数値関数とし、$P(x)$ を $(0,\infty)$ で

$$
P(x)=\frac1x\int_0^x p(t)\,dt
$$

と定義する。このとき $P(x)$ は単調増加な関数であることを示せ。

### 题目描述

1. 判断 $f(x,y)=xy/(x^2+|y|)$（原点定义为 $0$）在原点是否全微分。
2. 证明下凸函数在对称区间上的平均值不小于中心点函数值。
3. 若连续函数 $p$ 单调递增，证明其区间平均

   $$
   P(x)=\frac1x\int_0^x p(t)\,dt
   $$

   也单调不减；若 $p$ 严格递增，则 $P$ 也严格递增。

## **Kai**

### (1)

座標軸上では $f(x,0)=f(0,y)=0$ だから、

$$
f_x(0,0)=f_y(0,0)=0.
$$

したがって、全微分可能なら全微分は零写像でなければならない。一方、$y=x^2$ とおくと

$$
f(x,x^2)=\frac{x^3}{x^2+x^2}=\frac x2
$$

であり、

$$
\frac{|f(x,x^2)|}{\sqrt{x^2+x^4}}
=\frac1{2\sqrt{1+x^2}}\longrightarrow\frac12\ne0.
$$

よって

$$
\boxed{f\text{ は原点で全微分可能でない。}}
$$

### (2)

$0\le t\le h$ とする。$x$ は $x-t$ と $x+t$ の中点であるから、凸性より

$$
g(x)\le\frac{g(x-t)+g(x+t)}2.
$$

これを $0\le t\le h$ で積分すると

$$
\begin{aligned}
h\,g(x)
&\le\frac12\int_0^h\{g(x-t)+g(x+t)\}\,dt\\
&=\frac12\int_{x-h}^{x+h}g(u)\,du.
\end{aligned}
$$

$h>0$ で割れば

$$
\boxed{g(x)\le\frac1{2h}\int_{x-h}^{x+h}g(u)\,du}.
$$

### (3)

積分の微分により、$x>0$ で

$$
\begin{aligned}
P'(x)
&=\frac{x\,p(x)-\int_0^x p(t)\,dt}{x^2}\\
&=\frac1{x^2}\int_0^x\{p(x)-p(t)\}\,dt.
\end{aligned}
$$

$0\le t<x$ なら $p(t)\le p(x)$ だから $P'(x)\ge0$ である（狭義単調増加なら $P'(x)>0$）。したがって

$$
\boxed{P(x)\text{ は }(0,\infty)\text{ で単調増加である。}}
$$
