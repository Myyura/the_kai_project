---
comments: false
title: 大阪大学 情報科学研究科 情報工学 2021年度 離散構造
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報工学 2021年度 離散構造

## **Author**
祭音Myyura

## **Description**
非負の整数全体の集合を $\mathbb{Z}_0$ と書く。
実数 $x$ に対して、$x$ を超えない最大の整数を $\lfloor x \rfloor$ と書く。
任意の $n \in \mathbb{Z}_0$ に対して、実区間 $[0, \infty)$ から $[0, \infty)$ への写像 (mapping) $f_n$ を以下の漸化式 (recurrence relation) により定める。

$$
f_{n+1}(x) = x \lfloor f_n(x) \rfloor, \ f_0(x) = 1,\ x \in [0, \infty)
$$

以下の各問に答えよ。

(1) 次の値をそれぞれ求めよ：$f_1(1.5)$, $f_2(2.5)$, $f_3(3.5)$。

(2) 命題 (proposition)「ある $n \in \mathbb{Z}_0$ が存在し $f_n$ は単射 (injective) である」の真偽を判定せよ。その理由を述べよ。

(3) 命題「$n \in \mathbb{Z_0}$ が正かつ偶数ならば $f_n$ は全射 (surjective) である」の真偽を判定せよ。その理由を述べよ。

(4) $\mathbb{Z}_0$ における以下の二項関係 (binary relation) を考える。

$$
R = \{(k,l) \in \mathbb{Z}_0 \times \mathbb{Z}_0 \mid k = f_n(h/2) \text{ かつ } l = f_m(h/2) \text{ を満たす } h,n,m \in \mathbb{Z}_0 \text{ が存在する}\}
$$

- (4-1) $R$ が反射的 (reflexive) であるかを判定せよ。その理由を述べよ。
- (4-2) $R$ が反対称的 (antisymmetric) であるかを判定せよ。その理由を述べよ。

(5) 方程式

$$
\begin{align}
f_2(x) = 171  \tag{i}
\end{align}
$$

を考える。以下の各問に答えよ。

- (5-1) 非負の実数 $x$ が方程式 (i) の解であると仮定する。ある実数 $\epsilon \in [0,1)$ が存在し $x=13+\epsilon$ が成り立つことを示せ。 
- (5-2) 方程式 (i) の解を一つ求めよ。 

(6) 方程式

$$
\begin{align}
f_3(x) = 171  \tag{ii}
\end{align}
$$

の解を一つ求めよ。

## **Kai**
### (1)

$$
f_1(1.5) = 1.5 \cdot \lfloor f_0(1.5) \rfloor = 1.5 \cdot \lfloor 1 \rfloor = 1.5
$$

$$
f_2(2.5) = 2.5 \cdot \lfloor f_1(2.5) \rfloor = 2.5 \cdot \lfloor 2.5 \rfloor = 5
$$

$$
f_3(3.5) = 3.5 \cdot \lfloor f_2(3.5) \rfloor = 3.5 \cdot \lfloor 3.5 \cdot \lfloor 3.5 \rfloor \rfloor = 35
$$

### (2)
$n = 1$ の場合、

$$
f_1(x) = x \lfloor f_0(x) \rfloor = x \cdot \lfloor 1 \rfloor = x
$$

が単射であるので、命題は真である。

### (3)
$n = 2$ の場合（$f_2(x) = x \lfloor x \rfloor$）を考える。

$0 \leq x < 1$ のとき、$f_2(x) = x \cdot 0 = 0$。

$x \geq 1$ のとき、$f_2(x) \geq 1$。

よって、$f_2(x)$ は全射ではない。ゆえに、命題は偽である。

### (4)
#### (4-1)
任意の $k \in \mathbb{Z}_0$ に対して、(2) より、

$$
\begin{aligned}
    &m = n = 1 \\
    &h = 2k
\end{aligned}
$$

とおくと、$k = f_1(k)$ がわかるので、$R$ が反射的 (reflexive) である。

#### (4-2)
二項関係 $R$ の定義より、$R$ は対称的であることはほぼ自明なので、反対称的ではない。

### (5)
#### (5-1)

$$
\begin{aligned}
f_2(x) = x \lfloor x \rfloor &= 171 \\
(13+\epsilon) \cdot \lfloor (13 + \epsilon) \rfloor &= 171 \\
169 + 13 \epsilon &= 171 \\
\epsilon &= \frac{2}{13}
\end{aligned}
$$

#### (5-2)
（意味不明な設問）

(5-1) より、$x = \frac{171}{13}$ は一つの解である。

### (6)

$$
f_3(x) = x \lfloor x \lfloor x \rfloor \rfloor \leq x^3
$$

$$
5 < \sqrt[3]{171} <  6
$$

なので、$x = 5 + \epsilon, \ \epsilon \in [0, 1)$ と書くと、

$$
\begin{align}
    (5+\epsilon) \lfloor (5+\epsilon) \lfloor 5+\epsilon \rfloor \rfloor &= 171 \tag{iii} \\
    (5+\epsilon) \lfloor 25 + 5 \epsilon \rfloor &= 171 \tag{iv}
\end{align}
$$

方程式 $(5+\epsilon)(25 + 5 \epsilon) = 171$ を解くと、$\epsilon = 3 \sqrt \frac{19}{5} - 5 \approx 0.85$ を得る。

よって、$\lfloor 25 + 5 \epsilon \rfloor = \lfloor 25 + 5 \times 0.85 \rfloor = 29$ を仮定し、方程式 (iv) を解くと、$\epsilon = \frac{26}{29}$ を得る。

最終的に $x = \frac{171}{29}$ を方程式 (ii) に代入して検証すると、$x = \frac{171}{29}$ は方程式 (ii) の解であることがわかる。