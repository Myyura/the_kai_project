---
sidebar_label: '2016年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
---

# 東京大学 工学系研究科 2016年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半径 $r$ の半円形導体板 A、B を、真空中で距離 $z_0$ を隔てて平行に置く。真空の誘電率を $\varepsilon_0$ とする。上側の A は、その直径の中点 $\mathrm O_A$ を通る板に垂直な軸のまわりに回転できる。B の直径の中点を $\mathrm O_B$ とし、両中点は同じ鉛直線上にある。両板の直線状の縁のなす回転角を $\theta$ とし、重なりがないときを $\theta=0$ とする。板に垂直な電場のみを考え、端効果を無視する。

![半円形回転電極と誘電体の配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_2_plates_audited.svg)

### I

$\theta=\pi/2$ として、A に自由電荷 $Q$、B に $-Q\ (Q>0)$ を与える。

1. 重なり部分の電場の強さ $E$ を求めよ。
2. B を基準とする A の電位 $V_1$ を求めよ。
3. 電極間の静電容量 $C$ を求めよ。
4. 電荷を保ったまま $\theta$ を $\pi/10$ から $19\pi/10$ までゆっくり増加させる。B に対する A の電位 $V(\theta)$ を求め、そのグラフを描け。

### II

A、B の電荷を零に戻し、$\theta=\pi$ とする。B の上に半径 $r$、厚さ $z_0/2$、比誘電率 $k$ の半円形誘電体 C を密着させる。B のみを接地し、C の上面に自由電荷を面密度 $\sigma\ (\sigma>0)$ で固定する。C は分極し、その内部の電場が弱まる。

1. $k=2$ とし、電気力線と電束線を別々の正面図に描け。線の密度はそれぞれ $\varepsilon_0E,D$ の値を反映させよ。
2. A、B の自由電荷 $Q_A,Q_B$ を求めよ。

### III

II に続いて A も接地する。

1. A、B に誘起される自由電荷を $Q'_A,Q'_B$ とする。C 上面と A の間の電場の強さ $E'_A$、C 内部の電場の強さ $E'_B$ を、それぞれ $Q'_A,Q'_B$ で表せ。
2. $E'_A,E'_B$ の関係を導き、$Q'_A,Q'_B$ を求めよ。
3. $k=2$ として、II.1 と同様に電気力線・電束線の正面図を別々に描け。
4. 次に $\theta=0$ とし、A を一定角速度 $\omega>0$ でゆっくり回転させる。$0<\theta<2\pi$ の間、A に流入する電流 $I(t)$ を求めよ。

#### 题目描述

两块半径为 $r$ 的半圆形导体板 A、B 在真空中平行放置，间距为 $z_0$，真空介电常数为 $\varepsilon_0$。上板 A 可绕过其直径中点 $\mathrm O_A$ 且垂直于板的轴转动。下板直径中点为 $\mathrm O_B$，两中点在同一铅垂线上。以两直线边之间的转角为 $\theta$，两板无重叠时 $\theta=0$。只考虑垂直于板的电场，忽略边缘效应。

I. 令 $\theta=\pi/2$，A、B 分别带自由电荷 $Q,-Q\ (Q>0)$。

1. 求重叠区域电场强度的大小 $E$。
2. 求 A 相对于 B 的电位 $V_1$。
3. 求两电极间电容 $C$。
4. 保持电荷不变，将 $\theta$ 从 $\pi/10$ 缓慢增加到 $19\pi/10$。求 A 相对于 B 的电位 $V(\theta)$，并画图。

II. 将 A、B 的电荷清零，令 $\theta=\pi$。将半径 $r$、厚度 $z_0/2$、相对介电常数 $k$ 的半圆形介质 C 紧贴 B 放置。只将 B 接地，在 C 上表面固定面密度为 $\sigma>0$ 的自由电荷。介质极化，内部电场减弱。

1. 取 $k=2$，分别画出电场线和电位移线的正视图，线密度应反映 $\varepsilon_0E$ 和 $D$ 的大小。
2. 求 A、B 上的自由电荷 $Q_A,Q_B$。

III. 在 II 的基础上也将 A 接地。

