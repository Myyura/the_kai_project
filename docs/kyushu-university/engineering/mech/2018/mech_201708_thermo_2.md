---
sidebar_label: "2017年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Internal-Forced-Convection
---

# 九州大学 工学府 機械系専攻 2017年8月実施 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問に答えよ。（55点）

図のように加熱区間をもつ円管内を流体が発達した層流で流れている。加熱区間（$0\le x$）では環状ヒータにより加熱を受ける。環状ヒータの内径，外径はそれぞれ $r_1,r_2$，熱伝導率は $k$ で，$q_v$ の一様体積発熱があり，外側は完全に断熱されている。軸方向の温度勾配は小さく，熱伝導は半径方向のみの定常一次元問題とみなせる。この時のヒータ部分の熱伝導方程式は，次式で与えられる。

$$
\frac1r\frac{\mathrm d}{\mathrm dr}\left(kr\frac{\mathrm dT}{\mathrm dr}\right)+q_v=0
\qquad(r_1\le r\le r_2)\tag{1}
$$

![原題の環状ヒータと円管内の流れ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_thermo-2-original.png)

一方，円管内では管内壁温度 $T_1$ と流体の混合平均温度 $T_m$ は $x$ 方向に変化するが，加熱開始点から十分離れた発達域の流体の半径方向温度分布は次式で与えられる。

$$
\begin{gathered}\frac{T-T_1}{T_m-T_1}=\frac6{11}\left[3-4\left(\frac r{r_1}\right)^2+\left(\frac r{r_1}\right)^4\right]
\\(0\le r\le r_1)\end{gathered}\tag{2}
$$

また，この場合の管内流体と環状ヒータ内壁との間の熱伝達においてヌセルト数 $Nu\,(=hd/k_l)$ は一定となる。ここで，$h$ は熱伝達率，$d$ は円管内径（$=2r_1$）である。ただし，熱伝達率 $h$ は，管内壁温度 $T_1$ と流体の混合平均温度 $T_m$ の差で定義されている。流体の定圧比熱，熱伝導率，質量流量をそれぞれ，$c_p,k_l,\dot m$ とする。このとき，以下の問に答えよ。

**(a)** $r_1$ における熱流束 $q_1$ を求め，$r_1,r_2,q_v$ で表せ。

**(b)** 熱伝導方程式(1)を（$k$ 一定として）解き，$r_1$ と $r_2$ における温度差 $T_2-T_1$ を求め，$r_1,r_2,q_v,k$ で表せ。

**(c)** 流体は入口温度 $T_{in}$ で流入する。加熱区間における流体の混合平均温度 $T_m(x)$ を求め，$r_1,r_2,q_v,c_p,\dot m,x,T_{in}$ で表せ。

**(d)** 円管内の温度分布の式(2)から，管内壁における流体側の温度勾配を計算することによりヌセルト数を求めよ。

#### 题目描述

回答下列问题。（55分）

如图，流体以充分发展的层流流经设有加热区的圆管，在加热区 $0\le x$ 内受到环形加热器的加热。环形加热器的内、外半径分别为 $r_1,r_2$，导热系数为 $k$，具有均匀体积发热量 $q_v$，外侧完全绝热。轴向温度梯度很小，导热可视为仅沿径向的一维稳态问题。加热器部分满足

$$
\frac1r\frac{\mathrm d}{\mathrm dr}\left(kr\frac{\mathrm dT}{\mathrm dr}\right)+q_v=0,
\qquad r_1\le r\le r_2.\tag{1}
$$

管内壁温度 $T_1$ 与流体混合平均温度 $T_m$ 沿 $x$ 方向变化，但距离加热起点足够远的充分发展区域内，流体径向温度分布为

$$
\begin{gathered}\frac{T-T_1}{T_m-T_1}=\frac6{11}\left[3-4\left(\frac r{r_1}\right)^2+\left(\frac r{r_1}\right)^4\right],
\\0\le r\le r_1.\end{gathered}\tag{2}
$$

此时管内流体与环形加热器内壁之间换热的努塞尔数 $Nu=hd/k_l$ 为常数。$h$ 为换热系数，$d=2r_1$ 为圆管内径。$h$ 按管内壁温度 $T_1$ 与流体混合平均温度 $T_m$ 之差定义。流体的定压比热、导热系数、质量流量分别为 $c_p,k_l,\dot m$。

**(a)** 求 $r_1$ 处的热流密度 $q_1$，用 $r_1,r_2,q_v$ 表示。

**(b)** 将 $k$ 视为常数，求解导热方程(1)，用 $r_1,r_2,q_v,k$ 表示 $r_1,r_2$ 处的温差 $T_2-T_1$。

**(c)** 流体以入口温度 $T_{in}$ 流入。求加热区内的混合平均温度 $T_m(x)$，用 $r_1,r_2,q_v,c_p,\dot m,x,T_{in}$ 表示。

**(d)** 根据温度分布式(2)，计算管内壁处流体侧的温度梯度，进而求努塞尔数。

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
\boxed{\begin{gathered}
h=\frac{24k_l}{11r_1},\\
\mathrm{Nu}=\frac{h(2r_1)}{k_l}=\frac{48}{11}\simeq4.36.
\end{gathered}}
$$
