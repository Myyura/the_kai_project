---
sidebar_label: "2010年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 京都大学 情報学研究科 数理工学専攻 2010年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h23/h23_kiso1.pdf)

変数の関数 $f(x) = \tan^{-1}x, (f(0) = 0)$ の $n$ 次導関数を $f^{(n)}(x)$ とかく. 以下の問いに答えよ.

(i) 任意の自然数 $n$ について

$$
f^{(n)}(x) = (n-1)! \cos^n y \cdot \sin\left(n\left(y + \frac{\pi}{2}\right)\right), \quad (y = \tan^{-1}x)
$$

を示せ.

(ii)

$$
f^{(n)}(0) = \begin{cases} (-1)^m(2m)! & (n = 2m+1) \\ 0 & (n = 2m) \end{cases}
$$

が成り立つことを示せ.

(iii) 剩余項 $R_{2n}(x)$ を用いて

$$
\tan^{-1} x = \sum_{k=0}^{n-1} (-1)^k \frac{1}{2k+1} x^{2k+1} + R_{2n}(x),
$$

$$
R_{2n}(x) = \frac{1}{2n} \cos^{2n} z \cdot \sin\left(2n\left(z + \frac{\pi}{2}\right)\right) x^{2n}, \quad (z = \tan^{-1}\theta x, 0 < \theta < 1)
$$

とおくとき, $|x| \leq 1$ ならば

$$
\lim_{n \to \infty} |R_{2n}(x)| = 0
$$

となることを示せ.

(iv)

$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots
$$

を示せ.

### 题目描述

令 $f(x)=\tan^{-1}x$ 且 $f(0)=0$，以 $f^{(n)}(x)$ 表示其 $n$ 阶导数。完成以下各问：

1. 对任意自然数 $n$，证明

   $$
   f^{(n)}(x)
   =(n-1)!\cos^ny\,
   \sin\left(n\left(y+\frac{\pi}{2}\right)\right),
   \qquad y=\tan^{-1}x.
   $$

2. 证明原点处的各阶导数满足

   $$
   f^{(n)}(0)=
   \begin{cases}
   (-1)^m(2m)!,&n=2m+1,\\
   0,&n=2m.
   \end{cases}
   $$

3. 用余项 $R_{2n}(x)$ 写成

   $$
   \tan^{-1}x
   =\sum_{k=0}^{n-1}(-1)^k\frac{x^{2k+1}}{2k+1}
   +R_{2n}(x),
   $$

   其中

   $$
   R_{2n}(x)
   =\frac{1}{2n}\cos^{2n}z\,
   \sin\left(2n\left(z+\frac{\pi}{2}\right)\right)x^{2n},
   \qquad
   z=\tan^{-1}(\theta x),\quad0<\theta<1.
   $$

   证明当 $|x|\leq1$ 时，

   $$
   \lim_{n\to\infty}|R_{2n}(x)|=0.
   $$

4. 由此证明 Gregory–Leibniz 级数

   $$
   \frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots.
   $$

## **Kai**

### (i)

$y=\tan^{-1}x$ とおくと、 $x=\tan y$ であり、

$$
\frac{dy}{dx}=\frac{1}{1+x^2}=\cos^2y
$$

である。 $n=1$ のとき、

$$
0!\cos y\sin\left(y+\frac{\pi}{2}\right)
=\cos^2y=f'(x)
$$

なので、公式は成り立つ。

$n=k$ で公式が成り立つと仮定する。 $x$ で微分し、 $dy/dx=\cos^2y$ を用いると、

$$
\begin{aligned}
f^{(k+1)}(x)
&=(k-1)!\frac{d}{dy}
\left\{\cos^ky\,
\sin\left(k\left(y+\frac{\pi}{2}\right)\right)\right\}
\cos^2y\\
&=k!\cos^{k+1}y
\left\{
\cos y\cos\left(k\left(y+\frac{\pi}{2}\right)\right)
-\sin y\sin\left(k\left(y+\frac{\pi}{2}\right)\right)
\right\}\\
&=k!\cos^{k+1}y
\cos\left(k\left(y+\frac{\pi}{2}\right)+y\right)\\
&=k!\cos^{k+1}y
\sin\left((k+1)\left(y+\frac{\pi}{2}\right)\right)
\end{aligned}
$$

となる。よって数学的帰納法により、

$$
\boxed{
f^{(n)}(x)
=(n-1)!\cos^ny\,
\sin\left(n\left(y+\frac{\pi}{2}\right)\right)}
$$

がすべての自然数 $n$ について成り立つ。

### (ii)

$x=0$ では $y=0$ なので、(i) より

$$
f^{(n)}(0)=(n-1)!\sin\frac{n\pi}{2}
$$

である。したがって

$$
\boxed{
f^{(n)}(0)=
\begin{cases}
(-1)^m(2m)! & (n=2m+1),\\
0 & (n=2m)
\end{cases}}
$$

を得る。

### (iii)

$|x|\leq 1$ ならば、 $|\cos z|\leq 1$ 、 $|\sin(2n(z+\pi/2))|\leq 1$ 、および $|x|^{2n}\leq 1$ である。したがって

$$
\begin{aligned}
|R_{2n}(x)|
&=\left|
\frac{1}{2n}\cos^{2n}z\,
\sin\left(2n\left(z+\frac{\pi}{2}\right)\right)x^{2n}
\right|\\
&\leq\frac{1}{2n}
\end{aligned}
$$

となる。 $1/(2n)\to 0$ なので、はさみうちの原理により

$$
\boxed{\lim_{n\to\infty}|R_{2n}(x)|=0}
$$

である。

### (iv)

(iii) のテイラー展開で $x=1$ とすると、

$$
\tan^{-1}1
=\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}
$$

である。 $\tan^{-1}1=\pi/4$ より、

$$
\boxed{
\frac{\pi}{4}
=1-\frac13+\frac15-\frac17+\cdots}
$$

が示された。
