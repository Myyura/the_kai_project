---
sidebar_label: "2019年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Radiation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 熱工学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図2.1に示すように，発熱体が真空層を挟んで固体壁と向き合っている。発熱体の左側は断熱されており，内部は単位体積あたり $H\,(\mathrm{W/m^3})$ で一様に発熱している。発熱体の左側および右側の温度は，それぞれ $T_0$ および $T_1$ であり，固体壁は一定温度 $T_2\,(\mathrm K)$ に保たれている。発熱体と固体壁の間はふく射で熱が輸送される。発熱体の厚さおよび熱伝導率は，それぞれ $L\,(\mathrm m)$ および $k\,(\mathrm{W/(m\cdot K)})$（一定）であり，奥行きと垂直方向の長さは無限である。（55点）

![原題の図2.1：発熱体・真空層・固体壁](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_thermo_2_figure_1.png)

ただし，発熱体右側と固体壁の間（無限平行平板間）のふく射による熱伝達は次式で計算される。

$$
q_{12}=\frac{\sigma(T_1^4-T_2^4)}{1/\varepsilon_1+1/\varepsilon_2-1}
\quad(\mathrm{W/m^2})
$$

$\varepsilon_1,\varepsilon_2$ は面1（発熱体右側）および面2（固体壁）の放射率，$\sigma$ はステファン・ボルツマン定数（$\mathrm{W/(m^2\cdot K^4)}$）である。この時，以下の問いに答えよ。ただし，解答はすべて $H,L,k,\sigma$ のいずれかを用いて表せ。また定常問題として取り扱ってよい。

**(1)** 発熱体から固体壁への熱流束 $q_{12}\,(\mathrm{W/m^2})$ を求めよ。

**(2)** 一次元定常熱伝導方程式を解いて，発熱体左右の面の温度差 $T_0-T_1$ を求めよ。

**(3)** $\varepsilon_1=\varepsilon_2=1/8$，かつ $T_1=2T_2$ の時，$T_1$ を求めよ。

次に(3)の状態で真空層に非常に薄い板を挿入したところ，発熱体右面の温度 $T_1$ は $T_{1b}$ に変化し，板の温度は $T_3$ となった。板の放射率は両側ともに $1/8$ であり，内部の温度は均一とみなしてよい。この時，以下の問に答えよ。

**(4)** 板から固体壁への熱流束 $q_{32}$ を求めよ。

**(5)** $T_3$ を求めよ。

**(6)** 発熱体右面の温度の板挿入前後の比 $T_{1b}/T_1$ を有効数字3桁で求めよ。ただし，必要に応じて $\sqrt[4]{31}\simeq2.36$ を用いてよい。

### 题目描述

如图2.1，发热体隔着真空层与固体壁相对。发热体左侧绝热，内部均匀体积发热量为 $H\,(\mathrm{W/m^3})$。其左、右表面温度分别为 $T_0,T_1$，固体壁保持恒温 $T_2\,(\mathrm K)$。两者之间以辐射方式传热。发热体厚度为 $L\,(\mathrm m)$，导热系数恒为 $k\,(\mathrm{W/(m\cdot K)})$，深度及竖直方向长度均无限。（55分）

发热体右表面与固体壁之间，即无限平行平板间的辐射换热由下式计算：

$$
q_{12}=\frac{\sigma(T_1^4-T_2^4)}{1/\varepsilon_1+1/\varepsilon_2-1}
\quad(\mathrm{W/m^2}).
$$

$\varepsilon_1,\varepsilon_2$ 分别为表面1（发热体右侧）、表面2（固体壁）的发射率，$\sigma$ 为斯特藩—玻尔兹曼常数，单位为 $\mathrm{W/(m^2\cdot K^4)}$。所有答案均用 $H,L,k,\sigma$ 中必要的量表示，可按稳态处理。

**(1)** 求发热体传向固体壁的热流密度 $q_{12}\,(\mathrm{W/m^2})$。

**(2)** 求解一维稳态导热方程，求发热体左右表面的温差 $T_0-T_1$。

**(3)** 当 $\varepsilon_1=\varepsilon_2=1/8$ 且 $T_1=2T_2$ 时，求 $T_1$。

随后在(3)的状态下向真空层插入一块极薄板，发热体右表面温度从 $T_1$ 变为 $T_{1b}$，薄板温度为 $T_3$。薄板两面的发射率均为 $1/8$，内部温度可视为均匀。

**(4)** 求薄板传向固体壁的热流密度 $q_{32}$。

**(5)** 求 $T_3$。

**(6)** 求插板后与插板前的发热体右表面温度之比 $T_{1b}/T_1$，保留3位有效数字。必要时可使用 $\sqrt[4]{31}\simeq2.36$。

## **Kai**

### (1)

左面断熱、定常であるため、発熱の全量が右面から出る。

$$
\boxed{q_{12}=HL\quad[\mathrm{W/m^2}]}.
$$

### (2)

$$
\begin{gathered}
kT''+H=0,\\
T'(0)=0,\\
T(0)=T_0
\end{gathered}
$$

を積分すると $T(x)=T_0-Hx^2/(2k)$。したがって

$$
\boxed{T_0-T_1=\frac{HL^2}{2k}}.
$$

### (3)

放射抵抗は $8+8-1=15$、$T_2^4=T_1^4/16$ なので

$$
HL=\frac{\sigma(1-1/16)T_1^4}{15}=\frac{\sigma T_1^4}{16}.
$$

よって

$$
\boxed{T_1=2\left(\frac{HL}{\sigma}\right)^{1/4}},\qquad
T_2=\left(\frac{HL}{\sigma}\right)^{1/4}.
$$

### (4)

薄板にも定常のエネルギー収支を適用すると、入る熱と出る熱が等しい。

$$
\boxed{q_{32}=HL\quad[\mathrm{W/m^2}]}.
$$

### (5)

$$
HL=\frac{\sigma(T_3^4-T_2^4)}{15},\qquad\sigma T_2^4=HL
$$

より $\sigma T_3^4=16HL$。したがって

$$
\boxed{T_3=2\left(\frac{HL}{\sigma}\right)^{1/4}}.
$$

### (6)

発熱体と薄板の間も同じ熱流束・放射抵抗なので

$$
\sigma(T_{1b}^4-T_3^4)=15HL,\qquad
\sigma T_{1b}^4=31HL.
$$

よって

$$
\boxed{\frac{T_{1b}}{T_1}=\left(\frac{31}{16}\right)^{1/4}
=\frac{\sqrt[4]{31}}2\simeq1.18}.
$$

## **Reference**

- [九州大学 2020年度 熱工学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-thermo.pdf)
