---
sidebar_label: "2017年8月実施 問題1（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Heat-Pump-and-Refrigeration
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
---

# 大阪大学 工学研究科 機械工学専攻 2017年8月実施 熱工学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

状態1 $\to$ 状態2 $\to$ 状態3 $\to$ 状態4 $\to$ 状態1と準静的変化を繰り返し、高温熱源に熱をくみ上げることを目的としたヒートポンプサイクルを考える。状態変化 $1\to2$ は断熱過程、状態変化 $3\to4$ はポリトロープ過程（ポリトロープ指数 $n$）、状態変化 $2\to3$ と状態変化 $4\to1$ はそれぞれ等温過程とする。このサイクルの高温熱源温度は $T_H$、低温熱源温度は $T_L$ である。状態1が最も圧力の高い状態であり、作動流体は、比熱比 $\kappa$、気体定数 $R$ の理想気体 $1\,\mathrm{kg}$ であり、ポリトロープ指数 $n$ は $1<n\le\kappa$ を満たすとする。状態1、状態3における体積をそれぞれ $V_1,V_3$ と表すとき、以下の問いに答えなさい。

(1) 状態変化 $1\to2$、状態変化 $3\to4$ において作動流体が外部に対してなす仕事をそれぞれ $L_{12},L_{34}$ とするとき、$T_H,T_L,V_1,V_3,R,n,\kappa$ のうち必要な記号を用いて $L_{12},L_{34}$ をそれぞれ表しなさい。

(2) 状態変化 $3\to4$、状態変化 $4\to1$ における作動流体の放熱量とエントロピー変化量をそれぞれ $Q_{34},S_{34},Q_{41},S_{41}$ とするとき、$Q_{34},S_{34},Q_{41},S_{41}$ を $T_H,T_L,V_1,V_3,R,n,\kappa$ のうち必要な記号を用いてそれぞれ表しなさい。

(3) このヒートポンプを作動させるために必要な1サイクルあたりの仕事を、$T_H,T_L,V_1,V_3,R,n,\kappa$ のうち必要な記号を用いて表しなさい。

(4) 小問 (3) で求めた仕事を用いてこのサイクルの動作係数を求め、$T_H,T_L,V_1,V_3,R,n,\kappa$ のうち必要な記号を用いて表しなさい。また、$T_H,T_L,V_1,V_3$ を定めたときにこのサイクルの動作係数を最大とする $n$ を求めなさい。

(5) 状態変化 $3\to4$ が小問 (4) で求めた $n$ を指数とするポリトロープ過程であるとき、$T_L=300\,\mathrm{K}$ として横軸を $T_H$、縦軸をこのサイクルの動作係数 $\eta$ として $T_H$ と $\eta$ の関係の概略を図示しなさい。また、$T_H$ が $200\,\mathrm{K}$ 上昇すると $\eta$ が半分になる場合の $T_H$ を求めなさい。

#### 题目描述

问题1（使用红色答题纸）

考虑一个热泵循环，按状态1 $\to$ 状态2 $\to$ 状态3 $\to$ 状态4 $\to$ 状态1反复进行准静态变化，以向高温热源泵送热量为目的。$1\to2$ 为绝热过程，$3\to4$ 为多变过程（多变指数为 $n$），$2\to3$ 和 $4\to1$ 均为等温过程。高温、低温热源温度分别为 $T_H,T_L$。状态1的压力最高，工质为 $1\,\mathrm{kg}$ 理想气体，比热比为 $\kappa$，气体常数为 $R$，多变指数满足 $1<n\le\kappa$。状态1、3的体积分别为 $V_1,V_3$。回答下列问题。

(1) 将工质在 $1\to2$、$3\to4$ 过程中对外所做的功分别记为 $L_{12},L_{34}$，从 $T_H,T_L,V_1,V_3,R,n,\kappa$ 中选用所需符号分别表示这两个功。

(2) 将工质在 $3\to4$、$4\to1$ 过程中的放热量与熵变分别记为 $Q_{34},S_{34},Q_{41},S_{41}$，从 $T_H,T_L,V_1,V_3,R,n,\kappa$ 中选用所需符号分别表示这四个量。

(3) 从 $T_H,T_L,V_1,V_3,R,n,\kappa$ 中选用所需符号，表示驱动该热泵每个循环所需的功。

