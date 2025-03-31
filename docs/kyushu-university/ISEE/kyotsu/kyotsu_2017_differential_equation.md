---
sidebar_label: "2017年度 微分方程式"
sidebar_position: 28
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2017年度 微分方程式

## **Author**
Zero

## **Description**
次の微分方程式の一般解を求めよ．

(1) $\frac{dy}{dx} + \frac{y}{x} = \frac{1}{1 + x^2}$
 
(2) $(\sqrt{xy} - x) \frac{dy}{dx} = -y$


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

### (2)

$$
\begin{align}
(\sqrt{xy} - x)\frac{dy}{dx} &= -y \notag \\
(\sqrt{\frac{y}{x}} - 1)\frac{dy}{dx} &= -\frac{y}{x} \tag{*} \\
\end{align}
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
\log (ye^{2\sqrt{\frac{x}{y}}}) &= -C \\ 
\end{aligned}
$$
