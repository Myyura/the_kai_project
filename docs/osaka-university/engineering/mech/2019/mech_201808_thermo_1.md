---
sidebar_label: "2019年度 問題1（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Exergy-and-Maximum-Useful-Work
---

# 大阪大学 工学研究科 機械工学専攻 2019年度 熱工学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

高温熱源と低温熱源の間で作動する熱機関について答えよ。

1. 質量 $M\,[\mathrm{kg}]$、一定の定圧比熱 $c\,[\mathrm{kJ/(kg\cdot K)}]$ がともに等しい二つの熱源があり、初期温度は $T_1>T_2$ である。外界との熱交換なしに両者の間で可逆熱機関を作動させ、同じ温度になるまでに取り出せる仕事 $W\,[\mathrm{kJ}]$ を求めよ。熱源の体積は一定で変化しない。
2. 大気圧下の質量 $M$、初期温度 $T_i$ の氷を低温熱源とし、温度 $T_a$ の無限量の水を高温熱源とする熱機関を、理論最大効率で作動させる。低温熱源が $T_a$ の水になるまでに取り出せる仕事 $W$ を求めよ。氷の融解温度を $T_m\,(T_i<T_m<T_a)$、氷の定圧比熱を $c_i$、融解潜熱を $h_i\,[\mathrm{kJ/kg}]$、水の定圧比熱を $c_w$ とし、いずれも一定とする。氷・水の体積は変化しないものとする。

#### 题目描述

(1)两有限热源质量均为 $M$、恒定比热均为 $c$，初温 $T_1>T_2$，体积不变且不与外界换热。可逆热机工作至两者同温，求输出功。(2)以初温 $T_i$、质量 $M$ 的冰为冷源，以温度 $T_a$ 的无限量水为热源，热机始终按理论最大效率运行，直到冷源成为 $T_a$ 的水。已知融点 $T_m$ 满足 $T_i<T_m<T_a$，冰、水比热为 $c_i,c_w$，融解潜热为 $h_i$，均为常数，忽略体积变化，求总输出功。热容和潜热使用kJ单位。

## **Kai**

### (1)

終温度を $T_f$ とする。可逆かつ外界と断熱なので全エントロピー変化は零である。

$$
Mc\log\frac{T_f}{T_1}+Mc\log\frac{T_f}{T_2}=0
\quad\Longrightarrow\quad T_f=\sqrt{T_1T_2}.
$$

外部への仕事は両熱源のエネルギー減少に等しいから

$$
\boxed{W=Mc\left(T_1+T_2-2\sqrt{T_1T_2}\right)
=Mc\left(\sqrt{T_1}-\sqrt{T_2}\right)^2\ [\mathrm{kJ}]}.
$$

### (2)

低温熱源の温度が $T$ のとき、これに流入する熱を $\delta Q_L$ とする。可逆熱機関では $\delta Q_H/T_a=\delta Q_L/T$ なので

$$
\delta W=\left(\frac{T_a}{T}-1\right)\delta Q_L.
$$

氷の昇温、融解、水の昇温の三段階を足し合わせると

$$
W=Mc_i\int_{T_i}^{T_m}\left(\frac{T_a}{T}-1\right)dT
+Mh_i\left(\frac{T_a}{T_m}-1\right)
+Mc_w\int_{T_m}^{T_a}\left(\frac{T_a}{T}-1\right)dT.
$$

したがって

$$
\boxed{\begin{aligned}
W=M\bigg\{&c_i\left[T_a\log\frac{T_m}{T_i}-(T_m-T_i)\right]
+h_i\left(\frac{T_a}{T_m}-1\right)\\
&+c_w\left[T_a\log\frac{T_a}{T_m}-(T_a-T_m)\right]\bigg\}\ [\mathrm{kJ}].
\end{aligned}}
$$
