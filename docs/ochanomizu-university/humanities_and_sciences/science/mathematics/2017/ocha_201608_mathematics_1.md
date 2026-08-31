---
sidebar_label: "2016年8月実施 数学コース 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Continuity-and-Differentiability
  - Mathematics.Vector-Calculus.Directional-Derivative
  - Mathematics.Calculus.Improper-Integral
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2016年8月実施 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$1$ 以上の整数 $m,n$ に対して $\mathbb{R}^2$ 上の関数 $f_{m,n}$ を

$$
f_{m,n}(x,y)=\frac{x^m y^n}{x^2+y^2}\quad\text{if }(x,y)\ne(0,0),
\qquad f_{m,n}(0,0)=0
$$

で定義する。このとき、$f_{m,n}$ の原点 $(0,0)$ における連続性、（全ての方向への）方向微分可能性、全微分可能性を調べよ。

### (2)

$\alpha$ を実数とする。$\mathbb{R}^2$ の部分集合

$$
A=\left\{(x,y)\in\mathbb{R}^2\mid x^2+y^2\ge 1,\ |x|\le 1,\ y>0\right\}
$$

上の広義積分

$$
\int_A\frac{dx\,dy}{y^\alpha}
$$

が収束する $\alpha$ の範囲を調べ、その範囲に含まれる全ての整数について広義積分の値を求めよ。

### 题目描述

1. 对正整数 $m,n$，考察

   $$
   f_{m,n}(x,y)=
   \begin{cases}
   \dfrac{x^m y^n}{x^2+y^2},&(x,y)\ne(0,0),\\
   0,&(x,y)=(0,0)
   \end{cases}
   $$

   在原点的连续性、所有方向的方向可微性以及全微分性。

2. 对集合

   $$
   A=\{(x,y)\in\mathbb R^2\mid x^2+y^2\ge1, |x|\le1, y>0\},
   $$

   求广义积分 $\displaystyle\int_A y^{-\alpha}\,dx\,dy$ 收敛的 $\alpha$ 范围，并计算该范围内所有整数 $\alpha$ 对应的积分值。

## **Kai**

### (1)

$r=\sqrt{x^2+y^2}$ とおく。$(x,y)\ne(0,0)$ では

$$
|f_{m,n}(x,y)|
\le \frac{r^{m+n}}{r^2}=r^{m+n-2}.
$$

したがって $m+n>2$ なら原点で連続である。一方、$m+n=2$ の場合は $m=n=1$ であり、$x=y=t$ とすると $f_{1,1}(t,t)=1/2$ だから連続でない。よって

$$
\boxed{\text{原点で連続}\iff m+n\ge3}.
$$

方向 $v=(a,b)\ne(0,0)$ に対して

$$
\frac{f_{m,n}(ta,tb)-f_{m,n}(0,0)}{t}
=t^{m+n-3}\frac{a^m b^n}{a^2+b^2}.
$$

したがって、$m+n=3$ では極限が $a^m b^n/(a^2+b^2)$、$m+n\ge4$ では $0$ となる。$m+n=2$ では例えば $v=(1,1)$ に対して極限が存在しない。ゆえに

$$
\boxed{\text{全ての方向に方向微分可能}\iff m+n\ge3}.
$$

また、座標軸上では関数値が常に $0$ なので、全微分可能ならその微分は零写像である。$m+n\ge4$ のとき

$$
\frac{|f_{m,n}(x,y)|}{\sqrt{x^2+y^2}}
\le r^{m+n-3}\longrightarrow0,
$$

よって全微分可能である。$m+n=3$ のときは $x=y=t$ とすれば

$$
\frac{|f_{m,n}(t,t)|}{\sqrt{2t^2}}=\frac1{2\sqrt2}
$$

となり、全微分可能でない。以上より

$$
\boxed{\text{原点で全微分可能}\iff m+n\ge4}.
$$

### (2)

$y$ を固定して $A$ の水平方向の幅を求めると、$0<y<1$ では $2(1-\sqrt{1-y^2})$、$y\ge1$ では $2$ である。したがって

$$
I_\alpha
=2\int_0^1\frac{1-\sqrt{1-y^2}}{y^\alpha}\,dy
+2\int_1^\infty y^{-\alpha}\,dy.
$$

$y\to0$ で

$$
1-\sqrt{1-y^2}
=\frac{y^2}{1+\sqrt{1-y^2}}\sim\frac{y^2}{2}
$$

だから、第 $1$ 項は $\alpha<3$ のときに限り収束する。第 $2$ 項は $\alpha>1$ のときに限り収束する。よって

$$
\boxed{1<\alpha<3}.
$$

この範囲の整数は $\alpha=2$ のみである。$y=\sin\theta$ とおけば

$$
\begin{aligned}
I_2
&=2\int_0^1\frac{1-\sqrt{1-y^2}}{y^2}\,dy+2\\
&=2\int_0^{\pi/2}\frac{\cos\theta}{1+\cos\theta}\,d\theta+2\\
&=2\left(\frac\pi2-1\right)+2
=\boxed{\pi}.
\end{aligned}
$$
