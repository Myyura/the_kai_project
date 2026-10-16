---
sidebar_label: "2022年8月実施 基礎科目 問題1"
tags:
  - Yamagata-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 山形大学 理工学研究科 情報・エレクトロニクス専攻 2022年8月実施 基礎科目 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE.html) refined with GPT 6 Astra)

## **Description**

$a>0$ とし、

$$
f(x,y)=\frac{e^{-(x+y)}}{(x-y)^2+a^2}
$$

とおく。$e$ は自然対数の底である。

(1) $\partial f/\partial x$ を求めよ。

(2) 領域 $D=\{(x,y)\mid 0\le x-y\le a,\ 0\le x+y\le a\}$ を、$u=x-y,\ v=x+y$ によって $uv$ 平面の領域 $E$ に移す。

$$
I=\iint_D f(x,y)\,dx\,dy
$$

について次に答えよ。

(a) $E$ を図示せよ。

(b) ヤコビアン $\partial(x,y)/\partial(u,v)$ を求めよ。

(c) $I=\frac12\iint_E\frac{e^{-v}}{u^2+a^2}\,du\,dv$ を示し、$I$ を求めよ。

(d) $\lim_{a\to+0}I$ を求めよ。

#### 题目描述

设 $a>0$，$f(x,y)=e^{-(x+y)}/((x-y)^2+a^2)$。

(1) 求对 $x$ 的偏导数。

(2) 对区域 $D=\{0\le x-y\le a,\ 0\le x+y\le a\}$ 作变换 $u=x-y,\ v=x+y$，像区域记为 $E$，并令 $I=\iint_D f\,dx\,dy$。

(a) 画出 $E$；(b) 求变换的雅可比行列式；(c) 证明 $I=\frac12\iint_E e^{-v}/(u^2+a^2)\,du\,dv$ 并求值；(d) 求 $a\to0^+$ 时 $I$ 的极限。

## **Kai**

### (1)

商の微分法より

$$
\boxed{\frac{\partial f}{\partial x}
=-\frac{e^{-(x+y)}\{(x-y)^2+a^2+2(x-y)\}}{\{(x-y)^2+a^2\}^2}}.
$$

### (2)

#### (a)

$E=\{(u,v)\mid 0\le u\le a,\ 0\le v\le a\}$ であり、境界を含む一辺 $a$ の正方形である。

![変換後の積分領域](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomon/yamagata-university/science_and_engineering/information_electronics/2023/info_202208_math_1_region.svg)

#### (b)

$x=(u+v)/2,\ y=(v-u)/2$ より

$$
\boxed{\frac{\partial(x,y)}{\partial(u,v)}
=\det\begin{pmatrix}1/2&1/2\\-1/2&1/2\end{pmatrix}=\frac12}.
$$

#### (c)

変数変換公式により

$$
\begin{aligned}
I&=\frac12\int_0^a e^{-v}\,dv\int_0^a\frac{du}{u^2+a^2}\\
&=\frac{1-e^{-a}}{2a}\left[\arctan\frac ua\right]_0^a
=\boxed{\frac{\pi}{8a}(1-e^{-a})}.
\end{aligned}
$$

#### (d)

$1-e^{-a}=a+O(a^2)$ であるから

$$
\boxed{\lim_{a\to+0}I=\frac\pi8}.
$$

## **Reference**

- [山形大学公式問題（PDF 4頁）](https://www.yz.yamagata-u.ac.jp/download_file/3157/227/)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E5%BD%A2%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%83%85%E5%A0%B1%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE.html)
