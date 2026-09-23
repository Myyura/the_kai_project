---
sidebar_label: 2026年8月実施 7. 【選択問題】数学解析と信号処理
sidebar_position: 7
tags:
  - Osaka-University
  - Mathematics.Calculus
  - Mathematics.Numerical-Analysis
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 7. 【選択問題】数学解析と信号処理

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1) 15，(2-1) 10，(2-2) 15，(2-3) 30，(2-4) 30，(2-5) 25

実数上で2階微分可能（twice differentiable）な関数（function）$f(x)$ が，定義域（domain）$x\in[0,b]$（$b>0$）において次を満たすとする。

- $f(0)<0$，$f(b)>0$。
- $f'(x)\geq c>0$。
- $f''(x)\geq0$。
- $f''(x)$ は連続。

ここで，$f'$ および $f''$ はそれぞれ $f$ の1階微分（first derivative）および2階微分（second derivative）を表し，$f'$ および $f''$ の値域（range）は有界（bounded）とする。

$f(\alpha)=0$ となる解 $\alpha$ を考える。以下の各問に答えよ。ただし，導出の過程も示すこと。

### (1)

定義域 $[0,b]$ に $\alpha$ が唯一解（a unique solution）として存在することを示せ。

### (2)

以下の漸化式（recurrence formula）

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\qquad(n=0,1,\cdots)\tag{A}
$$

を用いて $\alpha$ を求めることを考える。$x_0\in(0,b)$ を任意に固定する。また，写像（mapping）

$$
F(x)=x-\frac{f(x)}{f'(x)}\tag{B}
$$

を用いる。以下の各小問に答えよ。

#### (2-1)

$F(x)=x$ を満たす $x$ を $F$ の不動点（fixed point）という。ただし，$x\in[0,b]$ とする。$\alpha$ は $F$ の不動点であることを示せ。

#### (2-2)

定義域 $[0,b]$ にて $F(x)$ の1階微分 $F'(x)$ が連続関数であることを示せ。また，$F'(\alpha)$ を求めよ。

#### (2-3)

任意の $L\in(0,1)$ を想定する。また，$I=[\alpha-\lambda,\alpha+\lambda]\subset[0,b]$ とし，$\lambda>0$ である。$\lambda$ が十分小さいならば任意の $x,y\in I$（ただし $x\ne y$）に対して $|F(x)-F(y)|<L|x-y|$ となることを示せ。

#### (2-4)

小問 (2-3) の $I$ について，$x_0\in I$ ならば整数 $m>n$ に対して $\lim_{n\to\infty}|x_m-x_n|=0$ となることを示せ。ここで，補題1を用いても良い。

補題1：小問 (2-3) の $I$ について，任意の $x_n\in I$ に対して $F(x_n)\in I$ が成り立つ。

#### (2-5)

小問 (2-3) の $I$ について，$x_0\in I$ ならば $\lim_{n\to\infty}x_n=\alpha$ となることを示せ。ここで，補題1，2，および3を用いても良い。

補題2：整数 $m>n$ に対して $\lim_{n\to\infty}|x_m-x_n|=0$ のとき，数列（sequence）$\{x_n\}$ は収束する。

補題3：ある閉区間の中にある数列が収束するとき，その極限（limit）もその閉区間に入る。