(4) 利用 (3) 所得的功求该循环的性能系数，并从 $T_H,T_L,V_1,V_3,R,n,\kappa$ 中选用所需符号表示。另求在 $T_H,T_L,V_1,V_3$ 给定时，使性能系数最大的 $n$。

(5) 设 $3\to4$ 为以 (4) 所得 $n$ 为指数的多变过程，取 $T_L=300\,\mathrm{K}$，以 $T_H$ 为横轴、循环性能系数 $\eta$ 为纵轴，画出两者关系的示意图。并求当 $T_H$ 增加 $200\,\mathrm{K}$ 时 $\eta$ 恰好减半的原温度 $T_H$。

## **Kai**

### (1)

$t=T_H/T_L>1$、$r=V_3/V_1$、$\Delta T=T_H-T_L$ とおく。断熱関係およびポリトロープ関係から

$$
V_2=V_1t^{1/(\kappa-1)},\qquad V_4=V_3t^{-1/(n-1)}.
$$

したがって

$$
\boxed{L_{12}=\frac{R\Delta T}{\kappa-1}},\qquad
\boxed{L_{34}=-\frac{R\Delta T}{n-1}}.
$$

### (2)

放熱量を正、気体のエントロピー変化を終状態から始状態を引いた量とする。$Q_{34}=-(\Delta U_{34}+L_{34})$ なので

$$
\boxed{Q_{34}=R\Delta T\left(\frac1{n-1}-\frac1{\kappa-1}\right)},
$$

$$
\boxed{S_{34}=R\left(\frac1{\kappa-1}-\frac1{n-1}\right)\log t}.
$$

等温圧縮 $4\to1$ では

$$
\boxed{Q_{41}=RT_H\left(\log r-\frac{\log t}{n-1}\right)},\qquad
\boxed{S_{41}=-\frac{Q_{41}}{T_H}}.
$$

状態1が最高圧力となる通常の四過程では $V_4>V_1$、すなわち $\log r>\log t/(n-1)$ が必要である。

### (3)

低温熱源からの吸熱量は

$$
Q_{23}=RT_L\log\frac{V_3}{V_2}
=RT_L\left(\log r-\frac{\log t}{\kappa-1}\right).
$$

一巡後の内部エネルギー変化が零なので、入力仕事は

$$
\boxed{\begin{aligned}
W_{\mathrm{in}}&=Q_{34}+Q_{41}-Q_{23}\\
&=R\left[\Delta T\log r
+\frac{\Delta T-T_H\log t}{n-1}
+\frac{T_L\log t-\Delta T}{\kappa-1}\right].
\end{aligned}}
$$

### (4)

目的である高温熱源 $T_H$ への供熱は等温過程 $4\to1$ の $Q_{41}$ である。温度が変化する $3\to4$ の放熱まで高温熱源への有効供熱に加えない。したがって

$$
\boxed{\eta=\frac{Q_{41}}{W_{\mathrm{in}}}
=\frac{T_H\left(\log r-\dfrac{\log t}{n-1}\right)}{
\Delta T\log r+\dfrac{\Delta T-T_H\log t}{n-1}
+\dfrac{T_L\log t-\Delta T}{\kappa-1}}}.
$$

ここで

$$
W_{\mathrm{in}}-\frac{\Delta T}{T_H}Q_{41}
=R\left(\frac1{n-1}-\frac1{\kappa-1}\right)
\left[\Delta T-T_L\log t\right]\ge0.
$$

$t-1>\log t$ と $n\le\kappa$ を用いた。ゆえに

$$
\boxed{n=\kappa},\qquad
\boxed{\eta_{\max}=\frac{T_H}{T_H-T_L}}.
$$

このとき $3\to4$ も断熱となり、逆カルノーサイクルになる。

### (5)

$$
\boxed{\eta=\frac{T_H}{T_H-300}=1+\frac{300}{T_H-300}\quad(T_H>300\,\mathrm K)}.
$$

$T_H\downarrow300$ で発散し、$T_H\to\infty$ で1に漸近する単調減少曲線である。

![低温熱源300 Kに対する最適熱ポンプの動作係数](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2018/mech_201708_thermo_1-solution-cop.svg)

求める初期温度を $T$ とすると

$$
\frac{T+200}{T-100}=\frac12\frac{T}{T-300}
\quad\Longrightarrow\quad T^2-100T-120000=0.
$$

$T>300$ の解を選び

$$
\boxed{T_H=400\,\mathrm K}.
$$

実際、400 Kで $\eta=4$、600 Kで $\eta=2$ となる。
