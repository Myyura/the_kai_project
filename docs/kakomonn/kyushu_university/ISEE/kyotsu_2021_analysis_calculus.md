---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年度 解析学・微積分
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2021年度 解析学・微積分

## **Author**
Yu

## **Description**
### 微分積分
$\mathbb{R}$ 上の関数

$$
f(x,y) = (x + y)\exp \big(-\frac{x^2+y^2}{2}\big)
$$

について次の各問いに答えよ．

(1) $f$ の停留点を全て求めよ．

(2) $f$ の極大点と極小点を全て求めよ．

(3) $f$ の最大値または最小値が存在する場合，それらを求めよ．

### 微分方程式
次の微分方程式の一般解を求めよ．

(1)

$$
\frac{\text{d}y}{\text{d}x} = \frac{x^2 + 6y^2}{4xy}
$$

(2)

$$
\frac{\text{d}y}{\text{d}x} = e^{2x + y + 1} - 1
$$

### 複素関数論
次の各問に答えよ．

(1) 複素関数 $f(z) = \frac{1}{z(z - 2)^2}$ を $z = 0$ でローラン展開せよ．

(2) 複素関数 $g(z) = z\sin\frac{1}{z + 2}$ を $z = −2$ でローラン展開し，級数が収束する領域を示せ．
次に，$z = −2$ における留数を求めよ．

## **Kai** 
### 微分積分
#### (1)

$$
\begin{aligned}
\frac{\partial f}{\partial x} &= (1 - x(x + y))e^{-\frac{x^2 + y^2}{2}} \\
\frac{\partial f}{\partial y} &= (1 - y(x + y))e^{-\frac{x^2 + y^2}{2}} \\
&\frac{\partial f}{\partial x} = \frac{\partial f}{\partial y} = 0 \\
(x , y) &= (\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}) \text{or} (-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2})
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
A &= \frac{\partial^2 f}{\partial x^2} = (x^3 + x^2y - 3x - y)e^{-\frac{x^2 + y^2}{2}} \\
B &= \frac{\partial^2 f}{\partial x \partial y} = (x^2y + xy^2 - x - y)e^{-\frac{x^2 + y^2}{2}} \\
C &= \frac{\partial^2 f}{\partial y^2} = (y^3 + xy^2 - 3y - x)e^{-\frac{x^2 + y^2}{2}}
\end{aligned}
$$

$$
(x,y) = (\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2})\text{ のとき,}
$$

$$
\begin{aligned}
A &= -\frac{3\sqrt{2}}{2}e^{-\frac{1}{2}} < 0 \quad B = -\frac{\sqrt{2}}{2}e^{-\frac{1}{2}} \quad C = -\frac{3\sqrt{2}}{2}e^{-\frac{1}{2}} \\
D &= AC - B^2 = 4e^{-1} > 0 \Rightarrow (\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2})\text{ は極大点です.}
\end{aligned}
$$

$$
(x,y) = (-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2})\text{ のとき,}
$$

$$
\begin{aligned}
A &= \frac{3\sqrt{2}}{2}e^{-\frac{1}{2}} > 0 \quad B = \frac{\sqrt{2}}{2}e^{-\frac{1}{2}} \quad C = \frac{3\sqrt{2}}{2}e^{-\frac{1}{2}} \\
D &= AC - B^2 = 4e^{-1} > 0 \Rightarrow (-\frac{\sqrt{2}}{2},-\frac{\sqrt{2}}{2})\text{ は極小点です.}
\end{aligned}
$$

#### (3)

$$
\text{最大値: }f(\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}) = \sqrt{2}e^{-\frac{1}{2}}
$$

$$
\text{最小値: }f(-\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2}) = -\sqrt{2}e^{-\frac{1}{2}}
$$

### 微分方程式
#### (1)

$$
\frac{\text{d}y}{\text{d}x} = \frac{x}{4y} + \frac{3y}{2x}
$$

$$
y = ux\text{ とすると, }\frac{\text{d}y}{\text{d}x} = \frac{\text{d}u}{\text{d}x}x + u
$$

$$
\frac{\text{d}u}{\text{d}x}x + u = \frac{1}{4u} + \frac{3u}{2}
$$

