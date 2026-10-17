---
sidebar_label: "2021年8月実施 流体力学（午前）"
tags:
  - Tokyo-University
  - Engineering.Fluid-Mechanics.Boundary-Layer
  - Engineering.Fluid-Mechanics.Navier-Stokes-Equations
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 流体力学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)

流体力学（午前）

境界層吸い込みは、航空機まわりの流れを制御する手法の一つである。ここでは、非圧縮性粘性定常流れ中に一様流に対して角度 $0^\circ$ でおかれた半無限長の二次元平板上に発達する層流境界層について考える。図1に示されているように、$x$-$y$ 座標系を定義し、$x$ 軸と $y$ 軸に沿った流速成分を、それぞれ $U,V$ で表す。一様流速度を $U_\infty$ とし、平板表面に沿って圧力勾配は存在しないとする。平板の全域にわたって多数の微小な孔が設けられており、平板下方に置かれた吸い込みポンプによって一定速度 $V_0\ (>0)$ での吸い込みが平板の表面全域にわたって均一に行われている。すなわち $y=0$ において、$U=0,\ V=-V_0$ が成り立つ。空気密度を $\rho$、動粘性係数を $\nu$ とする（共に一定）。以下では、添字0は板表面（$y=0$）を意味する。添字 $\mathrm f$ は、前縁から十分に離れた下流での $x$ 位置を表す。以下の問いに答えよ。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_am_fluids_original_figure_1.png)

**第1問** この半無限長平板の前縁から十分に離れた下流での層流境界層について考える。

1. 次に示す (1) 式と (2) 式を用いて、速度分布 $(U/U_\infty)_{\mathrm f}$ を $y$ の関数として求めよ。前縁から十分に離れた下流における流れの特性は $x$ に無関係と考えてよい。

$$
\frac{\partial U}{\partial x}+\frac{\partial V}{\partial y}=0\tag{1}
$$

$$
U\frac{\partial U}{\partial x}+V\frac{\partial U}{\partial y}
=-\frac1\rho\frac{dP}{dx}+\nu\frac{\partial^2U}{\partial y^2}\tag{2}
$$

ここで $P$ は圧力である。

2. 排除厚さ $\delta_{\mathrm f}^*$ と板表面における粘性せん断応力 $(\tau_{\mathrm f})_0$ を求めよ。排除厚さの定義は

$$
\delta^*\equiv\int_0^\infty\left(1-\frac{U}{U_\infty}\right)dy
$$

である。

**第2問** 前縁と前縁から十分に離れた下流の間で発達するこの層流境界層の速度分布を近似的に得ることを考えたい。そこで、この境界層の速度分布 $U/U_\infty=g(\xi)$ を $\xi=y/\delta^*$ の関数として表す。前縁では、主流方向に圧力勾配がなく吸い込みも行われていない平板上に形成される Blasius 型層流境界層の速度分布 $F_{\mathrm B}(\xi)$ を上流方向への極限形として与える。また第1問で扱った層流境界層の速度分布 $F_{\mathrm f}(\xi)$ を下流方向への極限形として与える。両者の間を内挿する形で、一般化された速度分布は (3) 式のように表わされる。$K$ はパラメータであり、$x$ の関数である。

$$
\frac{U}{U_\infty}=g(\xi)
=(1-K)F_{\mathrm B}(\xi)+KF_{\mathrm f}(\xi)\tag{3}
$$

ここで $(g')_0$ と $(g'')_0$ はそれぞれ $\xi=0$ における $dg/d\xi$ と $d^2g/d\xi^2$ の値を表すとしたときに、$(g')_0$ と $(g'')_0$ の間に成り立つ関係式を (2) 式を利用して求めよ。

**第3問** $K$ は $\xi$ に依らないと仮定して (3) 式を微分することによって、板表面において成り立つ以下の式が得られる。なお、$(\ )'=\dfrac{d}{d\xi}(\ )$ である。

