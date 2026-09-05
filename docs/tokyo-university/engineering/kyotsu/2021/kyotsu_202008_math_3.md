---
sidebar_label: '2020年8月実施 数学3'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_3.pdf)

### I.
$|m|=1,m\ne1$ とし、$M(z)=mz/(mz-z+1)$ を考える。(1) 全不動点、(2) $M'(0)$、(3) 円 $|z-(1-i)/2|=1/\sqrt2$ が実軸に写るための $m$ を求める。

### II.
$0<\alpha<\pi/2$ とする。$J(z)=e^{-i\alpha}z+e^{i\alpha}z^{-1}$ の虚部が正になる $z\ne0$ の条件を求め、その領域を図示する。

### III.
$0<\beta<1$、$f(z)=z^\beta/(z^2+1)^2$ とする。$0<r<1<R$ に対し、閉路を $r\to R$ の線分 $C_1$、上半円 $R\to-R$ の $C_R$、線分 $-R\to-r$ の $C_2$、上半円 $-r\to r$ の $C_r$ と定める。

1. 留数から $\oint_C f(z)dz$ を求める。
2. $C_1,C_2$ の積分和を $\int_r^R x^\beta/(x^2+1)^2dx$ で表す。
3. $C_R$ の積分の $R\to\infty$ の極限を求める。
4. $C_r$ の積分の $r\to0$ の極限を求める。
5. 上の結果から $\int_0^\infty x^\beta/(x^2+1)^2dx$ を計算する。

![Contour and positive-imaginary region](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/tokyo-kyotsu-202008-complex.svg)

### 题目描述

1. 第一部分考察一次分式变换

   $$
   M(z)=\frac{mz}{mz-z+1}.
   $$

   其中 $|m|=1,m\ne1$。第一小问求其不动点，第二小问求导数并计算 $M'(0)$；第三小问求使圆 $|z-(1-i)/2|=1/\sqrt2$ 映到实轴的 $m$。
2. 第二部分令非零复数 $z=re^{i\theta}$，研究

   $$
   J(z)=e^{-i\alpha}z+e^{i\alpha}z^{-1}.
   $$

   将其写成

   $$
   \left(r+\frac1r\right)\cos(\theta-\alpha)
   +i\left(r-\frac1r\right)\sin(\theta-\alpha)
   $$

   并按 $r>1$ 与 $r<1$ 判断 $\operatorname{Im}J(z)>0$ 的区域；其中 $0<\alpha<\pi/2$、$0\le\theta<2\pi$，并画出所求区域。
3. 第三部分用上半平面的钥匙孔围道计算

   $$
   \int_0^\infty\frac{x^\beta}{(x^2+1)^2}\,dx,
   \qquad 0<\beta<1.
   $$

   第三部分的闭路依次为正实轴上从 $r$ 到 $R$ 的线段、半径 $R$ 的上半圆、负实轴上从 $-R$ 到 $-r$ 的线段、半径 $r$ 的上半圆，其中 $0<r<1<R$。分别求闭路留数积分、两段实轴积分之和，并证明 $R\to\infty$ 与 $r\to0$ 时两段圆弧积分消失，最后得到实积分。

## **Kai**
### I.
#### 1.
$M(z)=z$ より

$$
\begin{aligned}
\frac{mz}{mz-z+1} & =z \\
\mathrm{mz} & =(mz-z+1)z \\
(m-1)z(z-1) & =0
\end{aligned}
$$

となる．よって，$m≠1$ であるから，$M(z)=z$ の不動点は

$$
z=0,1
$$

解説:
$M(z)=z$ を整理すると、$(m-1)z(z-1)=0$であり、 $m \ne 1$ なので、 $z=0,1$ を得る。
実際、 $M(0)=0, M(1)=1$ である。
一次分数変換の不動点を求める問題です．
不動点とはその名の通り動かない点です．変換を施しても変化しないということです．

#### 2.

$$
\begin{aligned}
\frac{dM(z)}{dz}
&= \frac{m(mz-z+1) - mz(m-1)}{(mz-z+1)^2}
\\
&= \frac{m}{(mz-z+1)^2}
\\
\therefore \ \ 
\frac{dM(0)}{dz} &= m
\end{aligned}
$$

#### 3.

与えられた円は $0,1,-i$ を通る。$M(0)=0,M(1)=1$ であり、一次分数変換は円または直線を円または直線に写すので、必要十分条件は $M(-i)\in\mathbb R$ である。

$m=u+iv$ とおくと $u^2+v^2=1$ であり、

$$
\operatorname{Im}M(-i)
=-\frac{u+v}{(u-1)^2+(v+1)^2}.
$$

したがって $u+v=0$ より

$$
m=\pm\frac{1-i}{\sqrt2}.
$$

### II.
$0$ でない複素数 $z$ を極形式で $z=re^{i \theta} \ \ (r \gt 0, 0 \leq \theta \lt 2 \pi)$
と表すと、

$$
\begin{aligned}
J(z)
&= e^{-i \alpha} z + e^{i \alpha} z^{-1}
\\
&= r e^{i (\theta - \alpha)} + \frac{1}{r} e^{-i (\theta - \alpha)}
\\
&= \left( r + \frac{1}{r} \right) \cos (\theta - \alpha) + i \left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

なので、これの虚部

$$
\begin{aligned}
\left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

が正となるのは、「 $r \gt 1$ かつ $\alpha \lt \theta \lt \alpha + \pi$」
または「$r \lt 1$ かつ、$\theta$ が $[0,\alpha)$ または $(\alpha+\pi,2\pi)$ に属する」
のときである。

### III.

[【院試解説】東京大学 工学系研究科 2021年度 数学3 III](https://www.youtube.com/watch?v=_xETmjbNKC4)

$0\le\arg z\le\pi$ として $z^\beta$ を定める。$z=i$ は二位の極であり、

$$
\operatorname*{Res}_{z=i}\frac{z^\beta}{(z^2+1)^2}
=\left.\frac{d}{dz}\frac{z^\beta}{(z+i)^2}\right|_{z=i}
=\frac{1-\beta}{4}i^{\beta-1}.
$$

よって、図の閉曲線 $C$ について

$$
\oint_C\frac{z^\beta}{(z^2+1)^2}\,dz
=\frac{\pi(1-\beta)}{2}e^{i\pi\beta/2}.
$$

一方、直線部分の和は

$$
(1+e^{i\pi\beta})\int_r^R\frac{x^\beta}{(x^2+1)^2}\,dx
$$

である。外側と内側の半円弧上の積分は、それぞれ $O(R^{\beta-3})$、$O(r^{\beta+1})$ なので $R\to\infty,r\to0$ で消える。したがって

$$
\boxed{
\int_0^\infty\frac{x^\beta}{(x^2+1)^2}\,dx
=\frac{\pi(1-\beta)}{4\cos(\pi\beta/2)}
}.
$$
