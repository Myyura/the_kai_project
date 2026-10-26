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

図5-1のような段付き棒①を荷重 $F$ で引張ることを考える。段付き棒①の上下は幅が $2w$ で長さが $l/4$，中央部は幅が $w$ で長さが $l/2$ である。奥行き方向の厚さはすべて $d$ とする。奥行き方向には拘束がなく，$xy$ 平面の平面応力場近似が成立すると仮定する。ヤング率は $E$，ポアソン比を $\nu$ とする。

(1) 段付き棒①の伸びを求めよ。

(2) 図5-2のように，段付き棒①の幅が $w$ の部分に，引張方向と $45^\circ$ をなす角度でひずみゲージが取り付けられている。設問(1)と同様，荷重 $F$ が加わっている場合の，このひずみゲージのひずみの値を求めよ。

![図5-1・図5-2：段付き棒とひずみゲージ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_5_original_fig1.png)

次に，図5-3のように，幅 $2w$，長さ $l$，奥行き方向の厚さ $d$ の棒②が，段付き棒①と剛体を介して並列につながれた系を考える。棒の上部は壁に拘束されており，剛体は $y$ 方向にしか移動できないように拘束されている。棒②のヤング率，ポアソン比は段付き棒①と同じとする。

(3) 剛体に鉛直下向き荷重 $F$ を加えた時の剛体の変位を求めよ。

(4) 図5-3の系において，段付き棒①の温度を $\Delta T\ (>0)$ 上昇させた。温度上昇による剛体の変位量を求めよ。ただし，段付き棒①の線膨張係数を $\alpha\ (>0)$ とする。

![図5-3：並列棒と拘束された剛体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_5_original_fig2.png)

### 题目描述

考虑用载荷 $F$ 拉伸图5-1所示的阶梯杆①。阶梯杆①的上、下段宽均为 $2w$、长均为 $l/4$，中段宽为 $w$、长为 $l/2$，沿纵深方向的厚度均为 $d$。纵深方向不受约束，假设可采用 $xy$ 平面内的平面应力近似。杨氏模量为 $E$，泊松比为 $\nu$。

(1) 求阶梯杆①的伸长量。

(2) 如图5-2所示，在阶梯杆①宽度为 $w$ 的部分，安装与拉伸方向成 $45^\circ$ 的应变片。与第(1)问相同，在施加载荷 $F$ 时，求该应变片测得的应变。

![图5-1、图5-2：阶梯杆及应变片](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_5_original_fig1.png)

接着考虑图5-3所示的并联系统：宽 $2w$、长 $l$、纵深厚度 $d$ 的杆②，通过刚体与阶梯杆①并联。两杆上端固定于墙面，刚体被约束为只能沿 $y$ 方向移动。杆②的杨氏模量、泊松比均与阶梯杆①相同。

(3) 向刚体施加竖直向下载荷 $F$ 时，求刚体的位移。

(4) 在图5-3的系统中，将阶梯杆①的温度升高 $\Delta T\ (>0)$。求此温升引起的刚体位移量。阶梯杆①的线膨胀系数为 $\alpha\ (>0)$。

![图5-3：并联杆及受约束的刚体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/mech/2021/mech_2020_II_5_original_fig2.png)

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
