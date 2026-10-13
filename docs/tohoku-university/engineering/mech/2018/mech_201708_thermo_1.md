---
sidebar_label: "2017年秋季 熱力学 第1問"
tags:
  - Tohoku-University
  - Physics.Thermodynamics.Phase-Equilibrium
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 熱力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

三重点にある水を考える。固相・液相・気相の比体積を $v_s,v_l,v_g$、比エントロピーを $s_s,s_l,s_g$、蒸発熱・融解熱・昇華熱を $r_v,r_f,r_s$、三重点温度を $T_t$ とする。

1. $T_t,s_s,s_l,s_g$ を用いて $r_v,r_f,r_s$ を表せ。
2. $r_s=r_v+r_f$ を示せ。
3. 比ギブス自由エネルギーを用いてクラペイロン–クラウジウスの式を導け。
4. $p$–$T$ 線図上、三重点付近で昇華曲線の傾きが蒸発曲線の傾きより大きいことを示せ。ただし $v_g\gg v_s,v_l$、$r_s>r_v$ とする。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

三相点处水的固、液、气比体积为 $v_s,v_l,v_g$，比熵为 $s_s,s_l,s_g$，汽化、熔化、升华潜热为 $r_v,r_f,r_s$，温度为 $T_t$。（1）用温度和熵表示各潜热。（2）证明 $r_s=r_v+r_f$。（3）从比吉布斯自由能推导克拉珀龙–克劳修斯关系。（4）利用 $v_g\gg v_s,v_l$ 及 $r_s>r_v$，说明三相点附近升华曲线在 $p$–$T$ 图上的斜率大于汽化曲线。

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
\left(\frac{dp}{dT}\right)_s=\frac{r_s}{T_t(v_g-v_s)}\simeq\frac{r_s}{T_tv_g},\qquad
\left(\frac{dp}{dT}\right)_v=\frac{r_v}{T_t(v_g-v_l)}\simeq\frac{r_v}{T_tv_g}.
$$

与えられた気相比体積が支配的な近似では分母が共通となり、$r_s>r_v$ より

$$
\boxed{\left(\frac{dp}{dT}\right)_s>\left(\frac{dp}{dT}\right)_v}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 11ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
