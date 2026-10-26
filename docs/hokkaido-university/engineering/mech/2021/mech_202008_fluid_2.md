---
sidebar_label: "2020年8月実施 流体力学 問2"
tags:
  - Hokkaido-University
  - Engineering.Fluid-Mechanics.Boundary-Layer-Integral-Method
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 流体力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

一様な流れに平行に置かれた長さ $\ell$ の薄い平板に生じる境界層について考える。下図のように平板前縁を原点とした座標系 $(x,y)$ をとり，紙面垂直方向の板幅は十分長く破線で模式的に示す境界層内においても流れは2次元的であるものとする。また，流体の密度 $\rho$，粘性係数 $\mu$ は定数とする。このとき，以下の問いに答えなさい。

![一様流に平行な平板と境界層](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_fluid_2_original_figure_1.png)

(1) 一様流れの速度 $U_0$ に対して，平板前縁（$x=0$）より定常な層流境界層が発達して後縁（$x=\ell$）において $x$ 方向の速度 $u$ として，境界層厚さ $\delta$ を用いた分布

$$
u(\ell,y)=
\begin{cases}
U_0,&y\ge\delta,\\
\left\{2\left(\dfrac y\delta\right)-\left(\dfrac y\delta\right)^2\right\}U_0,&0\le y<\delta
\end{cases}
$$

（平板の上壁面を $y=0$ とする）が得られたとする。このとき，後縁での壁面摩擦応力 $\tau_w$ を求めなさい。

(2) (1) の速度分布において，平板後縁での境界層の排除厚さ $\delta^*$ および運動量厚さ $\theta$ を $\delta$ を用いて表しなさい。なお，排除厚さ $\delta^*$，運動量厚さ $\theta$ は次のように定義される。

$$
\delta^*=\int_0^\infty\left(1-\frac u{U_0}\right)\,dy,\qquad
\theta=\int_0^\infty\frac u{U_0}\left(1-\frac u{U_0}\right)\,dy
$$

(3) (1) の速度分布において，紙面垂直方向の単位長さあたりに平板片面全体にかかる摩擦抗力 $D_0$ は質量保存と運動量保存の法則を用いて $\rho U_0^2\theta$ と求められる。このときに運動量の出入りを考える検査体積を図示して計算過程を説明しなさい。平板まわりの全域で圧力は一様としてみなしてよい。

(4) (1) の速度分布において，平板後縁での局所摩擦抵抗係数 $c_f$，および，紙面垂直方向の板幅 $b$ としたときの平板の上壁面全体に対する平均摩擦抵抗係数 $C_f$ を求めなさい。局所摩擦抵抗係数 $c_f$ および平均摩擦抵抗係数 $C_f$ は以下で定義される。

$$
\tau_w=\frac12c_f\rho U_0^2,\qquad
D_0b=\frac12C_f\rho U_0^2\ell b
$$

(5) 下記文章は平板長さ $\ell$ を変えずに一様流速度 $U_0$ を増加していくときの摩擦抗力変化について述べている。空欄［ア］［イ］に適切な数値を，［ウ］～［オ］に選択肢から適切な語句を一つ選びなさい。

レイノルズ数が小さく流れが層流のとき，境界層厚さと平板長さの比 $\delta/\ell$ がレイノルズ数（$Re=\rho U_0\ell/\mu$）の $1/2$ 乗に逆比例すると見積もられることから，平均摩擦抵抗係数 $C_f$ はレイノルズ数の［ア］乗に比例し，よって，摩擦抗力は一様流れ速度 $U_0$ の［イ］乗に比例して変化する。速度を増してレイノルズ数が臨界値およそ $10^6$ を超えると境界層内の流れは下流にて乱流に遷移して平均摩擦抵抗係数は［ウ］，摩擦抗力が増加する。さらに増速してレイノルズ数が $10^7$ を超えると平板上のほぼ全体が乱流境界層となり，平均摩擦抵抗係数は層流境界層の場合と比べて［エ］に転じ，摩擦抗力は一様流れ速度 $U_0$ の［オ］で増加する。

**空欄［ウ］～［オ］の選択肢**

| 空欄 | 選択肢 |
| --- | --- |
| ウ | 増加し ／ 減少し ／ 一定となり |
| エ | 穏やかな増加 ／ 穏やかな減少 ／ 急な増加 ／ 急な減少 |
| オ | 2乗をやや上回る率 ／ 2乗をやや下回る率 ／ 1乗をやや上回る率 ／ 1乗をやや下回る率 |

### 题目描述

考虑平行于均匀来流放置的长度为 $\ell$ 的薄平板所形成的边界层。如图，以平板前缘为原点建立坐标系 $(x,y)$。垂直纸面方向的板宽充分大，虚线所示边界层内的流动也视为二维流动。流体密度 $\rho$ 和动力黏度 $\mu$ 为常数。回答下列问题。

(1) 对速度为 $U_0$ 的均匀来流，定常层流边界层从前缘（$x=0$）开始发展。假定在后缘（$x=\ell$）处，以边界层厚度 $\delta$ 表示的 $x$ 方向速度分布为

$$
u(\ell,y)=
\begin{cases}
U_0,&y\ge\delta,\\
\left\{2\left(\dfrac y\delta\right)-\left(\dfrac y\delta\right)^2\right\}U_0,&0\le y<\delta.
\end{cases}
$$

