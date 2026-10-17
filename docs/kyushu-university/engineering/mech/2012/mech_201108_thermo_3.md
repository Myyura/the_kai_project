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

飽和蒸気の輸送管があり，周囲空気への放熱を低減するために，管外周に断熱材を巻いている。その状況を図aに示す。断熱材の外半径 $R_o$ は内半径（管外半径と同じ）$R_i$ の2倍で，蒸気温度 $T_s$ と断熱材外表面温度 $T_o$ の差は，断熱材外表面温度 $T_o$ と周囲空気温度 $T_a$ の差の半分である。管から周囲空気への熱の流れは定常で半径方向の一次元流れとみなしてよく，管内の凝縮と管材熱伝導の熱抵抗は無視できる。断熱材の内径 $R_i$ はそのままで，外径 $R_o$ を大きくする場合について，以下の各問いに答えよ。断熱材の熱伝導率は一定，断熱材から周囲への伝熱は熱伝達率一定の対流熱伝達によるとする。（30点）

**1)** 断熱材の外径 $R_o$ を元の内径の2倍より徐々に大きくする場合の放熱量の増減を論ぜよ。極小あるいは極大が生じる場合は，そのときの断熱材外径 $R_o$ と内径 $R_i$ の比率を求め，なぜ極小あるいは極大が生じるか，説明せよ。（25点）

**2)** 断熱材の外径 $R_o$ を内径 $R_i$ の3倍にしたとき，放熱量は元の内径の2倍の場合の何倍になるか。できるだけ簡単な式で表せ。（5点）

なお，円筒の内部発熱なし半径方向一次元定常熱伝導の伝熱量 $Q$ は，次式で表される。式中の記号の説明は図bに示す。この式を参照して良い。

$$
Q=\frac{2\pi kL(T_1-T_2)}{\ln(R_2/R_1)}
$$

図bの記号は，内面半径 $R_1$，外面半径 $R_2$，内面温度 $T_1$，外面温度 $T_2$，熱伝導率 $k$，軸方向長さ $L$ である。

![原題の図a：断熱材を巻いた管](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo-3-original.png)

![原題の図b：円筒の半径方向熱伝導](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_thermo_3_figure_2.png)

#### 题目描述

某饱和蒸汽输送管外包有绝热材料，用于减少向周围空气的散热，情况如图a所示。绝热材料外半径 $R_o$ 是内半径 $R_i$（等于管外半径）的2倍；蒸汽温度 $T_s$ 与绝热材料外表面温度 $T_o$ 之差，是 $T_o$ 与环境空气温度 $T_a$ 之差的一半。可将管道向周围空气的传热视为沿径向的一维稳态传热，忽略管内凝结及管壁导热的热阻。保持绝热材料内半径 $R_i$ 不变，增加其外半径 $R_o$，回答下列问题。绝热材料导热系数恒定，材料外表面通过换热系数恒定的对流向环境传热。（30分）

**1)** 当外半径 $R_o$ 从内半径的2倍逐渐增大时，讨论散热量的增减。如果存在极小值或极大值，求此时 $R_o/R_i$，并解释出现该极值的原因。（25分）

**2)** 当 $R_o$ 增大为 $R_i$ 的3倍时，散热量是原来 $R_o=2R_i$ 时的多少倍？尽量用简单的式子表示。（5分）

无内部热源的圆筒径向一维稳态导热量 $Q$ 可由下式表示，可以参考使用：

$$
Q=\frac{2\pi kL(T_1-T_2)}{\ln(R_2/R_1)}.
$$

图b中各符号的含义为：$R_1,R_2$ 分别是内、外表面半径，$T_1,T_2$ 分别是内、外表面温度，$k$ 为导热系数，$L$ 为轴向长度。

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
\begin{gathered}
Q(\alpha)=\frac{2\pi kL(T_s-T_a)}{f(\alpha)},\\
f(\alpha)=\ln\alpha+\frac{4\ln2}{\alpha},\\
f'(\alpha)=\frac{\alpha-4\ln2}{\alpha^2}.
\end{gathered}
$$

$4\ln2\simeq2.773>2$ より、$2<\alpha<4\ln2$ で放熱量は増加し、$\alpha>4\ln2$ で減少する。従って

$$
\boxed{\frac{R_o}{R_i}=4\ln2\quad\text{で放熱量が極大}}.
$$

これは臨界断熱半径 $R_o=k/h$ に相当する。外半径の増加は伝導熱抵抗を増やす一方、外表面積の増加によって対流熱抵抗を減らす。臨界半径より小さい側では後者が、大きい側では前者が支配的である。

### (2)

$$
\boxed{\begin{gathered}
\frac{Q(3R_i)}{Q(2R_i)}=\frac{f(2)}{f(3)}\\
=\frac{3\ln2}{\ln3+\frac43\ln2}\\
=\frac{9\ln2}{3\ln3+4\ln2}
\end{gathered}}.
$$
