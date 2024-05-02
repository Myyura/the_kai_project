---
comments: false
description: 東京大学 大学院 工学系研究科 2021年度 数学1
keywords: Tokyo-University, 2021-8
---

## Source
[東京大学 大学院 工学系研究科 2021年度 数学1 (主に微分積分・微分方程式)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## Description

## Kai
### I.
#### 1.

$$
\begin{align}
y(x)
&= (\arccos x)^{\log x}
\\
&= e^{\log x \cdot \log (\arccos x)}
\end{align}
$$

なので、

$$
\begin{align}
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
\end{align}
$$

#### 2.
積分定数を $C$ で表す。

$p=0$ のときは、

$$
\begin{align}
\int \frac{x^2+x+2}{x^3} dx
&= \int \left( \frac{1}{x} + \frac{1}{x^2} + \frac{2}{x^3} \right) dx
\\
&= \log |x| - \frac{1}{x} - \frac{1}{x^2} + C
\end{align}
$$

であり、 $p \ne 0$ のときは、

$$
\begin{align}
\int \frac{x^2+x+2}{x^3-px^2} dx
&= \int \frac{x^2+x+2}{x^2(x-p)} dx
\\
&= \frac{1}{p^2} \int \left(
- \frac{p+2}{x} - \frac{2p}{x^2} + \frac{p^2+p-2}{x-p} \right) dx
\\
&= \frac{1}{p^2} \left(
- (p+2) \log |x| + \frac{2p}{x} + (p^2+p-2) \log |x-p| \right) + C
\end{align}
$$

である。

#### 3.
$x = \sin \phi \ \ (0 \leq \phi \leq \theta \lt \pi/2)$ とすると、
$dx = \cos \phi d \phi$ なので、

$$
\begin{align}
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
\end{align}
$$

を得る。

### II.
#### 1.

$$
\begin{align}
\frac{df(x)}{dx}
&= \frac{dp(x)}{dx} \exp (iax) + iap(x) \exp (iax)
\\
&= -ibq(x) \exp (-iax) + iap(x) \exp (iax)
\\
&= iaf(x) - ibg(x)
\\
\frac{dg(x)}{dx}
&= \frac{dq(x)}{dx} \exp (iax) - iaq(x) \exp (-iax)
\\
&= -ibp(x) \exp (iax) - iaq(x) \exp (-iax)
\\
&= -ibf(x) - iag(x)
\end{align}
$$

#### 2.
複素数 $A$ の複素共役を $\bar{A}$ で表す。

$$
\begin{align}
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
\end{align}
$$

なので、

$$
\begin{align}
\frac{d}{dx} \left( \left| f(x) \right|^2 + \left| g(x) \right|^2 \right) = 0
\end{align}
$$

がわかる。つまり、
$\left| f(x) \right|^2 + \left| g(x) \right|^2$
は $x$ に依存しない。