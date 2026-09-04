---
sidebar_label: 2022年8月実施 必須問題 微分積分
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 必須問題 微分積分

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$f(x,y)=e^{2y}\sin(x^2+3y)$ の Maclaurin 展開

$$
f(x,y)=c_0+c_1x+c_2y+c_3x^2+c_4xy+c_5y^2+\cdots
$$

の係数 $c_0,\ldots,c_5$ を求め、$g(x,y)=(x^2+xy)e^y$ の極値を調べよ。また、次の重積分を計算せよ。

$$
\begin{aligned}
I_1&=\iint_{x^2+y^2\le\pi^2}\sin\sqrt{x^2+y^2}\,dx\,dy,\\
I_2&=\iint_D(x+y)\tan(x-y)\,dx\,dy,\\
D&=\{(x,y)\mid0\le x+y\le4,\ \pi/6\le x-y\le\pi/3\},\\
I_3&=\int_0^1\int_0^1|y-x^2|\,dy\,dx.
\end{aligned}
$$

### 题目描述

求二元函数 Maclaurin 展开至二次项的系数，判定另一函数的极值，并计算圆盘、线性变换区域及单位正方形上的三个二重积分。

## **Kai**

### (1)

2 次の項まで展開すると、

$$
\begin{aligned}
e^{2y}\sin(x^2+3y)
&=(1+2y+2y^2+\cdots)(x^2+3y+\cdots)\\
&=3y+x^2+6y^2+\text{（3 次以上）}.
\end{aligned}
$$

したがって、

$$
\boxed{c_0=0,\ c_1=0,\ c_2=3,\ c_3=1,\ c_4=0,\ c_5=6}.
$$

### (2)

$$
g_x=(2x+y)e^y,\qquad
g_y=x(x+y+1)e^y.
$$

停留点は $(0,0)$ と $(1,-2)$ である。Hesse 行列を調べると、$(0,0)$ では行列式が $-1$ で鞍点、$(1,-2)$ では

$$
H=e^{-2}\begin{pmatrix}2&1\\1&1\end{pmatrix}
$$

が正定値である。よって、

$$
\boxed{(1,-2)\text{ で極小値 }-e^{-2}}
$$

をとり、極大値はない。

### (3)

#### (i)

極座標により、

$$
\begin{aligned}
I_1
&=\int_0^{2\pi}\int_0^\pi r\sin r\,dr\,d\theta
=\boxed{2\pi^2}.
\end{aligned}
$$

#### (ii)

$u=x+y$、$v=x-y$ とおくと $dx\,dy=\frac12du\,dv$ である。したがって、

$$
\begin{aligned}
I_2
&=\frac12\int_0^4u\,du
\int_{\pi/6}^{\pi/3}\tan v\,dv\\
&=4\log\frac{\cos(\pi/6)}{\cos(\pi/3)}
=\boxed{2\log3}.
\end{aligned}
$$

#### (iii)

$0\leq x\leq1$ では $y=x^2$ で分ければよい。よって、

$$
\begin{aligned}
I_3
&=\int_0^1\left\{
\int_0^{x^2}(x^2-y)\,dy
+\int_{x^2}^1(y-x^2)\,dy
\right\}dx\\
&=\int_0^1\left(\frac12-x^2+x^4\right)dx
=\boxed{\frac{11}{30}}.
\end{aligned}
$$
