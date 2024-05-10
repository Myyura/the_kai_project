---
comments: false
description: 京都大学 大学院 情報学研究科 知能情報学専攻 2021年実施 情報学基礎 F1-2
keywords: Kyoto-University, 2021
---

## **Source**
京都大学 大学院 情報学研究科 知能情報学専攻 2021年実施 情報学基礎 F1-2

By: Miyake

## **Description**
### 日本語版
#### 設問1
以下の問いに答えよ。

(1) 以下の関数について、 導関数を $y$ のみを用いて表せ。 また、その導関数の値域を示せ。

 - A) $y = f(x) = \frac{1}{1 + \exp(-x)}$
 - B) $y = f(x) = \frac{\exp(x) - \exp(-x)}{\exp(x) + \exp(-x)}$

(2) $x^2 + y^2 - 1 = 0$ 及び $0 \le x,y \le 1$ の条件の下、$f(x, y) = x^3 + 2y^3$ の極値を求めよ。

#### 設問2
地面に直立した半径 $1[m]$ の円筒がある。 ヤギの首に長さ $\pi[m]$ の伸び縮みしないヒモが結び付けられている。 このヒモのもう一端は円筒表面の一点（首と同じ高さ）に結び付けられている。

(1) 円筒の中心軸を原点とし、ヒモの結び付けられている円筒上の点を $(-1,0)$ とする $2$ 次元座標系を地面上で考えたとき、$x \ge -1, y \ge 0$ において、ヤギがヒモをたるませずに立っているときの2次元座標を $x$ 軸からの角度 $\theta$ を用いて表せ。

(2) このヤギがヒモをたるませずに円筒周りを一周したとき、その総移動距離を求めよ。

(3) このヤギが歩き回れる地面の面積を求めよ。


### English Version
#### Q.1
Answer the following questions.

(1) Express the derivative function for each of the following functions using only $y$ and show the range of the derivative function.

 - A) $y = f(x) = \frac{1}{1 + \exp(-x)}$
 - B) $y = f(x) = \frac{\exp(x) - \exp(-x)}{\exp(x) + \exp(-x)}$

(2) Compute the extrema of $f(x, y) = x^3 + 2y^3$ when $x^2 + y^2 - 1 = 0$ and $0 \le x,y \le 1$.

#### Q.2
A cylinder of $1[m]$ radius is erected perpendicularly on the ground. A goat is on a leash
of $\pi[m]$ that neither stretches nor compresses. The other end of the leash is tied to a surface
point of the cylinder at the same height.

(1) Consider a two-dimensional coordinate frame with its origin at the center axis of the
cylinder and where the point of attachment of the leash on the cylinder is $(-1, 0)$.
Using angle $\theta$ from the $x$ axis, express the 2D coordinates of the goat when she is standing without any slack to the leash for $x \ge 1,y \ge 0$.

(2) Derive the total distance the goat would travel when going around the cylinder once without
any slack to the leash.

(3) Derive the total area of the ground the goat can cover.

## **Kai**
### 設問1
#### (1)
##### A) 
まず、 $y=1/(1+\exp(-x))$ より、 $\exp(-x) = (1-y)/y$ である。
よって、

$$
\begin{aligned}
\frac{dy}{dx}
&= \frac{d}{dx} \frac{1}{1 + \exp(-x)}
\\
&= \frac{\exp(-x)}{\left( 1 + \exp(-x) \right)^2}
\\
&= y(1-y)
\\
&= -y^2 + y
\end{aligned}
$$

である。

$dy/dx$ を $x$ で表した式からわかるように、
任意の実数 $x$ について、 $dy/dx \gt 0$ である。
また、

$$
\begin{aligned}
\lim_{x \to -\infty} y = 0
, \ \ 
\lim_{x \to \infty} y = 1
\end{aligned}
$$

なので、 $y$ の値域は $(0,1)$ である。
さらに、

$$
\begin{aligned}
\frac{dy}{dx}
&= - \left( y - \frac{1}{2} \right)^2 + \frac{1}{4}
\end{aligned}
$$

と書き換えられるので、 $dy/dx$ の値域は $(0,1/4]$ である。

##### B)
まず、

$$
\begin{aligned}
\frac{dy}{dx}
&= \frac{d}{dx} \frac{\exp(x) - \exp(-x)}{\exp(x) + \exp(-x)}
\\
&= \frac{4}{\left( \exp(x) + \exp(-x) \right)^2}
\\
&= -y^2 + 1
\end{aligned}
$$

である。

$dy/dx$ を $x$ で表した式からわかるように、
任意の実数 $x$ について、 $dy/dx \gt 0$ である。
また、

$$
\begin{aligned}
\lim_{x \to -\infty} y = -1
, \ \ 
\lim_{x \to \infty} y = 1
\end{aligned}
$$

なので、 $y$ の値域は $(-1,1)$ である。
そこで、 $dy/dx$ を $y$ で表した式からわかるように、
$dy/dx$ の値域は $(0,1]$ である。

#### (2)
まず、条件 $x^2+y^2-1=$ より、 $x = \cos \theta, y = \sin \theta$ と表せる。

また、条件 $0 \leq x, y \leq 1$ は $0 \leq \theta \leq \pi/2$ に相当する。

$f(x,y)$ を $\theta$ で表した関数を $g(\theta)$ と書く：

$$
\begin{aligned}
g(\theta) = \cos^3 \theta + 2 \sin^3 \theta
\end{aligned}
$$

このとき、

$$
\begin{aligned}
\frac{dg(\theta)}{d \theta} = 3 \sin \theta \cos \theta (- \cos \theta + 2 \sin \theta)
\end{aligned}
$$

なので、増減表は次のようになる
（ $\alpha$ は $\tan \alpha = 1/2$ を満たす）：

$$
\begin{array}
{c|ccccccc}
\theta     & \cdots & 0 & \cdots & \alpha & \cdots & \pi/2 & \cdots \\ \hline
g'(\theta) & + & 0 & – & 0 & + & 0 & - \\ \hline
g(\theta)  & \nearrow & 1 & \searrow & 2/\sqrt{5} & \nearrow & 2 & \searrow
\end{array}
$$

よって、求める極値は、極大値 $1,2$ と極小値 $2/\sqrt{5}$ である。

### 設問2