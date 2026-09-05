---
sidebar_label: "2018年8月実施 解析・線形代数 [3]"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Numbers
---
# 名古屋大学 情報学研究科 知能システム学専攻 2018年8月実施 解析・線形代数 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

出典：[名古屋大学・2019年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e71e2adef95ac6ee904f160a89c4888f.pdf)、解析・線形代数。導出過程も示す。


複素数 $z$ について、以下の問いに答えよ。ただし、 $i$ は虚数単位を表す。

(a) $z = e^{\frac{\pi}{3}i}$ とし、 $n = 0, 1, 2, ..., 5$ とするとき、複素平面上での $z^n$ の座標をすべて求めよ。

(b) 複素関数 $w = e^z$ を考える。下図のように $z$ が複素平面上で、4点 $(1, 0)$ , $(1, \frac{\pi}{4})$ , $(2, \frac{\pi}{4})$ , $(2, 0)$ を頂点とする四角形上を移動したとき、複素平面上での $w$ の軌跡を描け。

### 题目描述

回答下列复数问题，其中 $i$ 为虚数单位。

1. 令

   $$
   z=e^{\pi i/3},
   $$

   对 $n=0,1,2,\ldots,5$，求复平面中所有 $z^n$ 的坐标；
2. 考察复函数 $w=e^z$。如原题图所示，$z$ 沿复平面上以

   $$
   (1,0),\quad\left(1,\frac{\pi}{4}\right),\quad
   \left(2,\frac{\pi}{4}\right),\quad(2,0)
   $$

   为顶点的四边形边界移动。画出 $w$ 在复平面中的轨迹。

## **Kai**

(a)  $z = e^{\frac{\pi}{3}i}$ . Then $z^n = e^{\frac{n\pi}{3}i}$ for $n = 0, 1, 2, 3, 4, 5$ .

$n = 0: z^0 = e^0 = 1 \rightarrow (1, 0)$

$n = 1: z^1 = e^{\frac{\pi}{3}i} = \cos(\frac{\pi}{3}) + i\sin(\frac{\pi}{3}) = \frac{1}{2} + i\frac{\sqrt{3}}{2} \rightarrow (\frac{1}{2}, \frac{\sqrt{3}}{2})$

$n = 2: z^2 = e^{\frac{2\pi}{3}i} = \cos(\frac{2\pi}{3}) + i\sin(\frac{2\pi}{3}) = -\frac{1}{2} + i\frac{\sqrt{3}}{2} \rightarrow (-\frac{1}{2}, \frac{\sqrt{3}}{2})$

$n = 3: z^3 = e^{\pi i} = \cos(\pi) + i\sin(\pi) = -1 \rightarrow (-1, 0)$

$n = 4: z^4 = e^{\frac{4\pi}{3}i} = \cos(\frac{4\pi}{3}) + i\sin(\frac{4\pi}{3}) = -\frac{1}{2} - i\frac{\sqrt{3}}{2} \rightarrow (-\frac{1}{2}, -\frac{\sqrt{3}}{2})$

$n = 5: z^5 = e^{\frac{5\pi}{3}i} = \cos(\frac{5\pi}{3}) + i\sin(\frac{5\pi}{3}) = \frac{1}{2} - i\frac{\sqrt{3}}{2} \rightarrow (\frac{1}{2}, -\frac{\sqrt{3}}{2})$

(b) Let $z = x + iy$ where $1 \leq x \leq 2$ and $0 \leq y \leq \frac{\pi}{4}$ .
Then $w = e^z = e^{x+iy} = e^x e^{iy} = e^x(\cos y + i\sin y)$ .

When $x = 1$ , $0 \leq y \leq \frac{\pi}{4}$ , $w = e(\cos y + i\sin y)$ .  This traces an arc of radius $e$ from $(e, 0)$ to $(e\cos(\frac{\pi}{4}), e\sin(\frac{\pi}{4})) = (\frac{e}{\sqrt{2}}, \frac{e}{\sqrt{2}})$ .

When $y = \frac{\pi}{4}$ , $1 \leq x \leq 2$ , $w = e^x(\cos(\frac{\pi}{4}) + i\sin(\frac{\pi}{4})) = e^x(\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}})$ . This traces a line segment from $(\frac{e}{\sqrt{2}}, \frac{e}{\sqrt{2}})$ to $(\frac{e^2}{\sqrt{2}}, \frac{e^2}{\sqrt{2}})$ .

When $x = 2$ , $0 \leq y \leq \frac{\pi}{4}$ , $w = e^2(\cos y + i\sin y)$ . This traces an arc of radius $e^2$ from $(e^2, 0)$ to $(\frac{e^2}{\sqrt{2}}, \frac{e^2}{\sqrt{2}})$ .

When $y = 0$ , $1 \leq x \leq 2$ , $w = e^x$ .  This traces a line segment from $e$ to $e^2$ on the real axis.

Thus the image is the boundary of the annular sector

$$
e\le |w|\le e^2,\qquad 0\le\arg w\le\frac\pi4.
$$

![長方形の境界と指数写像による扇形環の境界への対応](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2019/nagoya-aisys2019-exponential.svg)
