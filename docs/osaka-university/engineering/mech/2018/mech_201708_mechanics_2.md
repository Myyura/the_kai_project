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

液滴が空気中を鉛直に落下しながら、静止している水滴を取り込み、質量を増していく。液滴の質量の時間微分は落下の速さに比例し、比例定数を $\alpha>0$ とする。時刻 $t$ の質量を $m$、落下の速さを $v$、運動量の大きさを $p$ とする。初期条件は $t=0$ で $m=m_0>0,v=0$。重力加速度の大きさを $g$ とし、空気抵抗は無視する。

1. 運動方程式を $p$ の時間微分で表せ。
2. $dp/dm$ を $p,m$ を用いて表せ。
3. 落下の速さ $v$ を $m$ の関数として表せ。
4. 十分に時間が経ち $m\gg m_0$ となったとする。(3) で $m_0/m\to0$ とすることにより、このときの落下加速度の大きさを求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2018/mech_201708_mechanics_2-question-fig1.png)

#### 题目描述

液滴在空气中竖直下落，吸收原本静止的水滴而增重，质量增长率与下落速率成正比，比例常数为 $\alpha>0$。记质量为 $m$、下落速率为 $v$、动量大小为 $p$，初始时 $m=m_0>0,v=0$。重力加速度为 $g$，忽略空气阻力。

1. 用动量的时间导数写出运动方程。
2. 用 $p,m$ 表示 $dp/dm$。
3. 求速率 $v$ 关于质量 $m$ 的函数。
4. 在长时间后 $m\gg m_0$ 时，利用上一问中 $m_0/m\to0$ 的极限求下落加速度。

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
