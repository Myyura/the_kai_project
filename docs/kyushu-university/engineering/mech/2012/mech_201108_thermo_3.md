---
sidebar_label: "2011年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Cylindrical-Conduction
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2011年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

飽和蒸気の輸送管の外周を断熱材で覆う。図aで、断熱材の内半径 $R_i$ は管の外半径、外半径は $R_o$、蒸気温度は $T_s$、断熱材外表面温度は $T_o$、周囲空気温度は $T_a$ である。初期状態は $R_o=2R_i$、$T_s-T_o=(T_o-T_a)/2$ とする。定常・半径方向一次元熱流で、管内凝縮と管材の熱抵抗は無視できる。断熱材の熱伝導率と外表面の対流熱伝達率は一定とする。$R_i$ を固定して $R_o$ を増加させる場合について答えよ。（30点）

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-3-original.png)

1. $R_o$ を $2R_i$ より徐々に大きくしたときの放熱量の増減を論ぜよ。極小・極大があれば、そのときの比 $R_o/R_i$ を求め、その理由を説明せよ。（25点）
2. $R_o=3R_i$ としたとき、放熱量は $R_o=2R_i$ の何倍になるか。できるだけ簡単な式で表せ。（5点）

参考として、内部発熱のない円筒の半径方向一次元定常伝熱量は、内外半径 $R_1,R_2$、表面温度 $T_1,T_2$、熱伝導率 $k$、軸方向長さ $L$ を用いて

$$
Q=\frac{2\pi kL(T_1-T_2)}{\ln(R_2/R_1)}
$$

である。

![円筒熱伝導式の記号（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-3-reference.png)

#### 题目描述

在已知初始两段温差比的条件下，求增加圆管保温层厚度时的放热变化、临界半径，以及外半径从内半径的两倍变为三倍时的放热量比。

## **Kai**

### (1)

熱伝導率を $k$、対流熱伝達率を $h$、管長を $L$ とする。熱抵抗の和より

$$
Q(R_o)=\frac{2\pi L(T_s-T_a)}{\ln(R_o/R_i)/k+1/(hR_o)}.
$$

$R_o=2R_i$ における温度差の比は熱抵抗の比に等しいため

$$
\frac{\ln2/(2\pi kL)}{1/(4\pi hR_iL)}=\frac12
\quad\Longrightarrow\quad\frac{k}{hR_i}=4\ln2.
$$

$\alpha=R_o/R_i$ とおくと

$$
Q(\alpha)=\frac{2\pi kL(T_s-T_a)}{f(\alpha)},\qquad
f(\alpha)=\ln\alpha+\frac{4\ln2}{\alpha},\qquad
f'(\alpha)=\frac{\alpha-4\ln2}{\alpha^2}.
$$

$4\ln2\simeq2.773>2$ より、$2<\alpha<4\ln2$ で放熱量は増加し、$\alpha>4\ln2$ で減少する。従って

$$
\boxed{\frac{R_o}{R_i}=4\ln2\quad\text{で放熱量が極大}}.
$$

これは臨界断熱半径 $R_o=k/h$ に相当する。外半径の増加は伝導熱抵抗を増やす一方、外表面積の増加によって対流熱抵抗を減らす。臨界半径より小さい側では後者が、大きい側では前者が支配的である。

### (2)

$$
\boxed{\frac{Q(3R_i)}{Q(2R_i)}=\frac{f(2)}{f(3)}
=\frac{3\ln2}{\ln3+\frac43\ln2}
=\frac{9\ln2}{3\ln3+4\ln2}}.
$$
