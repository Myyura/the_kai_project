---
sidebar_label: "2021年8月実施 固体力学（午後）"
tags:
  - Tokyo-University
  - Engineering.Mechanics-of-Materials.Axial-Deformation
  - Engineering.Mechanics-of-Materials.Yielding
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 固体力学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)

固体力学（午後）

図1に示すように、2枚の金属板（母板）を突き合わせ、外側両面に同じ素材の金属板をあて、ボルト締結した継手構造がある。この構造に単位幅あたり $P$ の引張荷重が作用する場合の静的な強度設計を考える。全幅は十分長いとして、以下の問いに答えよ。なお、ボルト径を $d$、母板の厚みを $t$、当て板の厚みを $t_1$、ボルト間隔を $b$ とし、与えられていない必要な用語や記号は各自定義の上で使用すること。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_solid_original_figure_1.png)

**第1問** この金属板と同じ材質の板の単軸引張試験を実施した。試験片形状は厚みが $2.0\,\mathrm{mm}$、平行部の幅が $25\,\mathrm{mm}$、平行部長さが $100\,\mathrm{mm}$ であり、長手方向の伸びを計測する伸び計の標点間距離が $80\,\mathrm{mm}$ である。計測データ（伸び計の伸びと引張荷重）を表1に示す。この金属の引張弾性率と引張強さを求めよ。

表1

| 伸び $[\mathrm{mm}]$ | 引張荷重 $[\mathrm N]$ |
| ---: | ---: |
| 0.000 | 0 |
| 0.024 | 1007 |
| 0.048 | 2016 |
| 0.064 | 2838 |
| 0.080 | 3533 |
| 0.138 | 4424 |
| 0.278 | 5227 |
| 0.448 | 5665 |
| 0.640 | 5820 |
| 0.801 | 5928 |
| 1.696 | 5933 |
| 2.480 | 5933 |
| 3.288 | 5933 |
| 4.200 | 5933 |

**第2問** この継手構造の破壊モードとして、母板の引張破壊、ボルトのせん断破壊を考える。これらの破壊モードについて簡易に説明すると共に、それぞれに対応した強度設計式を示せ。

**第3問** 第2問以外に考えられる破壊モードのうち3つを列挙し、その破壊モードを略図により説明せよ。

**第4問** 形状パラメータを $t=2.5\,\mathrm{mm}$、$t_1=1.5\,\mathrm{mm}$、$d=6.0\,\mathrm{mm}$ と設定した。ボルトのせん断強さが $150\,\mathrm{MPa}$ であるとき、第2問の結果から破壊時の $P$ が最大となるボルト間隔 $b$ を決定せよ。

#### 题目描述

固体力学（下午）

如图1，将两块金属母板对接，在外侧两面加上相同材料的盖板，用螺栓连接。考虑该接头承受单位宽度拉伸载荷 $P$ 时的静强度设计。总宽度足够大。螺栓直径为 $d$，母板厚度为 $t$，盖板厚度为 $t_1$，螺栓间距为 $b$；其余需要的术语和符号可自行定义后使用。

**第1问** 对相同材质的板进行单轴拉伸试验。试件厚度 $2.0\,\mathrm{mm}$，平行段宽度 $25\,\mathrm{mm}$、长度 $100\,\mathrm{mm}$，测量纵向伸长的引伸计标距为 $80\,\mathrm{mm}$。表1列出引伸计伸长和拉伸载荷。求该金属的拉伸弹性模量和抗拉强度。

表1（伸长与拉伸载荷）

| 伸长 $[\mathrm{mm}]$ | 拉伸载荷 $[\mathrm N]$ |
| ---: | ---: |
| 0.000 | 0 |
| 0.024 | 1007 |
| 0.048 | 2016 |
| 0.064 | 2838 |
| 0.080 | 3533 |
| 0.138 | 4424 |
| 0.278 | 5227 |
| 0.448 | 5665 |
| 0.640 | 5820 |
| 0.801 | 5928 |
| 1.696 | 5933 |
| 2.480 | 5933 |
| 3.288 | 5933 |
| 4.200 | 5933 |

