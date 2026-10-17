---
sidebar_label: "2017年8月実施 力学 問題2"
tags:
  - Osaka-University
  - Physics.Mechanics.Newtons-Laws-of-Motion
---

# 大阪大学 工学研究科 機械工学専攻 2017年8月実施 力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

図のように、液滴が空気中を鉛直に落下しながら、静止している水滴を合わせて、その質量が増加していく場合を考える。液滴の質量の時間微分は落下する速さに比例するものとし、この比例定数を $\alpha$（$>0$）とする。時刻 $t$ における液滴の質量を $m$、落下する速さを $v$、運動量の大きさを $p$ とする。$t=0$ において $m=m_0$（$>0$）、$v=0$ とし、重力加速度の大きさを $g$ とするとき、以下の問いに答えなさい。ただし、液滴に働く空気抵抗は無視するものとする。

(1) 液滴の運動方程式を $p$ の時間微分を用いて表しなさい。

(2) $p$ の $m$ に関する微分 $dp/dm$ を $p,m$ を用いて表しなさい。

(3) 液滴の落下する速さ $v$ を $m$ の関数として表しなさい。

(4) 液滴が落下を始めてからある時間が経過した後、$m\gg m_0$ が成り立つものとする。このとき、小問 (3) の結果から $m_0/m$ を $0$ とおくことにより、液滴の落下する加速度の大きさを求めなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2018/mech_201708_mechanics_2_original_figure_1.png)

#### 题目描述

问题2（使用白色答题纸）

如图，一滴液滴在空气中竖直下落，同时吸收静止水滴，因而质量逐渐增加。假定其质量的时间导数与下落速率成正比，比例常数为 $\alpha$（$>0$）。时刻 $t$ 的质量、下落速率和动量大小分别记为 $m,v,p$。在 $t=0$ 时，$m=m_0$（$>0$）、$v=0$。重力加速度大小为 $g$，忽略液滴受到的空气阻力。回答下列问题。

(1) 用 $p$ 的时间导数表示液滴的运动方程。

(2) 用 $p,m$ 表示 $p$ 对 $m$ 的导数 $dp/dm$。

(3) 将液滴下落速率 $v$ 表示为 $m$ 的函数。

(4) 假定下落一段时间后满足 $m\gg m_0$。在 (3) 的结果中令 $m_0/m=0$，求此时液滴下落加速度的大小。

## **Kai**

### (1)

下向きを正とする。取り込まれる水滴の運動量は $0$ なので、液滴の運動量変化は重力の力積に等しい。

$$
\boxed{\frac{dp}{dt}=mg},\qquad
p=mv,\qquad \frac{dm}{dt}=\alpha v=\frac{\alpha p}{m}.
$$

### (2)

$m>m_0$ では $p>0$ であり、連鎖律より

$$
\boxed{\frac{dp}{dm}=\frac{dp/dt}{dm/dt}
=\frac{gm^2}{\alpha p}}.
$$

### (3)

$p\,dp=(g/\alpha)m^2\,dm$ を初期状態 $(m,p)=(m_0,0)$ から積分すると

$$
\frac{p^2}{2}=\frac{g}{3\alpha}(m^3-m_0^3).
$$

$p=mv$、$v\ge0$ より

$$
\boxed{v(m)=\sqrt{\frac{2g}{3\alpha}
\left(m-\frac{m_0^3}{m^2}\right)}
=\sqrt{\frac{2gm}{3\alpha}
\left[1-\left(\frac{m_0}{m}\right)^3\right]}}.
$$

### (4)

$v^2$ を $m$ で微分し、$\dot m=\alpha v$ を用いると

$$
\dot v=\frac{\alpha}{2}\frac{d(v^2)}{dm}
=\frac g3\left[1+2\left(\frac{m_0}{m}\right)^3\right].
$$

従って

$$
\boxed{\lim_{m_0/m\to0}\dot v=\frac g3}.
$$
