---
sidebar_label: "2023年8月実施 解析・線形代数 [2]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 知能システム学専攻 2023年8月実施 解析・線形代数 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/17b639d81a91ac5dca245f353c6a2378.pdf)

$xy$ 平面上の閉曲線 $C$ が次の式で与えられているとき、以下の問いに答えよ。

$$
\begin{cases}
    x = \sin 5\theta \cos \theta \\
    y = \sin 5\theta \sin \theta
\end{cases}
\quad (0 \leq \theta \leq \pi)
$$

(a) $C$ の概形を $xy$ 平面上に図示せよ。

(b) $xy$ 平面上の $C$ で囲まれる部分の面積を求めよ。

### 题目描述

在 $xy$ 平面上，闭曲线 $C$ 由参数方程

$$
\begin{cases}
x=\sin5\theta\cos\theta,\\
y=\sin5\theta\sin\theta
\end{cases}
\qquad(0\le\theta\le\pi)
$$

给出。

1. 在 $xy$ 平面上画出 $C$ 的大致形状；
2. 求 $C$ 所围区域的面积。

## **Kai**

(a)
曲線 $C$ は媒介変数 $\theta$ を用いて

$$
x(\theta)=\sin(5\theta)\cos\theta,\qquad
y(\theta)=\sin(5\theta)\sin\theta
$$

と表される．ここで $\theta$ の範囲は $0\le \theta\le \pi$ とする．

$\sin(5\theta)$ の項により， $\theta$ が

$$
0,\ \frac{\pi}{5},\ \frac{2\pi}{5},\ \frac{3\pi}{5},\ \frac{4\pi}{5},\ \pi
$$

のとき $\sin(5\theta)=0$ となり，その都度原点を通過する．
したがって，曲線 $C$ は原点を中心とする $5$ 個のループをもつことが分かる．
また，

$$
\theta=0,\ \pi \ \Longrightarrow\ x=0,\ y=0
$$

であるから，曲線は閉曲線である．

各花弁の先端は、原点からの距離が $1$、偏角が $\pi/10+2k\pi/5$ ($k=0,1,2,3,4$) の点である。

![極曲線 r=sin(5θ) の5枚の花弁](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2024/nagoya-aisys2024-rose.svg)

(b)
媒介表示された平面曲線が囲む面積は

$$
A=\frac{1}{2}\int (x\,y'-y\,x')\,d\theta
$$

で与えられる．ここでは

$$
x(\theta)=\sin(5\theta)\cos\theta,\qquad
y(\theta)=\sin(5\theta)\sin\theta
$$

より，

$$
x'(\theta)
=5\cos(5\theta)\cos\theta-\sin(5\theta)\sin\theta,
$$

$$
y'(\theta)
=5\cos(5\theta)\sin\theta+\sin(5\theta)\cos\theta
$$

である．

これらを用いると，

$$
\begin{aligned}
x(\theta)y'(\theta)-y(\theta)x'(\theta)
&=\sin(5\theta)\cos\theta
\bigl(5\cos(5\theta)\sin\theta+\sin(5\theta)\cos\theta\bigr) \\
&\quad
-\sin(5\theta)\sin\theta
\bigl(5\cos(5\theta)\cos\theta-\sin(5\theta)\sin\theta\bigr) \\
&=\sin^2(5\theta)\bigl(\cos^2\theta+\sin^2\theta\bigr) \\
&=\sin^2(5\theta)
\end{aligned}
$$

となる．したがって，

$$
A=\frac{1}{2}\int_0^{\pi}\sin^2(5\theta)\,d\theta
$$

である．

ここで

$$
\sin^2(5\theta)=\frac{1-\cos(10\theta)}{2}
$$

を用いると，

$$
\begin{aligned}
A
&=\frac{1}{2}\int_0^{\pi}\frac{1-\cos(10\theta)}{2}\,d\theta \\
&=\frac{1}{4}\int_0^{\pi}(1-\cos(10\theta))\,d\theta \\
&=\frac{1}{4}
\left[
\theta-\frac{\sin(10\theta)}{10}
\right]_0^{\pi}
=\frac{\pi}{4}
\end{aligned}
$$

を得る．

よって，曲線 $C$ によって囲まれる面積は

$$
\frac{\pi}{4}
$$

である．
