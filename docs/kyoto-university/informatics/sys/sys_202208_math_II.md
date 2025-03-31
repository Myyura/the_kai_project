---
sidebar_label: "2022年8月実施 数学【II】"
sidebar_position: 1
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 数学【II】

## **Author**
机智的若叶

## **Description**
### 問1
以下の設問に答えよ。以降では、$e$ はネイピア数（自然対数の底）、$\pi$ は円周率を表す。

(i) $\lim_{x \rightarrow +0} x^{-1/2} (1-e^{-x})$ を求めよ。

(ii) 以下の積分を求めよ。

$$
\int_0^{\infty} x^{-3/2} (1-e^{-x}) \ dx
$$

ただし、以下が成り立つことを用いてよい。

$$
\int_0^{\infty} e^{x^2} \ dx = \frac{\pi}{2}
$$

(iii) $xy$ 平面上の閉領域 $D=\{(x,y): x \ge 0, y \ge 0, x+y \le 1\}$ に対して以下の積分を求めよ。

$$
\iint_D e^{x+y} \ dxdy
$$

(iv) 実関数 $f(x)$ および $g(x)>0$ が、それぞれすべての実数 $x$ に対して定義されていて単調増加であるとする。これらが $\lim_{x \rightarrow -\infty} \frac{f(x)}{g(x)} = 1$, $\lim_{x \rightarrow +\infty} \frac{f(x)}{g(x)} = 1$ を満たすとき、

$$
\sup_{-\infty < x < \infty} \frac{f(x)}{g(x)} < \infty
$$

が成り立つ、すなわち $\frac{f(x)}{g(x)} \le c$ がすべての実数 $x$ で成り立つような定数 $c < \infty$ が存在することを示せ。

### 問2
直交座標系 $\text{O}-xyz$ で表される3次元空間内の楕円面 $E: f(x,y,z)=0$ を考える。ただし、 

$$
f(x,y,z) = \frac{x^2}{l^2} + \frac{y^2}{m^2} + \frac{z^2}{n^2} - 1
$$

とし、$l,m,n$ は正の定数とする。以下の設問に答えよ。 

(i) 関数 $g(x,y,z)=xyzf(x,y,z)$ を考える。閉領域 $D=\{(x,y,z): f(x,y,z) \le 0\}$ において、関数 $g$ の最大値と最小値を求めよ。

(ii) 楕円面 $E$ の法線であって $E$ 上の点 $(x_0, y_0, z_0)$ を通るものの方程式を求めよ。 

(iii) 関数 $h(x,y,z)=ax+by+cz$ を最大にする楕円面 $E$ 上の点 $(x,y,z)$ を求めよ。ただし、$(a,b,c)\neq (0, 0, 0)$ とする。

(iv) 3点 $(p, 0,0), (0, q, 0), (0, 0, r)$ を含む平面が楕円面 $E$ と接している。この条件で $p,q,r$ を動かしたときに $p^2+q^2+r^2$ の最小値を求めよ。

## **Kai**
### 問1
#### (i)
$0$

#### (ii)
変数変換 $x = t^2$ を行う。

$2\sqrt{\pi}$

#### (iii)
1

#### (iv)
仮に $\lim_{x \rightarrow x_0} = \frac{f(x)}{g(x)} = \infty$  $x_0$ が存在する。
$g(x) > 0$ ので、$\lim_{x \rightarrow x_0} f(x) = \infty$ を得る。
これは $f(x)$ がすべての実数に対して定義されていて単調増加であることと矛盾し、そんな $x_0$ は存在しない。

### 問2
#### (i)

$$
\begin{aligned}
&\frac{\partial g}{\partial x} = 0, \frac{\partial g}{\partial y} = 0, \frac{\partial g}{\partial z} = 0 \\
&\Rightarrow x = \pm \frac{l}{\sqrt{5}}, y = \pm \frac{m}{\sqrt{5}}, z = \pm \frac{n}{\sqrt{5}}
\end{aligned}
$$

