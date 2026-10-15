---
sidebar_label: "2013年度 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Thermal-Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2013年度 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、長さ $b$ の棒①、②の一端を滑節 A で連結し、他端を滑節 B、C により剛体壁に結合する。両棒は鉛直からそれぞれ $60^\circ$ 傾いている。長さ $h$ の棒③は鉛直に立ち、A の真下の点 E で床に固定されている。棒③の上端 D と A の間には長さ $\delta$ のすき間がある。$\delta$ は $b,h$ に比べて十分小さい。3 本の棒は同一平面内にあり、すべてヤング率 $E$、断面積 $S$、線膨張係数 $\alpha$ をもつ。滑節は点、棒は線とみなし、自重を無視する。

1. 外力を加えて棒③を伸ばし、D を A に結合した後、静かに外力を取り除く。各棒に働く内力を求めよ。

次に、A と D の結合を外して元の状態に戻す。この状態を初期状態として、3 本の棒を含む周囲の温度を上昇させる。

2. A と D が初めて接触する温度上昇 $\Delta T_0$ を求めよ。
3. (2) で接触した A と D を結合し、さらに温度を上げ、初期温度からの温度上昇を $\Delta T$ とする。各棒の内力を求めよ。座屈は生じず、$\alpha\Delta T\ll1$ とする。$\Delta T_0$ を用いてよい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2013/mech_201208_materials_2-question-fig1.png)

#### 题目描述

如图，两根长度为 $b$ 的杆①、②在 A 处铰接，另一端分别在 B、C 处与刚性墙铰接，两杆与竖直方向均成 $60^\circ$。竖杆③长 $h$，下端固定于 A 正下方的 E，上端 D 与 A 之间有间隙 $\delta$，且 $\delta\ll b,h$。三杆共面，杨氏模量、截面积、线膨胀系数分别为 $E,S,\alpha$。铰视为点，杆视为线，忽略自重。

1. 用外力拉伸杆③，使 D 与 A 连接，再缓慢撤去外力。求各杆内力。

随后拆开 A、D，恢复初始间隙，并从这一状态开始对所有杆及周围环境升温。

2. 求 A、D 刚好接触时的温升 $\Delta T_0$。
3. 接触后将 A、D 连接，继续升温至相对于初始温度的温升 $\Delta T$。求各杆内力。假设不发生屈曲且 $\alpha\Delta T\ll1$，可使用 $\Delta T_0$。

## **Kai**

内力は引張りを正とする。対称性と A の鉛直方向のつり合いより、どの場合も

$$
N_1=N_2,\qquad 2N_1\cos60^\circ=N_3,
$$

したがって $N_1=N_2=N_3=N$ である。微小変形なので角度の変化による高次項を省略する。

### (1)

A の下向き変位を $u$ とすると、斜棒 1 本の伸びは $u\cos60^\circ=u/2$ である。よって

$$
\frac{u}{2}=\frac{Nb}{ES},\qquad u=\frac{2Nb}{ES}.
$$

D の上向き変位は棒③の伸び $Nh/(ES)$ である。両変位の和が初期すき間に等しいので

$$
\frac{2Nb}{ES}+\frac{Nh}{ES}=\delta.
$$

ゆえに 3 本とも引張りで

$$
\boxed{N_1=N_2=N_3=\frac{ES\delta}{2b+h}}.
$$

### (2)

接触するまでは無応力である。斜棒の自由熱膨張量は $\alpha b\Delta T$ だから、A は $2\alpha b\Delta T$ 下がる。一方 D は $\alpha h\Delta T$ 上がる。したがって

$$
\alpha(2b+h)\Delta T_0=\delta,
\qquad
\boxed{\Delta T_0=\frac{\delta}{\alpha(2b+h)}}.
$$

### (3)

温度上昇による自由変位と内力による弾性変位を加えると、接合条件は

$$
2b\left(\alpha\Delta T+\frac{N}{ES}\right)
+h\left(\alpha\Delta T+\frac{N}{ES}\right)=\delta.
$$

(2) を代入して

$$
\boxed{N_1=N_2=N_3=-ES\alpha(\Delta T-\Delta T_0)}.
$$

すなわち、各棒に大きさ $ES\alpha(\Delta T-\Delta T_0)$ の圧縮力が生じる。
