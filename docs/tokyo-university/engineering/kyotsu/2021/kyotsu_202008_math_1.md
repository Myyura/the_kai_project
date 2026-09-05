---
sidebar_label: '2020年8月実施 数学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 数学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_1.pdf)

### I.
1. $0<x<1$、$0<\arccos x<\pi/2$ における $y=(\arccos x)^{\log x}$ の導関数を求める。
2. 実定数 $p$ に対し $\int (x^2+x+2)/(x^3-px^2)\,dx$ を計算する。
3. $0<\theta<\pi/2$ に対し
$$\int_0^{\sin\theta}\frac{\arctan(\arcsin x)}{\sqrt{1-x^2}}\,dx$$
を求める。

### II.
実定数 $a,b$ と複素数値関数 $p,q$ が
$$p'=-ibq\,e^{-2iax},\qquad q'=-ibp\,e^{2iax}$$
を満たす。

1. $f=pe^{iax}$、$g=qe^{-iax}$ と変換して $f,g$ の連立微分方程式を導く。
2. $|f|^2+|g|^2$ が $x$ に依存しないことを示す。
3. $a=0.8,b=0.6,f(0)=1,g(0)=0$ の場合の $f,g$ を求める。

### 题目描述

1. 第一部分包括三项计算：
   - 在 $0<x<1$、$0<\arccos x<\pi/2$ 内求 $y(x)=(\arccos x)^{\log x}$ 的导数；
   - 对实参数 $p$，分别在 $p=0$ 与 $p\ne0$ 时计算

     $$
     \int\frac{x^2+x+2}{x^3-px^2}\,\mathrm dx;
     $$

   - 对 $0<\theta<\pi/2$，计算

     $$
     I=\int_0^{\sin\theta}
     \frac{\arctan(\arcsin x)}{\sqrt{1-x^2}}\,\mathrm dx.
     $$

2. 第二部分设 $a,b$ 为实常数，复函数满足 $p\prime=-ibq e^{-2iax}$、$q\prime=-ibp e^{2iax}$。令 $f=pe^{iax}$、$g=qe^{-iax}$，先导出

   $$
   f' = iaf-ibg,\qquad g'=-ibf-iag
   $$

   并要求证明 $|f(x)|^2+|g(x)|^2$ 与 $x$ 无关；最后在 $a=0.8,b=0.6,f(0)=1,g(0)=0$ 下求解该方程组。

## **Kai**
### I.
#### 1.

$$
\begin{aligned}
y(x)
&= (\arccos x)^{\log x}
\\
&= e^{\log x \cdot \log (\arccos x)}
\end{aligned}
$$

なので、

$$
\begin{aligned}
\frac{dy(x)}{dx}
&= (\arccos x)^{\log x} \cdot
\frac{d}{dx} \left( \log x \cdot \log (\arccos x) \right)
\\
&= (\arccos x)^{\log x}
\left( \frac{1}{x} \cdot \log (\arccos x) + \log x \cdot
\frac{-\frac{1}{\sqrt{1-x^2}}}{\arccos x} \right)
\\
&= (\arccos x)^{\log x}
\left( \frac{\log (\arccos x)}{x} - 
\frac{\log x}{\arccos x \sqrt{1-x^2}} \right)
\end{aligned}
$$

解説:
関数 $y(x)$ は

$$
y(x)=f(x)^{g(x)}
$$

という形をしているので，対数微分を行うことにより導関数を求めることができます．

#### 2.
積分定数を $C$ で表す。

$p=0$ のときは、

$$
\begin{aligned}
\int \frac{x^2+x+2}{x^3} dx
&= \int \left( \frac{1}{x} + \frac{1}{x^2} + \frac{2}{x^3} \right) dx
\\
&= \log |x| - \frac{1}{x} - \frac{1}{x^2} + C
\end{aligned}
$$

であり、 $p \ne 0$ のときは、

