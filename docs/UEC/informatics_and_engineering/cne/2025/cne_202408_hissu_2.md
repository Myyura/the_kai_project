---
sidebar_label: 2024年8月実施 必須問題 微分積分
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Local-Extrema
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 必須問題 微分積分

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の問いに答えよ。

**（1）** 2 変数関数 $g(x,y)=x^2y-xy^2-2$ に対して、以下の設問に答えよ。

（i）点 $(-1,-2)$ のまわりで $g(x,y)=0$ によって定義される $C^1$ 級の陰関数を $y=\varphi(x)$ とするとき、導関数 $\varphi'(x)$ を $x,y$ の有理式で表せ。さらに、$\varphi''(-1)$ の値を求めよ。

（ii）条件 $g(x,y)=0$ の下で、関数 $f(x,y)=y-x$ の極値をすべて求めよ。

**（2）** 次の 2 重積分の値を求めよ。

（i）

$$
\begin{aligned}
I_1&=\iint_{D_1}y\cos(x-y)\,dx\,dy,\\
D_1&=\{(x,y)\mid x\ge0,\ y\ge0,\ x+y\le\pi/2\}.
\end{aligned}
$$

（ii）

$$
\begin{aligned}
I_2&=\iint_{D_2}\frac{dx\,dy}{\sqrt{(x^2+y^2)(1-x^2-y^2)}},\\
D_2&=\{(x,y)\mid x\ge0,\ y\ge0,\ 1/4\le x^2+y^2\le3/4\}.
\end{aligned}
$$

（iii）

$$
\begin{aligned}
I_3&=\iint_{D_3}\frac{(x-y)^4}{1+(x+y)^6}\,dx\,dy,\\
D_3&=\{(x,y)\mid x\ge0,\ y\ge0,\ x+y\le1\}.
\end{aligned}
$$

陰関数：implicit function、有理式：rational expression、極値：extremum、2 重積分：double integral。

### 题目描述

回答下列问题。

**（1）** 对二元函数 $g(x,y)=x^2y-xy^2-2$，回答：

（i）设 $y=\varphi(x)$ 是在点 $(-1,-2)$ 附近由 $g(x,y)=0$ 定义的 $C^1$ 类隐函数。将导函数 $\varphi'(x)$ 表示为 $x,y$ 的有理式，并求 $\varphi''(-1)$。

（ii）在约束 $g(x,y)=0$ 下，求函数 $f(x,y)=y-x$ 的全部极值。

**（2）** 求下列二重积分的值。

（i）

$$
\begin{aligned}
I_1&=\iint_{D_1}y\cos(x-y)\,dx\,dy,\\
D_1&=\{(x,y)\mid x\ge0,\ y\ge0,\ x+y\le\pi/2\}.
\end{aligned}
$$

（ii）

$$
\begin{aligned}
I_2&=\iint_{D_2}\frac{dx\,dy}{\sqrt{(x^2+y^2)(1-x^2-y^2)}},\\
D_2&=\{(x,y)\mid x\ge0,\ y\ge0,\ 1/4\le x^2+y^2\le3/4\}.
\end{aligned}
$$

（iii）

$$
\begin{aligned}
I_3&=\iint_{D_3}\frac{(x-y)^4}{1+(x+y)^6}\,dx\,dy,\\
D_3&=\{(x,y)\mid x\ge0,\ y\ge0,\ x+y\le1\}.
\end{aligned}
$$

## **Kai**

### (1)

#### (i)

$$
g_x=2xy-y^2,\qquad g_y=x^2-2xy.
$$

$g_y(-1,-2)=-3\ne0$ より陰関数が存在し、

$$
\boxed{
\varphi'(x)=-\frac{g_x}{g_y}
=-\frac{2xy-y^2}{x^2-2xy}
}.
$$

$(-1,-2)$ では $\varphi'(-1)=0$ である。さらに

$$
g_{xx}+2g_{xy}\varphi'
+g_{yy}(\varphi')^2+g_y\varphi''=0
$$

より、

$$
\boxed{\varphi''(-1)=-\frac43}.
$$

#### (ii)

Lagrange の未定乗数法より、極値の候補では

$$
g_x+g_y=x^2-y^2=0.
$$

$x=y$ は $g=0$ を満たさず、$x=-y$ から $(x,y)=(-1,1)$ を得る。

$u=y-x$ とおくと、制約は

$$
ux(x+u)=-2
$$

であり、$x$ が実数となる条件は

$$
u<0\quad\text{または}\quad u\ge2
$$

である。したがって $(x,y)=(-1,1)$ で極小となり、

$$
\boxed{\text{極小値 }2},\qquad
\boxed{\text{極大値なし}}.
$$

### (2)

#### (i)

$u=x+y$, $v=x-y$ とおくと、$dx\,dy=\frac12\,du\,dv$ であり、

$$
0\le u\le\frac{\pi}{2},\qquad -u\le v\le u.
$$

よって

$$
\begin{aligned}
I_1
&=\frac14\int_0^{\pi/2}\int_{-u}^{u}(u-v)\cos v\,dv\,du\\
&=\frac12\int_0^{\pi/2}u\sin u\,du
=\boxed{\frac12}.
\end{aligned}
$$

#### (ii)

$x=r\cos\theta$, $y=r\sin\theta$ とおくと、

$$
\frac12\le r\le\frac{\sqrt3}{2},
\qquad 0\le\theta\le\frac{\pi}{2}.
$$

したがって、

$$
\begin{aligned}
I_2
&=\int_0^{\pi/2}\int_{1/2}^{\sqrt3/2}
\frac{dr\,d\theta}{\sqrt{1-r^2}}\\
&=\frac{\pi}{2}
\left[\sin^{-1}r\right]_{1/2}^{\sqrt3/2}
=\boxed{\frac{\pi^2}{12}}.
\end{aligned}
$$

#### (iii)

再び $u=x+y$, $v=x-y$ とおくと、

$$
\begin{aligned}
I_3
&=\frac12\int_0^1\int_{-u}^{u}
\frac{v^4}{1+u^6}\,dv\,du\\
&=\frac15\int_0^1\frac{u^5}{1+u^6}\,du
=\boxed{\frac{\log2}{30}}.
\end{aligned}
$$

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_3_i_mandatory202408.pdf)
