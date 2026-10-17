---
sidebar_label: "2012年8月実施 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Thermal-Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2012年8月実施 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

図のように、長さ $b$ の2本の棒①と②が、一端を滑節 A によって連結され、他端をそれぞれ滑節 B、C によって剛体壁に結合されて、鉛直から $60^\circ$ ずつ傾いて配置されている。鉛直方向に沿って立っている長さ $h$ の棒③は、滑節 A の真下の点 E で床に固定されており、棒③の端部 D と滑節 A は長さ $\delta$ だけ離れている。長さ $\delta$ は棒の長さ $b$ や $h$ に比べて十分に小さいものとする。3本の棒はすべて同一平面上にあり、ヤング率を $E$、断面積を $S$、線膨張係数を $\alpha$ とする。なお、滑節は点、棒は線とみなすことができ、ともに自重は無視できるものとする。以下の問いに答えなさい。

(1) 外力を加えて棒③を伸ばし、端部 D を滑節 A に結合した後、静かに外力を取り除いた。このとき、各棒に働く内力を求めなさい。

次に、小問 (1) で結合した滑節 A と棒③の端部 D を外して元の状態に戻す。この状態を初期状態として、3本の棒を含む周囲の温度を上昇させた。以下の問いに答えなさい。

(2) 滑節 A と棒③の端部 D がはじめて接触するとき、初期の温度からの温度上昇 $\Delta T_0$ を求めなさい。

(3) 小問 (2) で接触した滑節 A と棒③の端部 D を結合して、さらに温度を上昇させて、初期の温度からの温度上昇が $\Delta T$ に達したとする。このとき、各棒に働く内力を求めなさい。ただし、各棒には座屈は生じないものとし、$\alpha\Delta T$ は $1$ に比べ十分に小さいものとする。なお、小問 (2) の $\Delta T_0$ を用いてもよい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2013/mech_201208_materials_2_original_figure_1.png)

#### 题目描述

问题2（使用白色答题纸）

如图，两根长度均为 $b$ 的杆①、②的一端通过铰 A 相连，另两端分别通过铰 B、C 连接于刚性墙，两杆各与竖直方向成 $60^\circ$。沿竖直方向放置的杆③长为 $h$，其底端固定于铰 A 正下方的地面 E 点；杆③的端点 D 与铰 A 之间留有长度为 $\delta$ 的间隙，且 $\delta$ 远小于 $b$ 和 $h$。三杆均位于同一平面内，杨氏模量为 $E$、截面积为 $S$、线膨胀系数为 $\alpha$。铰可视为点，杆可视为线，两者的自重均可忽略。回答下列问题。

(1) 施加外力使杆③伸长，将端点 D 与铰 A 连接后缓慢撤去外力。求此时各杆的内力。

接着，将 (1) 中连接的铰 A 与杆③的端点 D 分离，恢复原状。以此为初始状态，提高包含三根杆在内的周围环境温度。回答下列问题。

(2) 当铰 A 与杆③的端点 D 首次接触时，求相对于初始温度的温升 $\Delta T_0$。

(3) 将 (2) 中相接触的铰 A 与杆③端点 D 连接，再继续升温，使相对于初始温度的温升达到 $\Delta T$。求此时各杆的内力。假定各杆均不发生屈曲，且 $\alpha\Delta T$ 远小于 $1$。可以使用 (2) 中的 $\Delta T_0$。

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
