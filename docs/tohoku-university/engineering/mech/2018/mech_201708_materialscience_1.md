---
sidebar_label: "2017年8月実施 材料物性学 第1問"
tags:
  - Tohoku-University
  - Engineering.Materials-Science.Frank-Read-Source
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 材料物性学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 金属材料に応力が負荷されると材料内部で転位の増殖が起こる。この転位の増殖の機構について下記の問いに答えよ。ここで，材料中の転位のバーガースベクトルの大きさを $b$，この金属材料の剛性率を $G$ とする。

**(1)** 図1にあるように，2本の転位との交差によって，すべり面上で両端を点 A と B で固定された転位切片 AB に，図のようにせん断応力 $\tau$ が作用した時に起こる転位の増殖機構の名称を記せ。

![図1 すべり面上で両端を固定された転位切片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_original_figure_1.png)

図1　2本の転位との交差によって両端をすべり面上の点 A と B で固定された転位切片 AB

**(2)** 両端を固定されたこの転位切片 AB のすべり面上で，転位切片に垂直にせん断応力 $\tau$ が働くと，すべり面上で図2のように転位切片が張り出してくる。転位に働く力 $f$ が $f=\tau bl$ と表せるとすると，この転位切片に働く張力 $T$ を求めよ。ここでせん断応力がかかっていないときの転位切片の長さを $l$，転位切片が張り出す角度を $\theta$ とする。

![図2 せん断応力で張り出した転位切片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_original_figure_2.png)

図2　転位切片 AB にすべり面上でせん断応力 $\tau$ が働き，転位切片が張り出した状態

**(3)** 転位の単位長さ当たりのエネルギー $E_d$ が $E_d=Gb^2$ と表されるものとする。この関係を使って $\tau$ と転位切片の張り出し角 $\theta$ との関係を示せ。また $\tau$ の最大値 $\tau_{\max}$ を求めよ。

**(4)** せん断応力 $\tau$ がこの $\tau_{\max}$ を超えたとき転位が増殖する。その様子を図を描いて説明せよ。

**(5)** 金属材料の塑性変形に及ぼすこの転位の増殖機構の役割を説明せよ。

**(6)** ランダムな転位配列の場合，転位密度を $\rho_d$ とすると，$l$ は $l=\rho_d^{-1/2}$ と表される。この時，この材料の降伏応力 $k$ を $\rho_d$ の関数として表せ。

### 题目描述

1. 金属材料受应力作用时，材料内部会发生位错增殖。针对这一位错增殖机制回答下列问题。设材料中位错的柏氏矢量大小为 $b$，该金属材料的剪切模量为 $G$。

**(1)** 如图1所示，位错段 AB 由于与另外两根位错相交，在滑移面上的 A、B 两点被固定。当它受到图示的剪应力 $\tau$ 作用时，写出所发生的位错增殖机制的名称。

图1：由于与两根位错相交而在滑移面上 A、B 两点固定两端的位错段 AB。

**(2)** 在该两端固定的位错段 AB 的滑移面上，沿垂直于位错段的方向施加剪应力 $\tau$ 时，位错段如图2所示在滑移面内弓出。设作用于位错的力为 $f=\tau bl$，求位错段中的张力 $T$。其中 $l$ 为未受剪应力时的位错段长度，$\theta$ 为位错段的弓出角。

图2：剪应力 $\tau$ 在滑移面内作用于位错段 AB，使位错段弓出的状态。

**(3)** 设单位长度位错的能量 $E_d$ 可表示为 $E_d=Gb^2$。利用该关系，给出 $\tau$ 与位错段弓出角 $\theta$ 的关系，并求 $\tau$ 的最大值 $\tau_{\max}$。

**(4)** 当剪应力 $\tau$ 超过 $\tau_{\max}$ 时，位错发生增殖。画图说明这一过程。

**(5)** 说明这一位错增殖机制对金属材料塑性变形的作用。

**(6)** 对随机位错排列，若位错密度为 $\rho_d$，则 $l=\rho_d^{-1/2}$。将该材料的屈服应力 $k$ 表示为 $\rho_d$ 的函数。

## **Kai**

### (1)

**フランク・リード源（Frank–Read source）**。

### (2)

端点に働く線張力の、ABに垂直な成分を合計すると

$$
2T\sin\theta=\tau bl,\qquad \boxed{T=\frac{\tau bl}{2\sin\theta}}.
$$

### (3)

線張力は転位の長さを増すのに必要なエネルギーであり、$T=E_d=Gb^2$。従って

$$
\tau=\frac{2Gb}{l}\sin\theta.
$$

半円形の $\theta=\pi/2$ で最大となり、

$$
\boxed{\tau_{\mathrm c}=\frac{2Gb}{l}}.
$$

### (4)

![解答図 1/4：元図の第1パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_answer_layout_1.svg)

![解答図 2/4：元図の第2パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_answer_layout_2.svg)

![解答図 3/4：元図の第3パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_answer_layout_3.svg)

![解答図 4/4：元図の第4パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materialscience_1_answer_layout_4.svg)

応力が臨界値を超えると半円状の転位は安定形を保てず、ピン止め点を回り込むように拡大する。背後で向きの反対の転位部分が接触して消滅すると、閉じた転位ループと、A、Bを結ぶ転位が残る。再生したABから同じ過程が繰り返され、ループが連続的に放出される。

### (5)

転位を次々と供給するため、少数の初期転位から大きな塑性ひずみを生じうる。増殖した転位同士の相互作用は転位運動を妨げ、加工硬化にもつながる。

### (6)

本問のせん断降伏応力を増殖開始応力とおくと

$$
k=\tau_{\mathrm c}=\frac{2Gb}{l}=\boxed{2Gb\sqrt{\rho_d}}.
$$

したがって $k\propto\sqrt{\rho_d}$。引張降伏応力への換算には結晶方位等の係数が別途必要である。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 21ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
