---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

領域Dを

$$
D = \{(x, y)| x^2 + y^2 \leq 2\}
$$

のように定義するとき、次の二重積分を求めよ。

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy
$$

### 题目描述

定义区域

$$
D=\{(x,y)\mid x^2+y^2\leq2\}.
$$

求二重积分

$$
\iint_D
\sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}\,dx\,dy.
$$

## **Kai**

首先，将直角坐标转换为极坐标： $x = r\cos\theta, y = r\sin\theta$ , 并且 $x^2+y^2=r^2$ , $dxdy = rdrd\theta$ 。
积分区域D变为 $0 \leq r \leq \sqrt{2}, 0 \leq \theta \leq 2\pi$ 。

原积分变为：

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy = \int_0^{2\pi} \int_0^{\sqrt{2}} \sqrt{\frac{2-r^2}{2+r^2}}rdrd\theta
$$

令 $u = r^2$ , 则 $du = 2rdr$ , 所以 $rdr = \frac{1}{2}du$ 。
当 $r=0$ 时, $u=0$ 。当 $r=\sqrt{2}$ 时, $u=2$ 。

积分变为：

$$
\int_0^{2\pi} \int_0^{2} \sqrt{\frac{2-u}{2+u}}\frac{1}{2}dud\theta = \frac{1}{2} \int_0^{2\pi} \int_0^{2} \sqrt{\frac{2-u}{2+u}}dud\theta
$$

考虑积分 $\int_0^{2} \sqrt{\frac{2-u}{2+u}}du$ 。
令 $u = 2\cos(2v)$ , 则 $du = -4\sin(2v)dv$ 。
当 $u=0$ 时, $2\cos(2v) = 0$ , 则 $2v = \frac{\pi}{2}$ , $v = \frac{\pi}{4}$ 。
当 $u=2$ 时, $2\cos(2v) = 2$ , 则 $\cos(2v) = 1$ , $2v = 0$ , $v = 0$ 。
因此,

$$
\sqrt{\frac{2-u}{2+u}} = \sqrt{\frac{2-2\cos(2v)}{2+2\cos(2v)}} = \sqrt{\frac{1-\cos(2v)}{1+\cos(2v)}} = \sqrt{\frac{2\sin^2(v)}{2\cos^2(v)}} = \sqrt{\tan^2(v)} = \tan(v)
$$

则积分变为:

$$
\int_{\pi/4}^{0} \tan(v)(-4\sin(2v))dv = 4\int_0^{\pi/4} \tan(v)(2\sin(v)\cos(v))dv = 8 \int_0^{\pi/4} \frac{\sin(v)}{\cos(v)} \sin(v)\cos(v)dv = 8\int_0^{\pi/4} \sin^2(v)dv
$$

$$
\int_0^{\pi/4} \sin^2(v)dv = \int_0^{\pi/4} \frac{1 - \cos(2v)}{2}dv = \frac{1}{2} \left[v - \frac{\sin(2v)}{2}\right]_0^{\pi/4} = \frac{1}{2} \left[\frac{\pi}{4} - \frac{\sin(\pi/2)}{2}\right] = \frac{1}{2} \left(\frac{\pi}{4} - \frac{1}{2}\right) = \frac{\pi}{8} - \frac{1}{4}
$$

因此，

$$
\int_0^{2} \sqrt{\frac{2-u}{2+u}}du = 8\left(\frac{\pi}{8} - \frac{1}{4}\right) = \pi - 2
$$

原积分变为:

$$
\frac{1}{2} \int_0^{2\pi} (\pi - 2) d\theta = \frac{1}{2} (\pi - 2) \int_0^{2\pi} d\theta = \frac{1}{2} (\pi - 2) [\theta]_0^{2\pi} = \frac{1}{2} (\pi - 2) (2\pi) = \pi(\pi - 2) = \pi^2 - 2\pi
$$

因此，

$$
\iint_{D} \sqrt{\frac{2-x^2-y^2}{2+x^2+y^2}}dxdy = \pi^2 - 2\pi
$$
