---
sidebar_label: "2021年度 問題 5（材料力学）"
tags:
  - Tokyo-University
  - Engineering.Mechanics-of-Materials.Axial-Deformation
  - Engineering.Mechanics-of-Materials.Strain-Gauge
  - Engineering.Mechanics-of-Materials.Thermal-Deformation-Compatibility
---

# 東京大学 工学系研究科 機械工学専攻 2021年度 機械工学（材料力学） 問題 5

## **Author**

祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

段付き棒①の全長は $l$、奥行きは $d$。上下の区間はそれぞれ長さ $l/4$、幅 $2w$、中央区間は長さ $l/2$、幅 $w$ である。ヤング率は $E$、ポアソン比は $\nu$ とし、平面応力状態を仮定する。

1. 棒①を軸方向の力 $F$ で引っ張るときの伸びを求めよ。
2. 中央区間に引張方向と $45^\circ$ をなすひずみゲージを貼る。同じ荷重 $F$ の下での測定ひずみを求めよ。
3. 長さ $l$、幅 $2w$、厚さ $d$、同じ $E,\nu$ の棒②を①と並列に配置する。上端を固定し、下端を回転せず鉛直移動のみ可能な剛体で連結する。剛体に下向き荷重 $F$ を加えたときの変位を求めよ。
4. この並列系で棒①のみを $\Delta T>0$ 加熱する。棒①の線膨張係数を $\alpha$ として、温度上昇による剛体の変位増分を求めよ。

![構造・座標の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/materials/2021-5-geometry.svg)

#### 题目描述

阶梯杆①总长 $l$、厚度 $d$，两端各长 $l/4$、宽 $2w$，中段长 $l/2$、宽 $w$，材料参数为 $E,\nu$。求拉力 $F$ 下伸长及中央与轴线成 $45^\circ$ 应变片的读数。再将其与同材料、长 $l$、截面 $2wd$ 的杆②并联，上端固定、下端以不转动刚体连接，求刚体受向下力 $F$ 的位移，以及仅①升温 $\Delta T$（线膨胀系数 $\alpha$）造成的位移增量。

## **Kai**

### (1)

各区間の伸びを加えると

$$
\boxed{\delta_1=2\frac{F(l/4)}{2Ewd}+\frac{F(l/2)}{Ewd}=\frac{3Fl}{4Ewd}}.
$$

### (2)

中央では軸方向ひずみ $\varepsilon_\parallel=F/(Ewd)$、横ひずみ $\varepsilon_\perp=-\nu F/(Ewd)$、せん断ひずみゼロ。したがって

$$
\boxed{\varepsilon_g=\frac{\varepsilon_\parallel+\varepsilon_\perp}{2}=\frac{(1-\nu)F}{2Ewd}}.
$$

### (3)

軸剛性は $k_1=4Ewd/(3l),\ k_2=2Ewd/l$。共通変位を $\delta$ とすると $(k_1+k_2)\delta=F$ より

$$
\boxed{\delta=\frac{3Fl}{10Ewd}}\quad\text{（下向き）}.
$$

### (4)

下向きを正とした熱変位増分を $\delta_T$ とすると、外力の増分はゼロなので

$$
k_1(\delta_T-\alpha l\Delta T)+k_2\delta_T=0.
$$

したがって

$$
\boxed{\delta_T=\frac{k_1}{k_1+k_2}\alpha l\Delta T=\frac25\alpha l\Delta T}\quad\text{（下向き）}.
$$

## **Reference**

- [東京大学 公式問題（2021年度、第2部）](https://www2.mech.t.u-tokyo.ac.jp/wp-content/uploads/2022/04/R02%E7%AC%AC2%E9%83%A8.pdf)
- [SN：2021-I 材料力学](https://bloodystream.hatenadiary.jp/entry/2023/08/17/203000)
