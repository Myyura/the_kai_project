---
sidebar_label: "2022年8月実施 物理化学2"
tags:
  - Kyushu-University
  - Chemistry.Physical-Chemistry.Planck-Blackbody-Law
  - Chemistry.Physical-Chemistry.Wien-Displacement-Law
  - Chemistry.Physical-Chemistry.Einstein-Solid-Heat-Capacity
---
# 九州大学 工学府 応用化学専攻 機能物質化学系 2022年8月実施 物理化学2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

題意の要約。

プランクの分布関数

$$
\rho(\lambda,T)=\frac{8\pi hc}{\lambda^5\{\exp(hc/(\lambda kT))-1\}}
$$

について、$\lambda$ は波長、$T$ は温度、$c$ は光速、$k$ はボルツマン定数、$h$ はプランク定数とする。

1. 短波長での近似式を求める。
2. 長波長での近似式を求める。
3. 温度による変化を示すグラフを描く。
4. 最大放射波長 $\lambda_{\max}$ に対する関係 $hc/(\lambda_{\max}kT)=5$ から、$T$ と $\lambda_{\max}$ の反比例関係の名称を答える。
5. (4) を用い、太陽の $\lambda_{\max}=490\,\mathrm{nm}$ から温度を求める。$h=6.63\times10^{-34}\,\mathrm{J\,s}$、$k=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$、$c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ とする。
6. アインシュタイン模型のモル振動エネルギー
   $$
   U_{\mathrm m}=\frac{3N_Ah\nu}{e^{h\nu/(kT)}-1}
   $$
   から $C_{V,\mathrm m}=(\partial U_{\mathrm m}/\partial T)_V$ を導く。$kT\gg h\nu$ と $kT\ll h\nu$ の近似式も求める。$\nu$ は振動数、$N_A$ はアボガドロ定数である。

出典：[九州大学 令和5年度 機能物質化学系科目試験 物理化学2](https://www.cstf.kyushu-u.ac.jp/burger_editor/burger_editor/dl/2__5Luk5ZKM77yV5bm05bqm5L_u5aOr5YWl5a2m6Kmm6aiT5ZWP6aGM.pdf)。

### 题目描述

考虑 Planck 黑体辐射分布

$$
\rho(\lambda,T)=\frac{8\pi hc}{\lambda^5\{\exp(hc/(\lambda kT))-1\}},
$$

其中 $\lambda,T,c,k,h$ 分别表示波长、温度、光速、Boltzmann 常数和 Planck 常数。

1. 在 $hc/(\lambda kT)\gg1$ 时求短波近似。
2. 在 $hc/(\lambda kT)\ll1$ 时求长波近似。
3. 画图说明分布随温度的变化。
4. 根据题设关系 $hc/(\lambda_{\max}kT)=5$，说出温度与峰值波长成反比所对应的定律名称。
5. 采用第 4 问关系及太阳的峰值波长 $\lambda_{\max}=490\,\mathrm{nm}$ 估算温度。取 $h=6.63\times10^{-34}\,\mathrm{J\,s}$、$k=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$、$c=3.00\times10^8\,\mathrm{m\,s^{-1}}$。
6. 对 Einstein 固体模型的摩尔振动能

$$
U_{\mathrm m}=\frac{3N_Ah\nu}{e^{h\nu/(kT)}-1},
$$

求定容摩尔热容 $C_{V,\mathrm m}=(\partial U_{\mathrm m}/\partial T)_V$，并求 $kT\gg h\nu$、$kT\ll h\nu$ 时的近似式。$\nu$ 为振动频率，$N_A$ 为 Avogadro 常数。

## **Kai**
### (1)
$hc / (\lambda kT) \gg 1$ のとき

$$
  \begin{aligned}
  e^\frac{hc}{\lambda kT} \gg 1
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \rho (\lambda, T)
  &\simeq \frac{8 \pi hc}{\lambda^5} e^{- \frac{hc}{\lambda kT}}
  \end{aligned}
$$

と表せる。

### (2)
$hc / (\lambda kT) \ll 1$ のとき

$$
  \begin{aligned}
  e^\frac{hc}{\lambda kT} \simeq 1 + \frac{hc}{\lambda kT}
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \rho (\lambda, T)
  &\simeq \frac{8 \pi hc}{\lambda^5} \cdot \frac{1}{\frac{hc}{\lambda kT}}
  \\
  &= \frac{8 \pi kT}{\lambda^4}
  \end{aligned}
$$

と表せる。

### (3)

$\lambda\to0+$ と $\lambda\to\infty$ で $\rho\to0$ となり、その間に最大点を持つ。温度を高くすると、任意の固定波長で $\rho$ が増加し、ピークは短波長側へ移動する。

![プランク分布の温度依存性](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/engineering/ac/2023/kyushu-ac-2022-planck.svg)

### (4)

**Wien の変位則**であり、$\lambda_{\max}T$ が一定となる。設問の関係を用いると

$$
\lambda_{\max}T\simeq\frac{hc}{5k}.
$$

これは短波長近似の分布を最大化した式である。プランク分布そのものでは $u=hc/(\lambda_{\max}kT)$ が

$$
u=5(1-e^{-u}),\qquad u>0
$$

を満たし、$u\simeq4.965114$ となる。

### (5)

$$
  \begin{aligned}
  T
  &= \frac{hc}{5 \lambda_\mathrm{max} k}
  \\
  &= 5.88 \times 10^3 \ \mathrm{K}
  \end{aligned}
$$

### (6)
まず、

$$
  \begin{aligned}
  C_{V, \mathrm{m}}
  &= \left( \frac{\partial U_\mathrm{m}}{\partial T} \right)_V
  \\
  &= 3N_A h \nu
  \frac{ - e^\frac{h \nu}{kT} \cdot \left( - \frac{h \nu}{kT^2} \right)}
  {\left( e^\frac{h \nu}{kT} - 1 \right)^2}
  \\
  &= \frac{3N_A h^2 \nu^2}{kT^2}
  \frac{e^\frac{h \nu}{kT}}{\left( e^\frac{h \nu}{kT} - 1 \right)^2}
  \end{aligned}
$$

である。

(i) $kT\gg h\nu$ のとき、$\xi=h\nu/(kT)\to0$ とおくと

$$
C_{V,\mathrm m}=3N_Ak\frac{\xi^2e^\xi}{(e^\xi-1)^2}
=3N_Ak\left(1-\frac{\xi^2}{12}+O(\xi^4)\right)
\simeq3N_Ak=3R.
$$

(ii) $kT \ll h \nu$ のとき、

$$
  \begin{aligned}
  e^\frac{h \nu}{kT} - 1 \simeq e^\frac{h \nu}{kT}
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  C_{V, \mathrm{m}}
  &\simeq \frac{3N_A h^2 \nu^2}{kT^2} e^{- \frac{h \nu}{kT}}
  \end{aligned}
$$

と近似できる。
