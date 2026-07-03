---
sidebar_label: "2016年9月実施 数理基礎 A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Calculus.Multivariable-Differentiation
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 数理基礎 A

## **Author**
祭音Myyura

## **Description**
### [小問 A1]

$a$ を正の定数とする。体積が $a$ となる3次元の直方体のうち、表面積が最小となるものの縦、横、高さを求めよ。

### [小問 A2]

$f(x,y)=x^2+y^2,\ x=\cos 2t,\ y=\sin 3t$ のとき、$df/dt$ を求めよ。

### [小問 A3]

$f(x,y)=\sqrt{2x-y}$ の

$$
\frac{\partial^2 f}{\partial y\partial x},\quad
\frac{\partial^2 f}{\partial x\partial y},\quad
\frac{\partial^2 f}{\partial x^2},\quad
\frac{\partial^2 f}{\partial y^2}
$$

を求めよ。

## **Kai**

### [小問 A1]

辺の長さを $x,y,z>0$ とすると、$xyz=a$、表面積は

$$
S=2(xy+yz+zx)
$$

である。相加相乗平均より

$$
xy+yz+zx
\geq 3\sqrt[3]{(xy)(yz)(zx)}
=3(xyz)^{2/3}
=3a^{2/3}.
$$

等号条件は $xy=yz=zx$ であり、正の数なので $x=y=z$ となる。したがって

$$
\boxed{x=y=z=\sqrt[3]{a}},\qquad
S_{\min}=6a^{2/3}.
$$

### [小問 A2]

連鎖律より

$$
\begin{aligned}
\frac{df}{dt}
&=2x\frac{dx}{dt}+2y\frac{dy}{dt}\\
&=-4\cos 2t\sin 2t+6\sin 3t\cos 3t\\
&=\boxed{-2\sin 4t+3\sin 6t}.
\end{aligned}
$$

### [小問 A3]

$u=2x-y>0$ とおく。まず

$$
f_x=u^{-1/2},\qquad f_y=-\frac12u^{-1/2}
$$

であるから、

$$
\boxed{
\frac{\partial^2f}{\partial y\partial x}
=\frac{\partial^2f}{\partial x\partial y}
=\frac{1}{2(2x-y)^{3/2}}
}
$$

および

$$
\boxed{
\frac{\partial^2f}{\partial x^2}
=-\frac{1}{(2x-y)^{3/2}},\qquad
\frac{\partial^2f}{\partial y^2}
=-\frac{1}{4(2x-y)^{3/2}}
}.
$$
