---
sidebar_label: "2017年2月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Integration-by-Parts
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2017年2月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]
次の各問に答えよ。

1. $\displaystyle \frac{d}{dx}\left(e^{\cos 2x}\right)$ を計算せよ。
2. 有限な極限値

   $$
   b=\lim_{x\to0}\frac{a-\log(2+x)}{x}
   $$

   が存在するとき、定数 $a$ の値と極限値 $b$ を求めよ。

### [2]

$$
I_n(x)=\int_0^x\frac{dt}{(t^2+1)^n}
$$

とする。ただし $n=1,2,\ldots$ である。このとき次の各問に答えよ。

1. $I_1(x)$ を求めよ。
2. $\displaystyle I_n(x)=\int_0^x\frac{t}{(t^2+1)^{n+1}}\,t\,dt+I_{n+1}(x)$ であることを示せ。
3. (2) の積分を部分積分を用いて計算することによって、以下の式が成立することを示せ。

   $$
   2nI_{n+1}(x)=\frac{x}{(x^2+1)^n}+(2n-1)I_n(x).
   $$

4. $I_2(x)$ と $I_3(x)$ を求めよ。

### 题目描述

1. 求 $e^{\cos 2x}$ 的导数；若 $\lim_{x\to0}(a-\log(2+x))/x$ 为有限值，求 $a$ 与该极限。
2. 对 $I_n(x)=\int_0^x(1+t^2)^{-n}dt$，求 $I_1$，证明题给分解和递推式，并计算 $I_2,I_3$。

## **Kai**

### [1]

#### (1)

合成関数の微分法より

$$
\boxed{\frac{d}{dx}\left(e^{\cos 2x}\right)
=-2\sin 2x\,e^{\cos 2x}}.
$$

#### (2)

$x\to0$ で分母が $0$ になるため、有限な極限が存在するには分子も $0$ にならなければならない。よって

$$
a-\log2=0,
\qquad
a=\log2.
$$

このとき L'Hôpital の定理より

$$
b=\lim_{x\to0}\frac{\log2-\log(2+x)}{x}
=\lim_{x\to0}-\frac{1}{2+x}
=-\frac12.
$$

したがって

$$
\boxed{a=\log2,\qquad b=-\frac12}.
$$

### [2]

#### (1)

$$
\boxed{I_1(x)=\int_0^x\frac{dt}{1+t^2}=\arctan x}.
$$

#### (2)

$1+t^2=t^2+1$ を分子に補うと、

$$
\begin{aligned}
I_n(x)
&=\int_0^x\frac{1+t^2}{(1+t^2)^{n+1}}\,dt\\
&=\int_0^x\frac{t^2}{(1+t^2)^{n+1}}\,dt
+\int_0^x\frac{dt}{(1+t^2)^{n+1}}\\
&=\int_0^x\frac{t}{(1+t^2)^{n+1}}\,t\,dt+I_{n+1}(x).
\end{aligned}
$$

#### (3)

$J=\int_0^x t\,\dfrac{t}{(1+t^2)^{n+1}}dt$ とおく。

$$
\int\frac{t}{(1+t^2)^{n+1}}dt
=-\frac{1}{2n(1+t^2)^n}
$$

だから、部分積分により

$$
J=-\frac{x}{2n(1+x^2)^n}+\frac{1}{2n}I_n(x).
$$

(2) の $I_n=J+I_{n+1}$ に代入して整理すると、

$$
\boxed{2nI_{n+1}(x)=\frac{x}{(1+x^2)^n}+(2n-1)I_n(x)}.
$$

#### (4)

(3) に $n=1$ を代入すると

$$
\boxed{I_2(x)=\frac{x}{2(1+x^2)}+\frac12\arctan x}.
$$

さらに $n=2$ を代入して

$$
\begin{aligned}
I_3(x)
&=\frac{x}{4(1+x^2)^2}+\frac34I_2(x)\\
&=\boxed{\frac{x(5+3x^2)}{8(1+x^2)^2}+\frac38\arctan x}.
\end{aligned}
$$
