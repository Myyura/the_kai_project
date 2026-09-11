---
sidebar_label: '2014年8月実施 物理学2'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Rotating-Conductor-Motional-Electromotive-Force
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Physics.Electromagnetism.Magnetic-Force
---

# 東京大学 工学系研究科 2014年8月実施 物理学2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空中で、長さ $a$ の直線状導体棒 OP が端 O を中心に $xy$ 平面内で角速度 $\omega$ で回転する。一様な静磁束密度 $B_z$ が $+z$ 方向に加えられている。図の回転方向を正（$+z$ 軸まわり）とし、回転軸まわりの慣性モーメントを $J$ とする。棒の太さ、電気抵抗、すべての摩擦を無視する。

### I

棒が一定角速度 $\omega_c$ で回転する。

1. 単位時間に棒が通過する面積を求めよ。
2. この結果を用いて両端 O、P 間の電位差 $V$ を求めよ。
3. 棒内の電子が受ける電磁気力をすべて挙げ、各力の方向を説明せよ。

### II

中心 O、半径 $a$ の無抵抗の導体リングを置き、棒の端 P が常に接触するようにする。リングと O の間に抵抗 $R$ を接続する。棒以外の回路電流が作る磁場は無視できる。

1. 一定角速度 $\omega_c$ を保つため、外部から加える軸まわりのトルク $T_c$ を求めよ。
2. 棒が回転するときの棒周囲の磁力線を、P から O を見た図で描け。
3. $t=0$ で角速度を $\omega_0$ とし、その後は外部トルクを加えない。角速度 $\omega(t)$ を求めて図示せよ。

### III

II の回路にインダクタンス $L$ を直列に追加する。

1. 外部トルクがない場合に $\omega$ が満たす微分方程式を書け。
2. $\omega$ が振動的に振る舞うための $L$ の条件を求めよ。

![一様磁場中の回転導体棒と抵抗・コイル回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/kyotsu_201408_phys_2_rod_audited.svg)

#### 题目描述

真空中有一根长度 $a$ 的直导体棒 OP，以端点 O 为中心在 $xy$ 平面内按图示方向绕 $+z$ 轴以角速度 $\omega$ 转动。沿 $+z$ 方向施加均匀静磁场，磁感应强度为 $B_z$。棒绕该轴的转动惯量为 $J$，忽略棒的粗细、电阻及所有摩擦。

### I

导体棒以恒定角速度 $\omega_c$ 转动。

1. 求导体棒单位时间扫过的面积。
2. 利用上问结果求 O、P 两端的电势差 $V$。
3. 列出棒内电子所受的全部电磁力，并说明各力方向。

### II

设置圆心 O、半径 $a$、电阻为零的导体环，使棒端 P 始终与其接触。在导体环与 O 之间接入电阻 $R$。忽略棒以外电流所产生的磁场。

1. 为保持恒定角速度 $\omega_c$，求须从外部施加的转矩 $T_c$。
2. 棒旋转时，以从 P 朝 O 观察的视角画出棒周围的磁感线。
3. 令 $t=0$ 时角速度为 $\omega_0$，之后不施加外力矩。求 $\omega(t)$ 并绘图。

### III

在 II 的回路中串联电感 $L$。

1. 不施加外力矩时，写出角速度 $\omega$ 满足的微分方程。
2. 求 $\omega$ 呈振荡行为时电感 $L$ 应满足的条件。

## **Kai**

### I

**1–2.** 単位時間に掃く面積と運動起電力は、

$$
\boxed{\frac{dS}{dt}=\frac12a^2\omega_c,\qquad
V\equiv V_P-V_O=B_z\frac{dS}{dt}=\frac12B_za^2\omega_c.}
$$

P の電位が O より高い。

**3.** 電子の電荷を $-e$（$e>0$）とする。棒の回転速度は接線方向であり、$\boldsymbol v\times\boldsymbol B$ は O→P 方向なので、磁気力 $-e\boldsymbol v\times\boldsymbol B$ は **P→O** 方向である。電荷分離で生じる電場は P→O 方向で、電気力 $-e\boldsymbol E$ は **O→P** 方向となる。開放棒では両者がつり合う。

### II

**1.** $K=B_za^2/2$ とおく。電流は棒内を O→P に流れ、その大きさは $I=K\omega_c/R$。棒の微小部分に働く制動トルクを積分して、

$$
T_{\rm mag}=-\int_0^a rIB_z\,dr=-KI.
$$

したがって、必要な外部トルクは回転方向であり、

$$
\boxed{T_c=\frac{K^2}{R}\omega_c=\frac{B_z^2a^4}{4R}\omega_c.}
$$

**2.** P から O を見ると電流は手前向き（$\odot$）。その磁場は反時計回りで、上向きの外部磁場と重ね合わせると棒の右側で強まり、左側で弱まる。

![P から O を見た磁力線と角速度の減衰](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/kyotsu_201408_phys_2_fields_audited.svg)

**3.** 回転運動方程式は $J\dot\omega=-K^2\omega/R$。よって、

$$
\boxed{\omega(t)=\omega_0e^{-t/\tau},\qquad
\tau=\frac{JR}{K^2}=\frac{4JR}{B_z^2a^4}.}
$$

$t=0$ の $\omega_0$ から単調に零へ近づく。

### III

**1.** 回転運動方程式と回路方程式は、

$$
J\dot\omega=-KI,\qquad L\dot I+RI=K\omega.
$$

$I$ を消去すると、

$$
\boxed{\ddot\omega+\frac RL\dot\omega+\frac{B_z^2a^4}{4JL}\omega=0.}
$$

**2.** 特性方程式の根が複素数となる条件から、

$$
\left(\frac RL\right)^2-\frac{B_z^2a^4}{JL}<0
\quad\Longleftrightarrow\quad
\boxed{L>\frac{JR^2}{B_z^2a^4}.}
$$

