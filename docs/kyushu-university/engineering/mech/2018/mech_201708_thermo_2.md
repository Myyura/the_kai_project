---
sidebar_label: "2018年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Internal-Forced-Convection
---

# 九州大学 工学府 機械系専攻 2018年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

円管内を流体が発達した層流で流れ、$0\le x$ の加熱区間には内半径 $r_1$、外半径 $r_2$、一定熱伝導率 $k$ の環状ヒータがある。ヒータは一様な体積発熱 $q_v$ をもち、外側は完全に断熱されている。軸方向温度勾配は小さく、ヒータの熱伝導は半径方向のみの定常一次元問題とみなせる。（55 点）

![環状ヒータと円管内の流れ（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/thermo-2-original.png)

ヒータの熱伝導方程式は

$$
\frac1r\frac{d}{dr}\left(kr\frac{dT}{dr}\right)+q_v=0
\qquad(r_1\le r\le r_2). \tag{1}
$$

管内壁温度 $T_1$ と流体の混合平均温度 $T_m$ は $x$ 方向に変化するが、加熱開始点から十分離れた発達域の温度分布は

$$
\frac{T-T_1}{T_m-T_1}
=\frac6{11}\left[3-4\left(\frac r{r_1}\right)^2
+\left(\frac r{r_1}\right)^4\right]
\qquad(0\le r\le r_1) \tag{2}
$$

である。流体の定圧比熱、熱伝導率、質量流量を $c_p,k_l,\dot m$ とする。Nusselt 数 $\mathrm{Nu}=hd/k_l$ は一定で、$d=2r_1$、熱伝達率 $h$ は $T_1-T_m$ で定義する。

(a) $r_1$ での熱流束 $q_1$ を $r_1,r_2,q_v$ で表せ。

(b) (1) を解き、$T_2-T_1$（$T_2=T(r_2)$）を $r_1,r_2,q_v,k$ で表せ。

(c) 入口温度を $T_{\mathrm{in}}$ とし、加熱区間の $T_m(x)$ を求めよ。

(d) (2) から流体側の壁面温度勾配を計算し、Nusselt 数を求めよ。

#### 题目描述

内外半径 $r_1,r_2$ 的环状加热器包围圆管，均匀体积发热 $q_v$，外壁绝热、导热率 $k$ 恒定，忽略加热器轴向导热。管内为充分发展层流，流体导热率 $k_l$、比热 $c_p$、质量流率 $\dot m$；径向温度分布由式 (2) 给出。求内壁热流密度、加热器两壁温差、混合平均温度随 $x$ 的变化，以及以直径 $2r_1$ 为特征长度的 Nusselt 数。

## **Kai**

### (a)

単位長さ当たりの発熱は $\pi q_v(r_2^2-r_1^2)$ で、すべて内壁から流体へ伝わる。流体へ向かう向きを正とすると

$$
\boxed{q_1=\frac{q_v(r_2^2-r_1^2)}{2r_1}.}
$$

$r$ の正方向を熱流束の正方向に選ぶ場合は、この値に負号を付ける。

### (b)

外壁の断熱条件 $T'(r_2)=0$ を使って (1) を積分すると

$$
T'(r)=\frac{q_v}{2k}\left(\frac{r_2^2}{r}-r\right).
$$

再び $r_1$ から $r_2$ まで積分して

$$
\boxed{T_2-T_1=
\frac{q_vr_2^2}{2k}\ln\frac{r_2}{r_1}
-\frac{q_v}{4k}(r_2^2-r_1^2).}
$$

### (c)

長さ $dx$ の流体の熱収支は

$$
\dot m c_p\frac{dT_m}{dx}=\pi q_v(r_2^2-r_1^2).
$$

$T_m(0)=T_{\mathrm{in}}$ より

$$
\boxed{T_m(x)=T_{\mathrm{in}}+
\frac{\pi q_v(r_2^2-r_1^2)}{\dot m c_p}x.}
$$

### (d)

(2) を $r$ で微分して壁面で評価すると

$$
\left.\frac{\partial T}{\partial r}\right|_{r=r_1}
=\frac{24}{11r_1}(T_1-T_m).
$$

流体に向かう熱流束は $q_1=k_l(\partial T/\partial r)_{r_1}=h(T_1-T_m)$ なので

$$
\boxed{h=\frac{24k_l}{11r_1},\qquad
\mathrm{Nu}=\frac{h(2r_1)}{k_l}=\frac{48}{11}\simeq4.36.}
$$
