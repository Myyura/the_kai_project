---
sidebar_label: "2014年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Resistance-Networks
---

# 九州大学 工学府 機械系専攻 2014年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図(a)に示すように，片面の面1（厚さ方向座標 $x=0$）に外部より一定のふく射熱流束 $q_r\,(\mathrm{W/m^2})$ が一様に流入する厚さ $\delta\,(\mathrm m)$ の平板があり，両面は同じ温度 $T_f\,(^\circ\mathrm C)$ の流体で冷却される。面2（$x=\delta$）ではふく射熱の出入りはない。平板の熱伝導率は一定の $k\,(\mathrm{W/(m\cdot K)})$ で，両面の熱伝達率は同じ $h\,(\mathrm{W/(m^2\cdot K)})$ である。定常状態を考え，以下の平板内部で発熱がない場合とある場合について，問いに答えよ。（45点）

![原題の平板と温度分布記入欄(a)–(c)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-3-original.png)

**(1)** 平板内部で発熱がない場合：

**(1-1)** このときの平板内の温度分布の概略を図(b)に示せ。

**(1-2)** 面2の温度 $T_2\,(^\circ\mathrm C)$ と流体温度 $T_f\,(^\circ\mathrm C)$ の差 $T_2-T_f$ を，上記問題文中の記号を用いて求めよ。

**(2)** 平板内部で単位体積あたり一様の発熱 $H\,(\mathrm{W/m^3})$ があり，平板内の温度が座標 $x=\delta/3$ で最大となる場合：

**(2-1)** このときの平板内の温度分布の概略を図(c)に示せ。

**(2-2)** 平板内の温度分布は $T(x)=ax^2+bx+c$ の2次式（$a,b,c$ は未知の定数）で表されるとして，発熱量 $H\,(\mathrm{W/m^3})$ を，上記問題文中の記号を用いて求めよ。

#### 题目描述

如图(a)，厚度为 $\delta\,(\mathrm m)$ 的平板，其面1（厚度方向坐标 $x=0$）从外界均匀接收恒定辐射热流密度 $q_r\,(\mathrm{W/m^2})$。两面均由温度为 $T_f\,(^\circ\mathrm C)$ 的流体冷却。面2（$x=\delta$）没有辐射热量进出。平板导热系数恒为 $k\,(\mathrm{W/(m\cdot K)})$，两面的换热系数相同，均为 $h\,(\mathrm{W/(m^2\cdot K)})$。考虑稳态，分别回答平板内部无发热和有发热时的问题。（45分）

**(1)** 平板内部没有热源的情况：

**(1-1)** 在图(b)中画出平板内温度分布的示意图。

**(1-2)** 用上述题干中的符号求面2温度 $T_2\,(^\circ\mathrm C)$ 与流体温度 $T_f\,(^\circ\mathrm C)$ 之差 $T_2-T_f$。

**(2)** 平板内部具有单位体积均匀发热量 $H\,(\mathrm{W/m^3})$，并且板内温度在 $x=\delta/3$ 处达到最大值的情况：

**(2-1)** 在图(c)中画出平板内温度分布的示意图。

**(2-2)** 设板内温度分布可表示为二次式 $T(x)=ax^2+bx+c$（$a,b,c$ 为未知常数），用上述题干中的符号求发热量 $H\,(\mathrm{W/m^3})$。

## **Kai**

### (1-1)

$kT''=0$ より、板内は面 1 から面 2 に向かって直線的に温度が下がる。$T_1>T_2>T_f$ となる。

### (1-2)

右向きの伝導熱流束を $q$ とする。両面の熱収支より

$$
\begin{gathered}
q=h(T_2-T_f)=\frac{k}{\delta}(T_1-T_2),\\
q_r=h(T_1-T_f)+q.
\end{gathered}
$$

したがって

$$
\boxed{T_2-T_f=\frac{kq_r}{h(2k+h\delta)}.}
$$

### (2-1)

$kT''+H=0$ なので温度分布は上に凸の放物線で、$x=\delta/3$ に極大をもつ。面温度は $T_1>T_2>T_f$ となる。

![解答図 1（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo_3_answer_layout_1.svg)

![解答図 2（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo_3_answer_layout_2.svg)

### (2-2)

$T'(\delta/3)=0$、$T(0)=T_1$ より

$$
\begin{gathered}
T(x)=T_1+\frac{H\delta}{3k}x-\frac{H}{2k}x^2,\\
T_1-T_2=\frac{H\delta^2}{6k}.
\end{gathered}
$$

左面から外へ向かう伝導熱流束は $H\delta/3$、右面では $2H\delta/3$。したがって

$$
\begin{gathered}
h(T_1-T_f)=q_r+\frac{H\delta}{3},\\
h(T_2-T_f)=\frac{2H\delta}{3}.
\end{gathered}
$$

両式を引いて温度差を代入すると

$$
\boxed{H=\frac{6kq_r}{\delta(2k+h\delta)}.}
$$
