---
sidebar_label: '2017年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Young-Double-Slit-Interference
  - Physics.Quantum-Mechanics.De-Broglie-Wavelength
  - Physics.Mechanics.Lorentz-Transformation-and-Relativistic-Energy
---

# 東京大学 工学系研究科 2017年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

光を一つのスリットに通し、さらに間隔 $d$ の二重スリットを通して、距離 $L$ のスクリーンに投影する。スリット幅は波長 $\lambda$ より十分小さく、$L$ は $d,\lambda$ より十分大きいとする。

1. 波長 $\lambda$ の可視単色光について、スクリーン上に現れる干渉縞の間隔を $\lambda,d,L$ で表せ。
2. 単色光の場合と白色光の場合について、干渉縞の様子を説明せよ。

![二重スリットとスクリーンの配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/kyotsu_201708_phys_4_diagram_audited.svg)

### II

電子の運動量の大きさを $p$ とすると、波長は $\lambda=h/p$ である。質量 $m$、電荷の大きさ $e$ の電子を、静止状態から電位差 $V$ で加速する。相対論的効果は無視する。

1. 電子の波長を $h,m,e,V$ で表せ。
2. 波長を $2.0\,\text{Å}$ とするために必要な $V$ を求めよ。$h=6.6\times10^{-34}\,\mathrm{J\,s}$、$m=9.1\times10^{-31}\,\mathrm{kg}$、$e=1.6\times10^{-19}\,\mathrm C$ とする。

### III

慣性系 S′ が S に対して $x$ 軸の正方向に速度 $v$ で動く。対応する座標軸は平行で、原点が一致する瞬間を両系で $t=t'=0$ とする。座標変換を $x'=\alpha(x-vt)$、$y'=y$、$z'=z$ とし、逆変換を $x=\alpha(x'+vt')$ とする。$\alpha>0$ とする。

1. 原点から $x$ 軸正方向へ発した光の速度が両系で $c$ となることから、$\alpha$ を求めよ。
2. 静止質量 $m_0$、静止エネルギー $m_0c^2$ の電子を静止状態から電位差 $V$ で加速するとき、波長と速度を相対論的に求めよ。運動量 $p=\alpha m_0v$、エネルギー $E$ の関係 $E^2=m_0^2c^4+p^2c^2$ を用いてよい。

#### 题目描述

I. 光先通过单缝，再通过间距为 $d$ 的双缝，在距离 $L$ 的屏上形成干涉条纹。缝宽远小于波长 $\lambda$，$L\gg d,\lambda$。

1. 对波长为 $\lambda$ 的可见单色光，用 $\lambda,d,L$ 求条纹间距。
2. 描述单色光和白光的条纹特征。

II. 电子德布罗意波长为 $\lambda=h/p$。质量为 $m$、电荷量绝对值为 $e$ 的电子从静止经电势差 $V$ 加速，忽略相对论效应。

1. 用 $h,m,e,V$ 求波长。
2. 求获得 $2.0\,\text{Å}$ 波长所需电压。取 $h=6.6\times10^{-34}\,\mathrm{J\,s}$、$m=9.1\times10^{-31}\,\mathrm{kg}$、$e=1.6\times10^{-19}\,\mathrm C$。

III. S′ 相对 S 以速度 $v$ 沿 $+x$ 方向运动，对应坐标轴平行，以两系原点重合时为各自的 $t=t'=0$。设 $x'=\alpha(x-vt)$、$y'=y$、$z'=z$，逆变换为 $x=\alpha(x'+vt')$，$\alpha>0$。

1. 利用沿 $+x$ 方向传播的光在两系中速度均为 $c$，求 $\alpha$。
2. 静止质量为 $m_0$、静止能量为 $m_0c^2$ 的电子从静止经电势差 $V$ 加速，求其相对论波长和速度。可用 $p=\alpha m_0v$、$E^2=m_0^2c^4+p^2c^2$。

## **Kai**

### I

#### I.1

スクリーン中央からの距離を $X$ とすると、近軸領域の光路差は $d\sin\theta\simeq dX/L$。明線の条件は $dX/L=j\lambda$（$j\in\mathbb Z$）だから

$$
\boxed{\Delta X=\frac{\lambda L}{d}}.
$$

#### I.2

単色光では同じ色の明線と暗線がほぼ等間隔に並ぶ。白色光では中央で全波長が強め合うため白い明線となり、その両側に色のついた縞が現れる。同じ次数なら波長の短い紫側が内側、赤側が外側であり、遠方では異なる次数・波長の縞が重なって不鮮明になる。

### II

#### II.1–II.2

$p^2/(2m)=eV$ より

$$
\boxed{\lambda=\frac{h}{\sqrt{2meV}}}.
$$

$2.0\,\text{Å}=2.0\times10^{-10}\,\mathrm m$ なので

$$
\boxed{V=\frac{h^2}{2me\lambda^2}
=\frac{(6.6\times10^{-34})^2}{2(9.1\times10^{-31})(1.6\times10^{-19})(2.0\times10^{-10})^2}
\simeq37\,\mathrm V}.
$$

### III

#### III.1

光の軌跡 $x=ct$、$x'=ct'$ を代入すると

$$
ct'=\alpha(c-v)t,\qquad ct=\alpha(c+v)t'.
$$

両式を掛けて $c^2=\alpha^2(c^2-v^2)$ だから

$$
\boxed{\alpha=\frac1{\sqrt{1-v^2/c^2}}}.
$$

#### III.2

エネルギー保存から $E=m_0c^2+eV$。よって

$$
p=\frac1c\sqrt{(m_0c^2+eV)^2-m_0^2c^4}
=\frac1c\sqrt{eV(eV+2m_0c^2)},
$$

$$
\boxed{\lambda=\frac{hc}{\sqrt{eV(eV+2m_0c^2)}}},\qquad
\boxed{v=c\sqrt{1-\left(\frac{m_0c^2}{m_0c^2+eV}\right)^2}}.
$$

