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

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)。図の条件は以下に文章で明記する。

一様速度 $U_\infty$ の非圧縮性粘性定常流中に、迎角 $0^\circ$ の半無限長二次元平板を置く。前縁を原点とし、平板に沿う方向を $x$、板から離れる方向を $y$、速度成分を $U,V$ とする。密度 $\rho$ と動粘性係数 $\nu$ は一定で、主流方向の圧力勾配はない。平板全面で速度 $V_0>0$ の一様吸い込みを行い、壁面では $U=0,\ V=-V_0$ とする。添字 $0$ は壁面、$f$ は前縁から十分離れた下流を表す。

**第1問** 前縁から十分離れ、流れが $x$ に依存しない層流境界層を考える。

1. 次の式を用い、$(U/U_\infty)_f$ を $y$ の関数として求めよ。

$$
\frac{\partial U}{\partial x}+\frac{\partial V}{\partial y}=0,\qquad
U\frac{\partial U}{\partial x}+V\frac{\partial U}{\partial y}
=-\frac1\rho\frac{dP}{dx}+\nu\frac{\partial^2U}{\partial y^2}.
$$

2. 排除厚さ $\delta_f^*$ と壁面粘性せん断応力 $(\tau_f)_0$ を求めよ。ただし

$$
\delta^*=\int_0^\infty\left(1-\frac{U}{U_\infty}\right)dy.
$$

**第2問** 発達途上の速度分布を $\xi=y/\delta^*$ として

$$
\frac{U}{U_\infty}=g(\xi)=(1-K)F_B(\xi)+KF_f(\xi)
$$

で近似する。$F_B$ は吸い込みのない Blasius 型境界層の速度分布、$F_f$ は第1問の分布であり、$K=K(x)$ はパラメータである。プライムは $\xi$ による微分を表す。壁面での $(g')_0$ と $(g'')_0$ の関係を境界層方程式から求めよ。

**第3問** $K$ は $y$ に依存せず、

$$
(g')_0=(1-K)(F_B')_0+K(F_f')_0,\qquad
(g'')_0=(1-K)(F_B'')_0+K(F_f'')_0
$$

である。

1. $(F_f')_0,(F_f'')_0$ を求めよ。
2. $(F_B'')_0=0$ および $a\equiv(F_B')_0$ を用いて

$$
\frac{V_0\delta^*}{\nu}=\frac{K}{a+(1-a)K}
$$

を示せ。

#### 题目描述

在速度 $U_\infty$ 的定常不可压缩黏性流中，半无限长二维平板与来流平行。$x$ 沿板面，$y$ 垂直离开板面，速度分量为 $U,V$。密度 $\rho$、运动黏度 $\nu$ 恒定，沿板面无压力梯度。全板均匀吸气，壁面满足 $U=0,V=-V_0$，其中 $V_0>0$。下标 $0,f$ 分别表示壁面和充分下游。

第1问：在充分下游假定各物理量不依赖 $x$，由上述连续方程和边界层方程求 $U/U_\infty$；再求排除厚度 $\delta_f^*=\int_0^\infty(1-U/U_\infty)dy$ 和壁面切应力。

第2问：令 $\xi=y/\delta^*$，用 $g=(1-K)F_B+KF_f$ 近似发展中的速度分布。$F_B$ 为无吸气 Blasius 分布，$F_f$ 为充分下游分布，$K$ 仅依赖 $x$。求壁面一、二阶导数 $(g')_0,(g'')_0$ 的关系。

第3问：(1) 求 $(F_f')_0,(F_f'')_0$；(2) 利用 $(F_B'')_0=0$、$a=(F_B')_0$ 和题给插值式，证明 $V_0\delta^*/\nu=K/[a+(1-a)K]$。

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
