---
sidebar_label: "2017年8月実施 熱力学 第1問"
tags:
  - Tohoku-University
  - Physics.Thermodynamics.Phase-Equilibrium
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 熱力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 三重点にある水を考える。固相，液相および気相における水の比体積をそれぞれ $v_s,v_l$ および $v_g$ とし，各相の比エントロピーをそれぞれ $s_s,s_l$ および $s_g$ とする。また，水の蒸発熱，融解熱および昇華熱をそれぞれ $r_v,r_f$ および $r_s$ とし，三重点の温度を $T_t$ とする。以下の問いに答えよ。

**(1)** $T_t,s_s,s_l$ および $s_g$ を用いて $r_v,r_f$ および $r_s$ を表せ。

**(2)** 次式が成り立つことを示せ。

$$
r_s=r_v+r_f
$$

**(3)** 比ギブス自由エネルギーの式を用いて，クラペイロン–クラウジウスの式を導け。

**(4)** 圧力–温度 $(p-T)$ 線図上の三重点近傍において，昇華曲線の傾き $\left(\dfrac{dp}{dT}\right)_s$ は蒸発曲線の傾き $\left(\dfrac{dp}{dT}\right)_v$ より大きいことを示せ。ただし，以下の式が成り立つとする。

$$
v_g\gg v_s,\qquad v_g\gg v_l,\qquad r_s>r_v
$$

#### 题目描述

1. 考虑处于三相点的水。设固相、液相和气相水的比体积分别为 $v_s,v_l,v_g$，各相的比熵分别为 $s_s,s_l,s_g$。水的汽化热、熔化热和升华热分别为 $r_v,r_f,r_s$，三相点的温度为 $T_t$。回答下列问题。

**(1)** 用 $T_t,s_s,s_l,s_g$ 表示 $r_v,r_f,r_s$。

**(2)** 证明下式成立。

$$
r_s=r_v+r_f
$$

**(3)** 利用比吉布斯自由能的表达式，推导克拉佩龙–克劳修斯方程。

**(4)** 证明在压力–温度 $(p-T)$ 图的三相点附近，升华曲线的斜率 $\left(\dfrac{dp}{dT}\right)_s$ 大于汽化曲线的斜率 $\left(\dfrac{dp}{dT}\right)_v$。设下列关系成立。

$$
v_g\gg v_s,\qquad v_g\gg v_l,\qquad r_s>r_v
$$

## **Kai**

### (1), (2)

可逆等温相変化の熱は $r=T\Delta s$ だから

$$
\boxed{r_v=T_t(s_g-s_l),\quad r_f=T_t(s_l-s_s),\quad r_s=T_t(s_g-s_s)}.
$$

エントロピー差を加えると

$$
r_v+r_f=T_t[(s_g-s_l)+(s_l-s_s)]=\boxed{r_s}.
$$

### (3)

比ギブス自由エネルギーを $g=h-Ts$ とする。$dh=Tds+vdp$ より

$$
dg=vdp-sdT.
$$

共存する相 $\alpha,\beta$ では $g_\alpha=g_\beta$。共存曲線に沿ってこの等式を微分すると

$$
v_\alpha dp-s_\alpha dT=v_\beta dp-s_\beta dT.
$$

潜熱 $r=T(s_\beta-s_\alpha)$ を用いて

$$
\boxed{\frac{dp}{dT}=\frac{s_\beta-s_\alpha}{v_\beta-v_\alpha}
=\frac r{T(v_\beta-v_\alpha)}}.
$$

### (4)

三重点で

$$
\begin{gathered}
\left(\frac{dp}{dT}\right)_s=\frac{r_s}{T_t(v_g-v_s)}\simeq\frac{r_s}{T_tv_g},\\
\left(\frac{dp}{dT}\right)_v=\frac{r_v}{T_t(v_g-v_l)}\simeq\frac{r_v}{T_tv_g}.
\end{gathered}
$$

与えられた気相比体積が支配的な近似では分母が共通となり、$r_s>r_v$ より

$$
\boxed{\left(\frac{dp}{dT}\right)_s>\left(\frac{dp}{dT}\right)_v}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 11ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
