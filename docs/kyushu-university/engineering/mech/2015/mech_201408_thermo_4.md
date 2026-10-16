---
sidebar_label: "2014年8月実施 問4（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2014年8月実施 熱工学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量流量 $W_A$、入口温度 $T_A$ の流体 A により、質量流量 $W_B$ の流体 B を入口温度 $T_B$ から $\Delta T_B$ だけ加熱する。直径 $d$ の伝熱管を用いた向流二重管式熱交換器とし、管壁の厚さは無視する。A、B 側の熱伝達率を $h_A,h_B$、比熱を $C_A,C_B$、入口温度差を $\Delta T_{AB}=T_A-T_B$ とする。熱容量流量比は $n=W_BC_B/(W_AC_A)<1$ である。（30 点）

![向流熱交換器の温度分布記入欄（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-4-original.png)

1. 温度勾配の変化に注意して、熱交換器内の A、B の温度分布を図示せよ。
2. A、B の出口温度を等しくするとき、$\Delta T_B$ と $\Delta T_{AB}$ の比を $n$ で表せ。
3. この場合の対数平均温度差 $\Delta T_{\rm lm}$ を $\Delta T_{AB},n$ で表せ。
4. 必要長さ $L$ を $W_B,C_B,h_A,h_B,d,n$ で表せ。

#### 题目描述

忽略管壁热阻的逆流套管换热器，用热流体 A 加热管内 B。两者热容量流率比 $n=W_BC_B/(W_AC_A)<1$。画出沿 A 流向的温度分布并体现梯度变化；当两流体各自的出口温度相等时，求 B 的温升与入口温差之比、对数平均温差和所需管长。

## **Kai**

### (1)

$x$ を A の入口からの距離、$\mathcal C_A=W_AC_A$、$\mathcal C_B=W_BC_B=n\mathcal C_A$、$U=(h_A^{-1}+h_B^{-1})^{-1}$ とする。局所温度を $t_A(x),t_B(x)$ とすれば

$$
\frac{dt_A}{dx}=-\frac{U\pi d}{\mathcal C_A}(t_A-t_B),\qquad
\frac{dt_B}{dx}=-\frac{U\pi d}{\mathcal C_B}(t_A-t_B).
$$

両曲線とも右下がりで、B の勾配の絶対値は A の $1/n$ 倍となる。また

$$
\frac{d(t_A-t_B)}{dx}
=U\pi d\left(\frac1{\mathcal C_B}-\frac1{\mathcal C_A}\right)(t_A-t_B)>0.
$$

したがって右ほど温度差と両勾配の絶対値が増す。下図は (2) の出口温度一致条件を満たす例である。

![向流熱交換器の温度分布と流れの向き](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_thermo-4-profiles.svg)

### (2)

A の温度低下を $\Delta T_A$ とする。熱収支より $\Delta T_A=n\Delta T_B$。出口温度一致条件は $T_A-\Delta T_A=T_B+\Delta T_B$ なので

$$
\boxed{\frac{\Delta T_B}{\Delta T_{AB}}=\frac1{1+n}.}
$$

### (3)

A 入口側と出口側の局所温度差は、それぞれ

$$
\Delta T_1=\frac{n\Delta T_{AB}}{1+n},\qquad
\Delta T_2=\frac{\Delta T_{AB}}{1+n}.
$$

よって

$$
\boxed{\Delta T_{\rm lm}
=\frac{\Delta T_2-\Delta T_1}{\ln(\Delta T_2/\Delta T_1)}
=\frac{n-1}{(1+n)\ln n}\Delta T_{AB}.}
$$

### (4)

$W_BC_B\Delta T_B=U\pi dL\Delta T_{\rm lm}$ より

$$
\boxed{L=\frac{W_BC_B}{\pi d}\left(\frac1{h_A}+\frac1{h_B}\right)\frac{\ln n}{n-1}.}
$$

$0<n<1$ では $\ln n$ と $n-1$ はともに負で、$L>0$ となる。