平板上表面取为 $y=0$。求后缘处的壁面摩擦应力 $\tau_w$。

(2) 对 (1) 的速度分布，用 $\delta$ 表示后缘边界层的位移厚度 $\delta^*$ 和动量厚度 $\theta$。它们定义为

$$
\delta^*=\int_0^\infty\left(1-\frac u{U_0}\right)\,dy,\qquad
\theta=\int_0^\infty\frac u{U_0}\left(1-\frac u{U_0}\right)\,dy.
$$

(3) 对 (1) 的速度分布，运用质量守恒和动量守恒，可得单位展向长度上平板一个表面所受的总摩擦阻力为 $D_0=\rho U_0^2\theta$。画出用于考察动量进出的控制体，并说明计算过程。可认为平板周围全区域压力均匀。

(4) 对 (1) 的速度分布，求后缘处的局部摩擦阻力系数 $c_f$，以及垂直纸面方向板宽为 $b$ 时，平板整个上表面的平均摩擦阻力系数 $C_f$。两系数定义为

$$
\tau_w=\frac12c_f\rho U_0^2,\qquad
D_0b=\frac12C_f\rho U_0^2\ell b.
$$

(5) 下文描述保持平板长度 $\ell$ 不变、逐渐增大均匀来流速度 $U_0$ 时摩擦阻力的变化。在［ア］［イ］中填写数值，在［ウ］～［オ］中分别从选项中选择一项。

雷诺数较小、流动为层流时，可估计边界层厚度与平板长度之比 $\delta/\ell$ 与雷诺数 $Re=\rho U_0\ell/\mu$ 的 $1/2$ 次方成反比，因此平均摩擦阻力系数 $C_f$ 与雷诺数的［ア］次方成正比，摩擦阻力与均匀来流速度 $U_0$ 的［イ］次方成正比。继续提高速度，使雷诺数超过约 $10^6$ 的临界值时，边界层内流动从下游开始转捩为湍流，平均摩擦阻力系数［ウ］，摩擦阻力增大。进一步提高速度，使雷诺数超过 $10^7$ 后，平板上几乎全部成为湍流边界层；平均摩擦阻力系数与层流边界层情况相比，转为［エ］，摩擦阻力按来流速度 $U_0$ 的［オ］增大。

**空栏［ウ］～［オ］的选项**

| 空栏 | 选项 |
| --- | --- |
| ウ | 增大 ／ 减小 ／ 保持恒定 |
| エ | 缓慢增大 ／ 缓慢减小 ／ 急剧增大 ／ 急剧减小 |
| オ | 略高于平方的增长率 ／ 略低于平方的增长率 ／ 略高于一次方的增长率 ／ 略低于一次方的增长率 |

## **Kai**

### (1), (2)

$\eta=y/\delta$ とおくと

$$
\boxed{\tau_w=\mu\left.\frac{\partial u}{\partial y}\right|_{y=0}
=\frac{2\mu U_0}{\delta}}.
$$

$$
\begin{gathered}
\boxed{\delta^*=\delta\int_0^1(1-\eta)^2d\eta=\frac\delta3},\\
\boxed{\theta=\delta\int_0^1(2\eta-\eta^2)(1-\eta)^2d\eta=\frac{2\delta}{15}}.
\end{gathered}
$$

### (3)

![境界層の運動量収支に用いる検査体積](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/hokkaido202008_fluid2_cv.svg)

前縁から後縁まで、板面から境界層外の高さ $H>\delta$ までの長方形を検査体積に取る。入口質量流量は $\rho U_0H$、後縁からは $\rho\int_0^H u\,dy$ が流出する。差は上面から流出し、その $x$ 方向速度は $U_0$ なので

$$
\dot m_{\rm top}=\rho\int_0^H(U_0-u)\,dy.
$$

圧力による正味の力はゼロであり、流体に働く板の摩擦力は $-D_0$。したがって

$$
-D_0=\rho\int_0^Hu^2dy+U_0\dot m_{\rm top}-\rho U_0^2H,
$$

$$
\boxed{D_0=\rho\int_0^Hu(U_0-u)dy=\rho U_0^2\theta
=\frac{2}{15}\rho U_0^2\delta}.
$$

上面は流線ではないため、上面を通る運動量流出を含める必要がある。

### (4)

定義式に代入して

$$
\boxed{c_f=\frac{4\mu}{\rho U_0\delta}},\qquad
\boxed{C_f=\frac{2\theta}{\ell}=\frac{4\delta}{15\ell}}.
$$

### (5)

層流では $C_f\propto\mathrm{Re}^{-1/2}\propto U_0^{-1/2}$ なので抗力は $U_0^{3/2}$ に比例する。遷移すると乱流部分の摩擦が増し、平均係数はいったん増加する。ほぼ全面が乱流になると、滑らかな平板の代表的な相関 $C_f\propto\mathrm{Re}^{-1/5}$ に従って緩やかに減少し、抗力はおおむね $U_0^{9/5}$ に比例する。したがって

$$
\boxed{\text{ア}=-\frac12,\quad\text{イ}=\frac32},
$$

- ウ：増加し
- エ：穏やかな減少
- オ：2乗をやや下回る率

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 9–10ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
