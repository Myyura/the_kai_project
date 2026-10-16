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

2017年10月・2018年4月入学対象、2017年8月実施。

長さ $L$、曲げ剛性 $EI$ の真直ばり AB の点 C に下向き荷重 $W$ を加える。$AC=a,CB=b,L=a+b$ とし、自重を無視する。

1. A、Bで単純支持した場合のC点たわみ $y_C$ を求めよ。
2. A、Bを剛体天井から、自然長が等しくばね定数がともに $k$ の鉛直ばねで吊るす。ばねの微小変形を仮定し、C点の鉛直変位 $\delta_C$ を求めよ。

![単純支持とばね支持の二つのはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_materials2.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

无自重直梁 AB 长 $L$，弯曲刚度 $EI$，在C点受向下力 $W$，$AC=a,CB=b,L=a+b$。（1）两端简支时求C点挠度。（2）两端各由自然长度相同、刚度同为 $k$ 的竖直弹簧悬挂于刚性天花板，假定微小变形，求C点总竖向位移。

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