$$
\begin{aligned}
\int \frac{x^2+x+2}{x^3-px^2} dx
&= \int \frac{x^2+x+2}{x^2(x-p)} dx
\\
&= \frac{1}{p^2} \int \left(
- \frac{p+2}{x} - \frac{2p}{x^2} + \frac{p^2+p+2}{x-p} \right) dx
\\
&= \frac{1}{p^2} \left(
- (p+2) \log |x| + \frac{2p}{x} + (p^2+p+2) \log |x-p| \right) + C
\end{aligned}
$$

である。

#### 3.
$x = \sin \phi \ \ (0 \leq \phi \leq \theta \lt \pi/2)$ とすると、
$dx = \cos \phi d \phi$ なので、

$$
\begin{aligned}
I
&= \int_0^{\sin \theta} \frac{\arctan(\arcsin x)}{\sqrt{1-x^2}} dx
\\
&= \int_0^\theta \frac{\arctan \phi}{\cos \phi} \cdot \cos \phi d \phi
\\
&= \int_0^\theta \arctan \phi d \phi
\\
&= \left[ \phi \arctan \phi \right]_0^\theta - \int_0^\theta \frac{\phi}{1+\phi^2} d \phi
\\
&= \theta \arctan \theta - \frac{1}{2} \left[ \log \left(1 + \phi^2 \right) \right]_0^\theta
\\
&= \theta \arctan \theta - \frac{1}{2} \log \left(1 + \theta^2 \right)
\end{aligned}
$$

を得る。

### II.
#### 1.

$$
\begin{aligned}
\frac{df(x)}{dx}
&= \frac{dp(x)}{dx} \exp (iax) + iap(x) \exp (iax)
\\
&= -ibq(x) \exp (-iax) + iap(x) \exp (iax)
\\
&= iaf(x) - ibg(x)
\\
\frac{dg(x)}{dx}
&= \frac{dq(x)}{dx} \exp (-iax) - iaq(x) \exp (-iax)
\\
&= -ibp(x) \exp (iax) - iaq(x) \exp (-iax)
\\
&= -ibf(x) - iag(x)
\end{aligned}
$$

#### 2.
複素数 $A$ の複素共役を $\bar{A}$ で表す。

$$
\begin{aligned}
\frac{d}{dx} \left| f(x) \right|^2
&= \frac{d \overline{f(x)}}{dx} \cdot f(x) + \overline{f(x)} \cdot \frac{df(x)}{dx}
\\
&= \left( - ia \overline{f(x)} + ib \overline{g(x)} \right) f(x)
+ \overline{f(x)} \left( ia f(x) - ib g(x) \right)
\\
\frac{d}{dx} \left| g(x) \right|^2
&= \frac{d \overline{g(x)}}{dx} \cdot g(x) + \overline{g(x)} \cdot \frac{dg(x)}{dx}
\\
&= \left( ib \overline{f(x)} + ia \overline{g(x)} \right) g(x)
+ \overline{g(x)} \left( -ib f(x) - ia g(x) \right)
\end{aligned}
$$

なので、

$$
\begin{aligned}
\frac{d}{dx} \left( \left| f(x) \right|^2 + \left| g(x) \right|^2 \right) = 0
\end{aligned}
$$

がわかる。つまり、
$\left| f(x) \right|^2 + \left| g(x) \right|^2$
は $x$ に依存しない。

#### 3.
$\boldsymbol{u}=(f,g)^T$ とおくと

$$
\boldsymbol{u}'
=i\begin{pmatrix}4/5&-3/5\\-3/5&-4/5\end{pmatrix}\boldsymbol{u}.
$$

右辺の実行列の二乗は単位行列なので、初期条件より

$$
\begin{aligned}
f(x)&=\cos x+\frac{4i}{5}\sin x,\\
g(x)&=-\frac{3i}{5}\sin x.
\end{aligned}
$$
