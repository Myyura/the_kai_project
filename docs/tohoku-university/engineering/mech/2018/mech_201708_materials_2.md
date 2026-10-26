---
sidebar_label: "2017年8月実施 材料力学 第2問"
tags:
  - Tohoku-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 材料力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. 長さ $L$ の真直ばり AB が，図2に示すように，C 点で鉛直下向きに集中荷重 $W$ の作用を受けている。AC と BC の長さは，それぞれ $a$ および $b$ である。また，はりの曲げこわさは $EI$ とし，はりの自重は無視できるものとする。以下の問いに答えよ。

**(1)** 図2(a)のように，はりが両端 A，B で単純支持されている。C 点におけるはりのたわみ $y_c$ を求めよ。

![図2(a) 両端単純支持ばり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materials_2_original_figure_1.png)

**(2)** 図2(b)のように，はりが両端 A，B で，剛体の天井に鉛直方向に固定された初期長さが同じ2つのばね AD と BE により支持されている。2つのばねのばね定数を $k$ とし，ばねの変形は微小であるものとする。ばねの自重は無視できるものとして，C 点の鉛直変位 $\delta_c$ を求めよ。

![図2(b) ばねで支持されたはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materials_2_original_figure_2.png)

### 题目描述

2. 长度为 $L$ 的直梁 AB 如图2所示，在 C 点受到竖直向下的集中载荷 $W$。AC、BC 的长度分别为 $a,b$。梁的抗弯刚度为 $EI$，忽略梁的自重。回答下列问题。

**(1)** 如图2(a)，梁在 A、B 两端简支。求 C 点的挠度 $y_c$。

**(2)** 如图2(b)，梁的 A、B 两端分别由初始长度相同的两根弹簧 AD、BE 支承，弹簧竖直固定于刚性天花板。两根弹簧的弹簧常数均为 $k$，弹簧变形为微小变形。忽略弹簧自重，求 C 点的竖直位移 $\delta_c$。

## **Kai**

### (1)

上向き反力は $R_A=Wb/L,R_B=Wa/L$。下向きたわみを正とし、$x$ をAから測ると

$$
M_1=\frac{Wb}{L}x\ (x\le a),\qquad
M_2=\frac{Wa}{L}(L-x)\ (x\ge a).
$$

$EIy''=-M$ を積分し、$y(0)=y(L)=0$、$x=a$ での $y,y'$ の連続条件を課す。左区間では

$$
y_1(x)=\frac{Wbx}{6EIL}(L^2-b^2-x^2).
$$

従って

$$
y_C=\frac{Wab}{6EIL}(L^2-b^2-a^2)
=\boxed{\frac{Wa^2b^2}{3EIL}}\quad\text{（下向き）}.
$$

### (2)

静定なのでばね反力も $Wb/L,Wa/L$。端点沈下は

$$
\delta_A=\frac{Wb}{kL},\qquad\delta_B=\frac{Wa}{kL}.
$$

端点沈下を結ぶ直線のC点変位は $(b/L)\delta_A+(a/L)\delta_B$。これと曲げたわみを重ね合わせて

$$
\boxed{\delta_C=\frac{Wa^2b^2}{3EIL}+\frac{W(a^2+b^2)}{kL^2}}\quad\text{（下向き）}.
$$

$k\to\infty$ で (1) の結果に一致する。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 16ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
