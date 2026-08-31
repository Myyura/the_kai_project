---
sidebar_label: "2017年8月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Vector-Calculus.Polar-Coordinates
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2017年8月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]

$f(x)=xe^{1/x}$ について、次の問いに答えよ。

1. $f(x)$ を微分せよ。
2. 曲線 $y=f(x)$ が $x\to\pm\infty$ で漸近する直線を求めよ。
3. 曲線の概形に必要な極限をすべて求め、概形を描け。

### [2]

1. $\displaystyle\lim_{x\to0}(\cos x)^{1/(1-\cos x)}$ を求めよ。
2. 方程式 $x^2-xy+y^3+9=0$ の定める陰関数 $y=g(x)$ の極値を求めよ。
3. 極座標曲線 $r=e^{-\theta/\pi}$（$0\le\theta<\infty$）の概形を描き、曲線の長さを求めよ。

### 题目描述

1. 对 $f(x)=xe^{1/x}$ 求导、求 $x\to\pm\infty$ 时的斜渐近线，并利用极限描绘函数图像。
2. 计算一个三角函数型极限；求隐函数 $x^2-xy+y^3+9=0$ 的极值；描绘对数螺线 $r=e^{-\theta/\pi}$ 并求其总弧长。

## **Kai**

### [1]

#### (1)

定義域は $x\ne0$ であり、

$$
\boxed{f'(x)=e^{1/x}\left(1-\frac1x\right)},
\qquad
f''(x)=\frac{e^{1/x}}{x^3}.
$$

#### (2)

$x\to\pm\infty$ で

$$
xe^{1/x}=x\left(1+\frac1x+O(x^{-2})\right)
=x+1+O(x^{-1}).
$$

よって斜漸近線は

$$
\boxed{y=x+1}
$$

である。

#### (3)

必要な極限は

$$
\begin{aligned}
&\lim_{x\to-\infty}f(x)=-\infty,
&&\lim_{x\to0-}f(x)=0,\\
&\lim_{x\to0+}f(x)=+\infty,
&&\lim_{x\to+\infty}f(x)=+\infty.
\end{aligned}
$$

$f'$ と $f''$ の符号から、$(-\infty,0)$ では単調増加かつ上に凸、$(0,1)$ では単調減少かつ下に凸、$(1,\infty)$ では単調増加かつ下に凸である。したがって $x=1$ で極小値

$$
\boxed{f(1)=e}
$$

をとる。

```text
             y
             ↑       ╲                 ╱
             │        ╲             ╱
             │         ╲____● (1,e)
─────────────┼──────────┆────────────────→ x
          ╱  ○          0
       ╱    (0,0) は非定義
    ╱
  y=x+1（x→-∞ でも漸近）
```

### [2]

#### (1)

対数をとると

$$
\lim_{x\to0}\frac{\log(\cos x)}{1-\cos x}
=\frac{-1/2}{1/2}=-1.
$$

ゆえに

$$
\boxed{\displaystyle\lim_{x\to0}(\cos x)^{1/(1-\cos x)}=e^{-1}}.
$$

#### (2)

$F(x,y)=x^2-xy+y^3+9$ とおくと

$$
g'(x)=-\frac{F_x}{F_y}
=\frac{2x-y}{x-3y^2}.
$$

なお、$F_y=0$、すなわち $x=3y^2$ を $F=0$ に代入すると $9y^4-2y^3+9=0$ となるが、左辺は常に正である。したがって曲線上では $F_y\ne0$ である。

極値では $2x-y=0$ である。$x=y/2$ を $F=0$ に代入すると

$$
4y^3-y^2+36=(y+2)(4y^2-9y+18)=0.
$$

実数解は $y=-2$ のみで、$x=-1$ である。この点では $F_y=13\ne0$ であり、

$$
g''(-1)=-\frac{F_{xx}}{F_y}=-\frac2{13}<0.
$$

したがって

$$
\boxed{x=-1\text{ で極大値 }g(-1)=-2}
$$

をとり、極小値はない。

#### (3)

$\theta=0$ で $(r,\theta)=(1,0)$ から出発し、反時計回りに無限回転しながら原点へ近づく対数螺旋である。

```text
                 y
                 ↑
          ╭────────╮
       ╭──╯   ╭─╮  ╰──● (1,0)
       ╰──────╯ ↘
                 O────────→ x
             （原点へ収束）
```

$dr/d\theta=-r/\pi$ であるから、全長は

$$
\begin{aligned}
L
&=\int_0^\infty\sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta\\
&=\sqrt{1+\frac1{\pi^2}}\int_0^\infty e^{-\theta/\pi}\,d\theta
=\boxed{\sqrt{\pi^2+1}}.
\end{aligned}
$$
