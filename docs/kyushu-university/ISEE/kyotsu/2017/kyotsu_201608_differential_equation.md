---
sidebar_label: 2016年8月実施 微分方程式
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Homogeneous-First-Order-Ordinary-Differential-Equation
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2016年8月実施 微分方程式

## **Author**
Zero, 祭音Myyura

## **Description**
次の微分方程式の一般解を求めよ．

(1) $\frac{dy}{dx} + \frac{y}{x} = \frac{1}{1 + x^2}$

(2) $(\sqrt{xy} - x) \frac{dy}{dx} = -y$

### 题目描述

求下列两个一阶微分方程的通解，其中 $y$ 是 $x$ 的函数：

1.

$$
\frac{dy}{dx}+\frac yx=\frac1{1+x^2}.
$$

2.

$$
(\sqrt{xy}-x)\frac{dy}{dx}=-y.
$$

## **Kai**
### (1)

$$
\begin{aligned}
\frac{dy}{dx} + \frac{y}{x} &= \frac{1}{1 + x^2} \\
xy' + y &= \frac{x}{1 + x^2} \\
\frac{d}{dx}(xy) &= \frac{x}{1 + x^2}
\end{aligned}
$$

両辺を積分

$$
\begin{aligned}
xy &= \int\frac{x}{1 + x^2}dx \\
xy &= \frac{1}{2}\log(1 + x^2) + C \\
\therefore y &= \frac{1}{2x}\log(1 + x^2) + Cx^{-1}
\end{aligned}
$$

ただし、解は $x=0$ を含まない区間上で考える。

### (2)

まず $x>0,\ y>0$ の解を求める。

$$
\begin{aligned}
(\sqrt{xy} - x)\frac{dy}{dx} &= -y \notag \\
(\sqrt{\frac{y}{x}} - 1)\frac{dy}{dx} &= -\frac{y}{x} \tag{*} \\
\end{aligned}
$$

$u = \frac{y}{x} \Leftrightarrow y = ux$ とおく

$\frac{dy}{dx} = u + x\frac{du}{dx}$

$(*)$ に代入

$$
\begin{aligned}
(\sqrt{u} - 1)(u + x\frac{du}{dx}) &= -u \\
u + x\frac{du}{dx} &= -\frac{u}{\sqrt{u} - 1} \\
x\frac{du}{dx} &= -u - \frac{u}{\sqrt{u} - 1} \\
x\frac{du}{dx} &= - \frac{u \cdot \sqrt{u}}{\sqrt{u} - 1} \\
-\frac{\sqrt{u} - 1}{u\sqrt{u}}du &= \frac{1}{x}dx
\end{aligned}
$$

$$
\begin{aligned}
\int-\frac{u^{\frac{1}{2}} - 1}{u^{\frac{3}{2}}}du &= \int\frac{1}{x}dx \\
\int-\frac{1}{u}du + \int u^{-\frac{3}{2}}du &= \log x + C \\
-\log u - 2u^{-\frac{1}{2}} &= \log x + C \\
-2u^{-\frac{1}{2}} &= \log ux + C \\
-2u^{-\frac{1}{2}} &= \log y + C
\end{aligned}
$$

$u = \frac{y}{x}$ より、

$$
\begin{aligned}
-2\sqrt{\frac{x}{y}} &= \log y + C \\
\log y + 2\sqrt{\frac{x}{y}} &= -C \\
\log y + \log e^{2\sqrt{\frac{x}{y}}} &= -C \\
\log (ye^{2\sqrt{\frac{x}{y}}}) &= -C
\end{aligned}
$$

したがって、この範囲での解は

$$
\log y+2\sqrt{\frac{x}{y}}=C.
$$

また $y\equiv0$ も解である。$x<0,\ y<0$ の範囲では
$X=-x,\ Y=-y$ とおいて同様に計算すると

$$
\log(-y)-2\sqrt{\frac{x}{y}}=C
$$

を得る。
