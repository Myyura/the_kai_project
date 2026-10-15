---
sidebar_label: "2016年度 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
  - Engineering.Heat-Transfer.Thermal-Resistance-Networks
---

# 九州大学 工学府 機械系専攻 2016年度 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

熱伝導率 $k_A$、厚さ $L_A$ の平板 A と、$k_B=k_A/2$、$L_B=2L_A$ の平板 B が密着している。A 側の流体温度を $T_1$、B 側を $T_2$（$T_1>T_2$）、熱伝達率を $h_A,h_B$、外表面温度を $T_A,T_B$ とする。接触熱抵抗と放射は無視し、物性一定の一次元定常熱伝導を考える。B は発熱しない。（55 点）

![二層平板と温度分布用の座標（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/thermo-3-original.png)

1. A に発熱がない場合：
   - (1-1) 熱流束 $q$ を $k_A,L_A,h_A,h_B,T_1-T_2$ で表せ。
   - (1-2) $T_1-T_A=0.4(T_1-T_2)$、$T_A-T_B=0.5(T_1-T_2)$ である。$h_B/h_A$、接触面温度 $T_{AB}$、$h_A$ を求めよ。
2. (1) と同じ物性・流体条件で、$T_A=T_1$ となるよう A に一様な体積発熱 $H_0$ を与える。
   - (2-1) A から流体 1、B から流体 2 への熱流束を求めよ。温度記号 $T$ は使わないこと。
   - (2-2) A 内の $T(x)$ を $x,k_A,H_0,T_1$ で表せ。$x=0$ は A の外表面で、$T''+H_0/k_A=0$ を用いてよい。
   - (2-3) $H_0$ を $k_A,L_A,h_B,T_1-T_2$ で表せ。
   - (2-4) 発熱を $\alpha H_0$（$\alpha>1$）に増やすと、$T_A-T_1=T_B-T_2=\Delta T$ となった。$\alpha$ を $\Delta T,h_A,h_B,L_A,H_0$ で表せ。

#### 题目描述

两层平板导热率、厚度分别为 $k_A,L_A$ 和 $k_A/2,2L_A$，两侧分别对流换热，忽略接触热阻和辐射。先在无热源时求热流与由给定温差比例确定的传热系数、界面温度。再给 A 均匀热源使左壁温等于左流体温，求两侧热流、A 温度分布和热源强度；最后两侧壁温均高于各自流体同一个温差时，求热源倍数。

## **Kai**

### (1-1)

熱抵抗の直列和より

$$
\boxed{q=\frac{T_1-T_2}{1/h_A+5L_A/k_A+1/h_B}.}
$$

### (1-2)

流体 2 側の温度差は全温度差の $0.1$ 倍。両対流抵抗の比から

$$
\boxed{h_B=4h_A.}
$$

A、B の伝導熱抵抗比は $1:4$ なので、A 内の温度降下は全体の $0.1$ 倍となる。したがって

$$
\boxed{T_{AB}=\frac{T_1+T_2}{2},\qquad h_A=\frac{k_A}{4L_A}.}
$$

### (2-1)

$T_A=T_1$ より流体 1 への放熱はゼロ。発熱はすべて B 側に流れるので

$$
\boxed{q_{A\to1}=0,\qquad q_{B\to2}=H_0L_A.}
$$

### (2-2)

$T(0)=T_1$、$T'(0)=0$ を積分定数に反映すると

$$
\boxed{T(x)=T_1-\frac{H_0}{2k_A}x^2.}
$$

### (2-3)

A 内、B 内、B 側対流の温度降下の和から

$$
T_1-T_2=\frac{H_0L_A^2}{2k_A}
+(H_0L_A)\frac{4L_A}{k_A}+\frac{H_0L_A}{h_B}.
$$

よって

$$
\boxed{H_0=\frac{T_1-T_2}{L_A\left(9L_A/(2k_A)+1/h_B\right)}.}
$$

### (2-4)

全発熱が両流体への放熱に等しいことから

$$
\alpha H_0L_A=h_A\Delta T+h_B\Delta T,
\qquad\boxed{\alpha=\frac{(h_A+h_B)\Delta T}{H_0L_A}.}
$$
