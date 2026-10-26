---
sidebar_label: "2018年8月実施 材料力学 第1問"
tags:
  - Kobe-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Yielding
---

# 神戸大学 工学研究科 機械工学専攻 2018年8月実施 材料力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題[1]，[2]は別々の答案用紙に回答すること。

**[1]** 図1-1に示すように直径 $d\,[\mathrm{mm}]$ の丸棒が $x$ 軸と平行となるように左端が固定されている。丸棒の固定端の，丸棒断面の中心が原点となるように $xyz$ 座標系を定める。右端には丸棒の直径と比較して幅と厚さが十分小さい剛体板が $z$ 軸と平行で，剛体板の長手方向の中心が丸棒の中心軸と一致するように接合されている。剛体板の各先端に $y$ 軸方向に平行な $P\,[\mathrm N]$ および $0.2P\,[\mathrm N]$ の大きさの集中外力がそれぞれ作用しており，丸棒の先端には $x$ 軸方向に大きさ $5P\,[\mathrm N]$ の引張集中外力が作用している。円周率を $\pi$ とし，与えられた記号のみを用いて，以下の各問いに答えなさい。解答は解答用紙の右側欄の所定の場所に記述し，左側空欄に導出過程を記述すること。

**(1)** 丸棒先端に作用する引張集中外力により，丸棒断面（$x$ 軸に垂直な断面）に作用する引張応力を求めなさい。

**(2)** 剛体板の先端に作用する集中外力により，丸棒固定端の表面上の点 A（$(x,y,z)=(0,-d/2,0)$ の位置）に作用する曲げ応力を求めなさい。

**(3)** A 点と，$z$ 軸について対称な丸棒固定端の表面上の点 A′ を図1-1のようにとる。A–A′ 線上における，$x$ 軸方向の応力成分 $\sigma_x$ の応力分布を図示しなさい。応力分布図の特徴が分かるように必要な値を記述すること。

**(4)** 剛体板の先端に作用する集中外力によるトルクによって生じる，点 A に作用するせん断応力を求めなさい。

**(5)** 丸棒には軸力，曲げ，およびねじりが同時に作用する状態にある。丸棒の材料の許容せん断応力を $\tau_{\mathrm{al}}\,[\mathrm{MPa}]$ とするとき，軸の直径の二乗 $d^2$ が満たすべき条件式を求めなさい。

![図1-1 丸棒と剛体板に作用する集中外力](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/materials_201808_1_original_figure_1.png)

### 题目描述

问题[1]、[2]须分别在不同的答题纸上作答。

**[1]** 如图1-1，直径为 $d\,[\mathrm{mm}]$ 的圆杆左端固定，杆轴与 $x$ 轴平行。以圆杆固定端横截面的中心为原点建立 $xyz$ 坐标系。圆杆右端连接一块刚性板，其宽度和厚度相对圆杆直径足够小；板的长方向与 $z$ 轴平行，板长方向的中心与圆杆中心轴一致。板的两端分别受到平行于 $y$ 轴、大小为 $P\,[\mathrm N]$ 和 $0.2P\,[\mathrm N]$ 的集中外力，圆杆右端还受到沿 $x$ 轴方向、大小为 $5P\,[\mathrm N]$ 的集中拉力。圆周率记为 $\pi$，仅用题中给出的符号回答下列问题。答案须写在答题纸右栏的指定位置，推导过程写在左侧空白处。

**(1)** 求圆杆端部的集中拉力在圆杆横截面（垂直于 $x$ 轴的截面）上产生的拉应力。

**(2)** 求刚性板端部的集中外力在圆杆固定端表面 A 点（$(x,y,z)=(0,-d/2,0)$）产生的弯曲应力。

**(3)** 如图1-1，在圆杆固定端表面取与 A 点关于 $z$ 轴对称的 A′ 点，画出沿 A–A′ 线的 $x$ 方向应力分量 $\sigma_x$ 的分布。须标出能体现应力分布特征的必要数值。

**(4)** 求刚性板端部集中外力所产生的扭矩在 A 点产生的剪应力。

**(5)** 圆杆同时承受轴力、弯曲和扭转。设材料的许用剪应力为 $\tau_{\mathrm{al}}\,[\mathrm{MPa}]$，求轴直径的平方 $d^2$ 必须满足的条件。

图1-1给出了圆杆、刚性板的尺寸以及各集中力的方向和作用位置。

## **Kai**

まず合力と合モーメントは


$$
\begin{gathered}
N=5P,\\
V_y=1.2P,\\
M_z=1.2P\cdot5d=6Pd,\\
T_x=(P-0.2P)\frac{5d}{2}=2Pd.
\end{gathered}
$$


### (1)

断面積 $A=\pi d^2/4$ より $\boxed{\sigma_t=20P/(\pi d^2)}$。

### (2)

断面二次モーメントは $I_z=\pi d^4/64$。引張を正として


$$
\sigma_b=-\frac{M_z y}{I_z},\qquad \boxed{\sigma_{b,A}=\frac{192P}{\pi d^2}\quad\text{（引張）}}.
$$


### (3)


$$
\boxed{\sigma_x(y)=\frac{20P}{\pi d^2}-\frac{384P}{\pi d^3}y,\qquad -\frac d2\le y\le\frac d2}.
$$


従ってA、中心、A′の値は順に $212P/(\pi d^2)$、$20P/(\pi d^2)$、$-172P/(\pi d^2)$。応力ゼロの位置は $y=5d/96$ である。

![軸力と曲げを重ね合わせた正応力の直線分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/kobe201808_materials1_stress.svg)

### (4)

極断面二次モーメント $J=\pi d^4/32$ より、せん断応力の大きさは


$$
\boxed{\tau_A=\frac{T_x(d/2)}J=\frac{32P}{\pi d^2}}.
$$


### (5)

軸力・曲げ・ねじりを重ね合わせると、最大の引張正応力が生じる点Aが危険点となる。点Aでは横せん断力による応力はゼロである。最大せん断応力説より


$$
\tau_{\max}=\sqrt{\left(\frac{\sigma_{x,A}}2\right)^2+\tau_A^2}
=\frac P{\pi d^2}\sqrt{106^2+32^2}=\frac{2\sqrt{3065}\,P}{\pi d^2}.
$$


したがって


$$
\boxed{d^2\ge\frac{2\sqrt{3065}\,P}{\pi\tau_{\mathrm{al}}}}.
$$


指定の単位では右辺は $\mathrm{mm^2}$ になる。

## **Reference**

- [神戸大学公式問題の保存版：平成31年度 材料力学、PDF 1ページ](https://web.archive.org/web/20220524073520id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/2_H31_Materials.pdf)
