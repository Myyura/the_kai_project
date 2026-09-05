---
sidebar_label: "2023年8月実施 数2 [1]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Initial-Value-Problem
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 数2 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e430ba234e241d162a59ab76f6efe083.pdf)


次の微分方程式について考えよう。

$$
\frac{dy}{dx} = (1-y)y
$$

1) 一般解を求めよ。

2) 初期値が $0 < y(0) < \frac{1}{2}$ および $y(0) > 1$ の場合のそれぞれについて, $y(x)$ のグラフの特徴がわかるように概形を描け。

### 题目描述

考察微分方程

$$
\frac{dy}{dx}=(1-y)y.
$$

1. 求通解；
2. 分别在初始值满足

   $$
   0<y(0)<\frac12
   \qquad\text{和}\qquad
   y(0)>1
   $$

   时，画出能够体现 $y(x)$ 图像主要特征的大致曲线。

## **Kai**

1) まず、与えられた微分方程式を解きます。

$$
\frac{dy}{dx} = (1-y)y
$$

これを変数分離すると、

$$
\frac{dy}{y(1-y)} = dx
$$

左辺を部分分数分解すると、

$$
\left(\frac{1}{y} + \frac{1}{1-y}\right)dy = dx
$$

両辺を積分すると、

$$
\int (\frac{1}{y} + \frac{1}{1-y}) dy = \int dx
$$

$$
\ln |y| - \ln |1-y| = x + C
$$

$$
\ln |\frac{y}{1-y}| = x + C
$$

指数関数を取ると、

$$
\frac{y}{1-y} = Ae^x
$$

(符号を積分定数に含め、 $A$ は任意の非零実数とする。)

$y$ について解くと、

$$
y = Ae^x(1-y)
$$

$$
y = Ae^x - Ae^x y
$$

$$
y + Ae^x y = Ae^x
$$

$$
y(1 + Ae^x) = Ae^x
$$

$$
y = \frac{Ae^x}{1 + Ae^x}
$$

分母と分子を $Ae^x$ で割ると、

$$
y = \frac{1}{\frac{1}{Ae^x} + 1} = \frac{1}{1 + Be^{-x}}
$$

ここで $B = \frac{1}{A}$ です。したがって、非定数解は

$$
y(x) = \frac{1}{1 + Be^{-x}}
$$

であり，分母が $0$ にならない連結な区間で定義される。さらに、変数分離の際に除いた平衡解

$$
y(x)\equiv0,\qquad y(x)\equiv1
$$

も解である（後者は上式の $B=0$ に含まれる）。

2) 初期値が $0 < y(0) < \frac{1}{2}$ の場合：
$B=(1-y(0))/y(0)>1$ である。このとき解は全実軸上で定義され、

$$
\lim_{x\to-\infty}y(x)=0,\qquad
\lim_{x\to\infty}y(x)=1
$$

となる単調増加曲線である。 $y=1/2$ 、すなわち $x=\log B>0$ で変曲する。

初期値が $y(0) > 1$ の場合：
$B=(1-y(0))/y(0)$ は $-1<B<0$ を満たす。初期値を含む最大存在区間は

$$
x>\log(-B)
$$

であり、

$$
\lim_{x\downarrow\log(-B)}y(x)=+\infty,\qquad
\lim_{x\to\infty}y(x)=1.
$$

この区間で $y'=y(1-y)<0$ なので、解は $+\infty$ から $1$ へ単調減少する。


![二つの初期値の場合のロジスティック曲線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/complex/2024/nagoya-complex2024-logistic.svg)

図はそれぞれ $B=3$ と $B=-1/2$ の代表例である。点は $x=0$ の値を示す。
