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

理想気体1 kgを作動流体とし、高温熱源へ熱をくみ上げるヒートポンプサイクル $1\to2\to3\to4\to1$ を考える。変化は準静的で、$1\to2$ は断熱、$3\to4$ はポリトロープ指数 $n$ のポリトロープ過程、$2\to3$ と $4\to1$ は等温過程である。高温・低温熱源温度は $T_H,T_L$、状態1は最高圧力の状態とする。気体定数を $R$、比熱比を $\kappa$ とし、$1<n\le\kappa$ とする。状態1、3の体積を $V_1,V_3$ として答えよ。

1. $1\to2$ と $3\to4$ において作動流体が外部にする仕事 $L_{12},L_{34}$ を求めよ。
2. $3\to4$ と $4\to1$ における放熱量 $Q_{34},Q_{41}$ と作動流体のエントロピー変化 $S_{34},S_{41}$ を求めよ。
3. サイクルを作動させるために必要な1サイクル当たりの仕事を求めよ。
4. 動作係数を求め、$T_H,T_L,V_1,V_3$ を固定したときに動作係数を最大にする $n$ を求めよ。
5. (4)の $n$ を用い、$T_L=300\,\mathrm K$ とする。横軸 $T_H$、縦軸動作係数 $\eta$ として概略を図示せよ。また、$T_H$ を $200\,\mathrm K$ 上げると $\eta$ が半分になる場合の、上げる前の $T_H$ を求めよ。

#### 题目描述

1 kg理想气体经历准静态热泵循环：1→2绝热、2→3在 $T_L$ 等温、3→4为指数 $1<n\le\kappa$ 的多变过程、4→1在 $T_H$ 等温。状态1压力最高，状态1、3的体积分别为 $V_1,V_3$，气体常数为 $R$。求：(1)绝热与多变过程对外功；(2)3→4、4→1放热量和气体熵变；(3)循环输入功；(4)供热性能系数及固定温度和体积时的最优 $n$；(5)最优情况下 $T_L=300$ K时的曲线，以及升高 $T_H$ 200 K使性能系数减半时原来的 $T_H$。

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
