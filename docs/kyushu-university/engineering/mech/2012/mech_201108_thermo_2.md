---
sidebar_label: "2012年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
---

# 九州大学 工学府 機械系専攻 2012年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

厚さ $L$、熱伝導率 $k$ の平板内部で一様に発熱しており、単位時間・単位体積あたりの発熱量は $G$ である。両側は同温度 $T_f$ の流体で冷却され、左側・右側の熱伝達率は $h_1,h_2$ とする。熱伝導率と熱伝達率は温度によらず一定、熱流は $x$ 方向のみの定常状態とする。$x$ は左面からの距離である。（50点）

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/thermo-2-original.png)

1. 微小検査体積の熱収支より $d^2T/dx^2+G/k=0$ を導け。（10点）
2. 左右の表面温度を $T_1,T_2$ として温度分布を求めよ。（10点）
3. 表面の熱流束 $q_1,q_2$ を求めよ。測定結果は $T_1-T_2=GL^2/(4k)$ であり、以降この条件を満たす。（10点）
4. $T_1$ を $T_f,h_1,G,L$ で、$T_2$ を $T_f,h_2,G,L$ でそれぞれ表せ。（10点）
5. $h_1$ と $h_2$ の関係を示せ。（10点）

#### 题目描述

由发热平板的一维定常能量守恒求温度分布。利用已测的表面温差，求两面热流、表面温度和两个对流换热系数的关系。

## **Kai**

### (1)

$+x$ 向きの熱流束を $q_x$ とする。断面積1、幅 $dx$ の検査体積では

$$
q_x(x)+G\,dx=q_x(x+dx),\qquad q_x=-k\frac{dT}{dx}.
$$

よって $dq_x/dx=G$ から $\boxed{d^2T/dx^2+G/k=0}$。

### (2)

2回積分し、$T(0)=T_1$、$T(L)=T_2$ を代入すると

$$
\boxed{T(x)=-\frac{G}{2k}x^2+
\left(\frac{T_2-T_1}{L}+\frac{GL}{2k}\right)x+T_1}.
$$

### (3)

与えられた温度差より

$$
q_x(x)=-kT'(x)=Gx-\frac{GL}{4}.
$$

したがって $+x$ 向きを正とした表面熱流束は

$$
\boxed{q_1=q_x(0)=-\frac{GL}{4},\qquad q_2=q_x(L)=\frac{3GL}{4}}.
$$

平板から流体への流出量を正に表すなら、左側は $GL/4$、右側は $3GL/4$ で、合計は全発熱量 $GL$ である。

### (4)

両表面の対流熱伝達条件は $h_1(T_1-T_f)=GL/4$、$h_2(T_2-T_f)=3GL/4$ なので

$$
\boxed{T_1=T_f+\frac{GL}{4h_1},\qquad T_2=T_f+\frac{3GL}{4h_2}}.
$$

### (5)

表面温度差の式から

$$
\frac{GL}{4}\left(\frac1{h_1}-\frac3{h_2}\right)=\frac{GL^2}{4k}.
$$

従って

$$
\boxed{\frac1{h_1}-\frac3{h_2}=\frac Lk},\qquad
\boxed{h_2=\frac{3kh_1}{k-Lh_1}}.
$$

正の熱伝達率に対しては $h_1<k/L$ かつ $h_2>3h_1$ である。
