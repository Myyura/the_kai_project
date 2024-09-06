---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 ベクトル解析
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 ベクトル解析

## **Author**
Miyake, Casablanca

## **Description**
直交座標系において，$x, y, z$ 軸方向の単位ベクトルをそれぞれ $\boldsymbol{i}, \boldsymbol{j}, \boldsymbol{k}$ とする．
ベクトル場 $\boldsymbol{F}$ を $\boldsymbol{F} = x\boldsymbol{i} + 2y\boldsymbol{j} + 10z\boldsymbol{k}$ とする．次の面 $S_1$, $S_2$ 及び $S_3$ に対する面積分を計算せよ．

(1) $S_1$ を円筒面 $x^2 + z^2 = 1\ (0 \le y \le 4)$ とする(上面と底面の無い円筒の表面)．円筒外向き法線ベクトルを用いよ．

(2) $S_2$ を円筒面の一部 $x^2 + z^2 = 1\ (0 \le y \le 4, 0 \le z)$ と長方形面 $z = 0\ (-1 \le x \le 1, 0 \le y \le 4)$ からなる半円筒面とする (上面と底面の無い半円筒の表面)．半円筒外向き法線ベクトルを用いよ．

(3) $S_3$ を円筒面 $x^2 + z^2 = 1$ と，平面 $z = 0, y=0, x+y=4$ で囲まれた領域の境界とする．外向き法線ベクトルを用いよ.

## **Kai**
### (1)
$S_1$ 上の点は

$$
  \begin{aligned}
  \boldsymbol{i} \cos \varphi + y \boldsymbol{j} + \boldsymbol{k} \sin \varphi
  \ \ \ \ 
  (0 \leq \varphi \lt 2 \pi, \ \ 0 \leq y \leq 4)
  \end{aligned}
$$

と表せる。
$S_1$ の外向きの単位法線ベクトルを $\boldsymbol{n}$ とすると、

$$
  \begin{aligned}
  \boldsymbol{n}
  &= \boldsymbol{i} \cos \varphi + \boldsymbol{k} \sin \varphi
  \\
  \boldsymbol{F}
  &= \boldsymbol{i} \cos \varphi + 2y \boldsymbol{j}
  + 10 \boldsymbol{k} \sin \varphi
  \\
  \boldsymbol{F} \cdot \boldsymbol{n}
  &= \cos^2 \varphi + 10 \sin^2 \varphi
  \\
  &= \frac{11}{2} - \frac{9}{2} \cos 2 \varphi
  \end{aligned}
$$

なので、求める積分は

$$
  \begin{aligned}
  \int_{S_1} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_0^{2 \pi} d \varphi \int_0^4 dy
  \left( \frac{11}{2} - \frac{9}{2} \cos 2 \varphi \right)
  \\
  &= 44 \pi
  \end{aligned}
$$

である。

### (2)
$S_2$ を次のように2つに分けて考える：

$$
  \begin{aligned}
  S_2' \ &: \ \ x^2 + z^2 = 1 \ \ (0 \leq y \leq 4, \ 0 \leq z)
  , \\
  S_2'' \ &: \ \ z=0 \ \ (-1 \leq x \leq 1, \ 0 \leq y \leq 4)
  .
  \end{aligned}
$$

$S_2'$ 上では (1) と同様に計算できる：

$$
  \begin{aligned}
  \int_{S_2'} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_0^{\pi} d \varphi \int_0^4 dy
  \left( \frac{11}{2} - \frac{9}{2} \cos 2 \varphi \right)
  \\
  &= 22 \pi
  .
  \end{aligned}
$$

$S_2''$ 上では、外向き単位法線ベクトルは
$\boldsymbol{n} = - \boldsymbol{k}$ で、
$\boldsymbol{F} = x \boldsymbol{i} + 2y \boldsymbol{j}$ なので、
$\boldsymbol{F} \cdot \boldsymbol{n} = 0$ であり、
面積分は $0$ である。

よって、求める積分は

$$
  \begin{aligned}
  \int_{S_2} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_{S_2'} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  \\
  &= 22 \pi
  \end{aligned}
$$

である。

### (3)

$$
\begin{aligned}
\nabla \cdot \boldsymbol{F} &= \frac{\partial}{\partial x} (x) + \frac{\partial}{\partial y} (2y) + \frac{\partial}{\partial z} (10z) \\
&= 1 + 2 + 10 = 13
\end{aligned}
$$

$$
\begin{aligned}
\oiint_S \boldsymbol{F} \cdot d \boldsymbol{S} &= \iiint_{\Omega} 13\ dV = 26 \pi
\end{aligned}
$$
