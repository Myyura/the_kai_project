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

厚さ $\delta$、一定の熱伝導率 $k$ の平板の面 1（$x=0$）に、一様な放射熱流束 $q_r$ が外部から入る。面 2（$x=\delta$）では放射熱の出入りはない。両面は温度 $T_f$ の流体により同じ熱伝達率 $h$ で冷却される。定常状態を考える。（45 点）

![平板と温度分布記入欄（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-3-original.png)

(1) 平板内に発熱がない場合：

- (1-1) 温度分布の概略を図 (b) に示せ。
- (1-2) 面 2 の温度 $T_2$ と流体温度の差 $T_2-T_f$ を求めよ。

(2) 単位体積当たり一様な発熱 $H$ があり、$x=\delta/3$ で最高温度となる場合：

- (2-1) 温度分布の概略を図 (c) に示せ。
- (2-2) $T(x)=ax^2+bx+c$ として $H$ を題文の記号で求めよ。

#### 题目描述

厚 $\delta$、导热系数 $k$ 的平板，两侧均由温度 $T_f$、换热系数 $h$ 的流体冷却。仅左面接收向内的辐射热流 $q_r$。分别画出无内热源、有均匀体积热源且最高温度位于 $\delta/3$ 时的温度分布；求前者右表面的温升，以及后者所需体积发热率 $H$。

## **Kai**

### (1-1)

$kT''=0$ より、板内は面 1 から面 2 に向かって直線的に温度が下がる。$T_1>T_2>T_f$ となる。

### (1-2)

右向きの伝導熱流束を $q$ とする。両面の熱収支より

$$
q=h(T_2-T_f)=\frac{k}{\delta}(T_1-T_2),\qquad
q_r=h(T_1-T_f)+q.
$$

したがって

$$
\boxed{T_2-T_f=\frac{kq_r}{h(2k+h\delta)}.}
$$

### (2-1)

$kT''+H=0$ なので温度分布は上に凸の放物線で、$x=\delta/3$ に極大をもつ。面温度は $T_1>T_2>T_f$ となる。

![無発熱時と内部発熱時の板内温度分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-3-profiles.svg)

### (2-2)

$T'(\delta/3)=0$、$T(0)=T_1$ より

$$
T(x)=T_1+\frac{H\delta}{3k}x-\frac{H}{2k}x^2,
\qquad T_1-T_2=\frac{H\delta^2}{6k}.
$$

左面から外へ向かう伝導熱流束は $H\delta/3$、右面では $2H\delta/3$。したがって

$$
h(T_1-T_f)=q_r+\frac{H\delta}{3},\qquad
h(T_2-T_f)=\frac{2H\delta}{3}.
$$

両式を引いて温度差を代入すると

$$
\boxed{H=\frac{6kq_r}{\delta(2k+h\delta)}.}
$$
