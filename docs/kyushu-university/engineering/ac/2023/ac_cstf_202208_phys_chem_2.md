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

2．プランクの熱放射式に関する以下の問に答えよ。答えは解答欄に記入すること。（40点）

量子論誕生前の19世紀に「黒体放射の問題」に多くの研究者が取り組んでいた。「黒体放射の問題」とは一口で言えば、「ある温度に熱せられた物体はどういう色の光を出すか」ということである。物体を熱したときに出る光は、温度の低いときには赤い色をしているが、温度が上がるにつれて次第に白くなる。プランクは、観測される全波長領域において満足するエネルギー分布関数 $\rho(\lambda,T)$ を見出した。プランクの分布関数は次式で表される。

$$
\rho(\lambda,T)=\frac{8\pi hc}{\lambda^5(e^{hc/(\lambda kT)}-1)}.
$$

ここで、$\lambda$ は波長、$T$ は温度、$c$ は光の速度、$k$ はボルツマン定数、$h$ はプランク定数である。

(1) 波長が極めて短い領域で、$\rho(\lambda,T)$ はどのように表されるか答えよ。

(2) 波長が十分に長い領域で、$\rho(\lambda,T)$ はどのように表されるか答えよ。

(3) 温度依存性がわかるように、$\rho(\lambda,T)$ を描け。

![設問 (3) の解答欄の座標軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/ac/2023/ac_cstf_202208_phys_chem_2_plot_axes.png)

(4) $\rho(\lambda,T)$ は、$hc/(\lambda kT)=5$ のときに最大値をとることがわかっている。この式から、温度と最大放射波長（$\lambda_{\max}$）が反比例することがわかる。この関係式は何と呼ばれるか答えよ。

(5) 太陽の $\lambda_{\max}$ は $490\,\mathrm{nm}$ である。(4) の関係式から太陽の温度 $[\mathrm K]$ を求めよ。ただし、$h=6.63\times10^{-34}\,\mathrm{J\,s}$、$k=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$、$c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ とする。

(6) この分布関数から、アインシュタインは固体のモル振動エネルギー $U_{\mathrm m}$ を次式で表した。

$$
U_{\mathrm m}=\frac{3N_{\mathrm A}h\nu}{e^{h\nu/(kT)}-1}.
$$

モル定容比熱 $C_{V,\mathrm m}=(\partial U_{\mathrm m}/\partial T)_V$ を導出せよ。さらに、温度が高いとき（$kT\gg h\nu$）と低いとき（$kT\ll h\nu$）の近似式を求めよ。ここで、$\nu$ は振動数、$N_{\mathrm A}$ はアボガドロ定数である。

### 题目描述

2．回答以下有关普朗克热辐射公式的问题，将答案写在答题栏内。（40分）

在量子论诞生前的19世纪，许多研究者致力于“黑体辐射问题”。简单来说，这个问题就是“加热至某一温度的物体会发出什么颜色的光”。物体受热后发出的光在低温时呈红色，随温度升高逐渐变白。普朗克找到了能够描述全部观测波长范围的能量分布函数 $\rho(\lambda,T)$，其表达式为

$$
\rho(\lambda,T)=\frac{8\pi hc}{\lambda^5(e^{hc/(\lambda kT)}-1)}.
$$

其中 $\lambda$ 为波长、$T$ 为温度、$c$ 为光速、$k$ 为玻尔兹曼常数、$h$ 为普朗克常数。

(1) 在波长极短的区域，$\rho(\lambda,T)$ 可以怎样表示？

(2) 在波长充分长的区域，$\rho(\lambda,T)$ 可以怎样表示？

(3) 画出 $\rho(\lambda,T)$，使其温度依赖关系清楚可见。答题栏的坐标轴见上图。

(4) 题目给定 $\rho(\lambda,T)$ 在 $hc/(\lambda kT)=5$ 时取最大值。由此可知温度与最大辐射波长 $\lambda_{\max}$ 成反比。这一关系称为什么？

(5) 太阳的 $\lambda_{\max}=490\,\mathrm{nm}$，用 (4) 的关系式求太阳的温度，单位为 $\mathrm K$。取 $h=6.63\times10^{-34}\,\mathrm{J\,s}$、$k=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$、$c=3.00\times10^8\,\mathrm{m\,s^{-1}}$。

(6) 爱因斯坦由这一分布函数将固体的摩尔振动能 $U_{\mathrm m}$ 表示为

$$
U_{\mathrm m}=\frac{3N_{\mathrm A}h\nu}{e^{h\nu/(kT)}-1}.
$$

推导定容摩尔热容 $C_{V,\mathrm m}=(\partial U_{\mathrm m}/\partial T)_V$，并求高温（$kT\gg h\nu$）和低温（$kT\ll h\nu$）下的近似式。$\nu$ 为振动频率，$N_{\mathrm A}$ 为阿伏伽德罗常数。

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

![プランク分布の温度依存性](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/ac/2023/kyushu-ac-202208-planck.svg)

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
\begin{gathered}
C_{V,\mathrm m}=3N_Ak\frac{\xi^2e^\xi}{(e^\xi-1)^2}
\\
=3N_Ak\left(1-\frac{\xi^2}{12}+O(\xi^4)\right)
\\
\simeq3N_Ak=3R.
\end{gathered}
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

## **Reference**

- [大学公式問題](https://www.cstf.kyushu-u.ac.jp/burger_editor/burger_editor/dl/2__5Luk5ZKM77yV5bm05bqm5L_u5aOr5YWl5a2m6Kmm6aiT5ZWP6aGM.pdf)
- [公式問題の公開アーカイブ](https://web.archive.org/web/20260511052501id_/https://www.cstf.kyushu-u.ac.jp/burger_editor/burger_editor/dl/2__5Luk5ZKM77yV5bm05bqm5L_u5aOr5YWl5a2m6Kmm6aiT5ZWP6aGM.pdf)
