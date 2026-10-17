---
sidebar_label: "2023年2月実施 基礎科目 [1] 微分積分"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Multivariable-Differentiation
---
# 東北大学 工学研究科 土木工学専攻 2023年2月実施 基礎科目 \[1\] 微分積分

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 1

次の極限値を求めよ．ただし，$a>0,b>0$ とする．

$$
\lim_{x\to0}\left(\frac{a^x+b^x}{2}\right)^{1/x}
$$

### 2

$x=r\cos\theta,y=r\sin\theta$ のとき，以下の問いに答えよ．

(1) $dx$ および $dy$ を求めよ．

(2) $r,dr,\theta,d\theta$ を用いて次式を表せ．

$$
x\,dy-y\,dx
$$

### 3

次に示す $xyz$ 空間の領域 $D$ を考える．このとき，以下の問いに答えよ．

$$
D=\{(x,y,z)\mid y\ge0,\ z\ge0,\ z^2\le4x,\ y^2\le x-x^2\}
$$

(1) 領域 $D$ を図示せよ．

(2) 領域 $D$ の体積を求めよ．

### 4

次の微分方程式を解け．ここで，$e$ は自然対数の底である．

$$
y''-2y'+2y-e^x-2x=0
$$

#### 题目描述

**1** 求下列极限，其中 $a>0,b>0$。

$$
\lim_{x\to0}\left(\frac{a^x+b^x}{2}\right)^{1/x}
$$

**2** 当 $x=r\cos\theta,y=r\sin\theta$ 时，回答下列问题。

(1) 求 $dx$ 和 $dy$。

(2) 用 $r,dr,\theta,d\theta$ 表示 $x\,dy-y\,dx$。

**3** 考虑 $xyz$ 空间中的区域

$$
D=\{(x,y,z)\mid y\ge0,\ z\ge0,\ z^2\le4x,\ y^2\le x-x^2\}.
$$

(1) 画出区域 $D$。

(2) 求区域 $D$ 的体积。

**4** 解下列微分方程，其中 $e$ 为自然对数的底。

$$
y''-2y'+2y-e^x-2x=0
$$

## **Kai**
### 1.

$$
\begin{aligned}
\lim_{x \to 0} \left( \frac{a^x + b^x}{2} \right)^{\frac{1}{x}}
&= \lim_{x \to 0} \left( 1 + \frac{\log (ab)}{2} x + O(x^2) \right)^{\frac{1}{x}}
\\
&= e^{\frac{1}{2} \log (ab)}
\\
&= \sqrt{ab}
\end{aligned}
$$

### 2.
#### (1)

$$
\begin{aligned}
\mathrm{d} x &= \mathrm{d} r \cos \theta - r \mathrm{d} \theta \sin \theta
\\
\mathrm{d} y &= \mathrm{d} r \sin \theta + r \mathrm{d} \theta \cos \theta
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
x \mathrm{d} y - y \mathrm{d} x &= r^2 \mathrm{d} \theta
\end{aligned}
$$

### 3.
#### (1)
条件を積分範囲に書き直すと

$$
0\le x\le1,\qquad0\le y\le\sqrt{x-x^2},\qquad0\le z\le2\sqrt{x}.
$$

$xy$ 平面への射影は $(x-1/2)^2+y^2\le1/4$ の上半円であり、その上に高さ $2\sqrt{x}$ まで積み上げた立体である。

![領域Dの概形。上半円の底面と上面z=2√x。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/civil/2023/tohoku-civil-202302-region.svg)

#### (2)

$$
\begin{aligned}
\operatorname{Vol}(D)
&=\int_0^1\int_0^{\sqrt{x-x^2}}\int_0^{2\sqrt x}dz\,dy\,dx\\
&=2\int_0^1x\sqrt{1-x}\,dx
=2\left(\frac23-\frac25\right)=\boxed{\frac8{15}}.
\end{aligned}
$$

### 4.
特性方程式は $\lambda^2-2\lambda+2=0$ で、根は $1\pm i$。特殊解として $e^x+x+1$ が取れるから、

$$
\boxed{y=e^x(C_1\cos x+C_2\sin x)+e^x+x+1}
$$

が一般解である。

## **Reference**

- [東北大学 土木系 2023年春季 基礎科目（PDF）](https://www.civil.tohoku.ac.jp/admission/img/2023_spring_BasicSubjectsJ.pdf)
