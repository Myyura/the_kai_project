---
sidebar_label: "2014年度 問題2（数学）"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 大阪大学 工学研究科 機械工学専攻 2014年度 数学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下の問いに答えなさい。

1. 複素数 $z=x+iy$ の複素数値関数 $f(z)=u+iv$ を考える。ただし、$i$ は虚数単位、$x,y$ は実数、$u,v$ は $x,y$ の実数値関数である。次式が成り立つとき、$u,v$ の間に成り立つ関係を示しなさい。ただし、$\delta x,\delta y$ は実数とする。

   $$
   \lim_{\delta x\to0}\frac{f(z+\delta x)-f(z)}{\delta x}
   =\lim_{\delta y\to0}\frac{f(z+i\delta y)-f(z)}{i\delta y}.
   $$

2. $c$ を任意の複素数定数とするとき、$\cos cz$ が (1) で得られた関係を満たすことを示しなさい。
3. 任意の正則関数 $f(z)$ に対して、次式を満たす関数 $g(z)$ が定数となることを示し、その定数を求めなさい。ただし、$f'(z)$ は $f(z)$ の導関数である。

   $$
   \left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right)|f(z)|^2
   =g(z)|f'(z)|^2.
   $$

#### 题目描述

1. 令 $z=x+iy$、$f(z)=u(x,y)+iv(x,y)$，其中 $x,y,u,v$ 均为实数，$i$ 为虚数单位。若沿实轴与虚轴方向计算的差商极限相等，即上式成立，求 $u,v$ 应满足的关系。
2. 对任意复常数 $c$，证明 $\cos cz$ 满足第 (1) 问的关系。
3. 对任意全纯函数 $f(z)$，证明使 $\left(\partial_x^2+\partial_y^2\right)|f(z)|^2=g(z)|f'(z)|^2$ 成立的公共系数 $g(z)$ 为常数，并求其值。

## **Kai**

### (1)

実軸方向と虚軸方向の差商の極限は、それぞれ

$$
u_x+iv_x,\qquad \frac{u_y+iv_y}{i}=v_y-iu_y
$$

である。実部と虚部を比較すると、Cauchy–Riemann の関係式

$$
\boxed{u_x=v_y,\qquad u_y=-v_x}
$$

を得る。

### (2)

$c=\alpha+i\beta$ とし、$\xi=\alpha x-\beta y$、$\eta=\beta x+\alpha y$ とおく。$cz=\xi+i\eta$ より

$$
\cos cz=\cos\xi\cosh\eta-i\sin\xi\sinh\eta,
$$

すなわち $u=\cos\xi\cosh\eta$、$v=-\sin\xi\sinh\eta$ である。したがって

$$
\begin{aligned}
u_x&=-\alpha\sin\xi\cosh\eta+\beta\cos\xi\sinh\eta=v_y,\\
u_y&=\beta\sin\xi\cosh\eta+\alpha\cos\xi\sinh\eta=-v_x.
\end{aligned}
$$

よって任意の複素数定数 $c$ に対して (1) の関係が成り立つ。

### (3)

正則関数の実部 $u$ と虚部 $v$ は調和関数なので、$\Delta u=\Delta v=0$ である。よって

$$
\begin{aligned}
\Delta|f|^2
&=\Delta(u^2+v^2)\\
&=2(u_x^2+u_y^2+v_x^2+v_y^2)+2u\Delta u+2v\Delta v\\
&=4(u_x^2+v_x^2)=4|f'(z)|^2.
\end{aligned}
$$

ここで3行目には Cauchy–Riemann の関係を用いた。すべての正則関数に共通する係数は

$$
\boxed{g(z)=4}.
$$

実際、$f(z)=z$ を選べば $|f'|^2=1$ であるから、係数が $4$ に定まることも分かる。
