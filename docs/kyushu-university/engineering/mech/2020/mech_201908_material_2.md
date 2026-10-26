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

図に示すように、剛体 CDF が位置 $x=4a$ の点 C で溶接された長さ $6a$ の弾性体棒 AB（ヤング率：$E$、断面二次モーメント：$I$）がある。点 F に集中荷重 $P$、$x=a$ から $x=5a$ に一定の分布荷重 $q$ が加えられている。なお、はりの断面寸法は $a$ に比べて十分小さく、剛体と弾性体棒の自重は無視できるものとする。以下の問いに答えよ。（50点）

**(1)** $q=P/a$ として、支持点 A と B に働く反力をそれぞれ求めよ。

**(2)** $q=P/a$ として、弾性体棒 AB のせん断力線図（SFD）と曲げモーメント線図（BMD）を描け。

**(3)** 集中荷重 $P=0$ の時、すなわち分布荷重 $q$ のみが加えられているとして、点 C の $y$ 方向変位を求めよ。

図中、$q$ は単位長さ当たりの荷重である。$x$ 軸は A から右向き、$y$ 軸は下向きとし、支持形式、荷重の向きおよび各寸法は図示のとおりである。

![原題の弾性はり・剛体CDF・分布荷重](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_material_2_figure_1.png)

### 题目描述

如图，有一长度为 $6a$ 的弹性杆 AB，杨氏模量为 $E$、截面二次矩为 $I$，在 $x=4a$ 的 C 点焊接刚体 CDF。F 点受到集中载荷 $P$，从 $x=a$ 至 $x=5a$ 的区间受到恒定分布载荷 $q$。梁的截面尺寸相对于 $a$ 充分小，刚体和弹性杆的自重可以忽略。回答下列问题。（50分）

**(1)** 令 $q=P/a$，分别求支点 A、B 的反力。

**(2)** 令 $q=P/a$，绘制弹性杆 AB 的剪力图（SFD）和弯矩图（BMD）。

**(3)** 当集中载荷 $P=0$，即仅施加分布载荷 $q$ 时，求 C 点沿 $y$ 方向的位移。

图中 $q$ 为单位长度上的载荷。$x$ 轴从 A 点向右，$y$ 轴向下，支承形式、载荷方向及各尺寸如图所示。

## **Kai**

### (1)

剛体 CDF は C に下向きの力 $P$ と反時計回りの偶力 $Pa$ を伝える。上向き反力を $R_A,R_B$ とすると

$$
\begin{gathered}
R_A+R_B=5P,\qquad6aR_B-4P(3a)-P(4a)+Pa\\
=0.
\end{gathered}
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
