---
sidebar_label: '2020年8月実施 数学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 数学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

2021年度大学院入学試験問題
[数学 1 ( 主に微分積分・微分方程式)](https://github.com/Myyura/the_kai_project_assets/blob/d6bcfb7f9c3ba8257a9649b816e8903f4a4bf22f/kakomonn/tokyo_university/engineering/Description/2021_M_1.pdf)



### 题目描述

原 Description 仅提供 2021 年“数学 1”原卷链接，具体题干缺失。根据本地 Kai，能够唯一确认以下内容：

1. 第一部分包括三项计算：
   - 求 $y(x)=(\arccos x)^{\log x}$ 的导数；
   - 对实参数 $p$，分别在 $p=0$ 与 $p\ne0$ 时计算
     $$
     \int\frac{x^2+x+2}{x^3-px^2}\,\mathrm dx;
     $$
   - 对 $0\le\theta<\pi/2$，计算
     $$
     I=\int_0^{\sin\theta}
     \frac{\arctan(\arcsin x)}{\sqrt{1-x^2}}\,\mathrm dx.
     $$
2. 第二部分涉及由复函数 $p(x),q(x)$ 构造的 $f(x),g(x)$。Kai 明确使用
   $$
   f' = iaf-ibg,\qquad g'=-ibf-iag
   $$
   并要求证明 $|f(x)|^2+|g(x)|^2$ 与 $x$ 无关；但 $p,q,f,g$ 在原题中的完整定义和参数条件未保存在本地，不能进一步补写。

#### 考点

- 对数求导：把变底变指数函数写成指数形式，求出 $(\arccos x)^{\log x}$ 的导数。
- 部分分式积分：按参数 $p$ 是否为零分类分解有理函数并积分。
- 换元与分部积分：先令 $x=\sin\phi$ 消去根式，再对 $\arctan\phi$ 积分。
- 复常微分方程的不变量：由耦合方程及其共轭式证明平方模之和的导数为零。

## **Kai**
### I.
#### 1.

$$
\begin{aligned}
y(x)
&= (\arccos x)^{\log x}
\\
&= e^{\log x \cdot \log (\arccos x)}
\end{aligned}
$$

なので、

$$
\begin{aligned}
\frac{dy(x)}{dx}
&= (\arccos x)^{\log x} \cdot
\frac{d}{dx} \left( \log x \cdot \log (\arccos x) \right)
\\
&= (\arccos x)^{\log x}
\left( \frac{1}{x} \cdot \log (\arccos x) + \log x \cdot
\frac{-\frac{1}{\sqrt{1-x^2}}}{\arccos x} \right)
\\
&= (\arccos x)^{\log x}
\left( \frac{\log (\arccos x)}{x} - 
\frac{\log x}{\arccos x \sqrt{1-x^2}} \right)
\end{aligned}
$$

解説:
関数 $y(x)$ は
$$y(x)=f(x)^{g(x)}$$
という形をしているので，対数微分を行うことにより導関数を求めることができます．

#### 2.
積分定数を $C$ で表す。

$p=0$ のときは、

$$
\begin{aligned}
\int \frac{x^2+x+2}{x^3} dx
&= \int \left( \frac{1}{x} + \frac{1}{x^2} + \frac{2}{x^3} \right) dx
\\
&= \log |x| - \frac{1}{x} - \frac{1}{x^2} + C
\end{aligned}
$$

であり、 $p \ne 0$ のときは、

$$
\begin{aligned}
\int \frac{x^2+x+2}{x^3-px^2} dx
&= \int \frac{x^2+x+2}{x^2(x-p)} dx
\\
&= \frac{1}{p^2} \int \left(
- \frac{p+2}{x} - \frac{2p}{x^2} + \frac{p^2+p-2}{x-p} \right) dx
\\
&= \frac{1}{p^2} \left(
- (p+2) \log |x| + \frac{2p}{x} + (p^2+p-2) \log |x-p| \right) + C
\end{aligned}
$$

である。

#### 3.
$x = \sin \phi \ \ (0 \leq \phi \leq \theta \lt \pi/2)$ とすると、
$dx = \cos \phi d \phi$ なので、

$$
\begin{aligned}
I
&= \int_0^{\sin \theta} \frac{\arctan(\arcsin x)}{\sqrt{1-x^2}} dx
\\
&= \int_0^\theta \frac{\arctan \phi}{\cos \phi} \cdot \cos \phi d \phi
\\
&= \int_0^\theta \arctan \phi d \phi
\\
&= \left[ \phi \arctan \phi \right]_0^\theta - \int_0^\theta \frac{\phi}{1+\phi^2} d \phi
\\
&= \theta \arctan \theta - \frac{1}{2} \left[ \log \left(1 + \phi^2 \right) \right]_0^\theta
\\
&= \theta \arctan \theta - \frac{1}{2} \log \left(1 + \theta^2 \right)
\end{aligned}
$$

を得る。

### II.
#### 1.

$$
\begin{aligned}
\frac{df(x)}{dx}
&= \frac{dp(x)}{dx} \exp (iax) + iap(x) \exp (iax)
\\
&= -ibq(x) \exp (-iax) + iap(x) \exp (iax)
\\
&= iaf(x) - ibg(x)
\\
\frac{dg(x)}{dx}
&= \frac{dq(x)}{dx} \exp (iax) - iaq(x) \exp (-iax)
\\
&= -ibp(x) \exp (iax) - iaq(x) \exp (-iax)
\\
&= -ibf(x) - iag(x)
\end{aligned}
$$

#### 2.
複素数 $A$ の複素共役を $\bar{A}$ で表す。

$$
\begin{aligned}
\frac{d}{dx} \left| f(x) \right|^2
&= \frac{d \overline{f(x)}}{dx} \cdot f(x) + \overline{f(x)} \cdot \frac{df(x)}{dx}
\\
&= \left( - ia \overline{f(x)} + ib \overline{g(x)} \right) f(x)
+ \overline{f(x)} \left( ia f(x) - ib g(x) \right)
\\
\frac{d}{dx} \left| g(x) \right|^2
&= \frac{d \overline{g(x)}}{dx} \cdot g(x) + \overline{g(x)} \cdot \frac{dg(x)}{dx}
\\
&= \left( ib \overline{f(x)} + ia \overline{g(x)} \right) g(x)
+ \overline{g(x)} \left( -ib f(x) - ia g(x) \right)
\end{aligned}
$$

なので、

$$
\begin{aligned}
\frac{d}{dx} \left( \left| f(x) \right|^2 + \left| g(x) \right|^2 \right) = 0
\end{aligned}
$$

がわかる。つまり、
$\left| f(x) \right|^2 + \left| g(x) \right|^2$
は $x$ に依存しない。