$$
\frac{1}{x}\text{d}x = \frac{1}{2u^2 + 1}\text{d}(2u^2)
$$

$$
\ln|x| + C_1 = \ln|1 + 2u^2|
$$

$$
1 + 2u^2 = e^{C_1}x
$$

$$
u = \pm\frac{\sqrt{2(Cx - 1)}}{2}(C = e^{C_1})
$$

$$
y = ux = \pm\frac{2(Cx - 1)}{2}x(C = e^{C_1})
$$

#### (2)

$$
\frac{\text{d}y}{\text{d}x} = e^{y}(e^{2x+1} - e^{-y})
$$

$$
\frac{\text{d}y}{\text{d}x}e^{-y} = e^{2x+1} - e^{-y}
$$

$$
t = e^{-y} > 0 \text{ とすると, }\frac{\text{d}t}{\text{d}x} = -\frac{\text{d}y}{\text{d}x}e^{-y}
$$

$$
\frac{\text{d}t}{\text{d}x} = t - e^{2x + 1} \Rightarrow \frac{\text{d}t}{\text{d}x} - t = -e^{2x + 1}
$$

$$
P(x) = 1 \quad Q(x) = -e^{2x + 1}
$$

$$
t = e^{-\int P(x)\text{d}x}\big(\int Q(x)e^{\int P(x)\text{d}x}\text{d}x + C\big) = e^{x}(-e^{x + 1} + C)
$$

$$
e^{-y} = e^{x}(-e^{x + 1} + C)
$$

$$
y = -\ln(e^{x}(-e^{x + 1} + C))
$$

### 複素関数論
#### (1)

$$
0 < |z| < 2 \text{ のとき, }
$$

$$
\begin{aligned}
f(z) &= \frac{1}{z}\bigg(\frac{1}{2 - z}\bigg)' = \frac{1}{2z}\bigg(\frac{1}{1 - \frac{z}{2}}\bigg)' = \frac{1}{2z}\bigg(\sum_{n = 0}^{\infty}\big(\frac{z}{2}\big)^{n}\bigg)' \\
&= \frac{1}{2z}\sum_{n = 1}^{\infty}\frac{1}{2}n\big(\frac{z}{2}\big)^{n - 1} = \frac{1}{4z}\sum_{m = 0}^{\infty}(m + 1)\big(\frac{z}{2}\big)^{m}
\end{aligned}
$$

$$
|z| > 2 \text{ のとき, }
$$

$$
\begin{aligned}
f(z) &= \frac{1}{z}\bigg(\frac{1}{2 - z}\bigg)' = -\frac{1}{2z}\bigg(\frac{1}{1 - \frac{2}{z}}\bigg)' = -\frac{1}{2z}\bigg(\sum_{n = 0}^{\infty}\big(\frac{2}{z}\big)^{n}\bigg)' \\
&= -\frac{1}{2z}\sum_{n = 1}^{\infty}\frac{-2}{z^2}n\big(\frac{2}{z}\big)^{n - 1} = \frac{1}{z^3}\sum_{m = 0}^{\infty}(m + 1)\big(\frac{2}{z}\big)^{m}
\end{aligned}
$$

#### (2)

$$
z + 2 = u \text{ とすれば, }z = u - 2 \text{ より, }
$$

$$
\begin{aligned}
g(z) &= (u - 2)\sin\frac{1}{u} \\
&= (u - 2)\bigg(\frac{1}{u} - \frac{1}{3
!u^3 } + \frac{1}{5!u^5} - \cdots\bigg) \\
&= 1 - \frac{2}{u} - \frac{1}{3!u^2} + \frac{2}{3!u^3} + \frac{1}{5!u^4} - \cdots \\
&= 1 - \frac{2}{z + 2} - \frac{1}{3!(z + 2)^2} + \frac{2}{3!(z + 2)^3} + \frac{1}{5!(z + 2)^4} - \cdots 
\end{aligned}
$$

$$
z = -2 \text{ における留数は } -2
$$

$$
\text{ この級数が収束する領域は，複素平面全体から点 }z = -2\text{ を除いた領域である。}
$$