**第2问** 考虑母板拉伸破坏和螺栓剪切破坏两种失效模式。简要说明各模式，并分别给出对应的强度设计式。

**第3问** 再列举第2问以外的3种可能失效模式，并用简图说明。

**第4问** 取 $t=2.5\,\mathrm{mm}$、$t_1=1.5\,\mathrm{mm}$、$d=6.0\,\mathrm{mm}$。已知螺栓剪切强度为 $150\,\mathrm{MPa}$，根据第2问结果，确定使破坏时单位宽度载荷 $P$ 最大的螺栓间距 $b$。

## **Kai**

### 第1問

初期断面積は $A_0=2\times25=50\,\mathrm{mm^2}$。ひずみは平行部長さでなく標点間距離 $80\,\mathrm{mm}$ により $\varepsilon=\delta/80$ とする。

初期の $0\le\delta\le0.080\,\mathrm{mm}$ の5点を原点を通る直線 $F=k\delta$ で近似すると

$$
k=\frac{\sum\delta_iF_i}{\sum\delta_i^2}=4.3751\times10^4\,\mathrm{N/mm}.
$$

したがって

$$
\begin{gathered}
\boxed{E=\frac{80k}{50}\simeq7.00\times10^4\,\mathrm{MPa}=70.0\,\mathrm{GPa}},\\
\boxed{\sigma_B=\frac{5933}{50}=118.66\,\mathrm{MPa}\simeq119\,\mathrm{MPa}}.
\end{gathered}
$$

### 第2問

幅 $b$ の1ピッチで伝達する力は $Pb$。母板の穴を通る正味断面積は $(b-d)t$ なので、母板の引張破壊を防ぐ条件は

$$
\boxed{Pb\le\sigma_B(b-d)t}.
$$

ボルトは二つの母板・当て板界面でせん断される。せん断強さを $\tau_B$ とすれば

$$
\boxed{Pb\le2\frac{\pi d^2}{4}\tau_B}.
$$

実設計で安全率を設ける場合は、強さの代わりに対応する許容応力を用いる。

### 第3問

次の3モードがある。図の赤線・赤領域が破壊箇所で、矢印は荷重方向を表す。

Additional failure modes of a double-cover butt joint

![解答図 1/3：元図の第1パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_solid_answer_layout_1.svg)

![解答図 2/3：元図の第2パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_solid_answer_layout_2.svg)

![解答図 3/3：元図の第3パネル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_solid_answer_layout_3.svg)

1. **穴縁の支圧破壊**：ボルトと板の接触により穴縁が圧潰し、穴が荷重方向に広がる。母板の支圧強さを $\sigma_{\rm br}$ とすれば、母板に対する条件は $Pb\le\sigma_{\rm br}dt$。
2. **母板端部のせん断抜け**：穴から板端までの二つの面がせん断される。穴縁から自由端までの有効距離を $e$、母板のせん断強さを $\tau_s$ とすると、$Pb\le2et\tau_s$。
3. **当て板の正味断面破断**：ボルト穴を横切る断面で2枚の当て板が引張破断する。同材で等分担すると、$Pb\le2t_1(b-d)\sigma_B$。

### 第4問

指定された二つのモードから

$$
P_{\rm lim}(b)=\min\left\{\sigma_Bt\left(1-\frac db\right),\ \frac{\pi d^2\tau_B}{2b}\right\},\qquad b>d.
$$

第1項は $b$ とともに増加し、第2項は減少するので、最大値は両者の交点で生じる。

$$
\sigma_Bt(b-d)=\frac{\pi d^2\tau_B}{2}.
$$

したがって

$$
\boxed{b=d+\frac{\pi d^2\tau_B}{2\sigma_Bt}
=6+\frac{\pi(6)^2(150)}{2(118.66)(2.5)}\simeq34.6\,\mathrm{mm}}.
$$

このとき $P_{\rm lim}\simeq245\,\mathrm{N/mm}$。これは指定された二つの破壊モードについての最適値であり、支圧破壊などまで評価するには、それぞれの強度値や端距離が別途必要となる。
