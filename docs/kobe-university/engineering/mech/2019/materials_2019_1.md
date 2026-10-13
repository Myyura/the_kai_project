---
sidebar_label: "材料力学 第1問"
tags:
  - Kobe-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Yielding
---

# 神戸大学 工学研究科 機械工学専攻 2019年度 材料力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

直径 $d\ \mathrm{mm}$、長さ $5d$ の丸棒の左端を固定し、中心軸を $x$ 軸、固定端の中心を原点とする。右端には幅と厚さが無視できる長さ $5d$ の剛体板が、中心を棒の中心軸に合わせて $z$ 軸と平行に接合されている。板の上端 $z=5d/2$ には $+y$ 向きの $0.2P$、下端 $z=-5d/2$ には $+y$ 向きの $P$、棒の先端には $+x$ 向きの引張力 $5P$ が作用する。$P$ の単位はNとする。

![丸棒、剛体板、荷重方向と固定端断面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_materials1_setup.svg)

1. 軸方向の集中力による引張応力を求めよ。
2. 固定端表面の点A $(0,-d/2,0)$ の曲げ応力を求めよ。
3. Aと $z$ 軸について対称な点をA′とする。A–A′上の $\sigma_x$ の分布を図示し、特徴となる値を記入せよ。
4. ねじりによる点Aのせん断応力を求めよ。
5. 許容せん断応力を $\tau_{\mathrm{al}}\ \mathrm{MPa}$ とするとき、直径の二乗 $d^2$ の条件を求めよ。

#### 题目描述

直径 $d$、长 $5d$ 的圆轴左端固定，沿 $x$ 轴，右端连接沿 $z$ 方向、总长 $5d$ 的刚性板。板上端受 $+y$ 向 $0.2P$，下端受 $+y$ 向 $P$，轴端受 $+x$ 向拉力 $5P$。（1）求轴向拉应力；（2）求固定端 A$(0,-d/2,0)$ 的弯曲应力；（3）画出直径 A–A′上的轴向正应力；（4）求 A 的扭转剪应力；（5）按许用剪应力求 $d^2$ 的条件。$d$ 用mm，$P$ 用N，许用应力用MPa。

## **Kai**

まず合力と合モーメントは


$$
N=5P,\quad V_y=1.2P,\quad M_z=1.2P\cdot5d=6Pd,\quad T_x=(P-0.2P)\frac{5d}{2}=2Pd.
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

![軸力と曲げを重ね合わせた正応力の直線分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_materials1_stress.svg)

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
