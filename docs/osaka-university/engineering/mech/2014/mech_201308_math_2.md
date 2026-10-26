---
sidebar_label: "2013年8月実施 問題2（数学）"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 数学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

以下の問いに答えなさい。

(1) 複素数 $z=x+iy$ の複素数値関数 $f(z)=u+iv$ を考える。ここで、$i$ は虚数単位であり、$x$ と $y$ は実数、$u$ と $v$ は $x$ と $y$ の実数値関数である。次式が成り立つとき、$u$ と $v$ の関係を示しなさい。ただし $\delta x,\delta y$ は実数とする。

$$
\lim_{\delta x\to0}\frac{f(z+\delta x)-f(z)}{\delta x}
=\lim_{\delta y\to0}\frac{f(z+i\delta y)-f(z)}{i\delta y}
$$

(2) $c$ を任意の複素数の定数とするとき、$\cos cz$ が小問 (1) で求めた関係式を満たすことを示しなさい。

(3) 任意の正則な関数 $f(z)$ に対し、次式を満たす関数 $g(z)$ が定数となることを示しなさい。また、その定数の値を求めなさい。ただし $f'(z)$ は $f(z)$ の $z$ に関する導関数である。

$$
\frac{\partial^2(|f(z)|^2)}{\partial x^2}
+\frac{\partial^2(|f(z)|^2)}{\partial y^2}
=g(z)|f'(z)|^2
$$

### 题目描述

问题2（使用白色答题纸）

回答下列问题。

(1) 考虑复数 $z=x+iy$ 的复值函数 $f(z)=u+iv$。其中 $i$ 为虚数单位，$x,y$ 为实数，$u,v$ 为 $x,y$ 的实值函数。当下式成立时，给出 $u$ 与 $v$ 的关系。$\delta x,\delta y$ 均为实数。

$$
\lim_{\delta x\to0}\frac{f(z+\delta x)-f(z)}{\delta x}
=\lim_{\delta y\to0}\frac{f(z+i\delta y)-f(z)}{i\delta y}
$$

(2) 设 $c$ 为任意复常数，证明 $\cos cz$ 满足 (1) 所得的关系式。

(3) 对任意解析函数 $f(z)$，证明满足下式的函数 $g(z)$ 为常数，并求该常数值。其中 $f'(z)$ 是 $f(z)$ 关于 $z$ 的导数。

$$
\frac{\partial^2(|f(z)|^2)}{\partial x^2}
+\frac{\partial^2(|f(z)|^2)}{\partial y^2}
=g(z)|f'(z)|^2
$$

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
