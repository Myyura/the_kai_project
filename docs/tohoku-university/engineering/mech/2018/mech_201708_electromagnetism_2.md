---
sidebar_label: "2017年8月実施 電磁気学 第2問"
tags:
  - Tohoku-University
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Electrical-Electronic.Circuits.Mutual-Inductance
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 電磁気学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. 図3に示すように，同軸上に2つのソレノイドコイル $\mathrm C_1,\mathrm C_2$ が置かれており，それぞれのコイルの長さは $L$，巻き数は $N$ である。また，コイル $\mathrm C_1,\mathrm C_2$ の半径を，それぞれ $r_1,r_2\ (r_1>r_2)$ とする。コイル $\mathrm C_1$ は交流電源がつながれており，$I=I_0\sin(\omega t)$ の電流が流れている。また，コイル $\mathrm C_2$ は，電気抵抗 $R$ とスイッチがつながれており，スイッチは開いている。以下の問いに答えよ。ただし，透磁率を $\mu_0$ とし，コイルの端部の影響およびコイルの電気抵抗は無視する。

**(1)** 変位電流が無視できる場合の磁場の強さ $\boldsymbol H$ と電流密度 $\boldsymbol J$ の微分形の関係式から，積分形の関係式を導出せよ。

**(2)** 磁束密度 $\boldsymbol B$ と電場 $\boldsymbol E$ の微分形の関係式から，積分形の関係式を導出せよ。

**(3)** コイル $\mathrm C_1$ 内の磁場の強さを求めよ。

**(4)** 交流電源の電圧を求めよ。さらに電源の供給電力を求めよ。

**(5)** コイル $\mathrm C_2$ の両端に発生する電圧を求めよ。

**(6)** スイッチを閉じた場合，コイル $\mathrm C_2$ の両端に発生する電圧はどのように変化するかを説明せよ。さらに，問(4)で求めた電源の供給電力はどのように変化するかを説明せよ。

![図3 同軸ソレノイドと外部回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_electromagnetism_2_original_figure_1.png)

### 题目描述

2. 如图3所示，两个螺线管线圈 $\mathrm C_1,\mathrm C_2$ 同轴放置，两者的长度均为 $L$，匝数均为 $N$。线圈 $\mathrm C_1,\mathrm C_2$ 的半径分别为 $r_1,r_2$，且 $r_1>r_2$。线圈 $\mathrm C_1$ 接有交流电源，流过电流 $I=I_0\sin(\omega t)$。线圈 $\mathrm C_2$ 接有电阻 $R$ 和开关，开关处于断开状态。回答下列问题。磁导率为 $\mu_0$，忽略线圈端部效应和线圈本身的电阻。

**(1)** 从可忽略位移电流时磁场强度 $\boldsymbol H$ 与电流密度 $\boldsymbol J$ 的微分形式关系式出发，推导其积分形式。

**(2)** 从磁通密度 $\boldsymbol B$ 与电场 $\boldsymbol E$ 的微分形式关系式出发，推导其积分形式。

**(3)** 求线圈 $\mathrm C_1$ 内的磁场强度。

**(4)** 求交流电源的电压，并进一步求电源的供给功率。

**(5)** 求线圈 $\mathrm C_2$ 两端产生的电压。

**(6)** 说明闭合开关后，线圈 $\mathrm C_2$ 两端产生的电压如何变化；进一步说明第(4)问中求得的电源供给功率如何变化。

图3给出了同轴线圈的尺寸及其与交流电源、电阻和开关的连接。

## **Kai**

### (1)

変位電流を無視すると $\nabla\times\boldsymbol H=\boldsymbol J$。面 $S$ の境界を向きの整合する閉曲線 $C$ として、ストークスの定理より

$$
\boxed{\oint_C\boldsymbol H\cdot d\boldsymbol l=\int_S\boldsymbol J\cdot d\boldsymbol S=I_{\mathrm{enc}}}.
$$

### (2)

$\nabla\times\boldsymbol E=-\partial\boldsymbol B/\partial t$ を固定した面 $S$ 上で積分して

$$
\boxed{\oint_C\boldsymbol E\cdot d\boldsymbol l=-\frac{d}{dt}\int_S\boldsymbol B\cdot d\boldsymbol S=-\frac{d\Phi}{dt}}.
$$

### (3)

管内外を通る長方形のアンペール経路をとる。長いソレノイドの外部磁場を無視すれば $HL=NI$ なので

$$
\boxed{H_1=\frac{NI_0}{L}\sin\omega t}.
$$

向きは巻線の電流に対する右ねじの方向である。

### (4)

鎖交磁束から自己インダクタンスは $L_1=\mu_0N^2\pi r_1^2/L$。電源が自己誘導起電力に逆らって加える電圧を正とすると

$$
\boxed{V=L_1\dot I=\frac{\mu_0N^2\pi r_1^2}{L}\omega I_0\cos\omega t}.
$$

瞬時電力と周期平均電力は

$$
\boxed{P(t)=VI=\frac12 L_1\omega I_0^2\sin2\omega t},\qquad \boxed{\overline P=0}.
$$

磁場への蓄積と電源への返還が交互に生じる。

### (5)

$C_2$ に鎖交するのは断面 $\pi r_2^2$ の磁束だから、相互インダクタンスは

$$
M=\frac{\mu_0N^2\pi r_2^2}{L}.
$$

二次側の電圧極性を選んで

$$
\boxed{V_2=M\dot I=M\omega I_0\cos\omega t}.
$$

端子の取り方を逆にすれば符号は逆になる。

### (6)

一次電流を引き続き指定の $I_0\sin\omega t$ に保つものとする。二次電流 $I_2$ の正方向を一次磁束の変化を打ち消す向きに選ぶと、$L_2=\mu_0N^2\pi r_2^2/L=M$ として

$$
L_2\dot I_2+RI_2=M\dot I.
$$

定常状態で $\delta=\tan^{-1}(\omega L_2/R)$ とおけば

$$
I_2=\frac{\omega MI_0}{\sqrt{R^2+\omega^2L_2^2}}\cos(\omega t-\delta),\qquad V_2'=RI_2.
$$

従って二次端子電圧は開路時の $R/\sqrt{R^2+\omega^2L_2^2}$ 倍に小さくなり、位相が $\delta$ 遅れる。これは二次電流の作る磁場が元の磁束変化を打ち消すためである。一次電圧は $V'=L_1\dot I-M\dot I_2$ に変化し、平均供給電力は

$$
\boxed{\overline P'=R\overline{I_2^2}=\frac{R\omega^2M^2I_0^2}{2(R^2+\omega^2L_2^2)}>0}.
$$

電源は負荷抵抗で消費されるジュール熱を補う。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 24ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
