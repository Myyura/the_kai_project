---
sidebar_label: "2019年8月実施 専門基礎科目 第2問"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年8月実施 専門基礎科目 第2問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ.

(a) 導関数の定義を用いて、次の関数の導関数を求めよ.

$$
f(x) = \frac{2}{\sqrt{x}+1}
$$

(b) $\lim_{x\to -2} \frac{g(x)}{x^2} = 1$ のとき, $\lim_{x\to -2} g(x)$ を求めよ.
(c) 次の二重積分の値を求めよ.

$$
\int_{-1}^1 \int_{-\sqrt{1-x^2}}^0 \cos(x^2+y^2) dy dx
$$

(d) 次の関数について、以下の問に答えよ.

$$
h(x) = \log(1 + \sin x)
$$

(1) $h(x)$ のマクローリン展開を $x^3$ の項まで求めよ.
(2) $h(0.2)$ の近似値を求めよ.

### 题目描述

回答下列问题。

(a) 使用导数的定义，求函数

$$
f(x)=\frac{2}{\sqrt{x}+1}
$$

的导数。

(b) 若

$$
\lim_{x\to-2}\frac{g(x)}{x^2}=1,
$$

求

$$
\lim_{x\to-2}g(x).
$$

(c) 计算二重积分

$$
\int_{-1}^{1}
\int_{-\sqrt{1-x^2}}^{0}
\cos(x^2+y^2)\,dy\,dx.
$$

(d) 对函数

$$
h(x)=\log(1+\sin x),
$$

回答下列问题。

(1) 将 $h(x)$ 作 Maclaurin 展开，写到 $x^3$ 项为止。

(2) 求 $h(0.2)$ 的近似值。

## **Kai**

(a) 導関数の定義より、 $f'(x) = \lim_{h\to 0} \frac{f(x+h) - f(x)}{h}$ 。
$f(x+h) = \frac{2}{\sqrt{x+h}+1}$ なので、
$f'(x) = \lim_{h\to 0} \frac{\frac{2}{\sqrt{x+h}+1} - \frac{2}{\sqrt{x}+1}}{h} = \lim_{h\to 0} \frac{2(\sqrt{x}+1 - \sqrt{x+h}-1)}{h(\sqrt{x+h}+1)(\sqrt{x}+1)} = \lim_{h\to 0} \frac{2(\sqrt{x} - \sqrt{x+h})}{h(\sqrt{x+h}+1)(\sqrt{x}+1)}$
$= \lim_{h\to 0} \frac{2(x - (x+h))}{h(\sqrt{x+h}+1)(\sqrt{x}+1)(\sqrt{x} + \sqrt{x+h})} = \lim_{h\to 0} \frac{-2h}{h(\sqrt{x+h}+1)(\sqrt{x}+1)(\sqrt{x} + \sqrt{x+h})} = \frac{-2}{(\sqrt{x}+1)(\sqrt{x}+1)(2\sqrt{x})} = \frac{-1}{\sqrt{x}(\sqrt{x}+1)^2}$

したがって、通常の有限な導関数は $x>0$ で上式により与えられる。定義域の端点 $x=0$ では右差商が $-\infty$ に発散するため、有限な右微分係数は存在しない。

(b) $\lim_{x\to -2} \frac{g(x)}{x^2} = 1$ なので、 $\lim_{x\to -2} g(x) = \lim_{x\to -2} x^2 = (-2)^2 = 4$ 。

(c) 積分領域は、半径1の半円である。極座標変換を行う。 $x = r\cos\theta, y = r\sin\theta$ 。

$$
\int_{\pi}^{2\pi} \int_0^1 \cos(r^2) r dr d\theta
$$

$\int \cos(r^2) r dr = \frac{1}{2}\sin(r^2) + C$ なので、

$$
\int_{\pi}^{2\pi} \frac{1}{2}[\sin(r^2)]_0^1 d\theta
=\frac{1}{2}\sin(1)[\theta]_{\pi}^{2\pi}
=\frac{\pi}{2}\sin(1)
$$

(d) (1) $h(x) = \log(1 + \sin x)$ のマクローリン展開を求める。
$h(0) = \log(1 + \sin 0) = \log(1) = 0$
$h'(x) = \frac{\cos x}{1+\sin x}$ , $h'(0) = \frac{1}{1+0} = 1$
$h''(x) = \frac{-\sin x (1+\sin x) - \cos^2 x}{(1+\sin x)^2} = \frac{-\sin x - \sin^2 x - \cos^2 x}{(1+\sin x)^2} = \frac{-\sin x - 1}{(1+\sin x)^2} = \frac{-1}{1+\sin x}$ , $h''(0) = -1$
$h'''(x) = \frac{\cos x}{(1+\sin x)^2}$ , $h'''(0) = 1$
したがって、マクローリン展開は、 $h(x) = h(0) + h'(0)x + \frac{h''(0)}{2!}x^2 + \frac{h'''(0)}{3!}x^3 + ... = x - \frac{x^2}{2} + \frac{x^3}{6} + ...$
(2) $h(0.2) \approx 0.2 - \frac{0.2^2}{2} + \frac{0.2^3}{6} = 0.2 - 0.02 + \frac{0.008}{6} = 0.18 + \frac{0.004}{3} \approx 0.18 + 0.00133 = 0.18133$
