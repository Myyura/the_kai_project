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

$a$ を正の定数とする。2 変数関数

$$
f(x,y)=\frac{e^{-(x+y)}}{(x-y)^2+a^2}
$$

について，次の問いに答えよ。ただし，$e$ は自然対数の底である。

(1) 偏導関数 $\dfrac{\partial f}{\partial x}$ を求めよ。

(2) $xy$ 平面上の領域 $D=\{(x,y)\mid0\leq x-y\leq a,\ 0\leq x+y\leq a\}$ が，変数変換 $u=x-y$，$v=x+y$ によって，$uv$ 平面上の領域 $E$ に対応する。関数 $f(x,y)$ の $D$ 上の 2 重積分を

$$
I=\iint_D f(x,y)\,dx\,dy
$$

とおく。

(a) $uv$ 平面上に領域 $E$ を図示せよ。

(b) ヤコビアン $\dfrac{\partial(x,y)}{\partial(u,v)}=\dfrac{\partial x}{\partial u}\dfrac{\partial y}{\partial v}-\dfrac{\partial x}{\partial v}\dfrac{\partial y}{\partial u}$ を求めよ。

(c) $I=\dfrac12\displaystyle\iint_E\frac{e^{-v}}{u^2+a^2}\,du\,dv$ となることを示し，$I$ の値を求めよ。

(d) $\displaystyle\lim_{a\to+0}I$ を求めよ。

### 题目描述

设 $a$ 为正常数。对于二元函数

$$
f(x,y)=\frac{e^{-(x+y)}}{(x-y)^2+a^2},
$$

回答以下问题，其中 $e$ 为自然对数的底。

(1) 求偏导函数 $\dfrac{\partial f}{\partial x}$。

(2) $xy$ 平面上的区域 $D=\{(x,y)\mid0\leq x-y\leq a,\ 0\leq x+y\leq a\}$ 通过变量代换 $u=x-y$、$v=x+y$ 对应到 $uv$ 平面上的区域 $E$。记函数 $f(x,y)$ 在 $D$ 上的二重积分为

$$
I=\iint_D f(x,y)\,dx\,dy.
$$

(a) 在 $uv$ 平面上画出区域 $E$。

(b) 求雅可比行列式 $\dfrac{\partial(x,y)}{\partial(u,v)}=\dfrac{\partial x}{\partial u}\dfrac{\partial y}{\partial v}-\dfrac{\partial x}{\partial v}\dfrac{\partial y}{\partial u}$。

(c) 证明 $I=\dfrac12\displaystyle\iint_E\frac{e^{-v}}{u^2+a^2}\,du\,dv$，并求 $I$ 的值。

(d) 求 $\displaystyle\lim_{a\to+0}I$。

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

![変換後の積分領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/yamagata-university/science_and_engineering/information_electronics/2023/info_202208_math_1_region.svg)

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