よって、最大値は $\frac{2 \sqrt{5} lmn}{125}$、最小値は $-\frac{2 \sqrt{5} lmn}{125}$ である。

#### (ii)
法線ベクトルは

$$
\begin{aligned}
\boldsymbol{n} &= (\frac{\partial f}{\partial x}(x_0, y_0, z_0), \frac{\partial f}{\partial }(x_0, y_0, z_0), \frac{\partial f}{\partial z}(x_0, y_0, z_0)) \\
&= (2x_0, 2y_0, 2z_0)
\end{aligned}
$$

である。

法線の方程式は

$$
\frac{x-x_0}{x_0} = \frac{y-y_0}{y_0} = \frac{z-z_0}{z_0} 
$$

#### (iii)

$$
\begin{aligned}
L( x,y,z) &= ax+by+cz+\lambda f\left( x,y,z \right)  \\
\frac{\partial L}{\partial x} &= a+\frac{2\lambda x}{l^2}=0 \\ 
\frac{\partial L}{\partial y} &= b+\frac{2\lambda y}{m^2}=0 \\
\frac{\partial L}{\partial z} &= c+\frac{2\lambda z}{n^2}=0 \\
\frac{x^2}{l^2}&+\frac{y^2}{m^2}+\frac{z^2}{n^2}-1=0
\end{aligned}
$$

よって、以下の等式が得られる。

$$
\begin{aligned}
ax+\frac{2\lambda x^2}{l^2}&=0 \\ 
by+\frac{2\lambda y^2}{m^2}&=0 \\ 
cz+\frac{2\lambda z^2}{n^2}&=0 \\ 
h\left( x,y,z \right) &= -2\lambda
\end{aligned}
$$

$x=-\frac{al^2}{2\lambda},y=-\frac{bm^2}{2\lambda},z=-\frac{cn^2}{2\lambda}$ を $f(x,y,z)$ に代入して , $h=-2\lambda$, $h$ が最大になるとき, 

$$
\begin{aligned}
\lambda &= -\frac{\sqrt{a^2l^2+b^2m^2+c^2z^2}}{2} \\ 
x &= \frac{al^2}{\sqrt{a^2l^2+b^2m^2+c^2z^2}} \\
y &= \frac{bm^2}{\sqrt{a^2l^2+b^2m^2+c^2z^2}} \\
z &=\frac{cn^2}{\sqrt{a^2l^2+b^2m^2+c^2z^2}}
\end{aligned}
$$

#### (iv)
接平面の接点を $(x_0, y_0, z_0)$ として、接平面の方程式は

$$
\frac{xx_0}{l^2}+\frac{yy_0}{m^2}+\frac{zz_0}{r^2}=1
$$

よって、

$$
\begin{aligned}
p=\frac{l^2}{x_0}, q=\frac{m^2}{y_0}, r=\frac{r^2}{z_0} \\
p^2+q^2+r^2=\frac{l^4}{{x}_0^2}+\frac{m^4}{{y}_0^2}+\frac{n^4}{{z}_0^2}
\end{aligned}
$$

原式を書き直し、

$$
u=x_{0}^{2},v=y_{0}^{2},w=z_{0}^{2}
$$

$$
E\left( u,v,w \right) = \frac{l^4}{u}+\frac{m^4}{v}+\frac{n^4}{w}+\lambda \left( \frac{u}{l^2}+\frac{v}{m^2}+\frac{w}{n^2}-1 \right)
$$

$\frac{\partial E}{\partial u}=\frac{\partial E}{\partial v}=\frac{\partial E}{\partial w}=0$ とし、
$f(x_0, y_0, z_0) = 0$ に代入すると $\lambda =\sqrt{l+m+n}$ を得る。

$$
\min  E( u,v,w) =\sqrt{( l+m+n) ^3}
$$