$$
(g')_0=(1-K)(F_{\mathrm B}')_0+K(F_{\mathrm f}')_0\tag{4}
$$

$$
(g'')_0=(1-K)(F_{\mathrm B}'')_0+K(F_{\mathrm f}'')_0\tag{5}
$$

1. $(F_{\mathrm f}')_0$ と $(F_{\mathrm f}'')_0$ を求めよ。

2. $(F_{\mathrm B}'')_0=0$ であることを利用して、

$$
\frac{V_0\delta^*}{\nu}=\frac{K}{a+(1-a)K}
$$

が成り立つことを示せ。ここで $a\equiv(F_{\mathrm B}')_0$ である。

#### 题目描述

流体力学（上午）

边界层抽吸是控制飞机周围流动的方法之一。考虑不可压缩黏性定常流中，与均匀来流成 $0^\circ$ 的半无限长二维平板上的层流边界层。按图1定义 $x$-$y$ 坐标，沿两坐标轴的速度分量分别为 $U,V$。均匀来流速度为 $U_\infty$，沿板面不存在压力梯度。平板各处开有大量微孔，板下抽吸泵以恒定速度 $V_0>0$ 在整个板面均匀抽吸。因此在 $y=0$ 处有 $U=0,\ V=-V_0$。空气密度 $\rho$、运动黏度 $\nu$ 均为常数。下标0表示板面 $y=0$，下标 $\mathrm f$ 表示距前缘足够远的下游 $x$ 位置。回答下列问题。

**第1问** 考虑距半无限长平板前缘足够远的下游层流边界层。

1. 利用下面的式 (1)、(2)，求速度分布 $(U/U_\infty)_{\mathrm f}$ 关于 $y$ 的表达式。可以认为充分下游的流动特性与 $x$ 无关。

$$
\frac{\partial U}{\partial x}+\frac{\partial V}{\partial y}=0,\qquad(1)
$$

$$
U\frac{\partial U}{\partial x}+V\frac{\partial U}{\partial y}
=-\frac1\rho\frac{dP}{dx}+\nu\frac{\partial^2U}{\partial y^2}.\qquad(2)
$$

其中 $P$ 为压力。

2. 求位移厚度 $\delta_{\mathrm f}^*$ 及板面的黏性剪应力 $(\tau_{\mathrm f})_0$。位移厚度定义为

$$
\delta^*\equiv\int_0^\infty\left(1-\frac{U}{U_\infty}\right)dy.
$$

**第2问** 希望近似求得从前缘到充分下游之间发展中的层流边界层速度分布。将 $U/U_\infty=g(\xi)$ 写成 $\xi=y/\delta^*$ 的函数。在前缘，以没有主流方向压力梯度且没有抽吸的平板 Blasius 型层流边界层速度分布 $F_{\mathrm B}(\xi)$ 作为上游极限；以第1问的分布 $F_{\mathrm f}(\xi)$ 作为下游极限。在两者之间插值，广义速度分布写为

$$
\frac{U}{U_\infty}=g(\xi)
=(1-K)F_{\mathrm B}(\xi)+KF_{\mathrm f}(\xi).\qquad(3)
$$

其中参数 $K$ 是 $x$ 的函数。用 $(g')_0$、$(g'')_0$ 分别表示 $dg/d\xi$、$d^2g/d\xi^2$ 在 $\xi=0$ 处的值，利用式 (2) 求它们满足的关系。

**第3问** 假设 $K$ 与 $\xi$ 无关，对式 (3) 微分可得板面上的关系

$$
(g')_0=(1-K)(F_{\mathrm B}')_0+K(F_{\mathrm f}')_0,\qquad(4)
$$

$$
(g'')_0=(1-K)(F_{\mathrm B}'')_0+K(F_{\mathrm f}'')_0.\qquad(5)
$$

其中撇号表示对 $\xi$ 求导。

1. 求 $(F_{\mathrm f}')_0$、$(F_{\mathrm f}'')_0$。

2. 利用 $(F_{\mathrm B}'')_0=0$，证明

$$
\frac{V_0\delta^*}{\nu}=\frac{K}{a+(1-a)K},\qquad a\equiv(F_{\mathrm B}')_0.
$$

## **Kai**

### 第1問

連続の式より $V_y=0$ なので $V=-V_0$。したがって

$$
\nu U_{yy}+V_0U_y=0.
$$

$U(0)=0,\ U(\infty)=U_\infty$ を課すと

$$
\boxed{\left(\frac U{U_\infty}\right)_f=1-e^{-V_0y/\nu}}.
$$

よって

$$
\boxed{\delta_f^*=\frac{\nu}{V_0}},\qquad
\boxed{(\tau_f)_0=\rho\nu U_y(0)=\rho U_\infty V_0}.
$$

### 第2問

壁面では $U=0$ なので $-V_0U_y=\nu U_{yy}$。$U_y=U_\infty g'/\delta^*$、$U_{yy}=U_\infty g''/(\delta^*)^2$ を代入して

$$
\boxed{(g'')_0=-\frac{V_0\delta^*}{\nu}(g')_0}.
$$

### 第3問

第1問の分布を $\xi=y/\delta_f^*$ で表すと $F_f=1-e^{-\xi}$。したがって

$$
\boxed{(F_f')_0=1,\qquad(F_f'')_0=-1}.
$$

内挿式から $(g')_0=a+(1-a)K$、$(g'')_0=-K$。第2問の関係に代入して

$$
\boxed{\frac{V_0\delta^*}{\nu}=\frac{K}{a+(1-a)K}}.
$$