1. 以两极板诱导的自由电荷为 $Q'_A,Q'_B$，分别用它们表示 C 上表面与 A 之间、以及 C 内部的电场强度大小 $E'_A,E'_B$。
2. 推导 $E'_A,E'_B$ 的关系并求 $Q'_A,Q'_B$。
3. 取 $k=2$，按 II.1 要求分别画电场线、电位移线正视图。
4. 然后令 $\theta=0$，以恒定角速度 $\omega>0$ 缓慢转动 A。在 $0<\theta<2\pi$ 期间，求流入 A 的电流 $I(t)$。

## **Kai**

### I

1. 重なり面積は $\pi r^2/4$ なので、Gauss の法則より、

$$
\boxed{E=\frac{4Q}{\pi\varepsilon_0r^2}}\quad\text{（A から B へ）}.
$$

2–3. $V_1=Ez_0$、$C=Q/V_1$ より、

$$
\boxed{V_1=\frac{4Qz_0}{\pi\varepsilon_0r^2}},\qquad
\boxed{C=\frac{\pi\varepsilon_0r^2}{4z_0}}.
$$

4. $s(\theta)=\min(\theta,2\pi-\theta)$ と置くと、重なり面積は $r^2s(\theta)/2$。したがって、

$$
\boxed{V(\theta)=\frac{2Qz_0}{\varepsilon_0r^2}
\begin{cases}
1/\theta,&\pi/10\le\theta\le\pi,\\
1/(2\pi-\theta),&\pi\le\theta\le19\pi/10.
\end{cases}}
$$

$\theta=\pi$ で最小値 $2Qz_0/(\pi\varepsilon_0r^2)$ を取り、$\pi$ の左右で対称である。

![回転角と電位の関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_2_voltage_audited.svg)

### II

全半円の面積を $S=\pi r^2/2$ とする。A は孤立しており全電荷が零なので、端効果を無視する条件下で A と C の間の電場は零。C 内では下向きに

$$
D=\sigma,\qquad E=\frac{\sigma}{k\varepsilon_0}.
$$

したがって、

$$
\boxed{Q_A=0},\qquad\boxed{Q_B=-\sigma S=-\frac{\pi r^2\sigma}{2}}.
$$

$k=2$ では C 内の電束線の密度は電気力線（$\varepsilon_0E$）の密度の 2 倍であり、両者とも下向きである。

### III

1. C 上面から A に向かう上向き電場と、C 内の下向き電場の大きさをそれぞれ $E'_A,E'_B$ とする。電極表面の境界条件より、

$$
\boxed{E'_A=-\frac{Q'_A}{\varepsilon_0S}},\qquad
\boxed{E'_B=-\frac{Q'_B}{k\varepsilon_0S}}.
$$

2. A、B の電位が等しく、両層の厚さも等しいので $E'_A=E'_B$。C 上面では

$$
\varepsilon_0E'_A+k\varepsilon_0E'_B=\sigma.
$$

よって

$$
E'_A=E'_B=\frac{\sigma}{(k+1)\varepsilon_0},\qquad
\boxed{Q'_A=-\frac{\sigma S}{k+1}},\qquad
\boxed{Q'_B=-\frac{k\sigma S}{k+1}}.
$$

3. 電気力線の密度は上下で等しい。電束線は、下側（C 内）が上側の $k=2$ 倍である。線はいずれも C 上面の正電荷から各電極へ向かう。

![II と III の電気力線・電束線（線密度の比較）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_2_field_lines_audited.svg)

4. 回転中、A の電荷は重なり面積に比例し、

$$
Q'_A(\theta)=-\frac{\sigma r^2}{2(k+1)}s(\theta).
$$

$\theta=\omega t$、$I=dQ'_A/dt$ より、

$$
\boxed{I(t)=
\begin{cases}
-\dfrac{\sigma r^2\omega}{2(k+1)},&0<t<\pi/\omega,\\[4pt]
+\dfrac{\sigma r^2\omega}{2(k+1)},&\pi/\omega<t<2\pi/\omega.
\end{cases}}
$$

端効果を無視したモデルでは $t=\pi/\omega$ で電流が不連続に切り替わる。

