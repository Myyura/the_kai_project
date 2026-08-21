---
sidebar_label: "2021年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Power-Series
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Differentiation
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

開区間 $(-\frac{\pi}{2}, \frac{\pi}{2})$ 上の関数 $y = \tan x$ の逆関数を $y = \arctan x$ と書く. $f(x) = \arctan x$ は $\mathbb{R}$ 上の実解析的関数である. 以下の問いに答えよ.

(i) 自然数 $n \geq 1$ に対して,

$$
(1+x^2)f^{(n+2)}(x) + 2(n+1)xf^{(n+1)}(x) + n(n+1)f^{(n)}(x) = 0
$$

が成り立つことを示せ. ただし, $f^{(n)}(x)$ は $f(x)$ の $n$ 階導関数である.

(ii) $f(x)$ の $x=0$ を中心としたテイラー展開を求めよ.

(iii) (ii) で求めたテイラー展開の収束半径を求めよ.

(iv) 次式を示せ.

$$
\pi = \sum_{n=1}^{\infty} \frac{4(-1)^{n-1}}{2n-1}
$$

### 题目描述

把 $y=\tan x$ 在开区间
$(-\frac{\pi}{2},\frac{\pi}{2})$ 上的反函数记为

$$
y=\arctan x.
$$

令 $f(x)=\arctan x$；$f$ 是 $\mathbb{R}$ 上的实解析函数。回答：

1. 对每个自然数 $n\geq1$，证明

$$
(1+x^2)f^{(n+2)}(x)
+2(n+1)xf^{(n+1)}(x)
+n(n+1)f^{(n)}(x)
=0,
$$

其中 $f^{(n)}$ 表示 $f$ 的 $n$ 阶导数。
2. 求 $f(x)$ 在 $x=0$ 处的 Taylor 展开。
3. 求上一小问 Taylor 级数的收敛半径。
4. 证明 Gregory–Leibniz 公式

$$
\pi
=
\sum_{n=1}^{\infty}
\frac{4(-1)^{n-1}}{2n-1}.
$$

## **Kai**

### (i) 高階導関数の関係式

$f'(x)=1/(1+x^2)$ なので、

$$
(1+x^2)f'(x)=1.
$$

両辺を $n+1$ 回微分する。ライプニッツの公式を適用すると、 $1+x^2$ の第 3 階以上の導関数は $0$ であるから、

$$
\begin{aligned}
0
&=\frac{d^{n+1}}{dx^{n+1}}\left((1+x^2)f'(x)\right)\\
&=(1+x^2)f^{(n+2)}(x)
+2(n+1)xf^{(n+1)}(x)\\
&\quad+n(n+1)f^{(n)}(x).
\end{aligned}
$$

これが求める関係式である。

### (ii) テイラー展開

(i) の式に $x=0$ を代入すると

$$
f^{(n+2)}(0)=-n(n+1)f^{(n)}(0).
$$

$f(0)=0$ および $f'(0)=1$ から、帰納法により

$$
\begin{aligned}
f^{(2m)}(0)&=0,\\
f^{(2m-1)}(0)&=(-1)^{m-1}(2m-2)!
\end{aligned}
\qquad (m\geq 1)
$$

を得る。したがって、 $x=0$ におけるテイラー展開は

$$
\arctan x
=\sum_{m=1}^{\infty}
\frac{(-1)^{m-1}}{2m-1}x^{2m-1}
=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots.
$$

### (iii) 収束半径

隣接する非零項の絶対値の比は

$$
\left|
\frac{x^{2m+1}/(2m+1)}{x^{2m-1}/(2m-1)}
\right|
=|x|^2\frac{2m-1}{2m+1}
\longrightarrow |x|^2.
$$

よって $|x|<1$ で収束し、 $|x|>1$ で発散する。収束半径は

$$
R=1
$$

である。

### (iv) グレゴリー・ライプニッツ級数

(ii) のべき級数は $x=1$ で交代級数として収束する。アーベルの定理を用いると、

$$
\arctan 1
=\sum_{m=1}^{\infty}\frac{(-1)^{m-1}}{2m-1}.
$$

$\arctan 1=\pi/4$ であるから、両辺を $4$ 倍して

$$
\pi
=\sum_{m=1}^{\infty}
\frac{4(-1)^{m-1}}{2m-1}
$$

を得る。
