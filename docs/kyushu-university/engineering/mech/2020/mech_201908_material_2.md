---
sidebar_label: "2019年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Physics.Mechanics.Euler-Bernoulli-Beam
---

# 九州大学 工学府 機械系専攻 2019年8月実施 材料力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $6a$ の一様な弾性ばり AB（縦弾性係数 $E$、断面二次モーメント $I$）を、A でピン、B でローラにより単純支持する。A を $x=0$、B を $x=6a$ とし、$y$ 軸は鉛直下向きとする。$x=4a$ の点 C から鉛直下に延び、点 D で左へ曲がって点 F（$x=3a$）に至る剛体 CDF を、C でばりに溶接する。F に下向き集中荷重 $P$、ばりの $a\le x\le5a$ に一定の下向き分布荷重 $q$ を加える。ばりの断面寸法は $a$ に比べ十分小さく、ばりと剛体の自重を無視する。

1. $q=P/a$ として A、B の反力を求めよ。
2. $q=P/a$ として、ばり AB のせん断力線図（SFD）と曲げモーメント線図（BMD）を描け。
3. $P=0$ として分布荷重 $q$ のみを加えるとき、C の $y$ 方向変位を求めよ。

#### 题目描述

均匀简支梁长 $6a$，A 为铰支座、B 为滚动支座，坐标从 A 向右，竖直向下为正。位于 $x=4a$ 的 C 点焊接一刚体，该刚体先向下延伸到 D，再向左延伸到 $x=3a$ 的 F；F 受向下集中力 $P$。梁在 $a\le x\le5a$ 受向下均布载荷 $q$，忽略自重和剪切变形。① 当 $q=P/a$ 时求两支反力。② 画此时的剪力图和弯矩图。③ 当 $P=0$、仅有均布载荷时，求 C 向下的挠度。

## **Kai**

### (1)

剛体 CDF は C に下向きの力 $P$ と反時計回りの偶力 $Pa$ を伝える。上向き反力を $R_A,R_B$ とすると

$$
R_A+R_B=5P,\qquad6aR_B-4P(3a)-P(4a)+Pa=0.
$$

よって $\boxed{R_A=R_B=5P/2}$。A の水平反力は $0$。

### (2)

せん断力 $F_s$ は左側外力の上向き合計を正、曲げモーメント $M$ は下側引張を正とする。$\xi=x/a$ とおけば

$$
\frac{F_s}{P}=\begin{cases}
5/2&0<\xi<1,\\
7/2-\xi&1<\xi<4,\\
5/2-\xi&4<\xi<5,\\
-5/2&5<\xi<6,
\end{cases}
$$

$$
\frac M{Pa}=\begin{cases}
5\xi/2&0\le\xi\le1,\\
5\xi/2-(\xi-1)^2/2&1\le\xi<4,\\
5\xi/2-(\xi-1)^2/2-(\xi-4)-1&4<\xi\le5,\\
5(6-\xi)/2&5\le\xi\le6.
\end{cases}
$$

C では $F_s/P:-1/2\to-3/2$、$M/(Pa):11/2\to9/2$ と不連続になる。最大曲げモーメントは $x=7a/2$ における $45Pa/8$。

![せん断力線図と曲げモーメント線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/kyushu_201908_material2.svg)

### (3)

$q$ は独立な分布荷重とする。$\langle x-b\rangle=\max(x-b,0)$ とおけば、反力 $2qa$ より

$$
M(x)=2qax-\frac q2\langle x-a\rangle^2+\frac q2\langle x-5a\rangle^2.
$$

下向きたわみ $v$ は $EIv''=-M$。二回積分し、$v(0)=v(6a)=0$ を課すと

$$
EIv=-\frac{qa}{3}x^3+\frac q{24}\langle x-a\rangle^4
-\frac q{24}\langle x-5a\rangle^4+\frac{23}{3}qa^3x.
$$

したがって

$$
\boxed{v(4a)=\frac{305qa^4}{24EI}}\qquad\text{（鉛直下向き）}.
$$

## **Reference**

- [九州大学 2020年度 材料力学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-material.pdf)
