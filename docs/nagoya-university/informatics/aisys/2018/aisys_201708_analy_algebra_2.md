---
sidebar_label: "2017年8月実施 解析・線形代数 [2]"
tags:
  - Nagoya-University
  - Mathematics.Complex-Analysis.Complex-Numbers
---
# 名古屋大学 情報学研究科 知能システム学専攻 2017年8月実施 解析・線形代数 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

出典：[名古屋大学・2018年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/0418e4d9b838956c155278f11a9e0bbf.pdf)、解析・線形代数。導出過程も示す。


以下の問いに答えよ。ただし、 $\text{Im}(z)$ は複素数 $z$ の虚部を表す。

(a) $z$ 平面上の直線 $\text{Im}(z) = \frac{1}{2}$ が複素関数 $w = \frac{1}{z}$ によって写される $w$ 平面上の図形を求め、図示せよ。

(b) $z$ 平面上の領域 $\text{Im}(z) > 0$ が $1$ 次分数変換 $w = \frac{\alpha z + \beta}{z + \gamma}$ によって $w$ 平面上の領域 $|w| < 1$ に写されるとき、複素数 $\alpha, \beta, \gamma$ を求めよ。

### 题目描述

回答下列问题，其中 $\operatorname{Im}(z)$ 表示复数 $z$ 的虚部。

1. 在复函数

   $$
   w=\frac1z
   $$

   下，求 $z$ 平面中的直线

   $$
   \operatorname{Im}(z)=\frac12
   $$

   在 $w$ 平面上的像，并画出该图形；
2. 一次分式变换

   $$
   w=\frac{\alpha z+\beta}{z+\gamma}
   $$

   将 $z$ 平面中的上半平面 $\operatorname{Im}(z)>0$ 映为 $w$ 平面中的单位圆盘 $|w|<1$。求复数 $\alpha,\beta,\gamma$。

## **Kai**

(a) $w = \frac{1}{z}$ より、 $z = \frac{1}{w}$ 。
$z = x + iy$ , $w = u + iv$ とおくと、 $x + iy = \frac{1}{u + iv} = \frac{u - iv}{u^2 + v^2}$ 。
したがって、 $x = \frac{u}{u^2 + v^2}$ , $y = \frac{-v}{u^2 + v^2}$ 。
$\text{Im}(z) = y = \frac{1}{2}$ より、 $\frac{-v}{u^2 + v^2} = \frac{1}{2}$ 。
これを整理すると、 $u^2 + v^2 + 2v = 0$ , つまり $u^2 + (v+1)^2 = 1$ 。
これは中心 $0-i$ , 半径1の円を表す。
有限の $z$ に対する $1/z$ は $0$ にならない。逆に、この円上の $w\ne0$ には $z=1/w$ が対応し、$\operatorname{Im}z=1/2$ を満たす。したがって、像は

$$
u^2+(v+1)^2=1,\qquad w\ne0
$$

である。

![直線 Im z = 1/2 の反転像。中心 -i、半径1の円から原点を除く。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/aisys/2018/nagoya-aisys2018-inversion.svg)

(b) 条件を満たす係数の全体は

$$
\boxed{\alpha=e^{i\theta},\qquad
\gamma=p+iq,\qquad
\beta=e^{i\theta}(p-iq)},
\qquad \theta,p\in\mathbb R,\quad q>0
$$

である。このとき

$$
w=e^{i\theta}\frac{z+p-iq}{z+p+iq}.
$$

実数 $z=x$ に対し $|w|=1$ となり、$z=x+iy$ に対して

$$
1-|w|^2=\frac{4qy}{(x+p)^2+(y+q)^2}>0\qquad(y>0)
$$

である。逆変換は

$$
z=\frac{\beta-\gamma w}{w-\alpha},\qquad
\operatorname{Im}z=\frac{q(1-|w|^2)}{|w-\alpha|^2}>0\qquad(|w|<1)
$$

となるので、上半平面の像は単位円盤全体である。

全ての解がこの形になることも示す。実軸上での $|\alpha x+\beta|^2=|x+\gamma|^2$ を $x$ の多項式として比較すると、

$$
|\alpha|=1,\qquad
\operatorname{Re}(\beta/\alpha)=\operatorname{Re}\gamma,\qquad
|\beta/\alpha|=|\gamma|
$$

を得る。したがって $\beta/\alpha=\gamma$ または $\overline\gamma$ である。前者は定数写像となり一次分数変換ではないため除外され、後者で上半平面を円盤の内側に写す条件は $\operatorname{Im}\gamma>0$ である。

例えば $\theta=p=0,\ q=1$ とすれば、$\alpha=1,\beta=-i,\gamma=i$ を得る。
