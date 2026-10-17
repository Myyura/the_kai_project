---
sidebar_label: "2017年8月実施 電磁気学 第1問"
tags:
  - Tohoku-University
  - Physics.Electromagnetism.Magnetic-Dipole-Vector-Potential
  - Physics.Electromagnetism.Biot-Savart-Law
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 電磁気学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 図1に示すように大きさが等しく符号の異なる2個の点磁荷 $+q_m$ と $-q_m$ が微小距離 $s$ だけ離れて存在するものを磁気双極子と呼ぶ。磁気双極子モーメントは，$m=q_ms$ で定義される。以下の問いに答えよ。ただし，透磁率として $\mu_0$ を用いよ。

**(1)** 図1に示す磁気双極子と図2に示す電流 $I$ が流れる半径 $a$ の円形コイルそれぞれがつくる磁力線を描け。

**(2)** 磁場の強さ $\boldsymbol H$ は磁気スカラーポテンシャル $\phi_m$ により $\boldsymbol H=-\nabla\phi_m$ として求めることができる。点磁荷 $q_m$ から距離 $R$ だけ離れた点の $\phi_m$ は，

$$
\phi_m=\frac{q_m}{4\pi\mu_0R}
$$

と表すことができる。図1に示す磁気双極子について，$z$ 軸上の点 $\mathrm P_1\ (z=z_1,\ z_1\gg s)$ における磁場の強さ $\boldsymbol H$ を求めよ。

**(3)** 図2に示す電流 $I$ が流れる半径 $a$ の円形コイルが $z$ 軸上の点 $\mathrm P_2\ (z=z_2,\ z_2\gg a)$ につくる磁束密度 $\boldsymbol B$ を求めよ。

**(4)** 問(2)と問(3)の結果において，磁気双極子による磁場が円形コイルによる磁場と等価であると仮定するとき，磁気双極子モーメントの大きさは，$m=\mu_0I\pi a^2$ で表されることを示せ。

![図1 磁気双極子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_electromagnetism_1_original_figure_1.png)

![図2 電流が流れる円形コイル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_electromagnetism_1_original_figure_2.png)

#### 题目描述

1. 如图1所示，大小相等、符号相反的两个点磁荷 $+q_m$ 和 $-q_m$ 相距微小距离 $s$ 时，称为磁偶极子。磁偶极矩定义为 $m=q_ms$。回答下列问题，磁导率用 $\mu_0$ 表示。

**(1)** 分别画出图1的磁偶极子与图2中通有电流 $I$、半径为 $a$ 的圆形线圈所产生的磁感线。

**(2)** 磁场强度 $\boldsymbol H$ 可由磁标势 $\phi_m$ 按 $\boldsymbol H=-\nabla\phi_m$ 求得。距离点磁荷 $q_m$ 为 $R$ 的点处，磁标势为

$$
\phi_m=\frac{q_m}{4\pi\mu_0R}.
$$

求图1所示磁偶极子在 $z$ 轴上 $\mathrm P_1\ (z=z_1,\ z_1\gg s)$ 点产生的磁场强度 $\boldsymbol H$。

**(3)** 求图2中通有电流 $I$、半径为 $a$ 的圆形线圈在 $z$ 轴上 $\mathrm P_2\ (z=z_2,\ z_2\gg a)$ 点产生的磁通密度 $\boldsymbol B$。

**(4)** 根据第(2)、(3)问的结果，假定磁偶极子产生的磁场与圆形线圈产生的磁场等效，证明磁偶极矩的大小可表示为 $m=\mu_0I\pi a^2$。

图1标出了磁荷、间距及观察点，图2标出了线圈半径、电流方向及观察点。

## **Kai**

### (1)

![解答図 1/2：元図の第1パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_electromagnetism_1_answer_layout_1.svg)

![解答図 2/2：元図の第2パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_electromagnetism_1_answer_layout_2.svg)

双極子では力線は正磁荷から負磁荷へ向かい、両磁荷の間では $-z$ 方向となる。円形電流では力線は閉曲線であり、円の内部では $+z$ 方向に通る。遠方での形は等しいが、中心付近の向きと力線の接続は異なる。

### (2)

$z>s/2$ の軸上のポテンシャルは

$$
\phi_m(z)=\frac{q_m}{4\pi\mu_0}\left(\frac1{z-s/2}-\frac1{z+s/2}\right)
\simeq\frac{q_ms}{4\pi\mu_0z^2}.
$$

対称性から横方向成分は相殺するので

$$
\boldsymbol H=-\frac{d\phi_m}{dz}\boldsymbol e_z
\simeq\boxed{\frac{m}{2\pi\mu_0z_1^3}\boldsymbol e_z}.
$$

### (3)

円周上の電流素片から軸上の点までの距離は $r=\sqrt{a^2+z_2^2}$。ビオ・サバールの法則の軸方向成分を積分すると

$$
B_z=\frac{\mu_0 I}{4\pi}\int_0^{2\pi}\frac{a^2\,d\theta}{(a^2+z_2^2)^{3/2}}
=\frac{\mu_0Ia^2}{2(a^2+z_2^2)^{3/2}}.
$$

従って $z_2\gg a$ では

$$
\boxed{\boldsymbol B\simeq\frac{\mu_0Ia^2}{2z_2^3}\boldsymbol e_z}.
$$

### (4)

同じ遠方点 $z_1=z_2=z$ で $\boldsymbol B=\mu_0\boldsymbol H$ を比較して

$$
\frac{m}{2\pi z^3}=\frac{\mu_0Ia^2}{2z^3},\qquad \boxed{m=\mu_0I\pi a^2}.
$$

ここでの $m=q_ms$ は磁荷による定義であり、単位は $\mathrm{Wb\,m}$ である。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 23ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
