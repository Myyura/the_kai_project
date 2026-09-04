---
sidebar_label: 2025年8月実施 必須問題 微分積分
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2025年8月実施 必須問題 微分積分

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

2 変数関数

$$
f(x,y)=xy^2+2x^2-2xy-3x+1
$$

と曲線 $f(x,y)=0$ について、点 $(1,2)$ における法線と $f$ の極値を求めよ。また、次の 2 重積分を計算せよ。

$$
I_1=\iint_{D_1}\sqrt{xy}\,dx\,dy,\qquad
D_1=\{(x,y)\mid x,y\ge0,\ \sqrt x+\sqrt y\le1\},
$$

$$
I_2=\iint_{D_2}(x+y)\,dx\,dy,\qquad
D_2=\{(x,y)\mid x^2+y^2\le1,\ 0\le4y\le3x\},
$$

$$
I_3=\iint_{D_3}x\log(1+y^2)\,dx\,dy,\qquad
D_3=\{(x,y)\mid x\ge0,\ x^2\le y\le1\}.
$$

### 题目描述

对二元函数 $f(x,y)$，求隐曲线 $f=0$ 在 $(1,2)$ 处的法线及 $f$ 的所有极值；并计算题中给定的三个二重积分。

## **Kai**

### (1)

#### (i)

$$
f_x=y^2+4x-2y-3,\qquad f_y=2x(y-1).
$$

$\nabla f(1,2)=(1,2)$ であるから、法線は

$$
y-2=2(x-1),\qquad \boxed{y=2x}.
$$

#### (ii)

$f_x=f_y=0$ の解は

$$
(0,-1),\quad(0,3),\quad(1,1)
$$

である。Hesse 行列は

$$
H=\begin{pmatrix}4&2y-2\\2y-2&2x\end{pmatrix}.
$$

$(0,-1),(0,3)$ では $\det H<0$、$(1,1)$ では $H$ は正定値である。よって、

$$
\boxed{f(1,1)=-1\text{ が極小値}}
$$

である。

### (2)

#### (i)

$u=\sqrt{x},\ v=\sqrt{y}$ とおくと $dx\,dy=4uv\,du\,dv$、領域は $u,v\geq0, u+v\leq1$ となる。したがって、

$$
I_1=4\int_0^1\int_0^{1-u}u^2v^2\,dv\,du
=\boxed{\frac1{45}}.
$$

#### (ii)

$x=r\cos\theta, y=r\sin\theta$ とおくと

$$
0\leq r\leq1,\qquad 0\leq\theta\leq\tan^{-1}\frac34.
$$

よって、

$$
I_2=\int_0^{\tan^{-1}(3/4)}\int_0^1r^2(\cos\theta+\sin\theta)\,dr\,d\theta
=\boxed{\frac4{15}}.
$$

#### (iii)

積分順序を変えると $0\leq y\leq1, 0\leq x\leq\sqrt y$ であるから、

$$
\begin{aligned}
I_3
&=\int_0^1\int_0^{\sqrt y}x\log(1+y^2)\,dx\,dy\\
&=\frac12\int_0^1y\log(1+y^2)\,dy
=\boxed{\frac12\log2-\frac14}.
\end{aligned}
$$
