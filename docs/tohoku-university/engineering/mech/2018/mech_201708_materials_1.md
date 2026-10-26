---
sidebar_label: "2017年8月実施 材料力学 第1問"
tags:
  - Tohoku-University
  - Engineering.Mechanics-of-Materials.Torsion
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 材料力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 図1に示す段付き丸軸 ABCD を考える。この軸は3つの部分から構成されており，AB 部分は長さ $L$，外径 $2d$，内径 $d$ の中空軸，BC 部分は長さ $L$，直径 $2d$ の中実軸，CD 部分は長さ $L$，直径 $d$ の中実軸である。また，この断付き丸軸のせん断弾性係数は $G$ とする。以下の問いに答えよ。

**(1)** 図1(a)に示すように，この軸が A 端で剛体壁に固定され，D 端でねじりモーメント $M_t$ を受けるとき，AB 部分，BC 部分，CD 部分の比ねじれ角をそれぞれ求めよ。また，D 端におけるねじれ角も求めよ。

![図1(a) A端固定の段付き丸軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materials_1_original_figure_1.png)

**(2)** 図1(b)に示すように，この軸が両端 A，D で剛体壁に固定され，位置 C でねじりモーメント $M_t$ を受けるとき，A 端，D 端における反ねじりモーメント $M_{tA},M_{tD}$ をそれぞれ求めよ。また，C 点におけるねじれ角も求めよ。

![図1(b) 両端固定の段付き丸軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_materials_1_original_figure_2.png)

### 题目描述

1. 考虑图1所示的阶梯圆轴 ABCD。该轴由三部分组成：AB 段为长 $L$、外径 $2d$、内径 $d$ 的空心轴；BC 段为长 $L$、直径 $2d$ 的实心轴；CD 段为长 $L$、直径 $d$ 的实心轴。该阶梯圆轴的剪切模量为 $G$。回答下列问题。

**(1)** 如图1(a)，圆轴的 A 端固定于刚性壁，D 端受到扭矩 $M_t$。分别求 AB、BC、CD 各段的单位长度扭转角，并求 D 端的扭转角。

**(2)** 如图1(b)，圆轴的 A、D 两端均固定于刚性壁，C 处受到扭矩 $M_t$。分别求 A、D 两端的反作用扭矩 $M_{tA},M_{tD}$，并求 C 点的扭转角。

## **Kai**

### (1)

断面二次極モーメントは

$$
J_{AB}=\frac{15\pi d^4}{32},\qquad J_{BC}=\frac{16\pi d^4}{32},\qquad J_{CD}=\frac{\pi d^4}{32}.
$$

全区間を伝わるトルクが $M_t$ だから、比ねじれ角 $\theta=M_t/(GJ)$ より

$$
\boxed{\theta_{AB}=\frac{32M_t}{15\pi Gd^4},\quad
\theta_{BC}=\frac{2M_t}{\pi Gd^4},\quad
\theta_{CD}=\frac{32M_t}{\pi Gd^4}}.
$$

各区間の回転角を足して

$$
\boxed{\varphi_D=L(\theta_{AB}+\theta_{BC}+\theta_{CD})
=\frac{542M_tL}{15\pi Gd^4}}.
$$

### (2)

反トルクは加えた $M_t$ と逆向きの大きさで表す。つり合いと適合条件は

$$
M_{tA}+M_{tD}=M_t,
$$

$$
\varphi_C=\frac{M_{tA}L}{G}\left(\frac1{J_{AB}}+\frac1{J_{BC}}\right)
=\frac{M_{tD}L}{GJ_{CD}}.
$$

後式から $M_{tD}=31M_{tA}/240$。従って

$$
\boxed{M_{tA}=\frac{240}{271}M_t,\qquad M_{tD}=\frac{31}{271}M_t},
$$

$$
\boxed{\varphi_C=\frac{992M_tL}{271\pi Gd^4}}.
$$

Cの回転方向は加えたモーメントと同じである。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 15ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
