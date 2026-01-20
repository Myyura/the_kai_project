---
sidebar_label: "2022年8月実施 解析学・微積分"
tags:
  - Kyushu-University
  - Calculus
  - Differential-Equation
  - Complex-Analysis
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年8月実施 解析学・微積分

## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
(1) $\mathbb{{R}}$ 上の関数 $f(x) = \cos x$ の $k$ 階導関数を $f^{(k)}(x)$ で表す。ただし, は実数全体の集合である。以下の各問いに答えよ。

$\quad$ (a) 全ての $k \ge 1$ について $f^{(k)}(0)$ を求めよ。

$\quad$ (b) $f(x)$ の原点周りでのテイラー級数を

$$
\sum_{k=0}^{\infty}a_{k}x^{k}
$$

とするとき, 全ての $k \ge 0$ 関する $a_k$ を求めよ。

$\quad$ (\(c\)) 全ての $x \in \mathbb{R}$ について

$$
\sum_{k=0}^{\infty}|a_{k}x^{k}|
$$

が収束することを示せ。

(2) 次の微分方程式の一般解を求めよ。なお, $y'$ は関数 $y(x)$ の $x$ に関する $1$ 階導関数を表している。

$$
y'''' - 2y''' - y'' - 4y' + 12y = 0
$$

(3) 閉曲線 $C$ に沿った複数積分 $\oint_{C} \frac{1}{z(z^2 - 1)}$ を求めよ。ただし, $C$ は円 $|z| = r,r > 0$ かつ $r \neq 1$ とする。

## **Kai** 
### (1)
#### (a)

$$
f^{k}(0) = 
\left\{
\begin{aligned}
1 , &k \equiv 0 \quad (\text{mod} \quad 4) \\
0 , &k \equiv 1 \text{or} 3 \quad(\text{mod} \quad 4) \\
-1 , &k \equiv 2 \quad (\text{mod} \quad 4) 
\end{aligned}
\right.
$$

#### (b)

$$
a_k = \frac{f^{k}(0)}{k!} = 
\left\{
\begin{aligned}
\frac{1}{k!} , \quad &k \equiv 0 \quad (\text{mod} \quad 4) \\
0, \quad &k \equiv 1 \text{or} 3 \quad (\text{mod} \quad 4) \\
\frac{-1}{k!} ,\quad &k \equiv 2 \quad (\text{mod} \quad 4)
\end{aligned}
\right.
$$

#### (\(c\))

$$
\sum_{k = 0}^{\infty}|a_{k}x^{k}| = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots = \sum_{n = 0}^{\infty} \frac{x^{2n}}{(2n)!}
$$

$$
\lim_{n \rightarrow \infty} \frac{a_{n + 1}}{a_{n}} = \lim_{n \rightarrow \infty} \frac{x^2}{(2n + 2)(2n + 1)} = 0
$$

### (2)

$$
\begin{aligned}
r^4 - 2r^3 - r^2 &- 4r + 12 = 0\\
(r - 2)^2 (r^2 &+ 2r + 3) = 0\\
r_1 = 2,r_2 = 2,r_3 = &-1 + \sqrt{2}i,r_4 = -1 - \sqrt{2}i\\
y = e^{2x}(c_1 + c_2x) + &e^{-x}(c_3\cos\sqrt{2}x + c_4\sin\sqrt{2}x)
\end{aligned}
$$

### (3)

$$
f(z) = \frac{1}{z(z^2 - 1)} \text{ とおくと},
$$

$$
0 < r < 1\text{ のとき}, z = 0\text{ は }1\text{ 位の極である。}
$$

$$
\text{res}f(0) = \lim_{z \rightarrow 0}z \frac{1}{z(z^2 - 1)} = \frac{1}{z^2 - 1}\bigg|_{z = 0} = -1
$$

$$
\oint_{C}f(z)\text{d}z = 2\pi i\text{res}f(0) = -2\pi i
$$

$$
r > 1\text{ のとき}, z = 0,z = \pm 1 \text{ は }1\text{ 位の極である。}
$$

$$
\text{res}f(-1) = \lim_{z \rightarrow -1}(z + 1) \frac{1}{z(z^2 - 1)} = \frac{1}{z(z - 1)}\bigg|_{z = -1} = \frac{1}{2}
$$

$$
\text{res}f(1) = \lim_{z \rightarrow 1}(z - 1) \frac{1}{z(z^2 - 1)} = \frac{1}{z(z + 1)}\bigg|_{z = 1} = \frac{1}{2}
$$

$$
\oint_{C}f(z)\text{d}z = 2\pi i [\text{res}f(0) + \text{res}f(-1) + \text{res}f(1)] = 0
$$
