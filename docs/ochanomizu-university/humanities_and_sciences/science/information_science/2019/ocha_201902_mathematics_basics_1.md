---
sidebar_label: "2019年2月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Parametric-Differentiation
  - Mathematics.Calculus.Volume-of-Revolution-by-Washers
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2019年2月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]
関数

$$
f(x)=x(\log x)^2 \qquad (x>0)
$$

について、次の問いに答えよ。

1. $f'(x)$ および $f''(x)$ を求めよ。
2. $\displaystyle\lim_{x\to+0}f(x)$ および $\displaystyle\lim_{x\to+0}f'(x)$ を求めよ。
3. $f(x)$ の増減と凹凸を調べ、グラフの概形を描け。

### [2]
$a>0$ とし、曲線

$$
x=a(t-\sin t),\qquad y=a(1-\cos t)\qquad(0\le t\le2\pi)
$$

について、次の問いに答えよ。

1. 曲線と $x$ 軸で囲まれた領域の面積を求めよ。
2. その領域を $x$ 軸の回りに回転してできる回転体の体積を求めよ。

### 题目描述

1. 对 $f(x)=x(\log x)^2\ (x>0)$，求一、二阶导数与 $x\to0^+$ 时的两个极限，并讨论单调性、凹凸性及函数图像。
2. 对摆线 $x=a(t-\sin t),\ y=a(1-\cos t)$（$a>0$、$0\le t\le2\pi$）的一拱，求曲线与 $x$ 轴围成的面积，以及该区域绕 $x$ 轴旋转所得旋转体的体积。

## **Kai**

### [1]

#### (1)

$$
\begin{aligned}
f'(x)&=(\log x)^2+2\log x
      =\log x(\log x+2),\\
f''(x)&=\frac{2(\log x+1)}{x}.
\end{aligned}
$$

#### (2)

$x=e^{-u}$ とおけば $u\to\infty$ であるから、

$$
\lim_{x\to+0}x(\log x)^2
=\lim_{u\to\infty}u^2e^{-u}=0.
$$

また、

$$
\lim_{x\to+0}f'(x)
=\lim_{x\to+0}\log x(\log x+2)=+\infty.
$$

#### (3)

$f'(x)=0$ となるのは $x=e^{-2},1$ であり、$f''(x)=0$ となるのは $x=e^{-1}$ である。したがって、

| 区間 | $(0,e^{-2})$ | $e^{-2}$ | $(e^{-2},1)$ | $1$ | $(1,\infty)$ |
|---|---:|---:|---:|---:|---:|
| $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | 増加 | 極大 $4e^{-2}$ | 減少 | 極小 $0$ | 増加 |

さらに、

$$
f''(x)\begin{cases}
<0,&0<x<e^{-1},\\
>0,&x>e^{-1},
\end{cases}
$$

ゆえに $0<x<e^{-1}$ では上に凸、$x>e^{-1}$ では下に凸で、変曲点は

$$
\left(e^{-1},e^{-1}\right)
$$

である。概形は次のようになる（$x=0$ は定義域外）。

```text
y
^                                              /
|                                            _/
|       ● 極大                             _/
|     _/ \__                            __/
|   _/      ● 変曲                   __/
| _/         \____               ___/
|/                \____     ____/
|                      \   /
○------------------------●----------------------> x
x→0+                  極小 (1,0)
```

### [2]

$$
\frac{dx}{dt}=a(1-\cos t)\ge0
$$

である。

#### (1)

求める面積を $S$ とすると、

$$
\begin{aligned}
S&=\int_0^{2\pi}y\frac{dx}{dt}\,dt\\
 &=a^2\int_0^{2\pi}(1-\cos t)^2\,dt
 =3\pi a^2.
\end{aligned}
$$

#### (2)

円板法より、体積 $V$ は

$$
\begin{aligned}
V&=\pi\int y^2\,dx\\
 &=\pi a^3\int_0^{2\pi}(1-\cos t)^3\,dt
 =5\pi^2a^3.
\end{aligned}
$$
