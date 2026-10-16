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

2017年10月・2018年4月入学対象、2017年8月実施。

すべり面上で2点A、Bに固定された長さ $l$ の転位を考える。バーガースベクトルの大きさを $b$、剛性率を $G$ とする。せん断応力 $\tau$ によって転位が張り出し、端点の接線がABとなす角を $\theta$ とする。転位全体に作用する力は $f=\tau bl$ である。

![固定された転位の張り出しと端点の角度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_fr_setup.svg)

1. この機構による転位増殖源の名称を答えよ。
2. 転位の線張力 $T$ を $\tau,b,l,\theta$ で表せ。
3. 転位の単位長さ当たりのエネルギーを $E_d=Gb^2$ として、$\tau$ の最大値を求めよ。
4. (3)の値を超える応力が作用したときの転位増殖過程を図示して説明せよ。
5. この機構が塑性変形に果たす役割を述べよ。
6. 転位密度を $\rho_d$、ピン止め点間距離を $l=\rho_d^{-1/2}$ として、降伏応力 $k$ と転位密度の関係を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

滑移面内长为 $l$ 的位错被钉扎于 A、B，柏氏矢量大小为 $b$、剪切模量为 $G$。剪应力 $\tau$ 使位错弯曲，端部切线与 AB 的夹角为 $\theta$，总作用力为 $\tau bl$。（1）回答增殖源名称；（2）求线张力；（3）给定位错线能 $E_d=Gb^2$，求临界应力；（4）画图说明超临界后的位错增殖；（5）说明对塑性变形的作用；（6）以 $l=\rho_d^{-1/2}$ 推导屈服应力与位错密度的关系。

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

![半円への張り出し、拡大、合体、ループ放出](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_fr_sequence.svg)

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
